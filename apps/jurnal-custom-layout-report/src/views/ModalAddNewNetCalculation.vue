<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content>
      <mp-modal-header>Tambah total perhitungan</mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-body>
        <mp-form-control control-id="name">
          <mp-form-label>Nama</mp-form-label>
          <mp-input />
        </mp-form-control>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-button variant="ghost" margin-right="3" @click="handleClose">Batal</mp-button>
        <mp-button @click="handleSave">Simpan</mp-button>
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
  MpModalBody,
  MpModalCloseButton,
  MpModalFooter,
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpInput,
} from "@mekari/pixel";

export default {
  name: "ModalAddNewNetCalculation",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpModalFooter,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpInput,
  },
  props: {
    isOpen: Boolean,
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
    handleSave() {
      this.$emit("handleSave");
    },
  },
};
</script>
