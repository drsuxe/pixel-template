<template>
  <mp-flex as="header" justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
    <mp-flex align-items="flex-end">
      <mp-heading as="h1" font-size="2xl" font-weight="semibold"> Laporan Piutang Pelanggan </mp-heading>
      <mp-text color="gray.600" ml="1"> (dalam Rupiah)</mp-text>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { MpHeading, MpFlex, MpText } from "@mekari/pixel";

export default {
  name: "SubHeader",
  components: {
    MpHeading,
    MpFlex,
    MpText,
  },
};
</script>
