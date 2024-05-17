
<script setup>
import { ref, onMounted } from 'vue';

const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');

const updateClock = () => {
  const now = new Date();
  hours.value = String(now.getHours()).padStart(2, '0');
  minutes.value = String(now.getMinutes()).padStart(2, '0');
  seconds.value = String(now.getSeconds()).padStart(2, '0');
};

onMounted(() => {
  updateClock();
  setInterval(updateClock, 1000);
});

</script>

<template>
    <div class='clock'>
      <span>{{ hours }}</span> : <span>{{ minutes }}</span> : <span>{{ seconds }}</span>
    </div>
</template>
  
  
  <style scoped>

  .clock {
    width: 320px;
    font-family: orbitron;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    color: var(--text-color);
    opacity: 0.4;
  }

  .clock span {
    max-width: 60px;
    font-family: orbitron;
    font-weight: 700;
    display: inline-block;
    font-size: 40px;
    color: var(--text-color);
    opacity: 0.8;
   /* recordar poner retroilumnicacion dependiendo del color del fondo final*/
  }

  </style>