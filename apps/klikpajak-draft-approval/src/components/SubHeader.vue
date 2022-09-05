<template>
  <mp-flex
    justify="space-between"
    align-items="center"
    padding-x="6"
    padding-y="1.063rem"
  >
    <mp-box>
      <mp-heading as="h1" font-size="2xl" font-weight="bold">
        {{ title }}
      </mp-heading>
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex, MpHeading } from "@mekari/pixel";

export default {
  name: "SubHeader",
  props: {
    title: [String],
  },
  components: {
    MpBox,
    MpFlex,
    MpHeading,
  },
};
</script>
