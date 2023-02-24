<template>
  <mp-flex direction="column" height="100vh">
    <mp-flex justify="space-between" mb="6">
      <mp-button-icon name="arrows-left" @click="handleBack" />
      <mp-button-icon name="close" @click="handleClose" />
    </mp-flex>
    <mp-text font-size="xl" font-weight="semibold"> Guide center </mp-text>
    <mp-flex direction="column" overflow="auto" pt="6" pb="12">
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
import { MpFlex, MpText, MpButtonIcon } from "@mekari/pixel";

import MenuItems from "./MenuItems.vue";

export default {
  name: "GuideCenter",
  components: {
    MpFlex,
    MpText,
    MpButtonIcon,
    MenuItems,
  },
  props: {
    id: { type: [Number, String], default: 0 },
  },
  data() {
    return {
      menu: [
        {
          id: "general-guide",
          title: "General guide",
          description: "Learn Jurnal main features",
          iconName: "profile",
          isOutlink: false,
          isFree: false,
        },
        {
          id: "food-beverage-industry",
          title: "Food & Beverage industry",
          description: "Learn how to use Jurnal in F&B industry",
          iconName: "lifestyle",
          isOutlink: false,
          isFree: false,
        },
        {
          id: "services-industry",
          title: "Services industry",
          description: "Learn how to use Jurnal in services industry",
          iconName: "bank",
          isOutlink: false,
          isFree: false,
        },
        {
          id: "manufacturing-industry",
          title: "Manufacturing industry",
          description: "Learn how to use Jurnal in manufacturing industry",
          iconName: "assets",
          isOutlink: false,
          isFree: false,
        },
        {
          id: "retail-industry",
          title: "Retail industry",
          description: "Learn how to use Jurnal in retail industry",
          iconName: "cart",
          isOutlink: false,
          isFree: false,
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
    handleClick(id) {
      this.$emit("click", id);
    },
  },
};
</script>
