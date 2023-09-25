<template>
  <div>
    <nav
      class="fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <a href="#" class="flex ml-2 md:mr-24 z-50">
              <div class="mr-3 w-8"><LogoIcon /></div>
              <span
                class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
                >Projify</span
              >
            </a>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <section class="absolute w-full h-full">
        <section class="h-screen bg-gray-100">
          <div class="container h-full px-6 py-24 mx-auto">
            <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
                <router-view></router-view>
              </div>
              <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 hidden lg:block">
                <img src="@/assets/images/illustrationSignup.svg" class="w-full" alt="Desk image" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>

    <footer class="w-full absolute bottom-0 border-t bg-gray-100">
      <div class="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2023 <a href="https://flowbite.com/" class="hover:underline">Projify</a>. All Rights
          Reserved.
        </span>
        <span
          class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
        >
          Coded by
          <a
            href="https://abbie.onrender.com"
            target="_blank"
            class="mr-4 text-blue-500 hover:underline md:mr-6 ml-1"
            >Abbie</a
          >
        </span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import LogoIcon from '@/components/icons/IconLogo.vue'
</script>
