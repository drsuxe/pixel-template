<template>
  <mp-modal size="xl" :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
    <mp-modal-content>
      <mp-modal-header>Pilih aturan harga</mp-modal-header>
      <mp-modal-close-button @click="handleClose" />
      <mp-modal-body>
        <mp-text mb="6"> Jaka permadi terdapat di lebih dari 1 price rule. Pilih 1 rule untuk melanjutkan : </mp-text>
        <mp-table>
          <mp-table-head>
            <mp-table-row>
              <mp-table-cell as="th" scope="col">Nama aturan</mp-table-cell>
              <mp-table-cell as="th" scope="col">Diskon</mp-table-cell>
              <mp-table-cell as="th" scope="col">Harga beli</mp-table-cell>
              <mp-table-cell as="th" scope="col">Harga jual</mp-table-cell>
              <mp-table-cell as="th" scope="col">Harga akhir</mp-table-cell>
            </mp-table-row>
          </mp-table-head>
          <mp-table-body>
            <mp-table-row>
              <mp-table-cell as="td" scope="row">
                <mp-radio name="price_rule">No rule</mp-radio>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">-</mp-table-cell>
              <mp-table-cell as="td" scope="row">-</mp-table-cell>
              <mp-table-cell as="td" scope="row">-</mp-table-cell>
              <mp-table-cell as="td" scope="row">-</mp-table-cell>
            </mp-table-row>

            <mp-table-row>
              <mp-table-cell as="td" scope="row">
                <mp-radio name="price_rule">Price rule 1</mp-radio>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">Diskon harga akhir</mp-table-cell>
              <mp-table-cell as="td" scope="row">Rp1.000.000,00</mp-table-cell>
              <mp-table-cell as="td" scope="row">Rp1.500.000,00</mp-table-cell>
              <mp-table-cell as="td" scope="row">Rp1.400.000,00</mp-table-cell>
            </mp-table-row>

            <mp-table-row>
              <mp-table-cell as="td" scope="row">
                <mp-radio name="price_rule">Price rule 2</mp-radio>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">Diskon Rp1000,00</mp-table-cell>
              <mp-table-cell as="td" scope="row">Rp1.000.000,00</mp-table-cell>
              <mp-table-cell as="td" scope="row">Rp1.500.000,00</mp-table-cell>
              <mp-table-cell as="td" scope="row">Rp1.400.000,00</mp-table-cell>
            </mp-table-row>

            <mp-table-row>
              <mp-table-cell as="td" scope="row">
                <mp-radio name="price_rule">Price rule 3</mp-radio>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">Diskon 10%</mp-table-cell>
              <mp-table-cell as="td" scope="row">Rp1.000.000,00</mp-table-cell>
              <mp-table-cell as="td" scope="row">Rp1.500.000,00</mp-table-cell>
              <mp-table-cell as="td" scope="row">Rp1.400.000,00</mp-table-cell>
            </mp-table-row>
          </mp-table-body>
        </mp-table>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button-group>
          <mp-button @click="handleClose" variant="ghost">Kembali</mp-button>
          <mp-button @click="handleClose">Simpan</mp-button>
        </mp-button-group>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalFooter,
  MpModalBody,
  MpModalCloseButton,
  MpButton,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpRadio,
  MpButtonGroup,
  MpText,
} from "@mekari/pixel";

export default {
  name: "ModalPriceRule",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
    MpButton,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpRadio,
    MpButtonGroup,
    MpText,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
