<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" size="sm" isCentered>
      <mp-modal-content>
        <mp-modal-header>Batalkan penukaran faktur? </mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body max-height="xl" overflow-y="auto">
          <mp-text> Semua data yang sudah diisi tidak akan disimpan. </mp-text>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="$emit('handleClose')">Lanjutkan penukaran</mp-button>
          <mp-button @click="$emit('handleClose')">Batalkan</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import { MpModal, MpModalOverlay, MpModalContent, MpModalHeader, MpModalFooter, MpModalBody, MpModalCloseButton, MpButton, MpBox, MpText } from "@mekari/pixel";
export default {
  name: "ModalCancel",
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
};
</script>
