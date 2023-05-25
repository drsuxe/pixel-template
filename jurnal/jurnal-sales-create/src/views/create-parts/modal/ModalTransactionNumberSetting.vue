<template>
  <mp-box>
    <mp-modal :isOpen="isOpen">
      <mp-modal-content>
        <mp-modal-header>Pengaturan nomor transaksi</mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body>
          <mp-flex direction="column" gap="1">
            <mp-text font-weight="semibold"
              >Format nomor</mp-text
            >

            <mp-radio-group
              name="transaction-format"
              :value="check"
              @change="handleChange"
            >
              <mp-radio id="automatic" value="automatic">Otomatis terbuat</mp-radio>
              <mp-radio id="custom-format" value="custom-format"
                >Custom</mp-radio
              >
              <mp-radio id="tambah-baru" value="tambah-baru"
                >Tambah baru</mp-radio
              >
            </mp-radio-group>

            <mp-grid
              v-if="check == 'custom-format'"
              template-columns="repeat(3, 1fr)"
              gap="3"
            >
              <mp-grid-item col-span="3">
                <mp-autocomplete
                  id="autocomplete-custom-format"
                  :value="select"
                  :data="[
                    { value: '[Otomatis]' },
                    { value: 'SI-[Auto]-20' },
                    { value: 'SI-[Auto]-21' },
                    { value: 'SI-[Auto]-22' },
                  ]"
                  :contentStyle="{ width: 'full', zIndex: 'popover' }"
                >
                  <template slot-scope="props">
                    <mp-flex
                      align-items="center"
                      justify="space-between"
                      width="full"
                    >
                      <mp-text>
                        {{ props.item.value }}
                      </mp-text>
                      <mp-icon name="delete" size="sm" />
                    </mp-flex>
                  </template>
                </mp-autocomplete>
              </mp-grid-item>
            </mp-grid>

            <mp-grid
              v-if="check == 'tambah-baru'"
              template-columns="repeat(3, 1fr)"
              gap="3"
            >
              <mp-form-control>
                <mp-input placeholder="Contoh: SA/" />
              </mp-form-control>
              <mp-form-control isDisabled>
                <mp-input placeholder="Contoh: 001" />
              </mp-form-control>
              <mp-form-control>
                <mp-input placeholder="Contoh /XV" />
              </mp-form-control>
              <mp-grid-item col-span="3">
                <mp-form-control>
                  <mp-form-label> Mulai dari nomor</mp-form-label>
                  <mp-input />
                  <mp-form-help-text>Nomor transaksi akan bertambah secara otomatis</mp-form-help-text>
                </mp-form-control>
              </mp-grid-item>
            </mp-grid>
          </mp-flex>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-flex justify="space-between" width="full" align="center">
            <mp-text color="gray.600"> Pelajari lebih lanjut </mp-text>
            <mp-button-group>
              <mp-button variant="ghost" mr="3" @click="$emit('handleClose')"
                >Tutup</mp-button
              >
              <mp-button @click="$emit('handleClose')">Simpan</mp-button>
            </mp-button-group>
          </mp-flex>
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
  MpButtonGroup,
  MpBox,
  MpText,
  MpFlex,
  MpRadio,
  MpRadioGroup,
  MpAutocomplete,
  MpIcon,
  MpGrid,
  MpGridItem,
  MpFormControl,
  MpInput,
      MpFormLabel,
    MpFormHelpText,
} from "@mekari/pixel";
export default {
  name: "ModalTransactionNumberSetting",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
    MpButton,
    MpButtonGroup,
    MpBox,
    MpText,
    MpFlex,
    MpRadio,
    MpRadioGroup,
    MpAutocomplete,
    MpIcon,
    MpGrid,
    MpGridItem,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpInput,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  data() {
    return {
      check: "automatic",
      select: "",
    };
  },
  methods: {
    handleChange(value) {
      this.check = value;
    },
  },
};
</script>

