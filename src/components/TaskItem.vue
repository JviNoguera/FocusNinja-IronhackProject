<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/task'


const taskStore = useTaskStore()
const props = defineProps({task: Object})
const show = ref(false)
const message = ref('')

// function to format the reminder date
const formatDate = (reminder) => {
  if (!reminder) return ''; 
  const date = new Date(reminder); 
  const day = date.getDate().toString().padStart(2, '0'); 
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0'); 
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year} at ${hours}:${minutes}hrs`; 
}

// function to show snackbar
function showSnackBar(msg) {
    message.value = msg
    show.value = true
}

// function to close snackbar
function closeSnackBar() {
  show.value = false
}
// function to show the delete confirmation
function showConfirmation() {
    setTimeout(() => {
        show.value = false
    }, 7000)
    showSnackBar('Are you sure you want to delete this task?')
}


function confirm() {
  show.value = false
  deleteTask()
}

async function deleteTask() {
    await taskStore.deleteTask(props.task.id) 
    await taskStore.fetchTasks()
}

// function to mark as complete any task item
async function completeTask() {
    await taskStore.completeTask(props.task.id, !props.task.is_complete);
    await taskStore.fetchTasks();
}

// function to open edit modal (EditTaskModal.vue)
function openEditModal() {
    taskStore.selectedTask = props.task;
  taskStore.openEditModal();
}

</script>

<template>
  <article >
    <!-- completed verification - style change -->
    <section :class="task.is_complete ? 'completedTask' : 'taskItem'">
      <h2>{{ task.title }}</h2>
      <h3>{{ task.description }}</h3>
      <h4>It will take you {{ task.duration + " min, " }} to do this</h4>
      <div v-if="task.reminder !== null">
        <h4>You're supposed to start at:</h4>
        <p>{{ formatDate(task.reminder) }}</p>
      </div>
      <div class="taskButtons">
        <button class="kebabBtn completeBtn" aria-label="Mark as Complete" @click="completeTask">•</button>
        <button class="kebabBtn deleteBtn" aria-label="Delete this task" @click="showConfirmation">•</button>
        <button class="kebabBtn editBtn" aria-label="Edit this task" @click="openEditModal">•</button>
      </div>
      <div class="completeButtons-container" v-if="task.is_complete">
        <p>Completed</p>
        <div class="KebabBtnComplete">
          <button class="kebabBtn moveToPendingBtn" aria-label="Move to pending tasks" @click="completeTask">•</button>
          <button class="kebabBtn deleteBtn" aria-label="Delete this task" @click="showConfirmation">•</button>
        </div>
      </div>
    </section>
  </article>
  <div v-if="show" class="snackbar" @click.stop>
    <p>{{ message }}</p>
    <button @click="confirm">Confirm</button>
    <button @click="closeSnackBar">Cancel</button>
  </div>
</template>

<style scoped>

.taskItem {
    width: 250px;
    text-align: left;
    background-color: var(--bg-color);
    border: none;
    box-shadow: var(--inner-items-box-shadow);
    padding: 10px;
    border-radius: 10px;
    font-size: x-small;
    position: relative; /* Agregamos posición relativa para los botones */
}

.taskItem:hover {
 box-shadow: var(--special-box-shadow);
}

.taskButtons {
  position: absolute; 
  top: 0px; 
  right: 0px; 
  display: flex;
}

.completeButtons {
  position: relative; 
  top: 0px; 
  right: 0px; 
  display: flex;
  justify-content: end;
}
 
.kebabBtn {
  margin: none;
  width: 30px; 
  height: 30px; 
  cursor: pointer;
  border: none;
  border-radius: 50%;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  color: var(--btn-text-color); /* Color gris para los puntos */
  background-color: transparent;
  transition: background-color 0.3s ease;
  position: relative; /* Agregamos posición relativa */
  display: flex;
  justify-content: center;
  align-items: center;
}

.kebabBtn:hover {
  background-color: rgba(0, 0, 0, 0.1); /* Cambia el color de fondo al pasar el cursor sobre el botón */
}

.kebabBtn[aria-label]:hover::before {
  content: attr(aria-label);
  position: absolute;
  top: -30px; /* Ajustamos la posición vertical para que esté sobre el botón */
  left: 50%; /* Ajustamos la posición horizontal para que esté centrado */
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0; /* Inicialmente oculto */
  transition: opacity 0.3s ease;
  z-index: 1;
}

.kebabBtn:hover[aria-label]:hover::before {
  opacity: 1; /* Mostrar el texto del hover al pasar el cursor */
}

.completeBtn {
  color: #4CAF50;
}

.deleteBtn {
  color: #f44336;
}

.editBtn {
  color: #ffeb3b;
}

.moveToPendingBtn {
  color: var(--label-color);
}

.completeButtons-container {
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.completeButtons-container p{
  color: var(--bg-color);
  font-size: 16px;
  font-weight: 700;

}

.KebabBtnComplete {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.completedTask {
  width: 200px;
  text-align: left;
  background-color:var(--special-completed-color);
  border: none;
  box-shadow: var(--inner-items-box-shadow);
  padding: 10px;
  border-radius: 5px;
  font-size: xx-small;
  color: var(--text-color);
}

.completedTask:hover {
  box-shadow: var(--special-box-shadow);
}

.snackbar {
  width: 100vw;
  text-align: center;
  background-color: var(--btn-color);
  opacity: 0.9;
  color: var(--bg-color);
  padding: 10px 20px;
  border-radius: 5px 5px 0 0;
  z-index: 1000;
  position: fixed;
  bottom: 20px;
  left: 0;
  overflow: hidden;
}

.snackbar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));
  animation: darken 7s linear infinite;
  pointer-events: none; /* Evita que el pseudo-elemento interactue con los elementos que estan superpuestos */
}

@keyframes darken {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.snackbar p {
  position: relative;
  z-index: 1;
}

.snackbar button {
  position: relative;
  z-index: 1;
  margin-left: 10px;
  padding: 5px 10px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-block-start: 5px;
}

@media (max-width: 576px) {

  .taskItem {
    width: 250px;
    text-align: left;
    background-color: var(--bg-color);
    border: none;
    box-shadow: var(--inner-items-box-shadow);
    padding: 10px;
    border-radius: 10px;
    font-size: x-small;
    position: relative; /* Agregamos posición relativa para los botones */
  }
    .completedTask {
    width: 150px;
    text-align: left;
    background-color:var(--special-completed-color);
    border: none;
    box-shadow: var(--inner-items-box-shadow);
    padding: 5px;
    border-radius: 5px;
    font-size: 6px;
    color: var(--text-color);
  }

  .kebabBtn {
    font-size: 25px;
  }
  .completeButtons-container p {
    font-size: 12px;
  }

}
</style>