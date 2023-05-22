<template>
  <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
    <mp-box>
      <mp-text is-link text-decoration="underline">Penjualan</mp-text>
      <mp-flex align-items="center">
        <mp-heading as="h1" font-size="2xl" font-weight="semibold" mr="2"> Buat Penagihan Penjualan </mp-heading>
      </mp-flex>
    </mp-box>

    <mp-flex align-items="center" gap="2">
      <mp-button variant="outline">Penagihan Penjualan
        <mp-icon name="chevrons-down" size="sm" ml="1"/>
      </mp-button>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { MpFlex, MpButton, MpBox, MpHeading, MpText, MpIcon } from "@mekari/pixel";
export default {
  components: {
    MpFlex,
    MpButton,
    MpBox,
    MpHeading,
    MpText,
    MpIcon
  },
};
</script>
