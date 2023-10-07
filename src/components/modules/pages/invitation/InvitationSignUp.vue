<template>
  <div class="w-full max-w-xl p-6 space-y-4 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
    <div class="space-y-4">
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Welcome to Projify</h2>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Complete your account to continue.
        </p>
      </div>
    </div>
    <vee-form class="space-y-4 md:space-y-6" :validation-schema="schema" @submit="register">
      <div
        class="text-white text-center font-bold p-4 mb-4"
        v-if="reg_show_alert"
        :class="reg_alert_variant"
      >
        {{ reg_alert_msg }}
      </div>
      <FieldInputGroup>
        <template #label>
          <FieldInputLabel :label="'Email'" :label_for="'email'" />
        </template>
        <template #field>
          <vee-field
            v-model="user.email"
            disabled
            type="email"
            name="email"
            id="invite-email"
            placeholder="name@company.com"
            :class="fieldClass"
          />
        </template>
        <template #error>
          <ErrorMessage class="text-red-600" name="email" />
        </template>
      </FieldInputGroup>
      <FieldInputGroup>
        <template #label>
          <FieldInputLabel :label="'Password'" :label_for="'Password'" />
        </template>
        <template #field>
          <vee-field name="password" :bails="false" v-slot="{ field, errors }">
            <input type="password" placeholder="••••••••" :class="fieldClass" v-bind="field" />
            <div class="text-red-600" v-for="error in errors" :key="error">
              {{ error }}
            </div>
          </vee-field>
        </template>
      </FieldInputGroup>
      <FieldInputGroup>
        <template #label>
          <FieldInputLabel :label="'Confirm password'" :label_for="'confirm-password'" />
        </template>
        <template #field>
          <vee-field
            name="confirm_password"
            type="password"
            placeholder="••••••••"
            :class="fieldClass"
          />
        </template>
        <template #error>
          <ErrorMessage class="text-red-600" name="confirm_password" />
        </template>
      </FieldInputGroup>
      <button
        type="submit"
        class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create an account
      </button>
    </vee-form>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Already have an account?
      <router-link
        :to="{ name: 'Sign-In' }"
        class="font-normal text-blue-600 hover:underline dark:text-blue-500"
        >Login here</router-link
      >
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import storageService from '@/utils/storage'
import useAuthStore from '@/stores/auth'
import useInvitationStore from '@/stores/invitation'

import FieldInputGroup from '@/components/elements/FieldInputGroup.vue'
// import FieldInput from '@/components/elements/FieldInput.vue'
import FieldInputLabel from '@/components/elements/FieldInputLabel.vue'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const invitaionStore = useInvitationStore()

const fieldClass = ref(
  'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
)

const schema = {
  email: 'required|min:3|max:100|email',
  password: 'required|min:9|max:100|excluded:password',
  confirm_password: 'password_mismatch:@password'
}
const reg_in_submission = ref(false)
const reg_show_alert = ref(false)
const reg_alert_variant = ref('bg-blue-500')
const reg_alert_msg = ref('Please wait! Your account is being created.')

const user = ref({
  name: '',
  password: '',
  confirm_password: ''
})

const validateInvitation = async () => {
  const token = ref(route.query.token)
  try {
    const result = await invitaionStore.validate(token.value)
    if (result) {
      user.value.email = result.data.recipient_email
      console.log(result)
      return
    }
  } catch (error) {
    console.log(error)
    if (error.response.status === 422) {
      router.push({ name: '404' })
      return
    }
  }
}
validateInvitation()

const acceptInvitation = async () => {
  const token = ref(route.query.token)
  try {
    const result = await invitaionStore.accept(token.value)
    if (result) {
      storageService.setLocalStorage('auth', true)
      router.push({ name: 'Dashboard' })
      return
    }
  } catch (error) {
    console.log(error)
  }
}

const register = async (values) => {
  reg_show_alert.value = true
  reg_in_submission.value = true
  reg_alert_variant.value = 'bg-blue-500'
  reg_alert_msg.value = 'Please wait! Your account is being created.'

  try {
    const result = await authStore.signup(values)
    if (result) {
      reg_alert_variant.value = 'bg-green-500'
      reg_alert_msg.value = 'Success! Your account has been created.'
      acceptInvitation()
    }
  } catch (error) {
    console.log('error:', error.response)
    if (error.response.status === 422) {
      reg_in_submission.value = false
      reg_alert_variant.value = 'bg-red-500'
      reg_alert_msg.value = error.response.data.status.message
      return
    }
    reg_in_submission.value = false
    reg_alert_variant.value = 'bg-red-500'
    reg_alert_msg.value = 'An unexpected error occured. Please try again later.'
    return
  }
}
</script>
