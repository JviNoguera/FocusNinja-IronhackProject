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
    <article v-if="hasUser">
      <SignIn/>
      <button @click="toogleHasUser">I Want to Sign Up!</button>
    </article>
    <article v-else>
      <SignUp/>
      <button @click="toogleHasUser">I already have an account!</button>
    </article>
  </section>
</template>

<style scoped></style>
