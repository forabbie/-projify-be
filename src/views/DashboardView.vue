<template>
  <navbar-component></navbar-component>
  <sidebar-component></sidebar-component>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import NavbarComponent from '@/components/layout/AppNavbar.vue'
import SidebarComponent from '@/components/layout/AppSidebar.vue'

onMounted(() => {
  initFlowbite()
})
</script>
