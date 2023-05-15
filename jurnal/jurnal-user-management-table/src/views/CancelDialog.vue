<template>
  <mp-box ref="popover">
    <mp-popover id="popover-title" is-manual :is-open="isOpen">
      <mp-popover-trigger>
        <mp-box>
          <slot />
        </mp-box>
      </mp-popover-trigger>
      <mp-popover-content max-width="330px" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
        <mp-box
          px="4"
          py="3"
          position="relative"
          font-weight="semibold"
          font-size="md"
          bg="background"
          border-bottom="solid 1px"
          border-color="gray.100"
          rounded-top="md"
        >
          Batalkan penambahan peran?
          <mp-button-icon name="close" position="absolute" top="8px" right="12px" @click="handleClosePopover" />
        </mp-box>

        <mp-box p="4">
          <mp-text>Data yang sudah Anda isi tidak akan tersimpan.</mp-text>
        </mp-box>

        <mp-flex pt="2" px="4" pb="4" justify-content="flex-end" gap="2">
          <mp-button variant="ghost" @click="$emit('accept')">Lanjutkan penambahan</mp-button>
          <mp-button variant-color="red" @click="handleClosePopover">Batalkan</mp-button>
        </mp-flex>
      </mp-popover-content>
    </mp-popover>
  </mp-box>
</template>

<script>
import { MpButton, MpPopover, MpPopoverTrigger, MpPopoverContent, MpText, MpButtonIcon, MpBox, MpFlex } from "@mekari/pixel";

export default {
  name: "CancelDialog",
  components: {
    MpButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpText,
    MpButtonIcon,
    MpBox,
    MpFlex,
  },
  props: {
    isOpen: Boolean,
  },
  methods: {
    handleClosePopover() {
      this.$emit('close')
    },
  },
};
</script>
