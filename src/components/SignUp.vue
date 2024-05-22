<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router'
const router = useRouter()

const userStore = useUserStore();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

function signUp () {
    if (password.value === confirmPassword.value) {
        userStore.signUp(email.value, password.value)
        router.push ({ path: '/confirmation' }) 
    } else
        alert('Passwords do not match or are empty!');
  
}

</script>

<template>
    <img src="/src/assets/Ninja.png" alt="">
    <form @submit.prevent="signUp" class="signUp">
            <div class="email">
                <label for="email">E-mail</label>
                <input type="email" id="email" v-model="email" placeholder="introduce your e-mail: taskninja@example.com" required> 
            </div>
            <div class="password">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" placeholder="Introduce your password" required>
            </div>
            <div class="confirmPassword">
                <label for="password">Confirm Password</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Please confirm your password" required>
            </div>
            <button class="submitButton" type="submit"> Let's get started!</button>      
    </form>
</template>

<style scoped>

.signUp {
  width: 50%;
  text-align: left;
  margin-top: 2%;
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
.password,
.confirmPassword {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
}

#email,
#password,
#confirmPassword {
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
  
  .signUp{
    width: 80%;
  }

  img {
    width: 150px;
    height: 150px;
  }
}
</style>