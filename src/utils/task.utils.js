import useTasktore from '@/stores/task'

export const getTasks = async (workspaceid, projectid) => {
  const taskStore = useTasktore()
  const data = {}
  data.workspaceid = workspaceid.value
  data.projectid = projectid.value
  try {
    const result = await taskStore.getTasks(data)
    if (result) {
      taskStore.tasks = result.data
      return
    }
  } catch (error) {
    console.log(error)
  }
}
