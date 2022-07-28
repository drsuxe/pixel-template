<template>
  <mp-drawer :is-open="isOpen">
    <mp-drawer-overlay />
    <mp-drawer-content>
      <mp-drawer-header>More filter</mp-drawer-header>
      <mp-drawer-close-button @click="$emit('handleClose')" />
      <mp-drawer-body>
        <mp-form-control control-id="tanggal-mulai-drawer">
          <mp-form-label>Tanggal Mulai</mp-form-label>
          <mp-date-picker v-model="tanggalMulai" format="DD/MM/YYYY" />
        </mp-form-control>
      </mp-drawer-body>
      <mp-drawer-footer>
        <mp-button variant="ghost" mr="3" @click="$emit('handleClose')"> Cancel </mp-button>
        <mp-button>Save</mp-button>
      </mp-drawer-footer>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import { MpDrawer, MpDrawerOverlay, MpDrawerContent, MpDrawerCloseButton, MpDrawerHeader, MpDrawerBody, MpDrawerFooter, MpButton } from "@mekari/pixel";

export default {
  name: "DrawerMoreFilter",
  components: {
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpButton,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
