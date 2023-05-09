<template>
  <mp-box>
    <mp-modal size="lg" :isOpen="isOpen" scrollBehavior="auto" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header>Preview permintaan pembelian</mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-form-control margin-bottom="5" max-w="314px">
            <mp-flex justify="space-between">
              <mp-text font-weight="semibold" margin-bottom="1"> Template </mp-text>
            </mp-flex>
            <mp-autocomplete value="1" id="select-template" :data="['1', '2', '3']" :content-style="{ width: 64, zIndex: 'popover' }" />
          </mp-form-control>

          <mp-form-control margin-bottom="5" max-w="314px">
            <mp-checkbox> Jadikan template bawaan </mp-checkbox>
          </mp-form-control>

          <mp-box border="1px" border-color="gray.100" rounded="sm">
            <img src="../../../assets/sales_invoice_37750_template-1_preview 3.png" alt="" />
          </mp-box>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">Batalkan</mp-button>
          <mp-button
            as="a"
            href="https://api.cloudinary.com/v1_1/uxe-mekari/raw/download?api_key=867289484496837&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiNWNjZmQwMjVlZjlhM2I5NGRlNWJjYzY3MTBlNDJlMjUiLCJ1c2VyX2V4dGVybmFsX2lkIjoiZDcyNjgzN2VkNDA4MGViZDg1NjU5YmVlZmQ3YmQwIiwidXNlcl9jdXN0b21faWQiOiJkaW1hcy5yYWthQG1la2FyaS5jb20iLCJjb21wb25lbnQiOiJjb25zb2xlIn0%3D&public_id=Prima_FNB_2022-06-16_051539__0000_kha2xl.zip&signature=bdbd51fb3c43340a135c27c0f8061feb9154dd4f&target_filename=Prima_FNB_2022-06-16_051539__0000_kha2xl.zip&timestamp=1655433184&type=upload"
            >Download PDF</mp-button
          >
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
  MpFormControl,
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
    MpFormControl,
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
