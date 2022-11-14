import { MpFlex, MpText } from "@mekari/pixel";

export const TextElipsisCollapsible = {
  props: { id: { type: String } },
  data() {
    return {
      isTruncated: true,
      isOpen: false,
      element: "",
    };
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    const element = document.getElementById(this.id);
    this.isTruncated = element.offsetWidth < element.scrollWidth;
    console.log(this.isTruncated);
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
      this.isOpen ? "Lihat" : "Tutup"
    );

    return h(MpFlex, {}, [
      h(MpText, { props: { isTruncated: true }, attrs: { id: this.id } }, [this.isTruncated, this.$slots.default, !this.isOpen && action]),
      this.isOpen && action,
    ]);
  },
};
