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
          <mp-button-icon
            size="sm"
            is-round
            :name="isToggle ? 'chevrons-right' : 'chevrons-left'"
            @click="isToggle = !isToggle"
          />
        </mp-tooltip>
      </mp-pseudo-box>
    </mp-box>
    <mp-box
      as="section"
      data-id="sidebar"
      width="full"
      height="calc(100vh - 60px)"
      overflow-y="auto"
      overflow-x="hidden"
      padding-y="4"
      padding-x="2"
    >
      <mp-box>
        <mp-flex flex-direction="column">
          <mp-tooltip
            position="right"
            label="Add"
            :visibility="isToggle ? 'visible' : 'hidden'"
          >
            <mp-pseudo-box
              role="group"
              flex="1"
              border-radius="sm"
              borderWidth="2"
              borderColor="brand.mekari"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :_hover="{
                backgroundColor: 'ice.50',
                color: 'blue.400',
                cursor: 'pointer',
              }"
            >
              <mp-stack direction="row" align="center">
                <mp-icon name="add" />
                <mp-text
                  white-space="nowrap"
                  transition="all .2s ease"
                  :opacity="isToggle ? '0' : '1'"
                >
                  Add
                </mp-text>
              </mp-stack>
            </mp-pseudo-box>
          </mp-tooltip>
        </mp-flex>
      </mp-box>

      <mp-divider />
      <mp-box v-for="sidebarMenu in sidebarMenus" :key="sidebarMenu.id">
        <mp-flex
          v-for="menu in sidebarMenu.menus"
          :key="menu.id"
          flex-direction="column"
        >
          <mp-tooltip
            position="right"
            :label="menu.name"
            :visibility="isToggle ? 'visible' : 'hidden'"
          >
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
            >
              <mp-stack direction="row" align="center">
                <mp-icon :name="menu.icon" />
                <mp-text
                  white-space="nowrap"
                  transition="all .2s ease"
                  :opacity="isToggle ? '0' : '1'"
                >
                  adadad
                </mp-text>
              </mp-stack>
            </mp-pseudo-box>
          </mp-tooltip>
        </mp-flex>
        <mp-divider />
      </mp-box>
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
  MpButtonIcon,
  MpTooltip,
} from "@mekari/pixel";

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
          id: 1,
          menus: [
            {
              id: 1,
              name: "Reports",
              icon: "reports",
            },
          ],
        },
        {
          id: 2,
          menus: [
            {
              id: 1,
              name: "Bank",
              icon: "bank",
            },
            {
              id: 2,
              name: "Cart",
              icon: "cart",
            },
            {
              id: 3,
              name: "Expenses",
              icon: "expenses",
            },
          ],
        },
        {
          id: 3,
          menus: [
            {
              id: 1,
              name: "Contact",
              icon: "contact",
            },
            {
              id: 2,
              name: "Assets",
              icon: "assets",
            },
            {
              id: 3,
              name: "Chart of account",
              icon: "chart-of-account",
            },
          ],
        },
        {
          id: 4,
          menus: [
            {
              id: 1,
              name: "Mekari Pay",
              icon: "mekari pay",
            },
            {
              id: 2,
              name: "Loan",
              icon: "loan",
            },
            {
              id: 3,
              name: "Calculator",
              icon: "calculator",
            },
            {
              id: 4,
              name: "Doc",
              icon: "doc",
            },
            {
              id: 5,
              name: "Add-ons",
              icon: "add-ons",
            },
            {
              id: 6,
              name: "Settings",
              icon: "settings",
            },
          ],
        },
      ],
    };
  },
};
</script>
