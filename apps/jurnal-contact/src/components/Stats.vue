<template>
  <mp-pseudo-box
    as="button"
    role="group"
    width="full"
    padding="4"
    border-radius="md"
    cursor="pointer"
    transition="all .2s ease"
    :_hover="{ backgroundColor: 'gray.50' }"
    :_active="{ backgroundColor: 'ice.50' }"
    :_focus="{ boxShadow: 'outer' }"
  >
    <mp-flex>
      <mp-badge variant="subtle" :variant-color="variantColor"> {{ label }} </mp-badge>
    </mp-flex>

    <mp-flex>
      <mp-heading> {{ value }} </mp-heading>
    </mp-flex>
  </mp-pseudo-box>
</template>

<script>
import { MpPseudoBox, MpHeading, MpBadge, MpFlex } from "@mekari/pixel";

export default {
  name: "StatsDefaultClickable",
  components: { MpPseudoBox, MpHeading, MpBadge, MpFlex },
  props: {
    label: String,
    variantColor: String,
    value: [String, Number],
  },
};
</script>
