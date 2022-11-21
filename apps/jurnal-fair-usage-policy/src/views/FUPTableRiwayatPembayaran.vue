<template>
  <mp-box>
    <mp-table>
      <mp-table-head>
        <mp-table-row bg="gray.50">
          <mp-table-cell as="th" scope="col" width="25%"> Tanggal pembayaran </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="25%"> Periode </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="25%" text-align="right"> Total </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="25%"> </mp-table-cell>
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row v-for="data in datas" :key="data.id">
          <mp-table-cell as="td" scope="row"> {{ data.tanggalPembayaran }} </mp-table-cell>
          <mp-table-cell as="td" scope="row"> {{ data.periode }} </mp-table-cell>
          <mp-table-cell as="td" scope="row" text-align="right"> {{ data.total }} </mp-table-cell>

          <mp-table-cell as="td" scope="row">
            <mp-flex justify="end">
              <mp-button variant="outline" size="sm">Download invoice</mp-button>
            </mp-flex>
          </mp-table-cell>
        </mp-table-row>
      </mp-table-body>
    </mp-table>

    <TablePagination />
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpTable, MpTableHead, MpTableBody, MpTableRow, MpTableCell, MpButton } from "@mekari/pixel";
import TablePagination from "@/components/TablePagination.vue";

export default {
  name: "FUPTableRiwayarPembayaran",
  components: {
    MpBox,
    MpFlex,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpButton,
    TablePagination,
  },
  data() {
    return {
      datas: [
        {
          id: 1,
          tanggalPembayaran: "1 Agu 2022",
          periode: "1 Agu 2022 - 31 Jul 2023",
          total: "Rp15.792.000",
        },
        {
          id: 2,
          tanggalPembayaran: "2 Agu 2022",
          periode: "1 Agu 2022 - 31 Jul 2023",
          total: "Rp15.792.000",
        },
        {
          id: 3,
          tanggalPembayaran: "3 Agu 2022",
          periode: "1 Agu 2022 - 31 Jul 2023",
          total: "Rp15.792.000",
        },
      ],
    };
  },
};
</script>
