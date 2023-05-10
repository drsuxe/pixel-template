<template>
  <div>
    <mp-text is-link @click.native="isOpen = true">Lihat jurnal entry</mp-text>

    <mp-modal size="xl" :is-open="isOpen" :on-close="() => (isOpen = false)" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header>Laporan jurnal SI-10045</mp-modal-header>
        <mp-modal-close-button @click="isOpen = false" />
        <mp-modal-body>
          <mp-box>
            <mp-table :style="{ tableLayout: 'fixed' }">
              <mp-table-head>
                <mp-table-row>
                  <mp-table-cell as="th" scope="col" width="33%">Akun</mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="33%" text-align="right">Debit</mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="33%" text-align="right">Kredit</mp-table-cell>
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
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-bottom-width="0px">
                    <mp-text is-link> 4-40100 - Pendapatan Jasa </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-bottom-width="0px">
                    <mp-text text-align="right"> Rp0,00 </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-bottom-width="0px">
                    <mp-text text-align="right"> Rp10.000.000,00 </mp-text>
                  </mp-table-cell>
                </mp-table-row>

                <mp-table-row>
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-top-width="1px" border-color="dark"> Total </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-top-width="1px" border-color="dark">
                    <mp-text text-align="right"> Rp10.000.000,00 </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-top-width="1px" border-color="dark">
                    <mp-text text-align="right"> Rp10.000.000,00 </mp-text>
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
            <mp-text color="gray.600" font-size="sm" my="3"> 1 (in USD) = 14.400,00 (in IDR) edited by: Bregga Tedy </mp-text>
          </mp-box>

          <mp-box mt="6">
            <mp-table :style="{ tableLayout: 'fixed' }">
              <mp-table-head>
                <mp-table-row>
                  <mp-table-cell as="th" scope="col" width="33%">Akun</mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="33%" text-align="right">Debit</mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="33%" text-align="right">Kredit</mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row" vertical-align="top">
                    <mp-text is-link> 1-10100 - Piutang Usaha </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top">
                    <mp-text text-align="right"> Rp200.000,00 </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top">
                    <mp-text text-align="right"> Rp0,00 </mp-text>
                  </mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-bottom-width="0px">
                    <mp-text is-link> 9-90003 - (Laba)/Rugi Selisih Kurs - belum direalisasikan </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-bottom-width="0px">
                    <mp-text text-align="right"> Rp0,00 </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-bottom-width="0px">
                    <mp-text text-align="right"> Rp200.000,00 </mp-text>
                  </mp-table-cell>
                </mp-table-row>

                <mp-table-row>
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-top-width="1px" border-color="dark"> Total </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-top-width="1px" border-color="dark">
                    <mp-text text-align="right"> Rp200.000,00 </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" border-top-width="1px" border-color="dark">
                    <mp-text text-align="right"> Rp200.000,00 </mp-text>
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
            <mp-text color="gray.600" font-size="sm" my="3"> 1 (in USD) = 15.630,00 (in IDR) rate by: Bank Indonesia </mp-text>
          </mp-box>
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
  MpBox,
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
    MpBox,
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
