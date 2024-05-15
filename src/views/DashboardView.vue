<script setup>
import { storeToRefs } from 'pinia'
import { useTaskStore } from '@/stores/task.js'
import NewTask from '@/components/NewTask.vue'
import TaskItem from '@/components/TaskItem.vue'
import AppHeader from '@/components/AppHeader.vue'
import EditTaskModal from '@/components/EditTaskModal.vue'

const taskStore = useTaskStore()

const { tasks } = storeToRefs(taskStore)
</script>

<template>
  <AppHeader />
  <section>
    <h1 hidden>Dashboard</h1>
    <NewTask />
    <section class="tasks-order">
      <div v-for="task in tasks" :key="task.id">
        <TaskItem :task="task" />
      </div>
    </section>

    <EditTaskModal v-if="taskStore.editModalOpen" />
  </section>
</template>

<style scoped>
.tasks-order{
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
