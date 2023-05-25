<template>
  <mp-box display="flex">
    <mp-box flex="none" width="30%">
      <mp-flex>
      <mp-text v-if="label" color="gray.600"> {{ label }} 
        <mp-text v-if="isRequired" as="span" color="red.500" ml="1">*</mp-text>
      </mp-text>

      <mp-box v-if="tooltipLabel">
        <mp-tooltip :label="tooltipLabel">
          <mp-icon name="info" ml="2" />
        </mp-tooltip>
      </mp-box>
      </mp-flex>

    </mp-box>

    <mp-box width="70%">
      <slot />
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox, MpText, MpIcon, MpTooltip, MpFlex } from "@mekari/pixel";
export default {
  components: {
    MpBox,
    MpText,
    MpIcon,
    MpTooltip,
    MpFlex
  },
  props: {
    label: String,
    isRequired: Boolean,
    tooltipLabel: String
  },
};
</script>
