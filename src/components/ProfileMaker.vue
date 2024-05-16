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
    console.log(email.value, "log del watchEffect");
  }
})

</script>

<template>
  <article>
    <div v-if="profiles">
      <div>
        <img :src="profiles.avatar_url" alt="profile pic">
      </div>
      <h2> {{ profiles.name }} </h2>
      <h2> {{ profiles.username }} </h2>
      <h2> {{ profiles.website }} </h2>
      <h2> {{ profiles.email }} </h2>
    </div>
  </article>
  <article>
    <div class="profileMaker">
      <form @submit.prevent="handleSubmit">
        <div class="name">
          <label for="titleForm">name</label>
          <input type="text" id="titleForm"
            v-model="name" placeholder="hello, my name is"/>
        </div>
        <div class="username">
          <label for="descriptionForm">username</label>
          <input type="text" id="descriptionForm"
            v-model="username" placeholder="username"/> 
        </div>
        <div class="website">
          <label for="website">website</label>
          <input type="text" id="website"
            v-model="website" placeholder="website"/>
        </div>
        <div class="email">
          <label for="email">email</label>
          <input type="text" id="email"
            v-model="email"/>
        </div>
        <section class="avatar">
          <label for="avatarForm">avatar</label>
          <input type="text" id="avatarForm"
            v-model="avatar_url" placeholder="avatar"/>
        </section>
        <button class="submitButton" type="submit">Update your Profile</button>
      </form>
    </div>
  </article>
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
