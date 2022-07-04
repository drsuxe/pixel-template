import { MpTooltip } from "@mekari/pixel";

const isEllipsisActive = (element) => {
  return element.offsetWidth < element.scrollWidth;
};

export const Ellipsis = {
  props: {
    id: { type: String },
    tooltipPosition: { type: String, default: "top" },
  },
  data() {
    return { element: "" };
  },
  computed: {
    isEllipsis() {
      if (this.element) {
        return isEllipsisActive(this.element);
      }
      return false;
    },
  },
  mounted() {
    this.element = document.getElementById(`text-${this.id}`);
  },
  render(h) {
    const cloneElement = this.$slots.default[0];
    const getTextElement = cloneElement.componentOptions.children[0].text;

    cloneElement.data.attrs = {
      ...cloneElement.data.attrs,
      id: `text-${this.id}`,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    };

    return h(
      MpTooltip,
      {
        props: { label: getTextElement, id: `tooltip-${this.id}`, position: this.tooltipPosition },
        attrs: { visibility: this.isEllipsis ? "visible" : "hidden" },
      },
      [cloneElement]
    );
  },
};
