<template>
  <mp-grid-item
    col-span="4"
    background="white"
    padding="6"
    border-radius="md"
    border-width="1px"
    role="group"
    position="relative"
  >
    <mp-flex justifyContent="space-between" alignItems="center">
      <mp-box>
        <mp-text fontWeight="semibold" lineHeight="1.25rem"
          >Laporan pajak
        </mp-text>
        <mp-text fontSize="sm" color="gray.600" lineHeight="1rem"
          >Januari 2022</mp-text
        >
      </mp-box>

      <mp-tooltip
        label="⚠️ Datepicker component is coming soon."
        id="datepicker-laporan-pajak"
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

    <!-- Active -->
    <mp-flex flex-direction="column" v-if="status === 'active'" mt="4">
      <mp-stack>
        <mp-flex
          flex-direction="column"
          border-bottom-width="1px"
          border-color="gray.100"
          padding-y="2"
          gap="1"
        >
          <mp-text font-size="sm" color="gray.600"
            >PPh pasal 21 | Pembetulan ke-1</mp-text
          >

          <mp-flex align-items="center" justify-content="space-between">
            <mp-text>Rp1.000.000,00</mp-text>
            <mp-badge variant="solid" variantColor="green" size="sm">
              Berhasil lapor
            </mp-badge>
          </mp-flex>
        </mp-flex>
        <mp-flex
          flex-direction="column"
          border-bottom-width="1px"
          border-color="gray.100"
          padding-y="2"
          gap="1"
        >
          <mp-text font-size="sm" color="gray.600"
            >PPh pasal 4(2) | Pembetulan ke-0</mp-text
          >

          <mp-flex align-items="center" justify-content="space-between">
            <mp-text>Rp1.000.000,00</mp-text>
            <mp-badge variant="solid" variantColor="orange" size="sm">
              Gagal lapor
            </mp-badge>
          </mp-flex>
        </mp-flex>
        <mp-flex
          flex-direction="column"
          border-bottom-width="1px"
          border-color="gray.100"
          padding-y="2"
          gap="1"
        >
          <mp-text font-size="sm" color="gray.600"
            >PPh pasal 22 | Pembetulan ke-1</mp-text
          >

          <mp-flex align-items="center" justify-content="space-between">
            <mp-text>Rp1.000.000,00</mp-text>
            <mp-badge variant="solid" variantColor="red" size="sm">
              Ditotak
            </mp-badge>
          </mp-flex>
        </mp-flex>
      </mp-stack>

      <mp-flex
        justify-content="space-between"
        align-items="center"
        pt="4"
        mb="-2"
      >
        <mp-text color="gray.600" line-height="md">
          Menampilkan 3 dari 5
        </mp-text>
        <mp-flex>
          <mp-tooltip label="Prev page" position="bottom">
            <mp-button-icon
              name="chevrons-left"
              size="sm"
              is-round
              padding-right="1"
            />
          </mp-tooltip>
          <mp-tooltip label="Next page" position="bottom">
            <mp-button-icon
              name="chevrons-right"
              size="sm"
              is-round
              padding-left="1"
            />
          </mp-tooltip>
        </mp-flex>
      </mp-flex>
    </mp-flex>

    <!-- Waiting -->
    <mp-flex
      v-if="status === 'waiting'"
      flex-direction="column"
      justify-content="center"
      align-items="center"
      gap="2"
      padding-y="13"
    >
      <ProcessingIllustration />
      <mp-text font-weight="bold">EFIN Anda sedang diproses</mp-text>
    </mp-flex>

    <!-- Blank -->
    <mp-flex
      v-if="status === 'blank'"
      flex-direction="column"
      justify-content="center"
      align-items="center"
      gap="2"
      padding-y="13"
    >
      <NoDataIllustration />
      <mp-text font-weight="bold">Belum ada pelaporan pajak</mp-text>
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
        p="6"
      >
        <mp-heading
          mb="6"
          as="h3"
          lineHight="md"
          fontSize="lg"
          color="white"
          textAlign="center"
          >Tambahkan EFIN untuk dapat melaporkan pajak.</mp-heading
        >
        <mp-button mb="4" variant="outline">Tambah sekarang</mp-button>
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
  MpText,
  MpFlex,
  MpPseudoBox,
  MpIcon,
  MpStack,
  MpBadge,
  MpTooltip,
  MpButton,
  MpButtonIcon,
  MpHeading,
  MpGridItem,
} from "@mekari/pixel";
import ProcessingIllustration from "@/components/ProcessingIllustration.vue";
import NoDataIllustration from "@/components/NoDataIllustration.vue";

export default {
  props: {
    status: {
      type: [String],
      default: "active", // "active", "blank", "waiting"
    },
  },
  components: {
    MpBox,
    MpText,
    MpFlex,
    MpPseudoBox,
    MpIcon,
    MpStack,
    MpBadge,
    MpTooltip,
    MpButtonIcon,
    MpButton,
    MpHeading,
    ProcessingIllustration,
    NoDataIllustration,
    MpGridItem,
  },
};
</script>
