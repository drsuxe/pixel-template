<template>
  <mp-box
    as="section"
    data-id="sidebar-child"
    max-width="12.75rem"
    width="full"
    border-right="1px"
    border-color="gray.100"
    max-height="calc(100vh - 60px)"
    padding-y="4"
    transition="all .2s ease"
  >
    <mp-box
      max-height="calc(100vh - 90px)"
      overflow-y="auto"
      overflow-x="hidden"
    >
      <mp-text
        font-size="md"
        font-weight="semibold"
        color="blue.400"
        padding-x="4"
        padding-y="2"
      >
        PENGATURAN
      </mp-text>
      <mp-box>
        <mp-flex
          direction="column"
          v-for="submenu in submenus"
          :key="submenu.name"
        >
          <mp-pseudo-box
            flex="1"
            role="group"
            border-radius="sm"
            padding-x="4"
            padding-y="2"
            :color="submenu.isActive ? 'dark' : 'gray.600'"
            :font-weight="submenu.isActive ? 'semibold' : 'inherit'"
            :_hover="{
              color: submenu.isActive ? 'dark' : 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack direction="row" align="center">
              <mp-text> {{ submenu.name }} </mp-text>
            </mp-stack>
          </mp-pseudo-box>
        </mp-flex>
      </mp-box>
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpStack, MpPseudoBox } from "@mekari/pixel";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpStack,
    MpPseudoBox,
  },
  data: function () {
    return {
      isToggle: false,
      submenus: [
        {
          id: 1,
          name: "Perusahaan",
          isActive: true,
        },
        {
          id: 2,
          name: "Penjualan",
          isActive: false,
        },
        {
          id: 3,
          name: "Pembelian",
          isActive: false,
        },
        {
          id: 4,
          name: "Produk & Jasa",
          isActive: false,
        },
        {
          id: 5,
          name: "Template",
          isActive: false,
        },
        {
          id: 6,
          name: "Pemetaan Akun",
          isActive: false,
        },
        {
          id: 7,
          name: "Pengaturan Pengguna",
          isActive: false,
        },
        {
          id: 8,
          name: "Aturan Approval",
          isActive: false,
        },
        {
          id: 9,
          name: "Aturang Tagging",
          isActive: false,
        },
      ],
    };
  },
};
</script>
