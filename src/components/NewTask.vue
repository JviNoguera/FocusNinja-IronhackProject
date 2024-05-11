<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'
import { useRouter } from 'vue-router'

const router = useRouter()

const taskStore = useTaskStore()

const title = ref('')
const description = ref('')
// default duration value, just because.
const selectedDuration = ref('30')
const customDuration = ref('')
const duration = ref('')
const reminder = ref(null)

const handleDurationChange = () => {
  if (selectedDuration.value !== 'custom') {
    customDuration.value = ''
  }
}

const handleSubmit = async () => {
  const duration =
    selectedDuration.value === 'custom' ? customDuration.value : selectedDuration.value
  await taskStore.addTask({
    title: title.value,
    description: description.value,
    duration: duration,
    customDuration: customDuration.value,
    reminder: reminder.value
  })
  // Reset form values after task is added
  title.value = ''
  description.value = ''
  selectedDuration.value = '30'
  customDuration.value = ''
  reminder.value = null
}
</script>

<template>
  <div class="taskMaker">
    <h2>New Task</h2>
    <form @submit.prevent="handleSubmit">
      <fieldset>
        <legend>Let's make things happen</legend>

        <div>
          <label for="titleForm">Title</label>
          <input
            type="text"
            id="titleForm"
            v-model="title"
            placeholder="example: preps for dinner!"
            required
          />
        </div>

        <div>
          <label for="descriptionForm">Description</label>
          <input
            type="text-area"
            id="descriptionForm"
            v-model="description"
            placeholder="example: going to the grocery store, get cabbages, bacon and boil some potatoes!"
          />
        </div>

        <div>
          <label for="durationForm">How many time i need to makes this happen? (minutes)</label>
          <select id="durationForm" v-model="selectedDuration" @change="handleDurationChange">
            <option value="15">15min</option>
            <option value="30">30min</option>
            <option value="45">45min</option>
            <option value="60">1hr</option>
            <option value="90">1:30hrs</option>
            <option value="120">2hrs</option>
            <option value="custom">Custom</option>
          </select>
          <input
            type="text"
            v-if="selectedDuration === 'custom'"
            v-model="customDuration"
            placeholder="Ej. 52m"
          />
        </div>
        <div>
          <label for="reminderForm">Start Time</label>
          <input type="datetime-local" id="reminderForm" v-model="reminder" />
        </div>
      </fieldset>

      <button type="submit">Create New Task</button>
    </form>
  </div>
</template>

<style scoped></style>
