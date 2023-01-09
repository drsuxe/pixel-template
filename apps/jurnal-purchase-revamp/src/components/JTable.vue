<template>
  <mp-box v-bind="$attrs">
    <mp-table-container has-shadow overflow="auto" v-bind="{ ...tableStyle }">
      <mp-table id="j-table" :isHoverable="isHoverable">
        <mp-table-head :is-fixed="isFixed">
          <mp-table-row :background-color="headBgColor" :position="showBulkAction ? 'relative' : ''">
            <mp-table-cell as="th" scope="col" width="39px" v-if="checkbox">
              <mp-box position="relative">
                <mp-checkbox :is-checked="isCheckedAll" :is-indeterminate="isIndeterminate" @change="handleCheckAll" :id="`${id}-head-checkbox`" />
              </mp-box>
              <template v-if="hasBulkActionSlot">
                <mp-flex v-if="showBulkAction" position="absolute" top="9px" align-items="center" gap="6" ml="10">
                  <slot name="bulkAction"> </slot>
                </mp-flex>
              </template>
            </mp-table-cell>
            <mp-table-cell
              v-for="(head, index) in tableHeads"
              :key="head.key"
              as="th"
              scope="col"
              :width="head.width"
              :max-width="head.width"
              :text-align="head.align"
              @click.native="handleSorting(index, head)"
            >
              <mp-box v-if="!showBulkAction" cursor="pointer">
                {{ head.title }}
                <template v-if="isSortable && !head.disableSorting">
                  <mp-icon :name="head.sort ? `sort-${head.sort}` : 'sort-default'" />
                </template>
              </mp-box>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <!-- Loading state -->
          <mp-table-row v-if="loading">
            <mp-table-cell as="td" scope="row" align="center" :colspan="heads.length + 1" :style="{ borderBottomColor: 'white' }">
              <mp-flex h="300" gap="2" flex-direction="column" align-items="center" justify-content="center">
                <mp-spinner />
                <mp-text>Loading data...</mp-text>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>

          <!-- Blank state -->
          <mp-table-row v-else-if="hasNoItems">
            <mp-table-cell as="td" align="center" :colspan="heads.length + 1" :style="{ borderBottomColor: 'white' }">
              <mp-flex direction="column" justify-content="center" align-items="center">
                <img src="../assets/no-data.svg" alt="no data image" />
                <mp-text font-weight="semibold" mt="4">
                  {{ blankSlate.title }}
                </mp-text>
                <mp-text font-size="sm" color="gray.600" text-align="center">
                  {{ blankSlate.description }}
                </mp-text>
                <a :href="blankSlate.href" v-if="blankSlate.buttonLabel">
                  <mp-button left-icon="add" my="5" bg="blue.500">
                    {{ blankSlate.buttonLabel }}
                  </mp-button>
                </a>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>

          <!-- Items -->
          <template v-else>
            <mp-table-row v-for="(item, index) in datas" :key="`${item.id}`">
              <mp-table-cell v-if="checkbox" as="td" scope="row">
                <mp-box position="relative">
                  <mp-checkbox
                    min-height="5"
                    :isChecked="item.checked"
                    @change="
                      (e) => {
                        handleCheck(index, e, item);
                      }
                    "
                    :id="`${id}-checkbox-${index}`"
                  />
                </mp-box>
              </mp-table-cell>

              <slot :item="item" :index="index"> </slot>

              <template v-if="$scopedSlots.default === undefined">
                <mp-table-cell v-for="(value, key, index) in item" :key="`${key}-${index}`" as="td" scope="row">
                  {{ value }}
                </mp-table-cell>
              </template>
            </mp-table-row>
          </template>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <!-- Pagination -->
    <mp-box v-if="usePagination && !loading && !hasNoItems" padding-x="2" padding-y="4">
      <mp-flex justify-content="space-between">
        <mp-flex align-items="center">
          <mp-text color="gray.600" line-height="md" padding-right="1" padding-y="1"> Rows per page </mp-text>

          <mp-popover :id="`${id}-rows-per-page`" ref="popover">
            <mp-popover-trigger>
              <mp-box>
                <mp-tooltip label="Result per page" position="bottom">
                  <mp-button
                    size="sm"
                    variant="unstyled"
                    height="7"
                    display="inline-flex"
                    padding-left="3"
                    padding-right="2"
                    padding-y="2"
                    :_hover="{ backgroundColor: 'ice.50' }"
                  >
                    <mp-text font-weight="600" line-height="md">
                      {{ currentPerPage }}
                    </mp-text>
                    <mp-icon name="caret-down" size="sm" />
                  </mp-button>
                </mp-tooltip>
              </mp-box>
            </mp-popover-trigger>
            <mp-popover-content width="55px" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
              <mp-popover-list>
                <mp-popover-list-item v-for="value in rowsPerpage" :key="value" :is-active="value === currentPerPage" @click="handleChangePerPage(value)">
                  {{ value }}
                </mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>

          <mp-text color="gray.600" line-height="md" padding-left="5" padding-y="1"> Showing 1-10 of {{ totalData }} </mp-text>
        </mp-flex>
        <mp-flex align-items="center">
          <mp-tooltip label="Jump to page" position="bottom">
            <mp-box>
              <mp-autocomplete
                :style="{ width: '88px', minWidth: '88px' }"
                :content-style="{ width: '55px' }"
                :value="currentPage"
                min-width="20"
                width="20"
                height="7.5"
                :data="pages"
                is-searchable
                @change="handleChangePage"
              />
            </mp-box>
          </mp-tooltip>
          <mp-text color="gray.600" line-height="md" padding-left="2" padding-right="4" padding-y="1"> of {{ totalPage }} page </mp-text>
          <mp-tooltip label="Prev page" position="bottom">
            <mp-button-icon
              name="chevrons-left"
              size="sm"
              padding-right="1"
              :is-disabled="parseInt(currentPage) === 1"
              @click="handleChangePage(parseInt(currentPage) - 1)"
            />
          </mp-tooltip>
          <mp-tooltip label="Next page" position="bottom">
            <mp-button-icon
              name="chevrons-right"
              size="sm"
              padding-left="1"
              :is-disabled="parseInt(currentPage) === totalPage"
              @click="handleChangePage(parseInt(currentPage) + 1)"
            />
          </mp-tooltip>
        </mp-flex>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpFlex,
  MpBox,
  MpCheckbox,
  MpIcon,
  MpText,
  MpButton,
  MpSpinner,
  MpAutocomplete,
  MpTooltip,
  MpButtonIcon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "TableSalesItem",
  components: {
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpFlex,
    MpBox,
    MpCheckbox,
    MpIcon,
    MpText,
    MpButton,
    MpSpinner,
    MpAutocomplete,
    MpTooltip,
    MpButtonIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    id: { type: String, required: true, default: "table" },
    loading: Boolean,
    heads: { type: Array, required: true },
    items: { type: Array, required: true },
    isHoverable: Boolean,
    checkbox: Boolean,
    isSortable: Boolean,
    usePagination: Boolean,
    page: Number, // currentPage
    perPage: Number,
    totalData: Number, // Total data
    headBgColor: { type: String, default: "gray.50" },
    isFixed: Boolean,
    tableStyle: Object,
    blankSlate: {
      type: Object,
      default() {
        return {
          title: "Title",
          description: "Description",
        };
      },
    },
  },
  data() {
    return {
      rowsPerpage: [5, 10, 25, 50, 100],
      tableHeads: [],
      datas: [],

      currentPerPage: 10,
      currentPage: 1,
      pages: [],
      totalPage: null,
    };
  },
  mounted() {
    this.datas = this.items;
    this.tableHeads = this.heads;

    this.calculatePagination({
      currentPerPage: this.perPage,
      totalData: this.totalData,
    });
  },
  watch: {
    items: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.datas = newValue;
      }
    },
    heads: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.tableHeads = newValue;
      }
    },
    perPage: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.calculatePagination({
          currentPerPage: newValue,
          totalData: this.totalData,
        });
      }
    },
    totalData: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.calculatePagination({
          currentPerPage: this.perPage,
          totalData: newValue,
        });
      }
    },
  },
  computed: {
    hasNoItems() {
      return this.items.length === 0;
    },
    hasBulkActionSlot() {
      return !!this.$slots.bulkAction;
    },
    showBulkAction() {
      return this.datas.filter((item) => item.checked === true).length >= 1 && this.hasBulkActionSlot;
    },
    isIndeterminate() {
      const checks = this.datas.map((value) => {
        return value.checked;
      });

      const totalData = checks.length;
      const totalSelectedData = checks.filter(Boolean).length;

      if (totalSelectedData < totalData && totalSelectedData !== 0) {
        return true;
      }

      return false;
    },
    isCheckedAll() {
      const checks = this.datas.map((value) => {
        return value.checked;
      });

      const totalData = checks.length;
      const totalSelectedData = checks.filter(Boolean).length;

      if (totalData === totalSelectedData) {
        return true;
      }

      return false;
    },
    selectedItems() {
      const checked = this.datas.filter((item) => item.checked);
      return checked;
    },
  },
  methods: {
    handleCheck(index, e, item) {
      this.datas[index].checked = e;
      this.$emit("check", item, this.selectedItems);
    },
    handleCheckAll(e) {
      this.datas = this.datas.map((value) => {
        return {
          ...value,
          ...{
            checked: e,
          },
        };
      });

      this.$emit("checkAll", this.selectedItems);
    },
    handleSorting(index, head) {
      const headIndex = index;
      const tableHead = this.tableHeads[headIndex];

      if (tableHead.sort === "") {
        tableHead.sort = "ascending";
      } else if (tableHead.sort === "ascending") {
        tableHead.sort = "descending";
      } else {
        tableHead.sort = "";
      }

      this.tableHeads = this.tableHeads.map((obj, index) => {
        const sort = headIndex === index ? tableHead.sort : "";
        return { ...obj, sort: sort };
      });

      this.$emit("sorting", head, this.tableHeads);
    },

    // Pagination
    calculatePagination({ currentPerPage, totalData }) {
      this.currentPerPage = currentPerPage;
      this.totalPage = Math.ceil(totalData / currentPerPage);
      this.pages = Array.from({ length: this.totalPage }, (value, index) => String(index + 1));
      this.currentPage = "1";
    },
    handleChangePerPage(perPage) {
      this.$refs.popover.closePopover();

      this.calculatePagination({
        currentPerPage: perPage,
        totalData: this.totalData,
      });

      this.$emit("changePage", {
        perPage: this.currentPerPage,
        currentPage: this.currentPage,
        totalPage: this.totalPage,
      });
    },
    handleChangePage(value) {
      console.log(value);
      this.currentPage = String(value);
      this.$emit("changePage", {
        perPage: this.currentPerPage,
        currentPage: this.currentPage,
        totalPage: this.totalPage,
      });
    },
  },
};
</script>

<style>
tbody > [data-pixel-component="MpTableRow"] {
  white-space: normal !important;
}

tbody > [data-pixel-component="MpTableRow"] > [data-pixel-component="MpTableCell"] {
  height: auto !important;
  padding-top: 0.875rem !important;
  padding-bottom: 0.875rem !important;
  vertical-align: top !important;
}
</style>
