<script setup>
import AppMain from "@/components/AppMain.vue";
</script>

<template>
  <div id="layout" class=" overflow-x-hidden overflow-y-hidden">
    <AppMain />
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
