<template>
  <!-- NOTE: Can't use b-input because it interferes with masks -->
  <textarea
    :id="id"
    :type="type"
    class="p-3"
    :class="{ 'is-invalid': invalid }"
    v-bind="$attrs"
    :value="value"
    :name="id"
    @change="update($event.target.value)"
    @focus="focus"
    @blur="blur"
  ></textarea>
</template>

<script>
import FieldMixin from './FieldMixin'

export default {
  mixins: [FieldMixin],
  inheritAttrs: false,

  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },

    minlength: {
      type: [Number, String],
      default: null
    },

    maxlength: {
      type: [Number, String],
      default: null
    }
  },

  mounted() {
    if (this.autofocus) {
      setTimeout(() => this.$el.focus())
    }
  },

  methods: {
    applyValidations(target) {
      FieldMixin.methods.applyValidations.call(this, target)

      if (this.minlength !== null) {
        this.applyValidator(target, 'minLength', parseInt(this.minlength))
      }

      if (this.maxlength !== null) {
        this.applyValidator(target, 'maxLength', parseInt(this.maxlength))
      }
    },

    update(value) {
      this.$emit('input', value)
    },

    focus(event) {
      this.$emit('focus', event)
    },

    blur(event) {
      this.$emit('blur', event)
      this.$emit('validate')
    }
  }
}
</script>
