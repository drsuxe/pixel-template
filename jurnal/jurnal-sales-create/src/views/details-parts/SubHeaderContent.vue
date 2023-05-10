<template>
  <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
    <mp-box>
      <mp-text is-link text-decoration="underline">Penjualan</mp-text>
      <mp-flex align-items="center">
        <mp-heading as="h1" font-size="2xl" font-weight="semibold" mr="2"> Penagihan Penjualan SI - MKR/01/134/123 </mp-heading>
        <mp-badge variant-color="orange">Terbayar sebagian</mp-badge>
      </mp-flex>
    </mp-box>

    <mp-flex align-items="center" gap="2">
      <mp-button variant="outline">Setujui</mp-button>
      <PopoverButtonApprovalLog />
      <PopoverButtonComment />
      <mp-tooltip label="Sebelumnya" position="top" use-portal>
        <mp-button-icon name="chevrons-left" />
      </mp-tooltip>
      <mp-tooltip label="Selanjutnya" position="top" use-portal>
        <mp-button-icon name="chevrons-right" />
      </mp-tooltip>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { MpFlex, MpButton, MpBox, MpTooltip, MpHeading, MpBadge, MpText, MpButtonIcon } from "@mekari/pixel";
import { PopoverButtonApprovalLog, PopoverButtonComment } from "./index";
export default {
  components: {
    MpFlex,
    MpButton,
    MpBox,
    MpTooltip,
    MpHeading,
    MpBadge,
    MpText,
    MpButtonIcon,
    PopoverButtonApprovalLog,
    PopoverButtonComment,
  },
};
</script>
