<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from './stores/user.js'
import AuthView from './views/AuthView.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

onMounted(async () => {
  try {
    await userStore.fetchUser()
    if (!user.value) {
      // continue to login or signup
      router.push({ path: '/auth' })
    } else {
      // continue to dashboard
      router.push({ path: '/' })
    }
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  <section>
    <h1>Hola Estoy Conectado</h1>
    <router-view></router-view>
  <!-- <router-view/>> -->
  </section>
</template>

<style scoped></style>
