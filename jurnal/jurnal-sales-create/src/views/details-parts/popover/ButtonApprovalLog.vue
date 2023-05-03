<template>
  <mp-popover>
    <mp-popover-trigger>
      <mp-box>
        <mp-tooltip label="Log persetujuan">
          <mp-button-icon name="time" />
        </mp-tooltip>
      </mp-box>
    </mp-popover-trigger>
    <mp-popover-content max-width="392px" z-index="popover">
      <mp-popover-panel bg="white" px="4">
        <mp-text font-weight="semibold" mb="4">Approval Log</mp-text>

        <mp-timeline>
          <mp-timeline-item status="created">
            <mp-timeline-title>
              <mp-text fontSize="md" line-height="md" font-weight="semibold">
                Diajukan
                <mp-text as="span" color="gray.400" font-weight="regular">oleh</mp-text>
                Rizal Candra
              </mp-text>
            </mp-timeline-title>
            <mp-timeline-caption>27 December 2021 at 11:32 (GMT+7)</mp-timeline-caption>
          </mp-timeline-item>
          <mp-timeline-accordion is-open label="Approval tingkat 1">
            <mp-timeline-item status="approved">
              <mp-timeline-title>
                <mp-text font-size="md" line-height="md" font-weight="semibold">
                  Disetujui
                  <mp-text as="span" color="gray.400" font-weight="regular"> by </mp-text>
                  Dwight Schrute
                </mp-text>
              </mp-timeline-title>
              <mp-timeline-caption> 28 Desember 2021 at 09:24 (GMT+7) </mp-timeline-caption>
            </mp-timeline-item>
          </mp-timeline-accordion>
          <mp-timeline-accordion is-open label="Approval tingkat 2">
            <mp-timeline-item status="need-approval">
              <mp-timeline-title>
                <mp-text font-size="md" line-height="md" font-weight="semibold">
                  Menunggu persetujuan
                  <mp-text as="span" color="gray.400" font-weight="regular"> from </mp-text>
                  Jim Halpert
                </mp-text>
              </mp-timeline-title>
              <mp-timeline-caption> 27 December 2021 at 11:32 (GMT+7) </mp-timeline-caption>
            </mp-timeline-item>
            <mp-timeline-item status="approved">
              <mp-timeline-title>
                <mp-text font-size="md" line-height="md" font-weight="semibold">
                  Disetujui
                  <mp-text as="span" color="gray.400" font-weight="regular"> by </mp-text>
                  Mark Calaway
                </mp-text>
              </mp-timeline-title>
              <mp-timeline-caption> 28 Desember 2021 at 11:32 (GMT+7) </mp-timeline-caption>
            </mp-timeline-item>
          </mp-timeline-accordion>
          <mp-timeline-accordion is-open label="Approval tingkat 3">
            <mp-timeline-item status="need-approval">
              <mp-timeline-title>
                <mp-text font-size="md" line-height="md" font-weight="semibold">
                 Menunggu persetujuan
                  <mp-text as="span" color="gray.400" font-weight="regular"> dari </mp-text>
                  Andy Bernard
                  <mp-text as="span" color="gray.400" font-weight="regular"> atau </mp-text>
                  Michael Scott
                </mp-text>
              </mp-timeline-title>
              <mp-timeline-caption> 27 December 2021 at 11:32 (GMT+7) </mp-timeline-caption>
            </mp-timeline-item>
          </mp-timeline-accordion>
        </mp-timeline>
      </mp-popover-panel>
    </mp-popover-content>
  </mp-popover>
</template>

<script>
import {
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverPanel,
  MpTimeline,
  MpTimelineItem,
  MpTimelineTitle,
  MpTimelineCaption,
  MpTimelineAccordion,
  MpText,
  MpTooltip,
  MpBox,
  MpButtonIcon,
} from "@mekari/pixel";

export default {
  name: "ApprovalLog",
  components: {
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverPanel,
    MpTimeline,
    MpTimelineItem,
    MpTimelineTitle,
    MpTimelineCaption,
    MpTimelineAccordion,
    MpText,
    MpTooltip,
    MpBox,
    MpButtonIcon,
  },
};
</script>
