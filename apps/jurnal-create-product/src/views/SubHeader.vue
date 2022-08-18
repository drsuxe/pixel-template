<template>
  <mp-flex as="header" align-items="center" padding-x="6" height="72px">
    <mp-box>
      <mp-text is-link font-size="sm" color="blue.400" text-decoration="underline">Daftar barang & jasa</mp-text>
      <mp-heading as="h1" font-size="2xl" font-weight="bold"> Buat Produk / Jasa Baru </mp-heading>
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpBox, MpHeading, MpFlex, MpText } from "@mekari/pixel";

export default {
  name: "SalesHeader",
  components: {
    MpBox,
    MpHeading,
    MpFlex,
    MpText,
  },
};
</script>
