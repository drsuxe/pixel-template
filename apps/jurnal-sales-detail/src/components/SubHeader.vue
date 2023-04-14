<template>
  <mp-box>
    <slot />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";

export default {
  name: "SubHeader",
  props: {
    title: [String],
  },
  components: {
    MpBox,
  },
};
</script>
