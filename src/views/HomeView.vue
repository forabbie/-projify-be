<template>
  <navbar-component></navbar-component>
  <sidebar-component></sidebar-component>
  <router-view></router-view>
  <ModalProject
    id="projectModal"
    :data="{ title: '', details: '', expected_completion_date: '' }"
    @onAction="save"
    this-action="New"
  />
  <ModalProject id="projectEditModal" :data="project" @onAction="save" this-action="Edit" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import { initFlowbite } from 'flowbite'
import useWorkspaceStore from '@/stores/workspace'
import useProjectStore from '@/stores/project'
import NavbarComponent from '@/components/layout/AppNavbar.vue'
import SidebarComponent from '@/components/layout/AppSidebar.vue'

import ModalProject from '@/components/modules/project/modal/ModalProject.vue'

const route = useRoute()
const workspaceStore = useWorkspaceStore()
const projectStore = useProjectStore()
const project = ref(computed(() => projectStore.project))
const workspaceid = ref(computed(() => route.params.workspaceid))
const projectid = ref(computed(() => route.params.projectid))
const url = ref(computed(() => route.params))

onMounted(() => {
  getUserWorkspace()
  initFlowbite()
})

const getUserWorkspace = async () => {
  try {
    const result = await workspaceStore.getUserWorkspace(workspaceid.value)
    if (result) {
      workspaceStore.workspace = result.workspace
      getUserProjects(workspaceid.value)
      return
    }
  } catch (error) {
    console.log(error)
  }
}
const getUserProjects = async () => {
  try {
    const result = await projectStore.getUserProjects(workspaceid.value)
    if (result) {
      projectStore.projects = result.data
      if (projectid.value) {
        getUserProject()
      }
      return
    }
  } catch (error) {
    console.log(error)
  }
}

const getUserProject = async () => {
  const data = {}
  data.workspaceid = workspaceid.value
  data.projectid = projectid.value
  try {
    const result = await projectStore.getUserProject(data)
    if (result) {
      projectStore.project = result.project[0]
      return
    }
  } catch (error) {
    console.log(error)
  }
}

const save = async (value, action) => {
  const data = {}
  data.title = value['project-title']
  data.details = value['project-details']
  data.expected_completion_date = value['project-competion']
  data.workspaceid = workspaceid.value
  data.projectid = projectid.value
  projectStore.show_alert = true
  projectStore.submission = true
  projectStore.alert_variant = 'bg-blue-500'
  projectStore.alert_msg = 'Please be patient while we save your data.'
  try {
    const result =
      action == 'New'
        ? await projectStore.addUserProject(data)
        : await projectStore.editUserProject(data)
    if (result) {
      projectStore.alert_variant = 'bg-green-500'
      projectStore.alert_msg = 'Project has been successfully create.'
      projectStore.project = { title: '', details: '', expected_completion_date: '' }
      getUserWorkspace(workspaceid)
      return
    }
  } catch (error) {
    console.log(error)
    projectStore.submission = false
    projectStore.alert_variant = 'bg-red-500'
    projectStore.alert_msg = 'Unable to save project data.'
  }
  projectStore.submission = false
}

watch(url, () => {
  getUserWorkspace()
  initFlowbite()
})
</script>
