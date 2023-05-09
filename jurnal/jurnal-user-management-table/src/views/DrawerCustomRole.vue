<template>
  <mp-drawer :is-open="isOpen" :on-close="handleClose" size="2xl" :close-on-esc="false">
    <mp-drawer-overlay />
    <mp-drawer-content>
      <mp-drawer-header>Tambah peran custom</mp-drawer-header>
      <mp-drawer-close-button />
      <mp-drawer-body overflow-y="auto">
        <mp-box max-width="399px">
          <mp-heading mb="3">Info peran</mp-heading>

          <mp-form-control control-id="nama-peran" :is-required="true" mb="5">
            <mp-form-label>Username</mp-form-label>
            <mp-input />
          </mp-form-control>

          <mp-form-control control-id="keterangan">
            <mp-form-label>Keterangan</mp-form-label>
            <mp-textarea maxlength="400" resize="vertical" />
          </mp-form-control>
        </mp-box>

        <mp-box mt="5">
          <mp-heading mb="3">Wewenang<mp-box as="span" color="red.500">*</mp-box> </mp-heading>
          <TableCustomRole />
        </mp-box>
      </mp-drawer-body>
      <mp-drawer-footer border-top-width="1px">
        <mp-button variant="ghost" mr="3" @click="handleClose"> Cancel </mp-button>
        <mp-button>Save</mp-button>
      </mp-drawer-footer>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerFooter,
  MpButton,
  MpHeading,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpTextarea,
  MpBox,
} from "@mekari/pixel";
import TableCustomRole from "./TableCustomRole.vue";

export default {
  name: "DrawerCustomRole",
  components: {
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpButton,
    MpHeading,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpTextarea,
    MpBox,
    TableCustomRole,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose: function () {
      this.$emit('close')
    },
  },
};
</script>
