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
    margin-right="-60px"
    :box-shadow="
      isToggle
        ? '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.0)'
        : isStacked
        ? '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.0)'
        : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    "
  >
    <mp-box
      as="section"
      class="sidebar-content"
      data-id="sidebar"
      width="full"
      height="calc(100vh - 60px)"
      overflow-y="auto"
      overflow-x="hidden"
      padding-top="4"
      padding-x="2"
      padding-bottom="60px"
      @mouseenter="handleMouseEnter()"
      @mouseleave="handleMouseLeave()"
    >
      <mp-box v-for="menu in menus" :key="menu.parentId">
        <mp-text
          v-if="menu.group"
          font-size="md"
          font-weight="semibold"
          color="gray.600"
          padding-x="2"
          padding-y="2"
          :display="isToggle ? 'none' : 'block'"
          transition="all .2s ease"
        >
          {{ menu.group }}
        </mp-text>

        <mp-flex flex-direction="column" v-for="items in menu.items" :key="items.id">
          <mp-tooltip position="right" :label="items.name" :visibility="isToggle ? 'visible' : 'hidden'" use-portal>
            <mp-pseudo-box
              role="group"
              flex="1"
              border-radius="sm"
              as="router-link"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :to="items.link"
              :background-color="items.isActive ? 'ice.50' : 'inherit'"
              :color="items.isActive ? 'blue.400' : 'inherit'"
              :_hover="{
                backgroundColor: 'ice.50',
                color: 'blue.400',
                cursor: 'pointer',
              }"
            >
              <mp-stack direction="row" align="center">
                <mp-icon :name="items.icon" :color="items.isActive ? 'blue.400' : 'gray.600'" />
                <mp-text
                  white-space="nowrap"
                  :font-weight="items.isActive ? 'semibold' : 'inherit'"
                  :color="items.isActive ? 'blue.400' : 'dark'"
                  :opacity="isToggle ? '0' : '1'"
                >
                  {{ items.name }}
                </mp-text>
              </mp-stack>
            </mp-pseudo-box>
          </mp-tooltip>
        </mp-flex>
        <mp-divider v-if="menu.parentId !== 4" />
      </mp-box>
      <mp-flex
        gap="4"
        background-color="white"
        flex-direction="row"
        justify-content="space-between"
        align-items="center"
        position="absolute"
        border-top="1px solid"
        border-color="gray.100"
        bottom="0"
        left="0"
        right="0"
        padding="2"
        width="100%"
      >
        <mp-text font-size="sm" color="gray.600" white-space="nowrap" padding-left="2.5" :display="isToggle ? 'none' : 'block'"> Company ID : 999999 </mp-text>
        <mp-pseudo-box
          role="group"
          border-radius="sm"
          transition="all .2s ease"
          padding-x="2.5"
          padding-y="2"
          :_hover="{
            backgroundColor: 'ice.50',
            color: 'blue.400',
            cursor: 'pointer',
          }"
          @click="handleToggle"
        >
          <mp-stack direction="row" align="center">
            <mp-tooltip position="right" :label="!isForced ? 'Expand' : 'Collapse'" use-portal>
              <mp-icon :name="!isForced ? 'arrow-expand' : 'arrow-collapse'" size="sm" />
            </mp-tooltip>
          </mp-stack>
        </mp-pseudo-box>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpIcon, MpText, MpStack, MpPseudoBox, MpDivider, MpTooltip } from "@mekari/pixel";

export default {
  name: "Sidebar",
  props: {
    isCollapsed: [Boolean],
    defaultIsToggle: [Boolean],
    isAlternate: [Boolean],
    isCustom: [Boolean],
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
  },
  data: function () {
    return {
      isStacked: !this.defaultIsToggle || false,
      isForced: this.isAlternate || false,
      isToggle: this.isCollapsed ? this.defaultIsToggle || true : this.defaultIsToggle || false,
      menus: [
        {
          parentId: 1,
          group: "",
          items: [
            {
              id: 1,
              name: "Dashboard",
              icon: "home",
              link: "/",
              isActive: false,
            },
            {
              id: 2,
              name: "Report",
              icon: "reports",
              link: "/",
              isActive: true,
            },
          ],
        },
        {
          parentId: 2,
          group: "",
          items: [
            {
              id: 5,
              name: "Cash & Bank",
              icon: "bank",
              link: "/",
              isActive: false,
            },
            {
              id: 6,
              name: "Sales",
              icon: "sales",
              link: "/",
              isActive: false,
            },
            {
              id: 7,
              name: "Purchases",
              icon: "cart",
              link: "/",
              isActive: false,
            },
            {
              id: 8,
              name: "Expenses",
              icon: "expenses",
              link: "/",
              isActive: false,
            },
          ],
        },
        {
          parentId: 3,
          group: "",
          items: [
            {
              id: 9,
              name: "Contacts",
              icon: "contact",
              link: "/",
              isActive: false,
            },
            {
              id: 10,
              name: "Products",
              icon: "products",
              link: "/",
              isActive: false,
            },
            {
              id: 11,
              name: "Assets",
              icon: "assets",
              link: "/",
              isActive: false,
            },
            {
              id: 12,
              name: "Chart of Accounts",
              icon: "chart-of-account",
              link: "/",
              isActive: false,
            },
          ],
        },
        {
          parentId: 4,
          group: "",
          items: [
            {
              id: 13,
              name: "Mekari Pay",
              icon: "pay-outline",
              link: "/",
              isActive: false,
            },
            {
              id: 14,
              name: "Mekari Capital",
              icon: "capital-outline",
              link: "/",
              isActive: false,
            },
            {
              id: 15,
              name: "Payroll",
              icon: "calculator",
              link: "/",
              isActive: false,
            },
            {
              id: 16,
              name: "Other lists",
              icon: "doc",
              link: "/",
              isActive: false,
            },
            {
              id: 17,
              name: "Integrations",
              icon: "add-ons",
              link: "/",
              isActive: false,
            },
            {
              id: 18,
              name: "Settings",
              icon: "settings",
              link: "/",
              isActive: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleMouseEnter: function () {
      if (this.isForced) {
        return;
      } else {
        !this.isToggle && this.isCollapsed ? (this.isToggle = true) : (this.isToggle = false);
      }
    },
    handleMouseLeave: function () {
      if (this.isForced) {
        return;
      } else {
        !this.isToggle && this.isCollapsed ? (this.isToggle = false) : (this.isToggle = true);
      }
    },
    handleToggle: function () {
      this.isToggle = !this.isToggle;
      this.isForced = !this.isForced;
      if (this.isCustom) {
        this.isToggle = false;
        this.isStacked = !this.isStacked;
      }
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
  width: 0px;
  position: absolute;
}
.sidebar-content:hover::-webkit-scrollbar-thumb {
  background: var(--colors-gray-400);
}
</style>
