<template>
  <mp-box position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <mp-box min-height="calc(100vh - 132px)" background-color="background" padding="6" max-width="80%" mr="auto" ml="auto">
          <mp-grid templateColumns="repeat(10, 1fr)" mt="6" gap="6">
            <mp-grid-item col-span="7">
              <mp-stack spacing="4">
                <mp-box border-width="1px" p="6" bg="white" rounded="sm">
                  <mp-box mb="5">
                    <mp-text font-size="lg" font-weight="semibold">Kuota tambahan</mp-text>
                  </mp-box>

                  <mp-table-container overflow="auto">
                    <mp-table :is-hoverable="false">
                      <mp-table-head bg="gray.50">
                        <mp-table-row>
                          <mp-table-cell as="th" scope="col" width="162px"> Nama </mp-table-cell>
                          <mp-table-cell as="th" scope="col">
                            <mp-text text-align="right" font-weight="semibold">Harga satuan</mp-text>
                          </mp-table-cell>
                          <mp-table-cell as="th" scope="col"> Jumlah </mp-table-cell>
                          <mp-table-cell as="th" scope="col"> Durasi </mp-table-cell>
                          <mp-table-cell as="th" scope="col">
                            <mp-text text-align="right" font-weight="semibold">Total harga </mp-text>
                          </mp-table-cell>
                          <mp-table-cell as="th" scope="col" width="48px"> </mp-table-cell>
                        </mp-table-row>
                      </mp-table-head>
                      <mp-table-body>
                        <mp-table-row v-for="quota in quotas" :key="quota">
                          <mp-table-cell as="td" scope="row">
                            <mp-text :is-link="quota === 'Faktur penjualan'" line-height="md" @click.native="isCheckoutModalAddQuotaOpen = true">
                              {{ quota }}
                            </mp-text>
                            <mp-text font-size="sm" color="gray.600" v-if="quota === 'Faktur penjualan'">Bulanan</mp-text>
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row">
                            <mp-text text-align="right">Rp99.000</mp-text>
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row">
                            <mp-box width="131px">
                              <InputCounter />
                            </mp-box>
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row">
                            <mp-flex align-items="center">
                              <mp-text mr="1">3,6 bulan</mp-text>
                              <mp-tooltip label="Durasi mengikuti sisa periode paket aktif Anda.">
                                <mp-icon name="info" size="sm" />
                              </mp-tooltip>
                            </mp-flex>

                            <mp-text font-size="sm" color="gray.600" v-if="quota === 'Faktur penjualan'"> 10 Okt 2022 – 2 Nov 2022 </mp-text>
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row">
                            <mp-text text-align="right">Rp356.400</mp-text>
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row">
                            <mp-flex justify="flex-end">
                              <mp-button-icon name="minus-circular" @click="handleDelete(quota)" />
                            </mp-flex>
                          </mp-table-cell>
                        </mp-table-row>
                        <mp-table-row v-if="quotas.length < 3">
                          <mp-table-cell as="td" scope="row" colspan="6">
                            <mp-popover id="tambah-lainnya" ref="tambah-lainnya">
                              <mp-popover-trigger>
                                <mp-button variant="outline">
                                  <mp-icon name="add-circular" variant="duotone" size="sm" mr="2" />
                                  Tambah lainnya
                                </mp-button>
                              </mp-popover-trigger>

                              <mp-popover-content
                                min-width="166px"
                                width="fit-content"
                                maxWidth="600px"
                                bg="white"
                                rounded="sm"
                                shadow="lg"
                                border-width="1px"
                                border-color="gray.400"
                              >
                                <mp-popover-list>
                                  <mp-popover-list-item @click="handleAdd('Faktur penjualan')" v-if="!quotas.includes('Faktur penjualan')"
                                    >Faktur penjualan</mp-popover-list-item
                                  >
                                  <mp-popover-list-item @click="handleAdd('Gudang')" v-if="!quotas.includes('Gudang')">Gudang</mp-popover-list-item>
                                  <mp-popover-list-item @click="handleAdd('Pengguna tambahan')" v-if="!quotas.includes('Pengguna tambahan')"
                                    >Pengguna tambahan</mp-popover-list-item
                                  >
                                </mp-popover-list>
                              </mp-popover-content>
                            </mp-popover>
                          </mp-table-cell>
                        </mp-table-row>
                        <mp-table-row>
                          <mp-table-cell as="td" scope="row" colspan="3" border-bottom-color="transparent"> </mp-table-cell>
                          <mp-table-cell as="td" scope="row" border-bottom-color="transparent">
                            <mp-flex>
                              <mp-text font-weight="semibold">Subtotal</mp-text>
                            </mp-flex>
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row" border-bottom-color="transparent">
                            <mp-text font-weight="semibold">Rp712.800</mp-text>
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row" border-bottom-color="transparent"> </mp-table-cell>
                        </mp-table-row>
                      </mp-table-body>
                    </mp-table>
                  </mp-table-container>
                </mp-box>
              </mp-stack>
            </mp-grid-item>
            <mp-grid-item col-span="3">
              <mp-box border-width="1px" p="6" bg="white" rounded="sm">
                <mp-text font-weight="semibold" font-size="lg">Rincian pembayaran</mp-text>

                <mp-box mt="5">
                  <mp-stack spacing="4" mt="5">
                    <mp-flex justify="space-between">
                      <mp-text color="gray.600"> Subtotal </mp-text>
                      <mp-text> Rp712.800 </mp-text>
                    </mp-flex>

                    <mp-flex justify="space-between">
                      <mp-text color="gray.600"> PPN </mp-text>
                      <mp-text> Rp78.408 </mp-text>
                    </mp-flex>

                    <mp-flex justify="space-between">
                      <mp-text color="gray.600"> Kredit </mp-text>
                      <mp-text> (Rp0) </mp-text>
                    </mp-flex>

                    <mp-divider />

                    <mp-flex justify="space-between">
                      <mp-text font-weight="semibold"> Total pembayaran </mp-text>
                      <mp-text font-weight="semibold"> Rp791.208 </mp-text>
                    </mp-flex>
                  </mp-stack>

                  <mp-box mt="5">
                    <mp-flex align-items="flex-start">
                      <mp-checkbox id="accept" />
                      <mp-box ml="3">
                        <mp-text line-height="md">
                          Saya telah membaca dan menyetujui <mp-text as="span" is-link> Syarat & Ketentuan </mp-text> yang berlaku.
                        </mp-text>
                      </mp-box>
                    </mp-flex>
                  </mp-box>

                  <mp-flex justify="end" mt="5">
                    <mp-button-group>
                      <mp-button variant="ghost" @click="isPromptOpen = true">Kembali</mp-button>
                      <mp-button>Bayar</mp-button>
                    </mp-button-group>
                  </mp-flex>
                </mp-box>
              </mp-box>
            </mp-grid-item>
          </mp-grid>
        </mp-box>
      </mp-box>

      <CheckoutModalAddQuota :is-open="isCheckoutModalAddQuotaOpen" @handleClose="handleCloseModalAddQuota" @handleAdd="handleAddModalAddQuota" />
      <ModalPrompt
        :is-open="isPromptOpen"
        header-text="Kuota tambahan akan dibatalkan"
        message-text="Anda akan meninggalkan halaman ini dan data kuota tambahan yang sudah diisi akan dihapus."
        @handle-close="isPromptOpen = false"
        @handle-primary-action="isPromptOpen = false"
        @handle-secondary-action="$router.push('/')"
      />
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpGrid,
  MpGridItem,
  MpStack,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpButtonGroup,
  MpButton,
  MpIcon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpCheckbox,
  MpDivider,
  MpTooltip,
  MpButtonIcon,
} from "@mekari/pixel";
import Header from "../../components/Header";
import InputCounter from "../../components/InputCounter.vue";
import CheckoutModalAddQuota from "./CheckoutModalAddQuota.vue";
import ModalPrompt from "../ModalPrompt.vue";

export default {
  name: "CheckoutAddQuotaView",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpGrid,
    MpGridItem,
    MpStack,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpButtonGroup,
    MpButton,
    MpIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpCheckbox,
    MpDivider,
    MpTooltip,
    MpButtonIcon,
    //
    Header,
    InputCounter,
    CheckoutModalAddQuota,
    ModalPrompt,
  },
  mounted() {
    const query = this.$route.query;

    if (query.for === "faktur-penjualan") {
      this.handleAdd("Faktur penjualan");
    }

    if (query.for === "gudang") {
      this.handleAdd("Gudang");
    }

    if (query.for === "pengguna-tambahan") {
      this.handleAdd("Pengguna tambahan");
    }
  },
  data() {
    return {
      quotas: [],
      isCheckoutModalAddQuotaOpen: false,
      isPromptOpen: false,
    };
  },
  methods: {
    handleAdd(name) {
      this.quotas.push(name);

      if (this.$refs["tambah-lainnya"]?._isOpen) this.$refs["tambah-lainnya"]?.closePopover();
    },
    handleDelete(name) {
      this.quotas.splice(name, 1);
    },
    handleAddModalAddQuota() {
      this.isCheckoutModalAddQuotaOpen = false;
    },
    handleCloseModalAddQuota() {
      this.isCheckoutModalAddQuotaOpen = false;
    },
  },
};
</script>
