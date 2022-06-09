<template>
  <mp-box
    as="nav"
    border-bottom-color="gray.100"
    border-bottom-width="1px"
    border-style="solid"
    background-color="white"
    padding-x="6"
    padding-y="1.5"
  >
    <mp-flex
      flex-direction="row"
      justify-content="space-between"
      align-items="center"
    >
      <mp-box as="router-link" to="/">
        <!-- <mp-icon name="jurnal-brand" size="lg" /> -->
        <img
          src="https://www.jurnal.id/wp-content/uploads/2022/04/logo-mekari-jurnal.svg"
          style="height: 2rem"
          alt=""
        />
      </mp-box>
      <mp-box>
        <mp-flex justify-content="space-between" align-items="center">
          <mp-stack is-inline spacing="5">
            <mp-tooltip position="bottom" label="Search">
              <mp-button-icon
                name="search"
                size="md"
                @click="isSwitchAppOpen = true"
              />
            </mp-tooltip>
            <mp-tooltip position="bottom" label="Inbox">
              <mp-button-icon
                name="inbox"
                size="md"
                @click="isSwitchAppOpen = true"
              />
            </mp-tooltip>
            <mp-tooltip position="bottom" label="Switch app">
              <mp-button-icon
                name="help"
                size="md"
                @click="isSwitchAppOpen = true"
              />
            </mp-tooltip>
            <mp-tooltip position="bottom" label="Switch app">
              <mp-button-icon
                name="shortcuts"
                size="md"
                @click="isSwitchAppOpen = true"
              />
            </mp-tooltip>
          </mp-stack>
          <SwitchAccount />
        </mp-flex>
      </mp-box>
    </mp-flex>
    <SwitchApp
      :isSwitchAppOpen="isSwitchAppOpen"
      :onSwitchAppToggle="onSwitchAppToggle"
    />
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpStack, MpButtonIcon, MpTooltip } from "@mekari/pixel";
import SwitchApp from "../components/SwitchApp";
import SwitchAccount from "../components/SwitchAccount";

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
