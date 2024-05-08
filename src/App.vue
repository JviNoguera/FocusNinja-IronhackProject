<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from './stores/user.js'
import AuthView from './views/DashboardView.vue';
import router from './router';


const userStore = useUserStore()
const { user } = storeToRefs(userStore)

onMounted(async () => {
  try {
    await userStore.fetchUser() 
    if (!user.value) {
      router.push({ path: '/auth' });
    } else {
      // continue to dashboard
      router.push({ path: '/' });
    }
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <section>
    <h1>Hola Estoy Conectado</h1>
    <AuthView/>
    <router-view class="app-main" /> 
  </section>
</template>

<style scoped></style>

