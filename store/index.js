export const state = () => ({
  tasks: [],
  task_Un: []
})

export const mutations = {
  ADD_TASK (state, task) {
    if (task.done === false) {
      state.tasks = [...state.tasks, { content: task.content, done: false }]
    } else {
      state.task_Un = [...state.task_Un, { content: task.content, done: task.done }]
    }
  },
  REMOVE_TASK (state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  REMOVE_TASK_UN (state, task) {
    state.task_Un.splice(state.task_Un.indexOf(task), 1)
  },
  TOGGLE_TASK (state, task) {
    task.done = !task.done
  }
}
