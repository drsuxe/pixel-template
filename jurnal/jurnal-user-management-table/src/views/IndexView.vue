<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="#F3F7FC"
        :margin-left="['0', '60px']"
        position="relative"
      >
        <SubHeader>
          <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
            <mp-box>
              <mp-text is-link text-decoration="underline">Penjualan</mp-text>
              <mp-flex align-items="center">
                <mp-heading as="h1" font-size="2xl" font-weight="semibold" mr="2"> Penagihan Penjualan SI - MKR/01/134/123 </mp-heading>
                <mp-badge variant-color="orange">Terbayar sebagian</mp-badge>
              </mp-flex>
            </mp-box>

            <mp-flex align-items="center" gap="2">
            </mp-flex>
          </mp-flex>
        </SubHeader>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" border-left-width="1px" rounded-top-left="md" background-color="white" padding="6">
          
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpHeading,
  MpBadge,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";

export default {
  name: "LayoutDefault",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpBadge,

    //
    Header,
    Sidebar,
    SubHeader,
  },
  data() {
    return {
      
    };
  },
};
</script>
