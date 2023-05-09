<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" size="xl" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header> Tutup Pemesanan Penjualan SO - MKR/01/134/123? </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-modal-body>
            <mp-table>
              <mp-table-head>
                <mp-table-row>
                  <mp-table-cell as="th" scope="col" width="35px">Produk</mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="25px">Kuantitas</mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="25px">Total ditagih / dikirim</mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="100px">Sisa pemesanan</mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row" vertical-align="top">Macbook Pro 2021 16”</mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top">4</mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top">3</mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top">1</mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row" vertical-align="top">14/02/2022, 12:44 PM</mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top">Create</mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top">Bregga Tedy</mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top">-</mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>

            <mp-text mt="4"> Setelah ditutup, Anda tidak dapat membuat faktur dari pemesanan ini. </mp-text>
          </mp-modal-body>
        </mp-modal-body>

        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">Batalkan</mp-button>
          <mp-button @click="handleSubmit" variant-color="red">Tutup pemesanan</mp-button>
        </mp-modal-footer>
      </mp-modal-content>

      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import {
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpBox,
  MpButton,
  MpModalFooter,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpText,
} from "@mekari/pixel";
export default {
  name: "ModalCloseSalesOrder",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpBox,
    MpButton,
    MpModalFooter,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpText,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  methods: {
    handleSubmit() {
      this.$toast({
        variant: "error",
        title: "Pemesanan ini mempunyai transaksi pembayaran sebelumnya. Anda tidak dapat menutup pemesanan secara langsung",
        position: "top",
      });
    },
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
