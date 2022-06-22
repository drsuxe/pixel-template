<template>
  <mp-box>
    <mp-flex width="full" justify-content="space-between" mb="6">
      <mp-flex gap="4"> </mp-flex>

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
        <mp-table-row background-color="ice.50">
          <mp-table-cell as="th" scope="col" width="100px">
            <mp-box cursor="pointer">
              Tanggal
              <mp-icon name="sort-default" />
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="243px">
            <mp-box cursor="pointer"> No Transaksi <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="155px">
            <mp-box cursor="pointer"> Pelanggan <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            <mp-box cursor="pointer"> Jatuh tempo <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="79px">
            <mp-box cursor="pointer"> Status <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            <mp-box cursor="pointer" text-align="right"> Total <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="150px">
            <mp-box> Tag <mp-icon name="sort-default" /> </mp-box>
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="192px"> </mp-table-cell>
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row v-for="(invoice, index) in datas" :key="invoice.id" style="white-space: normal">
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-text font-size="md" line-height="md">{{ invoice.date }}</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
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
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-text is-link text-overflow="ellipsis" white-space="nowrap" overflow="hidden" font-size="md" line-height="md"> {{ invoice.customer }} </mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-text font-size="md" line-height="md">{{ invoice.dueDate }}</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-badge variant="subtle" :variant-color="getBadgeVariantColor(invoice.status)">
              {{ invoice.status }}
            </mp-badge>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-text text-align="right" font-size="md" line-height="md">{{ invoice.total }}</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" vertical-align="top">
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

          <mp-table-cell as="td" scope="row" vertical-align="top">
            <mp-flex align="center" justify="end" gap="2">
              <mp-button v-if="!invoice.approved" size="sm" @click="handleApprove" :is-loading="isApproveLoading">Approve</mp-button>

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
        </mp-table-row>
      </mp-table-body>
    </mp-table>

    <TablePagination />

    <ModalChat :type="modalChatType" :isApproved="modalChatApproved" :is-open="isModalChatOpen" @handleClose="isModalChatOpen = false" />
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
  MpIcon,
  MpText,
  MpBadge,
  MpTag,
  MpTooltip,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverPanel,
  MpButton,
  MpButtonIcon,
} from "@mekari/pixel";

import PopoverTimelineAccordion from "./PopoverTimelineAccordion.vue";
import PopoverTimeline from "./PopoverTimeline.vue";
import TablePagination from "./TablePagination.vue";
import ModalChat from "./ModalChat.vue";

export default {
  name: "TableRequireApproval",
  components: {
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpFlex,
    MpBox,
    MpIcon,
    MpText,
    MpBadge,
    MpTag,
    MpTooltip,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverPanel,
    MpButton,
    MpButtonIcon,
    PopoverTimelineAccordion,
    PopoverTimeline,
    TablePagination,
    ModalChat,
  },
  data() {
    return {
      datas: [
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
      ],
      modalChatType: "blank", // blank & comments
      modalChatApproved: false,
      isApproveLoading: false,
      isModalChatOpen: false,
    };
  },
  methods: {
    getBadgeVariantColor(status) {
      if (status === "Open") return "orange";
      if (status === "Overdue") return "red";
      if (status === "Partial") return "orange";
      if (status === "Paid") return "green";

      return "gray";
    },
    handleApprove() {
      this.isApproveLoading = true;

      setTimeout(() => {
        this.datas[0].approved = true;

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
  },
};
</script>

<style scoped>
td {
  word-wrap: break-word;
  height: auto;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}
</style>
