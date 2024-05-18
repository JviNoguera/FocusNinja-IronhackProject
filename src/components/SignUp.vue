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
        <div class="signUp">
            <div class="email">
                <label for="email">E-mail</label>
                <input type="email" id="email" v-model="email" placeholder="introduce your e-mail: taskninja@example.com">
            </div>
            <div class="password">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" placeholder="Introduce your password">
            </div>
            <div class="confirmPassword">
                <label for="password">Confirm Password</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Please confirm your password">
            </div>
            <div>
                <button class="submitButton" type="submit"> Let's get started!</button>
            </div>
        </div>
    </form>
</template>

<style scoped>

/* Form */

.signUp {
  width: 500px;
  margin: 30px 120px;
  text-align: left;
  margin-top: 10%;
  background-color: whitesmoke;
  border: none;
  box-shadow: gray 0px 0px 10px;
  padding: 10px;
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
}

.confirmPassword {
  width: 100%;
  margin-top: 10px;
}

#confirmPassword {
  width: 480px;
  border: none;
  background-color: gainsboro;
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
}

.submitButton {
  width: 480px;
  background-color: gray;
  color: #f2f4fc;
  height: 70px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border-style: none;
  margin-block-start: 20px;
  margin-bottom: 5px;
}

.submitButton:hover {
    background-color: rgba(20, 19, 19, 0.757);
}

</style>