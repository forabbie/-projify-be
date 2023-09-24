<template>
  <div class="w-full max-w-xl p-6 space-y-4 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
    <div>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Log in to your account</h2>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Collaborate with your team instantly.
      </p>
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
      <!-- <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            name="remember"
            type="checkbox"
            class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="remember" class="font-medium text-gray-900 dark:text-white"
            >Remember me</label
          >
        </div>
        <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
          >Lost Password?</a
        >
      </div> -->
      <button
        type="submit"
        class="bg-blue-600 text-white active:bg-blue-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
        style="transition: all 0.15s ease 0s"
      >
        Sign in to your account
      </button>
    </form>
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

<script setup></script>
