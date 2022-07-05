<template>
  <mp-box background="white" padding="6" border-radius="md" border-width="1px">
    <mp-flex flexDirection="column" gap="2" mb="4">
      <mp-heading as="h2" fontWeight="semibold" fontSize="2xl">Selamat pagi, Rizal Candra</mp-heading>
      <mp-text color="gray.600" fontWeight="semibold" lineHeight="md">RABU, 05 JAN 2021</mp-text>
    </mp-flex>

    <mp-grid gap="6" template-columns="repeat(12, 1fr)">
      <mp-grid-item col-span="4" border-right="1px" border-color="gray.100">
        <mp-flex flexDirection="column" gap="2">
          <mp-box>
            <mp-heading as="h2" fontWeight="semibold" fontSize="2xl">0</mp-heading>
            <mp-text color="gray.600" lineHeight="md">Kuota NSFP</mp-text>
          </mp-box>

          <mp-box v-if="status === 'active'">
            <mp-text isLink lineHeight="md">Tambah kuota</mp-text>
          </mp-box>

          <mp-box v-if="status === 'blank'">
            <mp-tooltip label="Silakan aktifkan fitur terlebih dahulu" id="kuota-nsfp">
              <mp-text isLink color="gray.400" as="span" lineHeight="md">Tambah kuota</mp-text>
            </mp-tooltip>
          </mp-box>
        </mp-flex>
      </mp-grid-item>
      <mp-grid-item col-span="4" border-right="1px" border-color="gray.100">
        <mp-flex flexDirection="column" gap="2">
          <mp-box>
            <mp-heading as="h2" fontWeight="semibold" fontSize="2xl">50</mp-heading>
            <mp-text color="gray.600">Kuota upload E-Faktur</mp-text>
          </mp-box>

          <mp-box v-if="status === 'active'">
            <mp-text isLink lineHeight="md">Tambah kuota</mp-text>
          </mp-box>

          <mp-box v-if="status === 'blank'">
            <mp-tooltip label="Silakan aktifkan fitur terlebih dahulu" id="kuota-e-faktur">
              <mp-text isLink color="gray.400" as="span" lineHeight="md">Tambah kuota</mp-text>
            </mp-tooltip>
          </mp-box>
        </mp-flex>
      </mp-grid-item>
      <mp-grid-item col-span="4">
        <mp-flex flexDirection="column" gap="2">
          <mp-box>
            <mp-heading as="h2" fontWeight="semibold" fontSize="2xl">50</mp-heading>
            <mp-text color="gray.600">Kuota upload E-Bupot</mp-text>
          </mp-box>

          <mp-box v-if="status === 'active'">
            <mp-text isLink lineHeight="md">Tambah kuota</mp-text>
          </mp-box>

          <mp-box v-if="status === 'blank'">
            <mp-tooltip label="Silakan aktifkan fitur terlebih dahulu" id="kuota-e-bupot">
              <mp-text isLink color="gray.400" as="span" lineHeight="md">Tambah kuota</mp-text>
            </mp-tooltip>
          </mp-box>
        </mp-flex>
      </mp-grid-item>
    </mp-grid>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpHeading, MpGrid, MpGridItem, MpTooltip } from "@mekari/pixel";
export default {
  props: {
    status: {
      type: [String],
      default: "active", // "active", "blank"
    },
  },
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpGrid,
    MpGridItem,
    MpTooltip,
  },
};
</script>
