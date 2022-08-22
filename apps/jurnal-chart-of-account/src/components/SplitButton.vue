<template>
  <mp-box display="flex">
    <mp-button variant="solid" border-right-radius="0"> {{ label }} </mp-button>
    <mp-popover id="popover-01">
      <mp-popover-trigger>
        <mp-button border="0px" border-left="1px" border-left-color="ice.50" border-left-radius="0" variant="solid" right-icon="caret-down"> </mp-button>
      </mp-popover-trigger>
      <mp-popover-content max-width="64" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
        <slot name="popoverContent" />
      </mp-popover-content>
    </mp-popover>
  </mp-box>
</template>

<script>
import { MpBox, MpButton, MpPopover, MpPopoverTrigger, MpPopoverContent } from "@mekari/pixel";
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
  },
  components: {
    MpBox,
    MpButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
  },
};
</script>
