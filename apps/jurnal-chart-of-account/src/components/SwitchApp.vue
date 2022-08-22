<template>
  <mp-drawer :is-open="isSwitchAppOpen" :on-close="onSwitchAppToggle">
    <mp-drawer-overlay />
    <mp-drawer-content
      max-width="xs"
      border="none"
      border-left="1px"
      border-left-color="gray.100"
    >
      <mp-drawer-close-button />
      <mp-box
        margin-top="20"
        max-height="calc(100vh)"
        overflow-y="auto"
        overflow-x="hidden"
      >
        <mp-box padding-bottom="20" padding-x="6">
          <mp-text margin-bottom="2">
            Hi Rizal, your apps are listed here.
          </mp-text>
          <SwitchAppItem
            title="Talenta by Mekari"
            description="Advanced payroll automation & HR solution"
            icon="talenta-brand"
          />
          <SwitchAppItem
            title="Jurnal by Mekari"
            description="Integrated online accounting software"
            icon="jurnal-brand"
          />
          <mp-divider margin-top="2" margin-bottom="2.5" />
          <mp-text margin-bottom="2">
            Other apps by Mekari that might suit your business needs.
          </mp-text>
          <SwitchAppItem
            title="Klikpajak by Mekari"
            description="Simple tax management platform"
            icon="klikpajak-brand"
          />
          <SwitchAppItem
            title="Qontak by Mekari"
            description="Complete CRM software"
            icon="jurnal-brand"
          />
          <SwitchAppItem
            title="Mekari Flex"
            description="Flexible employee benefits management"
            icon="flex-brand"
          />
          <SwitchAppItem
            title="Mekari Chat"
            description="Business chat app"
            icon="chat-brand"
          />
          <SwitchAppItem
            title="Mekari Sign"
            description="Digital signature app"
            icon="sign-brand"
          />
          <mp-divider margin-top="2" margin-bottom="2.5" />
          <mp-text margin-bottom="2">Other from Mekari.</mp-text>
          <SwitchAppItem
            title="Mekari University"
            description="Professional learning platform"
            icon="mekari-brand"
          />
          <SwitchAppItem
            title="Mekari Hub"
            description="Launchpad"
            icon="mekari-brand"
          />
        </mp-box>
      </mp-box>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpBox,
  MpText,
  MpDivider,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
} from "@mekari/pixel";
import SwitchAppItem from "./SwitchAppItem";

export default {
  name: "SwitchApp",
  props: {
    isSwitchAppOpen: [Boolean],
    onSwitchAppToggle: [Function],
  },
  components: {
    MpBox,
    MpText,
    MpDivider,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    SwitchAppItem,
  },
};
</script>
