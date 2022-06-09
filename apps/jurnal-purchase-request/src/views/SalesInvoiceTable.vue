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

    <mp-table>
      <mp-table-head>
        <mp-table-row background-color="ice.50">
          <mp-table-cell as="th" scope="col">
            <mp-checkbox id="head" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Tanggal
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            No Transaksi
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Pelanggan <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Jatuh tempo <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Status <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Sisa tagihan <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Total <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Tag <mp-icon name="sort-default" />
          </mp-table-cell>
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row v-for="index in 4" :key="index">
          <mp-box as="td" scope="row" v-bind="tableCellStyles">
            <mp-checkbox :id="`checkbox-${index}`" />
          </mp-box>
          <mp-box as="td" scope="row" v-bind="tableCellStyles">
            19/04/2022
          </mp-box>
          <mp-box
            as="td"
            scope="row"
            v-bind="tableCellStyles"
            max-width="200px"
          >
            <mp-flex align-items="center">
              <mp-box flex-grow="1">
                <mp-text is-link font-size="md" line-height="md">
                  Sales Invoice #0002</mp-text
                >
              </mp-box>
              <mp-box flex="none" width="50px">
                <mp-icon size="sm" name="attachment" color="gray.100" />
                <mp-icon size="sm" name="copy" color="gray.100" />
              </mp-box>
            </mp-flex>
            <mp-text
              v-if="index === 1"
              text-overflow="ellipsis"
              white-space="nowrap"
              font-size="sm"
              line-height="sm"
              color="gray.600"
              overflow="hidden"
            >
              A sale is a transaction between two or more parties, typically a
              buyer and a seller, in which goods or services are exchanged for
              money or other assets. In the financial markets, a sale is an
              agreement between a buyer and seller regarding the price of a
              security, and delivery of the security to the buyer in exchange
              for the agreed-upon compensation.
            </mp-text>
          </mp-box>
          <mp-box as="td" scope="row" v-bind="tableCellStyles">
            <mp-text is-link> PT Mandala </mp-text>
          </mp-box>
          <mp-box as="td" scope="row" v-bind="tableCellStyles">
            20/04/2022
          </mp-box>
          <mp-box as="td" scope="row" v-bind="tableCellStyles">
            <mp-badge variant="subtle" variant-color="orange"> Open </mp-badge>
          </mp-box>
          <mp-box as="td" scope="row" v-bind="tableCellStyles">
            Rp10.000.000
          </mp-box>
          <mp-box as="td" scope="row" v-bind="tableCellStyles">
            Rp10.000.000
          </mp-box>
          <mp-box as="td" scope="row" v-bind="tableCellStyles">
            <mp-flex gap="3" align-items="center">
              <mp-tag size="sm" variant="gray">Jakarta</mp-tag>
              <mp-text is-link font-size="sm"> +4 more </mp-text>
            </mp-flex>
          </mp-box>
        </mp-table-row>
      </mp-table-body>
    </mp-table>

    <mp-box padding-x="2" padding-y="4">
      <mp-flex justify-content="space-between">
        <mp-flex align-items="center">
          <mp-text
            color="gray.600"
            line-height="md"
            padding-right="1"
            padding-y="1"
          >
            Rows per page
          </mp-text>
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
          <mp-text
            color="gray.600"
            line-height="md"
            padding-left="5"
            padding-y="1"
          >
            Showing 120-130 of 242
          </mp-text>
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
          <mp-text
            color="gray.600"
            line-height="md"
            padding-left="2"
            padding-right="4"
            padding-y="1"
          >
            of 24 page
          </mp-text>
          <mp-tooltip label="Prev page" position="bottom">
            <mp-button-icon
              name="chevrons-left"
              size="sm"
              is-round
              padding-right="1"
            />
          </mp-tooltip>
          <mp-tooltip label="Next page" position="bottom">
            <mp-button-icon
              name="chevrons-right"
              size="sm"
              is-round
              padding-left="1"
            />
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
  name: "SalesInvoiceTable",
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
      tableCellStyles: {
        pl: "2",
        pr: "4",
        py: "3",
        fontSize: "md",
        fontFamily: "body",
        lineHeight: "md",
        letterSpacing: "normal",
        textAlign: "left",
        borderBottom: "1px",
        borderColor: "gray.100",
      },
    };
  },
};
</script>
