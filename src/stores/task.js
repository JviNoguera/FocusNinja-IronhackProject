// Final-Project/src/stores/task.js

import { defineStore } from 'pinia'
import supabase from '../supabase.js'
import { useUserStore } from '../stores/user.js'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: null,
    editModalOpen: false,
    selectedTask: null
  }),

  actions: {
    // function to save edited task
    async saveEditedTask(task) {
      const { error } = await supabase.from('tasks').update(task).eq('id', task.id)

      if (error) throw error
    },

    // function to open & close edit modal
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
        console.error('Error fetching tasks:', error.message)
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
      console.log("enviado");
    },
    // function to delete task
    async deleteTask(taskId) {
      try {
        const { error } = await supabase.from('tasks').delete().eq('id', taskId)
        if (error) throw error
        await this.fetchTasks()
        console.log('Tarea eliminada con ID:', taskId)
      } catch (error) {
        console.error('Error al eliminar la tarea:', error)
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
