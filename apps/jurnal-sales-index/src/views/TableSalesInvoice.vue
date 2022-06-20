<template>
  <mp-box>
    <mp-flex width="full" justify-content="space-between" mb="6">
      <mp-flex gap="4">
        <mp-autocomplete value="Penagihan" width="172px" id="penagihan" :data="['Penagihan', 'Faktur proforma', 'Tukar faktur']" />
        <mp-autocomplete value="Semua status" width="172px" id="semua-status" :data="['Semua status', 'Open', 'Overdue', 'Paid', 'Partial', 'Unpaid']" />
      </mp-flex>

      <mp-flex>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input width="276px" placeholder="Cari transaksi..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>

    <mp-table :isHoverable="false" style="table-layout: fixed">
      <mp-table-head>
        <mp-table-row background-color="ice.50" :position="showBulkAction ? 'relative' : ''">
          <mp-table-cell as="th" scope="col" width="39px">
            <mp-checkbox :is-checked="isCheckedAll" :is-indeterminate="isIndeterminate" @change="handleCheckAll" id="head" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="100px">
            <mp-flex v-if="showBulkAction" position="absolute" top="9px" align-items="center" gap="6">
              <mp-text> {{ this.datas.filter((item) => item.checked === true).length }} transaksi dipilih</mp-text>
              <mp-flex gap="4">
                <mp-button size="sm" @click="isModalPrintPdfOpen = true"> Cetak PDF</mp-button>
                <mp-button size="sm" variant="ghost" @click="isModalDeleteOpen = true"> Hapus</mp-button>
              </mp-flex>
            </mp-flex>

            <mp-box cursor="pointer" v-else>
              Tanggal
              <mp-icon name="sort-default" />
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="243px">
            <mp-box v-if="!showBulkAction" cursor="pointer"> No Transaksi <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="155px">
            <mp-box v-if="!showBulkAction" cursor="pointer"> Pelanggan <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            <mp-box v-if="!showBulkAction" cursor="pointer"> Jatuh tempo <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="79px">
            <mp-box v-if="!showBulkAction" cursor="pointer"> Status <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            <mp-box v-if="!showBulkAction" cursor="pointer" text-align="right"> Sisa tagihan <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            <mp-box v-if="!showBulkAction" cursor="pointer" text-align="right"> Total <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="150px">
            <mp-box v-if="!showBulkAction"> Tag <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row v-for="(invoice, index) in datas" :key="invoice.id" style="white-space: normal">
          <mp-table-cell as="td" scope="row">
            <mp-checkbox :isChecked="invoice.checked" @change="(_, $e) => (datas[index].checked = $e.target.checked)" :id="`checkbox-${index}`" />
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text>{{ invoice.date }}</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-flex gap="1">
              <mp-box flex-grow="1">
                <mp-text is-link font-size="md" line-height="md"> {{ invoice.number }} </mp-text>
              </mp-box>
              <mp-box flex="none">
                <mp-flex gap="1">
                  <mp-box v-if="invoice.attachment" cursor="pointer">
                    <mp-tooltip label="Attachment" :id="`attachment-${index}`">
                      <mp-icon size="sm" name="attachment" color="gray.600" />
                    </mp-tooltip>
                  </mp-box>
                  <mp-box v-if="invoice.join" cursor="pointer">
                    <mp-tooltip label="Join" :id="`join-${index}`">
                      <mp-icon size="sm" name="doc" color="gray.600" />
                    </mp-tooltip>
                  </mp-box>
                </mp-flex>
              </mp-box>
            </mp-flex>
            <mp-text
              v-if="invoice.description"
              text-overflow="ellipsis"
              white-space="nowrap"
              font-size="sm"
              line-height="sm"
              color="gray.600"
              overflow="hidden"
            >
              {{ invoice.description }}
            </mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text is-link text-overflow="ellipsis" white-space="nowrap" overflow="hidden"> {{ invoice.customer }} </mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text>{{ invoice.dueDate }}</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-badge variant="subtle" :variant-color="getBadgeVariantColor(invoice.status)">
              {{ invoice.status }}
            </mp-badge>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text text-align="right">{{ invoice.balance }}</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text text-align="right">{{ invoice.total }}</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-flex gap="3" align-items="center" flex-wrap="wrap">
              <mp-tag
                size="sm"
                variant="gray"
                max-width="224px"
                text-overflow="ellipsis"
                white-space="nowrap"
                overflow="hidden"
                v-for="value in invoice.tag.slice(0, 1)"
                :key="value"
              >
                {{ value }}
              </mp-tag>

              <mp-popover :id="`popover-${invoice.id}`">
                <mp-popover-trigger>
                  <mp-text v-if="invoice.tag.length !== 1" is-link font-size="sm"> {{ `+${invoice.tag.length - 1}` }} more </mp-text>
                </mp-popover-trigger>
                <mp-popover-content max-width="48" bg="white" rounded="md" shadow="lg" border-width="1px" p="2" border-color="gray.400" z-index="popover">
                  <mp-flex gap="1" flex-wrap="wrap">
                    <mp-tag size="sm" variant="gray" v-for="value in invoice.tag" :key="value">
                      {{ value }}
                    </mp-tag>
                  </mp-flex>
                </mp-popover-content>
              </mp-popover>
            </mp-flex>
          </mp-table-cell>
        </mp-table-row>
      </mp-table-body>
    </mp-table>

    <TablePagination />

    <ModalDelete @handleClose="isModalDeleteOpen = false" name="Sales Invoice" :isOpen="isModalDeleteOpen" />
    <ModalPrintPdf @handleClose="isModalPrintPdfOpen = false" :isOpen="isModalPrintPdfOpen" />
  </mp-box>
</template>

<script>
import {
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
  MpBadge,
  MpTag,
  MpTooltip,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpAutocomplete,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpButton,
} from "@mekari/pixel";

import TablePagination from "./TablePagination.vue";
import ModalDelete from "./ModalDelete.vue";
import ModalPrintPdf from "./ModalPrintPdf.vue";

export default {
  name: "TableSalesInvoice",
  components: {
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
    MpBadge,
    MpTag,
    MpTooltip,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpAutocomplete,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    TablePagination,
    ModalDelete,
    ModalPrintPdf,
    MpButton,
  },
  data() {
    return {
      datas: [
        {
          id: 1,
          checked: false,
          date: "19/04/2022",
          number: "Sales Invoice with long title #0005",
          attachment: true,
          join: false,
          description:
            "A sale is a transaction between two or more parties, typically a buyer and a seller, in which goods or services are exchanged for money or other assets. In the financial markets, a sale is an agreement between a buyer and seller regarding the price of a security, and delivery of the security to the buyer in exchange for the agreed-upon compensation.",
          customer: "PT Mandala",
          dueDate: "20/04/2022",
          status: "Open",
          balance: "Rp 10.000.000",
          total: "Rp 10.000.000",
          tag: ["Jakarta"],
          tagExpanded: false,
        },
        {
          id: 2,
          checked: false,
          date: "18/04/2022",
          number: "Sales Invoice #0004",
          attachment: true,
          join: true,
          description: "",
          customer: "Rommy Agency",
          dueDate: "20/04/2022",
          status: "Overdue",
          balance: "Rp 5.000.000",
          total: "Rp 5.000.000",
          tag: ["Merak", "Surabaya", "Yogyakarta"],
          tagExpanded: false,
        },
        {
          id: 3,
          checked: false,
          date: "17/04/2022",
          number: "Sales Invoice #0003",
          attachment: false,
          join: false,
          description: "",
          customer: "Tommy Soeharto",
          dueDate: "19/04/2022",
          status: "Partial",
          balance: "Rp 2.000.000",
          total: "Rp 3.000.000",
          tag: ["Gresik", "Mojokerto", "Sidoarjo"],
          tagExpanded: false,
        },
        {
          id: 4,
          checked: false,
          date: "16/04/2022",
          number: "Sales Invoice #0002",
          attachment: false,
          join: false,
          description: "",
          customer: "CV Abadi",
          dueDate: "20/04/2022",
          status: "Open",
          balance: "Rp 500.000",
          total: "Rp 500.000",
          tag: ["Joglo", "Surabaya", "Yogyakarta", "Medan", "Batam"],
          tagExpanded: false,
        },
        {
          id: 5,
          checked: false,
          date: "15/04/2022",
          number: "Sales Invoice #0001",
          attachment: false,
          join: true,
          description: "",
          customer: "CV Jangka Nusantara",
          dueDate: "20/04/2022",
          status: "Paid",
          balance: "Rp 0",
          total: "Rp 500.000",
          tag: ["Solo", "Yogyakarta", "Semarang", "Klaten", "Ngawi"],
          tagExpanded: false,
        },
      ],
      isModalDeleteOpen: false,
      isModalPrintPdfOpen: false,
    };
  },
  computed: {
    showBulkAction() {
      return this.datas.filter((item) => item.checked === true).length >= 1;
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
  },
  methods: {
    getBadgeVariantColor(status) {
      if (status === "Open") return "orange";
      if (status === "Overdue") return "red";
      if (status === "Partial") return "orange";
      if (status === "Paid") return "green";

      return "gray";
    },
    handleCheckAll(e) {
      console.log(e);
      this.datas = this.datas.map((value) => {
        return {
          ...value,
          ...{
            checked: e,
          },
        };
      });
    },
  },
};
</script>

<style scoped>
td {
  word-wrap: break-word;
}
</style>
