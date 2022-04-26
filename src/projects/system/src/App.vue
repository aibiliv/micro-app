<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";

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
    store.commit("user/SET_USERNAME", event.data);
  },
  false
);
//子应用跳转
type ProjectConfig = {
  id: number;
  name: string;
  pathUrl: string;
};
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
const jumpUrl = (item: ProjectConfig) => {
  // window.open(item.pathUrl, "_self");

  let iframe = document.createElement("iframe");
  iframe.id = "myIframe";
  iframe.src = item.pathUrl;
  iframe.style.display = "none";
  const app = document.getElementById("app");
  app.appendChild(iframe);
  let myIframe = document.getElementById("myIframe");
  myIframe &&
    myIframe.addEventListener(
      "load",
      function () {
        let data = userName.value;
        myIframe && myIframe.contentWindow.postMessage(data, item.pathUrl);
        setTimeout(() => {
          window.open(item.pathUrl, "_self");
        }, 200);
        //要清除掉事件
        this.removeEventListener("load", arguments.call, false);
      },
      false
    );
};
</script>

<template>
  <h2>
    {{ userName }}<button type="button" @click="changeName">count ++</button>
  </h2>
  <div class="app-list">
    <div
      class="app-item"
      v-for="item in appList"
      :key="item.id"
      @click="jumpUrl(item)"
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
