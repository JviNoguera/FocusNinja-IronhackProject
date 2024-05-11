<script setup>

const props = defineProps({
    task: Object
})

</script>

<template>
    <section class="taskItem">
        <h2>My ninja mission!</h2>
        <p> {{ task.title }}</p>
        <h4>this is what we're going to do:</h4>
        <p> {{ task.description }}</p>
        <h4>i'll spend {{ task.duration }} to do this</h4>
        <div v-if = "task.reminder.value !== null">
            <h4 > i'll start at:</h4>
            <p> {{ task.reminder }}</p>
        </div>
        <button>Complete</button>
        <button>Delete</button>
        <button>Edit</button>


    </section>
</template>

<style scoped></style>