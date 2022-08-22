<template>
  <mp-box position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeader />

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-grid template-columns="repeat(12, 1fr)" gap="6">
            <mp-grid-item col-span="6">
              <mp-flex direction="column" gap="3">
                <mp-form-control control-id="nama">
                  <mp-form-label>Nama <mp-text ml="1" color="red.500">*</mp-text> </mp-form-label>
                  <mp-input />
                </mp-form-control>

                <mp-box>
                  <mp-form-control control-id="Kode/SKU">
                    <mp-form-label>Kode/SKU</mp-form-label>
                    <mp-grid template-columns="repeat(2, 1fr)" gap="6" align-content="center">
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
                  <mp-radio-group v-model="jenisBarang" name="jenis-barang" spacing="6" is-inline>
                    <mp-radio id="zDhWJ" value="single"> Single </mp-radio>
                    <mp-radio id="gapqH" value="bundle"> Bundle </mp-radio>
                  </mp-radio-group>
                </mp-form-control>
              </mp-flex>
            </mp-grid-item>
            <mp-grid-item col-span="2">
              <mp-flex v-if="imageUrl">
                <mp-box border="1px" border-color="gray.100" rounded="md" position="relative" mb="2">
                  <mp-box as="img" h="176px" w="176px" rounded="md" :src="imageUrl" alt="" />

                  <mp-box position="absolute" top="-12px" right="-12px" as="button" bg="white" rounded="full" p="1px" @click="handleClear">
                    <mp-tooltip label="Hapus" width="53px" position="right">
                      <mp-icon name="minus-circular" variant="fill" color="blue.400" />
                    </mp-tooltip>
                  </mp-box>
                </mp-box>
              </mp-flex>

              <mp-flex v-else h="176px" w="176px" bg="background" rounded="md" direction="column" gap="2" align="center" justify="center" px="4">
                <mp-icon name="img" size="lg" />
                <mp-text for="image-upload" as="label" color="blue.400" cursor="pointer">
                  <mp-text as="span">Pilih foto produk</mp-text>
                  <input id="image-upload" name="image-upload" type="file" class="sr-only" @change="handleUpload" />
                </mp-text>
                <mp-text font-size="sm" color="gray.400" text-align="center"> Gunakan format harus JPG atau PNG & ukuran tidak lebih dari 2 MB </mp-text>
              </mp-flex>
            </mp-grid-item>
          </mp-grid>

          <mp-grid template-columns="repeat(12, 1fr)">
            <mp-grid-item col-span="8">
              <mp-box mt="4">
                <mp-tabs id="create-product-tab" :index="selectedTab" is-manual @change.self="handleChangeTab">
                  <mp-tab-list>
                    <mp-tab>Harga & pengaturan</mp-tab>
                    <mp-tab :disabled="jenisBarang === 'single'">Produk bundle</mp-tab>
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
                                    <mp-tooltip
                                      id="tooltip-akun-pembelian"
                                      :label="single.beli.akun.value"
                                      :visibility="single.beli.akun.isTruncate ? 'visible' : 'hidden'"
                                    >
                                      <mp-autocomplete
                                        id="akun-pembelian"
                                        :data="[
                                          '(5-50000) - Beban pokok pendapatan tetap anggaran tahunan',
                                          '(5-50001) - Beban pokok pendapatan tetap anggaran tahunan',
                                          '(5-50002) - Beban pokok pendapatan tetap anggaran tahunan',
                                          '(5-50003) - Beban',
                                        ]"
                                        :content-style="{ width: 'full' }"
                                        v-model="single.beli.akun.value"
                                        @change="(value) => handleChangeAutocomplete(value, { elementId: 'akun-pembelian', target: 'beli', column: 'akun' })"
                                      />
                                    </mp-tooltip>
                                  </mp-table-cell>
                                  <mp-table-cell as="td" scope="row">
                                    <mp-tooltip
                                      id="tooltip-pajak-beli"
                                      :label="single.beli.pajak.value"
                                      :visibility="single.beli.pajak.isTruncate ? 'visible' : 'hidden'"
                                    >
                                      <mp-autocomplete
                                        id="pajak-beli"
                                        :data="['PPN 10%', 'PPN 11%', 'Tidak kena pajak']"
                                        :content-style="{ width: 'full' }"
                                        v-model="single.beli.pajak.value"
                                        @change="(value) => handleChangeAutocomplete(value, { elementId: 'pajak-beli', target: 'beli', column: 'pajak' })"
                                      />
                                    </mp-tooltip>
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
                                    <mp-tooltip
                                      id="tooltip-akun-penjualan"
                                      :label="single.jual.akun.value"
                                      :visibility="single.jual.akun.isTruncate ? 'visible' : 'hidden'"
                                    >
                                      <mp-autocomplete
                                        id="akun-penjualan"
                                        :data="[
                                          '(5-50000) - Beban pokok pendapatan tetap anggaran tahunan',
                                          '(5-50001) - Beban pokok pendapatan tetap anggaran tahunan',
                                          '(5-50002) - Beban pokok pendapatan tetap anggaran tahunan',
                                          '(5-50003) - Beban',
                                        ]"
                                        :content-style="{ width: 'full' }"
                                        isSearchable
                                        v-model="single.jual.akun.value"
                                        @change="(value) => handleChangeAutocomplete(value, { elementId: 'akun-penjualan', target: 'jual', column: 'akun' })"
                                      />
                                    </mp-tooltip>
                                  </mp-table-cell>
                                  <mp-table-cell as="td" scope="row">
                                    <mp-tooltip
                                      id="tooltip-pajak-jual"
                                      :label="single.jual.pajak.value"
                                      :visibility="single.jual.pajak.isTruncate ? 'visible' : 'hidden'"
                                    >
                                      <mp-autocomplete
                                        id="pajak-jual"
                                        :data="['PPN 10%', 'PPN 11%', 'Tidak kena pajak']"
                                        :content-style="{ width: 'full' }"
                                        v-model="single.jual.pajak.value"
                                        @change="(value) => handleChangeAutocomplete(value, { elementId: 'pajak-jual', target: 'jual', column: 'pajak' })"
                                      />
                                    </mp-tooltip>
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
                                    <mp-tooltip
                                      id="tooltip-akun-persediaan"
                                      :label="single.persediaan.akun.value"
                                      :visibility="single.persediaan.akun.isTruncate ? 'visible' : 'hidden'"
                                    >
                                      <mp-autocomplete
                                        id="akun-persediaan"
                                        :data="[
                                          '(1-10200) - Persediaan Barang',
                                          '(1-10201) - Persediaan Barang',
                                          '(1-10202) - Persediaan Barang',
                                          '(1-10202) - Persediaan Barang Dagang Luar Negeri',
                                        ]"
                                        :content-style="{ width: 'full' }"
                                        v-model="single.persediaan.akun.value"
                                        @change="
                                          (value) => handleChangeAutocomplete(value, { elementId: 'akun-persediaan', target: 'persediaan', column: 'akun' })
                                        "
                                      />
                                    </mp-tooltip>
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
                      <mp-grid gap="6">
                        <TableCreateProductBundle />
                        <TableCreateAccount />
                      </mp-grid>
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
            </mp-grid-item>
          </mp-grid>
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
  MpInput,
  MpTextarea,
  MpGrid,
  MpGridItem,
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
    MpInput,
    MpTextarea,
    MpGrid,
    MpGridItem,
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

      single: {
        beli: {
          harga: { value: "", isTruncated: "" },
          akun: { value: "", isTruncated: "" },
          pajak: { value: "", isTruncated: "" },
        },
        jual: {
          harga: { value: "", isTruncated: "" },
          akun: { value: "", isTruncated: "" },
          pajak: { value: "", isTruncated: "" },
        },
        persediaan: {
          stock: { value: "", isTruncated: "" },
          akun: { value: "", isTruncated: "" },
        },
      },
    };
  },
  methods: {
    handleChangeTab(e) {
      this.selectedTab = e;
    },
    handleChangeAutocomplete(value, { elementId, target, column }) {
      const isTruncated = this.isAutocompleteTruncated({ text: value, elementId: elementId });
      this.single[target][column].isTruncate = isTruncated;
    },
    handleUpload(e) {
      console.log(e.target.files);
      this.imageUrl = URL.createObjectURL(e.target.files[0]);
      this.showSuccessToast();
    },
    handleClear() {
      this.imageUrl = "";
    },
    showSuccessToast() {
      this.$toast({
        variant: "success",
        title: "Gambar produk berhasil di upload",
        position: "top",
      });
    },

    // Utils
    isAutocompleteTruncated({ text, elementId }) {
      const element = document.getElementById(elementId);
      console.log(element);

      const tempNode = document.createElement("div");
      tempNode.setAttribute("id", "temp-node");
      tempNode.innerHTML = `<p id="temp-node-text" style="max-width: ${
        element.offsetWidth - 58
      }px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"> ${text} </p>`;

      const body = document.getElementsByTagName("body")[0];
      body.appendChild(tempNode);
      const tempNodeElement = document.getElementById("temp-node-text");
      console.log(tempNodeElement);

      const isTruncated = tempNodeElement.offsetWidth < tempNodeElement.scrollWidth;
      console.log(tempNodeElement.offsetWidth, tempNodeElement.scrollWidth);

      document.getElementById("temp-node").remove();
      return isTruncated;
    },
  },
};
</script>

<style>
tbody > tr {
  white-space: normal !important;
}

tbody > tr > td {
  height: auto !important;
  padding-top: 0.875rem !important;
  padding-bottom: 0.875rem !important;
  vertical-align: center !important;
}

input {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
