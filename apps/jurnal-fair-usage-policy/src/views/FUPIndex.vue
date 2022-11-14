<template>
  <mp-box position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <mp-flex as="header" align-items="center" justify="space-between" padding-x="6" height="72px">
          <mp-box>
            <mp-text is-link font-size="sm" color="blue.400" text-decoration="underline">Pengaturan</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="bold"> Tagihan & Kuota </mp-heading>
          </mp-box>

          <mp-box>
            <mp-button-group>
              <mp-button variant="outline">Ganti paket</mp-button>
              <mp-button as="router-link" to="/checkout/subscription">Mulai Berlangganan</mp-button>
            </mp-button-group>
          </mp-box>
        </mp-flex>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-flex align-items="center" gap="2" mb="6">
            <mp-heading>PT Central Perk Indonesia (Trial)</mp-heading>
            <mp-badge variant-color="green"> Aktif </mp-badge>
          </mp-flex>

          <mp-grid gap="6" templateColumns="repeat(3, 1fr)">
            <mp-grid-item>
              <mp-box border="1px" border-color="gray.100" p="4" rounded="md">
                <mp-text font-size="lg" font-weight="semibold">Paket berlangganan</mp-text>

                <mp-stack spacing="2">
                  <mp-divider />

                  <mp-grid templateColumns="repeat(2, 1fr)">
                    <mp-text color="gray.600">Paket</mp-text>
                    <mp-text>Enterprise+ (Trial)</mp-text>
                  </mp-grid>

                  <mp-grid templateColumns="repeat(2, 1fr)">
                    <mp-text color="gray.600">Pengguna</mp-text>
                    <mp-text>1 dari -</mp-text>
                  </mp-grid>

                  <mp-grid templateColumns="repeat(2, 1fr)">
                    <mp-text color="gray.600">Partner</mp-text>
                    <mp-text>0</mp-text>
                  </mp-grid>

                  <mp-divider />

                  <mp-grid templateColumns="repeat(2, 1fr)">
                    <mp-text color="gray.600">Sisa hari</mp-text>
                    <mp-text>-111 hari</mp-text>
                  </mp-grid>

                  <mp-grid templateColumns="repeat(2, 1fr)">
                    <mp-text color="gray.600">Tanggal selesai</mp-text>
                    <mp-text>17 Agu 2022</mp-text>
                  </mp-grid>
                </mp-stack>
              </mp-box>
            </mp-grid-item>

            <mp-grid-item>
              <mp-box border="1px" border-color="gray.100" p="4" rounded="md">
                <mp-text font-size="lg" font-weight="semibold">Informasi tagihan</mp-text>

                <mp-stack spacing="2">
                  <mp-divider />

                  <mp-grid templateColumns="repeat(2, 1fr)">
                    <mp-text color="gray.600">Paket</mp-text>
                    <mp-text>Rp6.468.000</mp-text>
                  </mp-grid>

                  <mp-grid templateColumns="repeat(2, 1fr)">
                    <mp-text color="gray.600">Pengguna tambahan</mp-text>
                    <mp-text>Rp2.124.000</mp-text>
                  </mp-grid>

                  <mp-grid templateColumns="repeat(2, 1fr)">
                    <mp-text color="gray.600">Total tagihan</mp-text>
                    <mp-text>Rp8.592.000</mp-text>
                  </mp-grid>

                  <mp-divider />

                  <mp-grid templateColumns="repeat(2, 1fr)">
                    <mp-text color="gray.600">Jangka pembayaran</mp-text>
                    <mp-text>-</mp-text>
                  </mp-grid>

                  <mp-grid templateColumns="repeat(2, 1fr)">
                    <mp-text color="gray.600">Pembayaran berikutnya</mp-text>
                    <mp-text>17 Agu 2022</mp-text>
                  </mp-grid>
                </mp-stack>
              </mp-box>
            </mp-grid-item>
          </mp-grid>

          <mp-box mt="6">
            <mp-tabs id="tabs">
              <mp-tab-list>
                <mp-tab>Info kuota</mp-tab>
                <mp-tab>Riwayat pembayaran</mp-tab>
              </mp-tab-list>
              <mp-tab-panels>
                <mp-tab-panel>
                  <mp-text font-weight="semibold">Ketentuan</mp-text>
                  <mp-box as="ul" list-style-position="inside">
                    <mp-text as="li" color="gray.600">Pada tanggal 2 setiap bulan, kuota faktur penjualan Anda akan direset. </mp-text>
                    <mp-text as="li" color="gray.600">Masa berlaku kuota gudang & pengguna tambahan mengikuti periode paket. Pelajari lebih lanjut</mp-text>
                  </mp-box>

                  <mp-box mt="6">
                    <FUPTableInfoKuota @handleAddQuota="handleOpenModalAddQuota" />
                  </mp-box>
                </mp-tab-panel>
                <mp-tab-panel>
                  <mp-box mt="6">
                    <FUPTableRiwayarPembayaran />
                  </mp-box>
                </mp-tab-panel>
              </mp-tab-panels>
            </mp-tabs>
          </mp-box>
        </mp-box>

        <CheckoutModalAddQuota :is-open="isCheckoutModalAddQuotaOpen" @handleClose="handleCloseModalAddQuota" @handleAdd="handleAddQuota" />
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpHeading,
  MpButtonGroup,
  MpButton,
  MpBadge,
  MpGrid,
  MpGridItem,
  MpDivider,
  MpStack,
  MpTabs,
  MpTabList,
  MpTab,
  MpTabPanels,
  MpTabPanel,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import FUPTableInfoKuota from "./FUPTableInfoKuota.vue";
import FUPTableRiwayarPembayaran from "./FUPTableRiwayarPembayaran.vue";
import CheckoutModalAddQuota from "./checkout/CheckoutModalAddQuota.vue";

export default {
  name: "SalesIndex",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpButtonGroup,
    MpButton,
    MpBadge,
    MpGrid,
    MpGridItem,
    MpDivider,
    MpStack,
    MpTabs,
    MpTabList,
    MpTab,
    MpTabPanels,
    MpTabPanel,
    //
    Header,
    Sidebar,
    FUPTableInfoKuota,
    FUPTableRiwayarPembayaran,
    CheckoutModalAddQuota,
  },
  data() {
    return {
      isCheckoutModalAddQuotaOpen: false,
    };
  },
  methods: {
    handleOpenModalAddQuota() {
      this.isCheckoutModalAddQuotaOpen = true;
    },
    handleCloseModalAddQuota() {
      this.isCheckoutModalAddQuotaOpen = false;
    },
    handleAddQuota() {
      this.$router.push("/checkout/add-quota");
    },
  },
};
</script>
