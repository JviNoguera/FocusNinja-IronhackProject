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
  await profileStore.editProfile({
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
  <article class="profile-container">
    <div v-if="profiles" class="profile profileCard-container">
      <div class="avatarProfile">
        <img :src="profiles.avatar_url" alt="profile pic">
      </div>
      <div>
        <h2> Name: {{ profiles.name }} </h2>
        <h2> Username: {{ profiles.username }} </h2>
        <h2> Website: {{ profiles.website }} </h2>
        <h2> Email: {{ profiles.email }} </h2>
      </div>
    </div>
  
    <form @submit.prevent="handleSubmit" class="profileMaker">
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
        <div class="avatar">
          <label for="avatarForm">Avatar</label>
          <input type="text" id="avatarForm"
            v-model="avatar_url" placeholder="avatar"/>
        </div>
        <button class="submitButton" type="submit">Update your Profile</button>
    </form>
  </article>
</template>

<style scoped>

.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5%;
}

.profileCard-container {
  display: flex;
  justify-content:space-around;
  align-items: center;
  flex-direction: row-reverse;
}

.profile { 
  width: 50%;
  text-align: left;
  background-color: var(--bg-color);
  box-shadow: var(--inner-items-box-shadow);
  padding: 30px;
  font-size: x-small;
  margin-top: 10%;
  margin-bottom: 5%;
}

.avatarProfile img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.profileMaker {
  width: 50%;
  text-align: left;
  background-color: var(--bg-color);
  border: none;
  box-shadow: var(--inner-items-box-shadow);
  padding: 10px;
  margin-bottom: 5%;
}

input {
  background: var(--secondary-bg-color);
}

label {
  color: var(--label-color);
  font-size: 18px;
  margin-left: 5px;
  font-weight: 500;
}

.name{
  width: 100%;
  margin-top: 15px;
}

#nameForm,
#usernameForm,
#websiteForm,
#emailForm,
#avatarForm {
  width: 100%;
  border: none;
  background-color: var(--secondary-bg-color);
  height: 60px;
  margin-block-start: 10px;
  padding-left: 15px;
}

.name,
.username,
.website,
.email,
.avatar {
  width: 100%;
  margin-top: 15px;
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
  margin-top: 30px;
}

.submitButton:hover {
    background-color: rgba(20, 19, 19, 0.757);
}

@media (max-width: 576px) {
  
  .profileCard-container {
    flex-direction: column;
    gap: 10px;
    margin-top: 25%;
  }

  .profile {
    width: 80%;
    font-size: xx-small;
  }

  .profileMaker {
    width: 80%;
  } 
} 

</style>
