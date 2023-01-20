<template>
  <mp-box>
    <mp-box position="absolute" bottom="26" right="26">
      <mp-flex
        v-if="isHelpCenterOpen"
        position="absolute"
        right="2px"
        bottom="46px"
        width="246px"
        direction="column"
        py="3"
        background="white"
        border="1px solid"
        border-color="gray.400"
        rounded="md"
        box-shadow="md"
      >
        <mp-flex
          width="full"
          py="2"
          px="3"
          justify="space-between"
          align="center"
          cursor="pointer"
          :_hover="{
            background: 'gray.50',
          }"
          @click="handleOpenLearningCenter"
        >
          <mp-flex direction="column">
            <mp-text color="dark">Learning Center</mp-text>
            <mp-text font-size="sm" color="gray.600">Guidebook, live traning and more!</mp-text>
          </mp-flex>
          <mp-icon name="chevrons-right" color="gray.600" size="sm" />
        </mp-flex>
        <mp-flex
          width="full"
          py="2"
          px="3"
          justify="space-between"
          align="center"
          cursor="pointer"
          :_hover="{
            background: 'gray.50',
          }"
          @click="handleClickGetSupport"
        >
          <mp-flex direction="column">
            <mp-text color="dark">Get Support</mp-text>
            <mp-text font-size="sm" color="gray.600">Chat with Jurnal live support</mp-text>
          </mp-flex>
          <mp-badge variant-color="red"> 2 </mp-badge>
          <!-- <mp-icon name="chevrons-right" color="gray.600" size="sm" /> -->
        </mp-flex>
      </mp-flex>
      <mp-box position="absolute" right="2px" bottom="2px" z-index="1250">
        <mp-box @mouseenter="handleHoverHelpCenter" @mouseleave="handleHoverHelpCenter" @click="handleClickHelpCenter">
          <mp-flex
            position="relative"
            justify="center"
            align="center"
            background="violet.400"
            width="10"
            height="10"
            rounded="full"
            box-shadow="0px 2px 4px 0px rgba(0, 0, 0, 0.14)"
            cursor="pointer"
            z-index="1250"
          >
            <img v-if="isHelpCenterOpen" src="../assets/close.svg" alt="close help center" />
            <mp-box v-else>
              <img src="../assets/help_center.svg" alt="open help center" />
              <mp-badge variant-color="red" position="absolute" top="-2" right="-2" box-shadow="0 0 0 2px #fff"> 2 </mp-badge>
            </mp-box>
          </mp-flex>

          <Transition name="bounce">
            <mp-flex
              v-show="isHelpCenterHovered && !isHelpCenterOpen"
              z-index="1249"
              position="absolute"
              right="0"
              bottom="0"
              cursor="pointer"
              background="white"
              width="243px"
              py="3"
              px="4"
              justify="start"
              align="flex"
              height="11"
              rounded="full"
              box-shadow="0px 2px 4px 0px rgba(0, 0, 0, 0.14)"
            >
              <mp-text font-size="md" font-weight="semibold" color="violet.400" line-height="20px"> Live support & resources </mp-text>
            </mp-flex>
          </Transition>
        </mp-box>
      </mp-box>
    </mp-box>

    <mp-drawer :is-open="isLearningCenterOpen" :on-close="handleCloseLearningCenter">
      <mp-drawer-overlay />
      <mp-drawer-content>
        <mp-drawer-body p="6">
          <LearningCenter
            v-if="showMenu === 'learning-center'"
            title="Learning center"
            @close="handleCloseLearningCenter"
            @click="handleClickLearningCenter"
            @click-search="handleClickSearch"
          />
          <Transition name="slide">
            <WhatsNew v-if="showMenu === 'whats-new'" id="whats-new" @close="handleCloseLearningCenter" @back="handleBackLearningCenter" />
          </Transition>
          <Transition name="slide">
            <GuideCenter
              v-if="showMenu === 'guide-center'"
              id="guide-center"
              @close="handleCloseLearningCenter"
              @click="handleClickGuideCenter"
              @back="handleBackLearningCenter"
            />
          </Transition>
          <Transition name="slide">
            <LiveTraining v-if="showMenu === 'live-training'" id="live-training" @close="handleCloseLearningCenter" @back="handleBackLearningCenter" />
          </Transition>
        </mp-drawer-body>
      </mp-drawer-content>
    </mp-drawer>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpIcon, MpDrawer, MpDrawerOverlay, MpDrawerContent, MpDrawerBody, MpBadge } from "@mekari/pixel";

import LearningCenter from "./LearningCenter.vue";
import WhatsNew from "./WhatNews.vue";
import GuideCenter from "./GuideCenter.vue";
import LiveTraining from "./LiveTraining.vue";

export default {
  name: "LearningCenterWidget",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerBody,
    MpBadge,
    LearningCenter,
    WhatsNew,
    GuideCenter,
    LiveTraining,
  },
  data() {
    return {
      isHelpCenterHovered: false,
      isHelpCenterOpen: false,
      isLearningCenterOpen: false,
      showMenu: "learning-center",
    };
  },
  methods: {
    handleHoverHelpCenter() {
      this.isHelpCenterHovered = !this.isHelpCenterHovered;
    },
    handleClickHelpCenter() {
      this.isHelpCenterOpen = !this.isHelpCenterOpen;
    },
    handleOpenLearningCenter() {
      this.showMenu = "learning-center";
      this.isLearningCenterOpen = true;
    },
    handleCloseLearningCenter() {
      this.isLearningCenterOpen = false;
      this.isHelpCenterOpen = false;
    },
    handleBackLearningCenter() {
      this.showMenu = "learning-center";
    },
    handleClickLearningCenter(id) {
      if (id === "whats-new" || id === "guide-center" || id === "live-training") {
        this.showMenu = id;
      }
      if (id === "help-center" || id === "give-feedback") {
        window.open("https://mekari.com", "_blank");
      }
      if (id === "learning-videos") {
        window.open("https://www.youtube.com/c/JurnalOfficial/featured", "_blank");
      }
    },
    handleClickGuideCenter(id) {
      alert(`CLICK GUIDE CENTER: ${id}`);
    },
    handleClickSearch(title) {
      alert(`CLICK SEACH: ${title}`);
    },
    handleClickGetSupport() {
      alert("GET SUPPORT CLICKED");
    },
  },
};
</script>

<style>
.slide-leave-active,
.slide-enter-active {
  transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
}
.slide-enter {
  transform: translate(200%, 0);
}
.slide-leave-to {
  transform: translate(200%, 0);
}

.bounce-leave-active,
.bounce-enter-active {
  transition: transform 0.1s cubic-bezier(0.175, 0.8, 0.2, 1.125) 0s;
}
.bounce-enter {
  transform: translate(200%, 0);
}
.bounce-leave-to {
  transform: translate(200%, 0);
}
</style>
