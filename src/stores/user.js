// Final-Project/src/stores/user.js

import { defineStore } from 'pinia';
import supabase from '../supabase.js';


export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
 // remember to update the state from actions
 
  actions: {
    // function to fetch the user from supabase
    async fetchUser () {
      const { data, error} = await supabase.auth.getUser();
      this.user = data.user;
    },
    // function to login
    async signIn (email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });
      if (error) throw error;
      if (data) this.user = data.user;
    },
    // function to sign up the user
    async signUp (email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    // function to sign out the user
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.user = null;
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
