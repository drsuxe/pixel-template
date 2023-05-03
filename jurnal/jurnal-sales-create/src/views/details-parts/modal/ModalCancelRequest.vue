<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" size="sm" isCentered>
      <mp-modal-content>
        <mp-modal-header>Cancel purchase request? </mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body max-height="xl" overflow-y="auto">
          <mp-text> All data filled will be unable to be restored. </mp-text>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="$emit('handleClose')">Keep creating</mp-button>
          <mp-button @click="$emit('handleClose')">Cancel</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import { MpModal, MpModalOverlay, MpModalContent, MpModalHeader, MpModalFooter, MpModalBody, MpModalCloseButton, MpButton, MpBox, MpText } from "@mekari/pixel";
export default {
  name: "ModalCancelRequest",
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
