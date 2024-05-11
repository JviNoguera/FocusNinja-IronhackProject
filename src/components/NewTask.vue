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
    <form @submit.prevent="handleSubmit">
      <fieldset>
        <legend><h1>New Task</h1></legend>

        <div class="title">
          <label for="titleForm">Title</label>
          <input
            type="text"
            id="titleForm"
            v-model="title"
            placeholder="example: preps for dinner!"
            required
          />
        </div>

        <div class="description">
          <label for="descriptionForm">Description</label>
          <input
            type="text-area"
            id="descriptionForm"
            v-model="description"
            placeholder="example: going to the grocery store, get cabbages, bacon and boil some potatoes!"
          />
        </div>
        <section class="containerDurationReminder">
          <div class="duration">
            <label for="durationForm">How many time i need?</label>
            <select id="durationForm" v-model="selectedDuration" @change="handleDurationChange">
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
              <option value="90">90 minutes</option>
              <option value="120">120 minutes</option>
              <option value="custom">Custom</option>
            </select>
            <input
              type="text"
              v-if="selectedDuration === 'custom'"
              v-model="customDuration"
              placeholder="Ej. 52m"
            />
          </div>
          <div class="reminder">
            <label for="reminderForm">Start Time</label>
            <input type="datetime-local" id="reminderForm" v-model="reminder" />
          </div>
        </section>
        <button class="submitButton" type="submit">Create New Task</button>
      </fieldset>
    </form>
  </div>
</template>

<style scoped>
/* Form */

fieldset {
  width: 500px;
  margin: 30px 120px;
  text-align: left;
  margin-top: 10%;
  background-color: whitesmoke;
  border: none;
  box-shadow: gray 0px 0px 10px;
}

input {
  background: gainsboro;
}

label {
  color: grey;
  font-size: 17px;
}

.title {
  width: 100%;
}

#titleForm {
  width: 100%;
  border: none;
  background-color: gainsboro;
  height: 60px;
  margin-block-start: 10px;
}

.description {
  width: 100%;
  margin-top: 10px;
}

#descriptionForm {
  width: 100%;
  border: none;
  background-color: gainsboro;
  height: 60px;
  margin-block-start: 10px;
}

.containerDurationReminder {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.containerDurationReminder div {
  width: 49%;
}

.duration {
  width: 100%;
  margin-block-start: 10px;
}

.reminder {
  width: 100%;
  margin-block-start: 10px;
}

#durationForm {
  width: 100%;
  border: none;
  background-color: gainsboro;
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
  margin-left: auto;
}

#reminderForm {
  margin-right: 10px;
  width: 89%; /* esto no es correcto */
  border: none;
  background-color: gainsboro;
  height: 60px;
  padding-left: 15px;
  padding-right: 15px;
  margin-block-start: 10px;
}

.submitButton {
  background-color: gray;
  color: #f2f4fc;
  padding: 10px 10px;
  width: 100%;
  height: 70px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border-style: none;
  margin-block-start: 20px;
  margin-bottom: 5px;
}
</style>
