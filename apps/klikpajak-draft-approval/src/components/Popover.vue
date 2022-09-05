<template>
  <mp-popover id="custom-popover">
    <mp-popover-trigger>
      <slot name="trigger" />
    </mp-popover-trigger>
    <mp-popover-content max-width="64" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400" z-index="popover">
      <slot name="content" />
    </mp-popover-content>
  </mp-popover>
</template>

<script>
import { MpPopover, MpPopoverTrigger, MpPopoverContent } from "@mekari/pixel";
export default {
  name: "KPopover",
  components: {
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
  },
};
</script>

<style lang="scss" scoped></style>
