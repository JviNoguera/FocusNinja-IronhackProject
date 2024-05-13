<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

function signOut() {
    userStore.signOut()
    router.push({ path: '/auth' })
}

</script>

<template>
    <nav class= "navBar">
        <ul class="navBarFlex">
            <li>
              <RouterLink class="navLink" to="/auth">Sign In</RouterLink>
            </li>
            <li>
              <RouterLink class="navLink" to="/">Dashboard</RouterLink>
            </li>
            <li>
              <RouterLink class="navLink" to="/profile">Profile</RouterLink>
            </li>
        </ul>
        <div>
            <button class="signOutBtn" type="" @click="signOut">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
                </svg>
            </button>
        </div>
    </nav>
</template>

<style scoped>

.navBar {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secondary-bg-color);
    height: 100px;
    padding-inline: 10px
}   

.navBarFlex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

li {
    list-style: none;
}

.navLink {
    background-color: var(--btn-color);
    color: var(--btn-text-color);
    width: 200px;
    height: 60px;
    cursor: pointer;
    box-shadow: none;
    outline: none;
    border-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none; 
    border-radius: var(--border-radius);
    box-shadow:  rgb(99, 97, 97) 4px 0px 4px;
    
}

.signOutBtn {

    margin-right: 30px;
    background-color: rgb(188, 22, 22);
    width: 200px;
    height: 60px;
    cursor: pointer;
    box-shadow: none;
    outline: none;
    border-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none; 
    opacity: 0.8;
    box-shadow: rgb(43, 42, 42) 10px 0px 10px;
    border-radius: var(--border-radius);
}

svg {
    fill: var(--btn-text-color);
    width: 20px; 
    height: 20px; 
}
</style>