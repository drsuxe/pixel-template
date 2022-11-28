<template>
  <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="3">
    <mp-box height="12">
      <mp-text as="p" font-size="sm" text-decoration="underline" is-link>{{ title }}</mp-text>
      <mp-heading as="h1" font-size="2xl" font-weight="semibold">
        {{ subtitle }}
      </mp-heading>
    </mp-box>
    <mp-box>
      <slot name="right" />
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex, MpText, MpHeading } from "@mekari/pixel";

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
  },
};
</script>
