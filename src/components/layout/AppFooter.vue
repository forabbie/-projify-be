<template>
  <!-- <footer class="absolute w-full bottom-0 bg-white-900 pb-6">
    <div class="container mx-auto">
      <hr class="mb-6 border-b-1 border-gray-300" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4">
          <div class="text-sm font-semibold py-1">
            © {{ date }}
            <a
              href="https://www.creative-tim.com"
              class="hover:text-gray-400 text-sm font-semibold py-1"
            >
              Projify </a
            >Inc. All Rights Reserved.
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <div class="flex flex-wrap list-none md:justify-end justify-center">
            <span class="text-sm font-semibold block py-1 px-3"
              >Developed by
              <a
                href="https://abbie.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-gray-400"
                >Abbie</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
  </footer> -->

  <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© {{ date }} <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All
        Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const date = ref(new Date().getFullYear())
</script>
