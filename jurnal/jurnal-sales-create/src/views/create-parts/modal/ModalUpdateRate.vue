<template>
  <mp-box>
    <mp-modal size="lg" :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header> Ubah kurs </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-flex align-items="center">
            <mp-text> Terakhir diperbarui 25 Sep 2022 pada 08:15 (GMT+7) </mp-text>
            <mp-tooltip label="Tooltip">
              <mp-icon name="info" size="sm" ml="1" />
            </mp-tooltip>
          </mp-flex>

          <mp-flex align-items="center">
            <mp-text text-decoration="underline" is-link>Lihat Kurs Bank Indonesia</mp-text>
            <mp-icon name="newtab" size="sm" ml="1" />
          </mp-flex>

          <mp-flex gap="4" mt="4">
            <mp-box width="48%">
              <mp-form-control>
                <mp-form-label>Kurs transaksi</mp-form-label>
                <mp-input />
              </mp-form-control>
            </mp-box>
            <mp-box width="4%" display="flex" justify-content="center" align-items="flex-end" pb="2">
              <mp-text>=</mp-text>
            </mp-box>
            <mp-box width="48%">
              <mp-flex align-items="flex-end" h="full">
                <mp-form-control width="full">
                  <mp-input-group>
                    <mp-input-left-addon>
                      <mp-text font-weight="semibold" px="2">Rp</mp-text>
                    </mp-input-left-addon>
                    <mp-input />
                  </mp-input-group>
                </mp-form-control>
              </mp-flex>
            </mp-box>
          </mp-flex>

          <mp-box mt="8">
            <mp-checkbox>Terapkan sebagai kurs pada tanggal 25 Sep 2022</mp-checkbox>
          </mp-box>
        </mp-modal-body>

        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">Batalkan</mp-button>
          <mp-button @click="handleSubmit">Simpan perubahan</mp-button>
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
  MpInputLeftAddon,
  MpFormControl,
  MpFormLabel,
  MpText,
  MpTooltip,
  MpIcon,
  MpCheckbox,
} from "@mekari/pixel";
export default {
  name: "ModalUpdateRate",
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
    MpInputLeftAddon,
    MpFormControl,
    MpFormLabel,
    MpText,
    MpTooltip,
    MpIcon,
    MpCheckbox,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  data() {
    return {};
  },
  methods: {
    handleSubmit() {
      this.$toast({
        variant: "success",
        title: "Kurs berhasil diterapkan di transaksi ini",
        position: "top",
      });

      this.handleClose();
    },
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
