<template>
  <mp-box as="nav" border-bottom-color="gray.100" border-bottom-width="1px" border-style="solid" background-color="white" padding-x="6" padding-y="1.5">
    <mp-flex flex-direction="row" justify-content="space-between" align-items="center">
      <mp-box as="router-link" to="/">
        <img src="../assets/logo-jurnal-default.svg" style="height: 2.5rem" alt="" />
      </mp-box>
      <mp-box>
        <mp-flex justify-content="space-between" align-items="center">
          <mp-stack is-inline spacing="4">
            <mp-box>
              <mp-tooltip position="bottom" label="Switch app">
                <mp-button-icon name="shortcuts" size="md" @click="isSwitchAppOpen = true" />
              </mp-tooltip>
            </mp-box>
            <mp-box>
              <Notification />
            </mp-box>
          </mp-stack>
          <SwitchAccount />
        </mp-flex>
      </mp-box>
    </mp-flex>
    <SwitchApp :isSwitchAppOpen="isSwitchAppOpen" :onSwitchAppToggle="onSwitchAppToggle" />
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpStack, MpButtonIcon, MpTooltip } from "@mekari/pixel";
import SwitchApp from "../components/SwitchApp";
import SwitchAccount from "../components/SwitchAccount";
import Notification from "./Notification";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {
    MpBox,
    MpFlex,
    MpStack,
    MpButtonIcon,
    MpTooltip,
    SwitchApp,
    SwitchAccount,
    Notification,
  },
  data: function () {
    return {
      isSwitchAppOpen: false,
    };
  },
  methods: {
    onSwitchAppToggle: function () {
      this.isSwitchAppOpen = !this.isSwitchAppOpen;
    },
  },
};
</script>
