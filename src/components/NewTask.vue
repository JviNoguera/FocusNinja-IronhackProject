<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore()
const title = ref('')
const description = ref('')
const selectedDuration = ref('30')
const customDuration = ref('')
const duration = ref('')
const reminder = ref(null)
const isTaskMakerOpen = ref(false);

const handleDurationChange = () => {
  if (selectedDuration.value !== 'custom') {
    customDuration.value = ''
  }
}

const handleSubmit = async () => {
  const duration = selectedDuration.value === 'custom' ? customDuration.value : selectedDuration.value
  await taskStore.addTask({
    title: title.value,
    description: description.value,
    duration: duration,
    custom_duration: customDuration.value,
    reminder: reminder.value
  })
  // Reset form values after task is added
  title.value = ''
  description.value = ''
  selectedDuration.value = '30'
  customDuration.value = ''
  reminder.value = null
}
function toggleTaskMaker() {
    isTaskMakerOpen.value = !isTaskMakerOpen.value;
}
</script>

<template>
    <div class="taskMakerMenuContainer">
        <button class="taskMakerMenu-btn" @click="toggleTaskMaker">Create New Task</button>
    </div>
    <form @submit.prevent="handleSubmit" class="taskMaker" v-if="isTaskMakerOpen">
        <div class="title">
          <label for="titleForm">Title</label>
          <input
             type="text"
             id="titleForm"
             v-model="title"
             placeholder="Ex: Preps for tonight's dinner!"
             required/>
        </div>
        <div class="description">
           <label for="descriptionForm">Description</label>
          <input
             type="text-area"
            id="descriptionForm"
            v-model="description"
             placeholder="Ex: Go to the grocery store, get cabbages, bacon and boil some potatoes!"/>
        </div>
        <div class="containerDurationReminder">
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
             <label for="reminderForm">Starting Time</label>
             <input type="datetime-local" id="reminderForm" v-model="reminder" />
           </div>
        </div>
        <button class="submitButton" type="submit">Create New Task</button>
    </form>
</template>

<style scoped>
/* Form */

.taskMakerMenuContainer {
  position: fixed;
  top: 110px; 
  left: 0;
  width: 100vw;
  background-color: var(--bg-color);
  box-shadow: var(--inner-items-box-shadow);
  padding: 20px;
  display: flex;
  justify-content: center;
  z-index: 1;
  
}

.taskMakerMenuContainer button {
  background-color: var(--btn-color);
  color: var(--btn-text-color);
  width: 100%;
  height: 70px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border-style: none;
}

.taskMakerMenu-btn:hover {
    background-color:var(--btn-hover-color);
}

.taskMaker {
  position: fixed;
  top: 230px;
  left: 50%; 
  transform: translateX(-50%);
  width: 50%;
  box-shadow: var(--inner-items-box-shadow);
  padding: 10px;
  z-index: 1;
  background-color: var(--bg-color);
}

input {
  background: var(--secondary-bg-color);
}

label {
  color: var(--label-color);
  font-size: 18px;
  margin-left: 5px;
  font-weight: 500;
  
}
.title,
.description {
  width: 100%;
  margin-top: 15px;
}

#titleForm,
#descriptionForm {
  width: 100%;
  border: none;
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
}

.containerDurationReminder {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
}

.duration,
.reminder {
  width: 48%;
  margin-block-start: 10px;
}


#durationForm,
#reminderForm {
  width: 100%;
  border: none;
  background-color: var(--secondary-bg-color);
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
  margin-left: auto;
}

.submitButton {
  background-color: var(--btn-color);
  color: var(--btn-text-color);
  width: 100%;
  height: 70px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border-style: none;
  margin-block-start: 20px;
  margin-bottom: 5px;
  margin-top: 30px;
}

.submitButton:hover {
    background-color: var(--btn-hover-color);
}

@media (max-width: 576px) {
  .taskMaker {
    width: 80%;
  }

  .containerDurationReminder {
    flex-direction: column;
  }

  .duration,
  .reminder {
    width: 100%;
  }

}
</style>
