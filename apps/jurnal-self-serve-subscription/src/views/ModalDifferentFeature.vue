<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose" scroll-behavior="auto" size="lg">
    <mp-modal-content>
      <mp-modal-header>Terdapat perbedaan fitur dan kuota dari paket saat ini</mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-body>
        <mp-text mb="4">
          Silakan pilih paket saat ini <mp-text as="span" font-weight="semibold">Jurnal Enterprise</mp-text> atau yang lebih tinggi agar tetap mendapatkan akses
          fitur dan jumlah kuota berikut:
        </mp-text>

        <div>
          <mp-table :is-hoverable="false">
            <mp-table-head>
              <mp-table-row>
                <mp-table-cell as="th" scope="col" width="50%" bg="white" border-color="transparent"> </mp-table-cell>
                <mp-table-cell as="th" scope="col" width="25%" bg="white" border-color="transparent" text-align="center"> Jurnal Enterprise</mp-table-cell>
                <mp-table-cell as="th" scope="col" width="25%" bg="white" border-color="transparent" text-align="center"> Jurnal Pro </mp-table-cell>
              </mp-table-row>
              <mp-table-row>
                <mp-table-cell as="th" scope="col" width="50%"> Fitur* </mp-table-cell>
                <mp-table-cell as="th" scope="col" width="25%"> </mp-table-cell>
                <mp-table-cell as="th" scope="col" width="25%"> </mp-table-cell>
              </mp-table-row>
            </mp-table-head>
            <mp-table-body>
              <mp-table-row>
                <mp-table-cell as="td" scope="row"> Approval & otorisasi </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="done" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="error" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>
              <mp-table-row>
                <mp-table-cell as="td" scope="row"> Tukar faktur & faktur pro forma </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="done" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="error" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>
              <mp-table-row>
                <mp-table-cell as="td" scope="row"> Multi-product pricing / Aturan harga </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="done" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="error" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>
            </mp-table-body>
          </mp-table>

          <mp-text color="gray.600" my="4"> *Terdapat beberapa fitur lain yang tidak ditampilkan </mp-text>

          <mp-table :is-hoverable="false">
            <mp-table-head>
              <mp-table-row>
                <mp-table-cell as="th" scope="col" width="50%" bg="white" border-color="transparent"> </mp-table-cell>
                <mp-table-cell as="th" scope="col" width="25%" bg="white" border-color="transparent" text-align="center"> Jurnal Enterprise</mp-table-cell>
                <mp-table-cell as="th" scope="col" width="25%" bg="white" border-color="transparent" text-align="center"> Jurnal Pro </mp-table-cell>
              </mp-table-row>
              <mp-table-row>
                <mp-table-cell as="th" scope="col" width="50%"> Fitur* </mp-table-cell>
                <mp-table-cell as="th" scope="col" width="25%"> </mp-table-cell>
                <mp-table-cell as="th" scope="col" width="25%"> </mp-table-cell>
              </mp-table-row>
            </mp-table-head>
            <mp-table-body>
              <mp-table-row>
                <mp-table-cell as="td" scope="row"> Approval & otorisasi </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="done" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="error" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>
              <mp-table-row>
                <mp-table-cell as="td" scope="row"> Tukar faktur & faktur pro forma </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="done" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="error" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>
              <mp-table-row>
                <mp-table-cell as="td" scope="row"> Multi-product pricing / Aturan harga </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="done" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex justify="center" align-items="center">
                    <mp-icon name="error" variant="duotone" />
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>
            </mp-table-body>
          </mp-table>

          <mp-text color="gray.600" my="4">
            Jika Anda ingin lanjut berlangganan paket Jurnal Pro, silakan kunjungi pusat bantuan untuk informasi lebih lanjut.
          </mp-text>
        </div>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-flex align-items="center">
          <mp-button variant="link" mr="5" text-decoration="underline">Kunjungi pusat bantuan</mp-button>
          <mp-button>Lihat paket lainnya</mp-button>
        </mp-flex>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpText,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpModalFooter,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpFlex,
  MpIcon,
  MpButton,
} from "@mekari/pixel";

export default {
  name: "ModalDifferentFeature",
  components: {
    MpText,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpModalFooter,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpFlex,
    MpIcon,
    MpButton,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  methods: {
    handleClose: function () {
      this.$emit("handleClose");
    },
  },
};
</script>
