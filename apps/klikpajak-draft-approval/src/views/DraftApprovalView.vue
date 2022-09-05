<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeader title="Approval" />

        <mp-box padding-x="6" mb="-25px">
          <mp-tabs id="tabs-faktur" :index="currentTab" @change.self="handleChangeTab" is-manual>
            <mp-tab-list>
              <mp-tab>
                <mp-box>
                  E-Faktur
                  <mp-badge ml="1" :variant-color="currentTab === 0 ? 'blue' : 'gray'"> 5 </mp-badge>
                  <mp-icon name="caret-down" ml="1" :color="currentTab === 0 ? 'blue' : 'gray'" />
                </mp-box>
              </mp-tab>
              <mp-tab>
                E-Bupot
                <mp-badge ml="2" :variant-color="currentTab === 1 ? 'blue' : 'gray'"> 4 </mp-badge>
              </mp-tab>
              <mp-tab :variant-color="currentTab === 2 ? 'blue' : 'gray'"> ID Billing </mp-tab>
              <mp-tab :variant-color="currentTab === 3 ? 'blue' : 'gray'"> Riwayat approval </mp-tab>
            </mp-tab-list>
          </mp-tabs>
        </mp-box>

        <mp-box min-height="calc(100vh)" border-top-width="1px" background-color="white" padding="6">
          <mp-popover id="popover-e-faktur" initial-focus-ref="#popover-manual" is-manual :is-open="isPopoverOpen">
            <mp-popover-trigger>
              <mp-box mt="-6" mb="6"></mp-box>
            </mp-popover-trigger>
            <mp-popover-content max-width="200px" width="200px" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
              <mp-popover-list>
                <mp-popover-list-item :is-active="content === 'upload-faktur'" @click="handleRenderContent('upload-faktur')">
                  <mp-text>
                    Upload faktur
                    <mp-badge variant-color="blue"> 5 </mp-badge>
                  </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item :is-active="content === 'pembatalan-faktur'" @click="handleRenderContent('pembatalan-faktur')"
                  >Pembatalan faktur</mp-popover-list-item
                >
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>

          <ContentUploadFaktur v-if="content === 'upload-faktur'" />
          <ContentPembatalanFaktur v-if="content === 'pembatalan-faktur'" />
          <ContentEBupot v-if="content === 'e-bupot'" />
          <ContentIdBilling v-if="content === 'id-billing'" />
          <ContentRiwayatApproval v-if="content === 'riwayat-approval'" />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpTabs,
  MpTabList,
  MpTab,
  MpBadge,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpIcon,
  MpText,
} from "@mekari/pixel";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Sidebar from "@/components/Sidebar";
import ContentUploadFaktur from "./ContentUploadFaktur.vue";
import ContentPembatalanFaktur from "./ContentPembatalanFaktur.vue";
import ContentEBupot from "./ContentEBupot.vue";
import ContentIdBilling from "./ContentIdBilling.vue";
import ContentRiwayatApproval from "./ContentRiwayatApproval.vue";

export default {
  components: {
    MpBox,
    MpFlex,
    Header,
    SubHeader,
    Sidebar,
    MpTabs,
    MpTabList,
    MpTab,
    MpBadge,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpIcon,
    MpText,
    ContentUploadFaktur,
    ContentPembatalanFaktur,
    ContentEBupot,
    ContentIdBilling,
    ContentRiwayatApproval,
  },
  data() {
    return {
      isPopoverOpen: false,
      currentTab: 2,
      content: "id-billing",
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    handleChangeTab(e) {
      if (e === 0) this.handleOpenPopover();

      if (e === 1) {
        this.currentTab = e;
        this.handleRenderContent("e-bupot");
      }

      if (e === 2) {
        this.currentTab = e;
        this.handleRenderContent("id-billing");
      }

      if (e === 3) {
        this.currentTab = e;
        this.handleRenderContent("riwayat-approval");
      }
    },
    handleRenderContent(content) {
      const subs = ["upload-faktur", "pembatalan-faktur"];

      if (subs.includes(content)) {
        this.currentTab = 0;
        setTimeout(() => {
          this.handleClosePopover();
        }, 0);
      }
      this.content = content;
    },

    handleOpenPopover() {
      this.isPopoverOpen = true;
    },
    handleClosePopover() {
      this.isPopoverOpen = false;
    },
    handleClickOutside(e) {
      const el = document.getElementById("tab:tabs-tabs-faktur-0");
      const isClickOutside = e.target !== el && !el.contains(e.target);

      isClickOutside && this.handleClosePopover();
    },
  },
};
</script>
