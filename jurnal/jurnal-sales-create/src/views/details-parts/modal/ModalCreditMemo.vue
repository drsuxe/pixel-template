<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header> Terapkan kredit memo? </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-text
            >Cek ulang ringkasan faktur penjualan sebelum menerapkan kredit memo
            <mp-text as="span" font-weight="semibold"> {no. kredit memo}</mp-text>
            .
          </mp-text>

          <mp-flex mt="2">
            <mp-text color="gray.600" width="50%"> Nama pelanggan </mp-text>
            <mp-text color="gray.600" width="50%">Jaka Permadi</mp-text>
          </mp-flex>

          <mp-flex mt="4">
            <mp-text color="gray.600" width="50%"> Total kredit </mp-text>
            <mp-text color="gray.600" width="50%">Rp20.000.000,00</mp-text>
          </mp-flex>

          <mp-flex mt="4">
            <mp-text color="gray.600" width="50%"> Total faktur penjualan </mp-text>
            <mp-text color="gray.600" width="50%">Rp40.110.000,00</mp-text>
          </mp-flex>
        </mp-modal-body>

        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">Batalkan</mp-button>
          <mp-button>Terapkan</mp-button>
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
  MpFlex,
} from "@mekari/pixel";
export default {
  name: "ModalCreditMemo",
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
    MpFlex,
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
