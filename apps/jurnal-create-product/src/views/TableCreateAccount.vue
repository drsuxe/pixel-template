<template>
  <mp-table-container mt="1">
    <mp-table :is-hoverable="false">
      <mp-table-head bg="gray.50">
        <mp-table-row>
          <mp-table-cell as="th" scope="col" width="60%"> Akun </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="10%"> </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="30%" text-align="right"> Biaya </mp-table-cell>
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
                  :value="products[index]"
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
                  :value="select"
                  @change="handleSelect"
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
</template>

<script>
import {
  MpTable,
  MpTableContainer,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpAutocomplete,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpText,
  MpButtonIcon,
  MpTooltip,
  MpFlex,
} from "@mekari/pixel";
export default {
  components: {
    MpTable,
    MpTableContainer,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpAutocomplete,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpText,
    MpButtonIcon,
    MpTooltip,
    MpFlex,
  },
  data() {
    return {
      select: "",
      products: [],
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
