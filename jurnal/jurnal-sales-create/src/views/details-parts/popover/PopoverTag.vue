<template>
  <mp-popover :trigger="trigger" :id="getId">
    <mp-popover-trigger>
      <mp-box>
        <mp-tag>
          {{ label }}
        </mp-tag>
      </mp-box>
    </mp-popover-trigger>
    <mp-popover-content max-width="288px" width="max-content" z-index="popover">
      <mp-popover-panel bg="white" px="4">
        <slot />
      </mp-popover-panel>
    </mp-popover-content>
  </mp-popover>
</template>

<script>
import { MpBox, MpPopover, MpPopoverTrigger, MpPopoverContent, MpPopoverPanel, MpTag } from "@mekari/pixel";
import { useId } from "@mekari/pixel-utils";

export default {
  name: "ApprovalLog",
  components: {
    MpBox,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverPanel,
    MpTag,
  },
  computed: {
    getId() {
      return this.id || useId();
    },
  },
  props: {
    id: [String],
    label: [String],
    trigger: { type: String, default: "click" }, // hover | click
  },
};
</script>
