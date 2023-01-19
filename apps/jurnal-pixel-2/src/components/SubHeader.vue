<template>
  <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
    <slot />
  </mp-flex>
</template>

<script>
import {MpFlex } from "@mekari/pixel";

export default {
  name: "SubHeader",
  props: {
    title: [String],
  },
  components: {
    MpFlex,
  },
};
</script>
