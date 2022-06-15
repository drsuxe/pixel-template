<template>
  <mp-box width="full">
    <mp-tabs id="sales-index-tab" :default-index="defaultIndex" @change="handleChange">
      <mp-tab-list>
        <mp-tab>
          Faktur pembelian
          <mp-badge ml="2" variant="subtle" :variant-color="currentTab === 'everything-else' ? 'blue' : 'gray'"> 0 </mp-badge>
        </mp-tab>
        <mp-tab>
          Pengiriman
          <mp-badge ml="2" variant="subtle" :variant-color="currentTab === 'unread' ? 'blue' : 'gray'"> 0 </mp-badge>
        </mp-tab>
        <mp-tab> Pemesanan </mp-tab>
        <mp-tab> Penawaran </mp-tab>
        <mp-tab>
          Membutuhkan persetujuan
          <mp-badge ml="2" variant="subtle" :variant-color="currentTab === 'unread' ? 'blue' : 'gray'"> 0 </mp-badge>
        </mp-tab>
      </mp-tab-list>
    </mp-tabs>
  </mp-box>
</template>

<script>
import { MpBox, MpTabs, MpTabList, MpTab, MpBadge } from "@mekari/pixel";

export default {
  name: "TabsWithBadge",
  components: {
    MpBox,
    MpTabs,
    MpTabList,
    MpTab,
    MpBadge,
  },
  data() {
    return {
      tabs: ["everything-else", "unread", "read"],
      defaultIndex: 0,
      currentTab: null,
    };
  },
  mounted() {
    this.handleChange(this.defaultIndex);
  },
  methods: {
    handleChange(e) {
      this.currentTab = this.tabs[e];
    },
  },
};
</script>
