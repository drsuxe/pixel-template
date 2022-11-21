<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose" size="lg">
    <mp-modal-content>
      <mp-modal-header> Pilih kebutuhan kuota </mp-modal-header>
      <mp-modal-close-button />

      <mp-modal-body>
        <mp-stack>
          <mp-flex align-items="start" position="relative">
            <img src="../../assets/icon.svg" alt="" />

            <mp-box ml="3">
              <mp-text font-size="lg" font-weight="semibold">Bulanan</mp-text>
              <mp-text>Rp99.000 per bulan</mp-text>
              <mp-text font-size="sm" color="gray.600">Mendapatkan 1.000 kuota tambahan. Masa berlaku kuota sama dengan paket langganan. </mp-text>
            </mp-box>

            <mp-box position="absolute" top="0" right="5">
              <mp-radio id="bulanan" name="quota" value="bulanan" @change="handleChange" />
            </mp-box>
          </mp-flex>
          <mp-divider />

          <mp-flex align-items="start" position="relative">
            <img src="../../assets/icon.svg" alt="" />

            <mp-box ml="3">
              <mp-text font-size="lg" font-weight="semibold">Sekali bayar</mp-text>
              <mp-text>Rp199.000</mp-text>
              <mp-text font-size="sm" color="gray.600">Mendapatkan X.XXX kuota tambahan. Masa berlaku kuota sesuai tanggal yang dipilih. </mp-text>

              <mp-flex gap="6" mt="3" v-if="selected === 'sekali-bayar'">
                <mp-form-control max-width="176px">
                  <mp-form-label>Tanggal mulai</mp-form-label>
                  <mp-date-picker v-model="date" format="DD MMM YYYY" />
                </mp-form-control>

                <mp-form-control max-width="176px">
                  <mp-form-label>Tanggal berakhir</mp-form-label>
                  <mp-text mt="3">2 Nov 2022</mp-text>
                </mp-form-control>
              </mp-flex>
            </mp-box>

            <mp-box position="absolute" top="0" right="5">
              <mp-radio id="sekali-bayar" name="quota" value="sekali-bayar" @change="handleChange" />
            </mp-box>
          </mp-flex>
          <mp-divider />
        </mp-stack>

        <mp-flex mt="5" justify="end">
          <mp-button-group>
            <mp-button variant="outline" @click="handleClose"> Batalkan </mp-button>
            <mp-button @click="handleAdd" :is-disabled="!selected"> Tambahkan </mp-button>
          </mp-button-group>
        </mp-flex>
      </mp-modal-body>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalBody,
  MpModalHeader,
  MpModalCloseButton,
  MpStack,
  MpBox,
  MpFlex,
  MpText,
  MpDivider,
  MpRadio,
  MpButtonGroup,
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpDatePicker,
} from "@mekari/pixel";

export default {
  name: "CheckoutModalAddQuota",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalBody,
    MpModalHeader,
    MpModalCloseButton,
    MpStack,
    MpBox,
    MpFlex,
    MpText,
    MpDivider,
    MpRadio,
    MpButtonGroup,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpDatePicker,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  data() {
    return {
      selected: "",
      date: new Date(),
    };
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
    handleAdd() {
      this.$emit("handleAdd");
    },
    handleChange(e) {
      this.selected = e.target.value;
    },
  },
};
</script>
