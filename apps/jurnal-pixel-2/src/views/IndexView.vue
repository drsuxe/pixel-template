<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
        :margin-left="['0', '60px']"
      >
        <SubHeader>
          <mp-box>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold"> Page Title </mp-heading>
          </mp-box>
        </SubHeader>
        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-text>Place content here...</mp-text>

          <MountingPortal mountTo="body" name="learning-center-widget" append>
            <LearningCenterWidget />
          </MountingPortal>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpHeading } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import LearningCenterWidget from "../widgets/LearningCenterWidget.vue";

export default {
  name: "LayoutDefault",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    Header,
    Sidebar,
    SubHeader,
    LearningCenterWidget,
  },
};
</script>
