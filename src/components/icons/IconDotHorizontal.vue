<template>
  <svg
    :class="className"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 3"
  >
    <path
      d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
    />
  </svg>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  className: String
})
const className = ref(props.className)
</script>
