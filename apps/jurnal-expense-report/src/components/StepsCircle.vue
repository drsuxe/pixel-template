<template>
  <mp-flex
    width="full"
    justify-content="space-between"
    align-items="flex-start"
    flex-direction="row"
    flex="1 1 0%"
  >
    <slot />
  </mp-flex>
</template>

<script>
import { MpFlex } from "@mekari/pixel";

export default {
  name: "StepsCircle",
  components: { MpFlex },
};
</script>
