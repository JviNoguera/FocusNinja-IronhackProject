// Final-Project/src/stores/user.js

import { defineStore } from 'pinia';
import supabase from '../supabase.js';


export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
 // remember to update the state from actions
 
  actions: {
    async fetchUser () {
      const user = await supabase.auth.user();
      this.user = user
    },
    async signIn (email, password) {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async signUp (email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'user',
          storage: localStorage
        }
      ]
    },
 }
});
