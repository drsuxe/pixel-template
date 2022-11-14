<template>
  <mp-form-control>
    <mp-input-group role="group">
      <mp-input-left-addon :with-background="false">
        <mp-button variant="unstyled" min-width="0" left-icon="minus-circular" size="sm" display="inline-flex" color="gray.600" @click="hanldeDecrease" />
      </mp-input-left-addon>
      <mp-input type="number" text-align="center" v-model="number" :_groupHover="{ borderColor: 'gray.400' }" />
      <mp-input-right-addon :with-background="false">
        <mp-button variant="unstyled" min-width="0" right-icon="add-circular" size="sm" display="inline-flex" color="gray.600" @click="handleIncrease" />
      </mp-input-right-addon>
    </mp-input-group>
  </mp-form-control>
</template>

<script>
import { MpFormControl, MpInputGroup, MpInput, MpInputRightAddon, MpInputLeftAddon, MpButton } from "@mekari/pixel";

export default {
  name: "InputSize",
  components: {
    MpFormControl,
    MpInputGroup,
    MpInput,
    MpInputRightAddon,
    MpInputLeftAddon,
    MpButton,
  },
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    handleIncrease() {
      this.number += 1;
    },
    hanldeDecrease() {
      this.number -= 1;
    },
  },
};
</script>
