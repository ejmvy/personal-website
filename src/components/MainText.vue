<template>
  <div class="flex flex-col w-3/5 mt-16 md:mt-0 text-center">
    <div class="font-logo text-5xl pb-6">{{ mainHeader }}</div>
    <div class="font-links text-2xl md:text-5xl font-bold tracking-wider">
      {{ mainMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    mainHeader: {
      type: String,
      default: "Hi There",
    },
    mainMessage: {
      type: String,
      default: "",
    },
  },
});
</script>
