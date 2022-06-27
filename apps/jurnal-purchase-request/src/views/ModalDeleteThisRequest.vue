<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" size="sm">
      <mp-modal-content>
        <mp-modal-header>Templates</mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body max-height="xl" overflow-y="auto">
          <mp-text> The deleted request will be unable to be restored. </mp-text>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="$emit('handleClose')">Batalkan</mp-button>
          <mp-button @click="$emit('handleClose')">Delete</mp-button>
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
};
</script>

<style lang="scss" scoped></style>
