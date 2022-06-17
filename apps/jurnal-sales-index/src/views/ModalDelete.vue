<template>
  <mp-box>
    <mp-modal :isOpen="isOpen">
      <mp-modal-content>
        <mp-modal-header>Hapus 14 transaksi?</mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body>
          <mp-box v-if="start">
            <mp-text> Transaksi yang dihapus akan mengubah laporan penjualan dan tidak dapat dikembalikan. </mp-text>
          </mp-box>

          <mp-stack v-if="process" spacing="2">
            <mp-progress :value="deletedPercent" color="sky" />
            <mp-flex justify="space-between">
              <mp-text>Menghapus {{ deletedData }} dari 14 </mp-text>
              <mp-text> {{ `${deletedPercent}%` }} </mp-text>
            </mp-flex>
          </mp-stack>

          <mp-stack v-if="finish" spacing="2">
            <mp-flex align-items="center">
              <mp-flex flex-none="1" p="1">
                <mp-icon name="done" variant="duotone" mr="1" />
              </mp-flex>

              <mp-flex direction="column" width="full">
                <mp-text>9 transaksi berhasil dihapus</mp-text>
              </mp-flex>
            </mp-flex>
            <mp-flex>
              <mp-flex flex-none="1" p="1">
                <mp-icon name="error" variant="duotone" mr="1" />
              </mp-flex>
              <mp-flex direction="column" width="full">
                <mp-text font-size="md" line-height="md">5 transaksi gagal dihapus</mp-text>
                <mp-text color="gray.600" font-size="sm">Koneksi internet terputus atau proses dibatalkan.</mp-text>

                <mp-box bg="background" p="4" rounded="md" as="ul" mt="2" list-style-position="inside">
                  <mp-text as="li" color="gray.600"> {{ name }} #0001 </mp-text>
                  <mp-text as="li" color="gray.600"> {{ name }} #0002 </mp-text>
                  <mp-text as="li" color="gray.600"> {{ name }} #0003 </mp-text>
                  <mp-text as="li" color="gray.600"> {{ name }} #0004 </mp-text>
                </mp-box>
              </mp-flex>
            </mp-flex>
          </mp-stack>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button v-if="!finish" variant="ghost" mr="3" @click="$emit('handleClose')">Batalkan</mp-button>
          <mp-button v-if="!finish" variant-color="red" :is-loading="process" @click="handleSimulateDelete()">Hapus</mp-button>

          <mp-button v-if="finish" @click="[handleCloseModal(), $emit('handleClose')]">Oke, mengerti</mp-button>
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
  MpProgress,
  MpStack,
  MpIcon,
  MpFlex,
  MpBox,
  MpText,
} from "@mekari/pixel";
export default {
  name: "ModalDelete",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
    MpButton,
    MpProgress,
    MpStack,
    MpIcon,
    MpFlex,
    MpBox,
    MpText,
  },
  props: {
    isOpen: { type: [Boolean] },
    name: {
      type: [String],
      default: "Transaction",
    },
  },
  data() {
    return {
      start: true,
      process: false,
      deletedData: 0,
      deletedPercent: 0,
      finish: false,
    };
  },
  methods: {
    async handleSimulateDelete() {
      this.start = false;
      this.process = true;

      await this.deletingData();

      this.process = false;
      this.finish = true;
    },
    async deletingData() {
      const sleep = (m) => new Promise((r) => setTimeout(r, m));

      for (let i = 0; i < 14; i++) {
        this.deletedData = i + 1;
        this.deletedPercent = parseInt((this.deletedData / 14) * 100);
        console.log("data ke => ", i + 1);
        await sleep(300);
      }
    },
    handleCloseModal() {
      Object.assign(this.$data, {
        start: true,
        process: false,
        deletedData: 0,
        deletedPercent: 0,
        finish: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
