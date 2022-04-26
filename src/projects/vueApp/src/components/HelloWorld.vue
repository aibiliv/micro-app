<script setup lang="ts">
import { IframeHTMLAttributes, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

defineProps<{ msg: string }>();

const count = ref(0);
const goFirstScreen = () => {
  const toUrl = `http://${window.location.hostname}:${
    import.meta.env.VITE_APP_SYSTEM_PORT
  }/system-web`;
  // window.open( toUrl`, "_self");

  let iframe = document.createElement("iframe");
  iframe.id = "myIframe";
  iframe.src = toUrl;
  iframe.style.display = "none";
  const app = document.getElementById("app");
  app.appendChild(iframe);
  let myIframe = document.getElementById("myIframe");
  myIframe &&
    myIframe.addEventListener(
      "load",
      function () {
        let data = store.state.user.username;
        myIframe && myIframe.contentWindow.postMessage(data, toUrl);
        setTimeout(() => {
          window.open(toUrl, "_self");
        }, 200);
        //要清除掉事件
        this.removeEventListener("load", arguments.call, false);
      },
      false
    );
  // setTimeout(() => {

  //   if (myIframe) {
  //     let data = store.state.user.username;
  //     myIframe.contentWindow.postMessage(data, toUrl);
  //     setTimeout(() => {
  //       window.open(toUrl, "_self");
  //     }, 0);
  //   }
  // }, 100);
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <!-- <button type="button" @click="count++">count is: {{ count }}</button> -->
  <button type="button" @click="goFirstScreen">返回首屏</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
