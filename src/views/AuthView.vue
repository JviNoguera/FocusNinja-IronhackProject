<script setup>
import { ref } from 'vue'
import SignUp from '@/components/SignUp.vue'
import SignIn from '@/components/SignIn.vue'
import AppFooter from '@/components/AppFooter.vue';


const hasUser = ref(true)

function toogleHasUser() {
  hasUser.value = !hasUser.value
}
</script>

<template>
  <section class="containerAuth sized">
    <h1 hidden>Auth-View</h1>
    <article v-if="hasUser">
      <SignIn /> <div class="toogleBtn">
        <button class="iWantToSignUpBtn" @click="toogleHasUser">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg> 
            I want to sign up!</button>
      </div>
    </article>
    <article v-else>
      <SignUp />
      <div class="toogleBtn">
        <button class="iHaveAnAccountBtn" @click="toogleHasUser">I have an account!</button>
      </div>
    </article>
  </section>
  <AppFooter/>
</template>

<style scoped>

.sized {
  height: 90vh;
}

.containerAuth {
  display: flex;
  justify-content: center;
}

.toogleBtn {
  width: 500px;
  margin: 30px 120px;
  text-align: left;
  margin-top: 2%;
  background-color: whitesmoke;
  border: none;
  box-shadow: gray 0px 0px 10px;
  padding: 10px;
  border-radius: 5px;
}

.iHaveAnAccountBtn {
  width: 480px;
  background-color: gray;
  color: #f2f4fc;
  height: 70px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border-style: none;
  margin-block-start: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
}

.iWantToSignUpBtn {
  width: 480px;
  display: flex;
  align-items: center; 
  gap: 10px;
  justify-content: center;
  background-color: gray;
  color: #f2f4fc;
  height: 70px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border-style: none;
  margin-block-start: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
}

svg {
    fill: gainsboro;
    width: 20px; 
    height: 20px; 
}

</style>
