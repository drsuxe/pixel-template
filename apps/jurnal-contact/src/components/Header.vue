<template>
  <mp-box as="nav" border-bottom-color="gray.100" border-bottom-width="1px" border-style="solid" background-color="white" padding-x="6" padding-y="1.5">
    <mp-flex flex-direction="row" justify-content="space-between" align-items="center">
      <mp-box as="a" href="/">
        <img src="../assets/logo-jurnal-default.svg" style="height: 2.5rem" alt="" />
      </mp-box>
      <mp-box>
        <mp-flex justify-content="space-between" align-items="center">
          <mp-stack is-inline spacing="2">
            <mp-box>
              <mp-box position="relative" :display="['block', 'none']">
                <mp-button-icon name="notification" size="md" @click="isNotificationMenuOpen = true" />
                <mp-badge variant-color="red" size="sm" position="absolute" top="0" right="0" border-width="2px" border-color="white"> 3 </mp-badge>
              </mp-box>
              <mp-popover placement="bottom" use-portal>
                <mp-popover-trigger>
                  <mp-box position="relative" :display="['none', 'block']">
                    <mp-button-icon name="notification" size="md" />
                    <mp-badge variant-color="red" size="sm" position="absolute" top="0" right="0" border-width="2px" border-color="white"> 3 </mp-badge>
                  </mp-box>
                </mp-popover-trigger>
                <mp-popover-content
                  class="popover-content"
                  width="lg"
                  max-height="calc(100% - 96px)"
                  overflow="hidden auto"
                  background-color="white"
                  border-radius="md"
                  border-width="1px"
                  border-color="gray.400"
                  box-shadow="lg"
                  margin-right="6 !important"
                  z-index="popover"
                >
                  <Notification />
                </mp-popover-content>
              </mp-popover>
            </mp-box>
            <mp-box>
              <mp-tooltip position="bottom" label="Switch app" use-portal>
                <mp-button-icon name="shortcuts" size="md" @click="isSwitchAppOpen = true" />
              </mp-tooltip>
            </mp-box>
            <mp-box :display="['block', 'none']">
              <mp-tooltip position="bottom" label="Menu" use-portal>
                <mp-button-icon name="burger" size="md" @click="isSidebarMenuOpen = true" />
              </mp-tooltip>
            </mp-box>
          </mp-stack>
          <mp-box :display="['none', 'block']">
            <SwitchAccount />
          </mp-box>
        </mp-flex>
      </mp-box>
    </mp-flex>
    <SwitchApp :isSwitchAppOpen="isSwitchAppOpen" :onSwitchAppToggle="onSwitchAppToggle" />
    <SidebarMobile :isSidebarMenuOpen="isSidebarMenuOpen" :onSidebarMenuToggle="onSidebarMenuToggle" />
    <NotificationMobile :isNotificationMenuOpen="isNotificationMenuOpen" :onNotificationMenuToggle="onNotificationMenuToggle" />
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpStack, MpButtonIcon, MpBadge, MpTooltip, MpPopover, MpPopoverTrigger, MpPopoverContent } from "@mekari/pixel";
import SwitchApp from "../components/SwitchApp";
import SwitchAccount from "../components/SwitchAccount";
import SidebarMobile from "../components/SidebarMobile";
import Notification from "../components/Notification";
import NotificationMobile from "../components/NotificationMobile";

export default {
  name: "Header",
  components: {
    MpBox,
    MpFlex,
    MpStack,
    MpButtonIcon,
    MpBadge,
    MpTooltip,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    SwitchApp,
    SwitchAccount,
    SidebarMobile,
    Notification,
    NotificationMobile,
  },
  data: function () {
    return {
      isSwitchAppOpen: false,
      isSidebarMenuOpen: false,
      isNotificationMenuOpen: false,
    };
  },
  methods: {
    onSwitchAppToggle: function () {
      this.isSwitchAppOpen = !this.isSwitchAppOpen;
    },
    onSidebarMenuToggle: function () {
      this.isSidebarMenuOpen = !this.isSidebarMenuOpen;
    },
    onNotificationMenuToggle: function () {
      this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
    },
  },
};
</script>
