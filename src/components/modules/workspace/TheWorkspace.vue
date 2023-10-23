<template>
  <div class="p-4 sm:ml-64">
    <div class="rounded-lg mt-14">
      <WorkspaceHeader :data="workspace" />
      <div class="workspace-body max-w-6xl mx-auto px-4">
        <div class="flex justify-between mb-4 border-b border-gray-200 dark:border-gray-700">
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
          </ul>
          <button
            v-show="workspace.is_creator"
            type="button"
            data-modal-target="invite-member-modal"
            data-modal-toggle="invite-member-modal"
            class="h-9 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
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
            Invite / {{ members.length }}
          </button>
        </div>
        <div id="myTabContent">
          <TheMembers />
        </div>
      </div>
    </div>

    <ModalWorkspace id="edit-workspace-modal" :data="workspace" @onAction="save" />
    <ModalMember id="invite-member-modal" :data="{ recipient_email: '' }" @onAction="invite" />
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite'
import { useRoute } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import { getUserWorkspaces, getUserWorkspace } from '@/utils/workspace.utils'
import { getWorkspaceMembers } from '@/utils/member.utils'
import TheMembers from '@/components/modules/member/TheMembers.vue'
import WorkspaceHeader from '@/components/modules/workspace/WorkspaceHeader.vue'
import ModalWorkspace from '@/components/modules/workspace/modal/ModalWorkspace.vue'
import ModalMember from '@/components/modules/member/modal/ModalMember.vue'
import useWorkspaceStore from '@/stores/workspace'
import useMemberStore from '@/stores/member'

onMounted(() => {
  initFlowbite()
  getWorkspaceMembers(workspaceid)
})

const route = useRoute()
const workspaceStore = useWorkspaceStore()
const workspace = ref(computed(() => workspaceStore.workspace))
const workspaceid = ref(computed(() => route.params.workspaceid))
const url = ref(computed(() => route.params))

const memberStore = useMemberStore()
const members = ref(computed(() => memberStore.members))

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

const invite = async (value) => {
  const data = {}
  data.recipient_email = value.recipient
  data.workspaceid = workspaceid.value
  memberStore.show_alert = true
  memberStore.submission = true
  memberStore.alert_variant = 'bg-blue-500'
  memberStore.alert_msg = 'Please be patient while we sent the invitation.'
  try {
    const result = await memberStore.inviteMember(data)
    console.log(result)
    if (result) {
      memberStore.alert_variant = 'bg-green-500'
      memberStore.alert_msg = 'Successfully sent invite.'
      getUserWorkspace(workspaceid)
      getUserWorkspaces()
      getWorkspaceMembers(workspaceid)
      return
    }
  } catch (error) {
    console.log(error)
    memberStore.submission = false
    memberStore.alert_variant = 'bg-red-500'
    memberStore.alert_msg = 'Unable to invite user.'
  }
}

watch(url, () => {
  getWorkspaceMembers(workspaceid)
})
</script>
