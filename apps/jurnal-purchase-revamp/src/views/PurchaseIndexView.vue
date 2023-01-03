<template>
  <mp-box position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar :isCollapsed="true" />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto"
        background-color="background">
        <SubHeader />

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">

          <mp-grid gap="5" template-columns=" repeat(3, minmax(0, 1fr))">
            <mp-flex flex-direction="column" rounded="sm" border="1px" border-color="gray.100">
              <mp-flex px="3" py="2.5" bg="orange.50" justify-content="space-between" align-items="center"
                rounded-top-left="sm" rounded-top-right="sm" border-bottom="1px" border-color="gray.100">
                <mp-box w="calc(100% - 32px)">
                  <mp-heading as="h3" font-size="lg"> Penjualan belum dibayar (IDR) </mp-heading>
                </mp-box>
                <mp-badge variant-color="orange">6</mp-badge>
              </mp-flex>

              <mp-flex bg="white" cursor="pointer" px="3" py="2" flex-direction="column" rounded-bottom="sm">
                <mp-text color="gray.600" font-size="sm" line-height="sm">Total</mp-text>
                <mp-heading as="h2" font-size="xl" font-weight="semibold"> Rp500.000.000,00 </mp-heading>
              </mp-flex>
            </mp-flex>
            <mp-flex flex-direction="column" rounded="sm" border="1px" border-color="gray.100">
              <mp-flex px="3" py="2.5" bg="red.50" justify-content="space-between" align-items="center"
                rounded-top-left="sm" rounded-top-right="sm" border-bottom="1px" border-color="gray.100">
                <mp-box w="calc(100% - 32px)">
                  <mp-heading as="h3" font-size="lg"> Penjualan belum dibayar (IDR) </mp-heading>
                </mp-box>
                <mp-badge variant-color="red">6</mp-badge>
              </mp-flex>

              <mp-flex bg="white" cursor="pointer" px="3" py="2" flex-direction="column" rounded-bottom="sm">
                <mp-text color="gray.600" font-size="sm" line-height="sm">Total</mp-text>
                <mp-heading as="h2" font-size="xl" font-weight="semibold"> Rp13.000.000,00 </mp-heading>
              </mp-flex>
            </mp-flex>
            <mp-flex flex-direction="column" rounded="sm" border="1px" border-color="gray.100">
              <mp-flex px="3" py="2.5" bg="green.50" justify-content="space-between" align-items="center"
                rounded-top-left="sm" rounded-top-right="sm" border-bottom="1px" border-color="gray.100">
                <mp-box w="calc(100% - 32px)">
                  <mp-heading as="h3" font-size="lg"> Pelunasan diterima 30 hari terakhir </mp-heading>
                </mp-box>
                <mp-badge variant-color="green">6</mp-badge>
              </mp-flex>

              <mp-flex bg="white" cursor="pointer" px="3" py="2" flex-direction="column" rounded-bottom="sm">
                <mp-text color="gray.600" font-size="sm" line-height="sm">Total</mp-text>
                <mp-heading as="h2" font-size="xl" font-weight="semibold"> Rp100.000.000,00 </mp-heading>
              </mp-flex>
            </mp-flex>
          </mp-grid>

          <mp-text color="gray.400" text-align="right" mt="2" mb="8">
            Saldo adalah untuk semua jangka waktu, kecuali ada pernyataan
          </mp-text>

          <!-- Tabs -->
          <Tabs v-model="currentTab" />

          <!-- Filter -->
          <mp-flex justify="space-between" align-items="flex-end">
            <mp-flex gap="4" align-items="flex-end">
              <mp-form-control control-id="filter-sesuai-periode">
                <mp-form-label>Semua status</mp-form-label>
                <mp-autocomplete v-model="activeFilter.status" is-clearable is-searchable
                  :data="['Semua status', 'Status 1', 'Status 2', 'Status 3', 'Status 4']"
                  :content-style="{ width: 'full' }" />
              </mp-form-control>
            </mp-flex>

            <mp-flex gap="4" align-items="flex-end">

              <mp-input-group>
                <mp-input-left-addon :with-background="false">
                  <mp-icon name="search" size="sm" />
                </mp-input-left-addon>
                <mp-input v-model="activeFilter.keyword" placeholder="Pencarian" is-clearable />
              </mp-input-group>
              <mp-button variant="outline" @click="isOpen = true">
                <mp-icon name="filter" variant="duotone" size="sm" mr="2" />
                Filter</mp-button>
            </mp-flex>
          </mp-flex>

          <!-- Loading -->
          <mp-flex v-if="isLoading" direction="column" align-items="center" justify-content="center" pt="12">
            <mp-spinner />
            <mp-text font-weight="semibold" mt="3">Loading transactions...</mp-text>
          </mp-flex>

          <!-- Table -->
          <mp-box v-else mt="8">
            <ReportTable />
          </mp-box>

          <!-- Drawer -->
          <PurchaseFilterDrawer :is-open="isOpen" @apply="handleApplyFilter" @close="handleClose"
            :filter="activeFilter" />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpFormControl,
  MpFormLabel,
  MpAutocomplete,
  MpButton,
  MpText,
  MpSpinner,
  MpIcon,
  MpGrid,
  MpHeading,
  MpBadge
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "./SubHeader.vue";
import Tabs from './Tabs.vue'
import ReportTable from "./ReportTable.vue";
import PurchaseFilterDrawer from "./PurchaseFilterDrawer.vue";

export default {
  name: "SalesIndex",
  components: {
    Header,
    Sidebar,
    SubHeader,
    Tabs,
    ReportTable,
    PurchaseFilterDrawer,
    MpBox,
    MpFlex,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpFormControl,
    MpFormLabel,
    MpAutocomplete,
    MpButton,
    MpText,
    MpSpinner,
    MpIcon,
    MpGrid,
    MpHeading,
    MpBadge
  },
  data() {
    return {
      isLoading: false,
      currentTab: '1321',
      isOpen: false,
      activeFilter: {
        keyword: "",
        column: "",
        transactionDate: [],
        dueDate: [],
        status: "Semua status",
        bill: {
          formula: "lebih-dari",
          value: "",
        },
        total: {
          formula: "lebih-dari",
          value: "",
        },
      }
    };
  },
  methods: {
    handleApplyFilter(e) {
      console.log(e)
      this.isLoading = true
      this.activeFilter = e

      this.handleClose()

      setTimeout(() => {
        this.isLoading = false
      }, 800);
    },
    handleClose() {
      this.isOpen = false
    },
  },
};
</script>
