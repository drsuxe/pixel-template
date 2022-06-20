<template>
  <mp-modal size="2xl" :isOpen="isOpen">
    <mp-modal-content>
      <mp-modal-header>Impor transaksi penjualan</mp-modal-header>
      <mp-modal-close-button @click="$emit('handleClose')" />
      <mp-modal-body max-height="xl" overflow-y="auto">
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
                  height="100px"
                  rounded="md"
                  display="flex"
                  align-items="center"
                  justify-content="center"
                  cursor="pointer"
                  position="relative"
                  :_hover="{ borderColor: 'gray.400' }"
                >
                  <img src="../assets/app-logo-hellobill 1.png" alt="" />
                  <mp-icon v-if="selected === 'hello-bill'" name="done" variant="duotone" color="blue.500" position="absolute" right="-3" top="-3" />
                </mp-box>
                <mp-box
                  @click="selected = 'tokopedia'"
                  border="1px"
                  :border-color="selected === 'tokopedia' ? 'blue.400' : 'gray.100'"
                  height="100px"
                  rounded="md"
                  display="flex"
                  align-items="center"
                  justify-content="center"
                  cursor="pointer"
                  position="relative"
                  :_hover="{ bordercolor: 'gray.400' }"
                >
                  <img src="../assets/e5b8438b 1.svg" alt="" />
                  <mp-icon v-if="selected === 'tokopedia'" name="done" variant="duotone" color="blue.500" position="absolute" right="-3" top="-3" />
                </mp-box>
                <mp-box
                  @click="selected = 'shopee'"
                  border="1px"
                  :border-color="selected === 'shopee' ? 'blue.400' : 'gray.100'"
                  height="100px"
                  rounded="md"
                  display="flex"
                  align-items="center"
                  justify-content="center"
                  cursor="pointer"
                  position="relative"
                  :_hover="{ bordercolor: 'gray.400' }"
                >
                  <img src="../assets/shopee.svg" alt="" />
                  <mp-icon v-if="selected === 'shopee'" name="done" variant="duotone" color="blue.500" position="absolute" right="-3" top="-3" />
                </mp-box>
                <mp-box
                  @click="selected = 'lazada'"
                  border="1px"
                  :border-color="selected === 'lazada' ? 'blue.400' : 'gray.100'"
                  height="100px"
                  rounded="md"
                  display="flex"
                  align-items="center"
                  justify-content="center"
                  cursor="pointer"
                  position="relative"
                  :_hover="{ bordercolor: 'gray.400' }"
                >
                  <img src="../assets/Lazada Logo.svg" alt="" />
                  <mp-icon v-if="selected === 'lazada'" name="done" variant="duotone" color="blue.500" position="absolute" right="-3" top="-3" />
                </mp-box>
                <mp-box
                  @click="selected = 'bukalapak'"
                  border="1px"
                  :border-color="selected === 'bukalapak' ? 'blue.400' : 'gray.100'"
                  height="100px"
                  rounded="md"
                  display="flex"
                  align-items="center"
                  justify-content="center"
                  cursor="pointer"
                  position="relative"
                  :_hover="{ bordercolor: 'gray.400' }"
                >
                  <img src="../assets/Bukalapak Logo.svg" alt="" />
                  <mp-icon v-if="selected === 'bukalapak'" name="done" variant="duotone" color="blue.500" position="absolute" right="-3" top="-3" />
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

              <mp-upload mt="3" />
            </mp-box>
          </mp-flex>
        </mp-stack>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button variant="ghost" mr="3" @click="$emit('handleClose')">Batalkan</mp-button>
        <mp-button>Lanjutkan</mp-button>
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
  MpIcon,
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
    MpIcon,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  data() {
    return {
      isShowImportantData: false,
      selected: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
