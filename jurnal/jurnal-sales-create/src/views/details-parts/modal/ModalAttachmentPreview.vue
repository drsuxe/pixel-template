<template>
  <mp-box>
    <mp-modal
      size="2xl"
      :isOpen="isOpen"
      :on-close="handleClose"
      :close-on-esc="true"
      :close-on-overlay-click="true"
      scroll-behavior="auto"
    >
      <mp-modal-content>
        <mp-modal-header> {{ fileName }} </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
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
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
