import { defineStore } from 'pinia'
import supabase from '../supabase.js'
import { useUserStore } from './user.js'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profiles: null,
  }),

  actions: {
    
    // function to fetch profiles
    async fetchProfile() {
      const userId = useUserStore().user.id
      const { data: fetchedProfile, error } = await supabase
        .from('profile')
        .select('*')
        .eq('user_id', userId)
        .order('id', { ascending: false })

      if (error) {
        console.error('Error while fetching profile:', error.message)
        return
      }
      this.profiles = fetchedProfile[0] 
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
      await this.fetchProfile()

    },

  }
})