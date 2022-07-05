<template>
  <mp-grid-item col-span="8" background="white" padding="6" border-radius="md" border-width="1px" height="auto" role="group" position="relative">
    <mp-flex mb="4" justifyContent="space-between" alignItems="center">
      <mp-box>
        <mp-text fontWeight="semibold" lineHeight="1.25rem">E-Bupot dilaporkan </mp-text>
        <mp-text fontSize="sm" color="gray.600" lineHeight="1rem">Jan - Des 2022</mp-text>
      </mp-box>

      <mp-box>
        <mp-date-picker id="ebupot-datepicker" v-model="date" value-type="date" format="MMM YYYY" placeholder="Date" />
      </mp-box>
    </mp-flex>

    <mp-grid template-columns="repeat(12, 1fr)">
      <mp-grid-item col-span="5">
        <mp-flex h="210px" w="210px" align-items="center" justify-content="center">
          <mp-text color="gray.400" font-size="sm"> ⚠️ Chart component is coming soon. </mp-text>
        </mp-flex>
      </mp-grid-item>

      <mp-grid-item col-span="7">
        <mp-stack spacing="0">
          <mp-flex justify-content="space-between" py="2" border-bottom-width="1px" border-color="gray.100">
            <mp-flex align-items="center">
              <mp-box h="2" w="2" bg="orange.500" rounded="xs" mr="2" />
              <mp-text>PPh pasal 4(2)</mp-text>
            </mp-flex>
            <mp-text>Rp100.000,00</mp-text>
          </mp-flex>
          <mp-flex justify-content="space-between" py="2" border-bottom-width="1px" border-color="gray.100">
            <mp-flex align-items="center">
              <mp-box h="2" w="2" bg="red.500" rounded="xs" mr="2" />
              <mp-text>PPh pasal 15</mp-text>
            </mp-flex>
            <mp-text>Rp100.000,00</mp-text>
          </mp-flex>
          <mp-flex justify-content="space-between" py="2" border-bottom-width="1px" border-color="gray.100">
            <mp-flex align-items="center">
              <mp-box h="2" w="2" bg="green.500" rounded="xs" mr="2" />
              <mp-text>PPh pasal 22</mp-text>
            </mp-flex>
            <mp-text>Rp100.000,00</mp-text>
          </mp-flex>
          <mp-flex justify-content="space-between" py="2" border-bottom-width="1px" border-color="gray.100">
            <mp-flex align-items="center">
              <mp-box h="2" w="2" bg="blue.500" rounded="xs" mr="2" />
              <mp-text>PPh pasal 23</mp-text>
            </mp-flex>
            <mp-text>Rp100.000,00</mp-text>
          </mp-flex>
          <mp-flex justify-content="space-between" py="2" border-bottom-width="1px" border-color="gray.100">
            <mp-flex align-items="center">
              <mp-box h="2" w="2" bg="brand.mekari" rounded="xs" mr="2" />
              <mp-text>PPh pasal 26</mp-text>
            </mp-flex>
            <mp-text>Rp100.000,00</mp-text>
          </mp-flex>

          <mp-flex justify-content="space-between" py="2">
            <mp-text size="sm" font-weight="bold">Total</mp-text>
            <mp-text size="md" font-weight="bold">Rp500.000,00</mp-text>
          </mp-flex>
        </mp-stack>
      </mp-grid-item>
    </mp-grid>

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
        <mp-heading mb="6" as="h3" lineHight="md" fontSize="lg" color="white" textAlign="center"
          >Aktifkan fitur untuk dapat membuat dan mengelola bukti potong SPT Masa PPh 4(2), 15, 22, 23, dan 26.</mp-heading
        >
        <mp-button mb="4" variant="outline">Aktifkan sekarang</mp-button>
        <mp-text textDecoration="underline" color="white" isLink> Pelajari fitur </mp-text>
      </mp-flex>
    </mp-pseudo-box>
  </mp-grid-item>
</template>

<script>
import { MpBox, MpFlex, MpText, MpPseudoBox, MpStack, MpGrid, MpGridItem, MpHeading, MpButton, MpDatePicker } from "@mekari/pixel";

export default {
  props: {
    status: {
      type: [String],
      default: "active", // "active", "blank"
    },
  },
  data() {
    return {
      date: new Date(),
    };
  },
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpPseudoBox,
    MpStack,
    MpGrid,
    MpGridItem,
    MpHeading,
    MpButton,
    MpDatePicker,
  },
};
</script>

<style>
#ebupot-datepicker-input {
  width: 120px;
  min-width: 120px;
}
</style>
