import { MpFlex, MpText } from "@mekari/pixel";

const isEllipsisActive = (element) => {
  return element.scrollHeight > element.clientHeight;
};

export const TextElipsisCollapsible = {
  props: {
    id: { type: String },
    isOpen: { type: Boolean },
  },
  data() {
    return {
      isTruncated: true,
      element: "",
    };
  },
  methods: {
    handleClick() {
      this.isTruncated = !this.isTruncated;
    },
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
    console.log(this.isTruncated, this.isEllipsis)
    this.element = document.getElementById(this.id);
  },
  render(h) {
    const action = h(
      MpText,
      {
        props: { isLink: true, as: "span" },
        nativeOn: {
          click: this.handleClick,
        },
      },
      this.isTruncated ? "Lihat" : "Tutup"
    );
    return h(MpFlex, 
      {
        attrs: {
          alignItems: 'end'
        }
    }, [
      h(MpText, { props: { isTruncated: this.isTruncated, lineClamp: 3  }, attrs: { id: this.id } }, [this.$slots.default, !this.isTruncated && this.isEllipsis && action]),
      this.isTruncated && this.isEllipsis && action,
    ]);
  },
};
