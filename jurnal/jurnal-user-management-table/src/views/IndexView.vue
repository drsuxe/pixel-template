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
            <mp-heading as="h1" font-size="2xl" font-weight="semibold" mr="2"> Pengaturan pengguna </mp-heading>

            <mp-button-group>
              <mp-button variant="outline" @click="isDrawerCustomRoleOpen = true">Tambah peran custom</mp-button>
              <mp-button>Undang pengguna</mp-button>
            </mp-button-group>
          </mp-flex>

          <mp-box px="6" mb="-6">
            <mp-tabs>
              <mp-tab-list border-bottom="0px">
                <mp-tab>Daftar pengguna</mp-tab>
                <mp-tab
                  >Peran custom
                  <mp-badge ml="2"> Baru </mp-badge>
                </mp-tab>
              </mp-tab-list>
            </mp-tabs>
          </mp-box>
        </SubHeader>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" border-left-width="1px" rounded-top-left="md" background-color="white" padding="6">
          <DrawerCustomRole :is-open="isDrawerCustomRoleOpen" @close="isDrawerCustomRoleOpen = false" />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpButtonGroup, MpButton, MpTabs, MpTab, MpTabList, MpBadge } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import DrawerCustomRole from "./DrawerCustomRole.vue";

export default {
  name: "LayoutDefault",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpButtonGroup,
    MpButton,
    MpTabs,
    MpTab,
    MpTabList,
    MpBadge,

    //
    Header,
    Sidebar,
    SubHeader,
    DrawerCustomRole,
  },
  data() {
    return {
      isDrawerCustomRoleOpen: true,
    };
  },
};
</script>
