<template>
  <div class="w-full max-w-xl p-6 space-y-4 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
    <div>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2">
        Collaborate with your team instantly. Need an account?
        <router-link
          :to="{ name: 'Sign-Up' }"
          class="text-blue-700 hover:underline dark:text-blue-500"
        >
          Sign up
        </router-link>
      </div>
    </div>

    <form class="mt-8 space-y-6" action="#">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email</label
        >
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        class="bg-blue-600 text-white active:bg-blue-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
        style="transition: all 0.15s ease 0s"
      >
        Sign in to your account
      </button>
    </form>
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-full h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
      <span
        class="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-500"
        >Or Sign in with</span
      >
    </div>
    <div class="rounded-t mb-0 px-6 pb-3">
      <div class="btn-wrapper text-center">
        <button
          class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs"
          type="button"
          style="transition: all 0.15s ease 0s"
        >
          <img alt="google" class="w-5 mr-1" src="@/assets/images/google.svg" />
          Google
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
