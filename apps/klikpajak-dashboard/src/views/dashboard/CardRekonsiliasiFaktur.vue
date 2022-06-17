<template>
  <mp-box
    background="white"
    padding="6"
    border-radius="md"
    border-width="1px"
    role="group"
    position="relative"
  >
    <mp-grid template-columns="repeat(12, 1fr)">
      <mp-grid-item
        col-span="8"
        pr="8"
        border-right-width="1px"
        border-style="dashed"
        border-color="gray.100"
      >
        <mp-stack spacing="5">
          <mp-flex mb="4" justifyContent="space-between" alignItems="center">
            <mp-box>
              <mp-text fontWeight="semibold" lineHeight="1.25rem"
                >Rekonsiliasi faktur
              </mp-text>
              <mp-text fontSize="sm" color="gray.600" lineHeight="1rem"
                >Masa pajak Januari 2022</mp-text
              >
            </mp-box>

            <mp-tooltip
              label="⚠️ Datepicker component is coming soon."
              id="datepicker-rekosiliasi-faktur"
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

          <mp-flex flex-direction="column" gap="6">
            <mp-flex flex-direction="column" gap="2">
              <mp-flex justify-content="space-between">
                <mp-text font-weight="bold" color="gray.600"
                  >Faktur keluaran terekonsiliasi</mp-text
                >
                <mp-text> <strong>800</strong> dari 1.000 </mp-text>
              </mp-flex>

              <mp-progress :value="75" color="green" height="4" />
            </mp-flex>

            <mp-flex flex-direction="column" gap="2">
              <mp-flex justify-content="space-between">
                <mp-text font-weight="bold" color="gray.600"
                  >Faktur masukan terekonsiliasi</mp-text
                >
                <mp-text> <strong>400</strong> dari 800 </mp-text>
              </mp-flex>

              <mp-progress :value="40" color="blue" height="4" />
            </mp-flex>
          </mp-flex>

          <mp-flex gap="1" align-items="center">
            <mp-text is-link> Lihat detail rekonsiliasi </mp-text>
            <mp-icon name="link" color="blue.400" size="sm" />
          </mp-flex>
        </mp-stack>
      </mp-grid-item>

      <mp-grid-item col-span="4" pl="8">
        <mp-text font-weight="bold" mb="6">Total faktur terekonsiliasi</mp-text>

        <mp-stack flex-direction="column" spacing="4">
          <mp-flex flex-direction="column">
            <mp-flex gap="1">
              <mp-text size="sm" line-height="sm" color="gray.600"
                >Faktur keluaran</mp-text
              >
              <mp-tooltip
                label="Jumlah faktur keluaran"
                id="jumlah-faktur-keluaran"
                position="right"
              >
                <mp-badge size="sm">800</mp-badge>
              </mp-tooltip>
            </mp-flex>

            <mp-text font-weight="bold">Rp10.000.000,00</mp-text>
          </mp-flex>
          <mp-flex flex-direction="column">
            <mp-flex gap="1">
              <mp-text size="sm" line-height="sm" color="gray.600"
                >Faktur masukan</mp-text
              >
              <mp-tooltip
                label="Jumlah faktur masukan"
                id="jumlah-faktur-masukan"
                position="right"
              >
                <mp-badge size="sm">800</mp-badge>
              </mp-tooltip>
            </mp-flex>

            <mp-text font-weight="bold">Rp10.000.000,00</mp-text>
          </mp-flex>
          <mp-divider />
          <mp-flex justify-content="space-between">
            <mp-text font-weight="bold"> Rp5.000.000,00 </mp-text>
            <mp-badge variant="subtle" variantColor="orange" size="md">
              Kurang bayar
            </mp-badge>
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
      <mp-flex
        flex-direction="column"
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="100%"
        px="56"
      >
        <mp-heading
          mb="6"
          as="h3"
          lineHight="md"
          fontSize="lg"
          color="white"
          textAlign="center"
          >Rekonsiliasikan faktur pajak Anda dengan faktur penjualan & pembelian
          di Jurnal.</mp-heading
        >
        <mp-button mb="4" variant="outline">Coba sekarang</mp-button>
        <mp-text textDecoration="underline" color="white" isLink>
          Pelajari fitur
        </mp-text>
      </mp-flex>
    </mp-pseudo-box>
  </mp-box>
</template>

<script>
import {
  MpGrid,
  MpGridItem,
  MpFlex,
  MpBox,
  MpText,
  MpProgress,
  MpIcon,
  MpBadge,
  MpDivider,
  MpTooltip,
  MpPseudoBox,
  MpStack,
  MpHeading,
  MpButton,
} from "@mekari/pixel";

export default {
  props: {
    status: {
      type: [String],
      default: "active", // "active", "blank"
    },
  },
  components: {
    MpGrid,
    MpGridItem,
    MpFlex,
    MpBox,
    MpText,
    MpProgress,
    MpIcon,
    MpBadge,
    MpDivider,
    MpTooltip,
    MpPseudoBox,
    MpStack,
    MpHeading,
    MpButton,
  },
};
</script>
