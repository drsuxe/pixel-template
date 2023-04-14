<template>
  <mp-box>
    <mp-table-container has-shadow position="relative" overflow="auto">
      <mp-table :is-hoverable="false">
        <mp-table-head>
          <mp-table-row>
            <mp-table-cell
              as="th"
              scope="col"
              height="9"
              rowspan="2"
              background-color="white"
              width="226px"
              border-top-width="1px"
              top="0"
              left="0"
              is-fixed
              box-shadow="inset -2px 0px #D0D6DD"
            >
              Daftar akun
            </mp-table-cell>
            <mp-table-cell
              as="th"
              scope="col"
              height="9"
              colspan="2"
              background-color="white"
              text-align="center"
              border-top-width="1px"
              position="sticky"
              top="0"
            >
              Saldo awal
            </mp-table-cell>
            <mp-table-cell
              as="th"
              scope="col"
              height="9"
              colspan="2"
              background-color="white"
              border-left-width="1px"
              text-align="center"
              border-top-width="1px"
              position="sticky"
              top="0"
            >
              Pergerakan
            </mp-table-cell>
            <mp-table-cell
              as="th"
              scope="col"
              height="9"
              colspan="2"
              background-color="white"
              border-left-width="1px"
              text-align="center"
              border-top-width="1px"
              position="sticky"
              top="0"
            >
              Saldo akhir
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="th" scope="col" height="9" background-color="white" text-align="center"> Debit </mp-table-cell>
            <mp-table-cell as="th" scope="col" height="9" background-color="white" text-align="center"> Kredit </mp-table-cell>
            <mp-table-cell as="th" scope="col" height="9" background-color="white" border-left-width="1px" text-align="center"> Debit </mp-table-cell>
            <mp-table-cell as="th" scope="col" height="9" background-color="white" border-left-width="1px" text-align="center"> Kredit </mp-table-cell>
            <mp-table-cell as="th" scope="col" height="9" background-color="white" border-left-width="1px" text-align="center"> Debit </mp-table-cell>
            <mp-table-cell as="th" scope="col" height="9" background-color="white" border-left-width="1px" text-align="center"> Kredit </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <template v-for="parent in datasets">
            <mp-table-row id="parent" :key="parent.id">
              <mp-table-cell as="td" scope="row" colspan="4" height="9" bg="gray.25" font-weight="semibold" top="0" left="0" is-fixed> {{ parent.parent }} </mp-table-cell>
              <mp-table-cell as="td" scope="row" colspan="3" height="9" bg="gray.25"> </mp-table-cell>
            </mp-table-row>

            <template v-for="child in parent.children">
              <mp-table-row id="child" :key="`${parent.id}-${child}`">
                <mp-table-cell
                  as="td"
                  scope="row"
                  top="0"
                  left="0"
                  height="9"
                  vertical-align="top"
                  is-fixed
                  box-shadow="inset -2px 0px #D0D6DD"
                  white-space="normal"
                >
                  <mp-flex gap="6" max-width="226px" width="226px">
                    <mp-text flex="none"> 1-10101 </mp-text>
                    <mp-text> Unbilled Accounts</mp-text>
                  </mp-flex>
                </mp-table-cell>
                <mp-table-cell as="td" scope="row" height="9" text-align="right" vertical-align="top"> 50.000.000,00 </mp-table-cell>
                <mp-table-cell as="td" scope="row" height="9" text-align="right" vertical-align="top"> 0,00 </mp-table-cell>
                <mp-table-cell as="td" scope="row" height="9" text-align="right" vertical-align="top"> 105.500.000,00 </mp-table-cell>
                <mp-table-cell as="td" scope="row" height="9" text-align="right" vertical-align="top"> 0,00 </mp-table-cell>
                <mp-table-cell as="td" scope="row" height="9" text-align="right" vertical-align="top"> 155.500.000,00 </mp-table-cell>
                <mp-table-cell as="td" scope="row" height="9" text-align="right" vertical-align="top"> 0,00 </mp-table-cell>
              </mp-table-row>
            </template>
          </template>

          <mp-table-row id="total">
            <mp-table-cell
              as="td"
              scope="row"
              font-weight="semibold"
              bg="gray.25"
              border-bottom-color="dark"
              top="0"
              left="0"
              is-fixed
              shadow="inset -2px 0px #D0D6DD, 0px -1px 0px 0px #232933"
              height="9"
            >
              Total
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              text-align="right"
              font-weight="semibold"
              bg="gray.25"
              border-bottom-color="dark"
              shadow="0px -1px 0px 0px #232933"
              height="9"
            >
              50.000.000,00
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              text-align="right"
              font-weight="semibold"
              bg="gray.25"
              border-bottom-color="dark"
              shadow="0px -1px 0px 0px #232933"
              height="9"
            >
              50.000.000,00
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              text-align="right"
              font-weight="semibold"
              bg="gray.25"
              border-bottom-color="dark"
              shadow="0px -1px 0px 0px #232933"
              height="9"
            >
              170.614.279.515.00
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              text-align="right"
              font-weight="semibold"
              bg="gray.25"
              border-bottom-color="dark"
              shadow="0px -1px 0px 0px #232933"
              height="9"
            >
              170.614.279.515.00
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              text-align="right"
              font-weight="semibold"
              bg="gray.25"
              border-bottom-color="dark"
              shadow="0px -1px 0px 0px #232933"
              height="9"
            >
              110.573.279.515,00
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              text-align="right"
              font-weight="semibold"
              bg="gray.25"
              border-bottom-color="dark"
              shadow="0px -1px 0px 0px #232933"
              height="9"
            >
              116.125.734.699,60
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <mp-text mt="6" mb="72px">Kolom saldo awal di atas mencatat nilai <mp-text as="span" is-link>per tanggal Saldo Awal</mp-text> di Daftar Akun</mp-text>
  </mp-box>
</template>

<script>
import { MpBox, MpTableContainer, MpTable, MpTableHead, MpTableBody, MpTableRow, MpTableCell, MpText, MpFlex } from "@mekari/pixel";

export default {
  name: "TableCustomize",
  components: {
    MpBox,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpText,
    MpFlex,
  },
  props: {
    useSticky: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      datasets: [
        {
          id: 1,
          parent: "Aset",
          children: [1, 2, 3, 4, 5],
        },
        {
          id: 2,
          parent: "Ekuitas",
          children: [1, 2, 3, 4, 5],
        },
        {
          id: 3,
          parent: "Pendapatan",
          children: [1, 2, 3, 4, 5],
        },
        {
          id: 4,
          parent: "Beban",
          children: [1, 2, 3, 4, 5],
        },
      ],
    };
  },
};
</script>


<style>
table {
  border-collapse: separate;
  border-spacing: 0;
}

th {
  /* header cell */
  font-weight: 700;
  text-align: left;
  color: #272838;
  border-bottom: 2px solid red;
  background-color: green;
}
</style>
