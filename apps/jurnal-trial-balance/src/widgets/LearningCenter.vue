<template>
  <mp-flex direction="column" height="100vh">
    <mp-flex justify="flex-end" mb="6">
      <mp-button-icon name="close" @click="handleClose" />
    </mp-flex>
    <mp-text font-size="xl" font-weight="semibold"> {{ title }} </mp-text>
    <mp-input-group mt="4" mb="6">
      <mp-input-left-addon :with-background="false">
        <mp-icon name="search" size="sm" />
      </mp-input-left-addon>
      <mp-input v-model="search" :placeholder="placeholder" />
    </mp-input-group>
    <mp-flex v-if="search" direction="column" mb="4" pb="4" border-bottom="1px solid" border-color="gray.50">
      <mp-flex
        v-for="(item, index) in searchResult"
        :key="index"
        py="3"
        px="2"
        rounded="md"
        cursor="pointer"
        :_hover="{
          background: 'gray.50',
        }"
        @click="handleClickSearch(item.title)"
      >
        <mp-text>{{ item.title }}</mp-text>
      </mp-flex>
      <mp-flex py="3" px="2">
        <mp-text is-link>Show 10 more articles</mp-text>
      </mp-flex>
    </mp-flex>
    <mp-flex direction="column" overflow="auto" pb="12">
      <mp-flex v-if="!search" direction="column" mb="4">
        <mp-text font-weight="semibold" mb="0.5" line-height="20px">Get started with Jurnal</mp-text>
        <mp-text font-size="sm" color="gray.600" mb="2">Learn the basic set up your account</mp-text>
        <img src="../assets/video_thumbnail.png" alt="video thumbnail" :style="{ borderRadius: '6px' }" />
        <mp-flex py="4" border-bottom="1px solid" border-color="gray.50">
          <MenuItems
            id="learning-videos"
            title="Learning videos"
            description="Watch tutorials to learn Jurnal"
            iconName="play-video"
            :is-outlink="true"
            @click="handleClick"
          />
        </mp-flex>
      </mp-flex>
      <MenuItems
        v-for="item in menu"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :iconName="item.iconName"
        :is-outlink="item.isOutlink"
        :is-free="item.isFree"
        @click="handleClick"
      />
    </mp-flex>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText, MpButtonIcon, MpInput, MpInputGroup, MpInputLeftAddon, MpIcon } from "@mekari/pixel";

import MenuItems from "./MenuItems.vue";

export default {
  name: "LearningCenter",
  components: {
    MpFlex,
    MpText,
    MpButtonIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpIcon,
    MenuItems,
  },
  props: {
    id: { type: [Number, String], default: 0 },
    title: { type: String, default: "" },
    placeholder: { type: String, default: "Search help article" },
  },
  data() {
    return {
      search: "",
      menu: [
        {
          id: "whats-new",
          title: "What’s new",
          description: "Latest features & changes info",
          iconName: "broadcast",
          isOutlink: false,
          isFree: false,
        },
        {
          id: "guide-center",
          title: "Guide center",
          description: "Step-by-step guide on how to use",
          iconName: "tips",
          isOutlink: false,
          isFree: false,
        },
        {
          id: "help-center",
          title: "Help center",
          description: "Guides, FAQs, & troubleshooting",
          iconName: "education",
          isOutlink: true,
          isFree: false,
        },
        {
          id: "live-training",
          title: "Live training",
          description: "Learn Jurnal from the experts",
          iconName: "play-video",
          isOutlink: false,
          isFree: true,
        },
        {
          id: "give-feedback",
          title: "Give feedback",
          description: "Have ideas or feebacks? Write us",
          iconName: "today",
          isOutlink: true,
          isFree: false,
        },
      ],
      searchResult: [
        {
          title: "Overview about employees menu",
        },
        {
          title: "How to add new employee",
        },
        {
          title: "How to manage employee payroll information",
        },
      ],
    };
  },
  methods: {
    handleClose() {
      this.$emit("close", this.id);
    },
    handleClick(id) {
      this.$emit("click", id);
    },
    handleClickSearch(title) {
      this.$emit("click-search", title);
    },
  },
};
</script>
