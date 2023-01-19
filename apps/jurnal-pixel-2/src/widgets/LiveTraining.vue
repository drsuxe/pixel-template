<template>
  <mp-flex direction="column" height="100vh">
    <mp-flex justify="space-between" mb="6">
      <mp-button-icon name="arrows-left" @click="handleBack" />
      <mp-button-icon name="close" @click="handleClose" />
    </mp-flex>
    <mp-text font-size="xl" font-weight="semibold"> Live Training </mp-text>
    <mp-flex direction="column" overflow="auto" pt="6" pb="12">
      <mp-flex v-for="item in videos" :key="item.title" py="3" px="2">
        <mp-flex width="22" height="16" flex="none" rounded="md">
          <img
            :src="item.thumbnail"
            alt="video thumbnail"
            style="border-radius: 6px"
          />
        </mp-flex>
        <mp-flex direction="column" ml="4">
          <mp-text font-weight="semibold" line-height="20px" mb="1">{{
            item.title
          }}</mp-text>
          <mp-text as="a" :href="item.href" target="_blank" is-link
            >Check schedule</mp-text
          >
        </mp-flex>
      </mp-flex>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText, MpButtonIcon } from "@mekari/pixel";

export default {
  name: "LiveTraining",
  components: {
    MpFlex,
    MpText,
    MpButtonIcon,
  },
  props: {
    id: { type: [Number, String], default: 0 },
  },
  data() {
    return {
      videos: [
        {
          title: "Database Training",
          thumbnail: "https://via.placeholder.com/88x64/D0D6DD/FFFFFF",
          href: "https://mekari.com",
        },
        {
          title: "Time Management Training",
          thumbnail: "https://via.placeholder.com/88x64/D0D6DD/FFFFFF",
          href: "https://mekari.com",
        },
        {
          title: "Finance Training",
          thumbnail: "https://via.placeholder.com/88x64/D0D6DD/FFFFFF",
          href: "https://mekari.com",
        },
        {
          title: "Payroll Training",
          thumbnail: "https://via.placeholder.com/88x64/D0D6DD/FFFFFF",
          href: "https://mekari.com",
        },
        {
          title: "Company Admin Training",
          thumbnail: "https://via.placeholder.com/88x64/D0D6DD/FFFFFF",
          href: "https://mekari.com",
        },
        {
          title: "ESS Training",
          thumbnail: "https://via.placeholder.com/88x64/D0D6DD/FFFFFF",
          href: "https://mekari.com",
        },
        {
          title: "Setting Training",
          thumbnail: "https://via.placeholder.com/88x64/D0D6DD/FFFFFF",
          href: "https://mekari.com",
        },
        {
          title: "Recruitment Training",
          thumbnail: "https://via.placeholder.com/88x64/D0D6DD/FFFFFF",
          href: "https://mekari.com",
        },
        {
          title: "Performance Review Training",
          thumbnail: "https://via.placeholder.com/88x64/D0D6DD/FFFFFF",
          href: "https://mekari.com",
        },
      ],
    };
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
