<template>
  <mp-box>
    <mp-modal size="lg" :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true" scroll-behavior="auto">
      <mp-modal-content>
        <mp-modal-header align-items="center" display="flex">
          <mp-button-icon name="arrows-left" v-if="currentActive === 'tax'" @click="currentActive = 'product'" mr="2" />
          {{ currentActive === "product" ? "Tambah produk " : "Buat pajak baru" }}
        </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <template v-if="currentActive === 'product'">
            <mp-grid template-columns="repeat(2, 1fr)" gap="6" mb="4">
              <mp-grid-item>
                <mp-form-control>
                  <mp-form-label>Nama produk</mp-form-label>
                  <mp-input placeholder="Nama" />
                </mp-form-control>
              </mp-grid-item>

              <mp-grid-item>
                <mp-form-control>
                  <mp-form-label>Satuan</mp-form-label>
                  <mp-autocomplete
                    placeholder="Pilih unit"
                    :data="['Option 1', 'Option 2', 'Option 3']"
                    :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                  />
                </mp-form-control>
              </mp-grid-item>

              <mp-grid-item>
                <mp-form-control>
                  <mp-form-label>Kode produk</mp-form-label>
                  <mp-input placeholder="Kode produk" />
                </mp-form-control>
              </mp-grid-item>

              <mp-grid-item>
                <mp-form-control>
                  <mp-form-label>Kategori produk</mp-form-label>
                  <mp-autocomplete
                    placeholder="Pilih kategori"
                    :data="['Option 1', 'Option 2', 'Option 3']"
                    :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                  />
                </mp-form-control>
              </mp-grid-item>
            </mp-grid>

            <mp-box mb="4">
              <mp-checkbox mb="3"> Saya beli produk ini </mp-checkbox>

              <mp-grid template-columns="repeat(3, 1fr)" gap="6">
                <mp-grid-item>
                  <mp-form-control>
                    <mp-form-label>Harga satuan</mp-form-label>
                    <mp-input-group>
                      <mp-input-left-addon>
                        <mp-text px="2" font-weight="semibold">Rp</mp-text>
                      </mp-input-left-addon>
                      <mp-input text-align="right" />
                    </mp-input-group>
                  </mp-form-control>
                </mp-grid-item>

                <mp-grid-item>
                  <mp-form-control>
                    <mp-form-label>Akun pembelian</mp-form-label>
                    <mp-autocomplete
                      placeholder="Pilih akun"
                      :data="['Option 1', 'Option 2', 'Option 3']"
                      :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                    />
                  </mp-form-control>
                </mp-grid-item>

                <mp-grid-item>
                  <mp-form-control>
                    <mp-form-label>Pajak pembelian</mp-form-label>
                    <mp-autocomplete
                      placeholder="Pilih pajak"
                      :data="['Option 1', 'Option 2', 'Option 3']"
                      :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                      is-show-button-action
                      button-action-text="Tambah pajak"
                      @button-action="currentActive = 'tax'"
                    />
                  </mp-form-control>
                </mp-grid-item>
              </mp-grid>
            </mp-box>

            <mp-box mb="4">
              <mp-checkbox mb="3"> Saya jual produk ini </mp-checkbox>

              <mp-grid template-columns="repeat(3, 1fr)" gap="6">
                <mp-grid-item>
                  <mp-form-control>
                    <mp-form-label>Harga satuan</mp-form-label>
                    <mp-input-group>
                      <mp-input-left-addon>
                        <mp-text px="2" font-weight="semibold">Rp</mp-text>
                      </mp-input-left-addon>
                      <mp-input text-align="right" />
                    </mp-input-group>
                  </mp-form-control>
                </mp-grid-item>

                <mp-grid-item>
                  <mp-form-control>
                    <mp-form-label>Akun penjualan</mp-form-label>
                    <mp-autocomplete
                      placeholder="Pilih akun"
                      :data="['Option 1', 'Option 2', 'Option 3']"
                      :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                    />
                  </mp-form-control>
                </mp-grid-item>

                <mp-grid-item>
                  <mp-form-control>
                    <mp-form-label>Pajak penjualan</mp-form-label>
                    <mp-autocomplete
                      placeholder="Pilih pajak"
                      :data="['Option 1', 'Option 2', 'Option 3']"
                      :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                    />
                  </mp-form-control>
                </mp-grid-item>
              </mp-grid>
            </mp-box>

            <mp-box mb="4">
              <mp-checkbox mb="3"> Monitor persedian barang </mp-checkbox>

              <mp-grid template-columns="repeat(2, 1fr)" gap="6">
                <mp-grid-item>
                  <mp-form-control>
                    <mp-form-label>Batas stok minimum</mp-form-label>
                    <mp-input placeholder="Batas stok minimum" />
                    <mp-form-help-text>Opening stock quantity can be recorded using stock adjustment</mp-form-help-text>
                  </mp-form-control>
                </mp-grid-item>

                <mp-grid-item>
                  <mp-form-control>
                    <mp-form-label>Akun persediaan default</mp-form-label>
                    <mp-autocomplete
                      placeholder="Pilih akun"
                      :data="['Option 1', 'Option 2', 'Option 3']"
                      :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                    />
                  </mp-form-control>
                </mp-grid-item>
              </mp-grid>
            </mp-box>
          </template>

          <template v-else>
            <mp-grid template-columns="repeat(2, 1fr)" gap="6" mb="4">
              <mp-grid-item col-span="2" display="flex" gap="6">
                <mp-form-control width="70%">
                  <mp-form-label>Nama pajak</mp-form-label>
                  <mp-input placeholder="Nama pajak" />
                </mp-form-control>

                <mp-form-control width="30%">
                  <mp-form-label>Persentase efektif</mp-form-label>
                  <mp-input-group>
                    <mp-input />
                    <mp-input-right-addon>
                      <mp-text font-weight="semibold" px="2">%</mp-text>
                    </mp-input-right-addon>
                  </mp-input-group>
                </mp-form-control>
              </mp-grid-item>

              <mp-grid-item>
                <mp-form-control>
                  <mp-form-label>Akun penjualan</mp-form-label>
                  <mp-autocomplete
                    placeholder="Pilih akun"
                    :data="['Option 1', 'Option 2', 'Option 3']"
                    :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                  />
                  <mp-form-help-text> Akun ini akan mencatat pajak penjualan Anda </mp-form-help-text>
                </mp-form-control>
              </mp-grid-item>

              <mp-grid-item>
                <mp-form-control>
                  <mp-form-label>Akun pembelian</mp-form-label>
                  <mp-autocomplete
                    placeholder="Pilih akun"
                    :data="['Option 1', 'Option 2', 'Option 3']"
                    :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                  />
                  <mp-form-help-text> Akun ini akan mencatat pajak pembelian Anda </mp-form-help-text>
                </mp-form-control>
              </mp-grid-item>
            </mp-grid>

            <mp-flex>
              <mp-checkbox>
                Pemotongan pajak pihak ketiga
              </mp-checkbox>

              <mp-tooltip label="Untuk memotong pajak di tagihan penjualan.">
                <mp-icon name="info" size="sm" ml="2" />
              </mp-tooltip>
            </mp-flex>
          </template>
        </mp-modal-body>

        <mp-modal-footer>
          <mp-button variant="ghost" mr="3" @click="handleClose">Batalkan</mp-button>
          <mp-button @click="handleSubmit">Simpan</mp-button>
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
  MpModalBody,
  MpModalCloseButton,
  MpBox,
  MpButton,
  MpModalFooter,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpGrid,
  MpGridItem,
  MpAutocomplete,
  MpCheckbox,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpText,
  MpFormHelpText,
  MpButtonIcon,
  MpTooltip,
  MpIcon
} from "@mekari/pixel";
export default {
  name: "ModalAddProduct",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpBox,
    MpButton,
    MpModalFooter,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpGrid,
    MpGridItem,
    MpAutocomplete,
    MpCheckbox,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpText,
    MpFormHelpText,
    MpButtonIcon,
    MpTooltip,
    MpIcon
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  data() {
    return {
      currentActive: "product", // product | tax
    };
  },
  methods: {
    handleSubmit() {
      this.handleClose();
    },
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
