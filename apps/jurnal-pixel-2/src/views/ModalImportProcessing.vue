<template>
  <mp-modal size="md" :isOpen="isOpen">
    <mp-modal-content>
      <mp-modal-header>Impor transaksi penjualan</mp-modal-header>
      <mp-modal-close-button @click="$emit('handleClose')" />
      <mp-modal-body>
        <mp-flex justify="center" direction="column" align="center">
          <img src="../assets/Processing.svg" alt="" />
          <mp-text text-align="center" mt="6">Kami sedang memproses transaksi Anda. Kami akan mengirimkan notifikasi ke email Anda jika sudah selesai.</mp-text>
        </mp-flex>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button @click="$emit('handleClose')">Ok, mengerti</mp-button>
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
  MpText,
  MpFlex,
} from "@mekari/pixel";
export default {
  name: "ModalImportProcessing",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
    MpButton,
    MpText,
    MpFlex,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
};
</script>

<style lang="scss" scoped></style>
