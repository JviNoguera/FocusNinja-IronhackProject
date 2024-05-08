<script setup>
import router from '@/router'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()

function signOut() {
  userStore.signOut()
  router.push({ path: '/auth' })
}
</script>

<template>
  <section>
    <h1>Dashboard</h1>
    <div>
      <button @click="signOut">Sign Out</button>
    </div>
    <div>
      <router-link to="/new-task">New Task</router-link>
    </div>

    <router-link to="/tasks">Tasks</router-link>
  </section>
</template>

<style scoped></style>
