<template>
  <mp-box>
    <mp-heading as="h2" font-size="xl"> Pembatalan faktur </mp-heading>

    <mp-flex justify="space-between" mt="4">
      <mp-flex>
        <mp-form-control>
          <mp-date-picker v-model="date" @change="handleFilterData" placeholder="Masa pajak" />
        </mp-form-control>
      </mp-flex>

      <mp-flex>
        <mp-form-control>
          <mp-input-group>
            <mp-input-left-addon :with-background="false">
              <mp-icon name="search" size="sm" />
            </mp-input-left-addon>
            <mp-input placeholder="Cari..." />
          </mp-input-group>
        </mp-form-control>
      </mp-flex>
    </mp-flex>

    <mp-flex v-if="isLoading" direction="column" align-items="center" justify-content="center" pt="12">
      <mp-spinner />
      <mp-text font-weight="semibold" mt="3">Loading transactions...</mp-text>
    </mp-flex>

    <template v-if="!isLoading && !isEmpty">
      <mp-table-container width="full" max-width="full" overflow="scroll" mt="4">
        <mp-table>
          <mp-table-head is-fixed>
            <mp-table-row position="relative">
              <mp-table-cell as="th" scope="col">
                <mp-checkbox :is-checked="isCheckedAll" :is-indeterminate="isIndeterminate" @change="handleCheckAll" />

                <mp-flex v-if="showBulkAction" position="absolute" top="0" left="0" align-items="center" gap="6" ml="10" h="full" w="full">
                  <mp-flex align="center" gap="2" bg="white" h="full" w="full">
                    {{ totalChecked }} datas selected
                    <mp-button size="sm"> Bulk action </mp-button>
                  </mp-flex>
                </mp-flex>
              </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Kode seri</mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Nomor faktur pajak </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Pelanggan </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>BNPWP </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Tanggal faktur </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Status faktur </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Status approval </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Masa/tahun pajak </mp-box> </mp-table-cell>
              <mp-table-cell as="th" width="auto" min-width="auto" z-index="base" top="0" right="0" box-shadow="inset 2px 0px #D0D6DD" is-fixed />
            </mp-table-row>
          </mp-table-head>
          <mp-table-body>
            <mp-table-row v-for="(data, index) in datas" :key="data.id">
              <mp-table-cell as="td" scope="row">
                <mp-checkbox
                  :isChecked="data.isChecked"
                  @change="
                    (e) => {
                      handleCheck(index, e, data);
                    }
                  "
                />
              </mp-table-cell>
              <mp-table-cell as="td" scope="row"> {{ data.kodeSeri }} </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-text is-link>{{ data.nomorFakturPajak }}</mp-text>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row"> {{ data.pelanggan }} </mp-table-cell>
              <mp-table-cell as="td" scope="row"> {{ data.npwp }} </mp-table-cell>
              <mp-table-cell as="td" scope="row"> {{ data.tanggalFaktur }} </mp-table-cell>
              <mp-table-cell as="td" scope="row"> {{ data.nomorPengganti }} </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-badge variant="subtle" variant-color="gray">{{ data.statusApproval }}</mp-badge>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row"> {{ data.masukTahunPajak }} </mp-table-cell>
              <mp-table-cell as="td" scope="row" right="0" box-shadow="inset 2px 0px #D0D6DD" z-index="5" is-fixed>
                <mp-flex align="center" justify="end" gap="2">
                  <mp-button variant="outline">Approve</mp-button>

                  <mp-tooltip label="Komentar" :id="`tooltip-comment-${index}`">
                    <mp-box position="relative">
                      <mp-button-icon name="comment" @click="handleOpenModalChat(index)" />
                      <mp-badge v-if="index === 0" position="absolute" top="-1" right="-1" box-shadow="0 0 0 2px #fff" size="sm">5</mp-badge>
                    </mp-box>
                  </mp-tooltip>
                </mp-flex>
              </mp-table-cell>
            </mp-table-row>
          </mp-table-body>
        </mp-table>
      </mp-table-container>
      <TablePagination />
    </template>
    <mp-box v-if="!isLoading && isEmpty" pt="12">
      <EmptyState type="no-data" title="Belum ada transaksi" description="Transaksi yang membutuhkan persetujuan akan muncul di sini." />
    </mp-box>

    <ModalChat :type="modalChatType" :isApproved="modalChatApproved" :is-open="isModalChatOpen" @handleClose="isModalChatOpen = false" />
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpBox,
  MpText,
  MpHeading,
  MpFormControl,
  MpDatePicker,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpIcon,
  MpButton,
  MpButtonIcon,
  MpBadge,
  MpCheckbox,
  MpTooltip,
  MpSpinner,
} from "@mekari/pixel";
import ModalChat from "./slices/ModalChat.vue";
import TablePagination from "./slices/TablePagination.vue";
import EmptyState from "./slices/EmptyState.vue";

export default {
  name: "TableWithData",
  components: {
    MpFlex,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpBox,
    MpHeading,
    MpText,
    MpFormControl,
    MpDatePicker,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpIcon,
    MpButton,
    MpButtonIcon,
    MpBadge,
    ModalChat,
    TablePagination,
    MpCheckbox,
    MpTooltip,
    MpSpinner,
    EmptyState,
  },
  data: function () {
    return {
      date: new Date(),
      isLoading: false,
      isEmpty: false,
      datas: [
        {
          id: 1,
          isChecked: false,
          kodeSeri: "080",
          nomorFakturPajak: "900.22.14708506",
          pelanggan: "PT Asia Teknologi",
          npwp: "71.103.328.2-416.001",
          tanggalFaktur: "01/05/2022",
          nomorPengganti: "Normal-Pengganti",
          statusApproval: "Menunggu disetujui",
          masukTahunPajak: "05/2022",
        },
        {
          id: 2,
          isChecked: false,
          kodeSeri: "080",
          nomorFakturPajak: "900.22.14708506",
          pelanggan: "PT Asia Teknologi",
          npwp: "71.103.328.2-416.001",
          tanggalFaktur: "01/05/2022",
          nomorPengganti: "Normal-Pengganti",
          statusApproval: "Menunggu disetujui",
          masukTahunPajak: "05/2022",
        },
        {
          id: 3,
          isChecked: false,
          kodeSeri: "080",
          nomorFakturPajak: "900.22.14708506",
          pelanggan: "PT Asia Teknologi",
          npwp: "71.103.328.2-416.001",
          tanggalFaktur: "01/05/2022",
          nomorPengganti: "Normal-Pengganti",
          statusApproval: "Menunggu disetujui",
          masukTahunPajak: "05/2022",
        },
        {
          id: 4,
          isChecked: false,
          kodeSeri: "080",
          nomorFakturPajak: "900.22.14708506",
          pelanggan: "PT Asia Teknologi",
          npwp: "71.103.328.2-416.001",
          tanggalFaktur: "01/05/2022",
          nomorPengganti: "Normal-Pengganti",
          statusApproval: "Menunggu disetujui",
          masukTahunPajak: "05/2022",
        },
        {
          id: 5,
          isChecked: false,
          kodeSeri: "080",
          nomorFakturPajak: "900.22.14708506",
          pelanggan: "PT Asia Teknologi",
          npwp: "71.103.328.2-416.001",
          tanggalFaktur: "01/05/2022",
          nomorPengganti: "Normal-Pengganti",
          statusApproval: "Menunggu disetujui",
          masukTahunPajak: "05/2022",
        },
      ],
      modalChatApproved: false,
      modalChatType: "blank", // blank & comments
      isModalChatOpen: false,
    };
  },
  computed: {
    totalChecked() {
      return this.datas.filter((item) => item.isChecked === true).length;
    },
    showBulkAction() {
      return this.datas.filter((item) => item.isChecked === true).length >= 1;
    },
    isIndeterminate() {
      const checks = this.datas.map((value) => {
        return value.isChecked;
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
        return value.isChecked;
      });

      const totalData = checks.length;
      const totalSelectedData = checks.filter(Boolean).length;

      if (totalData === totalSelectedData) {
        return true;
      }

      return false;
    },
  },
  methods: {
    handleFilterData(e) {
      console.log(e);
      this.isLoading = true;

      setTimeout(() => {
        const currentDate = new Date();
        const givenDate = new Date(e);

        if (givenDate > currentDate) this.isEmpty = true;
        else this.isEmpty = false;

        this.isLoading = false;
      }, 500);
    },
    handleOpenModalChat(index) {
      if (index === 0) {
        this.modalChatType = "comments";
        this.modalChatApproved = false;
      }

      if (index === 1) {
        this.modalChatType = "comments";
        this.modalChatApproved = true;
      }

      if (index === 2) {
        this.modalChatType = "blank";
        this.modalChatApproved = false;
      }

      this.isModalChatOpen = true;
    },
    handleCheck(index, e) {
      console.log(e);
      this.datas[index].isChecked = e;
    },
    handleCheckAll(e) {
      console.log(e);
      this.datas = this.datas.map((value) => {
        return {
          ...value,
          ...{
            isChecked: e,
          },
        };
      });
    },
  },
};
</script>
