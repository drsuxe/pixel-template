<template>
  <mp-flex
    as="header"
    justify="space-between"
    align-items="center"
    padding-x="6"
    padding-y="1.063rem"
  >
    <mp-box>
      <mp-heading as="h1" font-size="2xl" font-weight="bold">
        Penjualan
      </mp-heading>
    </mp-box>
    <mp-flex align-items="center">
      <mp-box px="4">
        <!-- 
          // TODO : Ask designer, use MpText or MpButton 
        -->
        <mp-text color="gray.600"> Kembali ke tampilan lama </mp-text>
      </mp-box>
      <mp-button-group>
        <mp-popover id="impor">
          <mp-popover-trigger>
            <mp-button
              variant="outline"
              marginRight="2"
              right-icon="caret-down"
            >
              Impor
            </mp-button>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="48"
            bg="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
          >
            <mp-popover-list>
              <mp-popover-list-item>Template dari Jurnal</mp-popover-list-item>
              <mp-popover-list-item>
                Template dari aplikasi lain
              </mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
        <mp-popover id="buat-penjualan-baru">
          <mp-popover-trigger>
            <mp-button right-icon="caret-down">Buat penjualan baru</mp-button>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="48"
            bg="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
          >
            <mp-popover-list>
              <mp-popover-list-item>Penagihan penjualan</mp-popover-list-item>
              <mp-popover-list-item> Tukar faktur </mp-popover-list-item>
              <mp-popover-list-item> Pemesanan penjualan </mp-popover-list-item>
              <mp-popover-list-item>Penawaran penjualan</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-button-group>
    </mp-flex>
  </mp-flex>
</template>

<script>
import {
  MpText,
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
} from "@mekari/pixel";

export default {
  name: "SalesHeader",
  components: {
    MpText,
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
  },
};
</script>
