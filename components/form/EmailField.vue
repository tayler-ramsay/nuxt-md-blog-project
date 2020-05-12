<template>
  <TextField
    :id="id"
    ref="field"
    v-model="inputVal"
    v-bind="$attrs"
    :required="required"
    :minlength="minlength"
    :maxlength="minlength"
  ></TextField>
</template>
<script>
import { helpers } from 'vuelidate/lib/validators'
import TextField from './TextField'
import FieldProxyMixin from './FieldProxyMixin'

const validEmail = helpers.regex(
  'email',
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
)
validEmail.id = 'email'

export default {
  components: {
    TextField
  },
  mixins: [FieldProxyMixin],

  props: {
    minlength: {
      type: [Number, String],
      default: null
    },

    maxlength: {
      type: [Number, String],
      default: null
    }
  },

  methods: {
    validationSource(target, field) {
      field.applyValidator(target, validEmail.id, validEmail)
    }
  }
}
</script>
