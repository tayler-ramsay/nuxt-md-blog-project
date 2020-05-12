<template>
  <TextField
    :id="id"
    v-model="inputVal"
    ref="field"
    v-bind="$attrs"
    :mask="phoneMask"
    :required="required"
    :validations="validations"
  ></TextField>
</template>
<script>
import { helpers } from 'vuelidate/lib/validators'
import TextField from './TextField'
import FieldProxyMixin from './FieldProxyMixin'

const validPhoneNumber = helpers.regex('phone', /^[0-9]{10}$/)
validPhoneNumber.id = 'phone'

export default {
  components: {
    TextField
  },
  inheritAttrs: true,

  mixins: [FieldProxyMixin],

  data() {
    return {
      phoneMask: '(000) 000-0000'
    }
  },

  methods: {
    validationSource(target, field) {
      field.applyValidator(target, validPhoneNumber.id, validPhoneNumber)
    }
  }
}
</script>
