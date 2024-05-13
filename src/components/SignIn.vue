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
      <div class="signIn">
        <div class="email">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="email" placeholder="taskninja@example.com"/>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="YourPassword"/>
        </div>
        <div>
          <button class="submitButton" type="submit">Sign In</button>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped>

/* Form */

.signIn {
  width: 500px;
  margin: 30px 120px;
  text-align: left;
  margin-top: 10%;
  background-color: whitesmoke;
  border: none;
  box-shadow: gray 0px 0px 10px;
  padding: 10px;
  border-radius: 5px;
}

input {
  background: gainsboro;
}

label {
  color: grey;
  font-size: 14px;
  margin-left: 5px;
}

.email {
  width: 100%;
  margin-bottom: 10px;
}

#email {
  width: 480px;
  border: none;
  background-color: gainsboro;
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
  border-radius: 5px;
}

.password {
  width: 100%;
  margin-top: 10px;
}

#password {
  width: 480px;
  border: none;
  background-color: gainsboro;
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
  border-radius: 5px;
}

.submitButton {
  background-color: gray;
  color: #f2f4fc;
  width: 495px;
  height: 70px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border-style: none;
  margin-block-start: 20px;
  margin-bottom: 5px;
  border-radius: 5px;
}

</style>

