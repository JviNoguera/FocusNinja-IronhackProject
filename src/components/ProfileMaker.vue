<script setup>
import { ref, watchEffect } from 'vue'
import { useProfileStore } from '@/stores/profile'
import { useUserStore } from '@/stores/user'    
import { storeToRefs } from 'pinia';

const profileStore = useProfileStore()

const userStore = useUserStore()
// Get user data from store and let it assign to variables
const { user } = storeToRefs(userStore);
const { profiles } = storeToRefs(profileStore);

const name = ref('')
const username = ref('')
const website = ref(null)
const email = ref('')
const avatar_url = ref(null)

// function to save edited task
const handleSubmit = async () => {      
  await profileStore.addProfile({
    name: name.value,
    username: username.value,
    website: website.value,
    email: email.value,
    avatar_url: avatar_url.value,
  }),

// Reset form values after task is added
    name.value = '' 
    username.value = ''
    website.value = null
    email.value = '' 
    avatar_url.value = null
}
// Watch for changes in user data to keep email in sync
watchEffect(() => {
  if(user.value){
    email.value = user.value.email
    console.log(profiles.value);
  }
})

</script>

<template>
  <article class="profile">
    <div v-if="profiles" >
      <div class="avatarProfile">
        <img :src="profiles.avatar_url" alt="profile pic">
      </div>
      <h2> Name: {{ profiles.name }} </h2>
      <h2> Username: {{ profiles.username }} </h2>
      <h2> Website: {{ profiles.website }} </h2>
      <h2> Email: {{ profiles.email }} </h2>
    </div>
  </article>
  <article>
    <div class="profileMaker">
      <form @submit.prevent="handleSubmit">
        <div class="name">
          <label for="nameForm">Name</label>
          <input type="text" id="nameForm"
            v-model="name" placeholder="hello, my name is"/>
        </div>
        <div class="username">
          <label for="usernameForm">Username</label>
          <input type="text" id="usernameForm"
            v-model="username" placeholder="username"/> 
        </div>
        <div class="website">
          <label for="websiteForm">Website</label>
          <input type="text" id="websiteForm"
            v-model="website" placeholder="website"/>
        </div>
        <div class="email">
          <label for="emailForm">e-mail</label>
          <input type="text" id="emailForm"
            v-model="email"/>
        </div>
        <section class="avatar">
          <label for="avatarForm">Avatar</label>
          <input type="text" id="avatarForm"
            v-model="avatar_url" placeholder="avatar"/>
        </section>
        <button class="submitButton" type="submit">Update your Profile</button>
      </form>
    </div>
  </article>
</template>

<style scoped>

.profile {
  width: 500px;
  margin: 100px auto;
  margin-bottom: 0%;
  text-align: left;
  background-color: var(--bg-color);
  border: none;
  box-shadow: var(--inner-items-box-shadow);
  padding: 30px;
  font-size: small;
  
}

.avatarProfile {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

/* aqui poner la tarjeta de perfil */

.profileMaker {
  width: 500px;
  margin: 50px auto;
  text-align: left;
  background-color: var(--bg-color);
  border: none;
  box-shadow: var(--inner-items-box-shadow);
  padding: 10px;
  

}

input {
  background: gainsboro;
}

label {
  color: var(--btn-color);
  font-size: 18px;
  margin-left: 5px;
  font-weight: 500;
}

.name{
  width: 100%;
  margin-top: 15px;
}

#nameForm{
  width: 480px;
  border: none;
  background-color: var(--secondary-bg-color);
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
}

.username{
  width: 100%;
  margin-top: 15px;
}

#usernameForm{
  width: 480px;
  border: none;
  background-color: var(--secondary-bg-color);
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
}

.website{
  width: 100%;
  margin-top: 15px;
}

#websiteForm{
  width: 480px;
  border: none;
  background-color: var(--secondary-bg-color);
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
}

.email{
  width: 100%;
  margin-top: 15px;
}

#emailForm{
  width: 480px;
  border: none;
  background-color: var(--secondary-bg-color);
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
}

.avatar{
  width: 100%;
  margin-top: 15px;
}

#avatarForm{
  width: 480px;
  border: none;
  background-color: var(--secondary-bg-color);
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
}

.submitButton {
  background-color: var(--btn-color);
  color: var(--btn-text-color);
  width: 480px;
  height: 70px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border-style: none;
  margin-block-start: 20px;
  margin-bottom: 5px;
  margin-top: 30px;
}

.submitButton:hover {
    background-color: rgba(20, 19, 19, 0.757);
}

</style>
