<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose" size="sm">
    <mp-modal-content>
      <mp-modal-header> {{ headerText }} </mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-body>
        <mp-text> {{ messageText }} </mp-text>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-button variant="ghost" margin-right="3" @click="handleSecondaryAction">Kembali</mp-button>
        <mp-button @click="handlePrimaryAction">Lanjutkan penambahan</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import { MpText, MpButton, MpModal, MpModalOverlay, MpModalContent, MpModalHeader, MpModalBody, MpModalCloseButton, MpModalFooter } from "@mekari/pixel";

export default {
  name: "ModalWithScrollable",
  components: {
    MpText,
    MpButton,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpModalFooter,
  },
  props: {
    isOpen: { type: [Boolean] },
    headerText: String,
    messageText: String,
    primaryActionText: String,
    secondaryActionText: String,
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
    handlePrimaryAction() {
      this.$emit("handle-primary-action");
    },
    handleSecondaryAction() {
      this.$emit("handle-secondary-action");
    },
  },
};
</script>
