<template>
  <mp-box>
    <mp-flex width="full" justify-content="space-between" mb="6">
      <mp-flex gap="4">
        <mp-select placeholder="Penagihan" width="172px">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
        </mp-select>
        <mp-select placeholder="Semua status" width="172px">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
        </mp-select>
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
        <mp-table-row background-color="ice.50">
          <mp-table-cell as="th" scope="col" width="30px">
            <mp-checkbox id="head" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Tanggal
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="300px">
            No Transaksi
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col"> Pelanggan <mp-icon name="sort-default" /> </mp-table-cell>
          <mp-table-cell as="th" scope="col"> Jatuh tempo <mp-icon name="sort-default" /> </mp-table-cell>
          <mp-table-cell as="th" scope="col"> Status <mp-icon name="sort-default" /> </mp-table-cell>
          <mp-table-cell as="th" scope="col"> Sisa tagihan <mp-icon name="sort-default" /> </mp-table-cell>
          <mp-table-cell as="th" scope="col"> Total <mp-icon name="sort-default" /> </mp-table-cell>
          <mp-table-cell as="th" scope="col" width="150px"> Tag <mp-icon name="sort-default" /> </mp-table-cell>
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row v-for="(invoice, index) in invoices" :key="invoice.id" style="white-space: normal">
          <mp-table-cell as="td" scope="row">
            <mp-checkbox :isChecked="invoice.checked" v-model="invoices[index].checked" :id="`checkbox-${index}`" />
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-text>{{ invoice.date }}</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-flex gap="1">
              <mp-box flex-grow="1" bg="blue.50">
                <mp-text is-link font-size="md" line-height="md"> {{ invoice.checked }} {{ invoice.number }} </mp-text>
              </mp-box>
              <mp-box flex="none" bg="red.50">
                <mp-flex gap="1">
                  <mp-box v-if="invoice.attachment">
                    <mp-tooltip label="Attachment" :id="`attachment-${index}`">
                      <mp-icon size="sm" name="attachment" color="gray.100" />
                    </mp-tooltip>
                  </mp-box>
                  <mp-box v-if="invoice.join">
                    <mp-tooltip label="Join" :id="`attachment-${index}`">
                      <mp-icon size="sm" name="doc" color="gray.100" />
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
          <mp-table-cell as="td" scope="row" bg="red.50">
            <mp-text>{{ invoice.dueDate }}</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-badge
              variant="subtle"
              :variant-color="
                (invoice.status === 'Open' && 'orange') ||
                (invoice.status === 'Overdue' && 'red') ||
                (invoice.status === 'Partial' && 'orange') ||
                (invoice.status === 'Paid' && 'green')
              "
            >
              {{ invoice.status }}
            </mp-badge>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row"> {{ invoice.dueDate }} </mp-table-cell>
          <mp-table-cell as="td" scope="row"> {{ invoice.total }} </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-flex gap="3" align-items="center" flex-wrap="wrap">
              <mp-tag size="sm" variant="gray" v-for="value in invoice.tag.slice(0, invoice.tagExpanded ? invoice.tag.length : 1)" :key="value">
                {{ value }}
              </mp-tag>
              <mp-text v-if="invoice.tag.length !== 1" is-link font-size="sm" @click.native="handleTagExpanded(index)">
                <span v-if="invoice.tagExpanded"> Show less </span>
                <span v-else>{{ `+${invoice.tag.length - 1}` }} more</span>
              </mp-text>
            </mp-flex>
          </mp-table-cell>
        </mp-table-row>
      </mp-table-body>
    </mp-table>

    <mp-box padding-x="2" padding-y="4">
      <mp-flex justify-content="space-between">
        <mp-flex align-items="center">
          <mp-text color="gray.600" line-height="md" padding-right="1" padding-y="1"> Rows per page </mp-text>
          <mp-tooltip label="Result per page" position="bottom">
            <mp-button
              size="sm"
              variant="unstyled"
              height="7"
              display="inline-flex"
              padding-left="3"
              padding-right="2"
              padding-y="2"
              :_hover="{ backgroundColor: 'ice.50' }"
            >
              <mp-text font-weight="600" line-height="md">10</mp-text>
              <mp-icon name="caret-down" size="sm" />
            </mp-button>
          </mp-tooltip>
          <mp-text color="gray.600" line-height="md" padding-left="5" padding-y="1"> Showing 120-130 of 242 </mp-text>
        </mp-flex>
        <mp-flex align-items="center">
          <mp-tooltip label="Jump to page" position="bottom">
            <mp-box>
              <mp-select :value="3" size="sm" min-width="16">
                <option v-for="index in 25" :key="index" :value="index">
                  {{ index }}
                </option>
              </mp-select>
            </mp-box>
          </mp-tooltip>
          <mp-text color="gray.600" line-height="md" padding-left="2" padding-right="4" padding-y="1"> of 24 page </mp-text>
          <mp-tooltip label="Prev page" position="bottom">
            <mp-button-icon name="chevrons-left" size="sm" is-round padding-right="1" />
          </mp-tooltip>
          <mp-tooltip label="Next page" position="bottom">
            <mp-button-icon name="chevrons-right" size="sm" is-round padding-left="1" />
          </mp-tooltip>
        </mp-flex>
      </mp-flex>
    </mp-box>
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
  MpButtonIcon,
  MpTooltip,
  MpButton,
  MpSelect,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
} from "@mekari/pixel";

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
    MpButtonIcon,
    MpTooltip,
    MpButton,
    MpSelect,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
  },
  data() {
    return {
      invoices: [
        {
          id: 1,
          checked: false,
          date: "19/04/2022",
          number: "Sales Invoice with long title #1234",
          attachment: true,
          join: false,
          description: "",
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
          number: "Sales Invoice with very very long title #1234",
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
          number: "Sales Invoice #12345",
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
    };
  },
  methods: {
    handleTagExpanded(index) {
      console.log(index);
      this.invoices[index].tagExpanded = !this.invoices[index].tagExpanded;
    },
  },
};
</script>
