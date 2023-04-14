<template>
  <mp-table-container overflow-x="auto" has-shadow>
    <mp-table :is-hoverable="false">
      <mp-table-head background="gray.25">
        <mp-table-row>
          <mp-table-cell as="th" scope="col"> Tanggal </mp-table-cell>
          <mp-table-cell as="th" scope="col"> Transaksi </mp-table-cell>
          <mp-table-cell as="th" scope="col"> Nomor </mp-table-cell>
          <mp-table-cell as="th" scope="col"> Kategori </mp-table-cell>
          <mp-table-cell as="th" scope="col"> Deskripsi </mp-table-cell>
          <mp-table-cell as="th" scope="col"> Kontak </mp-table-cell>
          <mp-table-cell as="th" scope="col" text-align="right"> Jumlah </mp-table-cell>
          <mp-table-cell as="th" scope="col" text-align="right"> Tax </mp-table-cell>
          <mp-table-cell as="th" scope="col" text-align="right"> Terbayar </mp-table-cell>
          <mp-table-cell as="th" scope="col" text-align="right"> Sisa tagihan </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="157px"> Tag </mp-table-cell>
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row v-for="index in 20" :key="index">
          <mp-table-cell as="td" scope="row"> 01/02/2023 </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text is-link> Expense </mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text is-link> EXP266604/22 </mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text is-link> Biaya Sewa - Kendaraan </mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row"> Description </mp-table-cell>
          <mp-table-cell as="td" scope="row"> Kontak </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text text-align="right"> 78.333.333,33 </mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text text-align="right"> 0 </mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text text-align="right"> 0,00 </mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row"> <mp-text text-align="right"> 0,00 </mp-text> </mp-table-cell>
          <mp-table-cell as="td" scope="row" > 
            <mp-box width="157px">
              <mp-tag>Jakarta</mp-tag>
            </mp-box>
             </mp-table-cell>
        </mp-table-row>
      </mp-table-body>
    </mp-table>
  </mp-table-container>
</template>

<script>
import { MpTableContainer, MpTable, MpTableHead, MpTableBody, MpTableRow, MpTableCell, MpText, MpTag } from "@mekari/pixel";

export default {
  name: "TableWithShadow",
  components: {
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpText,
    MpTag
  },
  data: function () {
    return {};
  },
};
</script>
