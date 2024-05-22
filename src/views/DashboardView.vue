<script setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useTaskStore } from '@/stores/task.js'
import NewTask from '@/components/NewTask.vue'
import TaskItem from '@/components/TaskItem.vue'
import AppHeader from '@/components/AppHeader.vue'
import EditTaskModal from '@/components/EditTaskModal.vue'


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
</template>

<style scoped>

.tasks-order {
  margin-top: 220px;
  min-height: 70vh;
  display: flex;
  margin-bottom: 2vh;
}

.incompleteTasks {
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

.completedTasks {
  width: 35%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 1px;
}

@media (max-width: 576px) {
  
  .incompleteTasks {
    width: 60%;
  }
  .completedTasks {
    width: 40%;
  }
} 


</style>
