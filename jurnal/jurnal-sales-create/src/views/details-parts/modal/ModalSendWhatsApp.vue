<template>
  <mp-box>
    <mp-modal size="lg" :isOpen="isOpen">
      <mp-modal-content>
        <mp-modal-header> Kirim via WhatsApp </mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body>
          <mp-grid gap="4" templateColumns="repeat(2, 1fr)">
            <mp-grid-item>
              <mp-form-control control-id="customer">
                <mp-form-label>Nama pelanggan</mp-form-label>
                <mp-autocomplete
                  is-searchable
                  :data="['Kelvin Denver', 'Bregga Teddy', 'Jaka Permadi']"
                  :content-style="{ width: 'max-content', minWidth: 'full', maxWidth: '90vw' }"
                />
              </mp-form-control>
            </mp-grid-item>

            <mp-grid-item>
              <mp-form-control control-id="phone">
                <mp-form-label>Nomor handphone</mp-form-label>
                <mp-input />
              </mp-form-control>
            </mp-grid-item>

            <mp-grid-item col-span="2">
              <mp-form-control control-id="message">
                <mp-form-label>Pesan</mp-form-label>
                <mp-textarea />
                <mp-form-help-text
                  >Anda bisa mengubah pesan template ini di menu

                  <mp-text is-link as="span" font-size="sm">Pengaturan</mp-text>
                </mp-form-help-text>
              </mp-form-control>
            </mp-grid-item>
          </mp-grid>
        </mp-modal-body>

        <mp-modal-footer>
          <mp-button-group>
            <mp-button variant="ghost"> Batalkan </mp-button>
            <mp-button> Kirim </mp-button>
          </mp-button-group>
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
  MpModalFooter,
  MpButtonGroup,
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpTextarea,
  MpAutocomplete,
  MpGrid,
  MpGridItem,
  MpInput,
  MpText,
} from "@mekari/pixel";
export default {
  name: "ModalSendWhatsApp",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpBox,
    MpModalFooter,
    MpButtonGroup,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpTextarea,
    MpAutocomplete,
    MpGrid,
    MpGridItem,
    MpInput,
    MpText,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
};
</script>
