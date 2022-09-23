<template>
  <mp-box position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar :isCollapsed="true" />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeader />

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-banner mb="6" v-if="showExportBanner">
            <mp-banner-icon name="info" color="blue.400" />
            <mp-banner-description display="flex" align-items="center">
              The report is in progress. Download the report on the Import & Export List page or by email. <mp-text is-link ml="1">View page</mp-text>
            </mp-banner-description>
            <mp-banner-close-button :isInline="false" @click.native="showExportBanner = false" />
          </mp-banner>

          <mp-flex justify="space-between" align-items="flex-end">
            <mp-flex gap="4" align-items="flex-end">
              <mp-form-control control-id="start-date">
                <mp-form-label>Pilih tanggal</mp-form-label>
                <mp-date-picker v-model="filter.startDate" format="DD/MM/YYYY" />
              </mp-form-control>

              <mp-form-control control-id="filter-sesuai-periode">
                <mp-form-label>Filter sesuai periode</mp-form-label>
                <mp-autocomplete
                  is-clearable
                  is-searchable
                  :data="['Custom', 'Hari ini', 'Minggu ini', 'Bulan ini']"
                  max-width="40"
                  :content-style="{ width: '40' }"
                  :value="filter.period"
                  @change="(value) => (filter.period = value)"
                />
              </mp-form-control>

              <mp-button-group>
                <mp-button @click="handleSubmit"> Filter </mp-button>
                <mp-button variant="outline" @click="isOpenDrawerMoreFilter = true"> Filter lainnya </mp-button>
              </mp-button-group>
            </mp-flex>

            <mp-flex gap="4" align-items="flex-end" :key="exportComponentKey">
              <mp-button left-icon="doc" variant="outline">Lihat contoh</mp-button>
              <PopoverList :contentStyle="{ maxWidth: '110px' }">
                <template #trigger>
                  <mp-button variant="outline" right-icon="caret-down" :isLoading="isExportLoading"> Ekspor </mp-button>
                </template>

                <template #content>
                  <mp-popover-list>
                    <mp-popover-list-item @click="handleExportReport('PDF')">PDF</mp-popover-list-item>
                    <mp-popover-list-item @click="handleExportReport('Excel')"> Excel </mp-popover-list-item>
                    <mp-popover-list-item @click="handleExportReport('CSV')"> CSV </mp-popover-list-item>
                  </mp-popover-list>
                </template>
              </PopoverList>
            </mp-flex>
          </mp-flex>

          <mp-flex v-if="isLoading" direction="column" align-items="center" justify-content="center" pt="12">
            <mp-spinner />
            <mp-text font-weight="semibold" mt="3">Loading transactions...</mp-text>
          </mp-flex>

          <mp-box mt="8" v-if="showTable && !isLoading">
            <ReportTable />
          </mp-box>

          <mp-box v-if="!showTable && !isLoading && !isDataNotFound" pt="12">
            <EmptyState type="no-data" title="Laporan belum ditampilkan" description="Laporan yang Anda filter akan ditampilkan di sini." />
          </mp-box>

          <mp-box pt="12" v-if="!showTable && !isLoading && isDataNotFound">
            <EmptyState
              type="data-not-found"
              title="Laporan tidak ditemukan "
              description="Silakan atur ulang filter periode atau filter lainnya untuk menampilkan laporan."
            />
          </mp-box>

          <mp-drawer :is-open="isOpenDrawerMoreFilter" :on-close="() => (isOpenDrawerMoreFilter = false)">
            <mp-drawer-overlay />
            <mp-drawer-content>
              <mp-drawer-header>Filter lainnya</mp-drawer-header>
              <mp-drawer-close-button @click="isOpenDrawerMoreFilter = false" />
              <mp-drawer-body>
                <mp-stack spacing="5">
                  <mp-form-control control-id="drawer-start-date">
                    <mp-form-label>Pilih tanggal</mp-form-label>
                    <mp-date-picker v-model="filter.startDate" format="DD/MM/YYYY" />
                  </mp-form-control>

                  <mp-form-control control-id="drawer-filter-sesuai-periode">
                    <mp-form-label>Filter sesuai periode</mp-form-label>
                    <mp-autocomplete
                      is-clearable
                      is-searchable
                      :data="['Custom', 'Hari ini', 'Minggu ini', 'Bulan ini']"
                      :content-style="{ width: 'full' }"
                      :value="filter.period"
                      @change="(value) => (filter.period = value)"
                    />
                  </mp-form-control>

                  <mp-form-control control-id="drawer-tanggal-jatuh-tempo">
                    <mp-form-label>Tanggal jatuh tempo</mp-form-label>
                    <mp-date-picker v-model="filter.startDate" format="DD/MM/YYYY" />
                  </mp-form-control>

                  <mp-box>
                    <mp-form-control control-id="drawer-tags">
                      <mp-form-label
                        >Tags

                        <mp-tooltip
                          position="right"
                          label="Filter all tags: showing transactions from all tags you selected. Filter partial tags: showing transactions from one tag and/or other tags you selected."
                          width="280px"
                        >
                          <mp-icon name="info" size="sm" ml="1" />
                        </mp-tooltip>
                      </mp-form-label>
                      <mp-input-tag
                        id="input-tag-tags"
                        placeholder="Select tag"
                        :enable-create-new-tag="true"
                        :suggestions="['Bengalore', 'Bengkulu', 'Budapest']"
                        :is-show-suggestions="true"
                        :is-show-icon-chevron-down="true"
                        :trigger-style="{ maxHeight: '24', overflowY: 'auto' }"
                        :data="filter.tag"
                        @change="(value) => (filter.tag = value)"
                        :contentStyle="{ maxWidth: 'full' }"
                      />
                    </mp-form-control>

                    <mp-form-control control-id="drawer-radio" mt="3">
                      <mp-radio-group name="radio" spacing="6" is-inline :value="filter.radio" @change="(value) => (filter.radio = value)">
                        <mp-radio id="all-tags" value="all-tags"> Semua tag </mp-radio>
                        <mp-radio id="partial" value="partial"> Sebagian </mp-radio>
                      </mp-radio-group>
                    </mp-form-control>
                  </mp-box>

                  <mp-form-control control-id="drawer-berdasarkan-pelanggan">
                    <mp-form-label>Grup berdasarkan pelanggan</mp-form-label>
                    <mp-input-tag
                      placeholder="Select tag"
                      :enable-create-new-tag="false"
                      :suggestions="['Jaka Permadi', 'Arga Kusuma', 'Barry Allen', 'Christine Hartono', 'Edward Wongko', 'Fitzgerald']"
                      :is-show-suggestions="true"
                      :is-show-icon-chevron-down="true"
                      :trigger-style="{ maxHeight: '24', overflowY: 'auto' }"
                      :data="filter.customer"
                      @change="(value) => (filter.customer = value)"
                      :contentStyle="{ maxWidth: 'full' }"
                    />
                  </mp-form-control>

                  <mp-form-control control-id="drawer-urutkan-sesuai-kolom">
                    <mp-form-label>Urutkan sesuai kolom</mp-form-label>
                    <mp-autocomplete
                      is-clearable
                      is-searchable
                      :data="['Pelanggan', 'Total sisa piutang']"
                      :content-style="{ width: 'full' }"
                      :value="filter.period"
                      @change="(value) => (filter.period = value)"
                    />
                  </mp-form-control>

                  <mp-form-control control-id="drawer-urutkan-sesuai-kolom">
                    <mp-checkbox> Tampilkan lebih detail </mp-checkbox>
                  </mp-form-control>
                </mp-stack>
              </mp-drawer-body>
              <mp-drawer-footer>
                <mp-button variant="ghost" mr="3" @click="isOpenDrawerMoreFilter = false"> Cancel </mp-button>
                <mp-button @click="handleApplyFilter">Apply filter</mp-button>
              </mp-drawer-footer>
            </mp-drawer-content>
          </mp-drawer>
          <ModalGagalMemuatLaporan :is-open="isShowModalGagalMemuatLaporan" @handleClose="isShowModalGagalMemuatLaporan = false" />
          <ModalExportFailed :is-open="isShowModalFailedExport" @handleClose="isShowModalFailedExport = false" />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpFormControl,
  MpFormLabel,
  MpDatePicker,
  MpAutocomplete,
  MpInputTag,
  MpButtonGroup,
  MpButton,
  MpText,
  MpSpinner,
  MpIcon,
  MpTooltip,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerFooter,
  MpRadio,
  MpRadioGroup,
  MpStack,
  MpPopoverList,
  MpPopoverListItem,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
  MpBannerCloseButton,
  MpCheckbox,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "./SubHeader.vue";
import ReportTable from "./ReportTable.vue";
import EmptyState from "./slices/EmptyState.vue";
import ModalGagalMemuatLaporan from "./slices/ModalGagalMemuatLaporan.vue";
import ModalExportFailed from "./slices/ModalExportFailed.vue";
import PopoverList from "../components/PopoverList.vue";

export default {
  name: "SalesIndex",
  components: {
    Header,
    Sidebar,
    SubHeader,
    ReportTable,
    EmptyState,
    ModalGagalMemuatLaporan,
    ModalExportFailed,
    PopoverList,
    MpBox,
    MpFlex,
    MpFormControl,
    MpFormLabel,
    MpDatePicker,
    MpAutocomplete,
    MpInputTag,
    MpButtonGroup,
    MpButton,
    MpText,
    MpSpinner,
    MpIcon,
    MpTooltip,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpRadio,
    MpRadioGroup,
    MpStack,
    MpPopoverList,
    MpPopoverListItem,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
    MpBannerCloseButton,
    MpCheckbox,
  },
  data() {
    return {
      filter: {
        startDate: new Date(),
        endDate: new Date(),
        period: "Hari ini",
        customer: "",
        tags: "",
        radio: "all-tags",
      },
      isLoading: false,
      showTable: false,
      isDataNotFound: false,
      isShowModalGagalMemuatLaporan: false,
      isOpenDrawerMoreFilter: false,

      // Export
      showExportBanner: false,
      isExportLoading: false,
      exportComponentKey: 0,
      isShowModalFailedExport: false,
    };
  },
  watch: {
    "filter.period": function (newValue) {
      if (newValue === "") {
        setTimeout(() => {
          this.filter.period = "Hari ini";
        }, 300);
      }
    },
  },
  mounted() {
    // this.handleSubmit();
  },
  methods: {
    handleApplyFilter() {
      this.isOpenDrawerMoreFilter = false;
      this.handleSubmit();
    },
    handleSubmit() {
      this.isLoading = true;

      setTimeout(() => {
        console.log(this.period);
        if (this.filter.period === "Hari ini") this.showTable = true;
        if (this.filter.period === "Minggu ini") this.isDataNotFound = true;
        if (this.filter.period === "Custom") this.isShowModalGagalMemuatLaporan = true;

        this.isLoading = false;
      }, 50);
    },
    handleExportReport(type) {
      this.exportComponentKey += 1;
      this.isExportLoading = true;

      setTimeout(() => {
        if (type === "CSV") {
          this.isShowModalFailedExport = true;
        } else {
          this.showExportBanner = true;
        }

        this.isExportLoading = false;
      }, 500);
    },
  },
};
</script>
