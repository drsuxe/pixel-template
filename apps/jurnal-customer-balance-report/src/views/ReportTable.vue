<template>
  <mp-box>
    <mp-table-container overflow-x="auto" max-height="500px">
      <mp-table :is-hoverable="false">
        <mp-table-head is-fixed :style="{ background: '#EDF0F2' }">
          <mp-table-row>
            <mp-table-cell as="th" scope="col">
              <mp-box cursor="pointer">
                Pelanggan/tanggal
                <mp-icon name="sort-default" />
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Nomor transaksi </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Jatuh tempo </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Deskripsi </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Mata uang </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right"> Jumlah </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right"> Pemotongan </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">
              <mp-box cursor="pointer">
                Sisa piutang
                <mp-icon name="sort-default" />
              </mp-box>
            </mp-table-cell>
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
              <mp-table-cell as="td" scope="row" colspan="8" :class="!report.isExpanded && 'border-dark'">
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
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600" colspan="8">
                  <mp-flex>
                    <mp-spinner size="sm" />
                    <mp-text ml="3">Memuat transaksi...</mp-text>
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>

              <!-- Error -->
              <mp-table-row :id="`error-${index}`" v-if="!report.isLoading && report.isError" :key="`error-${index}`">
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600" colspan="8">
                  <mp-flex>
                    <mp-icon name="error" variant="duotone" />
                    <mp-text ml="3" mr="1">Gagal memuat transaksi. </mp-text>
                    <mp-text is-link @click.native="handleFetchData(index)"> Coba lagi </mp-text>
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>

              <!-- Success -->
              <template v-if="!report.isLoading && !report.isError">
                <template v-for="(data, dataIndex) in report.datas">
                  <mp-table-row :id="`content-${index}`" :key="`datas-${index}-${data}=${dataIndex}`" :style="{ whiteSpace: 'normal' }">
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text>01/06/2021</mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top" max-width="250px">
                      <mp-box>
                        <mp-text is-link line-height="md">Sales Invoice 2021 PRIMA/VI/164</mp-text>
                      </mp-box>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      04/08/2022
                      <mp-box> </mp-box>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-box width="110px">
                        <TextEllipsis :id="`description-${dataIndex}`">
                          <mp-text>Lorem ipsum dolor sir amet.</mp-text>
                        </TextEllipsis>
                      </mp-box>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top"> IDR </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text text-align="right"> 16.330,60 </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text text-align="right"> 0 </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text text-align="right"> 1.484,60 </mp-text>
                    </mp-table-cell>
                  </mp-table-row>

                  <mp-table-row
                    v-for="(subData, subDataIndex) in data.subDatas"
                    :key="subData.id"
                    :id="`sub-content-${index}`"
                    :style="{ whiteSpace: 'normal' }"
                  >
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text pl="6">01/06/2021 {{ subDataIndex }} {{ data.subDatas.length }} </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top" max-width="250px">
                      <mp-text is-link line-height="md" pl="6">Sales Invoice 2021 PRIMA/VI/164</mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      04/08/2022
                      <mp-box> </mp-box>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-box width="110px">
                        <TextEllipsis :id="`sub-description-${dataIndex}`">
                          <mp-text>Lorem ipsum dolor sir amet.</mp-text>
                        </TextEllipsis>
                      </mp-box>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top"> </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text text-align="right"> 16.330,60 </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text text-align="right"> 0 </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text text-align="right"> 1.484,60 </mp-text>
                    </mp-table-cell>
                  </mp-table-row>
                </template>
              </template>
            </template>

            <!-- Grand total -->
            <template>
              <mp-table-row :key="`total-${index}`">
                <mp-table-cell as="td" scope="row" colspan="4" class="border-top-dark" />
                <mp-table-cell as="td" scope="row" class="border-top-dark">
                  <mp-text font-weight="semibold">Total</mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="border-top-dark">
                  <mp-text text-align="right" font-weight="semibold">181.330,60</mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="border-top-dark">
                  <mp-text text-align="right" font-weight="semibold">0</mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="border-top-dark">
                  <mp-text text-align="right" font-weight="semibold">66.484,60</mp-text>
                </mp-table-cell>
              </mp-table-row>
              <mp-table-row :key="`credit-memo-${index}`">
                <mp-table-cell as="td" scope="row" colspan="4" />
                <mp-table-cell as="td" scope="row" colspan="3" class="pixel-border-gray-600">
                  <mp-text font-weight="semibold">Credit Memo</mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" class="pixel-border-gray-600">
                  <mp-text text-align="right" font-weight="semibold">66.484,60</mp-text>
                </mp-table-cell>
              </mp-table-row>
            </template>
          </template>

          <mp-table-row :key="`grand-total`">
            <mp-table-cell as="td" scope="row" colspan="4" class="border-top-dark" />
            <mp-table-cell as="td" scope="row" class="border-top-dark">
              <mp-text font-weight="semibold">Grand total</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" class="border-top-dark">
              <mp-text text-align="right" font-weight="semibold">1.060.303.267.242,53 </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" class="border-top-dark">
              <mp-text text-align="right" font-weight="semibold"></mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" class="border-top-dark">
              <mp-text text-align="right" font-weight="semibold">1.059.781.431.026,79</mp-text>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <TablePagination />
  </mp-box>
</template>

<script>
import { MpTableContainer, MpTable, MpTableHead, MpTableBody, MpTableRow, MpTableCell, MpFlex, MpBox, MpText, MpIcon, MpSpinner } from "@mekari/pixel";
import TablePagination from "./slices/TablePagination.vue";
import { TextEllipsis } from "../components/TextEllipsisTooltip";
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
    TextEllipsis,
  },
  data() {
    return {
      reports: [
        {
          id: 1,
          pelanggan: "Adelia Marium",
          datas: [],
          isExpanded: false,
          isLoading: false,
          isError: false,
          showData: false,
          isFetched: false,
          loadMoreLoading: false,
        },
        {
          id: 2,
          pelanggan: "Brisoft Tonjilo (will return error state)",
          datas: [],
          isExpanded: false,
          isLoading: false,
          isError: false,
          showData: false,
          isFetched: false,
          loadMoreLoading: false,
        },
        {
          id: 3,
          pelanggan: "Dimar Dona",
          datas: [],
          isExpanded: false,
          isLoading: false,
          isError: false,
          showData: false,
          isFetched: false,
          loadMoreLoading: false,
        },
        {
          id: 4,
          pelanggan: "Bruce Banner",
          datas: [],
          isExpanded: false,
          isLoading: false,
          isError: false,
          showData: false,
          isFetched: false,
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
        report.datas = [
          {
            id: 1,
            tanggal: "01/06/2021",
            nomerTransaksi: "Sales Invoice 2021 PRIMA/VI/164",
            jatuhTempo: "04/08/2022",
            deskripsi: "Tolong buatkan invoice untu",
            mataUang: "",
            jumlah: "16.330,60",
            sisaPiutang: "1.484,60",
            subDatas: [
              {
                id: 1,
                tanggal: "01/06/2021",
                nomerTransaksi: "Credit / Debit Memo Payment	10080",
                jatuhTempo: "04/08/2022",
                deskripsi: "Tolong buatkan invoice untu",
                mataUang: "",
                jumlah: "16.330,60",
                sisaPiutang: "1.484,60",
              },
            ],
          },
          {
            id: 2,
            subDatas: [
              {
                id: 1,
                tanggal: "01/06/2021",
                nomerTransaksi: "Credit / Debit Memo Payment	10080",
                jatuhTempo: "04/08/2022",
                deskripsi: "Tolong buatkan invoice untu",
                mataUang: "",
                jumlah: "16.330,60",
                sisaPiutang: "1.484,60",
              },
            ],
          },
        ];
      }, 500);
    },
    handleExpanded(index) {
      const report = this.reports[index];

      report.isExpanded = !report.isExpanded;
    },
    isShowBorderDark() {},
  },
};
</script>

<style scoped>
.border-top-dark {
  border-top-width: 1.01px;
  border-top-color: var(--colors-dark);
}
</style>
