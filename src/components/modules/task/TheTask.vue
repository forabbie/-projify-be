<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
          v-for="(task, index) in tasks"
          :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
            <div class="text-base font-semibold text-gray-900 dark:text-white">
              {{ task.title }}
            </div>
          </td>
          <th
            scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div
              class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
            >
              <span class="font-medium text-gray-600 dark:text-gray-300">{{
                task.name?.charAt(0) || getEmailDomain(task.owner_email).charAt(0)
              }}</span>
            </div>
            <div class="pl-3">
              <div class="text-base font-semibold">
                {{ task.name || getEmailDomain(task.owner_email) }}
              </div>
              <div class="font-normal text-gray-500">{{ task.owner_email }}</div>
            </div>
          </th>
          <td class="px-6 py-4">{{ task.deadline }}</td>
          <td class="p-4">
            <span
              :class="statusColorClass(task.status)"
              class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border"
              >{{ convertStatus(task.status) }}</span
            >
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center capitalize">
              <div
                v-if="task.priority == 1"
                class="h-2.5 w-2.5 rounded-full bg-violet-700 mr-2"
              ></div>
              <div
                v-if="task.priority == 2"
                class="h-2.5 w-2.5 rounded-full bg-indigo-500 mr-2"
              ></div>
              <div
                v-if="task.priority == 3"
                class="h-2.5 w-2.5 rounded-full bg-blue-400 mr-2"
              ></div>
              {{ convertPriority(task.priority) }}
            </div>
          </td>
          <td class="px-6 py-4">
            <a
              href="#"
              type="button"
              data-modal-target="taskEditModal"
              data-modal-show="taskEditModal"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              @click="getTask(task.id)"
              >Edit task</a
            >
          </td>
        </tr>
        <tr v-if="tasks.length === 0" class="w-full">
          <td
            class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap text-center dark:text-gray-400 uppercase"
            colspan="6"
          >
            no task
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import useTaskStore from '@/stores/task'
const taskStore = useTaskStore()

const route = useRoute()
const workspaceid = ref(computed(() => route.params.workspaceid))
const projectid = ref(computed(() => route.params.projectid))
const tasks = ref(computed(() => taskStore.tasks))

const convertPriority = (value) => {
  if (value == 2) {
    return 'medium'
  }
  if (value == 3) {
    return 'low'
  }
  return 'high'
}

const convertStatus = (value) => {
  if (value == 2) {
    return 'in progress'
  }
  if (value == 3) {
    return 'completed'
  }
  if (value == 4) {
    return 'stuck'
  }
  return 'not started'
}

const statusColorClass = (value) => {
  if (value == 2) {
    return 'bg-orange-100 text-orange-800 dark:bg-gray-700 dark:text-orange-400 border-orange-100 dark:border-orange-500'
  }
  if (value == 3) {
    return 'bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-100 dark:border-green-500'
  }
  if (value == 4) {
    return 'bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-100 dark:border-red-500'
  }
  return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-100 dark:border-gray-500'
}

const getEmailDomain = (email) => {
  if (email) {
    const atIndex = email.indexOf('@')
    if (atIndex !== -1) {
      return email.slice(0, atIndex)
    }
  }
  return '-'
}

const getTask = async (value) => {
  const data = {}
  data.workspaceid = workspaceid.value
  data.projectid = projectid.value
  data.id = value
  try {
    const result = await taskStore.getTask(data)
    if (result) {
      taskStore.task = result
      return
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
