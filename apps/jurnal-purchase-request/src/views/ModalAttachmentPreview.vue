<template>
  <mp-box>
    <mp-modal size="5xl" :isOpen="isOpen" :scroll-behavior="extension === 'pdf' ? 'inside' : 'outside'" :isCentered="extension !== 'pdf'">
      <mp-modal-content>
        <mp-modal-header> {{ fileName }} </mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body padding="0">
          <mp-box v-if="extension === 'pdf'" as="embed" :src="url" type="application/pdf" height="100%" width="100%" rounded-bottom="md"> </mp-box>
          <mp-box as="img" v-else :src="url" alt="" width="full" />
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
    extension: { type: [String] },
    url: { type: [String] },
  },
};
</script>

<style lang="scss" scoped></style>
