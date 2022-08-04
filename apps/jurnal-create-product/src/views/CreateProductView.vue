<template>
  <mp-box position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeader />

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-flex direction="column" gap="3" max-width="476px">
            <mp-form-control control-id="upload-image">
              <mp-form-label>Gambar produk</mp-form-label>
              <mp-flex v-if="imageUrl">
                <mp-box border="1px" border-color="gray.100" p="4" rounded="md" position="relative" mb="2">
                  <mp-box as="img" w="40" h="40" :src="imageUrl" alt="" />

                  <mp-box position="absolute" top="-12px" right="-12px" as="button" bg="white" rounded="full" p="1px" @click="handleClearUrl">
                    <mp-tooltip label="Hapus" width="53px" position="right">
                      <mp-icon name="minus-circular" variant="fill" color="blue.400" />
                    </mp-tooltip>
                  </mp-box>
                </mp-box>
              </mp-flex>

              <mp-upload
                placeholder="Tidak ada file yang dipilih"
                :is-full-width="true"
                id="upload-image"
                :key="uploadKey"
                :change="handleUpload"
                @clear="handleClear"
              />
              <mp-form-help-text>Format file JPG atau PNG (maks. 2 MB)</mp-form-help-text>
            </mp-form-control>

            <mp-form-control control-id="nama">
              <mp-form-label>Nama <mp-text ml="1" color="red.500">*</mp-text> </mp-form-label>
              <mp-textarea rows="2" resize="none" />
            </mp-form-control>

            <mp-box>
              <mp-form-control control-id="Kode/SKU">
                <mp-form-label>Kode/SKU</mp-form-label>
                <mp-grid template-columns="repeat(2, 1fr)" gap="2" align-content="center">
                  <mp-input />
                  <mp-checkbox> Barcode </mp-checkbox>
                </mp-grid>
              </mp-form-control>
            </mp-box>

            <mp-form-control control-id="unit">
              <mp-form-label>Unit</mp-form-label>
              <mp-autocomplete id="pilih-unit" placeholder="Pilih unit" :data="['Pcs', 'Box', 'Unit']" :content-style="{ width: '64' }" />
            </mp-form-control>

            <mp-form-control control-id="kategori">
              <mp-form-label>Kategori (10)</mp-form-label>
              <mp-input-tag is-show-suggestions :suggestions="['Asus', 'Samsung', 'LG', 'Apple']" :content-style="{ width: '64' }" />
            </mp-form-control>

            <mp-form-control control-id="deskripsi">
              <mp-form-label>Deskripsi</mp-form-label>
              <mp-textarea resize="vertical" />
            </mp-form-control>

            <mp-form-control control-id="jenis-barang">
              <mp-form-label>Jenis Barang </mp-form-label>
              <mp-radio-group v-model="jenisBarang" @change="handleChangeJenisBarang" name="jenis-barang" spacing="6" is-inline>
                <mp-radio id="zDhWJ" value="single"> Single </mp-radio>
                <mp-radio id="gapqH" value="bundle"> Bundle </mp-radio>
              </mp-radio-group>
            </mp-form-control>
          </mp-flex>

          <mp-box max-width="876px" mt="4">
            <mp-tabs id="create-product-tab" :index="selectedTab" is-manual @change.self="handleChange">
              <mp-tab-list>
                <mp-tab>Harga & pengaturan</mp-tab>
                <mp-tab>Produk bundle</mp-tab>
              </mp-tab-list>
              <mp-tab-panels>
                <mp-tab-panel>
                  <mp-stack spacing="6">
                    <!-- Saya beli barang/jasa ini -->
                    <mp-box>
                      <mp-checkbox v-model="hargaDanPengaturan.buy"> Saya beli barang/jasa ini </mp-checkbox>
                      <mp-table-container v-if="hargaDanPengaturan.buy" mt="1">
                        <mp-table :is-hoverable="false">
                          <mp-table-head bg="gray.50">
                            <mp-table-row>
                              <mp-table-cell as="th" scope="col" width="252px"> Harga beli satuan </mp-table-cell>
                              <mp-table-cell as="th" scope="col"> Akun pembelian </mp-table-cell>
                              <mp-table-cell as="th" scope="col" width="180px"> Pajak beli </mp-table-cell>
                            </mp-table-row>
                          </mp-table-head>
                          <mp-table-body>
                            <mp-table-row>
                              <mp-table-cell as="td" scope="row">
                                <mp-input-group>
                                  <mp-input-left-addon>
                                    <mp-text font-weight="bold" padding-x="3"> Rp </mp-text>
                                  </mp-input-left-addon>
                                  <mp-input />
                                </mp-input-group>
                              </mp-table-cell>
                              <mp-table-cell as="td" scope="row">
                                <mp-autocomplete
                                  id="akun-pembelian"
                                  :data="[
                                    '(5-50000) - Beban pokok pendapatan tetap anggaran tahunan',
                                    '(5-50001) - Beban pokok pendapatan tetap anggaran tahunan',
                                    '(5-50002) - Beban pokok pendapatan tetap anggaran tahunan',
                                  ]"
                                  :content-style="{ width: 'full' }"
                                />
                              </mp-table-cell>
                              <mp-table-cell as="td" scope="row">
                                <mp-autocomplete id="pajak-beli" :data="['PPN 10%', 'PPN 11%', 'Tidak kena pajak']" :content-style="{ width: 'full' }" />
                              </mp-table-cell>
                            </mp-table-row>
                          </mp-table-body>
                        </mp-table>
                      </mp-table-container>
                    </mp-box>

                    <!-- Saya jual barang/jasa ini -->
                    <mp-box>
                      <mp-checkbox v-model="hargaDanPengaturan.sell"> Saya jual barang/jasa ini </mp-checkbox>
                      <mp-table-container v-if="hargaDanPengaturan.sell" mt="1">
                        <mp-table :is-hoverable="false">
                          <mp-table-head bg="gray.50">
                            <mp-table-row>
                              <mp-table-cell as="th" scope="col" width="252px"> Harga jual satuan </mp-table-cell>
                              <mp-table-cell as="th" scope="col"> Akun penjualan </mp-table-cell>
                              <mp-table-cell as="th" scope="col" width="180px"> Pajak jual </mp-table-cell>
                            </mp-table-row>
                          </mp-table-head>
                          <mp-table-body>
                            <mp-table-row>
                              <mp-table-cell as="td" scope="row">
                                <mp-input-group>
                                  <mp-input-left-addon>
                                    <mp-text font-weight="bold" padding-x="3"> Rp </mp-text>
                                  </mp-input-left-addon>
                                  <mp-input />
                                </mp-input-group>
                              </mp-table-cell>
                              <mp-table-cell as="td" scope="row">
                                <mp-autocomplete
                                  id="akun-pembelian"
                                  :data="[
                                    '(5-50000) - Beban pokok pendapatan tetap anggaran tahunan',
                                    '(5-50001) - Beban pokok pendapatan tetap anggaran tahunan',
                                    '(5-50002) - Beban pokok pendapatan tetap anggaran tahunan',
                                  ]"
                                  :content-style="{ width: 'full' }"
                                />
                              </mp-table-cell>
                              <mp-table-cell as="td" scope="row">
                                <mp-autocomplete id="pajak-beli" :data="['PPN 10%', 'PPN 11%', 'Tidak kena pajak']" :content-style="{ width: 'full' }" />
                              </mp-table-cell>
                            </mp-table-row>
                          </mp-table-body>
                        </mp-table>
                      </mp-table-container>
                    </mp-box>

                    <!-- Monitor persediaan barang -->
                    <mp-box>
                      <mp-checkbox v-model="hargaDanPengaturan.monitorPersediaan"> Monitor persediaan barang </mp-checkbox>

                      <mp-table-container v-if="hargaDanPengaturan.monitorPersediaan">
                        <mp-table :is-hoverable="false">
                          <mp-table-head bg="gray.50">
                            <mp-table-row>
                              <mp-table-cell as="th" scope="col" width="252px"> Batas stok minimum </mp-table-cell>
                              <mp-table-cell as="th" scope="col"> Akun persediaaan barang default </mp-table-cell>
                              <mp-table-cell as="th" scope="col" width="180px"> </mp-table-cell>
                            </mp-table-row>
                          </mp-table-head>
                          <mp-table-body>
                            <mp-table-row>
                              <mp-table-cell as="td" scope="row">
                                <mp-input />
                              </mp-table-cell>
                              <mp-table-cell as="td" scope="row">
                                <mp-autocomplete
                                  id="akun-persediaan"
                                  :data="['(1-10200) - Persediaan Barang', '(1-10201) - Persediaan Barang', '(1-10202) - Persediaan Barang']"
                                  :content-style="{ width: 'full' }"
                                />
                              </mp-table-cell>
                              <mp-table-cell as="td" scope="row"> </mp-table-cell>
                            </mp-table-row>
                          </mp-table-body>
                        </mp-table>

                        <mp-text font-size="sm" color="gray.400" mt="4">Kuantitas awal dapat dicatat melalui stok opname</mp-text>
                      </mp-table-container>
                    </mp-box>
                  </mp-stack>
                </mp-tab-panel>
                <mp-tab-panel>
                  <mp-stack>
                    <TableCreateProductBundle />
                    <TableCreateAccount />
                  </mp-stack>
                </mp-tab-panel>
              </mp-tab-panels>
            </mp-tabs>

            <mp-flex justify="end">
              <mp-button-group spacing="2">
                <mp-button variant="ghost"> Batalkan </mp-button>
                <mp-button variant="solid"> Simpan </mp-button>
              </mp-button-group>
            </mp-flex>
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpText,
  MpBox,
  MpFlex,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpInput,
  MpUpload,
  MpTextarea,
  MpGrid,
  MpCheckbox,
  MpIcon,
  MpAutocomplete,
  MpInputTag,
  MpRadioGroup,
  MpRadio,
  MpTabs,
  MpTabList,
  MpTab,
  MpTabPanels,
  MpTabPanel,
  MpStack,
  MpTable,
  MpTableContainer,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpInputGroup,
  MpInputLeftAddon,
  MpButton,
  MpButtonGroup,
  MpTooltip,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "./SubHeader.vue";
import TableCreateProductBundle from "./TableCreateProductBundle.vue";
import TableCreateAccount from "./TableCreateAccount.vue";

export default {
  name: "SalesIndex",
  components: {
    MpText,
    MpBox,
    MpFlex,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpUpload,
    MpInput,
    MpTextarea,
    MpGrid,
    MpCheckbox,
    MpIcon,
    MpAutocomplete,
    MpInputTag,
    MpRadioGroup,
    MpRadio,
    MpTabs,
    MpTabList,
    MpTab,
    MpTabPanels,
    MpTabPanel,
    MpStack,
    MpTable,
    MpTableContainer,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpInputGroup,
    MpInputLeftAddon,
    MpButton,
    MpButtonGroup,
    MpTooltip,
    //
    Header,
    Sidebar,
    SubHeader,
    TableCreateProductBundle,
    TableCreateAccount,
  },
  data() {
    return {
      // Upload state
      imageUrl: "",
      uploadKey: 0,

      jenisBarang: "single",
      selectedTab: 0,
      hargaDanPengaturan: { beli: false, jual: false, monitorPersediaan: false },
    };
  },
  methods: {
    handleChange(e) {
      this.selectedTab = e;
      const jenisBarang = ["single", "bundle"];
      this.jenisBarang = jenisBarang[e];
    },
    handleChangeJenisBarang(e) {
      if (e === "single") this.selectedTab = 0;
      if (e === "bundle") this.selectedTab = 1;
    },
    handleUpload(e) {
      console.log(e.target.files);
      this.imageUrl = URL.createObjectURL(e.target.files[0]);
      this.showSuccessToast();
    },
    handleClear(e, files, clear) {
      console.log(e, files, clear);
      this.imageUrl = "";
      clear();
    },
    handleClearUrl() {
      this.imageUrl = "";
      this.uploadKey += 1;
    },
    showSuccessToast() {
      this.$toast({
        variant: "success",
        title: "Gambar produk berhasil di upload",
        position: "top",
      });
    },
  },
};
</script>
