<template>
  <mp-grid gap="6">
    <mp-table-container>
      <mp-table :is-hoverable="false">
        <mp-table-head bg="gray.50">
          <mp-table-row>
            <mp-table-cell as="th" scope="col" width="60%"> Product </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="10%"> Qty </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="30%" text-align="right"> Harga </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row v-for="(value, index) in products" :key="index">
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-flex flex-direction="column">
                <mp-form-control>
                  <mp-autocomplete
                    isClearable
                    :content-style="{ zIndex: 'popover', width: 'full' }"
                    :id="`pilih-product-${index}`"
                    placeholder="Pilih produk"
                    :data="['Macbook Pro M1', 'Macbook Air M1', 'iPhone 13 Pro Max 256GB', 'iPhone 13 Pro 256GB', 'iPhone 13 256GB', 'iPad Pro Max 1TB']"
                    :value="products[index]"
                  />
                </mp-form-control>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-flex flex-direction="column">
                <mp-form-control>
                  <mp-input type="number" min-width="16" width="16" />
                </mp-form-control>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-flex align="center" justify="end">
                <mp-text> Rp16.150.000 </mp-text>

                <mp-tooltip label="Hapus" :id="`delete-product-${index}`">
                  <mp-button-icon ml="2" @click="products.splice(index, 1)" name="minus-circular" />
                </mp-tooltip>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td" scope="row" vertical-align="center" :style="{ borderBottomColor: 'white' }">
              <mp-flex flex-direction="column">
                <mp-form-control>
                  <mp-autocomplete
                    isClearable
                    :content-style="{ zIndex: 'popover', width: 'full' }"
                    id="pilih-product"
                    placeholder="Pilih produk"
                    :data="['Macbook Pro M1', 'Macbook Air M1', 'iPhone 13 Pro Max 256GB', 'iPhone 13 Pro 256GB', 'iPhone 13 256GB', 'iPad Pro Max 1TB']"
                    :value="selectproduct"
                    @change="handleSelectProduct"
                  />
                </mp-form-control>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" :style="{ borderBottomColor: 'white' }"> </mp-table-cell>
            <mp-table-cell as="td" scope="row" :style="{ borderBottomColor: 'white' }"> </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <mp-table-container>
      <mp-table :is-hoverable="false">
        <mp-table-head bg="gray.50">
          <mp-table-row>
            <mp-table-cell as="th" scope="col" width="50%"> Akun </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="25%"> </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="25%" text-align="right"> Biaya </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row v-for="(value, index) in accounts" :key="index">
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-flex flex-direction="column">
                <mp-form-control>
                  <mp-autocomplete
                    isClearable
                    :content-style="{ zIndex: 'popover', width: 'full' }"
                    :id="`pilih-akun-${index}`"
                    placeholder="Pilih produk"
                    :data="[
                      '(5-50001) - Biaya bundling',
                      '(5-50002) - Biaya bundling',
                      '(5-50003) - Biaya bundling',
                      '(5-50004) - Biaya bundling',
                      '(5-50005) - Biaya bundling',
                      '(5-50006) - Biaya bundling',
                    ]"
                    :value="accounts[index]"
                  />
                </mp-form-control>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top"> </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-flex align="center" justify="end">
                <mp-input-group>
                  <mp-input-left-addon>
                    <mp-text font-weight="bold" padding-x="3"> Rp </mp-text>
                  </mp-input-left-addon>
                  <mp-input />
                </mp-input-group>

                <mp-tooltip label="Hapus" :id="`delete-account-${index}`">
                  <mp-button-icon ml="2" @click="accounts.splice(index, 1)" name="minus-circular" />
                </mp-tooltip>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td" scope="row" vertical-align="center">
              <mp-flex flex-direction="column">
                <mp-form-control>
                  <mp-autocomplete
                    isClearable
                    :content-style="{ zIndex: 'popover', width: 'full' }"
                    id="pilih-akun"
                    placeholder="Pilih produk"
                    :data="[
                      '(5-50001) - Biaya bundling',
                      '(5-50002) - Biaya bundling',
                      '(5-50003) - Biaya bundling',
                      '(5-50004) - Biaya bundling',
                      '(5-50005) - Biaya bundling',
                      '(5-50006) - Biaya bundling',
                    ]"
                    :value="selectaccount"
                    @change="handleSelectAccount"
                  />
                </mp-form-control>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row"> </mp-table-cell>
            <mp-table-cell as="td" scope="row"> </mp-table-cell>
          </mp-table-row>

          <mp-table-row>
            <mp-table-cell as="td" scope="row"> </mp-table-cell>
            <mp-table-cell as="td" scope="row" text-align="end">
              <mp-text font-weight="semibold">Total harga</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" text-align="end">
              <mp-text font-weight="semibold">Rp12.560.000 </mp-text>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>
  </mp-grid>
</template>

<script>
import {
  MpGrid,
  MpText,
  MpTable,
  MpTableContainer,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpAutocomplete,
  MpFormControl,
  MpInput,
  MpButtonIcon,
  MpTooltip,
  MpFlex,
} from "@mekari/pixel";
export default {
  components: {
    MpGrid,
    MpText,
    MpTable,
    MpTableContainer,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpAutocomplete,
    MpFormControl,
    MpInput,
    MpButtonIcon,
    MpTooltip,
    MpFlex,
  },
  data() {
    return {
      selectproduct: "",
      products: [],
      selectaccount: "",
      accounts: [],
    };
  },
  methods: {
    handleSelectProduct(value) {
      console.log(value);
      this.selectproduct = value;
      this.products.push(value);

      setTimeout(() => {
        this.selectproduct = "";
      }, 0);
    },
    handleSelectAccount(value) {
      console.log(value);
      this.selectaccount = value;
      this.accounts.push(value);

      setTimeout(() => {
        this.selectaccount = "";
      }, 0);
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
</style>
