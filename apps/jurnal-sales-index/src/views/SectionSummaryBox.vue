<template>
  <mp-grid gap="2" template-columns=" repeat(4, minmax(0, 1fr))">
    <mp-flex flex-direction="column" rounded="sm" border="1px" border-color="gray.100">
      <mp-flex
        px="3"
        py="2.5"
        bg="orange.50"
        justify-content="space-between"
        align-items="center"
        rounded-top-left="sm"
        rounded-top-right="sm"
        border-bottom="1px"
        border-color="gray.100"
      >
        <mp-box w="calc(100% - 32px)">
          <mp-heading as="h3" font-size="lg" text-overflow="ellipsis" white-space="nowrap" overflow="hidden"> Penjualan belum dibayar (IDR) </mp-heading>
        </mp-box>
        <mp-badge variant-color="orange">6</mp-badge>
      </mp-flex>

      <mp-flex bg="white" cursor="pointer" px="3" py="2" flex-direction="column" rounded-bottom="sm">
        <mp-text color="gray.600" font-size="sm" line-height="sm">Total</mp-text>
        <mp-heading as="h2" font-size="xl" font-weight="semibold"> Rp 500.000.000 </mp-heading>
      </mp-flex>
    </mp-flex>
    <mp-flex flex-direction="column" rounded="sm" border="1px" border-color="gray.100">
      <mp-flex
        px="3"
        py="2.5"
        bg="red.50"
        justify-content="space-between"
        align-items="center"
        rounded-top-left="sm"
        rounded-top-right="sm"
        border-bottom="1px"
        border-color="gray.100"
      >
        <mp-box w="calc(100% - 32px)">
          <mp-heading as="h3" font-size="lg" text-overflow="ellipsis" white-space="nowrap" overflow="hidden"> Penjualan belum dibayar (IDR) </mp-heading>
        </mp-box>
        <mp-badge variant-color="red">6</mp-badge>
      </mp-flex>

      <mp-flex bg="white" cursor="pointer" px="3" py="2" flex-direction="column" rounded-bottom="sm">
        <mp-text color="gray.600" font-size="sm" line-height="sm">Total</mp-text>
        <mp-heading as="h2" font-size="xl" font-weight="semibold"> Rp 13.000.000 </mp-heading>
      </mp-flex>
    </mp-flex>
    <mp-flex flex-direction="column" rounded="sm" border="1px" border-color="gray.100">
      <mp-flex
        px="3"
        py="2.5"
        bg="green.50"
        justify-content="space-between"
        align-items="center"
        rounded-top-left="sm"
        rounded-top-right="sm"
        border-bottom="1px"
        border-color="gray.100"
      >
        <mp-box w="calc(100% - 32px)">
          <mp-heading as="h3" font-size="lg" text-overflow="ellipsis" white-space="nowrap" overflow="hidden"> Pelunasan diterima 30 hari terakhir </mp-heading>
        </mp-box>
        <mp-badge variant-color="green">6</mp-badge>
      </mp-flex>

      <mp-flex bg="white" cursor="pointer" px="3" py="2" flex-direction="column" rounded-bottom="sm">
        <mp-text color="gray.600" font-size="sm" line-height="sm">Total</mp-text>
        <mp-heading as="h2" font-size="xl" font-weight="semibold"> Rp 100.000.000 </mp-heading>
      </mp-flex>
    </mp-flex>
    <mp-flex flex-direction="column" rounded="sm" border="1px" border-color="gray.100">
      <mp-flex align-items="center" gap="1">
        <img src="../assets/illustration.svg" alt="" />
        <mp-flex flex-direction="column" gap="2">
          <mp-text font-weight="semibold" font-size="md" line-height="md">Pembayaran jadi mudah dengan Mekari Pay!</mp-text>
          <mp-text is-link font-size="md" line-height="md">Pelajari lebih lanjut</mp-text>
        </mp-flex>
      </mp-flex>
    </mp-flex>
  </mp-grid>
</template>

<script>
import { MpGrid, MpFlex, MpBox, MpHeading, MpBadge, MpText } from "@mekari/pixel";
export default {
  name: "SectionSummaryBox",
  components: {
    MpGrid,
    MpFlex,
    MpBox,
    MpHeading,
    MpBadge,
    MpText,
  },
};
</script>

<style lang="scss" scoped></style>
