<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content>
      <mp-modal-header>Laporan rekening</mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-body>
        <mp-text> Lihat laporan rekening dengan atur filter Anda terlebih dahulu. </mp-text>

        <mp-stack spacing="3" mt="3">
          <mp-form-control>
            <mp-form-label>Tipe transaksi</mp-form-label>
            <mp-autocomplete placeholder="Pilih" :data="['Sales', 'Option 2', 'Option 3']" :content-style="{ width: 'full' }" />
          </mp-form-control>

          <mp-form-control>
            <mp-form-label>Pilih periode</mp-form-label>
            <AdvanceCalendar />
          </mp-form-control>
        </mp-stack>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-button-group>
          <mp-button variant="ghost" @click="handleClose">Batalkan</mp-button>
          <mp-button @click="handleApply"> Lihat laporan </mp-button>
        </mp-button-group>
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
  MpStack,
  MpFormControl,
  MpFormLabel,
  MpAutocomplete,
  MpModalFooter,
  MpButtonGroup,
  MpButton,
} from "@mekari/pixel";
import AdvanceCalendar from "../components/AdvanceCalendar.vue";

export default {
  name: "ModalAccountStatements",
  components: {
    MpText,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpStack,
    MpFormControl,
    MpFormLabel,
    MpAutocomplete,
    AdvanceCalendar,
    MpModalFooter,
    MpButtonGroup,
    MpButton,
  },
  props: {
    isOpen: Boolean,
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleApply() {
      this.$emit("apply");
    },
  },
};
</script>
