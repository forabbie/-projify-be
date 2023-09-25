<template>
  <div class="w-full max-w-xl p-6 space-y-4 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
    <div>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Log in to your account</h2>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Collaborate with your team instantly.
      </p>
    </div>
    <vee-form class="mt-8 space-y-6" :validation-schema="schema" @submit="login">
      <div
        class="text-white text-center font-bold p-4 mb-4"
        v-if="login_show_alert"
        :class="login_alert_variant"
      >
        {{ login_alert_msg }}
      </div>
      <FieldInputGroup>
        <template #label>
          <FieldInputLabel :label="'Email'" :label_for="'email'" />
        </template>
        <template #field>
          <vee-field
            type="email"
            name="email"
            id="email"
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
      <button
        type="submit"
        class="bg-blue-600 text-white active:bg-blue-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
        style="transition: all 0.15s ease 0s"
        :disabled="login_in_submission"
      >
        Sign in to your account
      </button>
    </vee-form>
    <div
      class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
    >
      <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">Or</p>
    </div>
    <div class="rounded-t mb-0 px-6 pb-3">
      <div class="btn-wrapper text-center">
        <button
          class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs"
          type="button"
          style="transition: all 0.15s ease 0s"
        >
          <img alt="google" class="w-5 mr-1" src="@/assets/images/google.svg" />
          Sign in with Google
        </button>
      </div>
    </div>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Need an account?
      <router-link
        :to="{ name: 'Sign-Up' }"
        class="text-blue-700 hover:underline dark:text-blue-500"
      >
        Sign up
      </router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import storageService from '@/utils/storage'
import useAuthStore from '@/stores/auth'
import useLayoutStore from '@/stores/layout'

import FieldInputGroup from '@/components/elements/FieldInputGroup.vue'
import FieldInputLabel from '@/components/elements/FieldInputLabel.vue'

const router = useRouter()
const authStore = useAuthStore()

const fieldClass = ref(
  'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
)
const schema = {
  email: 'required|email',
  password: 'required'
}
const login_in_submission = ref(false)
const login_show_alert = ref(false)
const login_alert_variant = ref('bg-blue-500')
const login_alert_msg = ref('Please wait! We are logging you in.')

const toggleUserLogIn = () => {
  layoutStore.userLoggedIn = !layoutStore.userLoggedIn
}

const login = async (values) => {
  login_show_alert.value = true
  login_in_submission.value = true
  login_alert_variant.value = 'bg-blue-500'
  login_alert_msg.value = 'Please wait! We are logging you in.'

  try {
    const result = await authStore.signin(values)
    if (result) {
      login_alert_variant.value = 'bg-green-500'
      login_alert_msg.value = 'Success! You are now logged in.'
      storageService.setLocalStorage('auth', true)
      toggleUserLogIn()
      router.push({ name: 'Dashboard' })
      return
    }
  } catch (error) {
    login_in_submission.value = false
    login_alert_variant.value = 'bg-red-500'
    login_alert_msg.value = 'Invalid Email or password.'
    return
  }
}
</script>
