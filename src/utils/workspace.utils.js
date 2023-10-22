import useWorkspaceStore from '@/stores/workspace'

export const getUserWorkspaces = async () => {
  const workspaceStore = useWorkspaceStore()
  try {
    const result = await workspaceStore.getUserWorkspaces()
    if (result.data) {
      workspaceStore.workspaces = result.data
      return result.data
    }
  } catch (error) {
    console.log(error)
  }
}

export const getUserWorkspace = async (workspaceid) => {
  const workspaceStore = useWorkspaceStore()
  try {
    const result = await workspaceStore.getUserWorkspace(workspaceid.value)
    if (result) {
      workspaceStore.workspace = result.workspace
      return
    }
  } catch (error) {
    console.log(error)
  }
}
