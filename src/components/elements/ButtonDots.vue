<template>
  <button
    :id="id"
    :data-dropdown-toggle="toggleText"
    :data-dropdown-placement="placement"
    class="mb-3 md:mb-0 text-whi te font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    type="button"
  >
    <IconDotHorizontal :className="'w-6 h-6 text-gray-800 dark:text-white'" />
  </button>
</template>

<script setup>
import { ref } from 'vue'
import IconDotHorizontal from '@/components/icons/IconDotHorizontal.vue'

const props = defineProps({
  id: String,
  placement: String,
  toggleText: String
})
const id = ref(props.id)
const placement = ref(props.placement)
const toggleText = ref(props.toggleText)
</script>
