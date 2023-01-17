<template>
<div>
  <JTable id="table-1" :loading="loading" :heads="heads" :items="getItems" :checkbox="useCheckbox" :is-sortable="true"
    :use-pagination="true" :page="1" :per-page="10" :total-data="1001" @changePage="onChangePage" @check="onCheck"
    @checkAll="onCheckAll" @sorting="onSorting" :blankSlate="{
      state: 'no-data',
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    }">
    <template #bulkAction>
      <mp-text> transaksi dipilih</mp-text>
      <mp-flex gap="4">
        <mp-button size="sm" @click="isModalPrintPdfOpen = true"> Cetak PDF</mp-button>
        <mp-button size="sm" variant="ghost" @click="isModalDeleteOpen = true"> Hapus</mp-button>
      </mp-flex>
    </template>

    <template #default="{ item, index }">
      <mp-table-cell as="td" scope="row" vertical-align="top" :style="{
        height: 'auto',
        paddingTop: '0.875rem',
        paddingBottom: '0.875rem',
      }">
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
</div>
</template>

<script>
import { MpTableCell, MpBox, MpText, MpFlex, MpBadge, MpButton, MpTooltip, MpIcon } from "@mekari/pixel";
import JTable from "../components/JTable.vue";
import { TextEllipsis } from "../components/TextEllipsis";
import AwesomeTag from "../components/AwesomeTag";
import { beforeFilter, afterFilter } from "./datasets";

export default {
  name: "Table",
  components: {
    JTable,
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
  props: {
    dataType: {
      type: String,
      default: 'beforeFilter'
    },
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
      items: beforeFilter,
      modalChatType: "blank", // blank & comments
      modalChatApproved: false,
      isApproveLoading: false,
      isModalChatOpen: false,
      isModalDeleteOpen: false,
      isModalPrintPdfOpen: false,
    };
  },
  computed: {
    getItems() {
      if (this.dataType === 'beforeFilter' ) {
        return beforeFilter
      }

      return afterFilter
    }
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
    fetchData() {
      console.log("Fetching data from api...");
      this.loading = true;

      setTimeout(() => {
        this.items = afterFilter

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
