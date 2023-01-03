<template>
  <mp-table-container overflow-x="auto" has-shadow>
    <mp-table :is-hoverable="false">
      <mp-table-head bg="gray.50">
        <mp-table-row>
          <mp-table-cell as="th" scope="col">
            Product name
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Product code
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Category
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Qty
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Minimum stock
          </mp-table-cell>
          <mp-table-cell as="th" scope="col">
            Unit
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" text-align="right">
            Average price
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" text-align="right">
            Buy price
          </mp-table-cell>
          <mp-table-cell as="th" scope="col" text-align="right">
            Sell price
          </mp-table-cell>
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row v-for="product in products" :key="product.id">
          <mp-table-cell as="td" scope="row">
            <mp-box>
              <mp-text>
                {{ product.name }}
              </mp-text>
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-box width="128px">
              <mp-text>
                {{ product.code }}
              </mp-text>
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-box width="150px">
              <mp-text>
                {{ product.category }}
              </mp-text>
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-box>
              <mp-text>
                {{ product.qty }}
              </mp-text>
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-box>
              <mp-text>
                {{ product.minimumStock }}
              </mp-text>
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-box>
              <mp-text>
                {{ product.unit }}
              </mp-text>
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-box width="180px">
              <mp-text text-align="right">
                {{ product.averagePrice }}
              </mp-text>
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-box width="180px">
              <mp-text text-align="right">
                {{ product.buyPrice }}
              </mp-text>
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="td" scope="row">
            <mp-box width="180px">
              <mp-text text-align="right">
                {{ product.sellPrice }}
              </mp-text>
            </mp-box>
          </mp-table-cell>
        </mp-table-row>
      </mp-table-body>
    </mp-table>
  </mp-table-container>
</template>

<script>
  import {
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpBox,
    MpText
  } from '@mekari/pixel'

  export default {
    name: 'Table',
    components: {
      MpTableContainer,
      MpTable,
      MpTableHead,
      MpTableBody,
      MpTableRow,
      MpTableCell,
      MpBox,
      MpText
    },
    data: function () {
      return {
        products: [
          {
            id: 1,
            name: 'Apple Macbook Pro 2021 14" inch M1 Pro Chip 512GB Gray',
            code: 'MBPM1-2021',
            category: 'Laptop',
            qty: 20,
            minimumStock: 8,
            unit: 'Pcs',
            averagePrice: 'Rp28.000.000',
            buyPrice: 'Rp27.000.000',
            sellPrice: 'Rp30.000.000'
          },
          {
            id: 2,
            name: 'Apple iPhone 14 Pro 5G 1TB',
            code: 'IP14-5G1TB',
            category: 'Smartphone',
            qty: 2,
            minimumStock: 8,
            unit: 'Pcs',
            averagePrice: 'Rp18.000.000',
            buyPrice: 'Rp17.000.000',
            sellPrice: 'Rp20.000.000'
          },
          {
            id: 3,
            name: 'Apple iPhone 14 Plus 5G 512GB',
            code: 'IP14PLS-5G512gb',
            category: 'Smartphone',
            qty: 9,
            minimumStock: 2,
            unit: 'Pcs',
            averagePrice: 'Rp16.000.000',
            buyPrice: 'Rp16.000.000',
            sellPrice: 'Rp17.000.000'
          },
          {
            id: 4,
            name: 'iPad Pro M2 2022 4th 11 / 6th 12.9 inch WIFI 128GB',
            code: 'IPPRO-M2128GB',
            category: 'Smartphone',
            qty: 80,
            minimumStock: 1,
            unit: 'Pcs',
            averagePrice: 'Rp13.000.000',
            buyPrice: 'Rp13.000.000',
            sellPrice: 'Rp12.000.000'
          },
          {
            id: 5,
            name: 'MacBook Air 2022 M2 Chip 13" Inch 512GB',
            code: 'MBAM2-2022',
            category: 'Laptop',
            qty: 200,
            minimumStock: 1,
            unit: 'Pcs',
            averagePrice: 'Rp15.000.000',
            buyPrice: 'Rp16.000.000',
            sellPrice: 'Rp16.000.000'
          }
        ]
      }
    }
  }
</script>
