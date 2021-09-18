<template>
  <div
    class="
      flex flex-col
      w-full
      md:flex-row md:w-3/4
      h-full
      justify-between
      items-center
      m-auto
      mt-20
      md:mt-44
    "
  >
    <CssImage />
    <MainText :main-header="mainHeader" :main-message="mainMessage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CssImage from "./CssImage.vue";
import MainText from "./MainText.vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    CssImage,
    MainText,
  },

  setup() {
    const mainHeader = "Hi, i'm EJ";

    const mainMessage =
      "I'm a front end developer born and based in Dublin. I enjoy all things CSS, Vue, Typescript & Node.";

    return { mainHeader, mainMessage };
  },
});
</script>
