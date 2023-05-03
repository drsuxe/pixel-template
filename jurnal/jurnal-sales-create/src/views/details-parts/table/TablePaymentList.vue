<template>
  <mp-table-container>
    <mp-table class="mp-jurnal-table">
      <mp-table-head>
        <mp-table-row>
          <mp-table-cell as="th" scope="col">Tanggal</mp-table-cell>
          <mp-table-cell as="th" scope="col">Nomor</mp-table-cell>
          <mp-table-cell as="th" scope="col">Setor ke</mp-table-cell>
          <mp-table-cell as="th" scope="col">Cara pembayaran</mp-table-cell>
          <mp-table-cell as="th" scope="col">Status</mp-table-cell>
          <mp-table-cell as="th" scope="col" text-align="right">Sisa tagihan</mp-table-cell>
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row>
          <mp-table-cell as="td" scope="row" vertical-align="top">15/02/2022</mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-text is-link>SO Payment #100129</mp-text>
            <mp-text font-size="sm">Sales Order #RCA/INV/10278/2022</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-text is-link>Akun kas</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">Kas Tunai</mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-badge variant="subtle" variant-color="orange"> Belum dibayar </mp-badge>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-text text-align="right"> Rp20.000.000,00 </mp-text>
          </mp-table-cell>
        </mp-table-row>
      </mp-table-body>
    </mp-table>
  </mp-table-container>
</template>

<script>
import { MpTable, MpTableContainer, MpTableHead, MpTableBody, MpTableRow, MpTableCell, MpText, MpBadge } from "@mekari/pixel";
export default {
  components: {
    MpTable,
    MpTableContainer,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpText,
    MpBadge
  },
};
</script>
