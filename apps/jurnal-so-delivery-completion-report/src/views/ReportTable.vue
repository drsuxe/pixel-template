<template>
  <mp-box>
    <mp-table-container overflow-x="auto" max-height="500px">
      <mp-table :is-hoverable="false">
        <mp-table-head is-fixed :style="{ background: '#EDF0F2' }">
          <mp-table-row>
            <mp-table-cell as="th" scope="col" width="50px"> Transaction </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="250px"> Product </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="115px"> Total order </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="115px"> Unshipped </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="115px"> On shipping </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="94px"> Total shipped </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right" width="158px"> Unit price </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right" width="158px"> Total order amount </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right" width="158px"> Billed remaining </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <template v-for="(report, index) in reports">
            <!-- Row header -->
            <mp-table-row
              :id="`header-${index}`"
              cursor="pointer"
              @click.native="report.isFetched ? handleExpanded(index) : handleFetchData(index)"
              :key="report.id"
              role="group"
            >
              <mp-table-cell as="td" scope="row" colspan="9" :class="!report.isExpanded && 'pixel-border-gray-600'">
                <mp-box position="relative">
                  <mp-flex position="absolute" top="-3">
                    <mp-icon name="caret-right" :transform="report.isExpanded ? 'rotate(90deg)' : null" transition="transform 0.2s" transform-origin="center" />
                    <mp-text font-weight="semibold" ml="3"> {{ report.no }} - {{ report.pelanggan }} </mp-text>
                  </mp-flex>
                </mp-box>
              </mp-table-cell>
            </mp-table-row>

            <!-- Row content -->
            <template v-if="report.isExpanded">
              <!-- Loading -->
              <mp-table-row :id="`loading-${index}`" v-if="report.isLoading" :key="`loading-${index}`">
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600" colspan="9" bg="gray.50">
                  <mp-flex>
                    <mp-spinner size="sm" />
                    <mp-text ml="3">Memuat transaksi...</mp-text>
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>

              <!-- Error -->
              <mp-table-row :id="`error-${index}`" v-if="!report.isLoading && report.isError" :key="`error-${index}`">
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600" colspan="9" bg="gray.50">
                  <mp-flex>
                    <mp-icon name="error" variant="duotone" />
                    <mp-text ml="3" mr="1">Gagal memuat transaksi. </mp-text>
                    <mp-text is-link @click.native="handleFetchData(index)"> Coba lagi </mp-text>
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>

              <!-- Success -->
              <template v-if="!report.isLoading && !report.isError">
                <mp-table-row
                  :id="`content-${index}`"
                  v-for="(data, dataIndex) in report.datas"
                  :key="`datas-${index}-${data}`"
                  :style="{ whiteSpace: 'normal' }"
                >
                  <mp-table-cell
                    as="td"
                    scope="row"
                    vertical-align="top"
                    bg="gray.50"
                    :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'"
                  >
                    <mp-text>01/06/2021</mp-text>
                    <mp-text font-size="sm" is-link>SD 0001</mp-text>
                  </mp-table-cell>
                  <mp-table-cell
                    as="td"
                    scope="row"
                    vertical-align="top"
                    bg="gray.50"
                    max-width="250px"
                    :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'"
                  >
                    <mp-box>
                      <mp-text is-link line-height="md">Mouse Logitech MK12345</mp-text>
                      <mp-tooltip label="Beli buat stok mainan untuk penjualan dibulan agustus nanti." :id="`tooltip-${index}-${data}`" width="250px">
                        <mp-text is-truncated line-height="md"> Beli buat stok mainan untuk penjualan dibulan agustus nanti. </mp-text>
                      </mp-tooltip>
                    </mp-box>
                  </mp-table-cell>
                  <mp-table-cell
                    as="td"
                    scope="row"
                    vertical-align="top"
                    bg="gray.50"
                    :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'"
                  >
                    10 Unit
                    <mp-box> </mp-box>
                  </mp-table-cell>
                  <mp-table-cell
                    as="td"
                    scope="row"
                    vertical-align="top"
                    bg="gray.50"
                    :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'"
                  >
                    0
                    <mp-box> </mp-box>
                  </mp-table-cell>
                  <mp-table-cell
                    as="td"
                    scope="row"
                    vertical-align="top"
                    bg="gray.50"
                    :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'"
                  >
                    0
                  </mp-table-cell>
                  <mp-table-cell
                    as="td"
                    scope="row"
                    vertical-align="top"
                    bg="gray.50"
                    :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'"
                  >
                    <mp-text>0</mp-text>
                    <mp-text font-size="sm" color="gray.600">(Shipment 0%)</mp-text>
                  </mp-table-cell>
                  <mp-table-cell
                    as="td"
                    scope="row"
                    vertical-align="top"
                    bg="gray.50"
                    :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'"
                  >
                    <mp-text text-align="right"> 1.000.000,00 </mp-text>
                  </mp-table-cell>
                  <mp-table-cell
                    as="td"
                    scope="row"
                    vertical-align="top"
                    bg="gray.50"
                    :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'"
                  >
                    <mp-text text-align="right"> 1.000.000,00 </mp-text>
                  </mp-table-cell>
                  <mp-table-cell
                    as="td"
                    scope="row"
                    vertical-align="top"
                    bg="gray.50"
                    :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'"
                  >
                    <mp-text text-align="right"> 1.000.000,00 </mp-text>
                  </mp-table-cell>
                </mp-table-row>
              </template>

              <!-- Load more -->
              <mp-table-row v-if="!report.isLoading && !report.isError && report.datas < 100" :key="`load-more-transaction-${index}`">
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600" colspan="9" bg="gray.50">
                  <mp-flex align="center" justify="center" width="full">
                    <mp-button v-if="!report.loadMoreLoading" variant="outline" @click="handleLoadMoreTransaction(index)">
                      Load other transactions {{ `${report.datas}/100` }}
                    </mp-button>
                    <mp-spinner v-else />
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>
            </template>
          </template>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <TablePagination />
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
  MpText,
  MpIcon,
  MpSpinner,
  MpButton,
  MpTooltip,
} from "@mekari/pixel";
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
    MpButton,
    MpTooltip,
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
          loadMoreLoading: false,
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
          loadMoreLoading: false,
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
          loadMoreLoading: false,
        },
        {
          id: 4,
          no: "SO #0004",
          pelanggan: "Bruce Banner",
          isExpanded: false,
          isLoading: false,
          isError: false,
          showData: false,
          isFetched: false,
          datas: [],
          loadMoreLoading: false,
        },
        {
          id: 5,
          no: "SO #0005",
          pelanggan: "Peter Parker",
          isExpanded: false,
          isLoading: false,
          isError: false,
          showData: false,
          isFetched: false,
          datas: [],
          loadMoreLoading: false,
        },
        {
          id: 6,
          no: "SO #0006",
          pelanggan: "Steve Rodger",
          isExpanded: false,
          isLoading: false,
          isError: false,
          showData: false,
          isFetched: false,
          datas: [],
          loadMoreLoading: false,
        },
        {
          id: 7,
          no: "SO #0007",
          pelanggan: "Stephen Strange",
          isExpanded: false,
          isLoading: false,
          isError: false,
          showData: false,
          isFetched: false,
          datas: [],
          loadMoreLoading: false,
        },
      ],
      isLoading: false,
      datas: [],
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
        report.datas = 25;
      }, 500);
    },
    handleExpanded(index) {
      const report = this.reports[index];

      report.isExpanded = !report.isExpanded;
    },
    handleLoadMoreTransaction(index) {
      console.log("handleLoadMoreTransaction");

      const report = this.reports[index];

      report.loadMoreLoading = true;

      setTimeout(() => {
        report.loadMoreLoading = false;

        report.datas += 25;
      }, 500);
    },
  },
};
</script>

<style scoped>
.pixel-border-gray-600 {
  border-color: var(--colors-gray-100);
}
</style>
