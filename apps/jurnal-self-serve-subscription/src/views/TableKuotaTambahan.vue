<template>
  <mp-box>
    <mp-table-container overflow="auto" v-if="quotas.length >= 1">
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
          <mp-table-row v-for="quota in quotas" :key="quota">
            <mp-table-cell as="td" scope="row">
              <mp-text :is-link="quota === 'Faktur penjualan'" line-height="md" @click.native="isModalPaketPenjualanOpen = true">
                {{ quota }}
              </mp-text>
              <mp-text font-size="sm" color="gray.600" v-if="quota === 'Faktur penjualan'">Bulanan</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-box width="131px">
                <InputCounter />
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text text-align="right">Rp99.000</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-flex align-items="center">
                <mp-text mr="1">3,6 bulan</mp-text>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text text-align="right">Rp356.400</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-flex justify="flex-end">
                <mp-button-icon name="minus-circular" @click="handleDelete(quota)" />
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <mp-box mt="3" v-if="quotas.length < 3">
      <mp-popover id="tambah-lainnya" ref="tambah-lainnya">
        <mp-popover-trigger>
          <mp-button variant="outline">
            <mp-icon name="add-circular" variant="duotone" size="sm" mr="2" />
            Tambah kuota
          </mp-button>
        </mp-popover-trigger>

        <mp-popover-content
          min-width="166px"
          width="fit-content"
          maxWidth="600px"
          bg="white"
          rounded="sm"
          shadow="lg"
          border-width="1px"
          border-color="gray.400"
        >
          <mp-popover-list>
            <mp-popover-list-item @click="handleAdd('Faktur penjualan')" v-if="!quotas.includes('Faktur penjualan')">Faktur penjualan</mp-popover-list-item>
            <mp-popover-list-item @click="handleAdd('Gudang')" v-if="!quotas.includes('Gudang')">Gudang</mp-popover-list-item>
            <mp-popover-list-item @click="handleAdd('Pengguna tambahan')" v-if="!quotas.includes('Pengguna tambahan')">Pengguna tambahan</mp-popover-list-item>
          </mp-popover-list>
        </mp-popover-content>
      </mp-popover>
    </mp-box>

    <ModalFakturPenjualan :is-open="isModalPaketPenjualanOpen" @handleClose="handleCloseModalFakturPenjualan" @handleAdd="handleAddModalFakturPenjualan" />
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
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpButtonIcon,
} from "@mekari/pixel";
import InputCounter from "../components/InputCounter.vue";
import ModalFakturPenjualan from "./ModalFakturPenjualan.vue";

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
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpButtonIcon,

    // Internal components
    InputCounter,
    ModalFakturPenjualan,
  },
  data() {
    return {
      quotas: [],
      isModalPaketPenjualanOpen: false,
    };
  },
  methods: {
    handleAdd(name) {
      this.quotas.push(name);

      if (this.$refs["tambah-lainnya"]?._isOpen) this.$refs["tambah-lainnya"]?.closePopover();
    },
    handleDelete(name) {
      this.quotas.splice(name, 1);
    },
    handleAddModalAddQuota() {
      this.isCheckoutModalAddQuotaOpen = false;
    },
    handleCloseModalAddQuota() {
      this.isCheckoutModalAddQuotaOpen = false;
    },

    // Faktur Penjualan
    handleCloseModalFakturPenjualan() {
      this.isModalPaketPenjualanOpen = false;
    },
    handleAddModalFakturPenjualan() {
      this.handleCloseModalFakturPenjualan();
    },
  },
};
</script>
