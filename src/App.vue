<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace;
}
.app {
  display: flex;
  background-color: rgb(100, 16, 16);
  height: fit-content;
  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>

<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>
