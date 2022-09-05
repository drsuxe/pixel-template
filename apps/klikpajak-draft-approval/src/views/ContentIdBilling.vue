<template>
  <mp-box>
    <mp-heading as="h2" font-size="xl"> ID Billing </mp-heading>

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
          <mp-table-head>
            <mp-table-row position="relative">
              <mp-table-cell as="th" scope="col">
                <mp-checkbox :is-checked="isCheckedAll" :is-indeterminate="isIndeterminate" @change="handleCheckAll" />

                <mp-flex v-if="showBulkAction" position="absolute" top="0" left="0" align-items="center" gap="6" ml="10" h="full" w="full">
                  <mp-flex align="center" gap="2" bg="white" h="full" w="full">
                    {{ totalChecked }} datas selected
                    <mp-button size="sm" @click="handleOpenModal"> Bulk action </mp-button>
                  </mp-flex>
                </mp-flex>
              </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>ID Billing</mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Jenis Pajak </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Masa Pajak </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Jumlah Pajak </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box> Status ID Billing </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col" />
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
              <mp-table-cell as="td" scope="row"> {{ data.idBilling }} </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-text is-link>{{ data.jenisPajak }}</mp-text>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row"> {{ data.masaPajak }} </mp-table-cell>
              <mp-table-cell as="td" scope="row"> {{ data.jumlahPajak }} </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-badge variant="subtle" variant-color="gray">{{ data.statusIdBilling }}</mp-badge>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
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

    <mp-modal :is-open="isModalOpen" :on-close="handleCloseModal" size="2xl">
      <mp-modal-content>
        <mp-modal-header> Bulk ID Billing </mp-modal-header>
        <mp-modal-close-button />
        <mp-modal-body>
          <mp-flex align="center" gap="2">
            <mp-text font-weight="semibold">Lakukan pembayaran sebelum :</mp-text>
            <mp-badge variant="subtle" variant-color="orange">25 Juli 2022</mp-badge>
          </mp-flex>

          <mp-table-container>
            <mp-table>
              <mp-table-head>
                <mp-table-row>
                  <mp-table-cell as="th" scope="col"> ID Billing </mp-table-cell>
                  <mp-table-cell as="th" scope="col"> Jenis pajak </mp-table-cell>
                  <mp-table-cell as="th" scope="col"> Masa pajak </mp-table-cell>
                  <mp-table-cell as="th" scope="col" text-align="right"> Jumlah pajak </mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row"> 381783749958172 </mp-table-cell>
                  <mp-table-cell as="td" scope="row"> PPN dalam Negeri </mp-table-cell>
                  <mp-table-cell as="td" scope="row"> 05/2022 </mp-table-cell>
                  <mp-table-cell as="td" scope="row" text-align="right"> Rp100.000,00 </mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row"> 381783749958172 </mp-table-cell>
                  <mp-table-cell as="td" scope="row"> PPN dalam Negeri </mp-table-cell>
                  <mp-table-cell as="td" scope="row"> 05/2022 </mp-table-cell>
                  <mp-table-cell as="td" scope="row" text-align="right"> Rp100.000,00 </mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row" colspan="3" text-align="right">
                    <mp-text font-weight="semibold">Jumlah yang harus di bayar</mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" colspan="1" text-align="right">
                    <mp-text font-weight="semibold">Rp200.000,00</mp-text>
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
          </mp-table-container>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button mr="3" variant="ghost" @click="handleCloseModal"> Cancel </mp-button>
          <mp-button> Approve </mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
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
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalFooter,
  MpModalBody,
  MpModalCloseButton,
} from "@mekari/pixel";
import ModalChat from "./slices/ModalChat.vue";
import TablePagination from "./slices/TablePagination.vue";
import EmptyState from "./slices/EmptyState.vue";

export default {
  name: "ContentIdBilling",
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
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
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
          idBilling: "381783749958172",
          jenisPajak: "PPN dalam Negeri",
          masaPajak: "05/2022",
          jumlahPajak: "Rp100.000,00",
          statusIdBilling: "Menunggu disetujui",
        },
        {
          id: 2,
          isChecked: false,
          idBilling: "381783749958172",
          jenisPajak: "PPN dalam Negeri",
          masaPajak: "05/2022",
          jumlahPajak: "Rp100.000,00",
          statusIdBilling: "Menunggu disetujui",
        },
        {
          id: 3,
          isChecked: false,
          idBilling: "381783749958172",
          jenisPajak: "PPN dalam Negeri",
          masaPajak: "05/2022",
          jumlahPajak: "Rp100.000,00",
          statusIdBilling: "Menunggu disetujui",
        },
        {
          id: 4,
          isChecked: false,
          idBilling: "381783749958172",
          jenisPajak: "PPN dalam Negeri",
          masaPajak: "05/2022",
          jumlahPajak: "Rp100.000,00",
          statusIdBilling: "Menunggu disetujui",
        },
        {
          id: 5,
          isChecked: false,
          idBilling: "381783749958172",
          jenisPajak: "PPN dalam Negeri",
          masaPajak: "05/2022",
          jumlahPajak: "Rp100.000,00",
          statusIdBilling: "Menunggu disetujui",
        },
      ],
      modalChatApproved: false,
      modalChatType: "blank", // blank & comments
      isModalChatOpen: false,
      isModalOpen: false,
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
    handleOpenModal() {
      this.isModalOpen = true;
    },
    handleCloseModal() {
      this.isModalOpen = false;
    },
  },
};
</script>
