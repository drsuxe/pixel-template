<template>
  <mp-grid-item col-span="4" background="white" padding="6" border-radius="md" border-width="1px" role="group" position="relative">
    <mp-flex justifyContent="space-between" alignItems="center" mb="3">
      <mp-box>
        <mp-text fontWeight="semibold" lineHeight="1.25rem">ID Billing dibayar </mp-text>
        <mp-text fontSize="sm" color="gray.600" lineHeight="1rem">Jan - Des 2022</mp-text>
      </mp-box>

      <mp-box>
        <mp-date-picker id="ebilling-datepicker" v-model="date" value-type="date" format="YYYY" placeholder="Date" />
      </mp-box>
    </mp-flex>

    <mp-select v-model="value">
      <option value="PPh Pasal 23" size="sm">PPh Pasal 23</option>
    </mp-select>

    <mp-text py="16" color="gray.400" font-size="sm"> ⚠️ Chart component is coming soon. </mp-text>

    <mp-pseudo-box
      v-if="status === 'blank'"
      position="absolute"
      border-radius="md"
      top="0px"
      right="0px"
      bottom="0px"
      left="0px"
      bg="overlay"
      opacity="0"
      transition="all .2s ease"
      :_groupHover="{ opacity: '1' }"
    >
      <mp-flex flex-direction="column" justifyContent="center" alignItems="center" h="100%" w="100%" p="6">
        <mp-heading mb="6" as="h3" lineHeight="md" fontSize="lg" color="white" textAlign="center">Buat dan bayar ID Billing Anda melalui Klikpajak</mp-heading>
        <mp-button mb="4" variant="outline">Coba sekarang</mp-button>
        <mp-text textDecoration="underline" color="white" isLink> Pelajari fitur </mp-text>
      </mp-flex>
    </mp-pseudo-box>
  </mp-grid-item>
</template>

<script>
import { MpBox, MpText, MpFlex, MpPseudoBox, MpSelect, MpGridItem, MpHeading, MpButton, MpDatePicker } from "@mekari/pixel";
export default {
  props: {
    status: {
      type: [String],
      default: "active", // "active", "blank"
    },
  },
  data() {
    return {
      value: "PPh Pasal 23",
      date: new Date(),
    };
  },
  components: {
    MpBox,
    MpText,
    MpFlex,
    MpPseudoBox,
    MpSelect,
    MpGridItem,
    MpHeading,
    MpButton,
    MpDatePicker,
  },
};
</script>

<style>
#ebilling-datepicker-input {
  width: 100px;
  min-width: 100px;
}
</style>
