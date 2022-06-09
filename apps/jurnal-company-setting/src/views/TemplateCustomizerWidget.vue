<template>
  <mp-box position="fixed" :top="0" :bottom="0" :right="0" z-index="999">
    <mp-flex height="100vh" alignItems="center">
      <mp-box
        @click="show = !show"
        bg="brand.mekari"
        p="2"
        border-top-left-radius="0.5rem"
        border-bottom-left-radius="0.5rem"
        cursor="pointer"
      >
        <mp-icon
          name="settings"
          color="white"
          animation="1.1s linear 0s infinite normal none running animation-d2btug"
        />
      </mp-box>

      <mp-box
        v-if="show"
        bg="white"
        border-width="2px"
        border-color="brand.mekari"
        height="100vh"
        w="300px"
        p="4"
      >
        <mp-flex flex-direction="justify-between" mb="6">
          <mp-text> Story </mp-text>
        </mp-flex>
        <mp-flex flex-direction="column" gap="4">
          <slot />
        </mp-flex>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpIcon } from "@mekari/pixel";
export default {
  name: "TemplateCustomizerWidget",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
