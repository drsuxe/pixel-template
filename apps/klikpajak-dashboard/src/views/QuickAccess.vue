<template>
  <mp-box mb="4">
    <mp-flex gap="3" align="center">
      <mp-text fontWeight="semibold"> Akses cepat </mp-text>

      <mp-flex>
        <mp-button variant="link"> Buat ID Billing </mp-button>
        <mp-divider orientation="vertical" />
        <mp-button variant="link"> Lapor SPT tahunan </mp-button>
        <mp-divider orientation="vertical" />
        <mp-button variant="link"> Buat faktur keluaran </mp-button>
        <mp-divider orientation="vertical" />
        <mp-button variant="link"> Buat faktur masukan </mp-button>
        <mp-divider orientation="vertical" />
        <mp-button variant="link"> Upload bukti potong </mp-button>
        <mp-divider orientation="vertical" />
        <mp-button variant="link"> Buat faktur masukan </mp-button>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpButton, MpDivider } from "@mekari/pixel";
export default {
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpDivider,
  },
};
</script>
