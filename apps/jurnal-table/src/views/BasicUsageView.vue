<template>
  <div>
    <JTable
      id="table-1"
      :heads="heads"
      :items="employees"
      :checkbox="false"
      :is-sortable="false"
      :use-pagination="false"
      :page="1"
      :per-page="10"
      :total-data="118"
    />
  </div>
</template>

<script>
import JTable from "../components/JTable.vue";
export default {
  components: {
    JTable,
  },
  data() {
    return {
      heads: [
        {
          title: "Id",
          key: "id",
          sort: "",
        },
        {
          title: "Name",
          key: "name",
          sort: "",
        },
        {
          title: "Effective Date",
          key: "effective_date",
          sort: "",
        },
        {
          title: "Benefir Group",
          key: "benefit_group",
          sort: "",
        },
        {
          title: "Benefir Limitation",
          key: "benefit_limitation",
          sort: "",
        },
      ],
      employees: [
        {
          id: 1,
          name: "Andy Bernard",
          effective_date: "1 Jan 2020",
          benefit_group: "Leader",
          benefit_limitation: "Rp150.000.000",
        },
        {
          id: 2,
          name: "Angela Martin",
          effective_date: "-",
          benefit_group: "Staff",
          benefit_limitation: "-",
        },
        {
          id: 3,
          name: "Dwight Schrute",
          effective_date: "1 Jan 2021",
          benefit_group: "Management",
          benefit_limitation: "Rp200.000.000",
        },
        {
          id: 4,
          name: "Jim Helpert",
          effective_date: "1 Jan 2021",
          benefit_group: "Management",
          benefit_limitation: "Rp200.000.000",
        },
        {
          id: 5,
          name: "Kevin Malone",
          effective_date: "23 Sep 2020",
          benefit_group: "Accounting",
          benefit_limitation: "Rp50.000.000",
        },
      ],
    };
  },
};
</script>
