export const datasets = [
    {
      id: 1,
      withChildren: false,
      name: "Revenue",
      children: [],
      order: 1
    },
    {
      id: 2,
      withChildren: true,
      name: "Other Income (Expense)",
      children: [
        {
          id: "1",
          label: "Other Income",
          accounts: [
            {
              id: 3703764,
              number: "6-60001",
              name: "Iklan & Promosi"
            },
            {
              id: 3703765,
              number: "6-60002",
              name: "Komisi & Fee"
            },
            {
              id: 3703766,
              number: "6-60003",
              name: "Bensin, Tol dan Parkir - Penjualan"
            }
          ]
        },
        {
          id: "2",
          label: "Other Expense",
          accounts: [
            {
              id: 3703775,
              number: "6-60105",
              name: "Pengobatan"
            },
            {
              id: 3703776,
              number: "6-60106",
              name: "THR & Bonus"
            },
            {
              id: 3703777,
              number: "6-60107",
              name: "Jamsostek"
            }
          ]
        }
      ],
      order: 2
    },
    {
      id: 3,
      withChildren: true,
      name: "Operational Expense",
      children: [
        {
          id: "1",
          label: "",
          accounts: [
            {
              id: 3703797,
              number: "6-60300",
              name: "Beban Kantor"
            },
            {
              id: 3703798,
              number: "6-60301",
              name: "Alat Tulis Kantor & Printing"
            },
            {
              id: 3703799,
              number: "6-60302",
              name: "Bea Materai"
            }
          ]
        }
      ],
      order: 2
    }
  ];
  