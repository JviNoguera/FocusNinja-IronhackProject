// Final-Project/src/stores/task.js

import { defineStore } from "pinia";
import supabase from '../supabase.js';
import { useUserStore } from '../stores/user.js';
 
export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),

  actions: {

    // function to fetch tasks
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

    // function to delete task
    // async deleteTask() {
    //   const { error } = await supabase
    //     .from("tasks")
    //     .delete()
    //     .match({ id });
    //   if (error) throw error;
    //   await this.fetchTasks();
    // },


    async deleteTask(taskId) {
        try { 
          const { error } = await supabase
          .from("tasks")
          .delete()
          // .eq("id", taskId)
          // estoy aqui tratando de descifrar el id de la tarea, como llamarlo correctamente. <-----------------------
          .match({ id }); 
        if (error) throw error;
        await this.fetchTasks(); 
        console.log("Tarea eliminada con ID:", taskId);
        } catch (error) {
            console.error("Error al eliminar la tarea:", error);
            throw error; 
        } 
    }, 


    // function to add task
    async addTask(taskData) {
      const userStore = useUserStore();
      const userId = userStore.user.id;
      console.log(taskData);
      const { data: task, error } = await supabase
        .from("tasks")
        .insert({...taskData, user_id: userId})

      if (error) throw error;
      
      else (task) 
        await this.fetchTasks(); 
      }
    }
  }
);

