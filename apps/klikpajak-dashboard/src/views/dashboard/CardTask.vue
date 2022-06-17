<template>
  <mp-box background="white" padding="6" border-radius="md" border-width="1px">
    <mp-flex mb="4" justifyContent="space-between" alignItems="center">
      <mp-box>
        <mp-text fontWeight="semibold" lineHeight="1.25rem">Menunggu diselesaikan </mp-text>
        <mp-text fontSize="sm" color="gray.600" lineHeight="1rem">Masa pajak Januari 2022</mp-text>
      </mp-box>

      <mp-tooltip label="⚠️ Datepicker component is coming soon." id="datepicker-comingsoon">
        <mp-pseudo-box
          border="1px"
          display="flex"
          gap="3.2"
          py="2"
          px="3"
          border-color="gray.100"
          rounded="6px"
          cursor="pointer"
          :_hover="{ bg: 'blackAlpha.50' }"
        >
          <mp-text>Jan 2022</mp-text>
          <mp-icon name="calendar" />
        </mp-pseudo-box>
      </mp-tooltip>
    </mp-flex>

    <mp-box>
      <mp-tabs id="menunggu-diselesaikan" :defaultIndex="defaultIndex" @change="handleSelectedTab">
        <mp-tab-list>
          <mp-tab>
            E-Billing
            <mp-badge ml="2" variant="subtle" :variant-color="currentTab === 0 ? 'blue' : 'gray'"> 9+ </mp-badge>
          </mp-tab>
          <mp-tab>
            Faktur keluaran
            <mp-badge ml="2" variant="subtle" :variant-color="currentTab === 1 ? 'blue' : 'gray'"> 9+ </mp-badge>
          </mp-tab>
          <mp-tab>
            SPT E-Faktur
            <mp-badge ml="2" variant="subtle" :variant-color="currentTab === 2 ? 'blue' : 'gray'"> 1 </mp-badge>
          </mp-tab>
          <mp-tab>
            SPT E-Bupot
            <mp-badge ml="2" variant="subtle" :variant-color="currentTab === 3 ? 'blue' : 'gray'"> 1 </mp-badge>
          </mp-tab>
        </mp-tab-list>

        <mp-tab-panels>
          <!-- E-Billing -->
          <mp-tab-panel>
            <mp-box v-if="currentTab === 0 && status === 'active'" overflow-x="auto">
              <mp-table>
                <mp-table-head>
                  <mp-table-row v-if="(isIndeterminate && useCheckbox) || (isCheckedAll && useCheckbox)">
                    <mp-table-cell as="th" scope="col">
                      <mp-checkbox :isIndeterminate="isIndeterminate" @change="handleCheckAll" :isChecked="isCheckedAll" id="checkAll" />
                    </mp-table-cell>
                    <mp-table-cell as="th" scope="col" colspan="5">
                      <mp-flex gap="6" alignItems="center">
                        <mp-text fontWeight="semibold"> 2 ID Billing dipilih </mp-text>
                        <mp-button> Bayar sekaligus </mp-button>
                        <mp-button @click="handleUncheckAll()" variant="ghost"> Batalkan pilihan </mp-button>
                      </mp-flex>
                    </mp-table-cell>
                  </mp-table-row>
                  <mp-table-row v-else>
                    <mp-table-cell v-if="useCheckbox" as="th" scope="col">
                      <mp-checkbox :is-checked="isCheckedAll" @change="handleCheckAll" id="checkAll_" />
                    </mp-table-cell>
                    <mp-table-cell as="th" scope="col">ID Billing</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Jenis pajak</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Kedaluwarsa</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Jumlah pajak</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Tindakan</mp-table-cell>
                  </mp-table-row>
                </mp-table-head>
                <mp-table-body>
                  <mp-table-row v-for="(value, index) in source" :key="value.id">
                    <mp-table-cell v-if="useCheckbox" as="td" scope="row">
                      <mp-checkbox :id="`checkbox-${value.id}`" v-model="source[index].isChecked" :is-checked="value.isChecked" />
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      <mp-text isLink>
                        {{ value.idBilling }}
                      </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      {{ value.jenisPajak }}
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      {{ value.kedaluwarsa }}
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      {{ value.jumlahPajak }}
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      <mp-popover v-if="value.isDropdown" :id="`e-billing-popover-${value.id}`" ref="eBillingPopover">
                        <mp-popover-trigger>
                          <mp-button variant="outline" right-icon="caret-down" w="100%" size="sm">
                            {{ value.action }}
                          </mp-button>
                        </mp-popover-trigger>
                        <mp-popover-content max-width="64" bg="white" rounded="md" shadow="lg" outline="1px solid" outline-color="gray.400">
                          <mp-popover-list display="flex" flex-direction="column">
                            <mp-popover-list-item @click="closePopover(index)">Pilih metode pembayaran</mp-popover-list-item>
                            <mp-popover-list-item @click="closePopover(index)">Konfirmasi NTPN</mp-popover-list-item>
                          </mp-popover-list>
                        </mp-popover-content>
                      </mp-popover>

                      <mp-button v-else variant="outline" w="100%" size="sm">
                        {{ value.action }}
                      </mp-button>
                    </mp-table-cell>
                  </mp-table-row>
                </mp-table-body>
              </mp-table>

              <mp-box padding-x="2" padding-y="4">
                <mp-flex justify-content="space-between">
                  <mp-flex align-items="center">
                    <mp-text color="gray.600" line-height="md" padding-y="1"> Menampilkan 5 dari 10 </mp-text>
                  </mp-flex>
                  <mp-flex align-items="center">
                    <mp-tooltip label="Jump to page" position="bottom">
                      <mp-button
                        size="sm"
                        variant="unstyled"
                        height="7"
                        display="inline-flex"
                        padding-left="3"
                        padding-right="2"
                        padding-x="2"
                        :_hover="{ backgroundColor: 'ice.50' }"
                      >
                        <mp-text font-weight="600">1</mp-text>
                        <mp-icon name="caret-down" size="sm" />
                      </mp-button>
                    </mp-tooltip>
                    <mp-text color="gray.600" line-height="md" padding-left="2" padding-right="4" padding-y="1"> dari 2 halaman </mp-text>
                    <mp-tooltip label="Prev page" position="bottom">
                      <mp-button-icon name="chevrons-left" size="sm" is-round padding-right="1" />
                    </mp-tooltip>
                    <mp-tooltip label="Next page" position="bottom">
                      <mp-button-icon name="chevrons-right" size="sm" is-round padding-left="1" />
                    </mp-tooltip>
                  </mp-flex>
                </mp-flex>
              </mp-box>
            </mp-box>

            <mp-flex v-if="status === 'blank'" flexDirection="column" alignItems="center" justifyContent="center" gap="2" py="20">
              <SuccessIllustration />
              <mp-text font-weight="semibold"> Tidak ada transaksi yang perlu diselesaikan </mp-text>
            </mp-flex>
          </mp-tab-panel>

          <!-- Faktur keluaran -->
          <mp-tab-panel>
            <mp-box v-if="currentTab === 1 && status === 'active'">
              <mp-table>
                <mp-table-head>
                  <mp-table-row v-if="(isIndeterminate && useCheckbox) || (isCheckedAll && useCheckbox)">
                    <mp-table-cell as="th" scope="col">
                      <mp-checkbox :isIndeterminate="isIndeterminate" @change="handleCheckAll" :isChecked="isCheckedAll" id="checkAll" />
                    </mp-table-cell>
                    <mp-table-cell as="th" scope="col" colspan="5">
                      <mp-flex gap="6" alignItems="center">
                        <mp-text fontWeight="semibold"> 2 ID Billing dipilih </mp-text>
                        <mp-button> Upload sekaligus </mp-button>
                        <mp-button @click="handleUncheckAll()" variant="ghost"> Batalkan pilihan </mp-button>
                      </mp-flex>
                    </mp-table-cell>
                  </mp-table-row>
                  <mp-table-row v-else>
                    <mp-table-cell v-if="useCheckbox" as="th" scope="col">
                      <mp-checkbox :is-checked="isCheckedAll" @change="handleCheckAll" id="checkAll_" />
                    </mp-table-cell>
                    <mp-table-cell as="th" scope="col">Nomor faktur</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Pelanggan</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Status approval</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Jumlah PPN</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Tindakan</mp-table-cell>
                  </mp-table-row>
                </mp-table-head>
                <mp-table-body>
                  <mp-table-row v-for="(value, index) in source" :key="value.id">
                    <mp-table-cell v-if="useCheckbox" as="td" scope="row">
                      <mp-checkbox :id="`checkbox-${value.id}`" v-model="source[index].isChecked" :is-checked="value.isChecked" />
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      <mp-text isLink>
                        {{ value.nomorFaktur }}
                      </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      {{ value.pelangggan }}
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      <mp-badge variant="subtle" variantColor="orange" size="md" default="Badge Label">
                        {{ value.statusApproval }}
                      </mp-badge>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      {{ value.jumlahPpn }}
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      <mp-button variant="outline" w="100%" size="sm">
                        {{ value.tindakan }}
                      </mp-button>
                    </mp-table-cell>
                  </mp-table-row>
                </mp-table-body>
              </mp-table>

              <mp-box padding-x="2" padding-y="4">
                <mp-flex justify-content="space-between">
                  <mp-flex align-items="center">
                    <mp-text color="gray.600" line-height="md" padding-y="1"> Menampilkan 5 dari 10 </mp-text>
                  </mp-flex>
                  <mp-flex align-items="center">
                    <mp-tooltip label="Jump to page" position="bottom">
                      <mp-button
                        size="sm"
                        variant="unstyled"
                        height="7"
                        display="inline-flex"
                        padding-left="3"
                        padding-right="2"
                        padding-x="2"
                        :_hover="{ backgroundColor: 'ice.50' }"
                      >
                        <mp-text font-weight="600">1</mp-text>
                        <mp-icon name="caret-down" size="sm" />
                      </mp-button>
                    </mp-tooltip>
                    <mp-text color="gray.600" line-height="md" padding-left="2" padding-right="4" padding-y="1"> dari 2 halaman </mp-text>
                    <mp-tooltip label="Prev page" position="bottom">
                      <mp-button-icon name="chevrons-left" size="sm" is-round padding-right="1" />
                    </mp-tooltip>
                    <mp-tooltip label="Next page" position="bottom">
                      <mp-button-icon name="chevrons-right" size="sm" is-round padding-left="1" />
                    </mp-tooltip>
                  </mp-flex>
                </mp-flex>
              </mp-box>
            </mp-box>

            <mp-flex v-if="status === 'blank'" flexDirection="column" alignItems="center" justifyContent="center" gap="2" py="20">
              <SuccessIllustration />
              <mp-text font-weight="semibold"> Tidak ada transaksi yang perlu diselesaikan </mp-text>
            </mp-flex>
          </mp-tab-panel>

          <!-- SPT E-Faktur -->
          <mp-tab-panel>
            <mp-box v-if="currentTab === 2 && status === 'active'">
              <mp-table>
                <mp-table-head>
                  <mp-table-row>
                    <mp-table-cell v-if="useCheckbox" as="th" scope="col">
                      <mp-checkbox :is-checked="isCheckedAll" @change="handleCheckAll" id="checkAll_" />
                    </mp-table-cell>
                    <mp-table-cell as="th" scope="col">Masa Pajak</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Pembetulan</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Status</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Tindakan</mp-table-cell>
                  </mp-table-row>
                </mp-table-head>
                <mp-table-body>
                  <mp-table-row v-for="(value, index) in source" :key="value.id">
                    <mp-table-cell v-if="useCheckbox" as="td" scope="row">
                      <mp-checkbox :id="`checkbox-${value.id}`" v-model="source[index].isChecked" :is-checked="value.isChecked" />
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      <mp-text isLink>
                        {{ value.masaPajak }}
                      </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      {{ value.pembetulan }}
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      {{ value.status }}
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      <mp-button variant="outline" size="sm">
                        {{ value.tindakan }}
                      </mp-button>
                    </mp-table-cell>
                  </mp-table-row>
                </mp-table-body>
              </mp-table>

              <mp-box padding-x="2" padding-y="4">
                <mp-flex justify-content="space-between">
                  <mp-flex align-items="center">
                    <mp-text color="gray.600" line-height="md" padding-y="1"> Menampilkan 5 dari 10 </mp-text>
                  </mp-flex>
                  <mp-flex align-items="center">
                    <mp-tooltip label="Jump to page" position="bottom">
                      <mp-button
                        size="sm"
                        variant="unstyled"
                        height="7"
                        display="inline-flex"
                        padding-left="3"
                        padding-right="2"
                        padding-x="2"
                        :_hover="{ backgroundColor: 'ice.50' }"
                      >
                        <mp-text font-weight="600">1</mp-text>
                        <mp-icon name="caret-down" size="sm" />
                      </mp-button>
                    </mp-tooltip>
                    <mp-text color="gray.600" line-height="md" padding-left="2" padding-right="4" padding-y="1"> dari 2 halaman </mp-text>
                    <mp-tooltip label="Prev page" position="bottom">
                      <mp-button-icon name="chevrons-left" size="sm" is-round padding-right="1" />
                    </mp-tooltip>
                    <mp-tooltip label="Next page" position="bottom">
                      <mp-button-icon name="chevrons-right" size="sm" is-round padding-left="1" />
                    </mp-tooltip>
                  </mp-flex>
                </mp-flex>
              </mp-box>
            </mp-box>

            <mp-flex v-if="status === 'blank'" flexDirection="column" alignItems="center" justifyContent="center" gap="2" py="20">
              <SuccessIllustration />
              <mp-text font-weight="semibold"> Tidak ada transaksi yang perlu diselesaikan </mp-text>
            </mp-flex>
          </mp-tab-panel>

          <!-- SPT E-Bupot -->
          <mp-tab-panel>
            <mp-box v-if="currentTab === 3 && status === 'active'">
              <mp-table>
                <mp-table-head>
                  <mp-table-row>
                    <mp-table-cell v-if="useCheckbox" as="th" scope="col">
                      <mp-checkbox :is-checked="isCheckedAll" @change="handleCheckAll" id="checkAll_" />
                    </mp-table-cell>
                    <mp-table-cell as="th" scope="col">Masa Pajak</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Pembetulan</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Jumlah PPh Pasal 23/26 kurang disetor</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Status</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Tindakan</mp-table-cell>
                  </mp-table-row>
                </mp-table-head>
                <mp-table-body>
                  <mp-table-row v-for="(value, index) in source" :key="value.id">
                    <mp-table-cell v-if="useCheckbox" as="td" scope="row">
                      <mp-checkbox :id="`checkbox-${value.id}`" v-model="source[index].isChecked" :is-checked="value.isChecked" />
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      <mp-text isLink>
                        {{ value.masaPajak }}
                      </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      {{ value.pembetulan }}
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      {{ value.jumlahPph }}
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      {{ value.status }}
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row">
                      <mp-button variant="outline" size="sm">
                        {{ value.tindakan }}
                      </mp-button>
                    </mp-table-cell>
                  </mp-table-row>
                </mp-table-body>
              </mp-table>

              <mp-box padding-x="2" padding-y="4">
                <mp-flex justify-content="space-between">
                  <mp-flex align-items="center">
                    <mp-text color="gray.600" line-height="md" padding-y="1"> Menampilkan 5 dari 10 </mp-text>
                  </mp-flex>
                  <mp-flex align-items="center">
                    <mp-tooltip label="Jump to page" position="bottom">
                      <mp-button
                        size="sm"
                        variant="unstyled"
                        height="7"
                        display="inline-flex"
                        padding-left="3"
                        padding-right="2"
                        padding-x="2"
                        :_hover="{ backgroundColor: 'ice.50' }"
                      >
                        <mp-text font-weight="600">1</mp-text>
                        <mp-icon name="caret-down" size="sm" />
                      </mp-button>
                    </mp-tooltip>
                    <mp-text color="gray.600" line-height="md" padding-left="2" padding-right="4" padding-y="1"> dari 2 halaman </mp-text>
                    <mp-tooltip label="Prev page" position="bottom">
                      <mp-button-icon name="chevrons-left" size="sm" is-round padding-right="1" />
                    </mp-tooltip>
                    <mp-tooltip label="Next page" position="bottom">
                      <mp-button-icon name="chevrons-right" size="sm" is-round padding-left="1" />
                    </mp-tooltip>
                  </mp-flex>
                </mp-flex>
              </mp-box>
            </mp-box>

            <mp-flex v-if="status === 'blank'" flexDirection="column" alignItems="center" justifyContent="center" gap="2" py="20">
              <SuccessIllustration />
              <mp-text font-weight="semibold"> Tidak ada transaksi yang perlu diselesaikan </mp-text>
            </mp-flex>
          </mp-tab-panel>
        </mp-tab-panels>
      </mp-tabs>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpTabs,
  MpTabList,
  MpTab,
  MpTabPanels,
  MpTabPanel,
  MpBadge,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpCheckbox,
  MpButton,
  MpButtonIcon,
  MpTooltip,
  MpPseudoBox,
  MpIcon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import SuccessIllustration from "@/components/SuccessIllustration.vue";

export default {
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpTabs,
    MpTabList,
    MpTab,
    MpTabPanels,
    MpTabPanel,
    MpBadge,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpCheckbox,
    MpButton,
    MpButtonIcon,
    MpTooltip,
    MpPseudoBox,
    MpIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    SuccessIllustration,
  },
  props: {
    status: {
      type: [String],
      default: "active", // "active", "blank"
    },
  },
  data() {
    return {
      defaultIndex: 0,
      currentTab: 0,
      useCheckbox: false,
      source: [],

      eBilling: {
        options: {
          useCheckbox: true,
        },
        datas: [
          {
            id: 1,
            isChecked: false,
            idBilling: 123891723918273,
            jenisPajak: "PPN Dalam Negeri",
            kedaluwarsa: "07/02/2022",
            jumlahPajak: "Rp200.000,00",
            action: "Bayar Pajak",
            isDropdown: true,
          },
          {
            id: 2,
            isChecked: false,
            idBilling: 810937581089285,
            jenisPajak: "PPh pasal 23",
            kedaluwarsa: "10/02/2022",
            jumlahPajak: "Rp300.000,00",
            action: "Bayar Pajak",
            isDropdown: true,
          },
          {
            id: 3,
            isChecked: false,
            idBilling: 712985763795828,
            jenisPajak: "PPh pasal 4(2)",
            kedaluwarsa: "13/02/2022",
            jumlahPajak: "Rp200.000,00",
            action: "Bayar Pajak",
            isDropdown: true,
          },
          {
            id: 4,
            isChecked: false,
            idBilling: 456819309484882,
            jenisPajak: "PPN Dalam Negeri",
            kedaluwarsa: "15/02/2022",
            jumlahPajak: "Rp400.000,00",
            action: "Lanjut bayar",
            isDropdown: false,
          },
          {
            id: 5,
            isChecked: false,
            idBilling: 234198539268483,
            jenisPajak: "PPh pasal 26",
            kedaluwarsa: "16/02/2022",
            jumlahPajak: "Rp500.000,00",
            action: "Lanjut bayar",
            isDropdown: false,
          },
        ],
      },
      fakturKeluaran: {
        options: {
          useCheckbox: true,
        },
        datas: [
          {
            id: 1,
            isChecked: false,
            nomorFaktur: "900.22.10030042",
            pelangggan: "PT Asia Teknologi",
            statusApproval: "Belum approved",
            jumlahPpn: "Rp300.000,00",
            tindakan: "Upload",
          },
          {
            id: 2,
            isChecked: false,
            nomorFaktur: "010.21.32143412",
            pelangggan: "Sinar Jaya",
            statusApproval: "Belum approved",
            jumlahPpn: "Rp700.000,00",
            tindakan: "Upload",
          },
          {
            id: 3,
            isChecked: false,
            nomorFaktur: "900.22.10030044",
            pelangggan: "PT Maju Jaya Abadi",
            statusApproval: "Belum approved",
            jumlahPpn: "Rp100.000,00",
            tindakan: "Upload",
          },
          {
            id: 4,
            isChecked: false,
            nomorFaktur: "900.22.10030039",
            pelangggan: "Grand Bliss",
            statusApproval: "Belum approved",
            jumlahPpn: "Rp500.000,00",
            tindakan: "Upload",
          },
          {
            id: 5,
            isChecked: false,
            nomorFaktur: "010.21.32143407",
            pelangggan: "Toko Makmur Sentosa",
            statusApproval: "Belum approved",
            jumlahPpn: "Rp600.000,00",
            tindakan: "Upload",
          },
        ],
      },
      sptEFaktur: {
        options: {
          useCheckbox: false,
        },
        datas: [
          {
            id: 1,
            isChecked: false,
            masaPajak: "01/2022",
            pembetulan: "0",
            status: "Belum dilaporkan",
            tindakan: "Lapor SPT",
          },
        ],
      },
      sptEBupot: {
        options: {
          useCheckbox: false,
        },
        datas: [
          {
            id: false,
            isChecked: false,
            masaPajak: "01/2022",
            pembetulan: "0",
            jumlahPph: "Belum dilaporkan",
            status: "Belum dilengkapi",
            tindakan: "Input bukti setor",
          },
        ],
      },
    };
  },
  beforeMount() {
    this.handleSelectedTab(this.defaultIndex);
  },
  computed: {
    isIndeterminate() {
      const checks = this.source.map((value) => {
        return value.isChecked;
      });

      const totalData = checks.length;
      const totalSelectedData = checks.filter(Boolean).length;

      if (totalSelectedData === 0) {
        return false;
      }

      if (totalSelectedData < totalData) {
        return true;
      }

      return false;
    },
    isCheckedAll() {
      const checks = this.source.map((value) => {
        return value.isChecked;
      });

      const totalData = checks.length;
      const totalSelectedData = checks.filter(Boolean).length;

      if (totalSelectedData === totalData) {
        return true;
      }

      return false;
    },
  },
  methods: {
    closePopover(index) {
      this.$refs.eBillingPopover[index].closePopover();
    },
    handleSelectedTab(e) {
      const source = ["eBilling", "fakturKeluaran", "sptEFaktur", "sptEBupot"];
      if (typeof e === "number") {
        this.source = this[source[e]].datas;
        this.useCheckbox = this[source[e]].options.useCheckbox;
        this.currentTab = e;
      }
    },
    handleCheckAll(e) {
      this.source = this.source.map((value) => {
        return {
          ...value,
          ...{
            isChecked: e,
          },
        };
      });
    },
    handleUncheckAll() {
      this.source = this.source.map((value) => {
        return {
          ...value,
          ...{
            isChecked: false,
          },
        };
      });
    },
  },
};
</script>
