<template>
  <mp-box>
    <mp-flex width="full" justify-content="space-between" mb="6">
      <mp-flex gap="4">
        <mp-box>
          <mp-autocomplete
            width="172px"
            :content-style="{ zIndex: 'popover', width: '172px' }"
            value="Penagihan"
            id="sales-invoice-penagihan"
            :data="['Penagihan', 'Faktur proforma', 'Tukar faktur']"
          />
        </mp-box>
        <mp-autocomplete
          width="172px"
          :content-style="{ zIndex: 'popover', width: '172px' }"
          value="Semua status"
          id="sales-invoice-semua-status"
          :data="['Semua status', 'Open', 'Overdue', 'Paid', 'Partial', 'Unpaid']"
        />
      </mp-flex>

      <mp-flex>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input width="276px" transition-property="box-shadow, border-color" placeholder="Cari transaksi..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>

    <mp-table-container overflow-x="auto">
      <mp-table :isHoverable="false">
        <mp-table-head>
          <mp-table-row background-color="ice.50" :position="showBulkAction ? 'relative' : ''">
            <mp-table-cell as="th" scope="col" width="39px">
              <mp-checkbox :is-checked="isCheckedAll" :is-indeterminate="isIndeterminate" @change="handleCheckAll" id="head" />
            </mp-table-cell>
            <mp-table-cell as="th" scope="col">
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
            <mp-table-cell as="th" scope="col">
              <mp-box v-if="!showBulkAction" cursor="pointer"> No Transaksi <mp-icon name="sort-default" /> </mp-box>
            </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              <mp-box v-if="!showBulkAction" cursor="pointer"> Pelanggan <mp-icon name="sort-default" /> </mp-box>
            </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              <mp-box v-if="!showBulkAction" cursor="pointer"> Jatuh tempo <mp-icon name="sort-default" /> </mp-box>
            </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              <mp-box v-if="!showBulkAction" cursor="pointer"> Status <mp-icon name="sort-default" /> </mp-box>
            </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              <mp-box v-if="!showBulkAction" cursor="pointer" text-align="right"> Sisa tagihan <mp-icon name="sort-default" /> </mp-box>
            </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              <mp-box v-if="!showBulkAction" cursor="pointer" text-align="right"> Total <mp-icon name="sort-default" /> </mp-box>
            </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              <mp-box v-if="!showBulkAction" cursor="pointer"> Tag <mp-icon name="sort-default" /> </mp-box>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row v-for="(invoice, index) in datas" :key="invoice.id" :style="{ whiteSpace: 'normal' }">
            <mp-table-cell as="td" scope="row" vertical-align="top" :style="{ height: 'auto', paddingTop: '0.875rem', paddingBottom: '0.875rem' }">
              <mp-checkbox
                min-height="5"
                :isChecked="invoice.checked"
                @change="(_, $e) => (datas[index].checked = $e.target.checked)"
                :id="`checkbox-${index}`"
              />
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top" :style="{ height: 'auto', paddingTop: '0.875rem', paddingBottom: '0.875rem' }">
              <mp-text font-size="md" line-height="md">{{ invoice.date }}</mp-text>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              vertical-align="top"
              max-width="300px"
              :style="{ height: 'auto', paddingTop: '0.875rem', paddingBottom: '0.875rem' }"
            >
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
                        <mp-icon size="sm" name="join-invoice" color="gray.600" />
                      </mp-tooltip>
                    </mp-box>
                  </mp-flex>
                </mp-box>
              </mp-flex>

              <TextEllipsis :id="`invoice-description-${index}`" v-if="invoice.description">
                <mp-text text-overflow="ellipsis" white-space="nowrap" font-size="sm" line-height="sm" color="gray.600" overflow="hidden">
                  {{ invoice.description }}
                </mp-text>
              </TextEllipsis>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              vertical-align="top"
              max-width="100px"
              :style="{ height: 'auto', paddingTop: '0.875rem', paddingBottom: '0.875rem' }"
            >
              <TextEllipsis :id="`invoice-customer-${index}`">
                <mp-text is-link font-size="md" line-height="md"> {{ invoice.customer }} </mp-text>
              </TextEllipsis>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top" :style="{ height: 'auto', paddingTop: '0.875rem', paddingBottom: '0.875rem' }">
              <mp-text font-size="md" line-height="md">{{ invoice.dueDate }}</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top" :style="{ height: 'auto', paddingTop: '0.875rem', paddingBottom: '0.875rem' }">
              <mp-badge variant="subtle" :variant-color="getBadgeVariantColor(invoice.status)">
                {{ invoice.status }}
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top" :style="{ height: 'auto', paddingTop: '0.875rem', paddingBottom: '0.875rem' }">
              <mp-text text-align="right" font-size="md" line-height="md">{{ invoice.balance }}</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top" :style="{ height: 'auto', paddingTop: '0.875rem', paddingBottom: '0.875rem' }">
              <mp-text text-align="right" font-size="md" line-height="md">{{ invoice.total }}</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top" :style="{ height: 'auto', paddingTop: '0.875rem', paddingBottom: '0.875rem' }">
              <mp-flex gap="3" align-items="center" flex-wrap="wrap" max-width="140px">
                <mp-tag size="sm" variant="gray" max-w="140px" v-for="value in invoice.tag.slice(0, 1)" :key="value">
                  <TextEllipsis :id="`tag-invoice-${index}`" :label="value">
                    <mp-text line-height="md"> {{ value }} </mp-text>
                  </TextEllipsis>
                </mp-tag>

                <mp-popover :id="`popover-invoice-${index}`">
                  <mp-popover-trigger>
                    <mp-box>
                      <mp-text v-if="invoice.tag.length !== 1" is-link font-size="sm"> {{ `+${invoice.tag.length - 1}` }} more </mp-text>
                    </mp-box>
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
    </mp-table-container>

    <TablePagination />

    <ModalDelete @handleClose="isModalDeleteOpen = false" name="Sales Invoice" :isOpen="isModalDeleteOpen" />
    <ModalPrintPdf @handleClose="isModalPrintPdfOpen = false" :isOpen="isModalPrintPdfOpen" />
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

import { TextEllipsis } from "../components/TextEllipsis";
import TablePagination from "./TablePagination.vue";
import ModalDelete from "./ModalDelete.vue";
import ModalPrintPdf from "./ModalPrintPdf.vue";

export default {
  name: "TableSalesInvoice",
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
    TextEllipsis,
  },
  data() {
    return {
      datas: [
        {
          id: 1,
          checked: false,
          date: "19/04/2022",
          number: "Sales Invoice with very long title #0005",
          attachment: true,
          join: false,
          description:
            "A sale is a transaction between two or more parties, typically a buyer and a seller, in which goods or services are exchanged for money or other assets. In the financial markets, a sale is an agreement between a buyer and seller regarding the price of a security, and delivery of the security to the buyer in exchange for the agreed-upon compensation.",
          customer: "PT Mandala",
          dueDate: "20/04/2022",
          status: "Open",
          balance: "Rp 10.000.000",
          total: "Rp 10.000.000",
          tag: ["DKI Jakarta Raya Pusat"],
          tagExpanded: false,
        },
        {
          id: 2,
          checked: false,
          date: "18/04/2022",
          number: "Sales Invoice #0004",
          attachment: true,
          join: true,
          description: "Short description.",
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
          description: "Very long description will auto show tooltip.",
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
          customer: "CV Panjang Abadijaya Indonesia Merdeka",
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
