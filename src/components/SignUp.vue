<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

function signUp () {
    if (password.value === confirmPassword.value)
        userStore.signUp(email.value, password.value)
    else
        alert('Passwords do not match or are empty!')
}

</script>

<template>
    <form @submit.prevent="signUp">
        <div>
            <input type="email" v-model="email" placeholder="YourEmailHere@example.com">
        </div>
        <div>
            <input type="password" v-model="password" placeholder="YourPassword">
        </div>
        <div>
            <input type="password" v-model="confirmPassword" placeholder="ConfirmPassword">
        </div>
        <div>
            <button type="submit">Sign Up</button>
        </div>
    </form>
</template>

<style scoped></style>