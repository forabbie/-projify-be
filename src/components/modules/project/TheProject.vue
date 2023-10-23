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
                    {{ workspace.name }}
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
            <div v-show="workspace.is_creator" class="whitespace-nowrap">
              <button
                data-modal-target="projectAddMemberModal"
                data-modal-show="projectAddMemberModal"
                type="button"
                class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 ml-2"
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
                Add / {{ project?.members?.length }}
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
          data-modal-target="taskAddModal"
          data-modal-show="taskAddModal"
        >
          Add new task
        </button>
      </div>
      <TheTask />
      <!-- Edit task modal -->
      <ModalTask
        id="taskAddModal"
        :data="emptyTask"
        :members="project?.members"
        action="New"
        @onAction="save"
      />
      <ModalTask
        id="taskEditModal"
        :data="task"
        :members="project?.members"
        action="Edit"
        @onAction="save"
      />
      <ModalPojectAddMember id="projectAddMemberModal" @onAction="addMember" />
    </div>
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite'
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { getUserWorkspaces, getUserWorkspace } from '@/utils/workspace.utils'
import { getTasks } from '@/utils/task.utils'
import { getWorkspaceMembers } from '@/utils/member.utils'
import useProjectStore from '@/stores/project'
import useMemberStore from '@/stores/member'
import useWorkspaceStore from '@/stores/workspace'
import useTaskStore from '@/stores/task'
import ModalTask from '@/components/modules/task/modal/ModalTask.vue'
import ModalPojectAddMember from '@/components/modules/project/modal/ModalPojectAddMember.vue'
import TheTask from '@/components/modules/task/TheTask.vue'
import ButtonDots from '@/components/elements/ButtonDots.vue'
import DropdownAction from '@/components/modules/project/dropdown/DropdownAction.vue'

onMounted(() => {
  initFlowbite()
})

const route = useRoute()
const taskStore = useTaskStore()
const workspaceStore = useWorkspaceStore()
const workspaceid = ref(computed(() => route.params.workspaceid))
const workspace = ref(computed(() => workspaceStore.workspace))
const emptyTask = ref({
  id: null,
  title: null,
  description: null,
  notes: null,
  owner: '',
  project_id: null,
  deadline: null,
  status: 1,
  priority: 1,
  owner_email: null,
  name: null
})
const task = ref(computed(() => taskStore.task))

const memberStore = useMemberStore()
const projectStore = useProjectStore()
const project = ref(computed(() => projectStore.project))
const projectid = ref(computed(() => route.params.projectid))

const addMember = async (id) => {
  const data = {}
  data.user_id = id.value
  data.workspaceid = workspaceid.value
  data.projectid = projectid.value
  memberStore.show_alert = true
  memberStore.submission = true
  memberStore.alert_variant = 'bg-blue-500'
  memberStore.alert_msg = 'Please be patient while we save your data.'
  try {
    const result = await projectStore.addUserToProject(data)
    if (result) {
      memberStore.alert_variant = 'bg-green-500'
      memberStore.alert_msg = 'Workspace has been successfully updated.'
      getUserWorkspace(workspaceid)
      getUserWorkspaces()
      getWorkspaceMembers(workspaceid)
      return
    }
  } catch (error) {
    console.log(error)
    memberStore.submission = false
    memberStore.alert_variant = 'bg-red-500'
    memberStore.alert_msg = 'Unable to save workspace data.'
  }
}

const save = async (value, action) => {
  const data = {}
  data.id = task.value.id
  data.title = value.title
  data.description = value.description
  data.owner = value.owner
  data.deadline = value.deadline
  data.task_status_id = value.status
  data.task_priority_id = value.priority
  data.notes = value.notes
  data.project_id = projectid.value
  data.workspaceid = workspaceid.value
  data.projectid = projectid.value
  taskStore.show_alert = true
  taskStore.submission = true
  taskStore.alert_variant = 'bg-blue-500'
  taskStore.alert_msg = 'Please be patient while we save your data.'
  try {
    action == 'New' ? await taskStore.addTask(data) : await taskStore.editTask(data)
    taskStore.alert_variant = 'bg-green-500'
    taskStore.alert_msg = 'Task has been successfully updated.'
    getTasks(workspaceid, projectid)
  } catch (error) {
    console.log(error)
    taskStore.submission = false
    taskStore.alert_variant = 'bg-red-500'
    taskStore.alert_msg = 'Unable to save task data.'
  }
}
</script>
