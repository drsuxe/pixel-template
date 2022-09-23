<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" size="sm" isCentered>
      <mp-modal-content>
        <mp-modal-header>Konfirmasi penukaran faktur</mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body max-height="xl" overflow-y="auto">
          <mp-stack spacing="4">
            <mp-grid templateColumns="repeat(2, 1fr)">
              <mp-text color="gray.600"> Nama supplier </mp-text>
              <mp-text> PT Stumble guys </mp-text>
            </mp-grid>

            <mp-grid templateColumns="repeat(2, 1fr)">
              <mp-text color="gray.600"> Tanggal jatuh tempo </mp-text>
              <mp-text> 20/04/2022 </mp-text>
            </mp-grid>
          </mp-stack>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="$emit('handleClose')">Batalkan</mp-button>
          <mp-button @click="$emit('handleConfirmation')">Konfirmasi</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import {
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
  MpStack,
  MpGrid,
} from "@mekari/pixel";
export default {
  name: "ModalSaveConfirmation",
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
    MpStack,
    MpGrid,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
};
</script>
