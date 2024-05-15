import { defineStore } from 'pinia'
import supabase from '../supabase.js'
import { useUserStore } from './user.js'

export const useProfileStore = defineStore('profiles', {
  state: () => ({
    profiles: null,
  }),

  actions: {
    
    // function to fetch profiles
    async fetchProfiles() {
      const userId = useUserStore().user.id
      const { data: fetchedProfiles, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .order('id', { ascending: false })
    },
    // function to add new profiles
    async addProfile (profileData) {
      const userStore = useUserStore()
      const userId = userStore.user.id
      console.log(profileData)
      const { data: profile, error } = await supabase
        .from('profile')
        .insert({ ...profileData, user_id: userId })

      if (error) throw error
      else profile
      await this.fetchProfiles()

    },

  }
})