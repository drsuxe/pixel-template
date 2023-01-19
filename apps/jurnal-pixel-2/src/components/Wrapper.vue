<template>
  <ThemeProvider>
    <MpReset />
    <slot />
  </ThemeProvider>
</template>

<script>
import { ThemeProvider, MpReset } from "@mekari/pixel";

export default {
  name: "Wrapper",
  components: {
    ThemeProvider,
    MpReset,
  },
};
</script>
