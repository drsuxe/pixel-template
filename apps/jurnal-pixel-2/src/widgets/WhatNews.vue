<template>
  <mp-flex direction="column" height="100vh">
    <mp-flex justify="space-between" mb="6">
      <mp-button-icon name="arrows-left" @click="handleBack" />
      <mp-button-icon name="close" @click="handleClose" />
    </mp-flex>
    <mp-text font-size="xl" font-weight="semibold"> What's new </mp-text>
    <mp-flex direction="column" overflow="auto" pt="6" pb="12">
      <mp-flex
        direction="column"
        pb="6"
        mb="6"
        border-bottom="1px solid"
        border-color="gray.50"
      >
        <mp-text color="gray.600" font-size="sm" mb="2"
          >Tue, 25 Oct 2022</mp-text
        >
        <mp-text mb="6">
          <b>Reports:</b> You can now see a chart of your top customers on the
          Receivable Invoice Summary report and top suppliers/vendors on the
          Payable Invoice Summary report.
          <mp-text as="a" href="https://mekari.com" target="_blank" is-link
            >Learn more.</mp-text
          >
        </mp-text>
        <mp-text>
          <b>Analytics:</b> You can now view your net profit margin on the
          business snapshot dashboard.
          <mp-text as="a" href="https://mekari.com" target="_blank" is-link
            >Learn more.</mp-text
          >
        </mp-text>
      </mp-flex>
      <mp-flex
        direction="column"
        pb="6"
        mb="6"
        border-bottom="1px solid"
        border-color="gray.50"
      >
        <mp-text color="gray.600" font-size="sm" mb="2"
          >Tue, 25 Oct 2022</mp-text
        >
        <mp-text>
          <b>Reports:</b> You can now see credit limits and available credit by
          customer on the Aged Receivables Summary report.
          <mp-text as="a" href="https://mekari.com" target="_blank" is-link
            >Learn more.</mp-text
          >
        </mp-text>
      </mp-flex>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText, MpButtonIcon } from "@mekari/pixel";

export default {
  name: "WhatsNew",
  components: {
    MpFlex,
    MpText,
    MpButtonIcon,
  },
  props: {
    id: { type: [Number, String], default: 0 },
  },
  methods: {
    handleClose() {
      this.$emit("close", this.id);
    },
    handleBack() {
      this.$emit("back", this.id);
    },
  },
};
</script>
