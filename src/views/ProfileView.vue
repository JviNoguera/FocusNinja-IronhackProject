<script setup>
import AppHeader from '@/components/AppHeader.vue';
import ProfileMaker from '@/components/ProfileMaker.vue';
import AppFooter from '@/components/AppFooter.vue';

</script>

<template>
    <AppHeader/>
        <article class="sized">
            <div>
                <ProfileMaker/>
            </div>
        </article>
    <AppFooter class="footer"/>
</template>

<style scoped>
.sized {
  padding-bottom: 10vh;
}

</style>