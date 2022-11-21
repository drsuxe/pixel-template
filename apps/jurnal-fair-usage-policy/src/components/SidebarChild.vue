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
    margin-left="60px"
    transition="all .2s ease"
    :display="['none', 'block']"
  >
    <mp-box max-height="calc(100vh - 90px)" overflow-y="auto" overflow-x="hidden">
      <mp-text font-size="md" font-weight="semibold" color="blue.400" padding-x="4" padding-y="2"> PENGATURAN </mp-text>
      <mp-box>
        <mp-flex direction="column">
          <mp-pseudo-box
            v-for="value in datas"
            :key="value"
            flex="1"
            role="group"
            border-radius="sm"
            padding-x="4"
            padding-y="2"
            :color="current === value ? 'blue.400' : 'dark'"
            :bg="current === value && 'ice.50'"
            :_hover="{
              color: 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack direction="row" align="center">
              <mp-text :font-weight="current === value ? 'semibold' : 'regular'"> {{ value }} </mp-text>
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
  name: "SidebarChild",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpStack,
    MpPseudoBox,
  },
  data: function () {
    return {
      datas: [
        "Perusahaan",
        "Penjualan",
        "Pembelian",
        "Produk & jasa",
        "Template",
        "Pemetaan akun",
        "Pengaturan pengguna",
        "Tagihan & kuota",
        "Aturan approval",
        "Aturan tagging",
      ],
      current: "Tagihan & kuota",
    };
  },
};
</script>
