<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header> Buat syarat pembayaran </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-flex gap="4">
            <mp-box width="70%">
              <mp-form-control>
                <mp-form-label>Nama</mp-form-label>
                <mp-input v-model="form.name" />
              </mp-form-control>
            </mp-box>

            <mp-box width="30%">
              <mp-form-control>
                <mp-form-label>Jatuh tempo</mp-form-label>
                <mp-input-group>
                  <mp-input v-model="form.dueDate" />
                  <mp-input-right-addon>
                    <mp-text>Hari</mp-text>
                  </mp-input-right-addon>
                </mp-input-group>
              </mp-form-control>
            </mp-box>
          </mp-flex>
        </mp-modal-body>

        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">Batalkan</mp-button>
          <mp-button @click="handleSubmit" :is-disabled="!form.name || !form.dueDate">Simpan</mp-button>
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
  MpFlex,
  MpInput,
  MpInputGroup,
  MpInputRightAddon,
  MpFormControl,
  MpFormLabel,
  MpText
} from "@mekari/pixel";
export default {
  name: "ModalPaymentRequirement",
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
    MpFlex,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
    MpFormControl,
    MpFormLabel,
    MpText
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  data() {
    return {
      form: {
        name: '',
        dueDate: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$toast({
        variant: "success",
        title: "Copied",
        position: "top",
      });

      this.handleClose()
    },
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
