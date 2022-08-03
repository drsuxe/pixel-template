<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" isCentered>
      <mp-modal-content>
        <mp-modal-header>Filter transaksi</mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body>
          <EmptyState type="no-email" title="Failed to load this report" description="Please contact our support team to show the list of transaction." />
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button @click="$emit('handleClose')">Ok, got it</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import { MpModal, MpModalOverlay, MpModalContent, MpModalHeader, MpModalFooter, MpModalBody, MpModalCloseButton, MpButton, MpBox } from "@mekari/pixel";
import EmptyState from "./EmptyState.vue";

export default {
  name: "ModalGagalMemuatLaporan",
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
    EmptyState,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
};
</script>
