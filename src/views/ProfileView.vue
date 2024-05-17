<script setup>
import AppHeader from '@/components/AppHeader.vue';
import ProfileMaker from '@/components/ProfileMaker.vue';
import AppFooter from '@/components/AppFooter.vue';

</script>

<template>
    <article class="sized">
     <AppHeader/>
    <div>
        <h1>Profile</h1>
        <p>This is the profile page</p>
    </div>
    <div>
        <ProfileMaker/>
    </div>
    </article>
    <AppFooter/>
</template>

<style scoped>
.sized {
  height: 90vh;
}
</style>