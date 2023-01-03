import { MpTooltip } from "@mekari/pixel";

export const AutoTextEllipsis = {
  props: {
    id: { type: String },
    tooltipPosition: { type: String, default: "top" },
  },
  data() {
    return { element: "", resizeObserver: "", isEllipsis: false };
  },
  mounted() {
    this.element = document.getElementById(`text-${this.id}`);

    const textElement = document.getElementById(`text-${this.id}`);
    this.resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        console.log("clientWidth", entry.target.clientWidth);
        console.log("offsetWidth", entry.target.offsetWidth);
        console.log("scrollWidth", entry.target.scrollWidth);

        this.isEllipsisActive(entry.target.offsetWidth, entry.target.scrollWidth);
      }
    });

    this.resizeObserver.observe(textElement);
  },
  methods: {
    isEllipsisActive(offsetWidth, scrollWidth) {
      if (offsetWidth < scrollWidth) {
        this.isEllipsis = true;
        console.log("Ellipsis active");
      } else {
        this.isEllipsis = false;
        console.log("Ellipsis not active");
      }
    },
  },
  beforeDestroy() {
    this.resizeObserver = "";
    this.resizeObserver.disconnect(document.getElementById(`text-${this.id}`));
  },
  render(h) {
    const cloneElement = this.$slots.default[0];
    const text = cloneElement.componentOptions.children[0].text;

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
        props: {
          label: text,
          id: `tooltip-${this.id}`,
          position: this.tooltipPosition,
        },
        attrs: { visibility: this.isEllipsis ? "visible" : "hidden" },
      },
      [cloneElement]
    );
  },
};

export const TextEllipsis = {
  props: {
    id: { type: String },
    tooltipPosition: { type: String, default: "top" },
  },
  data() {
    return { isTruncated: false };
  },
  mounted() {
    const element = document.getElementById(`text-${this.id}`);
    this.isTruncated = element.offsetWidth < element.scrollWidth;
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
        props: {
          label: getTextElement,
          id: `tooltip-${this.id}`,
          position: this.tooltipPosition,
        },
        attrs: { visibility: this.isTruncated ? "visible" : "hidden" },
      },
      [cloneElement]
    );
  },
};
