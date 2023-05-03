<template>
  <mp-table-container>
    <mp-table>
      <mp-table-head>
        <mp-table-row>
          <mp-table-cell as="th" scope="col">Tgl. pengiriman</mp-table-cell>
          <mp-table-cell as="th" scope="col">Nomor</mp-table-cell>
          <mp-table-cell as="th" scope="col">Status</mp-table-cell>
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row>
          <mp-table-cell as="td" scope="row">15/02/2022</mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text is-link>Sales Delivery #RCA/SJ/100125/2022</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-badge variant="subtle" variant-color="orange"> Open </mp-badge>
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
