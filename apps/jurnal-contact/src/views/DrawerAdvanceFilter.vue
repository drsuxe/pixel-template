<template>
  <mp-drawer :is-open="isOpen" :on-close="handleClose" size="md">
    <mp-drawer-overlay />
    <mp-drawer-content>
      <mp-drawer-header>Title</mp-drawer-header>
      <mp-drawer-close-button />
      <mp-drawer-body>
        <mp-stack spacing="5">
          <mp-form-control>
            <mp-form-label>Kata kunci</mp-form-label>
            <mp-input />
          </mp-form-control>

          <mp-form-control>
            <mp-form-label>Status transaksi</mp-form-label>
            <mp-autocomplete placeholder="Pilih" :data="['Option 1', 'Option 2', 'Option 3']" :content-style="{ width: 'full' }" />
          </mp-form-control>

          <mp-form-control>
            <mp-form-label>Tipe transaksi</mp-form-label>
            <mp-autocomplete placeholder="Pilih" :data="['Option 1', 'Option 2', 'Option 3']" :content-style="{ width: 'full' }" />
          </mp-form-control>

          <mp-form-control>
            <mp-form-label>Pilih periode</mp-form-label>
            <AdvancedCalendar />
          </mp-form-control>
        </mp-stack>
      </mp-drawer-body>
      <mp-drawer-footer justify-content="space-between" align-items="center">
        <mp-text color="gray.600">Atur ulang</mp-text>

        <mp-button-group>
          <mp-button variant="ghost" mr="3" @click="handleClose"> Batal </mp-button>
          <mp-button>Terapkan</mp-button>
        </mp-button-group>
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
  MpText,
  MpButton,
  MpButtonGroup,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpStack,
  MpAutocomplete,
} from "@mekari/pixel";
import AdvancedCalendar from "../components/AdvanceCalendar.vue";

export default {
  name: "DrawerAdvanceFilter",
  components: {
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpText,
    MpButton,
    MpButtonGroup,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpStack,
    MpAutocomplete,
    AdvancedCalendar,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose: function () {
      this.$emit("close");
    },
    handleApply() {
      this.$emit("apply");
    },
    handleReset() {
      this.$emit("reset");
    },
  },
};
</script>
