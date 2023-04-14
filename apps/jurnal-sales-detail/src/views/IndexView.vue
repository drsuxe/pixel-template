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
            <mp-box>
              <mp-flex gap="1">
                <mp-text is-link text-decoration="underline">Daftar Akun</mp-text>
                <mp-text color="blue.400">/</mp-text>
                <mp-text is-link text-decoration="underline">Daftar tutup buku</mp-text>
              </mp-flex>
              <mp-heading as="h1" font-size="2xl" font-weight="semibold"> Laporan keuangan </mp-heading>
            </mp-box>

            <mp-text
              >Periode:

              <mp-text as="span" font-weight="semibold">Dari awal sampai 31 Des 2022</mp-text>
            </mp-text>
          </mp-flex>

          <mp-box px="6" mb="-6">
            <mp-tabs id="report-tab" :default-index="defaultIndex" @change="handleChange">
              <mp-tab-list border-bottom="0px">
                <mp-tab>Trial balance</mp-tab>
                <mp-tab>Laba-Rugi</mp-tab>
                <mp-tab>Neraca</mp-tab>
                <mp-tab>Arus kas</mp-tab>
              </mp-tab-list>
            </mp-tabs>
          </mp-box>
        </SubHeader>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" border-left-width="1px" rounded-top-left="md" background-color="white" padding="6">
          <template v-if="currentTab === 0">
            <mp-flex direction="column" align="center" justify="center" mb="6">
              <mp-heading>Trial balance</mp-heading>
              <mp-text color="gray.600">Dari awal sampai 31/12/2022</mp-text>
              <mp-text color="gray.600">Nilai dalam IDR</mp-text>
            </mp-flex>

            <TrialBalanceTable :use-sticky="isTableSticky" />

            <mp-box position="sticky" bottom="0" z-index="20" bg="white" py="4" border-top-width="1px" mt="6" mb="-6" margin-left="-6" margin-right="-6">
              <mp-flex right="0" justify="end" bg="white" px="6" gap="2">
                <mp-button variant="ghost">Kembali</mp-button>
                <mp-button>Konfirmasi tutup buku</mp-button>
              </mp-flex>
            </mp-box>
          </template>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpTabs, MpTab, MpTabList, MpText, MpButton } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import TrialBalanceTable from "./TrialBalanceTable.vue";

export default {
  name: "LayoutDefault",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpTabs,
    MpTab,
    MpTabList,
    MpText,
    MpButton,

    //
    Header,
    Sidebar,
    SubHeader,
    TrialBalanceTable,
  },
  data() {
    return {
      defaultIndex: 0,
      currentTab: 0,
      isScrolling: false,
      isRenderBottom: true,
      scrollTimeout: null,
      isTableSticky: false,
    };
  },
  methods: {
    onScroll(e) {
      const { scrollTop, clientHeight, scrollHeight } = e.target;
      const percent = (Math.round(scrollTop + clientHeight) / scrollHeight) * 100;
      console.log(percent);

      if (scrollTop === 0) {
        this.isScrolling = false;
      }

      if (scrollTop >= 1) {
        this.isScrolling = true;
      }

      if (percent >= 95) {
        this.isScrolling = false;
      }

      if (percent >= 30) {
        this.isTableSticky = true;
      } else {
        this.isTableSticky = false;
      }
    },
    handleChange(e) {
      this.currentTab = e;
    },
  },
};
</script>
