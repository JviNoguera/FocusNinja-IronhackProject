<script setup>
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore()


const props = defineProps({
    task: Object
})

// function deleteTask() {
//     props.task.deleteTask()
// }

function deleteTask() {
    taskStore.deleteTask(props.task.id) 
}


</script>

<template>
    <section class="taskItem">
        <h2> {{ task.title }}</h2>
        <h3> {{ task.description }}</h3>
        <h4>It will take you {{ task.duration + " min, " }} to do this</h4>
        <div v-if = "task.reminder.value !== null">
            <h4 > You're supposed to start at:</h4>
            <p> {{ task.reminder }}</p>
        </div>
        <div class="taskButtons">
            <button type="button" class="completeBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
            </svg></button>
            <button class="editBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
            </svg></button>
            <button type="button" class="deleteBtn" @click="deleteTask"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
            </svg></button>
        </div>
    </section>
</template>

<style scoped>

.taskItem {
    width: 350px;
    margin: 30px 120px;
    text-align: left;
    margin-top: 10%;
    background-color: var(--bg-color);
    border: none;
    box-shadow: var(--inner-items-box-shadow);
    padding: 10px;
    border-radius: 5px;
    font-size: small; /* mirar esto y decidir como gesitonarlo */
}

.taskButtons {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    
}

.taskButtons button {
    width: 30px;
    height: 30px;
    border-radius: 30%;
    cursor: pointer;
    box-shadow: rgb(43, 42, 42) 5px 0px 10px;
    border: solid 1px rgb(150, 147, 147);
}

.completeBtn {
    background-color: rgb(36, 187, 42);
    opacity: 0.7;
}   

.deleteBtn {
    background-color: rgb(187, 40, 42);
    opacity: 0.7;
}

.editBtn {
    background-color: rgb(187, 187, 42);
    opacity: 0.7;
}

svg {
    fill: rgb(250, 250, 250);
    width: 10px; 
    height: 10px; 
}

</style>