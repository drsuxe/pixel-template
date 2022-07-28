<template>
  <mp-box>
    <mp-table-container overflow-x="auto">
      <mp-table :is-hoverable="false">
        <mp-table-head>
          <mp-table-row bg="ice.50">
            <mp-table-cell as="th" scope="col" width="141px"> Transaksi </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="141px"> Pelanggan </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="141px"> Produk </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="200px"> Deskripsi </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="141px"> Total produk </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Dikirim </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Sisa </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right"> Harga satuan </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right"> Sisa tagihan </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right"> Total harga </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <template v-for="(report, index) in reports">
            <mp-table-row
              :id="`header-${index}`"
              cursor="pointer"
              @click.native="report.isFetched ? handleExpanded(index) : handleFetchData(index)"
              :key="report.id"
              role="group"
            >
              <mp-table-cell as="td" scope="row" bg="gray.50" :class="!report.isExpanded && 'pixel-border-gray-600'" v-bind="{ ...styles.headerCell }">
                <mp-flex>
                  <mp-icon name="caret-down" :transform="report.isExpanded ? 'rotate(-180deg)' : null" transition="transform 0.2s" transform-origin="center" />
                  <mp-text font-weight="semibold" ml="3"> {{ report.no }} </mp-text>
                </mp-flex>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row" bg="gray.50" :class="!report.isExpanded && 'pixel-border-gray-600'" v-bind="{ ...styles.headerCell }">
                <mp-box position="relative">
                  <mp-text font-weight="semibold" position="absolute" top="-3"> {{ report.pelanggan }} </mp-text>
                </mp-box>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row" bg="gray.50" :class="!report.isExpanded && 'pixel-border-gray-600'" v-bind="{ ...styles.headerCell }">
              </mp-table-cell>
              <mp-table-cell as="td" scope="row" bg="gray.50" :class="!report.isExpanded && 'pixel-border-gray-600'" v-bind="{ ...styles.headerCell }">
              </mp-table-cell>
              <mp-table-cell as="td" scope="row" bg="gray.50" :class="!report.isExpanded && 'pixel-border-gray-600'" v-bind="{ ...styles.headerCell }">
              </mp-table-cell>
              <mp-table-cell as="td" scope="row" bg="gray.50" :class="!report.isExpanded && 'pixel-border-gray-600'" v-bind="{ ...styles.headerCell }">
              </mp-table-cell>
              <mp-table-cell as="td" scope="row" bg="gray.50" :class="!report.isExpanded && 'pixel-border-gray-600'" v-bind="{ ...styles.headerCell }">
              </mp-table-cell>
              <mp-table-cell as="td" scope="row" bg="gray.50" :class="!report.isExpanded && 'pixel-border-gray-600'" v-bind="{ ...styles.headerCell }">
              </mp-table-cell>
              <mp-table-cell as="td" scope="row" bg="gray.50" :class="!report.isExpanded && 'pixel-border-gray-600'" v-bind="{ ...styles.headerCell }">
              </mp-table-cell>
              <mp-table-cell as="td" scope="row" bg="gray.50" :class="!report.isExpanded && 'pixel-border-gray-600'" v-bind="{ ...styles.headerCell }">
              </mp-table-cell>
            </mp-table-row>

            <template v-if="report.isExpanded">
              <mp-table-row :id="`loading-${index}`" v-if="report.isLoading" :key="`loading-${index}`">
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600">
                  <mp-box position="relative">
                    <mp-flex position="absolute" top="-3">
                      <mp-spinner size="sm" />
                      <mp-text ml="3">Memuat transaksi...</mp-text>
                    </mp-flex>
                  </mp-box>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
              </mp-table-row>

              <mp-table-row :id="`error-${index}`" v-if="!report.isLoading && report.isError" :key="`error-${index}`">
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600">
                  <mp-box position="relative">
                    <mp-flex position="absolute" top="-3">
                      <mp-icon name="error" variant="duotone" />
                      <mp-text ml="3" mr="1">Gagal memuat transaksi. </mp-text>
                      <mp-text is-link @click.native="handleFetchData(index)"> Coba lagi </mp-text>
                    </mp-flex>
                  </mp-box>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600"> </mp-table-cell>
              </mp-table-row>

              <template v-if="!report.isLoading && !report.isError">
                <mp-table-row
                  :id="`content-${index}`"
                  v-for="(data, dataIndex) in report.datas"
                  :key="`datas-${index}-${data}`"
                  :style="{ whiteSpace: 'normal' }"
                >
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    01/06/2021
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    <mp-box><mp-text is-link line-height="md">Mouse Logitech MK12345</mp-text></mp-box>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    <mp-box> <mp-text class="pixel-line-clamp-2" line-height="md"> Beli buat stok mainan untuk anak anak yang baik ada d ad </mp-text></mp-box>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    10
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    2
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    8
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    <mp-text text-align="right"> 1.000.000.000,00 </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    <mp-text text-align="right"> 1.000.000.000,00 </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    <mp-text text-align="right"> 1.000.000.000,00 </mp-text>
                  </mp-table-cell>
                </mp-table-row>
              </template>
            </template>
          </template>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <TablePagination />
  </mp-box>
</template>

<script>
import { MpTableContainer, MpTable, MpTableHead, MpTableBody, MpTableRow, MpTableCell, MpFlex, MpBox, MpText, MpIcon, MpSpinner } from "@mekari/pixel";
import TablePagination from "./TablePagination.vue";
export default {
  name: "ReportTable",
  components: {
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpFlex,
    MpBox,
    MpText,
    MpIcon,
    MpSpinner,
    TablePagination,
  },
  data() {
    return {
      reports: [
        {
          id: 1,
          no: "SO #0001",
          pelanggan: "Tony Stark",
          isExpanded: false,
          isLoading: false,
          isError: false,
          showData: false,
          isFetched: false,
          datas: [],
        },
        {
          id: 2,
          no: "SO #0002",
          pelanggan: "Brian Dongle Keelwok (will return error state)",
          isExpanded: false,
          isLoading: false,
          isError: false,
          showData: false,
          isFetched: false,
          datas: [],
        },
        {
          id: 3,
          no: "SO #0003",
          pelanggan: "Elvera Benimadho",
          isExpanded: false,
          isLoading: false,
          isError: false,
          showData: false,
          isFetched: false,
          datas: [],
        },
      ],
      isLoading: false,
      datas: [],

      // Styling
      styles: {
        headerCell: {
          _groupHover: { bg: "background" },
        },
      },
    };
  },
  methods: {
    handleFetchData(index) {
      const report = this.reports[index];

      report.isLoading = true;
      report.isExpanded = true;

      setTimeout(() => {
        if (index === 1) {
          report.isError = true;
        }

        report.isLoading = false;
        report.isFetched = true;
        report.datas = [1, 2, 3, 4];
      }, 1000);
    },
    handleExpanded(index) {
      const report = this.reports[index];

      report.isExpanded = !report.isExpanded;
    },
  },
};
</script>

<style scoped>
.pixel-line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.pixel-border-gray-600 {
  border-color: var(--colors-gray-100);
}
</style>
