<template>
  <mp-box>
    <mp-table-container overflow="auto" v-if="isShowTable">
      <mp-table :is-hoverable="false">
        <mp-table-head>
          <mp-table-row>
            <mp-table-cell as="th" scope="col" width="162px"> Nama </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Jumlah </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              <mp-text text-align="right" font-weight="semibold">Harga satuan</mp-text>
            </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Durasi </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              <mp-text text-align="right" font-weight="semibold">Total harga </mp-text>
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="48px"> </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row v-for="value in getSelectedFiturTambahan" :key="value.id">
            <mp-table-cell as="td" scope="row">
              <mp-text line-height="md">
                {{ value.name }}
              </mp-text>
              <mp-text font-size="sm" color="gray.600"> {{ value.caption }} </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-box width="131px"> 1 </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text text-align="right">Rp99.000</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-flex align-items="center">
                <mp-text mr="1">3,6 bulan</mp-text>
                <mp-tooltip label="Durasi mengikuti sisa periode paket aktif Anda.">
                  <mp-icon name="info" size="sm" />
                </mp-tooltip>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text text-align="right">Rp356.400</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-flex justify="flex-end">
                <mp-button-icon name="minus-circular" @click.native="handleRemove(value.id)" />
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <mp-box mt="3" v-if="isShowButtonTambahFitur">
      <mp-button variant="outline" @click="isModalFiturTambahanOpen = true">
        <mp-icon name="add-circular" variant="duotone" size="sm" mr="2" />
        Tambah fitur
      </mp-button>
    </mp-box>

    <ModalFiturTambahan
      :data="fiturTambahan"
      :is-open="isModalFiturTambahanOpen"
      @handleClose="handleCloseModalFiturTambahan"
      @handleAdd="handleAddModalFiturTambahan"
    />
  </mp-box>
</template>

<script>
import {
  // Pixel 2 components
  MpBox,
  MpFlex,
  MpText,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpButton,
  MpIcon,
  MpTooltip,
  MpButtonIcon,
} from "@mekari/pixel";
import ModalFiturTambahan from "./ModalFiturTambahan.vue";

export default {
  name: "CheckoutAddQuotaView",
  components: {
    // Pixel 2 components
    MpBox,
    MpFlex,
    MpText,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpButton,
    MpIcon,
    MpTooltip,
    MpButtonIcon,

    // Internal components
    ModalFiturTambahan,
  },
  data() {
    return {
      fiturTambahan: [
        {
          id: 1,
          isSelected: false,
          name: "Jurnal - Add Ons",
          caption: "Profitable Report",
        },
        {
          id: 2,
          isSelected: false,
          name: "Jurnal - Add Ons",
          caption: "Profitable Report",
        },
        {
          id: 3,
          isSelected: false,
          name: "Jurnal - Add Ons",
          caption: "Profitable Report",
        },
      ],
      isModalFiturTambahanOpen: false,
    };
  },
  computed: {
    getSelectedFiturTambahan() {
      return this.fiturTambahan.filter((item) => item.isSelected);
    },
    isShowButtonTambahFitur() {
      return this.getSelectedFiturTambahan.length < 3;
    },
    isShowTable() {
      const result = this.fiturTambahan.filter((item) => item.isSelected);
      return result.length >= 1;
    },
  },
  methods: {
    handleCloseModalFiturTambahan() {
      this.isModalFiturTambahanOpen = false;
    },
    handleAddModalFiturTambahan(options) {
      this.handleCloseModalFiturTambahan();
      this.fiturTambahan = options;
    },
    handleRemove(id) {
      console.log(id);

      const selectedIndex = this.fiturTambahan.findIndex((item) => item.id === id);
      this.fiturTambahan[selectedIndex].isSelected = false;
    },
  },
};
</script>
