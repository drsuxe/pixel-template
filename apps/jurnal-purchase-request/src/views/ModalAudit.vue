<template>
  <mp-box>
    <mp-modal size="2xl" :isOpen="isOpen" is-centered>
      <mp-modal-content>
        <mp-modal-header>Preview permintaan pembelian</mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body>
          <mp-table>
            <mp-table-head>
              <mp-table-row>
                <mp-table-cell as="th" scope="col">Tanggal</mp-table-cell>
                <mp-table-cell as="th" scope="col">Tindakan</mp-table-cell>
                <mp-table-cell as="th" scope="col">Pengguna</mp-table-cell>
                <mp-table-cell as="th" scope="col">Detail</mp-table-cell>
              </mp-table-row>
            </mp-table-head>
            <mp-table-body>
              <mp-table-row>
                <mp-table-cell as="td" scope="row">15/02/2022, 12:44 PM</mp-table-cell>
                <mp-table-cell as="td" scope="row">Update</mp-table-cell>
                <mp-table-cell as="td" scope="row">Jaka Permadi</mp-table-cell>
                <mp-table-cell as="td" scope="row">Transaksi tidak seusai dengan aturan persetujuan manapun, status transaksi sekarangdisetujui</mp-table-cell>
              </mp-table-row>
              <mp-table-row>
                <mp-table-cell as="td" scope="row">14/02/2022, 12:44 PM</mp-table-cell>
                <mp-table-cell as="td" scope="row">Create</mp-table-cell>
                <mp-table-cell as="td" scope="row">Bregga Tedy</mp-table-cell>
                <mp-table-cell as="td" scope="row">-</mp-table-cell>
              </mp-table-row>
            </mp-table-body>
          </mp-table>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button @click="$emit('handleClose')">Tutup</mp-button>
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
  MpModalFooter,
  MpModalBody,
  MpModalCloseButton,
  MpButton,
  MpBox,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
export default {
  name: "ModalAudit",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
    MpButton,
    MpBox,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
};
</script>

<style scoped>
table {
  table-layout: fixed;
}

tbody > tr {
  white-space: normal;
}

td {
  word-wrap: break-word;
  height: auto;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}
</style>
