<template>
  <div :class="{ sideBackground: windowSize > 600 }"></div>
  <Header :window-size="windowSize" />

  <MainContent />
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import Header from "./components/Header.vue";
import MainContent from "./components/MainContent.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    MainContent,
  },

  setup() {
    let windowWidth = ref(window.innerWidth);

    const onWidthChange = () => (windowWidth.value = window.innerWidth);

    onMounted(() => window.addEventListener("resize", onWidthChange));

    const windowSize = computed(() => windowWidth.value);

    return { windowSize };
  },
});
</script>

<style>
body {
  background: #f3f3f3;
  margin-top: 60px;
}

.sideBackground {
  background: #b8a8e6;
  width: 65%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
}
</style>
