// Final-Project/src/stores/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";
 
export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),

  // remember to update the state from actions

  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },
  },
});