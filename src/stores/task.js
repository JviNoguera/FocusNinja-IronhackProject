// Final-Project/src/stores/task.js

import { defineStore } from "pinia";
import supabase from '../supabase.js';
import { useUserStore } from '../stores/user.js';
 
export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),

  actions: {
    async fetchTasks() {
      const userId = useUserStore().user.id;
      const { data: fetchedTasks, error } = await supabase
        .from("tasks")
        .select("*")
        .eq('user_id', userId)
        .order("id", { ascending: false });

        if (error) {
          console.error("Error fetching tasks:", error.message);
          return;
        }
      this.tasks = fetchedTasks || [] ;
    },

    async addTask(taskData) {
      const userStore = useUserStore();
      const userId = userStore.user.id;
      console.log(taskData);
      const { data: task, error } = await supabase
        .from("tasks")
        .insert({...taskData, userId})

      if (error) throw error;
      
      else (task) 
        await this.fetchTasks(); 
      }
    }
  }
);