 <template>
  <mp-flex
    width="376px"
    direction="column"
    align="center"
    justify="center"
    bg="white"
  >
    <mp-icon
      v-if="variant === 'icon'"
      :name="name"
      color="blue.400"
      width="56px"
      height="56px"
      mb="6"
    />
    <mp-image v-if="variant === 'illustration'" :src="src" :width="288" :height="240" />
    <mp-text font-size="lg" font-weight="semibold" mb="1" text-align="center">{{ title }}</mp-text>
    <mp-text color="gray.600" text-align="center">{{ description }}</mp-text>

    <slot />
  </mp-flex>
</template>

<script>
import { MpText, MpFlex, MpImage, MpIcon } from "@mekari/pixel";

export default {
  name: "BlankSlate",
  components: {
    MpText,
    MpFlex,
    MpImage,
    MpIcon,
  },
  props: {
    variant: {
      type: String,
      default: "icon",
    },
    name: {
      type: String,
      default: "reports",
    },
    src: {
      type: String,
      default:
        "https://mekari.com/wp-content/themes/mekari-website-theme/images/img-404.png",
    },
    title: {
      type: String,
      default: "No data yet",
    },
    description: {
      type: String,
      default: "Your data will display here",
    },
  },
};
</script>
