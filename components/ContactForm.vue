<template>
  <div class="flex flex-col lg:max-w-1/2  bg-black px-5 lg:px-10 py-10">
    <template v-if="success">
      <h1 class="font-semibold text-green text-4xl">THANK YOU</h1>
      <p class="text-white">
        Thank you for contacting us! Someone will follow up with you shortly.
      </p>
    </template>
    <template v-else>
      <h1 class="font-semibold text-green text-4xl">CONTACT US</h1>
      <p class="text-blue-light mb-10">
        <span class="text-white pr-2">*</span>required
      </p>
      <Form class="flex flex-col space-y-6 " @submit.prevent="onSubmit">
        <FormGroup label="Full Name*" label-class="text-white">
          <TextField
            id="name"
            v-model="name"
            class="h-12 bg-slate mt-2"
            required
          />
        </FormGroup>

        <FormGroup label="Email*" label-class="text-white">
          <EmailField
            id="email"
            v-model="email"
            class="h-12 bg-slate"
            required
          />
        </FormGroup>

        <FormGroup label="Company" class="w-full" label-class="text-white">
          <TextField id="company" v-model="company" class="h-12 bg-slate" />
        </FormGroup>
        <FormGroup label="Phone*" class="max-w-full" label-class="text-white">
          <PhoneField
            id="phone"
            v-model="phone"
            class="h-12 bg-slate"
            required
          />
        </FormGroup>
        <div />

        <FormGroup label="Message*" label-class="text-white">
          <TextArea
            id="message"
            v-model="message"
            class="bg-slate"
            rows="10"
            required
          />
        </FormGroup>

        <button
          type="submit"
          class="bg-black text-white font-semibold border-2 border-green w-24 py-5"
        >
          Submit
        </button>
      </Form>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import {
  Form,
  FormGroup,
  TextArea,
  TextField,
  PhoneField,
  EmailField
} from './form'

export default {
  components: {
    Form,
    FormGroup,
    EmailField,
    PhoneField,
    TextField,
    TextArea
  },
  data() {
    return {
      submitting: false,
      success: false,
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    }
  },

  methods: {
    onSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        company: this.company,
        phone: this.phone,
        message: this.message
      }

      if (!data.name) {
        return
      }

      this.submitting = true
      this.success = false

      axios
        .post('/api/contact', data)
        .then((result) => {
          this.success = true
          console.log('result', result)
        })
        .finally(() => {
          this.submitting = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  color: #fff;
  padding: 1em;
}

textarea {
  display: block;
  color: #fff;
}

//  black: '#242B34',
//   green: '#B2D237',
//   slate: '#3E4A59',
//   blue: {
//     light: '#009CDA',
//     default: '#014180'
//   }
</style>
