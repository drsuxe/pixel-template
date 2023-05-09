<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header> Dokumen dalam proses pencetakan </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-banner variant="warning">
            <mp-banner-icon />
            <mp-banner-description> Aplikasi Jurnal Print Client belum terhubung dengan perangkat Anda. </mp-banner-description>
          </mp-banner>

          <mp-text mt="4"> Untuk mencetak dot matrix dengan Jurnal, pastikan Anda sudah mengaktifkan aplikasi Jurnal Print Client. </mp-text>
        </mp-modal-body>

        <mp-modal-footer justify-content="space-between" align-items="center">
          <mp-flex align-items="center" gap="2">
            <mp-icon name="newtab" size="sm" />
            <mp-text
              is-link
              color="gray.600"
              text-decoration="underline"
              as="a"
              to="https://help-center.jurnal.id/hc/id/articles/11382591322777-Bagaimana-Cara-Mencetak-Dot-Matrix-V3"
              target="_blank"
            >
              Sudah konfirmasi?
            </mp-text>
          </mp-flex>
          <mp-button @click="handleSubmit">Ok, mengerti</mp-button>
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
  MpModalBody,
  MpModalCloseButton,
  MpBox,
  MpButton,
  MpModalFooter,
  MpText,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
  MpIcon,
  MpFlex,
} from "@mekari/pixel";
export default {
  name: "ModalPrintInvoiceDotMatrix",
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
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
    MpIcon,
    MpFlex,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  methods: {
    handleSubmit() {
      this.$emit("handleClose");
    },
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
