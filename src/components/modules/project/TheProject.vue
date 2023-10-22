<template>
  <div class="p-4 sm:ml-64">
    <div class="rounded-lg mt-14">
      <div
        class="bg-white block sm:flex items-center justify-between mb-3 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="w-full mb-1">
          <div class="mb-4">
            <nav class="flex mb-5" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li class="inline-flex items-center">
                  <a
                    href="#"
                    class="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                  >
                    <svg
                      class="w-5 h-5 mr-2.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                      ></path>
                    </svg>
                    Workspace
                  </a>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      class="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page"
                      >Project</span
                    >
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div
            class="items-top justify-between block sm:flex md:divide-gray-100 dark:divide-gray-700"
          >
            <div>
              <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {{ project.title }}
              </h1>
              <p class="text-sm text-gray-700">
                Manage any type of project. Assign owners, set timelines and keep track of where
                your project stands.
              </p>
            </div>
            <div class="">
              <button
                type="button"
                class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2"
              >
                <svg
                  class="w-4 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 8h6m-3 3V5m-6-.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                  />
                </svg>
                Invite / {{ project?.members?.length }}
              </button>
              <!-- Dropdown -->
              <ButtonDots
                id="dropdownProjectButton"
                data-dropdown-toggle="dropdownProject"
                data-dropdown-placement="right-end"
                type="button"
              />
              <DropdownAction id="dropdownProject" label="dropdownProjectButton" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          id="createProductButton"
          class="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-modal-target="taskModal"
          data-modal-show="taskModal"
        >
          Add new task
        </button>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Taks</th>
              <th scope="col" class="px-6 py-3">Owner</th>
              <th scope="col" class="px-6 py-3">Due Date</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3">Priority</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(task, index) in 4"
              :key="index"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"
              >
                <div class="text-base font-semibold text-gray-900 dark:text-white">name</div>
                <div class="text-sm font-normal text-gray-500 dark:text-gray-400">category</div>
              </td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div
                  class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
                >
                  <span class="font-medium text-gray-600 dark:text-gray-300">JL</span>
                </div>
                <div class="pl-3">
                  <div class="text-base font-semibold">Neil Sims</div>
                  <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                </div>
              </th>
              <td class="px-6 py-4">React Developer</td>
              <td class="p-4">
                <span
                  class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500"
                  >Completed</span
                >
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                  Online
                </div>
              </td>
              <td class="px-6 py-4">
                <!-- Modal toggle -->
                <a
                  href="#"
                  type="button"
                  data-modal-target="taskModal"
                  data-modal-show="taskModal"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit task</a
                >
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Edit task modal -->
        <ModalTask id="taskModal" :data="workspace" @onAction="save" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite'
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { getUserWorkspaces, getUserWorkspace } from '@/utils/workspace.utils'
import useWorkspaceStore from '@/stores/workspace'
import useProjectStore from '@/stores/project'
import ModalTask from '@/components/modules/task/modal/ModalTask.vue'
import ButtonDots from '@/components/elements/ButtonDots.vue'
import DropdownAction from '@/components/modules/project/dropdown/DropdownAction.vue'

onMounted(() => {
  initFlowbite()
})

const route = useRoute()
const workspaceStore = useWorkspaceStore()
const workspace = ref(computed(() => workspaceStore.workspace))
const workspaceid = ref(computed(() => route.params.workspaceid))

const projectStore = useProjectStore()
const project = ref(computed(() => projectStore.project))

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
      getUserWorkspace(workspaceid)
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
</script>
