<script setup lang="ts">
import { ref, watch } from "vue";
import { jumpProject } from "@/utils";
import HelloWorld from "./components/HelloWorld.vue";
const whiteList: string[] = ["http://localhost:8080"];
window.addEventListener(
  "message",
  (event) => {
    if (!whiteList.includes(event.origin)) return;
    localStorage.setItem("count", event.data);
  },
  false
);
let initCount = ref(Number(localStorage.getItem("count")));
watch(initCount, (newVal) => localStorage.setItem("count", newVal));
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h2>子应用1</h2>
  <h2>{{ initCount }}</h2>
  <button type="button" @click="initCount++">count ++</button>
  <button type="button" @click="jumpProject({ postData: initCount })">
    返回首屏
  </button>
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
