<template>
  <mp-popover id="custom-popover">
    <mp-popover-trigger>
      <slot name="trigger" />
    </mp-popover-trigger>
    <mp-popover-content
      bg="white"
      rounded="md"
      shadow="lg"
      border-width="1px"
      border-color="gray.400"
      z-index="popover"
      v-bind="{ maxWidth: '64', ...contentStyle }"
    >
      <slot name="content" />
    </mp-popover-content>
  </mp-popover>
</template>

<script>
import { MpPopover, MpPopoverTrigger, MpPopoverContent } from "@mekari/pixel";
export default {
  components: {
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
  },
  props: {
    contentStyle: Object,
  },
};
</script>
