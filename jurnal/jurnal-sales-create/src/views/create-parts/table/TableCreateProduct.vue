<template>
  <div>
    <mp-table-container overflow-x="auto" has-shadow>
      <mp-table :isHoverable="false">
        <mp-table-head>
          <mp-table-row>
            <mp-table-cell as="th" scope="col" width="226px">Produk*</mp-table-cell>
            <mp-table-cell as="th" scope="col" width="210px">Deskripsi</mp-table-cell>
            <mp-table-cell as="th" scope="col" width="100px">Kuantitas</mp-table-cell>
            <mp-table-cell as="th" scope="col" width="124px">Unit</mp-table-cell>
            <mp-table-cell as="th" scope="col" width="180px" text-align="right">Harga satuan</mp-table-cell>
            <mp-table-cell as="th" scope="col" width="140px">Diskon</mp-table-cell>
            <mp-table-cell as="th" scope="col" width="120px">Pajak</mp-table-cell>
            <mp-table-cell as="th" scope="col" width="180px" text-align="right">Jumlah</mp-table-cell>
            <mp-table-cell as="th" scope="col"></mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row v-for="(value, index) in products" :key="index">
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-form-control width="226px">
                <mp-autocomplete
                  use-portal
                  is-clearable
                  :content-style="{ zIndex: 'popover', width: 'max-content', maxWidth: '90vw', minWidth: '226px' }"
                  :id="`pilih-product-${index}`"
                  placeholder="Pilih produk"
                  :data="['Macbook Pro M1', 'Macbook Air M1', 'iPhone 13 Pro Max 256GB', 'iPhone 13 Pro 256GB', 'iPhone 13 256GB', 'iPad Pro Max 1TB']"
                  :value="products[index]"
                  is-show-button-action
                >
                  <template #button-action> Tambah produk </template>
                </mp-autocomplete>
              </mp-form-control>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-flex flex-direction="column">
                <mp-form-control>
                  <mp-textarea
                    rows="1"
                    min-width="210px"
                    height="36px"
                    min-height="36px"
                    max-height="32"
                    resize="vertical"
                    transition-property="box-shadow, border-color"
                  />
                </mp-form-control>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-flex flex-direction="column">
                <mp-form-control>
                  <mp-input type="number" />
                </mp-form-control>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-form-control>
                <mp-autocomplete
                  use-portal
                  :style="{ minWidth: '109px', width: '100%' }"
                  :id="`unit-${index}`"
                  :data="['Unit', 'Pcs']"
                  :content-style="{ zIndex: 'popover', width: '109px' }"
                />
              </mp-form-control>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-tooltip>
                <mp-form-control>
                  <mp-input-group>
                    <mp-input-left-addon>
                      <mp-text px="2" font-weight="semibold">Rp</mp-text>
                    </mp-input-left-addon>
                    <mp-input text-align="right" />
                  </mp-input-group>
                </mp-form-control>

                <template #label>
                  <mp-text color="white"> Average price = Rp14.000.000,00/unit </mp-text>
                  <mp-text color="white"> Last buy = Rp14.000.000,00/unit </mp-text>
                  <mp-text color="green.500">Profit margin = 10.00%</mp-text>
                </template>
              </mp-tooltip>

              <mp-text font-size="sm" color="gray.600" mt="1">
                Aturan harga tersedia <mp-text as="span" font-size="sm" is-link @click.native="isModalPriceRuleOpen = true">pilih</mp-text>
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-flex flex-direction="column">
                <mp-input-group>
                  <mp-input-left-addon>
                    <mp-text px="2" font-weight="semibold">%</mp-text>
                  </mp-input-left-addon>
                  <mp-input text-align="right" />
                </mp-input-group>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-form-control>
                <mp-autocomplete
                  use-portal
                  :style="{ minWidth: '109px', width: '100%' }"
                  :data="['10%', '11%']"
                  :content-style="{ zIndex: 'popover', width: '109px' }"
                />
              </mp-form-control>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-form-control>
                <mp-input-group>
                  <mp-input-left-addon>
                    <mp-text px="2" font-weight="semibold">Rp</mp-text>
                  </mp-input-left-addon>
                  <mp-input text-align="right" />
                </mp-input-group>
              </mp-form-control>
            </mp-table-cell>

            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-flex justify-content="flex-end">
                <mp-tooltip label="Hapus" :id="`delete-product-${index}`">
                  <mp-button-icon @click="products.splice(index, 1)" name="minus-circular" />
                </mp-tooltip>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>

          <mp-table-row>
            <mp-table-cell as="td" scope="row" colspan="9" vertical-align="center">
              <mp-form-control max-width="226px">
                <mp-autocomplete
                  use-portal
                  is-clearable
                  :content-style="{ zIndex: 'popover', width: 'max-content', maxWidth: '90vw', minWidth: '226px' }"
                  id="pilih-product"
                  placeholder="Pilih produk"
                  :data="[
                    'Macbook Pro M1',
                    'Macbook Air M1',
                    'iPhone 13 Pro Max 256GB',
                    'iPhone 13 Pro 256GB',
                    'iPhone 13 256GB',
                    'iPad Pro Max 1TB',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et justo in tellus fermentum venenatis.',
                  ]"
                  :value="select"
                  @change="handleSelect"
                  is-show-button-action
                >
                  <template #button-action> Tambah produk </template>
                </mp-autocomplete>
              </mp-form-control>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <ModalPriceRule :isOpen="isModalPriceRuleOpen" @handleClose="isModalPriceRuleOpen = false" />
  </div>
</template>

<script>
import {
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpFormControl,
  MpInput,
  MpAutocomplete,
  MpTextarea,
  MpFlex,
  MpButtonIcon,
  MpTooltip,
  MpInputGroup,
  MpInputLeftAddon,
  MpText,
} from "@mekari/pixel";
import ModalPriceRule from "../modal/ModalPriceRule.vue";

export default {
  components: {
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpFormControl,
    MpInput,
    MpAutocomplete,
    MpTextarea,
    MpFlex,
    MpButtonIcon,
    MpTooltip,
    MpInputGroup,
    MpInputLeftAddon,
    MpText,

    // Parts
    ModalPriceRule,
  },
  data() {
    return {
      select: "",
      products: [],
      isModalPriceRuleOpen: false,
    };
  },
  methods: {
    handleSelect(value) {
      console.log(value);
      this.select = value;
      this.products.push(value);

      setTimeout(() => {
        this.select = "";
      }, 0);
    },
  },
};
</script>
