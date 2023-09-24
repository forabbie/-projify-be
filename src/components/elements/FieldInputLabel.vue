<template>
  <label :for="label_for" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
    label
  }}</label>
</template>

<script setup>
const props = defineProps({
  label_for: String,
  label: String
})
</script>
