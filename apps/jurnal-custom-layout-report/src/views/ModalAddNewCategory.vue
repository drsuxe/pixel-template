<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content>
      <mp-modal-header>Tambah kategori </mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-body>
        <mp-stack spacing="6">
          <mp-form-control control-id="name">
            <mp-form-label>Nama</mp-form-label>
            <mp-input />
          </mp-form-control>

          <mp-form-control control-id="header-of">
            <mp-form-label>Tipe Akun</mp-form-label>
            <mp-select>
              <option value="Account">Account</option>
              <option value="Category">Category</option>
            </mp-select>
          </mp-form-control>

          <mp-form-control control-id="display">
            <mp-form-label>Atur sebagai</mp-form-label>
            <mp-radio-group name="gender" spacing="6" is-inline>
              <mp-radio id="zDhWJ" value="Expense as Positive"> Expense as Positive </mp-radio>
              <mp-radio id="gapqH" value="Expense as Negative"> Expense as Negative </mp-radio>
            </mp-radio-group>
          </mp-form-control>

          <mp-form-control control-id="source">
            <mp-form-label>Sub Akun</mp-form-label>
            <mp-input-tag
              is-show-suggestions
              :suggestions="['1-1000 - Beban (Cost of sales)', '4-4000 - Pendapatan', '4-4001 - Pendapatan Outlet Jakarta', '4-4002 - Pendapatan Outlet Jogja']"
              :content-style="{ width: 'full' }"
            />
          </mp-form-control>
        </mp-stack>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-button variant="ghost" margin-right="3" @click="handleClose">Batal</mp-button>
        <mp-button @click="handleSave">Simpan</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpModalFooter,
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpSelect,
  MpRadioGroup,
  MpRadio,
  MpInputTag,
  MpStack,
} from "@mekari/pixel";

export default {
  name: "ModalAddNewCategory",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpModalFooter,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpSelect,
    MpRadioGroup,
    MpRadio,
    MpInputTag,
    MpStack,
  },
  props: {
    isOpen: Boolean,
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
    handleSave() {
      this.$emit("handleSave");
    },
  },
};
</script>
