<template>
  <mp-box position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="background" padding="6">
          <mp-grid templateColumns="repeat(12, 1fr)" mt="6" gap="6" max-width="6xl" mr="auto" ml="auto">
            <mp-grid-item col-span="8">
              <mp-stack spacing="4">
                <mp-box border-width="1px" p="6" bg="white" rounded="md">
                  <mp-box mb="5">
                    <mp-text font-size="lg" font-weight="semibold">Kuota tambahan</mp-text>
                  </mp-box>

                  <mp-box>
                    <mp-table :is-hoverable="false">
                      <mp-table-head bg="gray.50">
                        <mp-table-row>
                          <mp-table-cell as="th" scope="col" width="162px"> Nama </mp-table-cell>
                          <mp-table-cell as="th" scope="col"> Harga satuan </mp-table-cell>
                          <mp-table-cell as="th" scope="col" width="131px"> Jumlah </mp-table-cell>
                          <mp-table-cell as="th" scope="col"> Durasi </mp-table-cell>
                          <mp-table-cell as="th" scope="col"> Total harga </mp-table-cell>
                          <mp-table-cell as="th" scope="col" width="48px"> </mp-table-cell>
                        </mp-table-row>
                      </mp-table-head>
                      <mp-table-body>
                        <mp-table-row v-for="quota in quotas" :key="quota">
                          <mp-table-cell as="td" scope="row">
                            <mp-text :is-link="quota === 'Faktur penjualan'" line-height="md"> {{ quota }} </mp-text>
                            <mp-text font-size="sm" color="gray.600" v-if="quota === 'Faktur penjualan'">Bulanan</mp-text>
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row"> Rp99.000 </mp-table-cell>
                          <mp-table-cell as="td" scope="row">
                            <InputCounter />
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row">
                            <mp-flex>
                              <mp-text mr="1">3,6 bulan</mp-text>
                              <mp-tooltip label="Durasi mengikuti sisa periode paket aktif Anda.">
                                <mp-icon name="info" />
                              </mp-tooltip>
                            </mp-flex>
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row"> Rp356.400 </mp-table-cell>
                          <mp-table-cell as="td" scope="row">
                            <mp-flex justify="flex-end">
                              <mp-button-icon name="minus-circular" />
                            </mp-flex>
                          </mp-table-cell>
                        </mp-table-row>
                        <mp-table-row v-if="quotas.length < 3">
                          <mp-table-cell as="td" scope="row" colspan="6">
                            <mp-popover id="popover-03">
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
                                rounded="md"
                                shadow="lg"
                                border-width="1px"
                                border-color="gray.400"
                              >
                                <mp-popover-list>
                                  <mp-popover-list-item @click="handleAddPenggunaTambahan">Pengguna tambahan</mp-popover-list-item>
                                </mp-popover-list>
                              </mp-popover-content>
                            </mp-popover>
                          </mp-table-cell>
                        </mp-table-row>
                        <mp-table-row>
                          <mp-table-cell as="td" scope="row" colspan="3"> </mp-table-cell>
                          <mp-table-cell as="td" scope="row">
                            <mp-flex>
                              <mp-text font-weight="semibold">Subtotal</mp-text>
                            </mp-flex>
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row">
                            <mp-text font-weight="semibold">Rp712.800</mp-text>
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row"> </mp-table-cell>
                        </mp-table-row>
                      </mp-table-body>
                    </mp-table>
                  </mp-box>
                </mp-box>
              </mp-stack>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <mp-box border-width="1px" p="4" bg="white" rounded="md">
                <mp-text font-weight="semibold">Rincian pembayaran</mp-text>

                <mp-box mt="5">
                  <mp-stack spacing="5" mt="5">
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
                    <mp-checkbox> Saya telah membaca dan menyetujui Syarat & Ketentuan yang berlaku. </mp-checkbox>
                  </mp-box>

                  <mp-flex justify="end" mt="5">
                    <mp-button-group>
                      <mp-button variant="outline" as="router-link" to="/">Kembali</mp-button>
                      <mp-button>Bayar</mp-button>
                    </mp-button-group>
                  </mp-flex>
                </mp-box>
              </mp-box>
            </mp-grid-item>
          </mp-grid>
        </mp-box>
      </mp-box>
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
import InputCounter from "@/components/InputCounter.vue";

export default {
  name: "CheckoutAddQuotaView",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpGrid,
    MpGridItem,
    MpStack,
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
  },
  data() {
    return {
      quotas: ["Faktur penjualan", "Gudang"],
    };
  },
  methods: {
    handleAddPenggunaTambahan() {
      this.quotas.push("Pengguna Tambahan");
    },
  },
};
</script>
