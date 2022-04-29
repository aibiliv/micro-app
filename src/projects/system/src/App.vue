<script setup lang="ts">
import { ref, watch } from "vue";
import { jumpProject } from "@/utils";
const whiteList: string[] = ["http://localhost:8081", "http://localhost:8082"];
// 将iframe传来的消息保存至本地
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

type ProjectConfig = {
  id: number;
  name: string;
  pathUrl: string;
};
//子应用列表
const appList: ProjectConfig[] = [
  {
    id: 1,
    name: "子应用1",
    pathUrl: `http://${window.location.hostname}:${
      import.meta.env.VITE_APP_VUEAPP_PORT
    }/vueApp-web/`,
  },
  {
    id: 2,
    name: "子应用2",
    pathUrl: `http://${window.location.hostname}:${
      import.meta.env.VITE_APP_REACTAPP_PORT
    }/reactApp-web/`,
  },
];
</script>

<template>
  <h2>
    {{ initCount }}<button type="button" @click="initCount++">count ++</button>
  </h2>
  <div class="app-list">
    <div
      class="app-item"
      v-for="item in appList"
      :key="item.id"
      @click="jumpProject({ toUrl: item.pathUrl, postData: initCount })"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .app-item {
    @extend .app-list;
    width: 200px;
    height: 200px;
    background-color: #ccc;
    border-radius: 10px;
    font-size: 40px;
    cursor: pointer;
    &:hover {
      background-color: rgb(48, 190, 233);
    }
  }
}
</style>
