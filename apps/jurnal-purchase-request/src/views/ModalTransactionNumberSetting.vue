<template>
  <mp-box>
    <mp-modal size="2xl" :isOpen="isOpen" is-centered>
      <mp-modal-content>
        <mp-modal-header>Preview permintaan pembelian</mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body> </mp-modal-body>
        <mp-modal-footer>
          <mp-button @click="$emit('handleClose')">Tutup</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import { MpModal, MpModalOverlay, MpModalContent, MpModalHeader, MpModalFooter, MpModalBody, MpModalCloseButton, MpButton, MpBox } from "@mekari/pixel";
export default {
  name: "ModalTransactionNumberSetting",
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
