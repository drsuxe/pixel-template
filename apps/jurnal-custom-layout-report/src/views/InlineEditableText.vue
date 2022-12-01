<template>
  <mp-box>
    <mp-flex v-if="isEdit" position="relative" id="editable-wrapper">
      <mp-text id="temp-text" position="absolute" visibility="hidden" left="0" top="0" font-size="2xl" font-weight="semibold" max-width="800px">
        {{ tempText }}
      </mp-text>

      <mp-flex align="center">
        <mp-input
          id="input"
          font-size="2xl"
          font-weight="semibold"
          v-model="tempText"
          @keyup.enter="handleSave"
          @keydown.esc="handleEscape"
          @change="handleAdjustInputWidth"
          @blur="handleBlur"
          :width="inputWidth"
        />
      </mp-flex>

      <mp-flex align="center" pl="1">
        <mp-tooltip id="delete-label" label="Cancel">
          <mp-button-icon name="close" size="sm" @click="handleCancel" />
        </mp-tooltip>
        <mp-tooltip id="save-label" label="Save">
          <mp-button-icon name="check" size="sm" @click="handleSave" />
        </mp-tooltip>
      </mp-flex>
    </mp-flex>

    <mp-flex position="relative" role="group" v-else>
      <mp-text id="text" font-size="2xl" font-weight="semibold" text-align="center">
        {{ text }}
      </mp-text>

      <mp-box ml="1" position="absolute" right="-8" opacity="0" :_groupHover="{ opacity: '100' }">
        <mp-tooltip id="edit-label" label="Ubah nama laporan" position="right" width="max-content">
          <mp-button-icon @click="handleEnableEdit" name="edit" />
        </mp-tooltip>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpInput, MpButtonIcon, MpTooltip } from "@mekari/pixel";
export default {
  name: "InlineEditableText",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpInput,
    MpButtonIcon,
    MpTooltip,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      text: this.value,
      tempText: "",
      inputWidth: 0,
      isEdit: false,
    };
  },
  mounted() {
    console.log(this.value);
    const element = document.getElementById("text");
    this.inputWidth = element.clientWidth + 50;
  },
  methods: {
    handleEnableEdit() {
      this.isEdit = true;
      this.tempText = this.text;

      this.$nextTick(() => {
        const inputNode = document.getElementById("input");
        inputNode.focus();

        this.handleAdjustInputWidth();
      });
    },
    handleSave() {
      this.isEdit = false;
      this.text = this.tempText;
      this.tempText = "";

      this.$toast({
        variant: "success",
        title: "Nama laporan berhasil diubah",
        position: "top",
        duration: 500,
      });

      this.$emit("input", this.text);
    },
    handleEscape() {
      this.handleCancel();
    },
    handleCancel() {
      this.isEdit = false;
      this.tempText = "";
    },
    handleBlur() {
      if (this.isEdit) {
        this.handleSave();
      }
    },

    // Utils
    handleAdjustInputWidth() {
      const element = document.getElementById("temp-text");
      this.inputWidth = element.clientWidth + 50;

      console.log(this.inputWidth);
    },
  },
};
</script>
