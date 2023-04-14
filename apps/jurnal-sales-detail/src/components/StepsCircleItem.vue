<template>
  <mp-flex
    position="relative"
    justify-content="center"
    align-items="center"
    flex-direction="row"
    flex="1 0 0%"
  >
    <mp-flex
      flex="1 0 0%"
      min-height="auto"
      border-top-width="md"
      position="absolute"
      top="14px"
      left="calc(50% + 22px)"
      right="calc(-50% + 22px)"
      :width="isLast && '0'"
      :height="isLast ? '0' : '0.5'"
      :border-color="getStepProps({ isCompleted: 'blue.400' }, 'gray.100')"
    >
    </mp-flex>
    <mp-pseudo-box
      role="group"
      :_hover="{ cursor: 'pointer' }"
      @click="$emit('click', id)"
    >
      <mp-flex
        width="7"
        height="7"
        justify-content="center"
        align-items="center"
        outline="solid 2px"
        border-radius="full"
        margin="0 auto"
        transition="all .2s ease"
        :background-color="getStepProps({ isCompleted: 'blue.400' }, 'white')"
        :outline-color="
          getStepProps(
            { isCompleted: 'blue.400', isCurrent: 'blue.400' },
            'gray.100'
          )
        "
        :_groupHover="{
          outlineColor: getStepProps({ isCompleted: 'blue.500' }, 'gray.100'),
          backgroundColor: getStepProps(
            { isCompleted: 'blue.500', isCurrent: 'blue.50' },
            'gray.100'
          ),
        }"
      >
        <mp-icon v-if="isCompleted" name="check" size="sm" color="white" />
        <mp-text
          v-else
          font-size="md"
          font-weight="semibold"
          text-align="center"
          :color="getStepProps({ isCurrent: 'blue.400' }, 'gray.600')"
        >
          {{ id }}
        </mp-text>
      </mp-flex>
      <mp-flex
        justify-content="center"
        align-items="center"
        flex-direction="column"
        text-align="center"
      >
        <mp-text
          font-size="md"
          text-align="center"
          margin-top="1"
          :font-weight="getStepProps({ isCurrent: 'semibold' }, 'regular')"
          :color="getStepProps({ isCurrent: 'blue.400' }, 'gray.600')"
        >
          {{ label }}
        </mp-text>
      </mp-flex>
    </mp-pseudo-box>
  </mp-flex>
</template>

<script>
import { MpFlex, MpPseudoBox, MpText, MpIcon } from "@mekari/pixel";

export default {
  name: "StepsCircleItem",
  components: { MpFlex, MpPseudoBox, MpText, MpIcon },
  props: {
    id: [String, Number],
    label: [String],
    isCompleted: [Boolean],
    isCurrent: [Boolean],
    isLast: [Boolean],
  },
  methods: {
    getStepProps(values, optionalValue) {
      if (this.isCompleted) return values.isCompleted;
      else if (this.isCurrent) return values.isCurrent;
      else return optionalValue;
    },
  },
};
</script>
