<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <mp-flex as="header" justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
          <mp-box>
            <mp-text is-link font-size="sm" color="blue.400" text-decoration="underline">Transaksi pembelian</mp-text>
            <mp-flex align="center">
              <mp-heading as="h1" font-size="2xl" font-weight="bold"> Buat permintaan pembelian </mp-heading>
              <mp-badge ml="2" variant="subtle" variant-color="orange"> Belum dibayar </mp-badge>
            </mp-flex>
          </mp-box>
          <mp-flex align-items="center">
            <mp-button-group>
              <mp-button variant="outline" left-icon="chevrons-left"></mp-button>
              <mp-button variant="outline" right-icon="chevrons-right"></mp-button>
            </mp-button-group>
          </mp-flex>
        </mp-flex>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-grid grid-template-columns="repeat(3, 1fr)" gap="6">
            <mp-flex>
              <mp-box flex="40%">
                <mp-text color="gray.600">Requestor</mp-text>
              </mp-box>
              <mp-box flex="60%">
                <mp-text>Bregga Tedy</mp-text>
              </mp-box>
            </mp-flex>
            <mp-flex>
              <mp-box flex="40%">
                <mp-text color="gray.600">Urgency</mp-text>
              </mp-box>
              <mp-box flex="60%">
                <mp-flex align="center">
                  <mp-icon name="priority-high" mr="2" />
                  <mp-text>Tinggi</mp-text>
                </mp-flex>
              </mp-box>
            </mp-flex>
          </mp-grid>
          <mp-divider border-style="dashed" my="8" />

          <mp-grid grid-template-columns="repeat(3, 1fr)" gap="6">
            <mp-box>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving staff</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>Jaka Permadi</mp-text>
                </mp-box>
              </mp-flex>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving email</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>jaka.permadi@mekari.com</mp-text>
                </mp-box>
              </mp-flex>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving email</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>jaka.permadi@mekari.com</mp-text>
                </mp-box>
              </mp-flex>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving email</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>jaka.permadi@mekari.com</mp-text>
                </mp-box>
              </mp-flex>
            </mp-box>
            <mp-box>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving staff</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>Jaka Permadi</mp-text>
                </mp-box>
              </mp-flex>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving email</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>jaka.permadi@mekari.com</mp-text>
                </mp-box>
              </mp-flex>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving email</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>jaka.permadi@mekari.com</mp-text>
                </mp-box>
              </mp-flex>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving email</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>jaka.permadi@mekari.com</mp-text>
                </mp-box>
              </mp-flex>
            </mp-box>
            <mp-box>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving staff</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>Jaka Permadi</mp-text>
                </mp-box>
              </mp-flex>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving email</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>jaka.permadi@mekari.com</mp-text>
                </mp-box>
              </mp-flex>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving email</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>jaka.permadi@mekari.com</mp-text>
                </mp-box>
              </mp-flex>
              <mp-flex>
                <mp-box flex="40%">
                  <mp-text color="gray.600">Approving email</mp-text>
                </mp-box>
                <mp-box flex="60%">
                  <mp-text>jaka.permadi@mekari.com</mp-text>
                </mp-box>
              </mp-flex>
            </mp-box>
          </mp-grid>
          <mp-divider border-style="dashed" my="8" />
          <mp-divider border-style="dashed" my="8" />

          <mp-box>
            <mp-table>
              <mp-table-head>
                <mp-table-row>
                  <mp-table-cell as="th" scope="col">Table Header 1</mp-table-cell>
                  <mp-table-cell as="th" scope="col">Table Header 3</mp-table-cell>
                  <mp-table-cell as="th" scope="col">Table Header 3</mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row">Table Content 1 Row 1</mp-table-cell>
                  <mp-table-cell as="td" scope="row">Table Content 2 Row 1</mp-table-cell>
                  <mp-table-cell as="td" scope="row">Table Content 3 Row 1</mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row">Table Content 1 Row 2</mp-table-cell>
                  <mp-table-cell as="td" scope="row">Table Content 2 Row 2</mp-table-cell>
                  <mp-table-cell as="td" scope="row">Table Content 3 Row 2</mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row">Table Content 1 Row 3</mp-table-cell>
                  <mp-table-cell as="td" scope="row">Table Content 2 Row 3</mp-table-cell>
                  <mp-table-cell as="td" scope="row">Table Content 3 Row 3</mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
          </mp-box>
          <mp-divider border-style="dashed" my="8" />

          <mp-grid grid-template-columns="repeat(3, 1fr)" gap="6">
            <mp-grid-item col-span="1">
              <mp-text> Message </mp-text>
              <mp-text> Memo </mp-text>
              <mp-text> Attachment </mp-text>
            </mp-grid-item>

            <mp-grid-item col-start="3" col-span="4">
              <mp-box padding="4" border="1px" border-color="gray.100" rounded="md">
                <mp-flex justify="space-between">
                  <mp-text font-weight="semibold">Total Product</mp-text>
                  <mp-text font-weight="semibold">2 Barang</mp-text>
                </mp-flex>
              </mp-box>
            </mp-grid-item>
          </mp-grid>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpGrid,
  MpGridItem,
  MpText,
  MpDivider,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpButton,
  MpButtonGroup,
  MpHeading,
  MpBadge,
  MpIcon,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  name: "SalesIndex",
  components: {
    MpBox,
    MpFlex,
    MpGrid,
    MpGridItem,
    MpText,
    MpDivider,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpButton,
    MpButtonGroup,
    MpHeading,
    MpBadge,
    MpIcon,
    //
    Header,
    Sidebar,
  },
};
</script>
<style scoped>
td {
  height: auto;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}
</style>
