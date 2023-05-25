<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header> Tinggalkan halaman ini? </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-text> Perubahan yang Anda lakukan di halaman ini tidak akan disimpan. </mp-text>
        </mp-modal-body>

        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">Lanjutkan pengubahan</mp-button>
          <mp-button @click="handleSubmit" variant-color="red">Tinggalkan</mp-button>
        </mp-modal-footer>
      </mp-modal-content>

      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import { MpModal, MpModalOverlay, MpModalContent, MpModalHeader, MpModalBody, MpModalCloseButton, MpBox, MpButton, MpModalFooter, MpText } from "@mekari/pixel";
export default {
  name: "ModalCancel",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpBox,
    MpButton,
    MpModalFooter,
    MpText,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  methods: {
    handleSubmit() {
      this.handleClose();
    },
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
