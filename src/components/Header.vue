<template>
  <div>
    <nav class="flex w-3/4 justify-between items-center m-auto mt-8">
      <h1 class="font-logo text-3xl md:text-5xl font-bold">{{ myName }}</h1>
      <div class="flex" v-if="windowSize > 600">
        <ul
          class="font-links font-bold text-xl"
          v-for="link in links"
          :key="link.name"
        >
          <li
            class="
              px-4
              cursor-pointer
              hover:text-gray-700
              flex flex-col
              items-center
              nav-link
            "
          >
            <a class="" :href="link.srcLink" target="_blank">{{ link.name }}</a>
            <img class="w-28 no-display" src="../../public/underline-img.png" />
          </li>
        </ul>
      </div>
      <div v-else>
        <div class="wrapper-menu" @click="addClass">
          <div class="line-menu half start"></div>
          <div class="line-menu"></div>
          <div class="line-menu half end"></div>
        </div>
      </div>
    </nav>
    <transition name="slide-up">
      <div v-if="showMobileMenu" class="fixed flex bottom-0 w-full mobile-nav">
        <ul
          class="
            flex
            justify-center
            text-center
            align-center
            w-full
            font-links
            border-gray-300 border
            hover:text-gray-700
          "
          v-for="link in links"
          :key="link.name"
        >
          <li class="flex flex-col items-center">
            <img class="w-6 h-6" :src="require(`../../public/${link.logo}`)" />
            <a :href="link.srcLink" target="_blank">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NavLink } from "../types";

export default defineComponent({
  name: "HelloWorld",
  props: {
    windowSize: {
      type: Number,
      default: 1000,
    },
  },

  setup() {
    let myName = "EJ McVey";

    let showMobileMenu = ref(false);

    let links = [
      {
        name: "github",
        srcLink: "https://github.com/ejmvy",
        logo: "github.png",
      },
      {
        name: "codepen",
        srcLink:
          "https://codepen.io/collection/AykbWB?cursor=ZD0wJm89MCZwPTEmdj00",
        logo: "codepen.png",
      },
      {
        name: "linkedin",
        srcLink: "https://www.linkedin.com/in/ej-mcvey-a404b48a/",
        logo: "linkedin.png",
      },
    ] as NavLink[];

    const addClass = () => {
      showMobileMenu.value = !showMobileMenu.value;
      var wrapperMenu = document.querySelector(".wrapper-menu");
      if (wrapperMenu) wrapperMenu.classList.toggle("open");
    };

    return { myName, links, addClass, showMobileMenu };
  },
});
</script>

<style scoped lang="scss">
.mobile-nav {
  background: #f3f3f3;
  z-index: 5;
}
.no-display {
  opacity: 0;
}

.nav-link:hover {
  .no-display {
    opacity: 1;
  }
}

// .slide-enter-active, .slide-leave-active {
//   transition: bottom .5s;
// }
// .slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }

// --------------------------------
.wrapper-menu {
  width: 28px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;
}

.wrapper-menu.open {
  transform: rotate(-45deg);
}

.line-menu {
  background-color: #000;
  border-radius: 5px;
  width: 100%;
  height: 3px;
}

.line-menu.half {
  width: 50%;
}

.line-menu.start {
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: right;
}

.open .line-menu.start {
  transform: rotate(-90deg) translateX(3px);
}

.line-menu.end {
  align-self: flex-end;
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: left;
}

.open .line-menu.end {
  transform: rotate(-90deg) translateX(-3px);
}
</style>
