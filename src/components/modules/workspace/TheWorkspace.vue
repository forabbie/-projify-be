<template>
  <div class="p-4 sm:ml-64">
    <div class="rounded-lg mt-14">
      <WorkspaceHeader :data="workspace" />
      <!-- tabs -->
      <div class="workspace-body max-w-6xl mx-auto px-4">
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg"
                id="members-tab"
                data-tabs-target="#members"
                type="button"
                role="tab"
                aria-controls="members"
                aria-selected="false"
              >
                Members
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="projects-tab"
                data-tabs-target="#projects"
                type="button"
                role="tab"
                aria-controls="projects"
                aria-selected="false"
              >
                Projects
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="members"
            role="tabpanel"
            aria-labelledby="members-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the
              <strong class="font-medium text-gray-800 dark:text-white"
                >Members tab's associated content</strong
              >. Clicking another tab will toggle the visibility of this one for the next. The tab
              JavaScript swaps classes to control the content visibility and styling.
            </p>
          </div>
          <div
            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="projects"
            role="tabpanel"
            aria-labelledby="projects-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the
              <strong class="font-medium text-gray-800 dark:text-white"
                >Projects tab's associated content</strong
              >. Clicking another tab will toggle the visibility of this one for the next. The tab
              JavaScript swaps classes to control the content visibility and styling.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <ModalEdit id="edit-workspace-modal" :data="workspace" @onAction="save" />
    <ModalDanger
      id="delete-workspace-modal"
      msg="Are you sure you want to delete this workspace?"
      @onAction="save"
    />
  </div>
</template>

<script setup>
import WorkspaceHeader from '@/components/modules/workspace/WorkspaceHeader.vue'
import ModalEdit from '@/components/modules/workspace/modals/ModalEdit.vue'
import ModalDanger from '@/components/elements/modals/ModalDanger.vue'
import useWorkspaceStore from '@/stores/workspace'
import { getUserWorkspaces } from '@/utils/workspace.utils'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const workspaceStore = useWorkspaceStore()
const workspace = ref(computed(() => workspaceStore.workspace))
const workspaceid = ref(computed(() => route.params.workspaceid))

onMounted(() => {
  getWorkspace()
})

const getWorkspace = async () => {
  try {
    const result = await workspaceStore.getWorkspace(workspaceid.value)
    if (result) {
      workspaceStore.workspace = result.workspace
      return
    }
  } catch (error) {
    console.log(error)
  }
}

const save = async (value) => {
  const data = {}
  data.name = value['workspace-name']
  data.description = value['workspace-description']
  data.id = workspaceid.value
  workspaceStore.show_alert = true
  workspaceStore.submission = true
  workspaceStore.alert_variant = 'bg-blue-500'
  workspaceStore.alert_msg = 'Please be patient while we save your data.'
  try {
    const result = await workspaceStore.editWorkspace(data)
    if (result) {
      workspaceStore.alert_variant = 'bg-green-500'
      workspaceStore.alert_msg = 'Workspace has been successfully updated.'
      getWorkspace()
      getUserWorkspaces()
      return
    }
  } catch (error) {
    console.log(error)
    workspaceStore.submission = false
    workspaceStore.alert_variant = 'bg-red-500'
    workspaceStore.alert_msg = 'Unable to save workspace data.'
  }
}

watch(workspaceid, () => {
  getWorkspace()
})
</script>
