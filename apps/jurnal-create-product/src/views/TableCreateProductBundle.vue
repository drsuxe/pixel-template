<template>
  <mp-table-container mt="1">
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
  MpFormControl,
  MpInput,
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
    MpFormControl,
    MpInput,
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
