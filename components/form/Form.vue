<template>
  <form :id="id" @submit.prevent="submit" novalidate :inline="inline">
    <slot></slot>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  maxLength,
  maxValue,
  minLength,
  minValue,
  required
} from 'vuelidate/lib/validators'

const defaultMessages = {
  en: {
    rule: {
      invalid: 'Invalid Field',
      required: 'Required Field',
      requireTrue: 'Must be checked',
      minAge: 'Must be at least {min} years old',
      minLength: 'Must be at least {min} characters',
      maxLength: 'Must be less than {max} characters',
      minValue: 'Must at least {min}',
      maxValue: 'Must less than {max}',
      notInFuture: 'Must not be in the future',
      notInPast: 'Must not be in the past',
      password: 'Does Not Meet Password Requirements',
      sameAsPassword: 'Passwords Do Not Match'
    }
  }
}

export default {
  mixins: [validationMixin],
  provide() {
    return {
      form: {
        applyValidator: this.applyValidator,
        registerInput: this.registerInput,
        deregisterInput: this.deregisterInput,
        errorMessage: this.errorMessage,
        defaultErrorMessage: this.defaultErrorMessage,
        updateInput: this.updateInput
      }
    }
  },
  data() {
    return {
      data: {}
    }
  },

  fieldMap: {},

  props: {
    id: {
      type: String
    },
    inline: {
      type: Boolean,
      default: false
    },
    messages: {
      type: Object
    },
    validations: {
      type: Object
    }
  },

  computed: {
    valid() {
      return !this.$v.$invalid
    },

    invalid() {
      return !this.valid
    }
  },

  created() {
    if (!this.$t) {
      this.$t = function(key, params) {
        let value = ''

        if (this.messages && this.messages.en) {
          value = getMessageValue(key, this.messages.en, params)
        }

        if (!value) {
          value = getMessageValue(key, defaultMessages.en, params)
        }

        return value || ''
      }
    }
  },

  validations() {
    const validations = {}

    Object.values(this.$options.fieldMap).forEach((field) => {
      const fieldValidations = {}
      field.applyValidations(fieldValidations)

      if (this.validations && this.validations[field.id]) {
        for (const key of Object.keys(this.validations[field.id])) {
          this.applyValidator(
            fieldValidations,
            field,
            key,
            this.validations[field.id][key]
          )
        }
      }

      validations[field.id] = fieldValidations
    })

    return { data: validations }
  },

  methods: {
    submit(event) {
      console.log('submit!', this.$options)

      Object.values(this.$options.fieldMap).forEach((field) => {
        const fieldModel = this.$v.data[field.id]
        fieldModel.$touch()
        field.setValidity(!fieldModel.$invalid, parseErrors(fieldModel))
      })

      if (this.valid) {
        this.$emit('submit', event)
      } else {
        this.$nextTick(() => {
          const invalidElement = document.querySelector('.is-invalid')

          if (invalidElement) {
            invalidElement.scrollIntoView({
              block: 'center'
            })
          }
        })
      }
    },

    applyValidator(target, field, validatorId, validator) {
      const convertedValidator = convertValidator(validatorId, validator)

      if (convertedValidator) {
        target[validatorId] = convertedValidator
      }
    },

    errorMessage(field, error) {
      return (
        this.$t(`rule.${error.id}`, error.params) ||
        this.$t('rule.invalid', error.params)
      )
    },

    registerInput(input) {
      this.$options.fieldMap[input.id] = input
      this.$set(this.data, input.id, input.value)

      input.$watch('value', (value) => {
        this.data[input.id] = value
      })

      input.$on('validate', () => {
        console.log('this.$v', this.$v)
        const fieldModel = this.$v.data[input.id]

        if (fieldModel) {
          fieldModel.$touch()

          input.setValidity(!fieldModel.$invalid, parseErrors(fieldModel))
        }
      })

      input.setValidity(true)
    },

    deregisterInput(input) {
      delete this.$options.fieldMap[input.id]
    },

    updateInput(input) {}
  }
}

function convertValidator(validatorId, validator) {
  if (typeof validator === 'function') {
    return validator
  }

  switch (validatorId) {
    case 'required': {
      return validator ? required : null
    }
    case 'requireTrue': {
      return validator ? (value) => value === true : null
    }
    case 'minLength': {
      return minLength(validator)
    }
    case 'maxLength': {
      return maxLength(validator)
    }
    case 'minValue': {
      return minValue(validator)
    }
    case 'maxValue': {
      return maxValue(validator)
    }
    default: {
      return null
    }
  }
}

// translate errors from vuelidate into our own error structure
function parseErrors(fieldModel) {
  const errors = {}

  for (const key of Object.keys(fieldModel)) {
    if (key[0] === '$') continue
    if (fieldModel[key] !== false) continue

    errors[key] = {
      id: key,
      value: fieldModel.$model,
      params: fieldModel.$params[key] || {}
    }
  }

  return errors
}

function interpolateValue(value, params) {
  return value.replace(/{\s*([a-zA-Z0-9_]+)\s*}/, function(match, name) {
    return params[name] || ''
  })
}

function getMessageValue(key, obj, params) {
  if (!obj || !key) {
    return null
  }

  const path = key.split('.')

  for (let i = 0; i < path.length - 1; i++) {
    obj = obj[path[i]]

    if (!obj) {
      return null
    }
  }

  let value = obj[path[path.length - 1]]

  if (value && value.includes('{')) {
    value = interpolateValue(value, params)
  }

  return value
}
</script>
