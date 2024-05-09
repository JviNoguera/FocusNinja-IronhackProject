<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const email = ref('')
const password = ref('')

// Check User v2
async function checkUser() {
  try {
    await userStore.signIn(email.value, password.value)
    email.value = ''
    password.value = ''
    //if user is authenticated redirect to dashboard
    if (userStore.user) {
      console.log(userStore.user);
      router.push({ path: '/' })
    } else {
      alert('Are you signed up? Please check your email or password!')
    }
  } catch (error) {
    // Handle sign in error
    console.error('Error during sign in:', error)
    alert('Invalid email or password. Please try again!')
  }
}
</script>

<template>
  <section>
    <form @submit.prevent="checkUser">
      <div>
        <input type="email" v-model="email" placeholder="e-mail" />
      </div>
      <div>
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <div>
        <button type="submit">Sign In</button>
      </div>
    </form>
  </section>
</template>

<style scoped></style>
