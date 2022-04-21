<script setup lang="ts">
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
  window.location.href = item.pathUrl;
};
</script>

<template>
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
