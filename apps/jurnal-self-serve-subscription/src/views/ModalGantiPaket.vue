<template>
  <mp-modal size="full" :is-open="isOpen" :on-close="handleClose" scroll-behavior="inside">
    <mp-modal-content>
      <mp-modal-header>
        <mp-flex justify-content="space-between" align-items="center">
          <mp-flex>
            <mp-heading as="h1" font-size="2xl"> Pilihan paket </mp-heading>
          </mp-flex>
          <mp-flex width="237px" />
        </mp-flex>
      </mp-modal-header>
      <mp-modal-close-button top="15px!important" />

      <mp-modal-body>
        <mp-box mt="8" max-width="90%" mx="auto">
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
                  :style="{ borderBottom: '0px', borderRightWidth: '1px', borderColor: 'var(--colors-gray-50)', position: 'relative' }"
                  id="table-cell-pro"
                >
                  <mp-box v-if="isOpen" position="absolute" top="-24px" left="0px" bg="ice.100" :width="tableCellWidth + 2" rounded-top="lg" px="4" ml="-1px">
                    <mp-text font-size="sm" font-weight="semibold" py="1">Paket anda saat ini</mp-text>
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

                    <!-- <mp-button width="full" mt="132px" is-disabled>Paket anda saat ini</mp-button> -->
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

                    <mp-button width="full" mt="132px" variant="outline" @click="handleChange('Enterprise')">Coba Enterprise</mp-button>
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

                    <mp-button width="full" mt="132px" variant="outline" @click="handleChange('Enterprise+')">Coba Enterprise+</mp-button>
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
      </mp-modal-body>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
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
  MpModalCloseButton,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpBox,
  MpTooltip,
  MpButton,
  MpBadge,
} from "@mekari/pixel";

export default {
  name: "ModalGantiPaket",
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
    MpModalCloseButton,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpBox,
    MpTooltip,
    MpButton,
    MpBadge,
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
              tooltip: "Pantau pengeluaran dalam 30 hari terakhir termasuk yang belum dibayar di satu laporan real-time.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Template & reminder invoice",
              tooltip: "Pantau pengeluaran dalam 30 hari terakhir termasuk yang belum dibayar di satu laporan real-time.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Approval & otorisasi",
              tooltip: "Pantau pengeluaran dalam 30 hari terakhir termasuk yang belum dibayar di satu laporan real-time.",
              pro: false,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Budgeting",
              tooltip: "Pantau pengeluaran dalam 30 hari terakhir termasuk yang belum dibayar di satu laporan real-time.",
              pro: false,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Multi-currency",
              tooltip: "Pantau pengeluaran dalam 30 hari terakhir termasuk yang belum dibayar di satu laporan real-time.",
              pro: false,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Join invoice",
              tooltip: "Pantau pengeluaran dalam 30 hari terakhir termasuk yang belum dibayar di satu laporan real-time.",
              pro: false,
              enterprise: false,
              enterprisePlus: true,
            },
            {
              name: "Pro forma invoice",
              tooltip: "Pantau pengeluaran dalam 30 hari terakhir termasuk yang belum dibayar di satu laporan real-time.",
              pro: false,
              enterprise: false,
              enterprisePlus: true,
            },
            {
              name: "Profitability report",
              tooltip: "Pantau pengeluaran dalam 30 hari terakhir termasuk yang belum dibayar di satu laporan real-time.",
              pro: false,
              enterprise: false,
              enterprisePlus: true,
            },
            {
              name: "Multi-product pricing",
              tooltip: "Pantau pengeluaran dalam 30 hari terakhir termasuk yang belum dibayar di satu laporan real-time.",
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
              tooltip: "Lorem ipsum dolor sir amet.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Mekari Klikpajak",
              tooltip: "Lorem ipsum dolor sir amet.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Mekari Capital",
              tooltip: "Lorem ipsum dolor sir amet.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Aplikasi POS & e-Commerce",
              tooltip: "Lorem ipsum dolor sir amet.",
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
              tooltip: "Lorem ipsum dolor sir amet.",
              pro: 3,
              enterprise: 5,
              enterprisePlus: 7,
            },
            {
              name: "Multi-gudang & lokasi produk",
              tooltip: "Lorem ipsum dolor sir amet.",
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
              tooltip: "Lorem ipsum dolor sir amet.",
              pro: true,
              enterprise: true,
              enterprisePlus: true,
            },
            {
              name: "Layanan pelanggan via chat",
              tooltip: "Lorem ipsum dolor sir amet.",
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
  computed: {
    isShowFooter() {
      return this.stage === 2 || this.stage === 3;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.tableCellWidth = 366;
      // this.getClientWidth("table-cell-pro");
    });
  },
  methods: {
    isBoolean(val) {
      return typeof val === "boolean";
    },
    handleClose() {
      this.$emit("handleClose");
    },
    handleChange(value) {
      this.$emit("handleChange", value);
      this.handleClose();
    },

    // Utils
    getClientWidth(id) {
      const element = document.getElementById(id);
      const clientWidth = element.clientWidth;

      return clientWidth;
    },
  },
};
</script>
