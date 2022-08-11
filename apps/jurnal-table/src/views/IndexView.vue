<template>
  <mp-flex direction="column" align="center" justify="center">
    <mp-stack max-w="lg" p="6" spacing="4">
      <mp-button w="full" as="router-link" to="/basic"> Basic Table </mp-button>
      <mp-button as="router-link" to="/advance"> Advance Table </mp-button>
    </mp-stack>
  </mp-flex>
</template>

<script>
import { MpFlex, MpStack, MpButton } from "@mekari/pixel";
export default {
  components: {
    MpFlex,
    MpStack,
    MpButton,
  },
};
</script>

<style lang="scss" scoped></style>
