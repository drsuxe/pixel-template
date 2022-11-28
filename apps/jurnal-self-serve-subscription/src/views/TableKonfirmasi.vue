<template>
  <mp-box>
    <img src="../assets/logo.svg" alt="" style="height: 40px" />

    <mp-heading mt="4">Rincian pembayaran langganan</mp-heading>
    <mp-table-container overflow="auto">
      <mp-table :is-hoverable="false">
        <mp-table-head bg="transparent">
          <mp-table-row>
            <mp-table-cell as="th" scope="col"> </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Jumlah </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              <mp-text text-align="right" font-weight="semibold">Harga satuan</mp-text>
            </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Durasi </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              <mp-text text-align="right" font-weight="semibold">Total harga </mp-text>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td" scope="row">
              <mp-text line-height="md"> Enterprise </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-box width="131px"> 1 </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text text-align="right">Rp99.000</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text mr="1">3,6 bulan</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text text-align="right">Rp356.400</mp-text>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td" scope="row">
              <mp-text line-height="md"> Pengguna tambahan </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-box width="131px"> 1 </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text text-align="right">Rp99.000</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text mr="1">3,6 bulan</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text text-align="right">Rp356.400</mp-text>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <mp-grid templateColumns="repeat(12,1fr)">
      <mp-grid-item border-bottom-width="2px" py="2" col-start="8" col-end="10">
        <mp-text text-align="right" font-weight="semibold">Subtotal</mp-text>
      </mp-grid-item>
      <mp-grid-item border-bottom-width="2px" py="2" pr="4" col-span="3">
        <mp-text text-align="right" font-weight="semibold">Rp15.792.000.000 </mp-text>
      </mp-grid-item>
    </mp-grid>

    <mp-grid templateColumns="repeat(12,1fr)">
      <mp-grid-item border-bottom-width="2px" py="2" col-start="8" col-end="10">
        <mp-text text-align="right">Diskon</mp-text>
      </mp-grid-item>
      <mp-grid-item border-bottom-width="2px" py="2" pr="4" col-span="3">
        <mp-text text-align="right">-Rp1.824.678 </mp-text>
      </mp-grid-item>
    </mp-grid>

    <mp-grid templateColumns="repeat(12,1fr)">
      <mp-grid-item py="2" col-span="2" col-start="8" col-end="10">
        <mp-flex align-items="start" h="full">
          <mp-text line-height="md" text-align="right" font-weight="semibold" font-size="lg"> Total pembayaran </mp-text>
        </mp-flex>
      </mp-grid-item>
      <mp-grid-item py="2" pr="4" col-span="3">
        <mp-text text-align="right" font-weight="semibold" font-size="lg">Rp15.792.000.000</mp-text>
        <mp-text text-align="right" font-size="sm" color="gray.400">Termasuk PPN 11%</mp-text>
      </mp-grid-item>
    </mp-grid>
  </mp-box>
</template>

<script>
import {
  // Pixel 2 components
  MpBox,
  MpText,
  MpHeading,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpGrid,
  MpGridItem,
} from "@mekari/pixel";

export default {
  name: "CheckoutAddQuotaView",
  components: {
    // Pixel 2 components
    MpBox,
    MpText,
    MpHeading,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpGrid,
    MpGridItem,
  },
};
</script>
