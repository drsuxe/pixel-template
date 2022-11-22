<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose" size="lg">
    <mp-modal-content>
      <mp-modal-header> Pilih fitur tambahan </mp-modal-header>
      <mp-modal-close-button />

      <mp-modal-body>
        <mp-stack>
          <template v-for="(value, index) in options">
            <mp-flex align-items="start" position="relative" :key="value.id">
              <img src="../assets/icon.svg" alt="" />

              <mp-box ml="3">
                <mp-text font-size="lg" font-weight="semibold"> {{ value.name }} </mp-text>
                <mp-text>Rp99.000 per bulan</mp-text>
                <mp-text font-size="sm" color="gray.600"
                  >Gunakan Pro Forma Invoice dan Join Invoice (Tukar Faktur) untuk memudahkan proses penagihan pembayaran sesuai kebutuhan bisnis Anda.
                  <mp-text as="span" font-size="sm" text-decoration="underline" is-link> Pelajari lebih lanjut </mp-text>
                </mp-text>
              </mp-box>

              <mp-box position="absolute" top="0" right="5">
                <mp-checkbox v-model="options[index].isSelected" />
              </mp-box>
            </mp-flex>
            <mp-divider :key="`divider-${value.id}`" />
          </template>
        </mp-stack>

        <mp-flex mt="5" justify="end">
          <mp-button-group>
            <mp-button variant="outline" @click="handleClose"> Batalkan </mp-button>
            <mp-button @click="handleAdd" :is-disabled="isDisableButton"> Tambahkan </mp-button>
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
  MpButtonGroup,
  MpButton,
  MpCheckbox,
} from "@mekari/pixel";

export default {
  name: "ModalFiturTambahan",
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
    MpButtonGroup,
    MpButton,
    MpCheckbox,
  },
  props: {
    isOpen: { type: [Boolean] },
    data: { type: Array, default: () => [] },
  },
  data() {
    return {
      options: JSON.parse(JSON.stringify(this.data)) || [],
      date: new Date(),
    };
  },
  watch: {
    data: {
      handler() {
        this.options = JSON.parse(JSON.stringify(this.data));
      },
      deep: true,
    },
  },
  computed: {
    isDisableButton() {
      const result = this.options.filter((item) => item.isSelected);
      return result.length === 0;
    },
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
    handleAdd() {
      this.$emit("handleAdd", this.options);
    },
  },
};
</script>
