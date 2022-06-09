<template>
  <mp-pseudo-box
    as="router-link"
    to="#"
    role="group"
    display="flex"
    border-radius="sm"
    padding="2"
    min-height="20"
    transition="all .2s ease"
    :_hover="{
      backgroundColor: 'ice.50',
      color: 'blue.400',
      cursor: 'pointer',
    }"
  >
    <mp-flex gap="4">
      <mp-box>
        <mp-box
          border="1px"
          border-color="gray.50"
          border-radius="md"
          padding="2"
          :_groupHover="{
            backgroundColor: 'white',
          }"
        >
          <mp-icon :name="icon" />
        </mp-box>
      </mp-box>
      <mp-flex flex-direction="column" flex="1">
        <mp-text font-size="md" font-weight="semibold">
          {{ title }}
        </mp-text>
        <mp-text font-size="md" color="gray.600">
          {{ description }}
        </mp-text>
      </mp-flex>
    </mp-flex>
  </mp-pseudo-box>
</template>

<script>
import { MpBox, MpFlex, MpPseudoBox, MpText, MpIcon } from "@mekari/pixel";

export default {
  name: "SwitchAppItem",
  props: {
    title: [String],
    description: [String],
    icon: [String],
  },
  components: {
    MpBox,
    MpFlex,
    MpPseudoBox,
    MpText,
    MpIcon,
  },
};
</script>
