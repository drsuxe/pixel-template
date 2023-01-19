<template>
  <mp-modal :isOpen="isOpen">
    <mp-modal-content>
      <mp-modal-header>Kembali ke tampilan lama</mp-modal-header>
      <mp-modal-close-button @click="$emit('handleClose')" />
      <mp-modal-body>
        <mp-form-control>
          <mp-text font-weight="semibold" margin-bottom="1"> Apa yang membuat Anda ingin kembali ke tampilan lama? </mp-text>
          <mp-textarea v-model="reason" placeholder="Tulis alasan anda..." />
          <mp-text font-size="sm" color="gray.600" mt="2">Minimal 15 karakter</mp-text>
        </mp-form-control>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button variant="ghost" mr="3" @click="$emit('handleClose')">Batalkan</mp-button>
        <mp-button :is-disabled="reason.length < 15">Kirim</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
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
  MpText,
  MpFormControl,
  MpTextarea,
} from "@mekari/pixel";
export default {
  name: "ModalSwitchToOldView",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
    MpButton,
    MpText,
    MpTextarea,
    MpFormControl,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  data() {
    return {
      reason: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
