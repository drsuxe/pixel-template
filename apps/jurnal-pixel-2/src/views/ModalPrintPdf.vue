<template>
  <mp-box>
    <mp-modal size="2xl" :isOpen="isOpen" scrollBehavior="inside">
      <mp-modal-content>
        <mp-modal-header>Templates</mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body>
          <mp-form-control margin-bottom="5" max-w="314px">
            <mp-flex justify="space-between">
              <mp-text font-weight="semibold" margin-bottom="1"> Pilih template </mp-text>
              <mp-text font-weight="semibold" is-link margin-bottom="1"> Atur PDF </mp-text>
            </mp-flex>
            <mp-autocomplete value="1" id="select-template" :data="['1', '2', '3']" />
          </mp-form-control>
          <img src="../assets/invoice_preview_1.png" alt="" />
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="$emit('handleClose')">Batalkan</mp-button>
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
  },
  props: {
    isOpen: { type: [Boolean] },
  },
};
</script>

<style lang="scss" scoped></style>
