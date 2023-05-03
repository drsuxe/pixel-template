<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" size="sm" isCentered>
      <mp-modal-content>
        <mp-modal-header>Reject this purchase request?</mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body max-height="xl" overflow-y="auto">
          <mp-text> This purchase request will be rejected. You can’t undo this action. </mp-text>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="$emit('handleClose')">Cancel</mp-button>
          <mp-button @click="$emit('handleClose')" variant-color="red">Reject</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import { MpModal, MpModalOverlay, MpModalContent, MpModalHeader, MpModalFooter, MpModalBody, MpModalCloseButton, MpButton, MpBox, MpText } from "@mekari/pixel";
export default {
  name: "ModalRejectThisRequest",
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

<style lang="scss" scoped></style>
