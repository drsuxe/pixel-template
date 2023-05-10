<template>
  <mp-box>
    <mp-modal size="xl" :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header>Audit SI-10045</mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-table>
            <mp-table-head>
              <mp-table-row>
                <mp-table-cell as="th" scope="col" width="219px">Tanggal</mp-table-cell>
                <mp-table-cell as="th" scope="col" width="125px">Tindakan</mp-table-cell>
                <mp-table-cell as="th" scope="col" width="219px">Pengguna</mp-table-cell>
                <mp-table-cell as="th" scope="col" width="325px">Detail</mp-table-cell>
              </mp-table-row>
            </mp-table-head>
            <mp-table-body>
              <mp-table-row>
                <mp-table-cell as="td" scope="row" vertical-align="top">15/02/2022, 12:44 PM</mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">Update</mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">Jaka Permadi</mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">
                  <mp-box width="300px">
                    <TextElipsisCollapsible id="detail-1" :line-clamp="2">
                      Transaksi tidak seusai dengan aturan persetujuan manapun, status transaksi sekarangdisetujui
                    </TextElipsisCollapsible>
                  </mp-box>
                </mp-table-cell>
              </mp-table-row>
              <mp-table-row>
                <mp-table-cell as="td" scope="row" vertical-align="top">14/02/2022, 12:44 PM</mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">Create</mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">Bregga Tedy</mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">-</mp-table-cell>
              </mp-table-row>
            </mp-table-body>
          </mp-table>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button @click="handleClose">Tutup</mp-button>
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
import { TextElipsisCollapsible } from "../TextElipsisCollapsible";

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
    TextElipsisCollapsible,
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
