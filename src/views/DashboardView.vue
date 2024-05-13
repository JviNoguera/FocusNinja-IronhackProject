<script setup>
import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/stores/task.js'
import NewTask from '@/components/NewTask.vue'
import TaskItem from '@/components/TaskItem.vue'
import AppHeader from '@/components/AppHeader.vue';


const taskStore = useTaskStore()

const {tasks} = storeToRefs(taskStore);

</script>

<template>
  <AppHeader/>
  <section>
    <h1 hidden>Dashboard</h1>
    <NewTask/>
    <div v-for="task in tasks" :key="task.id">
    <TaskItem :task="task"/>
    </div>
  </section>
</template> 

<style scoped></style>
