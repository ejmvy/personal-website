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
    <CssImage data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" />
    <MainText :main-header="mainHeader" />
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
    return { mainHeader };
  },
});
</script>
