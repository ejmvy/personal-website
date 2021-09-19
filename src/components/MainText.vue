<template>
  <div class="flex flex-col w-3/5 mt-16 md:mt-0 text-center">
    <div
      class="font-logo text-5xl pb-6"
      data-aos="fade-left"
      data-aos-delay="600"
    >
      {{ mainHeader }}
    </div>
    <div
      data-aos="fade-left"
      data-aos-delay="1000"
      data-aos-duration="1000"
      class="text-2xl md:text-5xl font-bold tracking-wider"
    >
      I'm a front end developer born and based in Dublin. I enjoy all things

      <span
        class="font-link"
        @mouseover="showCss = true"
        @mouseout="showCss = false"
        ><div v-if="showCss" class="super-links">
          <div class="popupSuper1"></div>
          <div class="popupSuper2"></div>
          <div class="popupSuper3"></div>
        </div>
        CSS </span
      >, <span class="font-link">Vue</span>,
      <span class="font-link">TypeScript</span>
      &
      <span class="font-link">Node</span>.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    mainHeader: {
      type: String,
      default: "Hi There",
    },
  },
  setup() {
    let showCss = ref(false);

    return { showCss };
  },
});
</script>

<style scoped lang="scss">
.font-link {
  z-index: 3;
  position: relative;
}

.font-links {
  z-index: 3;
}
.font-link:hover {
  cursor: pointer;
  color: white;
}

.super-links {
  z-index: 15;
  position: absolute;
  top: -30px;
  left: 100px;
}

.popupSuper1 {
  width: 150px;
  height: 120px;
  position: absolute;
  background: url("https://i.ibb.co/ZhXT28P/ironman.png");
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  background-size: cover;
  opacity: 0;
  top: 0;
  right: 250px;
  animation: fade-up 0.3s ease-in forwards;
}

@keyframes fade-up {
  0% {
    top: 0;
  }
  100% {
    opacity: 1;
    top: -150px;
  }
}

.popupSuper2 {
  @extend .popupSuper1;
  background: url("https://i.ibb.co/LCxf1b6/captainA.png");
  background-size: cover;
  top: -30px;
  right: 80px;
  animation: fade-up2 0.3s 0.1s ease-in forwards;
}

@keyframes fade-up2 {
  0% {
    top: 0;
  }
  100% {
    top: -200px;
    opacity: 1;
  }
}

.popupSuper3 {
  @extend .popupSuper1;
  background: url("https://i.ibb.co/0tLcVCw/greenL.png");
  background-size: cover;
  top: -100px;
  right: -100px;
  animation: fade-up3 0.3s 0.2s ease-in forwards;
}

@keyframes fade-up3 {
  0% {
    top: -100px;
  }
  100% {
    top: -150px;
    opacity: 1;
  }
}
</style>
