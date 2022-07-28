<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" isCentered>
      <mp-modal-content>
        <mp-modal-header>Filter transaksi</mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body>
          <EmptyState
            type="failed"
            title="Failed to export this report"
            description="There are too many transaction accounts that you filtered. Please minimize the period and other filters or export the report directly."
          />
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button @click="$emit('handleClose')">Oke, mengerti</mp-button>
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
  name: "ModalExportFailed",
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
