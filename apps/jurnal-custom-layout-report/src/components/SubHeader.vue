<template>
  <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
    <mp-box>
      <mp-heading as="h1" font-size="2xl" font-weight="semibold">
        {{ title }}
      </mp-heading>
    </mp-box>
    <mp-button>Action</mp-button>
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpButton } from "@mekari/pixel";

export default {
  name: "SubHeader",
  props: {
    title: [String],
  },
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpButton,
  },
};
</script>
