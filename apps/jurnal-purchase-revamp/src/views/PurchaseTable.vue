<template>
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
      <mp-table-cell
        as="td"
        scope="row"
        vertical-align="top"
        :style="{
          height: 'auto',
          paddingTop: '0.875rem',
          paddingBottom: '0.875rem',
        }"
      >
        <mp-text font-size="md" line-height="md">{{ item.date }}</mp-text>
      </mp-table-cell>
      <mp-table-cell as="td" scope="row" max-width="300px">
        <mp-flex gap="1">
          <mp-box flex-grow="1">
            <mp-text is-link font-size="md" line-height="md">
              {{ item.number }}
            </mp-text>
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

        <TextEllipsisCollapsible :id="`invoice-description-${index}`" v-if="item.description">
          {{ item.description }}
        </TextEllipsisCollapsible>
      </mp-table-cell>
      <mp-table-cell as="td" scope="row" max-width="100px">
        <TextEllipsis :id="`invoice-customer-${index}`">
          <mp-text is-link font-size="md" line-height="md">
            {{ item.customer }}
          </mp-text>
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
        <AwesomeTag :tags="item.tag" :id="`tag-item-${index}`" />
      </mp-table-cell>
    </template>
  </JTable>
</template>

<script>
import { MpTableCell, MpBox, MpText, MpFlex, MpBadge, MpButton, MpTooltip, MpIcon } from "@mekari/pixel";
import JTable from "../components/JTable.vue";
import { TextEllipsisCollapsible, TextEllipsis } from "../components/TextEllipsis";
import AwesomeTag from "../components/AwesomeTag";

export default {
  name: "Table",
  components: {
    JTable,
    TextEllipsisCollapsible,
    TextEllipsis,
    AwesomeTag,

    MpTableCell,
    MpBox,
    MpText,
    MpFlex,
    MpBadge,
    MpButton,
    MpTooltip,
    MpIcon,
  },
  data: function () {
    return {
      // Table
      loading: false,
      useCheckbox: true,
      heads: [
        {
          title: "Tanggal",
          key: "transaction_date",
          sort: "",
          width: "100px",
        },
        {
          title: "Nomor",
          key: "transaction_no",
          sort: "",
          width: "300px",
        },
        {
          title: "Supplier",
          key: "person_name",
          sort: "",
        },
        {
          title: "Jatuh tempo",
          key: "due_date",
          sort: "",
        },
        {
          title: "Status",
          key: "transaction_status",
          sort: "",
        },
        {
          title: "Sisa tagihan",
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
          date: "19/12/2022",
          number: "Purchase Invoice with very long title #0005",
          attachment: true,
          join: false,
          description:
            "A sale is a transaction between two or more parties, typically a buyer and a seller, in which goods or services are exchanged for money or other assets. In the financial markets, a sale is an agreement between a buyer and seller regarding the price of a security, and delivery of the security to the buyer in exchange for the agreed-upon compensation.",
          customer: "PT Mandala",
          dueDate: "09/01/2023",
          status: "Open",
          balance: "Rp10.000.000,00",
          total: "Rp30.000.000,00",
          tag: ["Bandung Bandung Raya Pusat With Long"],
          tagExpanded: false,
        },
        {
          id: 2,
          checked: false,
          date: "20/12/2022",
          number: "Purchase Invoice #0004",
          attachment: true,
          join: true,
          description: "Short description.",
          customer: "Rommy Agency",
          dueDate: "10/01/2023",
          status: "Open",
          balance: "Rp9.000.000,00",
          total: "Rp25.000.000,00",
          tag: ["Merak", "Bandung", "Yogyakarta Dengan Text yang panjang"],
          tagExpanded: false,
        },
        {
          id: 3,
          checked: false,
          date: "21/12/2022",
          number: "Purchase Invoice #0003",
          attachment: false,
          join: false,
          description: "Very long description will auto show tooltip.",
          customer: "Tommy Soeharto",
          dueDate: "11/01/2023",
          status: "Open",
          balance: "Rp8.000.000,00",
          total: "Rp30.000.000,00",
          tag: ["Bandung", "Mojokerto", "Sidoarjo"],
          tagExpanded: false,
        },
        {
          id: 4,
          checked: false,
          date: "22/12/2022",
          number: "Purchase Invoice #0002",
          attachment: false,
          join: false,
          description: "",
          customer: "CV Panjang Abadijaya Indonesia Merdeka",
          dueDate: "12/01/2023",
          status: "Open",
          balance: "Rp5.000.000,00",
          total: "Rp35.500.000,00",
          tag: ["Joglo", "Bandung", "Yogyakarta", "Medan", "Batam"],
          tagExpanded: false,
        },
        {
          id: 5,
          checked: false,
          date: "23/12/2022",
          number: "Purchase Invoice #0001",
          attachment: false,
          join: true,
          description: "",
          customer: "CV Jangka Nusantara",
          dueDate: "13/01/2023",
          status: "Open",
          balance: "Rp7.000.000,00",
          total: "Rp35.500.000,00",
          tag: ["Solo", "Yogyakarta", "Bandung", "Klaten", "Ngawi"],
          tagExpanded: false,
        },
        {
          id: 6,
          checked: false,
          date: "24/12/2022",
          number: "Purchase Invoice with very long title #0005",
          attachment: true,
          join: false,
          description:
            "A sale is a transaction between two or more parties, typically a buyer and a seller, in which goods or services are exchanged for money or other assets. In the financial markets, a sale is an agreement between a buyer and seller regarding the price of a security, and delivery of the security to the buyer in exchange for the agreed-upon compensation.",
          customer: "PT Mandala",
          dueDate: "13/01/2023",
          status: "Open",
          balance: "Rp10.000.000,00",
          total: "Rp80.000.000,00",
          tag: ["Bandung Pusat"],
          tagExpanded: false,
        },
        {
          id: 7,
          checked: false,
          date: "25/12/2022",
          number: "Purchase Invoice #0004",
          attachment: true,
          join: true,
          description: "Short description.",
          customer: "Rommy Agency",
          dueDate: "13/01/2023",
          status: "Open",
          balance: "Rp5.000.000,00",
          total: "Rp25.000.000,00",
          tag: ["Bandung", "Surabaya", "Yogyakarta"],
          tagExpanded: false,
        },
        {
          id: 8,
          checked: false,
          date: "26/12/2022",
          number: "Purchase Invoice #0003",
          attachment: false,
          join: false,
          description: "Very long description will auto show tooltip.",
          customer: "Tommy Soeharto",
          dueDate: "13/01/2023",
          status: "Open",
          balance: "Rp6.000.000,00",
          total: "Rp33.000.000,00",
          tag: ["Bandung", "Mojokerto", "Sidoarjo"],
          tagExpanded: false,
        },
        {
          id: 9,
          checked: false,
          date: "27/12/2022",
          number: "Purchase Invoice #0002",
          attachment: false,
          join: false,
          description: "",
          customer: "CV Panjang Abadijaya Indonesia Merdeka",
          dueDate: "13/01/2023",
          status: "Open",
          balance: "Rp5.500.000,00",
          total: "Rp55.500.000,00",
          tag: ["Bandung", "Surabaya", "Yogyakarta", "Medan", "Batam"],
          tagExpanded: false,
        },
        {
          id: 10,
          checked: false,
          date: "28/12/2022",
          number: "Purchase Invoice #0001",
          attachment: false,
          join: true,
          description: "",
          customer: "CV Jangka Nusantara",
          dueDate: "13/01/2023",
          status: "Open",
          balance: "Rp6.000.000,00",
          total: "Rp50.000.000,00",
          tag: ["Bandung", "Yogyakarta", "Semarang", "Klaten", "Ngawi"],
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
  methods: {
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
              number: "Purchase Invoice with long title #0005",
              attachment: true,
              join: false,
              description:
                "A sale is a transaction between two or more parties, typically a buyer and a seller, in which goods or services are exchanged for money or other assets. In the financial markets, a sale is an agreement between a buyer and seller regarding the price of a security, and delivery of the security to the buyer in exchange for the agreed-upon compensation.",
              customer: "PT Mandala",
              dueDate: "20/04/2022",
              status: "Open",
              balance: "Rp10.000.000,00",
              total: "Rp10.000.000,00",
              tag: ["Bandung"],
              tagExpanded: false,
            },
            {
              id: 2,
              approved: true,
              date: "18/04/2022",
              number: "Purchase Invoice long title #0004",
              attachment: true,
              join: true,
              description: "",
              customer: "Rommy Agency",
              dueDate: "20/04/2022",
              status: "Overdue",
              balance: "Rp5.000.000,00",
              total: "Rp5.000.000,00",
              tag: ["Merak", "Bandung", "Yogyakarta"],
              tagExpanded: false,
            },
            {
              id: 3,
              approved: true,
              date: "18/04/2022",
              number: "Purchase Invoice long title #0004",
              attachment: true,
              join: true,
              description: "",
              customer: "Rommy Agency",
              dueDate: "20/04/2022",
              status: "Overdue",
              balance: "Rp5.000.000,00",
              total: "Rp5.000.000,00",
              tag: ["Merak", "Surabaya", "Bandung"],
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
