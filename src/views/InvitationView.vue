<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <div class="mr-3 w-8"><LogoIcon /></div>
        Projify
      </a>
      <router-view></router-view>
    </div>
  </section>
</template>

<script setup>
import LogoIcon from '@/components/icons/IconLogo.vue'
</script>
