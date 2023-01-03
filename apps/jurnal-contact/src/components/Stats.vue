<template>
  <mp-pseudo-box
    as="button"
    role="group"
    width="full"
    padding="4"
    border-radius="md"
    cursor="pointer"
    transition="all .2s ease"
    position="relative"
    :_hover="{ backgroundColor: 'gray.50' }"
    :_active="{ backgroundColor: 'ice.50' }"
    :_focus="{ boxShadow: 'outer' }"
  >
    <mp-flex>
      <mp-badge variant="subtle" :variant-color="variantColor">
        {{ label }}
      </mp-badge>
    </mp-flex>

    <mp-flex>
      <mp-heading> {{ value }} </mp-heading>
    </mp-flex>

    <mp-box position="absolute" top="4" right="4" opacity="0" :_groupHover="{ opacity: '100' }">
      <mp-icon name="filter" variant="duotone" size="sm" />
    </mp-box>
  </mp-pseudo-box>
</template>

<script>
import { MpPseudoBox, MpHeading, MpBadge, MpFlex, MpBox, MpIcon } from "@mekari/pixel";

export default {
  name: "StatsDefaultClickable",
  components: { MpPseudoBox, MpHeading, MpBadge, MpFlex, MpBox, MpIcon },
  props: {
    label: String,
    variantColor: String,
    value: [String, Number],
  },
};
</script>
