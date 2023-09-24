<template>
  <div class="w-full max-w-xl p-6 space-y-4 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
    <div class="space-y-4">
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Welcome to Projify</h2>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Instantly collaborate with your team. Get started for free.
        </p>
      </div>

      <div class="rounded-t mb-0 px-6 pb-3">
        <div class="btn-wrapper text-center">
          <!-- <button
            class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs"
            type="button"
            style="transition: all 0.15s ease 0s"
          >
            <img alt="github" class="w-5 mr-1" src="@/assets/images/github.svg" />
            Github
          </button> -->
          <button
            class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs"
            type="button"
            style="transition: all 0.15s ease 0s"
          >
            <img alt="google" class="w-5 mr-1" src="@/assets/images/google.svg" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
    <div
      class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
    >
      <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">Or</p>
    </div>
    <form class="space-y-4 md:space-y-6" action="#">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your email</label
        >
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
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
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          for="confirm-password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Confirm password</label
        >
        <input
          type="confirm-password"
          name="confirm-password"
          id="confirm-password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create an account
      </button>
    </form>
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

<script setup></script>
