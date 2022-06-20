<template>
  <mp-timeline>
    <mp-timeline-item status="created">
      <mp-timeline-title>
        <mp-text font-size="md" line-height="md" font-weight="semibold">
          Requested
          <mp-text as="span" color="gray.400" font-weight="regular"> by </mp-text> Rizal Candra
        </mp-text>
      </mp-timeline-title>
      <mp-timeline-caption> 03 Apr 2022, 21:12 PM </mp-timeline-caption>
    </mp-timeline-item>
    <mp-timeline-item status="need-approval">
      <mp-timeline-title>
        <mp-text font-size="md" line-height="md" font-weight="semibold">
          Need approval
          <mp-text as="span" color="gray.400" font-weight="regular"> by </mp-text> Dwight Schrute
        </mp-text>
      </mp-timeline-title>
      <mp-timeline-caption> 03 Apr 2022, 21:12 PM </mp-timeline-caption>
    </mp-timeline-item>
  </mp-timeline>
</template>

<script>
import { MpText, MpTimeline, MpTimelineItem, MpTimelineTitle, MpTimelineCaption } from "@mekari/pixel";

export default {
  name: "PopoverTimeline",
  components: {
    MpText,
    MpTimeline,
    MpTimelineItem,
    MpTimelineTitle,
    MpTimelineCaption,
  },
};
</script>
