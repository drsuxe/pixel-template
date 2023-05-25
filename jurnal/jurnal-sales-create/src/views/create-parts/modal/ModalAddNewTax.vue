<template>
  <mp-box>
    <mp-modal size="lg" :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true" scroll-behavior="auto">
      <mp-modal-content>
        <mp-modal-header>
      Buat pajak baru
        </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
                     <mp-grid template-columns="repeat(2, 1fr)" gap="6" mb="4">
              <mp-grid-item col-span="2" display="flex" gap="6">
                <mp-form-control width="70%">
                  <mp-form-label>Nama pajak</mp-form-label>
                  <mp-input placeholder="Nama pajak" />
                </mp-form-control>

                <mp-form-control width="30%">
                  <mp-form-label>Persentase efektif</mp-form-label>
                  <mp-input-group>
                    <mp-input />
                    <mp-input-right-addon>
                      <mp-text font-weight="semibold" px="2">%</mp-text>
                    </mp-input-right-addon>
                  </mp-input-group>
                </mp-form-control>
              </mp-grid-item>

              <mp-grid-item>
                <mp-form-control>
                  <mp-form-label>Akun penjualan</mp-form-label>
                  <mp-autocomplete
                    placeholder="Pilih akun"
                    :data="['Option 1', 'Option 2', 'Option 3']"
                    :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                  />
                  <mp-form-help-text> Akun ini akan mencatat pajak penjualan Anda </mp-form-help-text>
                </mp-form-control>
              </mp-grid-item>

              <mp-grid-item>
                <mp-form-control>
                  <mp-form-label>Akun pembelian</mp-form-label>
                  <mp-autocomplete
                    placeholder="Pilih akun"
                    :data="['Option 1', 'Option 2', 'Option 3']"
                    :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                  />
                  <mp-form-help-text> Akun ini akan mencatat pajak pembelian Anda </mp-form-help-text>
                </mp-form-control>
              </mp-grid-item>
            </mp-grid>

            <mp-flex>
              <mp-checkbox>
                Pemotongan pajak pihak ketiga
              </mp-checkbox>

              <mp-tooltip label="Untuk memotong pajak di tagihan penjualan.">
                <mp-icon name="info" size="sm" ml="2" />
              </mp-tooltip>
            </mp-flex>
        </mp-modal-body>

        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">Batalkan</mp-button>
          <mp-button @click="handleSubmit">Simpan</mp-button>
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
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpGrid,
  MpGridItem,
  MpAutocomplete,
  MpCheckbox,
  MpInputGroup,
  MpInputRightAddon,
  MpText,
  MpFormHelpText,
  MpTooltip,
  MpIcon,
  MpFlex
} from "@mekari/pixel";
export default {
  name: "ModalAddNewTax",
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
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpGrid,
    MpGridItem,
    MpAutocomplete,
    MpCheckbox,
    MpInputGroup,
    MpInputRightAddon,
    MpText,
    MpFormHelpText,
    MpTooltip,
    MpIcon,
    MpFlex
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
