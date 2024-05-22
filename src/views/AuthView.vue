<script setup>
import { ref } from 'vue'
import SignUp from '@/components/SignUp.vue'
import SignIn from '@/components/SignIn.vue'


const hasUser = ref(true)

function toogleHasUser() {
  hasUser.value = !hasUser.value
}
</script>

<template>
<section>
  <SignIn v-if="hasUser"/>
  <SignUp v-else/>
  <div class="toogleContainer">
      <button v-if="hasUser" class="toogleBtn"
       @click="toogleHasUser">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-3
          22c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-1
          21s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-3
          53l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.
          95.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.
          4276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.
          361.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-1
          21-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4
           5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
          </svg> 
          I want to sign up!
      </button>
      <button v-else class="toogleBtn" @click="toogleHasUser">I already have an account!
      </button>
  </div>
</section>
</template>

<style scoped>

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
}

.toogleContainer {
  width: 50%;
  background-color: var(--bg-color);
  box-shadow: var(--regular-box-shadow);
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
  border-radius: var(--border-radius);
  padding: 10px;
}

.toogleBtn {
  width: 100%;
  background-color: var(--btn-color);
  color: var(--btn-text-color);
  height: 70px;
  cursor: pointer;
  outline: none;
  border-style: none;
  margin-block-start: 8px;
  margin-bottom: 8px;
  border-radius: 5px;
}

.toogleBtn:hover {
    background-color: var(--btn-hover-color);
}

svg {
    fill: var(--btn-text-color);
    width: 20px; 
    height: 20px; 
}



@media (max-width: 576px) {
  .toogleContainer {
    width: 80%;
  }
}

</style>
