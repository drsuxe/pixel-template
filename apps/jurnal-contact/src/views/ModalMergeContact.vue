<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content>
      <mp-modal-header>Gabungkan kontak</mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-body>
        <StepsCircle>
          <StepsCircleItem id="1" label="Pilih kontak" :is-completed="currentStep === 2" :is-current="currentStep === 1" />
          <StepsCircleItem id="2" label="Pilih kontak" :is-current="currentStep === 2" is-last />
        </StepsCircle>

        <mp-box mt="9" v-if="currentStep === 1">
          <mp-text> Pilih kontak yang akan digabungkan dengan <mp-text as="span" font-weight="semibold">Sugiarto Handoko Sudjarwadi</mp-text> </mp-text>
          <mp-form-control mt="3">
            <mp-form-label>Pilih kontak untuk digabungkan</mp-form-label>
            <mp-autocomplete
              placeholder="Pilih kontak"
              :data="['Abdurrohman', 'Abner Situmorang', 'Eleazar Pangaribu', 'Nathan Naibaho', 'Purnama', 'Sugiarto Handoko Sudjarwadi', 'Zain Alkaf']"
              :content-style="{ width: 'full' }"
            />
          </mp-form-control>
        </mp-box>

        <mp-box mt="9" v-if="currentStep === 2">
          <mp-text>
            Gabungkan <mp-text as="span" font-weight="semibold"> Sugiarto Handoko Sudjarwadi </mp-text> dan
            <mp-text as="span" font-weight="semibold"> Nathan Naibaho </mp-text>
            menjadi:
          </mp-text>

          <mp-radio-group name="option-group" mt="5">
            <mp-radio id="radio-IXbuS" value="Sugiarto Handoko Sudjarwadi">Sugiarto Handoko Sudjarwadi</mp-radio>
            <mp-radio id="radio-jjsCgt" value="Nathan Naibaho">Nathan Naibaho</mp-radio>
          </mp-radio-group>
        </mp-box>

        <mp-flex bg="orange.50" rounded="md" p="3" mt="9">
          <mp-icon name="warning-triangle" color="orange.400" variant="fill" mr="3" />
          <mp-text>
            Dengan menggabungkan kontak akan membuat seluruh data transaksi tergabung dalam master kontak. Sedangkan kontak yang lainnya akan otomatis terarsip.
          </mp-text>
        </mp-flex>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-button-group>
          <mp-button @click="handleCancel" variant="ghost">{{ currentStep === 1 ? "Batalkan" : "Kembali" }}</mp-button>
          <mp-button @click="handleMerge" :is-loading="isLoading"> {{ currentStep === 1 ? "Lanjut" : "Gabungkan" }} </mp-button>
        </mp-button-group>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpFormControl,
  MpFormLabel,
  MpAutocomplete,
  MpModalFooter,
  MpButton,
  MpButtonGroup,
  MpIcon,
  MpRadioGroup,
  MpRadio,
} from "@mekari/pixel";

import StepsCircle from "../components/StepsCircle.vue";
import StepsCircleItem from "../components/StepsCircleItem.vue";

export default {
  name: "ModalMergeContact",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpFormControl,
    MpFormLabel,
    MpAutocomplete,
    MpModalFooter,
    MpButton,
    MpButtonGroup,
    MpIcon,
    StepsCircle,
    StepsCircleItem,
    MpRadioGroup,
    MpRadio,
  },
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      currentStep: 1,
      isLoading: false,
    };
  },
  methods: {
    handleMerge() {
      if (this.currentStep === 1) {
        this.currentStep = 2;
        return;
      }
      if (this.currentStep === 2) {
        this.handleApply();
        return;
      }
    },
    handleCancel() {
      if (this.currentStep === 1) {
        this.handleClose();
        return;
      }
      if (this.currentStep === 2) {
        this.currentStep = 1;
        return;
      }
    },
    handleClose() {
      this.$emit("close");
    },
    handleApply() {
      this.isLoading = true;

      setTimeout(() => {
        this.$emit("apply");
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>
