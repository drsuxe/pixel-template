<template>
  <mp-modal size="2xl" :isOpen="isOpen">
    <mp-modal-content>
      <mp-modal-header>Impor transaksi penjualan</mp-modal-header>
      <mp-modal-close-button @click="$emit('handleClose')" />
      <mp-modal-body max-height="xl" overflow-y="auto">
        <mp-box v-if="!showOptions">
          <mp-text>Silakan ikuti ada langkah-langkah dibawah ini untuk melalukan impor data.</mp-text>
          <mp-stack mt="6" spacing="4">
            <mp-flex>
              <mp-box flex="none" bg="brand.jurnal" w="34px" h="34px" rounded="full" display="flex" align-items="center" justify-content="center">
                <mp-text color="white">1</mp-text>
              </mp-box>
              <mp-box ml="6" w="full">
                <mp-heading>Pilih aplikasi</mp-heading>
                <mp-text> Pilih aplikasi yang akan digunakan untuk membuat penjualan </mp-text>

                <mp-grid grid-template-columns="repeat(3, 1fr)" gap="3" mt="3">
                  <mp-box
                    @click="selected = 'hello-bill'"
                    border="1px"
                    :border-color="selected === 'hello-bill' ? 'blue.400' : 'gray.100'"
                    :background="selected === 'hello-bill' ? 'blue.50' : ''"
                    height="100px"
                    rounded="md"
                    display="flex"
                    align-items="center"
                    justify-content="center"
                    cursor="pointer"
                    :_hover="{ borderColor: 'gray.400' }"
                  >
                    <img src="../assets/app-logo-hellobill 1.png" alt="" />
                  </mp-box>
                  <mp-box
                    @click="selected = 'tokopedia'"
                    border="1px"
                    :border-color="selected === 'tokopedia' ? 'blue.400' : 'gray.100'"
                    :background="selected === 'tokopedia' ? 'blue.50' : ''"
                    height="100px"
                    rounded="md"
                    display="flex"
                    align-items="center"
                    justify-content="center"
                    cursor="pointer"
                    :_hover="{ borderColor: 'gray.400' }"
                  >
                    <img src="../assets/e5b8438b 1.svg" alt="" />
                  </mp-box>
                  <mp-box
                    @click="selected = 'shopee'"
                    border="1px"
                    :border-color="selected === 'shopee' ? 'blue.400' : 'gray.100'"
                    :background="selected === 'shopee' ? 'blue.50' : ''"
                    height="100px"
                    rounded="md"
                    display="flex"
                    align-items="center"
                    justify-content="center"
                    cursor="pointer"
                    :_hover="{ borderColor: 'gray.400' }"
                  >
                    <img src="../assets/shopee.svg" alt="" />
                  </mp-box>
                  <mp-box
                    @click="selected = 'lazada'"
                    border="1px"
                    :border-color="selected === 'lazada' ? 'blue.400' : 'gray.100'"
                    :background="selected === 'lazada' ? 'blue.50' : ''"
                    height="100px"
                    rounded="md"
                    display="flex"
                    align-items="center"
                    justify-content="center"
                    cursor="pointer"
                    :_hover="{ borderColor: 'gray.400' }"
                  >
                    <img src="../assets/Lazada Logo.svg" alt="" />
                  </mp-box>
                  <mp-box
                    @click="selected = 'bukalapak'"
                    border="1px"
                    :border-color="selected === 'bukalapak' ? 'blue.400' : 'gray.100'"
                    :background="selected === 'bukalapak' ? 'blue.50' : ''"
                    height="100px"
                    rounded="md"
                    display="flex"
                    align-items="center"
                    justify-content="center"
                    cursor="pointer"
                    :_hover="{ borderColor: 'gray.400' }"
                  >
                    <img src="../assets/Bukalapak Logo.svg" alt="" />
                  </mp-box>
                </mp-grid>
              </mp-box>
            </mp-flex>
            <mp-divider />

            <mp-flex>
              <mp-box flex="none" bg="brand.jurnal" w="34px" h="34px" rounded="full" display="flex" align-items="center" justify-content="center">
                <mp-text color="white">2</mp-text>
              </mp-box>
              <mp-box ml="6">
                <mp-heading>Masukkan data anda dengan benar</mp-heading>
                <mp-text>
                  Silakan lengkapi data yang akan diimpor di dalam file template Jurnal yang telah Anda download sebelumnya. Pastikan data yang Anda masukkan
                  sudah sesuai dengan ketentuan pengisian. <mp-text as="span" font-weight="semibold" is-link>Download contoh pengisian</mp-text> atau
                  <mp-text as="span" font-weight="semibold" is-link>pelajari lebih lanjut.</mp-text>
                </mp-text>
              </mp-box>
            </mp-flex>
            <mp-divider />

            <mp-flex>
              <mp-box flex="none" bg="brand.jurnal" w="34px" h="34px" rounded="full" display="flex" align-items="center" justify-content="center">
                <mp-text color="white">3</mp-text>
              </mp-box>
              <mp-box ml="6">
                <mp-heading>Upload file</mp-heading>
                <mp-text>
                  Silakan upload file template yang sudah And lengkapi sesuai ketentuan. File yang diupload harus dalam format dengan ekstensi .csv, .xlsx, atau
                  .xls.
                </mp-text>

                <mp-upload mt="3" :change="handleChange" @clear="handleClear" :key="uploadKey" />
              </mp-box>
            </mp-flex>
          </mp-stack>
        </mp-box>

        <mp-box v-if="showOptions">
          <mp-text>Impor detail data transaksi anda ke jurnal</mp-text>

          <mp-stack spacing="6" mt="6">
            <mp-grid grid-template-columns="repeat(2, 1fr)">
              <mp-text>Akun pembayaran <mp-text as="span" color="red.500">*</mp-text> </mp-text>
              <mp-box>
                <mp-autocomplete id="akun-pembayaran" value="(1-11002) - Bank BCA" :data="['(1-11002) - Bank BCA', 'Option 2', 'Option 3']" />
              </mp-box>
            </mp-grid>
            <mp-grid grid-template-columns="repeat(2, 1fr)">
              <mp-text>Metode pembayaran <mp-text as="span" color="red.500">*</mp-text></mp-text>
              <mp-box>
                <mp-autocomplete id="metode-pembayaran" placeholder="Metode Pembayaran" value="" :data="['Cash', 'Check', 'Bank Transfer', 'Credit Card']" />
              </mp-box>
            </mp-grid>
            <mp-grid grid-template-columns="repeat(2, 1fr)">
              <mp-text>Pelanggan </mp-text>
              <mp-box>
                <mp-autocomplete id="pelanggan" placeholder="Pilih kontak" value="" :data="['Pelanggan 1', 'Pelanggan 2', 'Pelanggan 3']" />
              </mp-box>
            </mp-grid>
            <mp-grid grid-template-columns="repeat(2, 1fr)">
              <mp-text>Tampilan status transaksi</mp-text>
              <mp-box>
                <mp-autocomplete
                  id="tampilan-status-transaksi"
                  value="Sama seperti marketplace"
                  :data="['Buat semua status lunas', 'Sama seperti marketplace']"
                />
              </mp-box>
            </mp-grid>
            <mp-grid grid-template-columns="repeat(2, 1fr)">
              <mp-text>Tag</mp-text>
              <mp-box>
                <mp-input placeholder="Pilih tag" />
              </mp-box>
            </mp-grid>
            <mp-grid grid-template-columns="repeat(2, 1fr)">
              <mp-text>Gudang</mp-text>
              <mp-box>
                <mp-autocomplete id="gudang" placeholder="Pilih gudang" value="Tangerang" :data="['Tangerang', 'Depok', 'Bekasi']" />
              </mp-box>
            </mp-grid>
            <mp-grid grid-template-columns="repeat(2, 1fr)">
              <mp-text>Gunakan pajak inklusif (10%)</mp-text>
              <mp-tooltip id="gunakan-pajak-inklusif" label="Jika dicentang, semua transaksi akan termasuk pajak.">
                <mp-box>
                  <mp-checkbox />
                </mp-box>
              </mp-tooltip>
            </mp-grid>
          </mp-stack>
        </mp-box>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button variant="ghost" mr="3" @click="$emit('handleClose')">Batalkan</mp-button>
        <mp-button :is-disabled="!files" @click="showOptions ? handleContinue() : (showOptions = true)">Lanjutkan</mp-button>
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
  MpModalFooter,
  MpModalBody,
  MpModalCloseButton,
  MpButton,
  MpText,
  MpBox,
  MpHeading,
  MpFlex,
  MpStack,
  MpDivider,
  MpUpload,
  MpGrid,
  MpAutocomplete,
  MpCheckbox,
  MpInput,
  MpTooltip,
} from "@mekari/pixel";
export default {
  name: "ModalImportFromOtherApp",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
    MpButton,
    MpText,
    MpBox,
    MpHeading,
    MpFlex,
    MpStack,
    MpDivider,
    MpUpload,
    MpGrid,
    MpAutocomplete,
    MpCheckbox,
    MpInput,
    MpTooltip,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  data() {
    return {
      selected: "",
      showOptions: false,
      uploadKey: 0,
      files: "",
    };
  },
  methods: {
    handleChange(e) {
      console.log(e.target.files);
      this.files = e.target.files[0];
    },
    handleClear(e, files, clear) {
      console.log(e, files, clear);
      this.uploadKey += 1;
      this.files = "";
    },
    handleContinue() {
      this.$emit("handleClose");
      this.$emit("handleContinue");
    },
  },
};
</script>

<style lang="scss" scoped></style>
