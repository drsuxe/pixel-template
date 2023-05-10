<template>
  <mp-popover>
    <mp-popover-trigger>
      <mp-button size="sm" variant="outline" variant-color="red" my="2">Dikembalikan</mp-button>
    </mp-popover-trigger>
    <mp-popover-content width="304px" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400" p="6">
      <mp-text font-weight="semibold"> Pembayaran berhasil dikembalikan </mp-text>
      <mp-text mt="2.5"> Pengembalian pembayaran dilakukan oleh John Wick pada 25/03/2021. </mp-text>

      <mp-text is-link mt="2.5"> Lihat pengembalian pembayaran </mp-text>
    </mp-popover-content>
  </mp-popover>
</template>

<script>
import { MpButton, MpPopover, MpPopoverTrigger, MpPopoverContent, MpText } from "@mekari/pixel";

export default {
  name: "PopoverButtonReturned",
  components: {
    MpButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpText,
  },
};
</script>
