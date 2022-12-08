<template>
  <mp-box position="relative">
    <mp-popover :id="getId">
      <mp-popover-trigger>
        <slot name="trigger" />
      </mp-popover-trigger>

      <mp-popover-content width="max-content" min-width="full" max-width="90vw" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
        <slot name="content" />
      </mp-popover-content>
    </mp-popover>
  </mp-box>
</template>

<script>
import { MpBox, MpPopover, MpPopoverTrigger, MpPopoverContent } from "@mekari/pixel";
export default {
  components: {
    MpBox,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
  },
  props: {
    id: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {
    getId() {
      return this.id || this.useId();
    },
  },
  methods: {
    useId(size = 3) {
      let uuid = "";
      const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (let i = 0; i < size; i++) {
        uuid += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
      }
      return uuid;
    },
  },
};
</script>
