<template>
  <div class="workspace-header-component">
    <div
      class="workspace-cover-wrapper rounded-lg bg-no-repeat bg-bottom bg-cover bg-[url('@/assets/images/headers/pink_purple.png')] h-48"
    ></div>
    <div class="workspace-header block lg:flex lg:max-w-6xl mx-auto px-6">
      <div class="workspace-icon">
        <div
          class="icont-header relative inline-flex items-center justify-center ring-4 ring-white bg-pink-500 rounded-xl hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-500 dark:focus:ring-pink-800 w-20 h-20"
        >
          <span class="text-5xl text-white dark:text-gray-300">{{ workspace.name.charAt(0) }}</span>
          <div
            v-if="workspace.is_creator"
            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold bg-white border border-white rounded-full -bottom-2.5 -right-3"
          >
            <IconVerified class-name="w-6 h-6 text-blue-500" />
          </div>
        </div>
      </div>
      <div class="flex grow mt-5 lg:ml-4 lg:mt-10 items-start">
        <div class="workspace-header-content grow">
          <div class="mb-2 flex">
            <h1 class="text-3xl font-bold grow">{{ workspace.name }}</h1>
          </div>
          <div class="workspace-description-component">
            <div class="description-line">
              <span class="text-content">{{ workspace.description }}</span>
            </div>
          </div>
        </div>
        <!-- Dropdown -->
        <ButtonDots
          v-show="workspace.is_creator"
          id="dropdownRightEndButton"
          toggle-text="dropdownRightEnd"
          placement="right-end"
        />
        <DropdownAction id="dropdownRightEnd" label="dropdownRightEndButton" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonDots from '@/components/elements/ButtonDots.vue'
import DropdownAction from '@/components/modules/workspace/dropdowns/DropdownAction.vue'
import IconVerified from '@/components/icons/IconVerified.vue'
import { computed, ref, watch } from 'vue'

const props = defineProps({
  data: Object
})

const workspace = ref(
  computed(() => {
    return props.data
  })
)

watch(workspace, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    workspace.value.name = newValue.name || 'Main workspace'
    workspace.value.description =
      newValue.description ||
      `Use the ${workspace.value.name} to manage and collaborate on all company-wide boards. All team members are in this workspace.`
  }
})
</script>
