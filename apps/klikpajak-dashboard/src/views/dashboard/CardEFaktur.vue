<template>
  <mp-grid-item
    col-span="8"
    background="white"
    padding="6"
    border-radius="md"
    border-width="1px"
    height="auto"
    role="group"
    position="relative"
  >
    <mp-flex mb="4" justifyContent="space-between" alignItems="center">
      <mp-box>
        <mp-text fontWeight="semibold" lineHeight="1.25rem"
          >E-Faktur dibuat
        </mp-text>
        <mp-text fontSize="sm" color="gray.600" lineHeight="1rem"
          >Jan - Des 2022</mp-text
        >
      </mp-box>

      <mp-flex gap="2">
        <mp-box w="120px">
          <mp-select>
            <option value="option-1">Option 1</option>
            <option value="option-2">Option 2</option>
            <option value="option-3">Option 3</option>
          </mp-select>
        </mp-box>
        <mp-tooltip
          label="⚠️ Datepicker component is coming soon."
          id="datepicker-e-faktur"
        >
          <mp-pseudo-box
            border="1px"
            display="flex"
            gap="3.2"
            py="2"
            px="3"
            border-color="gray.100"
            rounded="6px"
            cursor="pointer"
            :_hover="{ bg: 'blackAlpha.50' }"
          >
            <mp-text>Jan 2022</mp-text>
            <mp-icon name="calendar" />
          </mp-pseudo-box>
        </mp-tooltip>
      </mp-flex>
    </mp-flex>

    <mp-flex v-if="status === 'active'" justify-content="center">
      <mp-text py="16" color="gray.400" font-size="sm">
        ⚠️ Chart component is coming soon.
      </mp-text>
    </mp-flex>

    <mp-flex
      v-if="status === 'waiting'"
      flex-direction="column"
      justify-content="center"
      align-items="center"
      gap="2"
      padding-y="13"
    >
      <ProcessingIllustration />
      <mp-text font-weight="bold">Data perusahaan Anda sedang diproses</mp-text>
    </mp-flex>

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
      <mp-flex
        flex-direction="column"
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="100%"
        px="20"
      >
        <mp-heading
          mb="6"
          as="h3"
          lineHight="md"
          fontSize="lg"
          color="white"
          textAlign="center"
          >Aktifkan fitur untuk dapat membuat dan mengelola faktur masukan dan
          keluaran Anda.</mp-heading
        >
        <mp-button mb="4" variant="outline">Daftarkan sekarang</mp-button>
        <mp-text textDecoration="underline" color="white" isLink>
          Pelajari fitur
        </mp-text>
      </mp-flex>
    </mp-pseudo-box>
  </mp-grid-item>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpPseudoBox,
  MpTooltip,
  MpIcon,
  MpGridItem,
  MpHeading,
  MpButton,
  MpSelect,
} from "@mekari/pixel";
import ProcessingIllustration from "@/components/ProcessingIllustration.vue";
export default {
  props: {
    status: {
      type: [String],
      default: "active", // "active", "blank", "waiting"
    },
  },
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpPseudoBox,
    MpTooltip,
    MpIcon,
    MpGridItem,
    ProcessingIllustration,
    MpHeading,
    MpButton,
    MpSelect,
  },
};
</script>
