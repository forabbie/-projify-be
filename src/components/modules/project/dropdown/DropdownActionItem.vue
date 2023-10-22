<template>
  <li>
    <a
      href="#"
      :data-modal-target="id"
      :data-modal-toggle="id"
      class="flex items-center p-3 text-sm font-medium text-gray-600 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-500"
      :class="className"
    >
      <slot name="icon"></slot>
      {{ text }}
    </a>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: String,
  text: String,
  className: String
})
const text = ref(props.text)
</script>
