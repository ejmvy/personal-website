<template>
  <nav class="flex w-3/4 justify-between items-center m-auto mt-8">
    <h1 class="font-logo text-3xl md:text-5xl font-bold">{{ myName }}</h1>
    <div class="flex" v-if="windowSize > 600">
      <ul
        class="font-links font-bold text-xl"
        v-for="link in links"
        :key="link.name"
      >
        <li class="px-4 cursor-pointer hover:text-gray-600">
          <a :href="link.srcLink" target="_blank">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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

    let links = [
      { name: "github", srcLink: "https://github.com/ejmvy" },
      {
        name: "codepen",
        srcLink:
          "https://codepen.io/collection/AykbWB?cursor=ZD0wJm89MCZwPTEmdj00",
      },
      {
        name: "linkedin",
        srcLink: "https://www.linkedin.com/in/ej-mcvey-a404b48a/",
      },
    ] as NavLink[];

    return { myName, links };
  },
});
</script>
