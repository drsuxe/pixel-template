<template>
  <mp-table>
    <mp-table-head>
      <mp-table-row bg="gray.50">
        <mp-table-cell as="th" scope="col"> Nama </mp-table-cell>
        <mp-table-cell as="th" scope="col"> Dari paket </mp-table-cell>
        <mp-table-cell as="th" scope="col">
          Tambahan

          <mp-tooltip id="ezsCsI" position="right" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
            <mp-icon name="info" />
          </mp-tooltip>
        </mp-table-cell>
        <mp-table-cell as="th" scope="col"> Total </mp-table-cell>
        <mp-table-cell as="th" scope="col"> Pemakaian </mp-table-cell>
        <mp-table-cell as="th" scope="col"> Sisa </mp-table-cell>
        <mp-table-cell as="th" scope="col"> </mp-table-cell>
      </mp-table-row>
    </mp-table-head>
    <mp-table-body>
      <mp-table-row>
        <mp-table-cell as="td" scope="row"> Faktur penjualan </mp-table-cell>
        <mp-table-cell as="td" scope="row"> 10.000 </mp-table-cell>
        <mp-table-cell as="td" scope="row">
          <mp-flex align="center" gap="1">
            <mp-text>4.000</mp-text>
            <mp-tooltip id="ezsCsI" position="right" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
              <mp-icon name="info" />
            </mp-tooltip>
          </mp-flex>
        </mp-table-cell>
        <mp-table-cell as="td" scope="row"> 14.000 </mp-table-cell>
        <mp-table-cell as="td" scope="row">
          <mp-flex align="center" gap="1">
            <mp-text is-link>13.990</mp-text>
            <mp-tooltip id="ezsCsI" position="right" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
              <mp-icon name="info" />
            </mp-tooltip>
          </mp-flex>
        </mp-table-cell>
        <mp-table-cell as="td" scope="row">
          10
          <mp-badge variant="subtle" variant-color="orange">Akan habis</mp-badge>
        </mp-table-cell>
        <mp-table-cell as="td" scope="row">
          <mp-button variant="outline" size="sm" @click="$emit('handleAddQuota')">Tambah kuota</mp-button>
        </mp-table-cell>
      </mp-table-row>
      <mp-table-row>
        <mp-table-cell as="td" scope="row"> Gudang </mp-table-cell>
        <mp-table-cell as="td" scope="row"> 10.000 </mp-table-cell>
        <mp-table-cell as="td" scope="row"> 4.000 </mp-table-cell>
        <mp-table-cell as="td" scope="row"> 14.000 </mp-table-cell>
        <mp-table-cell as="td" scope="row"> 13.990 </mp-table-cell>
        <mp-table-cell as="td" scope="row">
          0
          <mp-badge variant="subtle" variant-color="red">Habis</mp-badge>
        </mp-table-cell>
        <mp-table-cell as="td" scope="row">
          <mp-button variant="outline" size="sm" as="router-link" to="/checkout/add-quota">Tambah kuota</mp-button>
        </mp-table-cell>
      </mp-table-row>
      <mp-table-row>
        <mp-table-cell as="td" scope="row"> Pengguna </mp-table-cell>
        <mp-table-cell as="td" scope="row"> 10.000 </mp-table-cell>
        <mp-table-cell as="td" scope="row"> 4.000 </mp-table-cell>
        <mp-table-cell as="td" scope="row"> 14.000 </mp-table-cell>
        <mp-table-cell as="td" scope="row"> 13.990 </mp-table-cell>
        <mp-table-cell as="td" scope="row"> 10 </mp-table-cell>
        <mp-table-cell as="td" scope="row">
          <mp-button variant="outline" size="sm" as="router-link" to="/checkout/add-quota">Tambah kuota</mp-button>
        </mp-table-cell>
      </mp-table-row>
    </mp-table-body>
  </mp-table>
</template>

<script>
import { MpFlex, MpTable, MpTableHead, MpTableBody, MpTableRow, MpTableCell, MpIcon, MpTooltip, MpButton, MpBadge, MpText } from "@mekari/pixel";

export default {
  name: "TableWithData",
  components: {
    MpFlex,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpIcon,
    MpTooltip,
    MpButton,
    MpBadge,
    MpText,
  },
};
</script>
