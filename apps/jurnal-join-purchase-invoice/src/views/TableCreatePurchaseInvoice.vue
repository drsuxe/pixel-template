<template>
  <mp-box>
    <mp-table :isHoverable="false">
      <mp-table-head>
        <mp-table-row>
          <mp-table-cell as="th" scope="col" width="25%">Purchase Invoice</mp-table-cell>
          <mp-table-cell as="th" scope="col" width="25%">Description</mp-table-cell>
          <mp-table-cell as="th" scope="col" width="5%">Due date</mp-table-cell>
          <mp-table-cell as="th" scope="col">Status</mp-table-cell>
          <mp-table-cell as="th" scope="col">Amount billed</mp-table-cell>
          <mp-table-cell as="th" scope="col">Remaining billed</mp-table-cell>
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row v-for="(value, index) in purchaseinvoices" :key="index">
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-flex flex-direction="column">
              <mp-form-control>
                <mp-autocomplete
                  isClearable
                  :content-style="{ zIndex: 'popover', width: 'xs' }"
                  :id="`pilih-product-${index}`"
                  placeholder="Pilih produk"
                  :data="[
                    {
                      value: 'Purchase Invoice #0002',
                      dueDate: '20/04/2022',
                      status: 'Open',
                    },
                    {
                      value: 'Purchase Invoice #0003',
                      dueDate: '20/04/2022',
                      src: 'Overdue',
                    },
                    {
                      value: 'Purchase Invoice #0004',
                      dueDate: '20/04/2022',
                      src: 'Partial',
                    },
                  ]"
                  :value="purchaseinvoices[index]"
                >
                  <template slot-scope="props">
                    <mp-flex align-items="center" justify="space-betweeen" w="xs">
                      <mp-flex direction="column">
                        <mp-text>
                          {{ props.item.value }}
                        </mp-text>
                        <mp-text font-size="sm" color="gray.600">
                          {{ props.item.dueDate }}
                        </mp-text>
                      </mp-flex>

                      <mp-flex align="center" justify="end">
                        <mp-badge variant="subtle" variant-color="orange">Open</mp-badge>
                      </mp-flex>
                    </mp-flex>
                  </template>
                </mp-autocomplete>
              </mp-form-control>
            </mp-flex>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-flex flex-direction="column">
              <mp-form-control>
                <mp-textarea rows="1" height="36px" min-height="36px" max-height="32" resize="vertical" transition-property="box-shadow, border-color" />
              </mp-form-control>
            </mp-flex>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top"> 19/04/2022 </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top"> <mp-badge variant="subtle" variant-color="orange">Open</mp-badge> </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top"> Rp10.000.000 </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-flex align="center" justify="space-between">
              <mp-text>Rp10.000.000</mp-text>

              <mp-tooltip label="Hapus" :id="`delete-product-${index}`">
                <mp-button-icon @click="purchaseinvoices.splice(index, 1)" name="minus-circular" />
              </mp-tooltip>
            </mp-flex>
          </mp-table-cell>
        </mp-table-row>
        <mp-table-row>
          <mp-table-cell as="td" scope="row" vertical-align="center" :style="{ borderBottomColor: 'white' }" colspan="1">
            <mp-flex flex-direction="column">
              <mp-form-control>
                <mp-autocomplete
                  isClearable
                  :content-style="{ zIndex: 'popover', width: 'xs' }"
                  id="pilih-product"
                  placeholder="Cari atau pilih faktur"
                  :data="[
                    {
                      value: 'Purchase Invoice #0002',
                      dueDate: '20/04/2022',
                      status: 'Open',
                    },
                    {
                      value: 'Purchase Invoice #0003',
                      dueDate: '20/04/2022',
                      status: 'Overdue',
                    },
                    {
                      value: 'Purchase Invoice #0004',
                      dueDate: '20/04/2022',
                      status: 'Partial',
                    },
                  ]"
                  :value="select"
                  @change="handleSelect"
                >
                  <template slot-scope="{ item }">
                    <mp-flex align-items="center" justify="space-between" width="full">
                      <mp-box>
                        <mp-text>
                          {{ item.value }}
                        </mp-text>
                        <mp-text font-size="sm" color="gray.600">
                          {{ item.dueDate }}
                        </mp-text>
                      </mp-box>
                      <mp-box>
                        <mp-badge variant="subtle" :variant-color="getBadgeVariantColor(item.status)">{{ item.status }}</mp-badge>
                      </mp-box>
                    </mp-flex>
                  </template>
                </mp-autocomplete>
              </mp-form-control>
            </mp-flex>
          </mp-table-cell>
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
  MpAutocomplete,
  MpTextarea,
  MpFlex,
  MpButtonIcon,
  MpTooltip,
  MpBadge,
  MpText,
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
    MpAutocomplete,
    MpTextarea,
    MpFlex,
    MpButtonIcon,
    MpTooltip,
    MpBadge,
    MpText,
  },
  data() {
    return {
      select: "",
      purchaseinvoices: [],
    };
  },
  methods: {
    handleSelect(value) {
      console.log(value);
      this.select = value;
      this.purchaseinvoices.push(value);

      setTimeout(() => {
        this.select = "";
      }, 0);
    },

    // Utils
    getBadgeVariantColor(status) {
      if (status === "Open") return "orange";
      if (status === "Overdue") return "red";
      if (status === "Partial") return "blue";
      if (status === "Paid") return "green";

      return "gray";
    },
  },
};
</script>
