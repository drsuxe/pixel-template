<template>
  <mp-box>
    <mp-broadcast
      variant="information"
      icon-name="flag"
      content="Welcome to new Jurnal Interface, this page is only prototype, not all action worked. If you have any concerns feel free to drop feedback here."
    />
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 100px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
        :margin-left="['0', '60px']"
      >
        <SubHeader>
          <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
            <mp-heading as="h1" font-size="2xl" font-weight="semibold"> Laporan </mp-heading>
          </mp-flex>

          <mp-box px="6" mb="-6">
            <mp-tabs id="report-tab">
              <mp-tab-list border-bottom="0px">
                <mp-tab>Sekilas bisnis</mp-tab>
                <mp-tab>Penjualan</mp-tab>
                <mp-tab>Pembelian</mp-tab>
                <mp-tab>Produk</mp-tab>
                <mp-tab>Aset</mp-tab>
                <mp-tab>Pertukaran kurs</mp-tab>
                <mp-tab>Bank</mp-tab>
                <mp-tab>Pajak</mp-tab>
                <mp-tab>
                  Jurnal
                  <mp-badge ml="2">Baru</mp-badge>
                </mp-tab>
              </mp-tab-list>
            </mp-tabs>
          </mp-box>
        </SubHeader>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-banner variant="danger" is-inline>
            <mp-banner-icon />
            <mp-banner-description>
              Anda tidak dapat mengakses laporan versi ini. Untuk mengakses laporan, silakan hubungi tim support kami. Hubungi support
            </mp-banner-description>
            <mp-banner-close-button />
          </mp-banner>

          <mp-grid template-columns="repeat(2, 1fr)" mt="10" gap="12" pb="16">
            <mp-box v-for="report in reportLists" :key="report.id">
              <mp-heading as="h3" font-size="lg" color="blue.400"> {{ report.name }} </mp-heading>
              <mp-text color="gray.600">
                {{ report.description }}
              </mp-text>

              <mp-flex gap="2" mt="4">
                <mp-button variant="outline"> {{ report.buttonPrimary }} </mp-button>
                <mp-button variant="ghost" v-if="report.buttonSecondary"> {{ report.buttonSecondary }} </mp-button>
              </mp-flex>
            </mp-box>
          </mp-grid>

          <MountingPortal mountTo="body" name="learning-center-widget" append>
            <LearningCenterWidget />
          </MountingPortal>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpGrid,
  MpBox,
  MpFlex,
  MpText,
  MpHeading,
  MpBroadcast,
  MpTabs,
  MpTab,
  MpTabList,
  MpBadge,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
  MpBannerCloseButton,
  MpButton,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import LearningCenterWidget from "../widgets/LearningCenterWidget.vue";

export default {
  name: "LayoutDefault",
  components: {
    MpGrid,
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpBroadcast,
    MpTabs,
    MpTab,
    MpTabList,
    MpBadge,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
    MpBannerCloseButton,
    MpButton,
    Header,
    Sidebar,
    SubHeader,
    LearningCenterWidget,
  },
  data() {
    return {
      reportLists: [
        {
          id: 1,
          name: "Neraca",
          description:
            "Menampilan apa yang anda miliki (aset), apa yang anda hutang (liabilitas), dan apa yang anda sudah investasikan pada perusahaan anda (ekuitas).",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "Lihat versi lama",
        },
        {
          id: 2,
          name: "Buku Besar",
          description:
            "Laporan ini menampilkan semua transaksi yang telah dilakukan untuk suatu periode. Laporan ini bermanfaat jika Anda memerlukan daftar kronologis untuk semua transaksi yang telah dilakukan oleh perusahaan Anda.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "Lihat versi lama",
        },
        {
          id: 3,
          name: "Laporan Laba-Rugi",
          description: "Menampilkan setiap tipe transaksi dan jumlah total untuk pendapatan dan pengeluaran anda.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "Lihat versi lama",
        },
        {
          id: 4,
          name: "Jurnal",
          description:
            "Daftar semua jurnal per transaksi yang terjadi dalam periode waktu. Hal ini berguna untuk melacak di mana transaksi Anda masuk ke masing-masing rekening.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "Lihat versi lama",
        },
        {
          id: 5,
          name: "Arus Kas",
          description:
            "Laporan ini mengukur kas yang telah dihasilkan atau digunakan oleh suatu perusahaan dan menunjukkan detail pergerakannya dalam suatu periode.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "",
        },
        {
          id: 6,
          name: "Trial Balance",
          description: "Menampilkan saldo dari setiap akun, termasuk saldo awal, pergerakan, dan saldo akhir dari periode yang ditentukan.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "Lihat versi lama",
        },
        {
          id: 7,
          name: "Perubahan Modal",
          description: "Menampilkan perubahan atau pergerakan dalam ekuitas pemilik yang terjadi dalam periode tertentu.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "",
        },
        {
          id: 8,
          name: "Ringkasan Bisnis",
          description: "Laporan Ringkasan Bisnis Menampilkan ringkasan dari laporan keuangan standar beserta wawasannya.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "",
        },
        {
          id: 9,
          name: "Anggaran Laba Rugi",
          description: "Memungkinkan perusahaan untuk membandingkan anggaran keuangan yang sebenarnya.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "",
        },
        {
          id: 10,
          name: "Manajemen Anggaran",
          description: "Alat untuk mengatur anggaran pengeluaran dan pemasukan perusahaan.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "",
        },
      ],
    };
  },
};
</script>
