<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <SalesHeader />

        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <SummaryBoxSection />

          <!-- 
          // TODO : Ask designer, have different color with token.
          -->
          <mp-flex justify-content="end" my="2">
            <mp-text font-size="sm" color="gray.600"
              >Saldo adalah untuk semua jangka waktu, kecuali ada
              pernyataan</mp-text
            >
          </mp-flex>

          <mp-box as="content">
            <mp-heading as="h2" font-size="xl" mb="1">
              Transaksi Penjualan</mp-heading
            >

            <SalesTabNavigation />

            <SalesInvoiceTable />
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpHeading } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SalesHeader from "../views/SalesHeader.vue";
import SummaryBoxSection from "./SummaryBoxSection.vue";
import SalesTabNavigation from "./SalesTabNavigation.vue";
import SalesInvoiceTable from "./SalesInvoiceTable.vue";

export default {
  name: "SalesIndex",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    //
    Header,
    Sidebar,
    SalesHeader,
    SummaryBoxSection,
    SalesTabNavigation,
    SalesInvoiceTable,
  },
};
</script>
