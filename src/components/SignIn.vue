<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useTaskStore } from '@/stores/task';
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const taskStore = useTaskStore()
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
      await taskStore.fetchTasks();
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
    <img src="/src/assets/Ninja.png" alt="">
    <form @submit.prevent="checkUser" class="signIn">
        <div class="email">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="email" placeholder="taskninja@example.com"/>
        </div>
        <div class="password">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="YourPassword"/>
        </div>
        <button class="submitButton" type="submit">Sign In</button>
    </form>
</template>

<style scoped>

/* Form */


.signIn {
  width: 50%;
  text-align: left;
  margin-top: 3%;
  background-color: var(--bg-color);
  border: none;
  box-shadow: var(--inner-items-box-shadow);
  padding: 10px;
  margin-bottom: 2%;
}

img {
  width: 250px;
  height: 250px;
  margin-top: 5%;
}

input {
  background: var(--secondary-bg-color);
}

label {
  color: var(--label-color);
  font-size: 14px;
  margin-left: 5px;
}

.email,
.password {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
}

#email,
#password {
  width: 100%;
  border: none;
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
}

.submitButton {
  width: 100%;
  background-color: var(--btn-color);
  color: var(--btn-text-color);
  height: 70px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border-style: none;
  margin-block-start: 20px;
  margin-bottom: 5px;
}

.submitButton:hover {
  background-color: var(--btn-hover-color);
}

@media (max-width: 576px) {
  
  .signIn {
    width: 80%;
  }

  img {
    width: 150px;
    height: 150px;
  }
}

</style>

