
<script setup>
import { ref} from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user.js';
import { useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import HeaderClock from '@/components/HeaderClock.vue';

const profileStore = useProfileStore();
const { profiles } = storeToRefs (profileStore);
const router = useRouter();
const userStore = useUserStore();
const isMenuOpen = ref(false);



function signOut() {
    userStore.signOut();
    router.push({ path: '/auth' });
}

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

</script>

<template>
    <nav class= "navBar">
        <div class="navBar-left">
            <div class="menu-icon" @click="toggleMenu">
                <svg>
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-linecap="butt" stroke-width="3" />
                </svg>
            </div>
                <div>
                    <ul v-if="isMenuOpen" class="navBarFlex">
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
                </div>
            <RouterLink class="appLogo" to="/">
                <img src="" alt="logo">
            </RouterLink>
        </div>
        <div class="navBar-center">
            <div>
            <HeaderClock/>
            </div>
        </div>
        <div class="navBar-right">
            <div v-if ="profiles">
            <RouterLink class="avatar" to="/profile">
                <img :src= "profiles.avatar_url" alt="Avatar">
            </RouterLink>
            </div>
            <div>
                <button class="signOutBtn" type="" @click="signOut">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
                </svg>
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped>

.navBar {
    width: 100vw;
    height: 100px;
    background-color: var(--secondary-bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    padding-left: 20px;
    padding-right: 20px;
}

.navBar-left,
.navBar-center,
.navBar-right {
    width: 33%;
}

.navBar-left {
  display: flex;
  align-items: center;
  justify-content: left;
}

.navBar-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navBar-right {
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 20px;
}

.avatar img {
    margin-top: 5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
}

.menu-icon {
    cursor: pointer;
}

.menu-icon svg {
    fill: none;
    width: 24px;
    height: 24px;
}

ul { 
    position: absolute;
    top: 60%;
    margin-left: -40px;
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

.appLogo {
    margin-left: 30px;
    text-decoration: none;
}

.signOutBtn {
    margin-right: 10px;
    background-color: rgb(188, 22, 22);
    width: 80px;
    height: 50px;
    cursor: pointer;
    box-shadow: none;
    outline: none;
    border-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none; 
    opacity: 0.8;
    box-shadow: rgb(43, 42, 42) 5px 0px 5px;
    border-radius: var(--border-radius);
}

svg {
    fill: var(--btn-text-color);
    width: 20px; 
    height: 20px; 
}

</style> 



