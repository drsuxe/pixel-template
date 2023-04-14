<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="#F3F7FC"
        :margin-left="['0', '60px']"
        position="relative"
      >
        <SubHeader>
          <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
            <mp-flex align-items="flex-end">
              <mp-heading as="h1" font-size="2xl" font-weight="bold"> Daftar pengeluaran </mp-heading>
              <mp-text color="gray.600" ml="1"> (in IDR)</mp-text>
            </mp-flex>
          </mp-flex>
        </SubHeader>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" border-left-width="1px" rounded-top-left="md" background-color="white" padding="6">
          <mp-banner mb="6" v-if="showExportBanner">
            <mp-banner-icon name="info" color="blue.400" />
            <mp-banner-description display="flex" align-items="center">
              The report is in progress. Download the report on the Import & Export List page or by email.
              <mp-text is-link ml="1">View page</mp-text>
            </mp-banner-description>
            <mp-banner-close-button :isInline="false" @click.native="showExportBanner = false" />
          </mp-banner>

          <mp-flex justify="space-between" align-items="flex-end">
            <mp-flex gap="4" align-items="flex-end">
              <mp-form-control control-id="start-date">
                <mp-form-label>Start date</mp-form-label>
                <mp-date-picker v-model="filter.startDate" format="DD/MM/YYYY" />
              </mp-form-control>

              <mp-form-control control-id="end-date">
                <mp-form-label>End date</mp-form-label>
                <mp-date-picker v-model="filter.endDate" format="DD/MM/YYYY" />
              </mp-form-control>

              <mp-form-control control-id="filter-sesuai-periode">
                <mp-form-label>Filter by Period</mp-form-label>
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
                <mp-button variant="outline" @click="isOpenDrawerMoreFilter = true"> More filter </mp-button>
              </mp-button-group>
            </mp-flex>

            <mp-box :key="exportComponentKey">
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
            </mp-box>
          </mp-flex>

          <mp-flex v-if="isLoading" direction="column" align-items="center" justify-content="center" pt="12">
            <mp-spinner />
            <mp-text font-weight="semibold" mt="3">Loading transactions...</mp-text>
          </mp-flex>

          <mp-box mt="8" v-if="showTable && !isLoading">
            <ExpenseReportTable />
          </mp-box>

          <mp-box v-if="!showTable && !isLoading && !isDataNotFound" pt="12">
            <EmptyState type="no-data" title="No report shown yet" description="The report that you filter will show here." />
          </mp-box>

          <mp-box pt="12" v-if="!showTable && !isLoading && isDataNotFound">
            <EmptyState type="data-not-found" title="No report found" description="Please reset the period filter or other filters to show the report." />
          </mp-box>

          <mp-drawer :is-open="isOpenDrawerMoreFilter" :on-close="() => (isOpenDrawerMoreFilter = false)">
            <mp-drawer-overlay />
            <mp-drawer-content>
              <mp-drawer-header>More filter</mp-drawer-header>
              <mp-drawer-close-button @click="isOpenDrawerMoreFilter = false" />
              <mp-drawer-body>
                <mp-stack spacing="5">
                  <mp-form-control control-id="drawer-start-date">
                    <mp-form-label>Start date</mp-form-label>
                    <mp-date-picker v-model="filter.startDate" format="DD/MM/YYYY" />
                  </mp-form-control>

                  <mp-form-control control-id="end-date">
                    <mp-form-label>End date</mp-form-label>
                    <mp-date-picker v-model="filter.endDate" format="DD/MM/YYYY" />
                  </mp-form-control>

                  <mp-form-control control-id="drawer-filter-sesuai-periode">
                    <mp-form-label>Filter by Period</mp-form-label>
                    <mp-autocomplete
                      is-clearable
                      is-searchable
                      :data="['Custom', 'Hari ini', 'Minggu ini', 'Bulan ini']"
                      :content-style="{ width: 'full' }"
                      :value="filter.period"
                      @change="(value) => (filter.period = value)"
                    />
                  </mp-form-control>

                  <mp-form-control control-id="drawer-customer">
                    <mp-form-label>Customer</mp-form-label>
                    <mp-input-tag
                      id="input-tag-customer"
                      placeholder="Select tag"
                      :enable-create-new-tag="false"
                      :suggestions="['Jaka Permadi', 'Arga Kusuma', 'Barry Allen', 'Christine Hartono', 'Edward Wongko', 'Fitzgerald']"
                      :is-show-suggestions="true"
                      :is-show-icon-chevron-down="true"
                      :content-style="{ width: '48' }"
                      :trigger-style="{ maxHeight: '24', overflowY: 'auto' }"
                      :data="filter.customer"
                      @change="(value) => (filter.customer = value)"
                      :contentStyle="{ maxWidth: 'full' }"
                    />
                  </mp-form-control>

                  <mp-box>
                    <mp-form-control control-id="drawer-tags">
                      <mp-form-label
                        >Tags

                        <mp-tooltip
                          position="right"
                          :label="`Filter all tags: showing transactions from all tags you selected. <br> <br> Filter partial tags: showing transactions from one tag and/or other tags you selected.`"
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
                        :content-style="{ width: '48' }"
                        :trigger-style="{ maxHeight: '24', overflowY: 'auto' }"
                        :data="filter.tag"
                        @change="(value) => (filter.tag = value)"
                        :contentStyle="{ maxWidth: 'full' }"
                      />
                    </mp-form-control>

                    <mp-form-control control-id="drawer-radio" mt="3">
                      <mp-radio-group name="radio" spacing="6" is-inline :value="filter.radio" @change="(value) => (filter.radio = value)">
                        <mp-radio id="all-tags" value="all-tags"> All tags </mp-radio>
                        <mp-radio id="partial" value="partial"> Partial </mp-radio>
                      </mp-radio-group>
                    </mp-form-control>
                  </mp-box>
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
  MpHeading,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import ExpenseReportTable from "./ExpenseReportTable.vue";
import EmptyState from "./EmptyState.vue";
import ModalGagalMemuatLaporan from "./ModalGagalMemuatLaporan.vue";
import ModalExportFailed from "./ModalExportFailed.vue";
import PopoverList from "./PopoverList.vue";

export default {
  name: "IndexView",
  components: {
    MpHeading,
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

    //
    ExpenseReportTable,
    Header,
    Sidebar,
    SubHeader,
    EmptyState,
    ModalGagalMemuatLaporan,
    ModalExportFailed,
    PopoverList,
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
      }, 500);
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
