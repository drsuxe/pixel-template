<template>
  <ThemeProvider>
    <MpReset />
    <slot />
  </ThemeProvider>
</template>

<script>
import { ThemeProvider, MpReset } from "@mekari/pixel";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Wrapper",
  components: {
    ThemeProvider,
    MpReset,
  },
};
</script>
