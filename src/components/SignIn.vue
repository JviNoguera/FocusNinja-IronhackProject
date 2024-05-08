<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore();
const email = ref('');
const password = ref('');


function checkUser () {
    userStore.signIn(email.value, password.value)
    email.value = ''
    password.value = ''
   if (userStore.user) router.push({ path: '/Dashboard' })
   else alert('Are you signed up? Please check your email or password!')
    
}
</script>

<template>
    <section>
        <form @submit.prevent="checkUser">
            <div>
                <input type="email" v-model="email" placeholder="YourEmailHere@example.com">
            </div>
            <div>
                <input type="password" v-model="password" placeholder="YourPassword">
            </div>
            <div>
                <button type="submit">Sign In</button>
            </div>
        </form>
    </section>
</template>

<style scoped></style>