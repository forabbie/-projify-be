import useMemberStore from '@/stores/member'

export const getWorkspaceMembers = async (workspaceid) => {
  const memberStore = useMemberStore()
  try {
    const result = await memberStore.getWorkspaceMembers(workspaceid.value)
    if (result) {
      memberStore.members = result.members
      return
    }
  } catch (error) {
    console.log(error)
  }
}
