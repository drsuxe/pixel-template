<template>
  <mp-box>
    <mp-drawer :isOpen="isOpen" size="md" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-drawer-content>
        <mp-drawer-header> Atur transaksi berulang </mp-drawer-header>
        <mp-drawer-close-button @click="handleClose" />
        <mp-drawer-body>
          <mp-grid gap="4">
            <mp-form-control>
              <mp-form-label>Nama transaksi</mp-form-label>
              <mp-input value="SI - MKR/01/134/123" />
            </mp-form-control>

            <mp-box>
              <mp-flex gap="3">
                <mp-form-control>
                  <mp-form-label>Diulang setiap</mp-form-label>
                  <mp-input value="1" />
                </mp-form-control>

                <mp-form-control>
                  <mp-form-label>‎</mp-form-label>
                  <mp-autocomplete value="Bulan" :data="['Hari', 'Minggu', 'Bulan', 'Tahun']" :content-style="{ width: 64, zIndex: 'popover' }" />
                </mp-form-control>
              </mp-flex>
            </mp-box>

            <mp-flex gap="3">
              <mp-form-control width="100%">
                <mp-form-label>Akhir pengulangan</mp-form-label>
                <mp-autocomplete
                  v-model="state.berakhir"
                  id="select-template"
                  :data="['Tidak pernah', 'Setelah kali ke', 'Pada tanggal']"
                  :content-style="{ width: 64, zIndex: 'popover' }"
                />
              </mp-form-control>

              <mp-form-control width="100%" v-if="state.berakhir === 'Setelah kali ke'">
                <mp-form-label>‎</mp-form-label>
                <mp-input-group>
                  <mp-input value="0" />
                  <mp-input-right-addon>
                    <mp-text font-weight="bold" padding-x="2"> Kali </mp-text>
                  </mp-input-right-addon>
                </mp-input-group>
              </mp-form-control>

              <mp-form-control width="100%" v-if="state.berakhir === 'Pada tanggal'">
                <mp-form-label>‎</mp-form-label>
                <mp-date-picker />
              </mp-form-control>
            </mp-flex>

            <mp-form-control>
              <mp-form-label>Tanggal mulai</mp-form-label>
              <mp-date-picker />
            </mp-form-control>

            <mp-form-control>
              <mp-form-label>Tanggal transaksi berikutnya</mp-form-label>
              <mp-date-picker />
              <mp-checkbox mt="2"> Tetapkan tanggal transaksi berikutnya pada akhir bulan </mp-checkbox>
            </mp-form-control>

            <mp-form-control>
              <mp-form-label>Kirim faktur via email</mp-form-label>
              <mp-checkbox> Email akan dikirimkan sesuai tanggal transaksi berulang </mp-checkbox>
            </mp-form-control>
          </mp-grid>
        </mp-drawer-body>

        <mp-drawer-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">Batalkan</mp-button>
          <mp-button @click="handleSubmit">Terapkan</mp-button>
        </mp-drawer-footer>
      </mp-drawer-content>

      <mp-drawer-overlay />
    </mp-drawer>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFormControl,
  MpFormLabel,
  MpAutocomplete,
  MpButton,
  MpFlex,
  MpInput,
  MpInputGroup,
  MpInputRightAddon,
  MpDatePicker,
  MpCheckbox,
  MpGrid,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerFooter,
  MpText,
} from "@mekari/pixel";
export default {
  name: "ModalRecurringTransaction",
  components: {
    MpBox,
    MpFormControl,
    MpFormLabel,
    MpAutocomplete,
    MpButton,
    MpFlex,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
    MpDatePicker,
    MpCheckbox,
    MpGrid,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpText,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  data() {
    return {
      state: {
        berakhir: "Tidak pernah",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$toast({
        variant: "success",
        title: "Transaksi berulang berhasil diterapkan",
        position: "top",
      });

      this.$emit("handleClose");
    },
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
