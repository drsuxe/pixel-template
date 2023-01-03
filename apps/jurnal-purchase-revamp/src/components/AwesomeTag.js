import { MpFlex, MpTag, MpText } from "@mekari/pixel";
import { TextEllipsis } from "./TextEllipsis";

export default {
  props: {
    tags: { type: [Array] },
    id: { type: String, required: true },
  },
  data() {
    return {
      isCanShowMore: false,
      isShow: false,
    };
  },
  mounted() {
    if (this.$el.offsetHeight >= 71) {
      this.isCanShowMore = true;
    }
  },
  render(h) {
    let useTags = [];
    const tags = this.tags.map((item, index) => {
      return h(
        MpTag,
        {
          attrs: { maxWidth: "169px", size: "sm", variant: "gray" },
        },
        [
          h(TextEllipsis, { props: { id: `${this.id}-${index}` } }, [
            h(
              MpText,
              {
                attrs: {
                  lineHeight: "md",
                },
              },
              item
            ),
          ]),
        ]
      );
    });
    useTags = tags;

    if (this.isCanShowMore && !this.isShow) {
      const finalTags = tags.slice(0, 3);
      useTags = finalTags;
    }

    const text = h(
      MpText,
      {
        props: { isLink: true },
        nativeOn: {
          click: () => {
            this.isShow = !this.isShow;
          },
        },
      },
      this.isShow ? "Hide" : "Show"
    );

    return h(MpFlex, { attrs: { gap: 3, alignItems: "center", flexWrap: "wrap" } }, [useTags, this.isCanShowMore && text]);
  },
};
