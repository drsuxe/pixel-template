<template>
  <mp-box mb="4">
    <mp-flex gap="2">
      <mp-text fontWeight="semibold"> Akses cepat </mp-text>
      <mp-tag variant="outline" default="Default">Buat ID Billing</mp-tag>
      <mp-tag variant="outline" default="Default">Lapor SPT tahunan</mp-tag>
      <mp-tag variant="outline" default="Default">Buat faktur keluaran</mp-tag>
      <mp-tag variant="outline" default="Default">Buat faktur masukan</mp-tag>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpTag, MpText } from "@mekari/pixel";
export default {
  components: {
    MpBox,
    MpFlex,
    MpTag,
    MpText,
  },
};
</script>
