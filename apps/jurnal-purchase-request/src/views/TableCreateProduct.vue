<template>
  <mp-box>
    <mp-table :isHoverable="false">
      <mp-table-head>
        <mp-table-row>
          <mp-table-cell as="th" scope="col" width="25%">Product</mp-table-cell>
          <mp-table-cell as="th" scope="col" width="45%">Description</mp-table-cell>
          <mp-table-cell as="th" scope="col" width="5%">Quantity</mp-table-cell>
          <mp-table-cell as="th" scope="col">Unit</mp-table-cell>
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row v-for="(value, index) in products" :key="index">
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-flex flex-direction="column">
              <mp-form-control>
                <mp-autocomplete isClearable :content-style="{ zIndex: 'popover', width: 'full' }"
                  :id="`pilih-product-${index}`" placeholder="Pilih produk"
                  :data="['Macbook Pro M1', 'Macbook Air M1', 'iPhone 13 Pro Max 256GB', 'iPhone 13 Pro 256GB', 'iPhone 13 256GB', 'iPad Pro Max 1TB']"
                  :value="products[index]" />
              </mp-form-control>
            </mp-flex>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-flex flex-direction="column">
              <mp-form-control>
                <mp-textarea rows="1" height="36px" min-height="36px" max-height="32" resize="vertical"
                  transition-property="box-shadow, border-color" />
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
            <mp-flex align="center" gap="6">
              <mp-form-control>
                <mp-autocomplete :style="{ minWidth: '109px', width: '100%' }" :id="`pilih-unit-${index}`"
                  :data="['Unit', 'Pcs']" :content-style="{ zIndex: 'popover', width: 'full' }" />
              </mp-form-control>

              <mp-tooltip label="Hapus" :id="`delete-product-${index}`">
                <mp-button-icon @click="products.splice(index, 1)" name="minus-circular" />
              </mp-tooltip>
            </mp-flex>
          </mp-table-cell>
        </mp-table-row>

        <mp-table-row>
          <mp-table-cell as="td" scope="row" vertical-align="center" :style="{ borderBottomColor: 'white' }">
            <mp-flex flex-direction="column">
              <mp-form-control >
                <mp-autocomplete :key="renderKey" isClearable :content-style="{ zIndex: 'popover', width: 'full' }" id="pilih-product"
                  placeholder="Pilih produk"
                  :data="['Macbook Pro M1', 'Macbook Air M1', 'iPhone 13 Pro Max 256GB', 'iPhone 13 Pro 256GB', 'iPhone 13 256GB', 'iPad Pro Max 1TB']"
                  :value="select" @change="handleSelect" />
              </mp-form-control>
            </mp-flex>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" :style="{ borderBottomColor: 'white' }"> </mp-table-cell>
          <mp-table-cell as="td" scope="row" :style="{ borderBottomColor: 'white' }"> </mp-table-cell>
          <mp-table-cell as="td" scope="row" :style="{ borderBottomColor: 'white' }"> </mp-table-cell>
          <mp-table-cell as="td" scope="row" :style="{ borderBottomColor: 'white' }"> </mp-table-cell>
        </mp-table-row>
      </mp-table-body>
    </mp-table>
  </mp-box>
</template>

<script>
import {
  MpBox,
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
} from "@mekari/pixel";
export default {
  components: {
    MpBox,
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
  },
  data() {
    return {
      renderKey: 0,
      select: "",
      products: [],
    };
  },
  methods: {
    handleSelect(value) {
      console.log(value);
      this.select = value;
      const isDuplicate = this.products.includes(value)

      if (isDuplicate) {
        this.renderKey++
        console.log('Called')
        this.select = "";
        return
      }

      this.products.push(value);

      setTimeout(() => {
        this.select = "";
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
