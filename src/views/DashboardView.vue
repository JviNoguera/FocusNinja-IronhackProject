<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user.js';

const userStore = useUserStore();
const router = useRouter();

function signOut () {
    userStore.signOut()
    router.push({ path: '/' })
}


</script>

<template>
    <section>
        <h1>Dashboard</h1>
        <div>
            <button @click="signOut">Sign Out</button>
        </div>
        <div>
            <router-link to="/new-task">New Task</router-link>
        </div>

        <router-link to="/tasks">Tasks</router-link>
    </section>
</template>

<style scoped></style>