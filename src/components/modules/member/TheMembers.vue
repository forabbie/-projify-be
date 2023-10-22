<template>
  <div class="hidden" id="members" role="tabpanel" aria-labelledby="members-tab">
    <div
      class="mb-4 bg-white rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 dark:bg-gray-800"
    >
      <div class="flow-root overflow-auto h-96">
        <ul class="mb-6 divide-y divide-gray-200 dark:divide-gray-700">
          <li v-for="(member, index) in members" :key="index" class="py-4">
            <div class="flex justify-between xl:block 2xl:flex align-center 2xl:space-x-4">
              <div class="flex space-x-4 xl:mb-4 2xl:mb-0">
                <div
                  class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
                >
                  <span class="font-medium text-gray-600 dark:text-gray-300 uppercase">{{
                    member.user?.first_name?.charAt(0) ||
                    getEmailDomain(member.user?.email).charAt(0)
                  }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-base font-semibold text-gray-900 leading-none truncate mb-0.5 dark:text-white"
                  >
                    {{ member.user?.first_name || getEmailDomain(member.user?.email) }}
                  </p>
                  <p class="mb-1 text-sm font-normal truncate text-blue-700 dark:text-blue-500">
                    {{ member.user?.email }}
                  </p>
                  <p class="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Role: {{ member.role }}
                  </p>
                </div>
              </div>
              <div
                v-if="member.is_creator"
                class="inline-flex items-center w-auto xl:w-full 2xl:w-auto"
              >
                <svg
                  class="w-6 text-sm font-medium text-center text-blue-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
              <div
                v-if="member.status == 'pending'"
                class="inline-flex items-center w-auto xl:w-full 2xl:w-auto"
              >
                <span
                  class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
                  >Pending</span
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import useMemberStore from '@/stores/member'

const memberStore = useMemberStore()

const members = ref(computed(() => memberStore.members))

const getEmailDomain = (email) => {
  if (email) {
    const atIndex = email.indexOf('@')
    if (atIndex !== -1) {
      return email.slice(0, atIndex)
    }
  }
  return '-'
}
</script>
