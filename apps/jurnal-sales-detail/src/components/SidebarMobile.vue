<template>
  <mp-drawer
    :is-open="isSidebarMenuOpen"
    :on-close="onSidebarMenuToggle"
    :return-focus-on-close="false"
  >
    <mp-drawer-overlay :display="['none', 'block']" />
    <mp-drawer-content
      border="none"
      border-left="1px"
      border-left-color="gray.100"
      background-color="background"
      :max-width="['full', 'xs']"
      :margin-top="['51px', '0px']"
      :height="['calc(100vh - 51px)', '100vh']"
    >
      <mp-drawer-body
        background-color="background"
        padding="0"
        max-height="calc(100vh)"
        overflow="hidden auto"
      >
        <mp-flex
          align-items="center"
          border-radius="none"
          padding-x="4"
          padding-y="2.5"
          background-color="white"
        >
          <mp-avatar
            name="Rizal Chandra"
            src="https://i.pravatar.cc/300"
            size="md"
            margin-right="2"
            :show-border="false"
          />
          <mp-flex flex-direction="column">
            <mp-text font-weight="semibold" line-height="md">
              Rizal Chandra
            </mp-text>
            <mp-text font-size="sm" color="gray.600">
              PT Central Perk Indonesia
            </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-box
          v-if="!isToggle"
          padding-x="2"
          padding-y="4"
          background-color="white"
        >
          <mp-flex flex-direction="column" v-for="menu in menus" :key="menu.id">
            <mp-pseudo-box
              v-if="!menu.isNested"
              role="group"
              flex="1"
              border-radius="sm"
              as="router-link"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :to="menu.link"
              :background-color="menu.isActive ? 'ice.50' : 'inherit'"
              :color="menu.isActive ? 'blue.400' : 'inherit'"
              :_hover="{
                backgroundColor: 'ice.50',
                color: 'blue.400',
                cursor: 'pointer',
              }"
            >
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon
                    :name="menu.icon"
                    :color="menu.isActive ? 'blue.400' : 'inherit'"
                  />
                  <mp-text
                    white-space="nowrap"
                    :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                  >
                    {{ menu.name }}
                  </mp-text>
                </mp-flex>
                <mp-icon
                  v-if="menu.isNested"
                  name="chevrons-right"
                  :color="black"
                />
              </mp-stack>
            </mp-pseudo-box>
            <mp-pseudo-box
              v-else
              role="group"
              flex="1"
              border-radius="sm"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :background-color="menu.isActive ? 'ice.50' : 'inherit'"
              :color="menu.isActive ? 'blue.400' : 'inherit'"
              :_hover="{
                backgroundColor: 'ice.50',
                color: 'blue.400',
                cursor: 'pointer',
              }"
              @click="handleToggle(true)"
            >
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon
                    :name="menu.icon"
                    :color="menu.isActive ? 'blue.400' : 'inherit'"
                  />
                  <mp-text
                    white-space="nowrap"
                    :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                  >
                    {{ menu.name }}
                  </mp-text>
                </mp-flex>
                <mp-icon v-if="menu.isNested" name="chevrons-right" />
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
        </mp-box>
        <mp-box v-else padding-x="2" padding-y="4" background-color="white">
          <mp-flex flex-direction="column">
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
              @click="handleToggle(false)"
            >
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon name="arrows-left" />
                  <mp-text white-space="nowrap"> Back </mp-text>
                </mp-flex>
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
          <mp-divider />
          <mp-box>
            <mp-text
              font-size="md"
              font-weight="semibold"
              color="blue.400"
              padding-x="4"
              padding-y="2"
            >
              CHILD MENU
            </mp-text>
            <mp-box>
              <mp-flex direction="column">
                <mp-pseudo-box
                  flex="1"
                  role="group"
                  border-radius="sm"
                  padding-x="4"
                  padding-y="2"
                  color="dark"
                  font-weight="regular"
                  :_hover="{
                    color: 'blue.400',
                    cursor: 'pointer',
                  }"
                >
                  <mp-stack direction="row" align="center">
                    <mp-text>Child menu 1</mp-text>
                  </mp-stack>
                </mp-pseudo-box>
              </mp-flex>
            </mp-box>

            <mp-box>
              <mp-flex direction="column">
                <mp-pseudo-box
                  flex="1"
                  role="group"
                  border-radius="sm"
                  padding-x="4"
                  padding-y="2"
                  color="dark"
                  font-weight="inherit"
                  :_hover="{
                    color: 'blue.400',
                    cursor: 'pointer',
                  }"
                >
                  <mp-stack direction="row" align="center">
                    <mp-text>Child menu 2</mp-text>
                  </mp-stack>
                </mp-pseudo-box>
              </mp-flex>
            </mp-box>

            <mp-accordion allow-toggle @change="handleChange">
              <mp-accordion-item border-bottom-width="0px!important">
                <mp-accordion-header
                  justify-content="space-between"
                  padding-x="4"
                  padding-y="2"
                  border-radius="md"
                  :background-color="isActive === 0 ? 'ice.50' : 'transparent'"
                  :_hover="{
                    color: 'blue.400',
                    backgroundColor: isActive === 0 ? 'ice.50' : 'gray.50',
                    cursor: 'pointer',
                  }"
                >
                  <mp-box>
                    <mp-flex direction="column">
                      <mp-pseudo-box
                        flex="1"
                        border-radius="sm"
                        :color="isActive === 0 ? 'blue.400' : 'dark'"
                      >
                        <mp-stack direction="row" align="center">
                          <mp-text
                            :font-weight="
                              isActive === 0 ? 'semibold' : 'regular'
                            "
                            >Child menu 3</mp-text
                          >
                        </mp-stack>
                      </mp-pseudo-box>
                    </mp-flex>
                  </mp-box>
                  <mp-accordion-icon />
                </mp-accordion-header>
                <mp-accordion-panel padding-y="0">
                  <mp-box>
                    <mp-flex direction="column">
                      <mp-pseudo-box
                        flex="1"
                        role="group"
                        as="router-link"
                        to="/layout-child-menu"
                        border-radius="sm"
                        padding-left="8"
                        padding-y="2"
                        color="dark"
                        :_hover="{
                          color: 'dark',
                          cursor: 'pointer',
                        }"
                      >
                        <mp-stack direction="row" align="center">
                          <mp-text font-weight="semibold">
                            Subchild menu 1
                          </mp-text>
                        </mp-stack>
                      </mp-pseudo-box>
                    </mp-flex>
                  </mp-box>
                  <mp-box>
                    <mp-flex direction="column">
                      <mp-pseudo-box
                        flex="1"
                        role="group"
                        border-radius="sm"
                        padding-left="8"
                        padding-y="2"
                        color="gray.600"
                        font-weight="inherit"
                        :_hover="{
                          color: 'blue.400',
                          cursor: 'pointer',
                        }"
                      >
                        <mp-stack direction="row" align="center">
                          <mp-text>Subchild menu 2</mp-text>
                        </mp-stack>
                      </mp-pseudo-box>
                    </mp-flex>
                  </mp-box>
                </mp-accordion-panel>
              </mp-accordion-item>
            </mp-accordion>
          </mp-box>
        </mp-box>
        <mp-box padding="4">
          <mp-flex flex-direction="column">
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Account settings
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Company info
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Company list
              <mp-icon name="chevrons-right" float="right" />
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Help & Support
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Change language
            </mp-text>
            <mp-divider />
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Switch account
              <mp-icon name="chevrons-right" float="right" />
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Sign out
              <mp-icon name="chevrons-right" float="right" />
            </mp-text>
            <mp-divider />
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Privacy
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Terms of Use
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              About Mekari Account
            </mp-text>
            <mp-text color="gray.600" padding-y="2">Mekari © 2022</mp-text>
          </mp-flex>
        </mp-box>
      </mp-drawer-body>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpBox,
  MpPseudoBox,
  MpFlex,
  MpStack,
  MpText,
  MpIcon,
  MpAvatar,
  MpDivider,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerBody,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
} from "@mekari/pixel";

export default {
  name: "SidebarMobile",
  props: {
    isSidebarMenuOpen: [Boolean],
    onSidebarMenuToggle: [Function],
  },
  components: {
    MpBox,
    MpPseudoBox,
    MpFlex,
    MpStack,
    MpText,
    MpIcon,
    MpAvatar,
    MpDivider,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerBody,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
  },
  data: function () {
    return {
      isActive: 0,
      isToggle: false,
      menus: [
        {
          id: 1,
          name: "Layout default",
          icon: "table-view-field",
          link: "/layout-default",
          isNested: false,
          isActive: this.$router.currentRoute.name === "LayoutDefault",
        },
        {
          id: 2,
          name: "Layout boxed",
          icon: "empty",
          link: "/layout-boxed",
          isNested: false,
          isActive: this.$router.currentRoute.name === "LayoutBoxed",
        },
        {
          id: 3,
          name: "Layout child menu",
          icon: "empty",
          link: "/layout-child-menu",
          isNested: true,
          isActive: this.$router.currentRoute.name === "LayoutChildMenu",
        },
      ],
    };
  },
  methods: {
    handleToggle: function (data) {
      this.isToggle = data;
    },
    handleChange: function (data) {
      this.isActive = data;
    },
  },
};
</script>
