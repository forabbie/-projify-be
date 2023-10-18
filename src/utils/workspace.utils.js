import useWorkspaceStore from '@/stores/workspace'

export const getUserWorkspace = async () => {
  const workspaceStore = useWorkspaceStore()
  try {
    const result = await workspaceStore.getUserWorkspaces()
    if (result.data) {
      return result.data
    }
  } catch (error) {
    console.log(error)
  }
}
