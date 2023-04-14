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
                      :font-weight="isActive === 0 ? 'semibold' : 'regular'"
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
                    <mp-text font-weight="semibold">Subchild menu 1</mp-text>
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
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpStack,
  MpPseudoBox,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
} from "@mekari/pixel";

export default {
  name: "SidebarChild",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpStack,
    MpPseudoBox,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
  },
  data: function () {
    return {
      isActive: 0,
    };
  },
  methods: {
    handleChange: function (data) {
      this.isActive = data;
    },
  },
};
</script>