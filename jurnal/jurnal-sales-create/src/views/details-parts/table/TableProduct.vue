<template>
  <mp-box mt="8">
    <mp-flex w="full" justify="space-between" mb="4">
      <mp-box />
      <mp-box>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Ketik untuk mencari" is-clearable />
        </mp-input-group>
      </mp-box>
    </mp-flex>

    <mp-table-container overflow-x="auto" has-shadow>
      <mp-table :is-hoverable="false" :style="{ tableLayout: 'auto' }">
        <mp-table-head>
          <mp-table-row>
            <mp-table-cell as="th" scope="col" width="300px">Produk</mp-table-cell>
            <mp-table-cell as="th" scope="col" width="300px">Deskripsi</mp-table-cell>
            <mp-table-cell as="th" scope="col">Kuantitas</mp-table-cell>
            <mp-table-cell as="th" scope="col">Satuan</mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">Harga satuan</mp-table-cell>
            <mp-table-cell as="th" scope="col" width="100px">Diskon</mp-table-cell>
            <mp-table-cell as="th" scope="col" width="100px">Pajak</mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">Jumlah</mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row v-for="(product, index) in products" :key="product.id" white-space="normal">
            <mp-table-cell as="td" scope="row" vertical-align="top" width="300px" word-break="normal">
              <mp-box width="300px">
                <mp-text is-link> {{ product.product }} </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top" width="300px" word-break="normal">
              <mp-box width="300px">
                <TextElipsisCollapsible :id="`detail-${index}`">
                  {{ product.description }}
                </TextElipsisCollapsible>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text> {{ product.quantity }} </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text> {{ product.unit }} </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text text-align="right"> {{ product.price }} </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top" width="100px">
              <mp-text width="100px"> {{ product.discount }} </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top" width="100px">
              <mp-text width="100px"> {{ product.tax }} </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text text-align="right"> {{ product.total }} </mp-text>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <mp-box mt="6">
      <mp-text color="gray.600">Showing 4 of 4 products</mp-text>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
} from "@mekari/pixel";

import { TextElipsisCollapsible } from "../TextElipsisCollapsible";

export default {
  name: "TableProduct",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    TextElipsisCollapsible,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          product: "Macbook Pro 12093 - Macbook Pro 2021 16Inchi",
          description:
            "Tolong ya pak, Pilihkan item yang baru sampai minggu kemarin untuk di proses lebih lanjut lagi. Contoh untuk teks yang sangat panjang sekali.",
          quantity: 1,
          unit: "Unit",
          price: "Rp10.000.000,00",
          discount: "0%",
          tax: "",
          total: "Rp10.0000.000,00",
        },
        {
          id: 2,
          product: "Airpod 2022",
          description: "",
          quantity: 1,
          unit: "Unit",
          price: "Rp10.000.000,00",
          discount: "0%",
          tax: "",
          total: "Rp10.0000.000,00",
        },
        {
          id: 3,
          product: "Macbook Pro 12093 - Macbook Pro 2021 16Inchi",
          description:
            "Tolong ya pak, Pilihkan item yang baru sampai minggu kemarin untuk di proses lebih lanjut lagi. Contoh untuk teks yang sangat panjang sekali. Contoh untuk teks yang sangat panjang sekali.",
          quantity: 1,
          unit: "Unit",
          price: "Rp10.000.000,00",
          discount: "0%",
          tax: "",
          total: "Rp10.0000.000,00",
        },
        {
          id: 4,
          product: "Macbook Pro 12093 - Macbook Pro 2021 16Inchi",
          description: "Tolong ya pak, Pilihkan item yang baru sampai minggu kemarin.",
          quantity: 1,
          unit: "Unit",
          price: "Rp10.000.000,00",
          discount: "0%",
          tax: "",
          total: "Rp10.0000.000,00",
        },
      ],
    };
  },
};
</script>
