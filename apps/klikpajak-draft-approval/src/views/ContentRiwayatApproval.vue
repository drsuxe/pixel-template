<template>
  <mp-box>
    <mp-heading as="h2" font-size="xl"> Riwayat Approval </mp-heading>

    <mp-flex justify="space-between" mt="4">
      <mp-flex gap="6">
        <mp-form-control id="tRWBF">
          <mp-autocomplete placeholder="Semua modul" :data="['Option 1', 'Option 2', 'Option 3']" :contentStyle="{ width: '64' }" />
        </mp-form-control>

        <mp-form-control id="tRWBxF">
          <mp-autocomplete placeholder="Semua tipe approval" :data="['Option 1', 'Option 2', 'Option 3']" :contentStyle="{ width: '64' }" />
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

    <template>
      <mp-table-container width="full" max-width="full" overflow="scroll" mt="4">
        <mp-table>
          <mp-table-head>
            <mp-table-row position="relative">
              <mp-table-cell as="th" scope="col"> <mp-box>Fitur</mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Tipe Approval </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Waktu approve </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Nama creator </mp-box> </mp-table-cell>
              <mp-table-cell as="th" scope="col"> <mp-box>Nama approver </mp-box> </mp-table-cell>
            </mp-table-row>
          </mp-table-head>
          <mp-table-body>
            <mp-table-row v-for="data in datas" :key="data.id">
              <mp-table-cell as="td" scope="row"> {{ data.fitur }} </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-text is-link>{{ data.typeApproval }}</mp-text>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row"> {{ data.waktuApprove }} </mp-table-cell>
              <mp-table-cell as="td" scope="row"> {{ data.namaCreator }} </mp-table-cell>
              <mp-table-cell as="td" scope="row"> {{ data.namaApprover }} </mp-table-cell>
            </mp-table-row>
          </mp-table-body>
        </mp-table>
      </mp-table-container>
      <TablePagination />
    </template>

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
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpIcon,
  MpAutocomplete,
} from "@mekari/pixel";
import ModalChat from "./slices/ModalChat.vue";
import TablePagination from "./slices/TablePagination.vue";

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
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpIcon,
    ModalChat,
    TablePagination,
    MpAutocomplete,
  },
  data: function () {
    return {
      date: new Date(),
      isLoading: false,
      isEmpty: false,
      datas: [
        {
          id: 1,
          fitur: "E-Billing",
          typeApproval: "Pembuatan ID Billing",
          waktuApprove: "04 Jul 2022 pada 16:06",
          namaCreator: "Agung Setiawarman",
          namaApprover: "Rizal Candra",
        },
        {
          id: 2,
          fitur: "E-Billing",
          typeApproval: "Pembuatan ID Billing",
          waktuApprove: "04 Jul 2022 pada 16:06",
          namaCreator: "Agung Setiawarman",
          namaApprover: "Rizal Candra",
        },
        {
          id: 3,
          fitur: "E-Billing",
          typeApproval: "Pembuatan ID Billing",
          waktuApprove: "04 Jul 2022 pada 16:06",
          namaCreator: "Agung Setiawarman",
          namaApprover: "Rizal Candra",
        },
        {
          id: 4,
          fitur: "E-Billing",
          typeApproval: "Pembuatan ID Billing",
          waktuApprove: "04 Jul 2022 pada 16:06",
          namaCreator: "Agung Setiawarman",
          namaApprover: "Rizal Candra",
        },
        {
          id: 5,
          fitur: "E-Billing",
          typeApproval: "Pembuatan ID Billing",
          waktuApprove: "04 Jul 2022 pada 16:06",
          namaCreator: "Agung Setiawarman",
          namaApprover: "Rizal Candra",
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
