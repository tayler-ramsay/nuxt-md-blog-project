<script>
export default {
  name: 'FieldProxyMixin',

  computed: {
    inputVal: {
      get() {
        return this.fromModel(this.value)
      },
      set(val) {
        this.$emit('input', this.toModel(val))
      }
    }
  },

  methods: {
    fromModel(val) {
      return val
    },

    toModel(val) {
      return val
    },

    validationSource(target, field) {}
  },

  mounted() {
    this.$refs.field.addValidationSource(this.validationSource)
  },

  beforeDestroy() {
    this.$refs.field.removeValidationSource(this.validationSource)
  },

  props: {
    id: {
      type: String
    },

    required: {
      type: Boolean
    },

    validations: {
      type: Object
    },

    value: {
      type: [String, Number, Boolean, Date, Object]
    }
  }
}
</script>
