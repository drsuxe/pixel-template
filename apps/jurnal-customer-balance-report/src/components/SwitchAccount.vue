<template>
  <mp-popover>
    <mp-popover-trigger>
      <mp-button variant="unstyled" height="auto" margin-left="5">
        <mp-flex
          align-items="center"
          border-radius="md"
          transition="all 0.2s ease-in-out"
          padding-x="2"
          padding-y="1"
          :_hover="{ bg: 'background', cursor: 'pointer' }"
        >
          <mp-avatar name="Rizal Chandra" size="md" margin-right="2" />
          <mp-flex flex-direction="column">
            <mp-text font-weight="semibold" line-height="md"> Rizal Chandra </mp-text>
            <mp-text font-size="sm" color="gray.600"> PT Central Perk Indonesia </mp-text>
          </mp-flex>
        </mp-flex>
      </mp-button>
    </mp-popover-trigger>
    <mp-popover-content z-index="4" max-width="65" border-radius="md" box-shadow="lg" border="1px solid" border-color="gray.400" background-color="white">
      <mp-box background-color="background" border-bottom="1px" border-color="gray.100" padding-y="4">
        <mp-flex justify-content="center" align-items="center" flex-direction="column">
          <mp-avatar name="Rizal Chandra" size="lg" margin-bottom="2" />
          <mp-text font-weight="semibold">Rizal Chandra</mp-text>
          <mp-text color="gray.600">PT Central Perk Indonesia</mp-text>
        </mp-flex>
      </mp-box>
      <mp-popover-list padding-y="0">
        <mp-popover-list-item>Account settings</mp-popover-list-item>
        <mp-popover-list-item>Company info</mp-popover-list-item>
        <mp-popover-list-item is-arrow> Company list </mp-popover-list-item>
        <mp-popover-list-item>Help & Support</mp-popover-list-item>
        <mp-popover-list-item>Change language</mp-popover-list-item>
        <mp-divider />
        <mp-popover-list-item is-arrow> Switch account </mp-popover-list-item>
        <mp-popover-list-item is-arrow> Sign out </mp-popover-list-item>
      </mp-popover-list>
      <mp-flex gap="3" flex-wrap="wrap" padding-x="3" padding-y="4">
        <mp-text font-size="xs" color="gray.600">Privacy</mp-text>
        <mp-text font-size="xs" color="gray.600">Terms of Use</mp-text>
        <mp-text font-size="xs" color="gray.600"> About Mekari Account </mp-text>
        <mp-text font-size="xs" color="gray.600">Mekari © 2021</mp-text>
      </mp-flex>
    </mp-popover-content>
  </mp-popover>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButton,
  MpAvatar,
  MpText,
  MpDivider,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "SwitchAccount",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpAvatar,
    MpText,
    MpDivider,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
};
</script>
