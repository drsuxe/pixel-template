<template>
  <mp-box
    role="group"
    width="full"
    z-index="1"
    max-height="calc(100vh - 60px)"
    border-right="1px"
    border-color="gray.100"
    transition="all .2s ease"
    background-color="white"
    :position="isStacked ? 'relative' : 'absolute'"
    :max-width="isToggle ? '3.75rem' : '13.5rem'"
    :display="['none', 'block']"
    :box-shadow="
      isToggle
        ? '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.0)'
        : isStacked
        ? '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.0)'
        : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    "
    @mouseenter="!isStacked ? handleMouseEnter() : {}"
    @mouseleave="!isStacked ? handleMouseLeave() : {}"
  >
    <mp-box
      as="section"
      class="sidebar-content"
      data-id="sidebar"
      width="full"
      height="calc(100vh - 60px)"
      overflow-y="auto"
      overflow-x="hidden"
      padding-y="4"
      padding-x="2"
    >
      <mp-flex align="center" justify="center" padding-bottom="2" padding-x="1">
        <mp-tooltip position="right" label="Add" :visibility="isToggle ? 'visible' : 'hidden'">
          <mp-popover id="add-transaction" use-portal>
            <mp-popover-trigger>
              <mp-pseudo-box
                :width="isToggle ? '' : 'full'"
                role="group"
                display="flex"
                align-items="center"
                justify-content="center"
                rounded="md"
                border="1px"
                borderColor="blue.400"
                transition="all .2s ease"
                :p="isToggle ? '1' : '2'"
                :_hover="{
                  backgroundColor: 'ice.50',
                  color: 'blue.400',
                  cursor: 'pointer',
                }"
              >
                <mp-icon v-if="isToggle" size="sm" name="add" color="blue.400" />

                <mp-text v-else font-weight="semibold" color="blue.400" line-height="md">
                  Add transaction
                  <mp-icon size="sm" name="caret-down" color="blue.400" ml="0.5" />
                </mp-text>
              </mp-pseudo-box>
            </mp-popover-trigger>
            <mp-popover-content max-width="190px" bg="white" z-index="popover" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
              <mp-popover-list>
                <mp-popover-list-item> Penagihan Penjualan </mp-popover-list-item>
                <mp-popover-list-item> Penagihan Pembelian </mp-popover-list-item>
                <mp-popover-list-item> Biaya Pengeluaran </mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-tooltip>
      </mp-flex>

      <mp-divider />
      <mp-box v-for="sidebarMenu in sidebarMenus" :key="sidebarMenu.menu">
        <mp-flex v-for="(menu, index) in sidebarMenu.menus" :key="`${menu.name}-${index}`" flex-direction="column">
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
        </mp-flex>
        <mp-divider />
      </mp-box>

      <mp-flex flex-direction="column" position="absolute" bottom="2" left="0" right="0" padding-x="2" width="100%" bg="white">
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
          @click="isToggle = !isToggle"
        >
          <mp-stack direction="row" align="center">
            <mp-icon :name="isToggle ? 'arrow-collapse' : 'arrow-expand'" />
            <mp-text white-space="nowrap" :opacity="isToggle ? '0' : '1'"> Collapse </mp-text>
          </mp-stack>
        </mp-pseudo-box>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpText,
  MpStack,
  MpPseudoBox,
  MpDivider,
  MpTooltip,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "Sidebar",
  props: {
    isCollapsed: [Boolean],
    defaultIsToggle: [Boolean],
    isStacked: [Boolean],
  },
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpText,
    MpStack,
    MpPseudoBox,
    MpDivider,
    MpTooltip,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  data: function () {
    return {
      isToggle: this.isCollapsed ? this.defaultIsToggle || true : this.defaultIsToggle || false,
      sidebarMenus: [
        {
          name: "outputs",
          menus: [
            { name: "Dashboard", icon: "home" },
            { name: "Reports", icon: "reports" },
          ],
        },
        {
          name: "transactions",
          menus: [
            { name: "Cash & Bank", icon: "bank" },
            { name: "Sales", icon: "sales" },
            { name: "Purchases", icon: "cart" },
            { name: "Expenses", icon: "expenses" },
          ],
        },
        {
          name: "inputs",
          menus: [
            { name: "Contact", icon: "contact" },
            { name: "Products", icon: "products" },
            { name: "Assets", icon: "assets" },
            { name: "Chart of account", icon: "chart-of-account" },
          ],
        },
        {
          name: "others",
          menus: [
            { name: "Mekari Pay", icon: "mekari pay" },
            { name: "Mekari Capital", icon: "loan" },
            { name: "Calculator", icon: "calculator" },
            { name: "Other Lists", icon: "doc" },
            { name: "Integrations", icon: "add-ons" },
            { name: "Settings", icon: "settings", isActive: true },
          ],
        },
      ],
    };
  },
  methods: {
    handleMouseEnter: function () {
      !this.isToggle && this.isCollapsed ? (this.isToggle = true) : (this.isToggle = false);
    },
    handleMouseLeave: function () {
      !this.isToggle && this.isCollapsed ? (this.isToggle = false) : (this.isToggle = true);
    },
  },
};
</script>

<style>
/* custom scroll bar */
.sidebar-content::-webkit-scrollbar {
  width: 0px;
}
.sidebar-content::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
}
.sidebar-content:hover::-webkit-scrollbar {
  width: 5px;
  position: absolute;
}
.sidebar-content:hover::-webkit-scrollbar-thumb {
  background: var(--colors-gray-400);
}
</style>
