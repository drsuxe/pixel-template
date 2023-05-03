<template>
  <mp-drawer
    :is-open="isSwitchAppOpen"
    :on-close="onSwitchAppToggle"
    :return-focus-on-close="false"
  >
    <mp-drawer-overlay :display="['none', 'block']" />
    <mp-drawer-content
      border="none"
      border-left="1px"
      border-left-color="gray.100"
      :max-width="['full', 'xs']"
      :margin-top="['51px', '0px']"
      :height="['calc(100vh - 51px)', '100vh']"
    >
      <mp-drawer-close-button :visibility="['hidden', 'visible']" />
      <mp-drawer-body
        max-height="calc(100vh)"
        overflow="hidden auto"
        padding="0"
        :margin-top="[4, 20]"
      >
        <mp-box padding-bottom="20" padding-x="6">
          <mp-text margin-bottom="2">
            Hi Rizal, your apps are listed here.
          </mp-text>
          <SwitchAppItem
            title="Mekari Talenta"
            description="Advanced payroll automation & HR solution"
            icon="talenta-brand"
          />
          <SwitchAppItem
            title="Mekari Jurnal"
            description="Integrated online accounting software"
            icon="jurnal-brand"
          />
          <mp-divider margin-top="2" margin-bottom="2.5" />
          <mp-text margin-bottom="2">
            Other apps by Mekari that might suit your business needs.
          </mp-text>
          <SwitchAppItem
            title="Mekari Klikpajak"
            description="Simple tax management platform"
            icon="klikpajak-brand"
          />
          <SwitchAppItem
            title="Mekari Qontak"
            description="Complete CRM software"
            icon="jurnal-brand"
          />
          <SwitchAppItem
            title="Mekari Flex"
            description="Flexible employee benefits management"
            icon="flex-brand"
          />
          <SwitchAppItem
            title="Mekari Sign"
            description="Digital signature app"
            icon="sign-brand"
          />
          <mp-divider margin-top="2" margin-bottom="2.5" />
          <mp-text margin-bottom="2">More from Mekari.</mp-text>
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
      </mp-drawer-body>
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
  MpDrawerBody,
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
    MpDrawerBody,
    MpDrawerCloseButton,
    SwitchAppItem,
  },
};
</script>
