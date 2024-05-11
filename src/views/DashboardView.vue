<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user.js'
import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/stores/task.js'
import NewTask from '@/components/NewTask.vue'
import TaskItem from '@/components/TaskItem.vue'

const router = useRouter()
const userStore = useUserStore()
const taskStore = useTaskStore()

const {tasks} = storeToRefs(taskStore);

function signOut() {
  userStore.signOut()
  router.push({ path: '/auth' })
}
</script>

<template>
  <section>
    <h1>Dashboard</h1>
    <NewTask/>
    <div v-for="task in tasks">
      <TaskItem :task="task"/>
    </div>
    <div>
      <button @click="signOut">Sign Out</button>
    </div>
  </section>
</template>

<style scoped></style>
