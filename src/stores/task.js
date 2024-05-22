// Final-Project/src/stores/task.js

import { defineStore } from 'pinia'
import supabase from '../supabase.js'
import { useUserStore } from '../stores/user.js'


export const useTaskStore = defineStore('tasks', {
  state: () => ({
    //task is an array, to retrieve them properly from dashboard onMount
    tasks: [],
    editModalOpen: false,
    selectedTask: null
  }),

  actions: {
    // function to save edited task
    async saveEditedTask(task) {
      console.log(task.title)
      const { error } = await supabase
        .from('tasks')
        .update(task)
        .eq('id', task.id)

      if (error) throw error

      console.log('enviado')
    },

    // function to open & close Edit Modal (EditTaskModal.vue)
    openEditModal() {
      console.log(this.selectedTask)
      this.editModalOpen = true
    },
    closeEditModal() {
      this.editModalOpen = false
    },

    // function to fetch tasks
    async fetchTasks() {
      const userId = useUserStore().user.id
      const { data: fetchedTasks, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userId)
        .order('id', { ascending: false })

      if (error) {
        console.error('Error while fetching tasks:', error.message)
        return
      }
      this.tasks = fetchedTasks || []
    },

    // function to mark task as complete
    async completeTask(taskId, isComplete) {
      const { error } = await supabase
        .from('tasks')
        .update({ is_complete: isComplete })
        .eq('id', taskId)
      if (error) throw error
    },

    // function to delete task
    async deleteTask(taskId) {
      try {
        const { error } = await supabase.from('tasks').delete().eq('id', taskId)
        if (error) throw error
        await this.fetchTasks()
        console.log('Deleted Task ID No:', taskId)
      } catch (error) {
        console.error('Something went wrong while deleting the task:', error)
        throw error
      }
    },

    // function to add task
    async addTask(taskData) {
      const userStore = useUserStore()
      const userId = userStore.user.id
      console.log(taskData)
      const { data: task, error } = await supabase
        .from('tasks')
        .insert({ ...taskData, user_id: userId })

      if (error) throw error
      else task
      await this.fetchTasks()
    }
  }
})
