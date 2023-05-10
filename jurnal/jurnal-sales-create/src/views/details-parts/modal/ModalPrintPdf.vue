<template>
  <mp-box>
    <mp-modal size="lg" :isOpen="isOpen" scrollBehavior="inside" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header>Preview permintaan pembelian</mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-box margin-bottom="5">
            <mp-text font-weight="semibold" margin-bottom="1"> Template </mp-text>

            <mp-flex gap="5" align-items="center">
              <mp-box width="50%">
                <mp-autocomplete value="1" id="select-template" :data="['1', '2', '3']" :content-style="{ width: 64, zIndex: 'popover' }" />
              </mp-box>
              <mp-box width="50%">
                <mp-checkbox> Jadikan template bawaan </mp-checkbox>
              </mp-box>
            </mp-flex>

            <mp-text is-link mt="1">Atur PDF</mp-text>
          </mp-box>

          <mp-box border="1px" border-color="gray.100" rounded="sm" height="54vh" overflow-y="auto">
            <img src="../../../assets/sales_invoice_preview.jpg" alt="" />
          </mp-box>
        </mp-modal-body>
        <mp-modal-footer> </mp-modal-footer>

        <mp-modal-footer justify-content="space-between" align-items="center">
          <mp-button variant="outline" mr="3">Lihat dot matrix</mp-button>

          <mp-button-group>
            <mp-button variant="ghost" mr="3" @click="handleClose">Batalkan</mp-button>
            <mp-button
              as="a"
              href="https://api.cloudinary.com/v1_1/uxe-mekari/raw/download?api_key=867289484496837&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiNWNjZmQwMjVlZjlhM2I5NGRlNWJjYzY3MTBlNDJlMjUiLCJ1c2VyX2V4dGVybmFsX2lkIjoiZDcyNjgzN2VkNDA4MGViZDg1NjU5YmVlZmQ3YmQwIiwidXNlcl9jdXN0b21faWQiOiJkaW1hcy5yYWthQG1la2FyaS5jb20iLCJjb21wb25lbnQiOiJjb25zb2xlIn0%3D&public_id=Prima_FNB_2022-06-16_051539__0000_kha2xl.zip&signature=bdbd51fb3c43340a135c27c0f8061feb9154dd4f&target_filename=Prima_FNB_2022-06-16_051539__0000_kha2xl.zip&timestamp=1655433184&type=upload"
              >Preview PDF</mp-button
            >
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
  MpModalFooter,
  MpModalBody,
  MpModalCloseButton,
  MpButton,
  MpBox,
  MpText,
  MpAutocomplete,
  MpFlex,
  MpCheckbox,
} from "@mekari/pixel";
export default {
  name: "ModalPrintPdf",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
    MpButton,
    MpBox,
    MpText,
    MpAutocomplete,
    MpFlex,
    MpCheckbox,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
