// Final-Project/src/stores/task.js

import { defineStore } from "pinia";
import supabase from '../supabase.js';
import { useUserStore } from '../stores/user.js';


const userStore = useUserStore();
 
export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),

  actions: {
    async fetchTasks() {
      await userStore.fetchUser();
      const userId = userStore.user.id;
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .eq('userId', userId)
        .order("id", { ascending: false });
      this.tasks = tasks; //esto tengo que arreglarlo. mirar documentacion de supabase
    },

    async addTask(taskData) {
      const userStore = useUserStore();
      const userId = userStore.user.id;
      const { data: task, error } = await supabase
        .from("tasks")
        .insert({...taskData, userId});
      if (error) throw error;
      if (task) {
        await this.fetchTasks(); 
      }
    }
  },
});