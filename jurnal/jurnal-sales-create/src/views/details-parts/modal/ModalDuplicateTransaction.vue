<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header> Duplikat transaksi </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-form-control>
            <mp-form-label>Duplikat sebagai</mp-form-label>
            <mp-autocomplete
              value="Faktur penjualan"
              id="select-template"
              :data="['Faktur penjualan', 'Faktur penjualan 2', 'Faktur penjualan 3']"
              :content-style="{ width: 64, zIndex: 'popover' }"
            />
          </mp-form-control>
        </mp-modal-body>

        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">Batalkan</mp-button>
          <mp-button>Duplikat</mp-button>
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
  MpFormControl,
  MpFormLabel,
  MpAutocomplete,
  MpButton,
  MpModalFooter,
} from "@mekari/pixel";
export default {
  name: "ModalDuplicateTransaction",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpBox,
    MpFormControl,
    MpFormLabel,
    MpAutocomplete,
    MpButton,
    MpModalFooter,
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
