<template>
  <div
    class="form-group flex flex-col space-y-3"
    v-bind="$attrs"
    :class="{ 'has-error': invalid }"
  >
    <label :for="id" :class="labelClass">{{ label }}</label>
    <slot />

    <div v-if="invalid" class="invalid-feedback text-blue-light">
      {{ validationMessage }}
    </div>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      group: {
        deregisterInput: this.deregisterInput,
        registerInput: this.registerInput,
        updateInput: this.updateInput
      }
    }
  },
  inject: {
    form: { from: 'form' }
  },

  props: {
    label: String,
    labelClass: String
  },

  data() {
    return {
      fieldModel: null
    }
  },

  computed: {
    id() {
      if (!this.fieldModel) {
        return ''
      }

      return this.fieldModel.id
    },

    required() {
      if (!this.fieldModel) {
        return false
      }

      return this.fieldModel.required
    },

    invalid() {
      if (this.fieldModel === null) {
        return false
      }

      return this.fieldModel.invalid
    },

    valid() {
      return !this.invalid
    },

    validationMessage() {
      if (!this.invalid || !this.fieldModel || !this.fieldModel.errors) {
        return ''
      }

      for (const key of Object.keys(this.fieldModel.errors)) {
        const error = this.fieldModel.errors[key]

        if (!error) {
          continue
        }

        return this.form.errorMessage(this, error)
      }

      return this.form.defaultErrorMessage()
    }
  },

  methods: {
    deregisterInput(input) {
      this.fieldModel = input.fieldModel
    },

    registerInput(input) {
      this.fieldModel = input.fieldModel
    },

    updateInput(input) {
      this.fieldModel = input.fieldModel
    }
  }
}
</script>

<style></style>
