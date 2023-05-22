<template>
  <mp-grid template-columns="repeat(12, 1fr)">
    <mp-grid-item col-span="4">
      <mp-text color="gray.600"> {{ title }} </mp-text>
    </mp-grid-item>
    <mp-grid-item col-span="8">
      <slot />
    </mp-grid-item>
  </mp-grid>
</template>

<script>
import { MpGrid, MpGridItem, MpText } from "@mekari/pixel";
export default {
  components: {
    MpGrid,
    MpGridItem,
    MpText,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
