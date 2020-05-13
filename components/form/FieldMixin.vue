<script>
export default {
  name: 'FieldMixin',
  inject: {
    form: { from: 'form' },
    group: {
      from: 'group',
      default: () => null
    }
  },

  props: {
    value: [String, Number, Boolean, Date, Object],
    id: String,
    validations: Object,
    mask: {
      default: () => /.*/
    },
    required: {
      type: Boolean
    }
  },

  data() {
    return {
      valid: true,
      dirty: false,
      errors: {}
    }
  },

  computed: {
    fieldModel() {
      return {
        valid: this.valid,
        dirty: this.dirty,
        errors: this.errors,
        invalid: this.invalid,
        required: this.required
      }
    },

    invalid() {
      return !this.valid
    },

    maskConfig() {
      if (
        typeof this.mask === 'object' &&
        !(this.mask instanceof RegExp) &&
        !Array.isArray(this.mask)
      ) {
        return this.mask
      }

      return {
        mask: this.mask,
        lazy: true // change to false to make placeholder visible
      }
    }
  },

  created() {
    if (this.form) {
      this.form.registerInput(this)
    }

    if (this.group) {
      this.group.registerInput(this)
    }
  },

  destroyed() {
    if (this.group) {
      this.group.deregisterInput(this)
    }

    if (this.form) {
      this.form.deregisterInput(this)
    }
  },

  methods: {
    addValidationSource(source) {
      if (!this.validationSources) {
        this.validationSources = []
      }

      this.validationSources.push(source)
    },

    removeValidationSource(source) {
      if (!this.validationSources) {
        return
      }

      const index = this.validationSources.indexOf(source)

      if (index < 0) {
        return
      }

      this.validationSources.splice(index, 1)
    },

    applyValidations(target) {
      this.applyRequiredValidator(target)
      if (this.validations) {
        for (const key of Object.keys(this.validations)) {
          this.applyValidator(target, key, this.validations[key])
        }
      }

      if (this.validationSources != null) {
        for (const source of this.validationSources) {
          source(target, this)
        }
      }
    },

    applyRequiredValidator(target) {
      this.applyValidator(target, 'required', this.required)
    },

    applyValidator(target, validatorId, validator) {
      this.form.applyValidator(target, this, validatorId, validator)
    },

    setValidity(valid, errors) {
      this.valid = valid
      this.errors = errors
    },

    setDirty() {
      this.dirty = true
    }
  },

  watch: {
    fieldModel() {
      if (this.group) {
        this.group.updateInput(this)
      }

      if (this.form) {
        this.form.updateInput(this)
      }

      this.$emit('field-model-change', this)
    }
  }
}
</script>
