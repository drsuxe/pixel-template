<template>
  <mp-box>
    <mp-table-container overflow-x="auto" max-height="500px">
      <mp-table :is-hoverable="false">
        <mp-table-head is-fixed :style="{ background: '#EDF0F2' }">
          <mp-table-row>
            <mp-table-cell as="th" scope="col"> Pelanggan/tanggal </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Nomor transaksi </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Jatuh tempo </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Deskripsi </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Mata uang </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right"> Jumlah </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right"> Sisa piutang </mp-table-cell>
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
              <mp-table-cell as="td" scope="row" colspan="7">
                <mp-box position="relative">
                  <mp-flex position="absolute" top="-3">
                    <mp-icon name="caret-right" :transform="report.isExpanded ? 'rotate(90deg)' : null" transition="transform 0.2s" transform-origin="center" />
                    <mp-text font-weight="semibold" ml="3" color="blue.500"> {{ report.pelanggan }} </mp-text>
                  </mp-flex>
                </mp-box>
              </mp-table-cell>
            </mp-table-row>

            <!-- Row content -->
            <template v-if="report.isExpanded">
              <!-- Loading -->
              <mp-table-row :id="`loading-${index}`" v-if="report.isLoading" :key="`loading-${index}`">
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600" colspan="9">
                  <mp-flex>
                    <mp-spinner size="sm" />
                    <mp-text ml="3">Memuat transaksi...</mp-text>
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>

              <!-- Error -->
              <mp-table-row :id="`error-${index}`" v-if="!report.isLoading && report.isError" :key="`error-${index}`">
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600" colspan="9">
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
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    <mp-text>01/06/2021</mp-text>
                  </mp-table-cell>
                  <mp-table-cell
                    as="td"
                    scope="row"
                    vertical-align="top"
                    max-width="250px"
                    :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'"
                  >
                    <mp-box>
                      <mp-text is-link line-height="md">Sales Invoice 2021 PRIMA/VI/164</mp-text>
                    </mp-box>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    04/08/2022
                    <mp-box> </mp-box>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    <mp-text>Tolong buatkan invoice untu</mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    <mp-text text-align="right"> 16.330,60 </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" vertical-align="top" :class="dataIndex === report.datas.length - 1 && 'pixel-border-gray-600'">
                    <mp-text text-align="right"> 1.484,60 </mp-text>
                  </mp-table-cell>
                </mp-table-row>
              </template>
            </template>

            <!-- Grand total -->
            <template>
              <mp-table-row :key="`total-${index}`">
                <mp-table-cell as="td" scope="row" colspan="4" />
                <mp-table-cell as="td" scope="row">
                  <mp-text font-weight="semibold">Total</mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-text text-align="right" font-weight="semibold">181.330,60</mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-text text-align="right" font-weight="semibold">66.484,60</mp-text>
                </mp-table-cell>
              </mp-table-row>
              <mp-table-row :key="`credit-memo-${index}`">
                <mp-table-cell as="td" scope="row" colspan="4" />
                <mp-table-cell as="td" scope="row" colspan="2" class="pixel-border-gray-600">
                  <mp-text font-weight="semibold">Credit Memo</mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600">
                  <mp-text text-align="right" font-weight="semibold">66.484,60</mp-text>
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
import { MpTableContainer, MpTable, MpTableHead, MpTableBody, MpTableRow, MpTableCell, MpFlex, MpBox, MpText, MpIcon, MpSpinner } from "@mekari/pixel";
import TablePagination from "./slices/TablePagination.vue";
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
          pelanggan: "Adelia Marium",
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
          pelanggan: "Brisoft Tonjilo (will return error state)",
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
          pelanggan: "Dimar Dona",
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
        report.datas = 2;
      }, 50);
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
/* .border-dark {
  border-width: 1px !important;
  border-color: var(--colors-dark) !important;
} */
</style>
