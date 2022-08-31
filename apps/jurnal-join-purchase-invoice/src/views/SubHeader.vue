<template>
  <mp-flex as="header" justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
    <mp-box>
      <mp-text is-link font-size="sm" color="blue.400" text-decoration="underline">Transaksi pembelian</mp-text>
      <mp-heading as="h1" font-size="2xl" font-weight="bold"> Join purchase invoice </mp-heading>
    </mp-box>
    <mp-flex align-items="center">
      <mp-button-group>
        <mp-popover id="impor">
          <mp-popover-trigger>
            <mp-button variant="outline" marginRight="2" right-icon="caret-down"> Tukar Faktur </mp-button>
          </mp-popover-trigger>
          <mp-popover-content max-width="48" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400" z-index="popover">
            <mp-popover-list>
              <mp-popover-list-item is-active>Purchase Invoice</mp-popover-list-item>
              <mp-popover-list-item>Purchase Order</mp-popover-list-item>
              <mp-popover-list-item>Purchase Quote</mp-popover-list-item>
              <mp-popover-list-item>Purchase Request</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
        <mp-button variant="outline">Lihat panduan</mp-button>
      </mp-button-group>
    </mp-flex>
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpButton,
  MpHeading,
  MpFlex,
  MpButtonGroup,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpText,
} from "@mekari/pixel";

export default {
  name: "SalesHeader",
  components: {
    MpBox,
    MpButton,
    MpHeading,
    MpFlex,
    MpButtonGroup,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpText,
  },
};
</script>
