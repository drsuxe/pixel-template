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
            <mp-box ml="6">
              <mp-heading>Download file template Jurnal</mp-heading>
              <mp-text>
                Anda perlu memiliki file template Jurnal untuk mengisi data yang akan diimpor. Lewati langkah ini apabila Anda sudah memiliki file template ini.
              </mp-text>

              <mp-popover id="popover-download-template-jurnal">
                <mp-popover-trigger>
                  <mp-button mt="3" variant="outline" right-icon="caret-down"> Download template </mp-button>
                </mp-popover-trigger>
                <mp-popover-content max-width="64" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400" z-index="popover">
                  <mp-popover-list>
                    <mp-popover id="child-popover-sales-invoice" placement="right-end" trigger="hover">
                      <mp-popover-trigger>
                        <mp-popover-list-item is-arrow> Sales invoice </mp-popover-list-item>
                      </mp-popover-trigger>
                      <mp-popover-content bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
                        <mp-popover-list>
                          <mp-popover-list-item> Excel format </mp-popover-list-item>
                          <mp-popover-list-item> CSV format </mp-popover-list-item>
                        </mp-popover-list>
                      </mp-popover-content>
                    </mp-popover>
                    <mp-popover id="child-popover-sales-order" placement="right-end" trigger="hover">
                      <mp-popover-trigger>
                        <mp-popover-list-item is-arrow> Sales order </mp-popover-list-item>
                      </mp-popover-trigger>
                      <mp-popover-content bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
                        <mp-popover-list>
                          <mp-popover-list-item> Excel format </mp-popover-list-item>
                          <mp-popover-list-item> CSV format </mp-popover-list-item>
                        </mp-popover-list>
                      </mp-popover-content>
                    </mp-popover>
                    <mp-popover id="child-popover-sales-quote" placement="right-end" trigger="hover">
                      <mp-popover-trigger>
                        <mp-popover-list-item is-arrow> Sales quote </mp-popover-list-item>
                      </mp-popover-trigger>
                      <mp-popover-content bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
                        <mp-popover-list>
                          <mp-popover-list-item> Excel format </mp-popover-list-item>
                          <mp-popover-list-item> CSV format </mp-popover-list-item>
                        </mp-popover-list>
                      </mp-popover-content>
                    </mp-popover>
                    <mp-popover id="child-popover-sales-payment" placement="right-end" trigger="hover">
                      <mp-popover-trigger>
                        <mp-popover-list-item is-arrow> Sales payment </mp-popover-list-item>
                      </mp-popover-trigger>
                      <mp-popover-content bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
                        <mp-popover-list>
                          <mp-popover-list-item> Excel format </mp-popover-list-item>
                          <mp-popover-list-item> CSV format </mp-popover-list-item>
                        </mp-popover-list>
                      </mp-popover-content>
                    </mp-popover>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-box>
          </mp-flex>
          <mp-divider />

          <mp-flex>
            <mp-box flex="none" bg="brand.jurnal" w="34px" h="34px" rounded="full" display="flex" align-items="center" justify-content="center">
              <mp-text color="white">2</mp-text>
            </mp-box>
            <mp-box ml="6">
              <mp-heading>Lengkapi data import Anda</mp-heading>
              <mp-text>
                Silakan lengkapi data yang akan diimpor di dalam file template Jurnal yang telah Anda download sebelumnya. Pastikan data yang Anda masukkan
                sudah sesuai dengan ketentuan pengisian. <mp-text as="span" font-weight="semibold" is-link>Download contoh pengisian</mp-text> atau
                <mp-text as="span" font-weight="semibold" is-link>pelajari lebih lanjut.</mp-text>
              </mp-text>

              <mp-box v-if="isShowImportantData">
                <mp-heading font-weight="semibold" as="h2" mt="3">Penting!</mp-heading>
                <mp-box as="ul" list-style-position="inside" pl="2">
                  <mp-text as="li"> Format Tanggal : dd/mm/yyyy (English - Canada) </mp-text>
                  <mp-text as="li"> Maksimum baris transaksi adalah 1000 entry (optimal) </mp-text>
                  <mp-text as="li"> TIDAK perlu pemisah untuk nominal ribuan seperti koma (,) atau titik (.) </mp-text>
                  <mp-text as="li"> Gunakan titik (.) sebagai pemisah desimal </mp-text>
                  <mp-text as="li"> TIDAK perlu memasukkan simbol mata uang (Rp, $, dll) </mp-text>
                  <mp-text as="li"> JANGAN ubah format kolom yang disediakan </mp-text>
                </mp-box>

                <mp-heading font-weight="semibold" as="h2" mt="3">Tips</mp-heading>
                <mp-text>
                  Jika menggunakan Microsoft Excel, gunakan tanda (') didepan pada setiap pengisian data yang menggunakan angka. Contoh : `6-6003, `11-02-2016
                </mp-text>
              </mp-box>

              <mp-button mt="3" variant="outline" @click="isShowImportantData = !isShowImportantData">
                {{ isShowImportantData ? "Sembunyikan" : "Lihat info penting" }}
              </mp-button>
            </mp-box>
          </mp-flex>
          <mp-divider />

          <mp-flex>
            <mp-box flex="none" bg="brand.jurnal" w="34px" h="34px" rounded="full" display="flex" align-items="center" justify-content="center">
              <mp-text color="white">3</mp-text>
            </mp-box>
            <mp-box ml="6">
              <mp-heading>Upload file template</mp-heading>
              <mp-text>
                Silakan upload file template yang sudah And lengkapi sesuai ketentuan. File yang diupload harus dalam format dengan ekstensi .csv, .xlsx, atau
                .xls.
              </mp-text>

              <mp-upload mt="3" :change="handleChange" @clear="handleClear" :key="uploadKey" />
            </mp-box>
          </mp-flex>
        </mp-stack>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button variant="ghost" mr="3" @click="$emit('handleClose')">Batalkan</mp-button>
        <mp-button :is-disabled="!files">Impor</mp-button>
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
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
export default {
  name: "ModalImportFromJurnal",
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
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  data() {
    return {
      isShowImportantData: false,
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
  },
};
</script>

<style lang="scss" scoped></style>
