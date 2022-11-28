<template>
  <mp-modal size="full" :is-open="isOpen" :on-close="handleClose" scroll-behavior="inside">
    <mp-modal-content>
      <mp-modal-header>
        <mp-flex justify-content="space-between" align-items="center">
          <mp-flex>
            <mp-heading as="h1" font-size="2xl"> Mulai berlangganan </mp-heading>
          </mp-flex>
          <mp-flex gap="3" align-items="center">
            <mp-flex>
              <mp-icon name="table-view-column" margin-right="2" :variant="isPaketLanggananActive ? 'duotone' : 'outline'" />
              <mp-text :color="isPaketLanggananActive ? '' : 'gray.600'" :font-weight="isPaketLanggananActive ? 'semibold' : ''"> Paket langganan </mp-text>
            </mp-flex>
            <mp-icon name="arrows-right" variant="duotone" />
            <mp-flex>
              <mp-icon name="add-ons" margin-right="2" :variant="isKebutuhanTambahanActive ? 'duotone' : 'outline'" />
              <mp-text :color="isKebutuhanTambahanActive ? '' : 'gray.600'" :font-weight="isKebutuhanTambahanActive ? 'semibold' : ''">
                Kebutuhan tambahan
              </mp-text>
            </mp-flex>
            <mp-icon name="arrows-right" variant="duotone" />
            <mp-flex>
              <mp-icon name="cart" margin-right="2" :variant="isKonfirmasiActive ? 'duotone' : 'outline'" />
              <mp-text :color="isKonfirmasiActive ? '' : 'gray.600'" :font-weight="isKonfirmasiActive ? 'semibold' : ''"> Konfirmasi </mp-text>
            </mp-flex>
          </mp-flex>
          <mp-flex width="237px" />
        </mp-flex>
      </mp-modal-header>
      <mp-modal-close-button top="15px!important" />

      <mp-modal-body>
        <!-- Paket langganan -->
        <mp-box max-width="90%" mx="auto" v-if="stage === 1">
          <mp-flex align-items="center" justify="center" mt="8" mb="13">
            <mp-segmented-control
              :default-value="selectedMonth"
              :value="selectedMonth"
              @change="(e) => (selectedMonth = e.target.value)"
              name="segmented-control-group"
              :data="[
                { id: '3', label: '3 Bulan', value: 3 },
                { id: '6', label: '6 Bulan', value: 6 },
                { id: '9', label: '9 Bulan', value: 9 },
                { id: '12', label: '12 Bulan', value: 12 },
              ]"
              defaultValue="12"
            />

            <mp-box bg="green.700" rounded="lg" color="white" px="3" ml="2" position="relative">
              <mp-text>Hemat 10%</mp-text>

              <mp-box position="absolute" left="-17px" top="-4px" bottom="0px">
                <mp-icon name="caret-down" size="lg" color="green.700" transform="rotate(90deg)" />
              </mp-box>
            </mp-box>
          </mp-flex>

          <mp-table :is-hoverable="false" :style="{ tableLayout: 'fixed' }">
            <mp-table-head>
              <mp-table-row :style="{ whiteSpace: 'normal' }">
                <mp-table-cell
                  as="th"
                  scope="col"
                  widht="25%"
                  :style="{ borderBottom: '0px', borderRightWidth: '1px', borderColor: 'var(--colors-gray-50)' }"
                />
                <mp-table-cell
                  as="th"
                  scope="col"
                  width="25%"
                  :style="{
                    borderBottom: '0px',
                    borderRightWidth: '1px',
                    borderColor: 'var(--colors-gray-50)',
                    position: 'relative',
                  }"
                  id="table-cell-pro"
                >
                  <mp-box v-if="isOpen" position="absolute" top="-24px" left="0px" bg="ice.100" rounded-top="lg" px="4" ml="-1px" :width="tableCellWidth + 2">
                    <mp-text font-size="sm" font-weight="semibold" py="1">Paket anda saat ini </mp-text>
                  </mp-box>

                  <mp-box p="2">
                    <mp-heading>Pro</mp-heading>
                    <mp-text color="gray.600" line-height="md">Cocok untuk bisnis apa? Gak mesti dari company size, lebih ke industri</mp-text>

                    <mp-flex direction="column" gap="2" my="6">
                      <mp-flex>
                        <mp-heading>Rp449.000*</mp-heading>
                        <mp-text color="gray.600" ml="2">per bulan</mp-text>
                      </mp-flex>
                    </mp-flex>

                    <mp-button width="full" mt="132px" @click="stage = 2">Pilih paket</mp-button>
                  </mp-box>
                </mp-table-cell>
                <mp-table-cell as="th" scope="col" widht="25%" :style="{ borderBottom: '0px', borderRightWidth: '1px', borderColor: 'var(--colors-gray-50)' }">
                  <mp-box p="2">
                    <mp-heading>Enterprise</mp-heading>
                    <mp-text color="gray.600" line-height="md">Mendukung transaksi multinasional dan integrasi antar-aplikasi.</mp-text>

                    <mp-flex direction="column" gap="2" my="6">
                      <mp-flex>
                        <mp-heading>Rp799.000*</mp-heading>
                        <mp-text color="gray.600" ml="2">per bulan</mp-text>
                      </mp-flex>
                    </mp-flex>

                    <mp-button width="full" mt="132px" @click="stage = 2">Pilih paket</mp-button>
                  </mp-box>
                </mp-table-cell>
                <mp-table-cell as="th" scope="col" widht="25%" :style="{ borderBottom: '0px' }">
                  <mp-box p="2">
                    <mp-flex align-items="center">
                      <mp-heading>Enterprise+ </mp-heading>
                      <mp-badge variant="blue" ml="2">Terpopuler</mp-badge>
                    </mp-flex>
                    <mp-text color="gray.600" line-height="md">Solusi terlengkap untuk mendukung kemajuan bisnis tanpa batas.</mp-text>

                    <mp-flex direction="column" gap="2" my="6">
                      <mp-flex>
                        <mp-heading>Rp1.299.000*</mp-heading>
                        <mp-text color="gray.600" ml="2">per bulan</mp-text>
                      </mp-flex>
                    </mp-flex>

                    <mp-button width="full" mt="132px" @click="stage = 2">Pilih paket</mp-button>
                  </mp-box>
                </mp-table-cell>
              </mp-table-row>
            </mp-table-head>
            <mp-table-body>
              <template v-for="(value, index) in datas">
                <mp-table-row :key="`parent-${index}-${value.id}`">
                  <mp-table-cell as="td" scope="row" colspan="4" bg="gray.50" :style="{ borderBottom: '0px' }">
                    <mp-flex align-items="center">
                      <mp-text color="gray.600"> {{ value.category }} </mp-text>
                      <mp-badge v-if="value.label" ml="2"> {{ value.label }} </mp-badge>
                    </mp-flex>
                  </mp-table-cell>
                </mp-table-row>
                <mp-table-row v-for="(data, index2) in value.datas" :key="`child-${index2}-${data.name}`">
                  <mp-table-cell as="td" scope="row" border-color="gray.50" border-right="1px" border-right-color="gray.50">
                    <mp-flex align-items="center">
                      <mp-text font-weight="semibold"> {{ data.name }} </mp-text>
                      <mp-tooltip :label="data.tooltip">
                        <mp-icon name="info" size="sm" ml="2" />
                      </mp-tooltip>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" border-color="gray.50" border-right="1px" border-right-color="gray.50">
                    <mp-flex justify="center" align-items="center">
                      <mp-icon v-if="isBoolean(data.pro)" :name="data.pro ? 'done' : 'error'" variant="duotone" />
                      <mp-text v-else font-weight="semibold"> {{ data.pro }} </mp-text>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" border-color="gray.50" border-right="1px" border-right-color="gray.50">
                    <mp-flex justify="center" align-items="center">
                      <mp-icon v-if="isBoolean(data.enterprise)" :name="data.enterprise ? 'done' : 'error'" variant="duotone" />
                      <mp-text v-else font-weight="semibold"> {{ data.enterprise }} </mp-text>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" border-color="gray.50">
                    <mp-flex justify="center" align-items="center">
                      <mp-icon v-if="isBoolean(data.enterprisePlus)" :name="data.enterprisePlus ? 'done' : 'error'" variant="duotone" />
                      <mp-text v-else font-weight="semibold"> {{ data.enterprisePlus }} </mp-text>
                    </mp-flex>
                  </mp-table-cell>
                </mp-table-row>
              </template>
            </mp-table-body>
          </mp-table>

          <mp-flex justify="flex-end" mt="2">
            <mp-text color="gray.600">*Harga sudah termasuk PPN 11%</mp-text>
          </mp-flex>
        </mp-box>

        <!-- Kebutuhan tambahan -->
        <mp-box max-width="60%" mx="auto" v-if="stage === 2">
          <mp-stack spacing="6">
            <mp-box>
              <img src="../assets/logo.svg" alt="" style="height: 40px" />
            </mp-box>

            <!-- Paket -->
            <mp-box bg="background" rounded="sm" pl="5" py="5" pr="16">
              <mp-heading>Enterprise</mp-heading>

              <mp-grid templateColumns="repeat(9, 1fr)" gap="8" mt="4">
                <mp-grid-item col-span="2">
                  <mp-text font-weight="semibold">Durasi</mp-text>
                  <mp-autocomplete
                    v-model="selectedMonth"
                    :data="[
                      { id: '3', label: '3 Bulan', value: 3 },
                      { id: '6', label: '6 Bulan', value: 6 },
                      { id: '9', label: '9 Bulan', value: 9 },
                      { id: '12', label: '12 Bulan', value: 12 },
                    ]"
                    label-prop="label"
                    :content-style="{ width: 'full' }"
                  />
                  <mp-text is-link text-decoration="underline" mt="3" @click.native="stage = 1">Ganti paket</mp-text>
                </mp-grid-item>
                <mp-grid-item col-span="3">
                  <mp-text font-weight="semibold" mb="1.5">Kuota dari paket</mp-text>
                  <mp-flex align-items="center">
                    <mp-text>Faktur, gudang, & pengguna</mp-text>

                    <mp-tooltip id="faktur-gudang-pengguna" position="bottom-end">
                      <mp-icon name="info" size="sm" ml="1" />

                      <template #label>
                        <mp-text font-size="sm"> 10.000 faktur penjualan per bulan </mp-text>
                        <mp-divider />
                        <mp-text font-size="sm"> 2 gudang </mp-text>
                        <mp-divider />
                        <mp-text font-size="sm"> 5 pengguna </mp-text>
                      </template>
                    </mp-tooltip>
                  </mp-flex>
                </mp-grid-item>
                <mp-grid-item col-span="2">
                  <mp-text font-weight="semibold" text-align="right" mb="1.5">Harga per bulan</mp-text>
                  <mp-text text-align="right">Rp799.000</mp-text>
                </mp-grid-item>
                <mp-grid-item col-span="2">
                  <mp-text font-weight="semibold" text-align="right" mb="1.5">Total harga</mp-text>
                  <mp-text text-align="right">Rp4.794.000</mp-text>
                </mp-grid-item>
              </mp-grid>
            </mp-box>

            <!-- Kuota tambahan -->
            <mp-box>
              <mp-text font-size="lg" font-weight="semibold">Kuota tambahan</mp-text>
              <mp-text color="gray.600" mb="1">Tambahkan kuota faktur, gudang, dan pengguna sesuai kebutuhan bisnis Anda.</mp-text>

              <TableKuotaTambahan />
            </mp-box>

            <!-- Fitur tambahan -->
            <mp-box>
              <mp-text font-size="lg" font-weight="semibold">Fitur tambahan</mp-text>
              <mp-text color="gray.600" mb="1">Lengkapi proses bisnis Anda dengan fitur tingkat lanjut.</mp-text>

              <TableFiturTambahan />
            </mp-box>
          </mp-stack>
        </mp-box>

        <!-- Konfirmasi -->
        <mp-box max-width="60%" mx="auto" v-if="stage === 3">
          <TableKonfirmasi />
        </mp-box>
      </mp-modal-body>

      <mp-modal-footer v-if="isShowFooter" border-top-width="1px" py="5" justify-content="flex-start">
        <mp-flex width="full" justify="space-between" max-width="60%" mx="auto" v-if="stage === 2">
          <mp-button variant="ghost" @click="handleBack">Kembali</mp-button>

          <mp-flex>
            <mp-box text-align="right" mr="10">
              <mp-text font-size="lg" font-weight="semibold">Subtotal Rp4.794.000</mp-text>
              <mp-text font-size="sm" color="gray.400">Termasuk PPN 11%</mp-text>
            </mp-box>
            <mp-button @click="handleNext">Lanjutkan</mp-button>
          </mp-flex>
        </mp-flex>

        <mp-flex width="full" justify="flex-end" max-width="60%" mx="auto" v-if="stage === 3">
          <mp-button variant="ghost" @click="handleBack">Kembali</mp-button>
          <mp-button @click="handlePayment">Bayar Langganan</mp-button>
        </mp-flex>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import { nextTick } from "vue";

import {
  MpFlex,
  MpIcon,
  MpText,
  MpHeading,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalBody,
  MpModalHeader,
  MpModalFooter,
  MpModalCloseButton,
  MpSegmentedControl,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpBox,
  MpTooltip,
  MpButton,
  MpBadge,
  MpStack,
  MpGrid,
  MpGridItem,
  MpAutocomplete,
  MpDivider,
} from "@mekari/pixel";

import TableKuotaTambahan from "./TableKuotaTambahan.vue";
import TableFiturTambahan from "./TableFiturTambahan.vue";
import TableKonfirmasi from "./TableKonfirmasi.vue";

export default {
  name: "ModalMulaiLangganan",
  components: {
    MpFlex,
    MpIcon,
    MpText,
    MpHeading,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalBody,
    MpModalHeader,
    MpModalFooter,
    MpModalCloseButton,
    MpSegmentedControl,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpBox,
    MpTooltip,
    MpButton,
    MpBadge,
    MpStack,
    MpGrid,
    MpGridItem,
    MpAutocomplete,
    MpDivider,

    TableKuotaTambahan,
    TableFiturTambahan,
    TableKonfirmasi,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  data() {
    return {
      stage: 1,
      selectedMonth: 3,
      datas: [
        {
          id: 1,
          category: "Fitur",
          datas: [
            {
              name: "Laporan keuangan lengkap",
              tooltip: "Buat keputusan bisnis tepat dengan laporan keuangan dari arus kas hingga laba-rugi.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Histori penjualan & pembelian",
              tooltip: "Catat semua transaksi secara online dan real-time untuk hindari rekonsiliasi manual.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Manajemen inventori & aset",
              tooltip: "Kelola semua produk dalam satu dasbor yang terupdate otomatis saat terjadi transaksi.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Monitor pengeluaran",
              tooltip: "Pantau pengeluaran dalam 30 hari terakhir termasuk yang belum dibayar di satu laporan real-time.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Monitor saldo kas & bank",
              tooltip: "Integrasikan data mutasi bank yang dilengkapi dengan rekonsiliasi otomatis untuk kesesuaian data kas.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Template & reminder invoice",
              tooltip: "Buat invoice hingga atur waktu penagihan secara otomatis dari satu dasbor.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Approval & otorisasi",
              tooltip: "Pastikan transaksi dan aktivitas gudang melalui persetujuan manajer untuk hindari kesalahan.",
              pro: false,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Budgeting",
              tooltip: "Buat rencana anggaran lebih baik dengan pantau pemasukan & pengeluaran dari satu dasbor.",
              pro: false,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Multi-currency",
              tooltip: "Lakukan transaksi dengan beragam mata uang asing.",
              pro: false,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Join invoice",
              tooltip: "Gabungkan semua invoice yang belum dibayar untuk memudahkan penagihan ke pelanggan Anda.",
              pro: false,
              enterprise: false,
              enterprisePlus: true,
            },
            {
              name: "Pro forma invoice",
              tooltip: "Buat faktur sementara untuk mempermudah proses transaksi dengan pelanggan Anda.",
              pro: false,
              enterprise: false,
              enterprisePlus: true,
            },
            {
              name: "Profitability report",
              tooltip: "Ketahui peforma penjualan setiap produk untuk pengambilan keputusan bisnis tepat.",
              pro: false,
              enterprise: false,
              enterprisePlus: true,
            },
            {
              name: "Multi-product pricing",
              tooltip: "Buat harga khusus sesuai kebutuhan yang otomatis diterapkan ketika terjadi transaksi.",
              pro: false,
              enterprise: false,
              enterprisePlus: true,
            },
          ],
        },
        {
          id: 2,
          category: "Integrasi",
          datas: [
            {
              name: "Mekari Pay",
              tooltip: "Terima dan kirim pembayaran transaksi bisnis dari berbagai platform.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Mekari Klikpajak",
              tooltip: "Lapor dan bayar pajak secara online dengan aplikasi mitra resmi DJP.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Mekari Capital",
              tooltip: "Ajukan pembiayaan instan untuk kebutuhan bisnis.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Aplikasi POS & e-Commerce",
              tooltip: "Hubungkan ke Moka POS, Oktopus POS, iSeller, Pawoon, Dealpos, Olsera, Hellobill, dll., serta mengimpor transaksi dari web e-Commerce.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
          ],
        },
        {
          id: 2,
          category: "Kuota dari paket",
          label: "Anda bisa menambah kuota setelah pilih paket",
          datas: [
            {
              name: "Kuota pengguna",
              tooltip: "Tingkatkan produktivitas tim dengan memberikan akses ke masing-masing karyawan Anda.",
              pro: 3,
              enterprise: 5,
              enterprisePlus: 7,
            },
            {
              name: "Multi-gudang & lokasi produk",
              tooltip: "Kelola jumlah produk dan transfer dari berbagai gudang langsung dari satu dasbor online.",
              pro: 2,
              enterprise: 5,
              enterprisePlus: 10,
            },
            {
              name: "Faktur penjualan per bulan",
              tooltip: "Lorem ipsum dolor sir amet.",
              pro: "1.500",
              enterprise: "5.000",
              enterprisePlus: "10.000",
            },
          ],
        },
        {
          id: 2,
          category: "Customer support",
          datas: [
            {
              name: "Gratis training & implementasi",
              tooltip: "Ikuti sesi persiapan dan pengenalan untuk mengoperasikan Jurnal.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Layanan pelanggan via chat",
              tooltip: "Konsultasikan kendala atau kebutuhan Anda seputar Jurnal.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
          ],
        },
      ],
      tableCellWidth: 0,
    };
  },
  watch: {
    isOpen(newValue) {
      if (newValue) {
        this.getClientWidth("table-cell-pro");
      }
    },
  },
  computed: {
    isPaketLanggananActive() {
      return this.stage <= 3;
    },
    isKebutuhanTambahanActive() {
      return this.stage > 1 && this.stage <= 3;
    },
    isKonfirmasiActive() {
      return this.stage === 3;
    },
    isShowFooter() {
      return this.stage === 2 || this.stage === 3;
    },
  },
  methods: {
    isBoolean(val) {
      return typeof val === "boolean";
    },
    handleClose: function () {
      this.$emit("handleClose");
    },
    handleNext() {
      if (this.stage === 2) this.stage = 3;
    },
    handleBack() {
      if (this.stage === 2) this.stage = 1;
      if (this.stage === 3) this.stage = 2;
    },
    handlePayment() {
      alert("Bayar Langganan clicked");
    },

    // Utils
    async getClientWidth(id) {
      const self = this;
      nextTick().then(function () {
        const element = document.getElementById(id);
        const clientWidth = element.clientWidth;

        self.tableCellWidth = clientWidth;
      });
    },
  },
};
</script>
