<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <SubHeader title="Dasbor" />
        <mp-box padding-y="3" padding-x="6">
          <QuickAccess />

          <mp-grid template-columns="repeat(12, 1fr)" gap="6">
            <mp-grid-item col-span="9">
              <mp-flex flexDirection="column" gap="6">
                <CardSummary />
                <CardTask />

                <mp-grid gap="6" template-columns="repeat(12, 1fr)">
                  <CardEBilling />

                  <CardEBupot />
                </mp-grid>

                <mp-grid gap="6" template-columns="repeat(12, 1fr)">
                  <CardEFilling status="active" />

                  <CardEFaktur />
                </mp-grid>

                <CardRekonsiliasiFaktur />
              </mp-flex>
            </mp-grid-item>

            <mp-grid-item col-span="3">
              <mp-flex gap="6" flexDirection="column">
                <CardTaxCalendar />

                <CardMarketing />
              </mp-flex>
            </mp-grid-item>
          </mp-grid>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpGrid, MpGridItem } from "@mekari/pixel";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Sidebar from "@/components/Sidebar";
import QuickAccess from "./QuickAccess.vue";
import CardSummary from "./CardSummary.vue";
import CardTask from "./CardTask.vue";
import CardEBilling from "./CardEBilling.vue";
import CardEBupot from "./CardEBupot.vue";
import CardEFilling from "./CardEFilling.vue";
import CardEFaktur from "./CardEFaktur.vue";
import CardRekonsiliasiFaktur from "./CardRekonsiliasiFaktur.vue";
import CardTaxCalendar from "./CardTaxCalendar.vue";
import CardMarketing from "./CardMarketing.vue";

export default {
  name: "DashboardActiveView",
  components: {
    MpBox,
    MpFlex,
    Header,
    SubHeader,
    Sidebar,
    MpGrid,
    MpGridItem,
    QuickAccess,
    CardSummary,
    CardTask,
    CardEBilling,
    CardEBupot,
    CardEFilling,
    CardEFaktur,
    CardRekonsiliasiFaktur,
    CardTaxCalendar,
    CardMarketing,
  },
};
</script>
