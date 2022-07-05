<template>
  <mp-box
    role="group"
    width="full"
    max-height="calc(100vh - 60px)"
    border-right="1px"
    border-color="gray.100"
    transition="all .2s ease"
    :max-width="isToggle ? '3.75rem' : '13.5rem'"
  >
    <mp-box position="relative">
      <mp-pseudo-box
        v-if="!isCollapsed"
        opacity="0"
        position="absolute"
        top="1.375rem"
        right="-0.938rem"
        background-color="white"
        border="1px solid"
        border-color="gray.400"
        border-radius="full"
        box-shadow="md"
        transition="all .2s ease"
        :_groupHover="{ opacity: '1' }"
      >
        <mp-tooltip position="right" :label="isToggle ? 'Expand' : 'Collapsed'">
          <mp-button-icon size="sm" is-round :name="isToggle ? 'chevrons-right' : 'chevrons-left'" @click="isToggle = !isToggle" />
        </mp-tooltip>
      </mp-pseudo-box>
    </mp-box>
    <mp-box as="section" data-id="sidebar" width="full" height="calc(100vh - 60px)" overflow-y="auto" overflow-x="hidden" padding-y="4" padding-x="2">
      <mp-box v-for="sidebarMenu in sidebarMenus" :key="sidebarMenu.menu">
        <mp-flex v-for="(menu, index) in sidebarMenu.menus" :key="`${menu.name}-${index}`" flex-direction="column">
          <mp-tooltip position="right" :label="menu.name" :visibility="isToggle ? 'visible' : 'hidden'">
            <mp-pseudo-box
              role="group"
              flex="1"
              border-radius="sm"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :_hover="{
                backgroundColor: 'ice.50',
                color: 'blue.400',
                cursor: 'pointer',
              }"
              v-bind="{
                ...(menu.isActive && {
                  backgroundColor: 'ice.50',
                  color: 'blue.400',
                  fontWeight: 'semibold',
                }),
              }"
            >
              <mp-stack direction="row" align="center">
                <mp-icon :name="menu.icon" :variant="menu.isActive ? 'duotone' : 'outline'" />
                <mp-text white-space="nowrap" transition="all .2s ease" :opacity="isToggle ? '0' : '1'">
                  {{ menu.name }}
                </mp-text>
              </mp-stack>
            </mp-pseudo-box>
          </mp-tooltip>
        </mp-flex>
        <mp-divider />
      </mp-box>

      <mp-box px="3" v-if="!isToggle">
        <mp-text font-size="sm" color="gray.600">ID perusahaan: 2802</mp-text>
      </mp-box>
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpIcon, MpText, MpStack, MpPseudoBox, MpDivider, MpButtonIcon, MpTooltip } from "@mekari/pixel";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  props: {
    isCollapsed: [Boolean],
  },
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpText,
    MpStack,
    MpPseudoBox,
    MpDivider,
    MpButtonIcon,
    MpTooltip,
  },
  data: function () {
    return {
      isToggle: this.isCollapsed ? true : false,
      sidebarMenus: [
        {
          name: "dashboard",
          menus: [{ name: "Dasbor", icon: "home", isActive: true }],
        },
        {
          name: "transactions",
          menus: [
            { name: "E-Billing", icon: "payslip" },
            { name: "Lapor Pajak", icon: "document-sent" },
            { name: "E-Faktur", icon: "doc" },
            { name: "E-Bupot", icon: "doc" },
          ],
        },
        {
          name: "others",
          menus: [{ name: "Settings", icon: "settings" }],
        },
      ],
    };
  },
};
</script>
