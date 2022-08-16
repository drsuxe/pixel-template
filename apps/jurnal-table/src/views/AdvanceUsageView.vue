<template>
  <mp-box display="flex" flex-direction="column" gap="16">
    <JTable
      id="table-1"
      :loading="loading"
      :heads="heads"
      :items="datas"
      :checkbox="true"
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
          <mp-button size="sm" @click="printPdf"> Cetak PDF</mp-button>
          <mp-button size="sm" variant="ghost" @click="deleteData"> Hapus</mp-button>
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
      </template>
    </JTable>
  </mp-box>
</template>

<script>
import { MpTableCell, MpBox, MpFlex, MpText, MpBadge, MpTag, MpPopover, MpPopoverTrigger, MpPopoverContent, MpTooltip, MpIcon, MpButton } from "@mekari/pixel";
import JTable from "../components/JTable.vue";
import { TextEllipsis } from "../components/TextEllipsis";

export default {
  components: {
    JTable,
    TextEllipsis,
    MpTableCell,
    MpBox,
    MpFlex,
    MpText,
    MpBadge,
    MpTag,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpTooltip,
    MpIcon,
    MpButton,
  },
  data() {
    return {
      loading: false,
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
    };
  },
  methods: {
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

      this.fetchData();
    },
    onChangePage(data) {
      console.group("onSorting");
      console.log(data);
      console.groupEnd();
      this.fetchData();
    },

    // Simulate
    fetchData() {
      console.log("Fetching data from api...");
      this.loading = true;

      setTimeout(() => {
        this.datas = JSON.parse(JSON.stringify(this.datas));
        this.loading = false;
      }, 500);
    },
    deleteData() {
      alert("Open Modal");
      this.loading = true;

      setTimeout(() => {
        this.datas = JSON.parse(JSON.stringify(this.datas));
        this.loading = false;
      }, 500);
    },
    printPdf() {
      alert("Open Modal Print PDF");
      console.log("Open Modal");
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
