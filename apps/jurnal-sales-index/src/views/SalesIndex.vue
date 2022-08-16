<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SectionSalesHeader />
        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <SectionSummaryBox />
          <mp-box>
            <mp-tabs id="sales-index-tab" :default-index="defaultIndex" @change="handleChangeTab">
              <mp-tab-list>
                <mp-tab id="sales-invoice"> Faktur pembelian </mp-tab>
                <mp-tab id="sales-delivery"> Pengiriman </mp-tab>
                <mp-tab> Pemesanan </mp-tab>
                <mp-tab> Penawaran </mp-tab>
                <mp-tab>
                  Membutuhkan persetujuan
                  <mp-badge ml="2" variant="solid" :variant-color="currentTab === 'require-approval' ? 'blue' : 'gray'"> 3 </mp-badge>
                </mp-tab>
              </mp-tab-list>
            </mp-tabs>

            <mp-flex width="full" justify-content="space-between" mb="6">
              <mp-flex gap="4">
                <template v-if="currentTab === 'sales-invoice'">
                  <mp-autocomplete
                    width="172px"
                    :content-style="{ zIndex: 'popover', width: '172px' }"
                    value="Penagihan"
                    id="sales-invoice-penagihan"
                    :data="['Penagihan', 'Faktur proforma', 'Tukar faktur']"
                  />
                  <mp-autocomplete
                    width="172px"
                    :content-style="{ zIndex: 'popover', width: '172px' }"
                    value="Semua status"
                    id="sales-invoice-semua-status"
                    :data="['Semua status', 'Open', 'Overdue', 'Paid', 'Partial', 'Unpaid']"
                  />
                </template>

                <template v-if="currentTab === 'sales-delivery'">
                  <mp-autocomplete
                    width="172px"
                    :content-style="{ zIndex: 'popover', width: '172px' }"
                    value="Semua status"
                    id="sales-delivery-semua-status"
                    :data="['Semua status', 'Open', 'Closed']"
                  />
                </template>

                <template v-if="currentTab === 'sales-order'">
                  <mp-autocomplete
                    width="172px"
                    :content-style="{ zIndex: 'popover', width: '172px' }"
                    value="Pemesanan"
                    id="sales-order-pemesanan"
                    :data="['Pemesanan', 'Proforma pemesanan']"
                  />
                  <mp-autocomplete
                    :content-style="{ zIndex: 'popover', width: '172px' }"
                    value="Semua status"
                    width="172px"
                    id="sales-order-status"
                    :data="['Semua status', 'Open', 'Partially sent', 'Closed']"
                  />
                </template>

                <template v-if="currentTab === 'sales-quotation'">
                  <mp-autocomplete
                    width="172px"
                    :content-style="{ zIndex: 'popover', width: '172px' }"
                    value="Semua status"
                    id="sales-quote-semua-status"
                    :data="['Semua status', 'Open', 'Closed']"
                  />
                </template>
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

            <JTable
              id="table-1"
              :loading="loading"
              :heads="heads"
              :items="items"
              :checkbox="useCheckbox"
              :is-sortable="true"
              :use-pagination="true"
              :page="1"
              :per-page="10"
              :total-data="1001"
              @changePage="onChangePage"
              @check="onCheck"
              @checkAll="onCheckAll"
              @sorting="onSorting"
              :blankSlate="{
                state: 'no-data',
                title: 'Lorem Ipsum',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
              }"
            >
              <template #bulkAction>
                <mp-text> transaksi dipilih</mp-text>
                <mp-flex gap="4">
                  <mp-button size="sm" @click="isModalPrintPdfOpen = true"> Cetak PDF</mp-button>
                  <mp-button size="sm" variant="ghost" @click="isModalDeleteOpen = true"> Hapus</mp-button>
                </mp-flex>
              </template>

              <template #default="{ item, index }">
                <mp-table-cell as="td" scope="row" vertical-align="top" :style="{ height: 'auto', paddingTop: '0.875rem', paddingBottom: '0.875rem' }">
                  <mp-text font-size="md" line-height="md">{{ item.date }}</mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" max-width="300px">
                  <mp-flex gap="1">
                    <mp-box flex-grow="1">
                      <mp-text is-link font-size="md" line-height="md"> {{ item.number }} </mp-text>
                    </mp-box>
                    <mp-box flex="none">
                      <mp-flex gap="1">
                        <mp-box v-if="item.attachment" cursor="pointer">
                          <mp-tooltip label="Attachment" :id="`attachment-${index}`">
                            <mp-icon size="sm" name="attachment" color="gray.600" />
                          </mp-tooltip>
                        </mp-box>
                        <mp-box v-if="item.join" cursor="pointer">
                          <mp-tooltip label="Join" :id="`join-${index}`">
                            <mp-icon size="sm" name="join-invoice" color="gray.600" />
                          </mp-tooltip>
                        </mp-box>
                      </mp-flex>
                    </mp-box>
                  </mp-flex>

                  <TextEllipsis :id="`invoice-description-${index}`" v-if="item.description">
                    <mp-text text-overflow="ellipsis" white-space="nowrap" font-size="sm" line-height="sm" color="gray.600" overflow="hidden">
                      {{ item.description }}
                    </mp-text>
                  </TextEllipsis>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" max-width="100px">
                  <TextEllipsis :id="`invoice-customer-${index}`">
                    <mp-text is-link font-size="md" line-height="md"> {{ item.customer }} </mp-text>
                  </TextEllipsis>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-text font-size="md" line-height="md">{{ item.dueDate }}</mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-badge variant="subtle" :variant-color="getBadgeVariantColor(item.status)">
                    {{ item.status }}
                  </mp-badge>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-text text-align="right" font-size="md" line-height="md">{{ item.balance }}</mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-text text-align="right" font-size="md" line-height="md">{{ item.total }}</mp-text>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row">
                  <mp-flex gap="3" align-items="center" flex-wrap="wrap" max-width="140px">
                    <mp-tag size="sm" variant="gray" max-w="140px" v-for="value in item.tag.slice(0, 1)" :key="value">
                      <TextEllipsis :id="`tag-invoice-${index}`" :label="value">
                        <mp-text line-height="md"> {{ value }} </mp-text>
                      </TextEllipsis>
                    </mp-tag>

                    <mp-popover :id="`popover-invoice-${index}`">
                      <mp-popover-trigger>
                        <mp-box>
                          <mp-text v-if="item.tag.length !== 1" is-link font-size="sm"> {{ `+${item.tag.length - 1}` }} more </mp-text>
                        </mp-box>
                      </mp-popover-trigger>
                      <mp-popover-content max-width="48" bg="white" rounded="md" shadow="lg" border-width="1px" p="2" border-color="gray.400" z-index="popover">
                        <mp-flex gap="1" flex-wrap="wrap">
                          <mp-tag size="sm" variant="gray" v-for="value in item.tag" :key="value">
                            {{ value }}
                          </mp-tag>
                        </mp-flex>
                      </mp-popover-content>
                    </mp-popover>
                  </mp-flex>
                </mp-table-cell>
                <mp-table-cell
                  v-if="currentTab === 'require-approval'"
                  as="td"
                  scope="row"
                  vertical-align="top"
                  :style="{ height: 'auto', paddingTop: '0.875rem', paddingBottom: '0.875rem' }"
                >
                  <mp-flex align="center" justify="end" gap="2">
                    <mp-button v-if="!item.approved" size="sm" @click="handleApprove" :is-loading="isApproveLoading" variant="outline">Approve</mp-button>

                    <mp-popover :id="`popover-approval-log-${index}`">
                      <mp-popover-trigger>
                        <mp-box>
                          <mp-tooltip label="Log persetujuan" :id="`tooltip-approval-log-${index}`">
                            <mp-button-icon name="time" />
                          </mp-tooltip>
                        </mp-box>
                      </mp-popover-trigger>
                      <mp-popover-content max-width="392px" z-index="popover">
                        <mp-popover-panel bg="white" px="4">
                          <mp-text font-weight="semibold" mb="4">Approval Log</mp-text>

                          <PopoverTimelineAccordion v-if="index === 0" />
                          <PopoverTimeline v-if="index === 1" />
                          <mp-box v-if="index === 2" my="8">
                            <mp-text text-align="center" color="gray.400">No approval logs for this transaction.</mp-text>
                          </mp-box>
                        </mp-popover-panel>
                      </mp-popover-content>
                    </mp-popover>

                    <mp-tooltip label="Komentar" :id="`tooltip-comment-${index}`">
                      <mp-box position="relative">
                        <mp-button-icon name="comment" @click="handleOpenModalChat(index)" />
                        <mp-badge v-if="index === 0" position="absolute" top="-1" right="-1" box-shadow="0 0 0 2px #fff" size="sm">5</mp-badge>
                      </mp-box>
                    </mp-tooltip>
                  </mp-flex>
                </mp-table-cell>
              </template>
            </JTable>
          </mp-box>

          <ModalDelete @handleClose="isModalDeleteOpen = false" name="Sales Invoice" :isOpen="isModalDeleteOpen" />
          <ModalPrintPdf @handleClose="isModalPrintPdfOpen = false" :isOpen="isModalPrintPdfOpen" />
          <ModalChat :type="modalChatType" :isApproved="modalChatApproved" :is-open="isModalChatOpen" @handleClose="isModalChatOpen = false" />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpTabs,
  MpTabList,
  MpTab,
  MpBadge,
  MpAutocomplete,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpIcon,
  MpTableCell,
  MpText,
  MpTag,
  MpTooltip,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverPanel,
  MpButton,
  MpButtonIcon,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SectionSalesHeader from "../views/SectionSalesHeader.vue";
import SectionSummaryBox from "./SectionSummaryBox.vue";
import { TextEllipsis } from "../components/TextEllipsis";
import JTable from "../components/JTable.vue";
import PopoverTimelineAccordion from "./PopoverTimelineAccordion.vue";
import PopoverTimeline from "./PopoverTimeline.vue";
import ModalChat from "./ModalChat.vue";
import ModalDelete from "./ModalDelete.vue";
import ModalPrintPdf from "./ModalPrintPdf.vue";

export default {
  name: "SalesIndex",
  components: {
    MpBox,
    MpFlex,
    MpTabs,
    MpTabList,
    MpTab,
    MpBadge,
    MpAutocomplete,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpIcon,
    MpTableCell,
    MpText,
    MpTag,
    MpTooltip,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverPanel,
    MpButton,
    MpButtonIcon,
    Header,
    Sidebar,
    TextEllipsis,
    JTable,
    SectionSalesHeader,
    SectionSummaryBox,
    PopoverTimelineAccordion,
    PopoverTimeline,
    ModalChat,
    ModalDelete,
    ModalPrintPdf,
  },
  data() {
    return {
      // Tab
      tabs: ["sales-invoice", "sales-delivery", "sales-order", "sales-quotation", "require-approval"],
      defaultIndex: 0,
      currentTab: null,

      // Table
      loading: false,
      useCheckbox: true,
      heads: [
        {
          title: "Date",
          key: "transaction_date",
          sort: "",
          width: "100px",
        },
        {
          title: "Number",
          key: "transaction_no",
          sort: "",
          width: "300px",
        },
        {
          title: "Customer",
          key: "person_name",
          sort: "",
        },
        {
          title: "Due date",
          key: "due_date",
          sort: "",
        },
        {
          title: "Status",
          key: "transaction_status",
          sort: "",
        },
        {
          title: "Balance due",
          key: "balance_due",
          sort: "",
          align: "right",
        },
        {
          title: "Total",
          key: "total_amount",
          sort: "",
          align: "right",
        },
        {
          title: "Tags",
          key: "tags_name",
          sort: "",
          width: "185px",
        },
      ],
      items: [
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
        {
          id: 6,
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
          id: 7,
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
          id: 8,
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
          id: 9,
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
          id: 10,
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
      modalChatType: "blank", // blank & comments
      modalChatApproved: false,
      isApproveLoading: false,
      isModalChatOpen: false,
      isModalDeleteOpen: false,
      isModalPrintPdfOpen: false,
    };
  },
  mounted() {
    this.handleChangeTab(this.defaultIndex);
  },
  methods: {
    // Tab
    handleChangeTab(e) {
      this.currentTab = this.tabs[e];

      if (this.currentTab === "require-approval") {
        this.useCheckbox = false;
        this.fetchData("require-approval");
        this.heads = [
          {
            title: "Date",
            key: "transaction_date",
            sort: "",
            width: "100px",
          },
          {
            title: "Number",
            key: "transaction_no",
            sort: "",
            width: "300px",
          },
          {
            title: "Customer",
            key: "person_name",
            sort: "",
          },
          {
            title: "Due date",
            key: "due_date",
            sort: "",
          },
          {
            title: "Status",
            key: "transaction_status",
            sort: "",
          },
          {
            title: "Balance due",
            key: "balance_due",
            sort: "",
            align: "right",
          },
          {
            title: "Total",
            key: "total_amount",
            sort: "",
            align: "right",
          },
          {
            title: "Tags",
            key: "tags_name",
            sort: "",
            width: "185px",
          },
          {
            title: "",
            key: "action",
            sort: "",
            width: "185px",
            disableSorting: true,
          },
        ];
      } else {
        this.useCheckbox = true;
        this.fetchData();
        this.heads = [
          {
            title: "Date",
            key: "transaction_date",
            sort: "",
            width: "100px",
          },
          {
            title: "Number",
            key: "transaction_no",
            sort: "",
            width: "300px",
          },
          {
            title: "Customer",
            key: "person_name",
            sort: "",
          },
          {
            title: "Due date",
            key: "due_date",
            sort: "",
          },
          {
            title: "Status",
            key: "transaction_status",
            sort: "",
          },
          {
            title: "Balance due",
            key: "balance_due",
            sort: "",
            align: "right",
          },
          {
            title: "Total",
            key: "total_amount",
            sort: "",
            align: "right",
          },
          {
            title: "Tags",
            key: "tags_name",
            sort: "",
            width: "185px",
          },
        ];
      }
    },

    // Table
    onCheck(item, items) {
      console.group("onCheck");
      console.log(item);
      console.log(items);
      console.groupEnd();
    },
    onCheckAll(items) {
      console.group("onCheckAll");
      console.log(items);
      console.groupEnd();
    },
    onSorting(head, heads) {
      console.group("onSorting");
      console.log(head);
      console.log(heads);

      this.heads = heads;
      console.groupEnd();

      if (this.currentTab === "require-approval") this.fetchData("require-approval");
      else this.fetchData();
    },
    onChangePage(data) {
      console.group("onSorting");
      console.log(data);
      console.groupEnd();

      if (this.currentTab === "require-approval") this.fetchData("require-approval");
      else this.fetchData();
    },

    // Simulate
    fetchData(e) {
      console.log("Fetching data from api...");
      this.loading = true;

      setTimeout(() => {
        if (e === "require-approval") {
          this.items = [
            {
              id: 1,
              approved: false,
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
              approved: true,
              date: "18/04/2022",
              number: "Sales Invoice long title #0004",
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
              approved: true,
              date: "18/04/2022",
              number: "Sales Invoice long title #0004",
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
          ];
        } else {
          this.items = JSON.parse(JSON.stringify(this.items));
        }

        this.loading = false;
      }, 300);
    },
    handleApprove() {
      this.isApproveLoading = true;

      setTimeout(() => {
        this.items[0].approved = true;
        this.isApproveLoading = false;

        this.$toast({
          variant: "success",
          title: "Transaksi telah disetujui",
          position: "top",
        });
      }, 1000);
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

    // Utils
    getBadgeVariantColor(status) {
      if (status === "Open") return "orange";
      if (status === "Overdue") return "red";
      if (status === "Partial") return "orange";
      if (status === "Paid") return "green";

      return "gray";
    },
  },
};
</script>

<style>
tbody > tr {
  white-space: normal !important;
}

tbody > tr > td {
  height: auto !important;
  padding-top: 0.875rem !important;
  padding-bottom: 0.875rem !important;
  vertical-align: top !important;
}
</style>
