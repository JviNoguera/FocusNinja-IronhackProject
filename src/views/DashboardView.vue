<script setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useTaskStore } from '@/stores/task.js'
import NewTask from '@/components/NewTask.vue'
import TaskItem from '@/components/TaskItem.vue'
import AppHeader from '@/components/AppHeader.vue'
import EditTaskModal from '@/components/EditTaskModal.vue'
import AppFooter from '@/components/AppFooter.vue'

const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)

// Computed properties to filter tasks
const completedTasks = computed(() => tasks.value.filter(task => task.is_complete))
const incompleteTasks = computed(() => tasks.value.filter(task => !task.is_complete))
</script>

<template>
  <AppHeader/>
  <article>
    <h1 hidden>Dashboard</h1>
    <NewTask />
    <section class="tasks-order">
      <div class="incompleteTasks">
        <div v-for="task in incompleteTasks" :key="task.id">
          <TaskItem :task="task" />
        </div>
      </div>
      <div class="completedTasks">
        <div v-for="task in completedTasks" :key="task.id">
          <TaskItem :task="task" />
        </div>
      </div>
    </section>
    <EditTaskModal v-if="taskStore.editModalOpen" />
  </article>
  <AppFooter/>
</template>

<style scoped>
.tasks-order {
  margin-top: 220px;
  min-height: 70vh;
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.incompleteTasks {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.completedTasks {
  width: 30%;
}


</style>
