
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
      <span>{{ hours }}</span> : <span>{{ minutes }}</span> 
    </div>
</template>
  
  
  <style scoped>

  .clock {
    width: 320px;
    font-family: orbitron;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    color: white;
    opacity: 0.6;
  }

  .clock span {
  max-width: 60px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  display: inline-block;
  font-size: 35px;
  color: white;
  text-shadow: 
    0 0 5px var(--btn-hover-color), 
    0 0 10px var(--btn-hover-color), 
    0 0 15px var(--btn-hover-color), 
    0 0 20px var(--btn-hover-color), 
    0 0 40px var(--btn-hover-color);
}

  </style>