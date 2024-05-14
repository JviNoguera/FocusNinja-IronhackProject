<script setup>
import { useTaskStore } from '@/stores/task'
import { storeToRefs } from 'pinia'

const taskStore = useTaskStore()
const {selectedTask} = storeToRefs(taskStore)


function saveChanges() {
    console.log("salida datos editados")
  taskStore.saveEditedTask(selectedTask.value);
  taskStore.closeEditModal();
// actualizar la estructura de datos, aunque creo que no hace falta porque se cierra el modal.
  taskStore.fetchTasks();
}

function cancelEdit() {
  console.log("edicion cancelada")
  taskStore.closeEditModal();
}

</script>

<template>
    <div class="overlay" v-if="taskStore.editModalOpen">
      <article class="editModalContainer">
        <div class="editModal" v-if="selectedTask">
        <h2>Edit Task</h2>
          <form @submit.prevent="saveChanges">
              <div>
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="selectedTask.title" />
              </div>
              <div>
                <label for="description">Description:</label>
                <input type="text-area" id="description" v-model="selectedTask.description" ></input>
              </div>
              <div class="containerDurationReminder">
                  <div class="duration">
                    <label for="duration">Duration (min):</label>
                    <input type="number" id="duration" v-model.number="selectedTask.duration" />
                  </div>
                  <div class="reminder">
                    <label for="reminder">Reminder:</label>
                    <input type="datetime-local" id="reminder" v-model="selectedTask.reminder" />
                  </div>
                </div>
              <div class="buttons">
                <button class= "submitBtn" type="submit">Confirm Edit</button>
                <button class= "cancelBtn" type="button" @click="cancelEdit">Discard Changes</button>
              </div>
          </form>
        </div>
      </article>
    </div>
  </template>

<style scoped>

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.editModal {
    width: 100%;
    max-width: 500px;
    margin: 20% auto;
    padding: 10px;
    background-color: var(--bg-color);
    border-radius: var(--border-radius);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

input {
  background: gainsboro;
}

label {
  color: var(--btn-color);
  font-size: 18px;
  margin-left: 5px;
  font-weight: 500;
}

.editModal input,
.editModal select,
.editModal textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid var(--secondary-bg-color);
    border-radius: var(--border-radius);
    font-size: 16px;
}

.editModal select {
    appearance: none;
}

.containerDurationReminder {
  display: flex;
  width: 480px;
  justify-content: space-between;
  margin-top: 15px;
}

.duration select {
  color: var(--text-color);
}

.containerDurationReminder div {
  width: 48%;
}

.containerDurationReminder {
  display: flex;
  width: 480px;
  justify-content: space-between;
  margin-top: 10px;
}

.duration select {
  color: var(--text-color);
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.buttons button {
  width: 48%;
}
 .submitBtn {
    background-color: rgb(187, 187, 42);
    opacity: 0.7;
    color: var(--btn-text-color);
    border: none;
    border-radius: var(--border-radius);
    padding: 15px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
}

 .cancelBtn {
  background-color: rgb(187, 40, 42);
    opacity: 0.7;
    color: var(--btn-text-color);
    border: none;
    border-radius: var(--border-radius);
    padding: 15px;
    cursor: pointer;
    font-size: 18px;
}

 .submitBtn:hover {
  background-color: rgb(187, 187, 42);
    opacity: 0.7;
}
</style>