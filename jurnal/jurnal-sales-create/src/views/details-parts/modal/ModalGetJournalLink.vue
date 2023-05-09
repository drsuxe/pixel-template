<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header> Link invoice penagihan penjualan </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-flex justify="space-between" align-items="center" mb="6">
            <mp-text is-link> http://jci.jurnal.id/fftyvurfcb </mp-text>

            <mp-tooltip label="copy">
              <mp-button-icon name="Salin" @click="handleSubmit" />
            </mp-tooltip>
          </mp-flex>
          <mp-text>Siapapun yang memiliki link ini dapat melihat invoicenya seperti tampilan format PDF.</mp-text>
        </mp-modal-body>
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
  MpModalBody,
  MpModalCloseButton,
  MpBox,
  MpText,
  MpFlex,
  MpButtonIcon,
  MpTooltip,
} from "@mekari/pixel";
export default {
  name: "ModalGetJournalLink",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpBox,
    MpText,
    MpFlex,
    MpButtonIcon,
    MpTooltip,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  methods: {
    handleSubmit() {
      this.$toast({
        variant: "success",
        title: "Copied",
        position: "top",
      });
    },
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
