<script setup lang="ts">
import { useStore } from "vuex";
import { ref, computed } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
const store = useStore();

let userName = computed(() => {
  return store.state.user.username;
});
const changeName = () => {
  let count = store.state.user.username;
  count++;
  store.commit("user/SET_USERNAME", count);
};

window.addEventListener(
  "message",
  (event) => {
    console.log("event", event.data);
    store.commit("user/SET_USERNAME", event.data);
    console.log("store.state.user.username", userName);
  },
  false
);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h2>子应用1</h2>
  <h2>{{ userName }}</h2>
  <button type="button" @click="changeName">count ++</button>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
