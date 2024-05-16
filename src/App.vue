<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from './stores/user.js'
import { useTaskStore } from './stores/task.js'
import AuthView from './views/AuthView.vue'
import { useRouter } from 'vue-router'
import { useProfileStore } from './stores/profile.js'

const router = useRouter()
const userStore = useUserStore()
const taskStore = useTaskStore()
const { user } = storeToRefs(userStore)
const profileStore = useProfileStore()



onMounted(async () => {
  try {
    await userStore.fetchUser()
    if (!user.value) {
      // continue to login or signup
      router.push({ path: '/auth' })
    } else {
      // continue to dashboard
      await taskStore.fetchTasks();
      await profileStore.fetchProfile();
    }
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<style scoped></style>
