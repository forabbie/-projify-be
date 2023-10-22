<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-30 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="font-medium space-y-2">
        <li>
          <button
            type="button"
            class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 focus:bg-blue-100 dark:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-blue-300"
            id="dropdownUsersButton"
            data-dropdown-toggle="dropdownUsers"
            data-dropdown-placement="bottom"
          >
            <div
              class="relative inline-flex items-center justify-center bg-pink-500 rounded-md hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-500 dark:focus:ring-pink-800 w-6 h-6"
            >
              <span class="font-medium text-white dark:text-gray-300">{{
                workspace.name.charAt(0)
              }}</span>
              <div
                v-if="workspace.is_creator"
                class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold bg-white border border-white rounded-full -bottom-1 -right-1.5"
              >
                <svg
                  class="w-3 h-3 text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                  />
                  <path
                    fill="#fff"
                    d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                  />
                </svg>
              </div>
            </div>
            <span class="flex-1 ml-3 text-left whitespace-nowrap capitalize">{{
              workspace.name
            }}</span>
            <span class="p-1.5">
              <svg
                class="w-3 h-3 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
          </button>
          <!-- Dropdown menu -->
          <div
            id="dropdownUsers"
            class="z-10 hidden bg-white rounded-lg shadow-xl w-60 dark:bg-gray-700"
          >
            <ul
              class="max-h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUsersButton"
            >
              <li v-for="(workspace, index) in workspaces" :key="index">
                <router-link
                  :to="{
                    name: 'Workspace',
                    params: { workspaceid: workspace.id }
                  }"
                  class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <div
                    class="relative inline-flex items-center justify-center bg-pink-500 rounded-md hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-500 dark:focus:ring-pink-800 w-6 h-6"
                  >
                    <span class="font-medium text-white dark:text-gray-300">{{
                      workspace.name.charAt(0)
                    }}</span>
                    <div
                      v-if="workspace.is_creator"
                      class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold bg-white border border-white rounded-full -bottom-1 -right-1.5"
                    >
                      <svg
                        class="w-3 h-3 text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                        />
                        <path
                          fill="#fff"
                          d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <span class="ml-3 capitalize">{{ workspace.name }}</span>
                </router-link>
              </li>
            </ul>
            <a
              href="#"
              class="flex items-center p-3 text-sm font-medium border-t border-gray-200 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
              Add workspace
            </a>
          </div>
        </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
        <div
          class="flex justify-between items-center p-2 text-gray-900 transition duration-75 rounded-lg dark:text-white group"
        >
          <span class="font-bold">Your Boards</span>
          <span
            v-show="projects.length != 0 && workspace.is_creator"
            data-modal-target="projectModal"
            data-modal-toggle="projectModal"
            class="rounded-lg p-1.5 cursor-pointer"
          >
            <svg
              class="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 button dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </span>
        </div>
        <div v-if="projects.length != 0">
          <li v-for="(project, index) in projects" :key="index">
            <router-link
              :to="{ name: 'Project', params: { projectid: parseInt(project.id) } }"
              class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                <path
                  d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z"
                />
              </svg>
              <span class="ml-3">{{ project.title }}</span>
            </router-link>
          </li>
        </div>
        <button
          v-show="projects.length == 0"
          data-modal-target="projectModal"
          data-modal-toggle="projectModal"
          class="w-full text-center p-2 text-white transition duration-75 rounded-lg bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 dark:text-white group"
        >
          <span class="">Add Project</span>
        </button>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import useWorkspaceStore from '@/stores/workspace'
import useProjectStore from '@/stores/project'

const workspaceStore = useWorkspaceStore()
const projectStore = useProjectStore()
const workspaces = ref(computed(() => workspaceStore.workspaces))
const workspace = ref(computed(() => workspaceStore.workspace))
const projects = ref(computed(() => projectStore.projects))
onMounted(() => {
  initFlowbite()
})
</script>
