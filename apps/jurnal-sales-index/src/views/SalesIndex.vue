<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SectionSalesHeader />

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <SectionSummaryBox />

          <!-- 
          // TODO : Ask designer, have different color with token.
          -->
          <mp-flex justify-content="end" my="2">
            <mp-text font-size="sm" color="gray.600">Saldo adalah untuk semua jangka waktu, kecuali ada pernyataan</mp-text>
          </mp-flex>

          <mp-box as="content">
            <mp-heading as="h2" font-size="xl" mb="1  "> Transaksi Penjualan</mp-heading>

            <mp-tabs id="sales-index-tab" :default-index="defaultIndex" @change="handleChange">
              <mp-tab-list>
                <mp-tab id="sales-invoice"> Faktur pembelian </mp-tab>
                <mp-tab id="sales-delivery"> Pengiriman </mp-tab>
                <mp-tab> Pemesanan </mp-tab>
                <mp-tab> Penawaran </mp-tab>
                <mp-tab>
                  Membutuhkan persetujuan
                  <mp-badge ml="2" variant="subtle" :variant-color="currentTab === 'require-approval' ? 'blue' : 'gray'"> 2 </mp-badge>
                </mp-tab>
              </mp-tab-list>
            </mp-tabs>

            <TableSalesInvoice v-if="currentTab === 'sales-invoice'" />
            <TableSalesDelivery v-if="currentTab === 'sales-delivery'" />
            <TableSalesOrder v-if="currentTab === 'sales-order'" />
            <TableSalesQuotation v-if="currentTab === 'sales-quotation'" />
            <TableRequireApproval v-if="currentTab === 'require-approval'" />
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpTabs, MpTabList, MpTab, MpBadge, MpHeading } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SectionSalesHeader from "../views/SectionSalesHeader.vue";
import SectionSummaryBox from "./SectionSummaryBox.vue";
import TableSalesInvoice from "./TableSalesInvoice.vue";
import TableSalesDelivery from "./TableSalesDelivery.vue";
import TableSalesOrder from "./TableSalesOrder.vue";
import TableSalesQuotation from "./TableSalesQuotation.vue";
import TableRequireApproval from "./TableRequireApproval.vue";

export default {
  name: "SalesIndex",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpTabs,
    MpTabList,
    MpTab,
    MpBadge,
    MpHeading,
    Header,
    Sidebar,
    SectionSalesHeader,
    SectionSummaryBox,
    TableSalesInvoice,
    TableSalesDelivery,
    TableSalesOrder,
    TableSalesQuotation,
    TableRequireApproval,
  },
  data() {
    return {
      tabs: ["sales-invoice", "sales-delivery", "sales-order", "sales-quotation", "require-approval"],
      defaultIndex: 0,
      currentTab: null,
    };
  },
  mounted() {
    this.handleChange(this.defaultIndex);
  },
  methods: {
    handleChange(e) {
      this.currentTab = this.tabs[e];
    },
  },
};
</script>
