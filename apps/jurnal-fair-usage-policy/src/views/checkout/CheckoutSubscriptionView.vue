<template>
  <mp-box position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="background" padding="6" max-width="6xl" mr="auto" ml="auto">
          <mp-heading>Mulai berlangganan</mp-heading>

          <mp-grid templateColumns="repeat(12, 1fr)" mt="6" gap="6">
            <mp-grid-item col-span="8">
              <mp-stack spacing="4">
                <mp-box border-width="1px" p="6" bg="white" rounded="md">
                  <mp-grid templateColumns="repeat(5, 1fr)">
                    <mp-grid-item>
                      <mp-text font-size="lg" font-weight="semibold">Paket Anda</mp-text>
                    </mp-grid-item>
                    <mp-grid-item col-span="4">
                      <mp-text font-size="lg" font-weight="semibold">Pro (Aktif hingga 31 Des 2022)</mp-text>
                    </mp-grid-item>
                  </mp-grid>

                  <mp-grid templateColumns="repeat(5, 1fr)" mt="5">
                    <mp-grid-item col-start="2" col-end="4">
                      <mp-text color="gray.600" font-weight="semibold">Gratis</mp-text>
                      <mp-box as="ul" list-style-position="inside">
                        <mp-text as="li" color="gray.600"> Pengguna: 3 dari 3 pengguna</mp-text>
                        <mp-text as="li" color="gray.600"> Jurnal touch: 1 dari 1 device</mp-text>
                        <mp-text as="li" color="gray.600"> Moka add-ons: 1 dari 1 koneksi</mp-text>
                      </mp-box>
                    </mp-grid-item>
                    <mp-grid-item col-span="2">
                      <mp-text color="gray.600" font-weight="semibold">Tambahan</mp-text>
                      <mp-box as="ul" list-style-position="inside">
                        <mp-text as="li" color="gray.600"> Pengguna: 1 pengguna</mp-text>
                        <mp-text as="li" color="gray.600"> Partner: 1 partner</mp-text>
                        <mp-text as="li" color="gray.600"> Jurnal Touch: 1 device</mp-text>
                        <mp-text as="li" color="gray.600"> Moka Add-Ons: 1 koneksi</mp-text>
                      </mp-box>
                    </mp-grid-item>
                  </mp-grid>
                </mp-box>

                <mp-box border-width="1px" p="6" bg="white" rounded="md">
                  <mp-flex justify="space-between" mb="5">
                    <mp-text font-size="lg" font-weight="semibold">Langganan Jurnal (01 Jan 2020 – 31 Des 2020)</mp-text>
                    <mp-text is-link>Bandingkan Paket</mp-text>
                  </mp-flex>

                  <mp-box>
                    <mp-table :is-hoverable="false">
                      <mp-table-head bg="gray.50">
                        <mp-table-row>
                          <mp-table-cell as="th" scope="col" width="162px"> Nama </mp-table-cell>
                          <mp-table-cell as="th" scope="col"> Harga satuan </mp-table-cell>
                          <mp-table-cell as="th" scope="col"> Jumlah </mp-table-cell>
                          <mp-table-cell as="th" scope="col" width="172px"> Durasi </mp-table-cell>
                          <mp-table-cell as="th" scope="col"> Total harga </mp-table-cell>
                          <mp-table-cell v-if="penggunaTambahan" as="th" scope="col"> </mp-table-cell>
                        </mp-table-row>
                      </mp-table-head>
                      <mp-table-body>
                        <mp-table-row>
                          <mp-table-cell as="td" scope="row">
                            <mp-autocomplete
                              :data="['Pro', 'Enterprise', 'Enterprise+']"
                              :content-style="{ minWidth: 'full', width: 'fit-content', maxWidth: '600px' }"
                            />
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row"> Rp99.000 </mp-table-cell>
                          <mp-table-cell as="td" scope="row"> 1 </mp-table-cell>
                          <mp-table-cell as="td" scope="row">
                            <mp-autocomplete
                              :data="['1 Bulan', '3 Bulan', '6 Bulan', '12 Bulan']"
                              :content-style="{ minWidth: 'full', width: 'fit-content', maxWidth: '600px' }"
                            />
                          </mp-table-cell>
                          <mp-table-cell as="td" scope="row"> Rp100.356.400 </mp-table-cell>
                          <mp-table-cell as="td" scope="row" v-if="penggunaTambahan"> </mp-table-cell>
                        </mp-table-row>
                        <mp-table-row v-if="penggunaTambahan">
                          <mp-table-cell as="td" scope="row">
                            <mp-text line-height="md"> Pengguna Tambahan </mp-text>
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
                              <mp-button-icon name="minus-circular" @click="handleRemovePenggunaTambahan" />
                            </mp-flex>
                          </mp-table-cell>
                        </mp-table-row>
                        <mp-table-row v-if="!penggunaTambahan" key="tambah-lainnya">
                          <mp-table-cell as="td" scope="row" colspan="5">
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
                            <mp-text font-weight="semibold">Rp555.400</mp-text>
                          </mp-table-cell>
                        </mp-table-row>
                      </mp-table-body>
                    </mp-table>
                  </mp-box>
                </mp-box>

                <mp-box border-width="1px" p="6" bg="white" rounded="md">
                  <mp-form-control control-id="metode-pembyaran">
                    <mp-form-label>Metode pembayaran</mp-form-label>
                    <mp-radio-group v-model="paymentMethod" name="metode-pembyaran" spacing="6" is-inline>
                      <mp-radio id="kartu-kredit" value="kartu-kredit"> Kartu kredit </mp-radio>
                      <mp-radio id="metode-lainnya" value="metode-lainnya">
                        Metode lainnya

                        <mp-tooltip id="ezsCsI" position="right" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                          <mp-icon name="info" ml="1" size="sm" />
                        </mp-tooltip>
                      </mp-radio>
                    </mp-radio-group>
                  </mp-form-control>

                  <mp-grid templateColumns="repeat(3, 1fr)" gap="10" mt="5">
                    <mp-box>
                      <mp-form-control>
                        <mp-form-label>Nomor kartu kredit</mp-form-label>
                        <mp-input-group>
                          <mp-input-left-addon :with-background="false">
                            <mp-box mr="3">
                              <img src="../../assets/visa.png" alt="" />
                            </mp-box>
                          </mp-input-left-addon>
                          <mp-input />
                        </mp-input-group>
                      </mp-form-control>
                    </mp-box>

                    <mp-box>
                      <mp-text font-weight="semibold" text-align="right">Tagihan per bulan</mp-text>
                      <mp-text mt="1" text-align="right">Rp599.000</mp-text>
                    </mp-box>

                    <mp-box>
                      <mp-text font-weight="semibold">Tagihan berikutnya</mp-text>
                      <mp-text mt="1">1 Jan 2021</mp-text>
                    </mp-box>
                  </mp-grid>

                  <mp-box mt="5">
                    <mp-text font-weight="semibold">Persetujuan penagihan otomatis</mp-text>
                    <mp-box p="3.2" bg="orange.50" rounded="md">
                      <mp-checkbox id="persetujuan-penagihan-otomatis">
                        Saya mengizinkan pihak Jurnal untuk mengenakan pembayaran otomatis terhadap kartu kredit saya.
                      </mp-checkbox>

                      <mp-text ml="6" mt="2"> Butuh info pembatalan atau modifikasi izin ini? <mp-text as="span" is-link>Hubungi tim Jurnal</mp-text> </mp-text>
                    </mp-box>
                  </mp-box>
                </mp-box>
              </mp-stack>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <mp-box border-width="1px" p="4" bg="white" rounded="md">
                <mp-text font-weight="semibold">Rincian pembayaran</mp-text>

                <mp-box mt="5">
                  <mp-form-control is-disabled>
                    <mp-form-label>Kode referral</mp-form-label>
                    <mp-input value="REFER51243" />
                  </mp-form-control>

                  <mp-flex align-items="center" bg="green.50" p="3" rounded="md" mt="2">
                    <mp-icon name="done" variant="fill" color="green.400" mr="3" />
                    <mp-text font-weight="semibold">
                      <mp-text as="span" color="blue.400" font-weight="semibold">Diskon 15%</mp-text> berhasil didapatkan</mp-text
                    >
                  </mp-flex>

                  <mp-stack spacing="5" mt="5">
                    <mp-flex justify="space-between">
                      <mp-text color="gray.600"> Subtotal </mp-text>
                      <mp-text> Rp7.188.000 </mp-text>
                    </mp-flex>

                    <mp-flex justify="space-between">
                      <mp-text color="gray.600"> PPN </mp-text>
                      <mp-text> Rp788.000 </mp-text>
                    </mp-flex>

                    <mp-flex justify="space-between">
                      <mp-text color="gray.600"> Kredit </mp-text>
                      <mp-text> (Rp0) </mp-text>
                    </mp-flex>

                    <mp-flex justify="space-between">
                      <mp-text color="gray.600"> Diskon referral </mp-text>
                      <mp-text> (Rp488.000) </mp-text>
                    </mp-flex>

                    <mp-divider />

                    <mp-flex justify="space-between">
                      <mp-text font-weight="semibold"> Total pembayaran </mp-text>
                      <mp-text color="gray.600" font-weight="semibold"> Rp8.383.600 </mp-text>
                    </mp-flex>

                    <mp-flex justify="end">
                      <mp-text font-weight="semibold"> Rp7.900.000 </mp-text>
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
  MpHeading,
  MpGrid,
  MpGridItem,
  MpStack,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpAutocomplete,
  MpButtonGroup,
  MpButton,
  MpButtonIcon,
  MpIcon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpFormControl,
  MpFormLabel,
  MpRadioGroup,
  MpRadio,
  MpTooltip,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpCheckbox,
  MpDivider,
} from "@mekari/pixel";
import Header from "../../components/Header";
import InputCounter from "@/components/InputCounter.vue";

export default {
  name: "CheckoutSubscriptionView",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpGrid,
    MpGridItem,
    MpStack,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpAutocomplete,
    MpButtonGroup,
    MpButton,
    MpButtonIcon,
    MpIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpFormControl,
    MpFormLabel,
    MpRadioGroup,
    MpRadio,
    MpTooltip,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpCheckbox,
    MpDivider,
    //
    Header,
    InputCounter,
  },
  data() {
    return {
      penggunaTambahan: false,
      paymentMethod: "kartu-kredit",
    };
  },
  methods: {
    handleAddPenggunaTambahan() {
      this.penggunaTambahan = true;
    },
    handleRemovePenggunaTambahan() {
      this.penggunaTambahan = false;
    },
  },
};
</script>
