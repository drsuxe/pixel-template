<template>
  <div>
    <mp-text is-link @click.native="isOpen = true">Lihat jurnal entry</mp-text>

    <mp-modal size="xl" :isOpen="isOpen">
      <mp-modal-content>
        <mp-modal-header>Laporan jurnal SI - MKR/01/134/123</mp-modal-header>
        <mp-modal-close-button @click="isOpen = false" />
        <mp-modal-body>
          <mp-table>
            <mp-table-head>
              <mp-table-row>
                <mp-table-cell as="th" scope="col" width="35px">Akun</mp-table-cell>
                <mp-table-cell as="th" scope="col" width="25px" text-align="right">Debit</mp-table-cell>
                <mp-table-cell as="th" scope="col" width="25px" text-align="right">Kredit</mp-table-cell>
              </mp-table-row>
            </mp-table-head>
            <mp-table-body>
              <mp-table-row>
                <mp-table-cell as="td" scope="row" vertical-align="top">
                  <mp-text is-link> 1-10100 - Piutang Usaha </mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">
                  <mp-text text-align="right"> Rp10.000.000,00 </mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">
                  <mp-text text-align="right"> Rp0,00 </mp-text>
                </mp-table-cell>
              </mp-table-row>
              <mp-table-row>
                <mp-table-cell as="td" scope="row" vertical-align="top">
                  <mp-text is-link> 1-10100 - Piutang Usaha </mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">
                  <mp-text text-align="right"> Rp10.000.000,00 </mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">
                  <mp-text text-align="right"> Rp0,00 </mp-text>
                </mp-table-cell>
              </mp-table-row>

              <mp-table-row>
                <mp-table-cell as="td" scope="row" vertical-align="top">
                  <mp-text is-link> 1-10100 - Piutang Usaha </mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">
                  <mp-text text-align="right"> Rp10.000.000,00 </mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top">
                  <mp-text text-align="right"> Rp0,00 </mp-text>
                </mp-table-cell>
              </mp-table-row>

              <mp-table-row>
                <mp-table-cell as="td" scope="row" vertical-align="top" border-bottom-color="dark">
                  Total
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top" border-bottom-color="dark">
                  <mp-text text-align="right"> Rp110.000.000,00 </mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" vertical-align="top" border-bottom-color="dark">
                  <mp-text text-align="right"> Rp110.000.000,00 </mp-text>
                </mp-table-cell>
              </mp-table-row>
            </mp-table-body>
          </mp-table>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button @click="isOpen = false" variant="ghost">Tutup</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </div>
</template>

<script>
import {
  MpText,
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
} from "@mekari/pixel";
export default {
  name: "ModalJournalEntry",
  components: {
    MpText,
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
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
