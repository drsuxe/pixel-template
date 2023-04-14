<template>
  <mp-flex
    justify="space-between"
    align-items="center"
    padding-x="6"
    padding-y="3"
  >
    <mp-box height="12">
      <mp-text as="p" font-size="sm" color="gray.600">{{ title }}</mp-text>
      <mp-heading as="h1" font-size="2xl" font-weight="semibold">
        {{ subtitle }}
      </mp-heading>
    </mp-box>
    <mp-button>Action</mp-button>
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex, MpText, MpHeading, MpButton } from "@mekari/pixel";

export default {
  name: "SubHeaderChild",
  props: {
    title: [String],
    subtitle: [String],
  },
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpButton,
  },
};
</script>