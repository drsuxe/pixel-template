<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-stacked :default-is-toggle="true" />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeader title="Layout default" />
        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-text>Place content here...</mp-text>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";

export default {
  name: "LayoutDefault",
  components: {
    MpBox,
    MpFlex,
    MpText,
    Header,
    Sidebar,
    SubHeader,
  },
};
</script>
