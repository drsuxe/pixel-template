<template>
  <mp-flex direction="column" align-items="center" justify-content="center">
    <img v-if="type === 'no-data'" src="@/assets/no-data.svg" alt="" />
    <img v-if="type === 'data-not-found'" src="@/assets/data-not-found.svg" alt="" />
    <img v-if="type === 'no-email'" src="@/assets/no-email.svg" alt="" />
    <img v-if="type === 'failed'" src="@/assets/failed.svg" alt="" />

    <mp-text font-weight="semibold" mt="4"> {{ title }} </mp-text>
    <mp-text font-size="sm" color="gray.600" text-align="center">{{ description }} </mp-text>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText } from "@mekari/pixel";
export default {
  props: {
    type: { type: String, default: "no-data" },
    title: String,
    description: String,
  },
  components: {
    MpFlex,
    MpText,
  },
};
</script>
