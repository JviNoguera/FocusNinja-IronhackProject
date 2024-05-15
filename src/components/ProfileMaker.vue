<script setup>
import { ref } from 'vue'
import { useProfileStore } from '@/stores/profile'
import { useUserStore } from '@/stores/user'    

const profileStore = useProfileStore()
const userStore = useUserStore()

const name = ref('')
const username = ref('')
const website = ref(null)
// link with user email
const email = ref(email.value)
const avatar_url = ref(null)

// la lectura de aqui va en conjunto con la lectura de signin 16
const checkUser = async () => {
   await userStore.fetchUser()  
   if (userStore.user) {
        email.value = userStore.user.email
        console.log(email.value)
        return email.value
    }
}

const handleSubmit = async () => {
  await profileStore.addProfile({
    name: name.value,
    username: username.value,
    website: website.value,
    email: email.value,
    avatar_url: avatar_url.value,
  })
  // Reset form values after task is added
    name.value = '' 
    username.value = ''
    website.value = null
    email.value = ''     
    avatar_url.value = null
}
</script>

<template>
  <div class="profileMaker">
    <form @submit.prevent="handleSubmit">
      <div class="name">
        <label for="titleForm">name</label>
        <input type="text" id="titleForm"
          v-model="title" placeholder="hello, my name is"/>
      </div>
      <div class="username">
        <label for="descriptionForm">username</label>
        <input type="text" id="descriptionForm"
          v-model="description" placeholder="username"/>
      </div>
      <div class="website">
        <label for="descriptionForm">website</label>
        <input type="text" id="descriptionForm"
          v-model="description" placeholder="website"/>
      </div>
      <div class="email">
        <label for="descriptionForm">email</label>
        <input type="text" id="descriptionForm"
          v-model="description" placeholder="email"/>
      </div>
      <section class="avatar">
        <label for="avatarForm">avatar</label>
        <input type="text" id="avatarForm"
          v-model="avatar" placeholder="avatar"/>
      </section>
      <button class="submitButton" type="submit">Become a Ninja Task</button>
    </form>
  </div>
</template>

<style scoped>

.profileMaker {
  width: 500px;
  margin: 100px auto;
  margin-bottom: 0%;
  text-align: left;
  background-color: var(--bg-color);
  border: none;
  box-shadow: var(--inner-items-box-shadow);
  padding: 10px;
}

</style>
