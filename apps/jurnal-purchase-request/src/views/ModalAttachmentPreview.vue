<template>
  <mp-box>
    <mp-modal size="2xl" :isOpen="isOpen">
      <mp-modal-content>
        <mp-modal-header> {{ fileName }} </mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body padding="0">
          <img src="../assets/Blobby-Chug-Kids-blob-font 1.png" alt="" />
        </mp-modal-body>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import { MpModal, MpModalOverlay, MpModalContent, MpModalHeader, MpModalBody, MpModalCloseButton, MpBox } from "@mekari/pixel";
export default {
  name: "ModalAttachmentPreview",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpBox,
  },
  props: {
    isOpen: { type: [Boolean] },
    fileName: { type: [String] },
  },
};
</script>

<style lang="scss" scoped></style>
