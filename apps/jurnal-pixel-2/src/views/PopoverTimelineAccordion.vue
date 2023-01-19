<template>
  <mp-timeline>
    <mp-timeline-item status="created">
      <mp-timeline-title>
        <mp-text fontSize="md" line-height="md" font-weight="semibold">
          Requested
          <mp-text as="span" color="gray.400" font-weight="regular">by</mp-text>
          Rizal Candra
        </mp-text>
      </mp-timeline-title>
      <mp-timeline-caption>27 December 2021 at 11:32 (GMT+7)</mp-timeline-caption>
    </mp-timeline-item>
    <mp-timeline-accordion is-open label="Approval Layer 1">
      <mp-timeline-item status="approved">
        <mp-timeline-title>
          <mp-text font-size="md" line-height="md" font-weight="semibold">
            Approved
            <mp-text as="span" color="gray.400" font-weight="regular"> by </mp-text>
            Dwight Schrute
          </mp-text>
        </mp-timeline-title>
        <mp-timeline-caption> 28 Desember 2021 at 09:24 (GMT+7) </mp-timeline-caption>
      </mp-timeline-item>
    </mp-timeline-accordion>
    <mp-timeline-accordion is-open label="Approval Layer 2">
      <mp-timeline-item status="need-approval">
        <mp-timeline-title>
          <mp-text font-size="md" line-height="md" font-weight="semibold">
            Need Approval
            <mp-text as="span" color="gray.400" font-weight="regular"> from </mp-text>
            Jim Halpert
          </mp-text>
        </mp-timeline-title>
        <mp-timeline-caption> 27 December 2021 at 11:32 (GMT+7) </mp-timeline-caption>
      </mp-timeline-item>
      <mp-timeline-item status="approved">
        <mp-timeline-title>
          <mp-text font-size="md" line-height="md" font-weight="semibold">
            Approved
            <mp-text as="span" color="gray.400" font-weight="regular"> by </mp-text>
            Mark Calaway
          </mp-text>
        </mp-timeline-title>
        <mp-timeline-caption> 28 Desember 2021 at 11:32 (GMT+7) </mp-timeline-caption>
      </mp-timeline-item>
    </mp-timeline-accordion>
    <mp-timeline-accordion is-open label="Approval Layer 3">
      <mp-timeline-item status="need-approval">
        <mp-timeline-title>
          <mp-text font-size="md" line-height="md" font-weight="semibold">
            Need approval
            <mp-text as="span" color="gray.400" font-weight="regular"> from </mp-text>
            Andy Bernard
            <mp-text as="span" color="gray.400" font-weight="regular"> or </mp-text>
            Michael Scott
          </mp-text>
        </mp-timeline-title>
        <mp-timeline-caption> 27 December 2021 at 11:32 (GMT+7) </mp-timeline-caption>
      </mp-timeline-item>
    </mp-timeline-accordion>
  </mp-timeline>
</template>

<script>
import { MpTimeline, MpTimelineItem, MpTimelineTitle, MpTimelineCaption, MpTimelineAccordion, MpText } from "@mekari/pixel";

export default {
  name: "PopoverTimelineAccordion",
  components: {
    MpTimeline,
    MpTimelineItem,
    MpTimelineTitle,
    MpTimelineCaption,
    MpTimelineAccordion,
    MpText,
  },
};
</script>
