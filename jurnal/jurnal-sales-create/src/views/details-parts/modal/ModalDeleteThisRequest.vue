<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" size="sm" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header>Hapus faktur penjualan?</mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body max-height="xl" overflow-y="auto">
          <mp-text> Faktur penjualan yang dihapus tidak dapat dikembalikan. </mp-text>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">Batalkan</mp-button>
          <mp-button @click="handleClose" variant-color="red">Hapus</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import { MpModal, MpModalOverlay, MpModalContent, MpModalHeader, MpModalFooter, MpModalBody, MpModalCloseButton, MpButton, MpBox, MpText } from "@mekari/pixel";
export default {
  name: "ModalDeleteThisRequest",
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
    MpText,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  methods: {
    handleClose() {
      this.$emit('handleClose')
    }
  },
};
</script>
