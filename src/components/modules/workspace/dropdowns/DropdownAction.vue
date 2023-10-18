<template>
  <div
    :id="id"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul class="text-sm text-gray-700 dark:text-gray-200" :aria-labelledby="label">
      <DropdownActionItem id="edit-workspace-modal" text="Edit workspace" class-name="rounded-t-lg">
        <template #icon>
          <IconPenPaper class-name="w-4 h-4 mr-2" />
        </template>
      </DropdownActionItem>
      <DropdownActionItem id="delete-workspace-modal" text="Delete workspace">
        <template #icon>
          <IconTrash class-name="w-4 h-4 mr-2" />
        </template>
      </DropdownActionItem>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconPenPaper from '@/components/icons/IconPenPaper.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import DropdownActionItem from '@/components/modules/workspace/dropdowns/DropdownActionItem.vue'

const props = defineProps({
  id: String,
  label: String
})
const id = ref(props.id)
const label = ref(props.label)
</script>
