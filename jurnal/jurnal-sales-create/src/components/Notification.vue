<template>
  <mp-box>
    <mp-flex ref="notificationTitle" px="4" py="3">
      <mp-text font-size="lg" font-weight="semibold">Notifications</mp-text>
    </mp-flex>

    <mp-flex>
      <mp-tabs
        id="unified-notifications-tabs"
        :index="tabIndex"
        width="full"
        is-manual
        @change.self="handleChangTab"
      >
        <mp-tab-list
          position="sticky"
          mb="0"
          px="4"
          top="0"
          bg="white"
          z-index="1"
        >
          <mp-tab>
            General
            <mp-badge
              size="md"
              ml="2"
              line-height="normal"
              :variant-color="tabIndex === 0 ? 'red' : 'gray'"
            >
              2
            </mp-badge>
          </mp-tab>
          <mp-tab>
            Need Approval
            <mp-badge
              size="md"
              ml="2"
              line-height="normal"
              :variant-color="tabIndex === 1 ? 'red' : 'gray'"
            >
              1
            </mp-badge>
          </mp-tab>
        </mp-tab-list>
        <mp-tab-panels pb="4">
          <!-- General Tabs Content -->
          <mp-tab-panel>
            <!-- Filter Area -->
            <mp-flex
              position="sticky"
              justify-content="space-between"
              px="4"
              py="3"
              top="51px"
              bg="white"
              :shadow="isHeaderSticky ? 'md' : ''"
              z-index="1"
            >
              <mp-box width="240px">
                <mp-select size="sm" v-model="generalFilter">
                  <option
                    v-for="(item, index) in generalFilterData"
                    :key="index"
                    :value="item"
                  >
                    {{ item }}
                  </option>
                </mp-select>
              </mp-box>
              <mp-button
                v-if="
                  generalFilter !== 'Complete' && generalFilter !== 'Assignment'
                "
                variant="link"
                @click="showAlert('Mark all as read clicked')"
              >
                Mark all as read
              </mp-button>
            </mp-flex>
            <!-- End of Filter Area -->

            <!-- List of Notifications -->
            <template v-for="(item, index) in generalData">
              <mp-flex
                v-if="
                  item.data.find(
                    (item) =>
                      generalFilter === item.type ||
                      generalFilter === 'All notifications'
                  )
                "
                :key="`general-${index}`"
                pt="4"
                direction="column"
              >
                <mp-text mb="2" px="4" font-size="sm" color="gray.600">
                  {{ item.date }}
                </mp-text>
                <template v-for="(item, idx) in item.data">
                  <mp-flex
                    v-if="
                      generalFilter === item.type ||
                      generalFilter === 'All notifications'
                    "
                    :key="`general-data-${idx}`"
                    px="4"
                    py="3"
                    gap="16px"
                    :_hover="{
                      backgroundColor: 'gray.50',
                      cursor: 'pointer',
                    }"
                  >
                    <mp-icon mt="1" :name="item.icon" />
                    <mp-flex direction="column" width="390px">
                      <mp-text mb="1" v-html="item.title" />
                      <mp-text font-size="sm" color="gray.600">
                        {{ item.date }}
                      </mp-text>
                    </mp-flex>
                    <mp-flex>
                      <mp-tooltip
                        v-if="item.isNew"
                        :id="`unified-notifications-general-tooltip-${idx}`"
                        label="Mark as read"
                        position="left"
                      >
                        <mp-icon name="indicator-circle" color="red.400" />
                      </mp-tooltip>
                      <mp-popover
                        v-if="item.hasMenu"
                        :id="`unified-notifications-general-popover-child-${idx}`"
                        placement="bottom-end"
                      >
                        <mp-popover-trigger>
                          <mp-button-icon name="menu-kebab" size="md" />
                        </mp-popover-trigger>
                        <mp-popover-content
                          max-width="64"
                          bg="white"
                          rounded="md"
                          shadow="lg"
                          border-width="1px"
                          border-color="gray.400"
                        >
                          <mp-popover-list>
                            <mp-popover-list-item>
                              All Request
                            </mp-popover-list-item>
                            <mp-popover-list-item>Deals</mp-popover-list-item>
                            <mp-popover-list-item>Expense</mp-popover-list-item>
                          </mp-popover-list>
                        </mp-popover-content>
                      </mp-popover>
                    </mp-flex>
                  </mp-flex>
                </template>
              </mp-flex>
            </template>
            <!-- End of List of Notifications -->

            <mp-flex
              v-if="
                generalFilter === 'Complete' || generalFilter === 'Assignment'
              "
              direction="column"
              justify-content="center"
              align-items="center"
              mb="9"
            >
              <img src="../assets/inbox.png" alt="empty" style="width: 216px" />
              <mp-text font-size="xl" font-weight="semibold" mb="1">
                No notification
              </mp-text>
              <mp-text color="gray.600">
                The notification list will show here.
              </mp-text>
            </mp-flex>

            <mp-flex
              v-else
              direction="column"
              justify-content="center"
              align-items="center"
              py="5"
            >
              <img
                src="../assets/thank-you.png"
                alt="thank you"
                style="width: 48px"
              />
              <mp-text mt="2"
                >That's all your notifications from the last 90 days.</mp-text
              >
            </mp-flex>
          </mp-tab-panel>
          <!-- End of General Tabs Content -->

          <!-- Need Approval Tabs Content -->
          <mp-tab-panel>
            <!-- Filter Area -->
            <mp-flex
              position="sticky"
              justify-content="space-between"
              px="4"
              py="3"
              top="51px"
              bg="white"
              :shadow="isHeaderSticky ? 'md' : ''"
              z-index="1"
            >
              <mp-box width="240px">
                <mp-select size="sm" v-model="needApprovalFilter">
                  <option
                    v-for="(item, index) in needApprovalFilterData"
                    :key="index"
                    :value="item"
                  >
                    {{ item }}
                  </option>
                </mp-select>
              </mp-box>
              <mp-button
                v-if="needApprovalFilter !== 'Deals'"
                variant="link"
                @click="showAlert('Mark all as read clicked')"
              >
                Mark all as read
              </mp-button>
            </mp-flex>
            <!-- End of Filter Area -->

            <!-- List of Notifications -->
            <template v-for="(item, index) in needApprovalData">
              <mp-flex
                v-if="
                  item.data.find(
                    (item) =>
                      needApprovalFilter === item.type ||
                      needApprovalFilter === 'All approval'
                  )
                "
                :key="`need-approval-${index}`"
                pt="4"
                direction="column"
              >
                <mp-text mb="2" px="4" font-size="sm" color="gray.600">
                  {{ item.date }}
                </mp-text>
                <template v-for="(item, idx) in item.data">
                  <mp-flex
                    v-if="
                      needApprovalFilter === item.type ||
                      needApprovalFilter === 'All approval'
                    "
                    :key="`need-approval-item-${idx}`"
                    px="4"
                    py="3"
                    gap="16px"
                    :_hover="{
                      backgroundColor: 'gray.50',
                      cursor: 'pointer',
                    }"
                  >
                    <mp-avatar :src="item.avatar" mt="1" />
                    <mp-flex direction="column" width="390px">
                      <mp-text mb="1" v-html="item.title" />
                      <mp-flex mb="1">
                        <mp-icon
                          mr="2"
                          name="doc"
                          size="sm"
                          color="blue.700"
                          variant="duotone"
                        />
                        <mp-text
                          as="a"
                          :href="item.link"
                          target="_blank"
                          rel="noopener noreferrer"
                          is-link
                        >
                          View details
                        </mp-text>
                      </mp-flex>
                      <mp-text font-size="sm" color="gray.600">
                        {{ item.date }}
                      </mp-text>
                    </mp-flex>
                    <mp-flex>
                      <mp-tooltip
                        v-if="item.isNew"
                        :id="`unified-notifications-need-approval-tooltip-${idx}`"
                        label="Mark as read"
                        position="left"
                      >
                        <mp-icon name="indicator-circle" color="red.400" />
                      </mp-tooltip>
                      <mp-popover
                        v-if="item.hasMenu"
                        :id="`unified-notifications-need-approval-popover-child-${idx}`"
                        placement="bottom-end"
                      >
                        <mp-popover-trigger>
                          <mp-button-icon name="menu-kebab" size="md" />
                        </mp-popover-trigger>
                        <mp-popover-content
                          max-width="64"
                          bg="white"
                          rounded="md"
                          shadow="lg"
                          border-width="1px"
                          border-color="gray.400"
                        >
                          <mp-popover-list>
                            <mp-popover-list-item>Approve</mp-popover-list-item>
                            <mp-popover-list-item>Reject</mp-popover-list-item>
                          </mp-popover-list>
                        </mp-popover-content>
                      </mp-popover>
                    </mp-flex>
                  </mp-flex>
                </template>
              </mp-flex>
            </template>
            <!-- End of List of Notifications -->

            <mp-flex
              v-if="needApprovalFilter === 'Deals'"
              direction="column"
              justify-content="center"
              align-items="center"
              mb="9"
            >
              <img src="../assets/inbox.png" alt="empty" style="width: 216px" />
              <mp-text font-size="xl" font-weight="semibold" mb="1">
                No notification
              </mp-text>
              <mp-text color="gray.600">
                The notification list will show here.
              </mp-text>
            </mp-flex>
            <mp-flex
              v-else
              direction="column"
              justify-content="center"
              align-items="center"
              py="5"
            >
              <img
                src="../assets/thank-you.png"
                alt="thank you"
                style="width: 48px"
              />
              <mp-text mt="2"
                >That's all your notifications from the last 90 days.</mp-text
              >
            </mp-flex>
          </mp-tab-panel>
          <!-- End of Need Approval Tabs Content -->
        </mp-tab-panels>
      </mp-tabs>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpAvatar,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpBox,
  MpButton,
  MpButtonIcon,
  MpFlex,
  MpBadge,
  MpSelect,
  MpIcon,
  MpText,
  MpTabs,
  MpTabList,
  MpTab,
  MpTabPanels,
  MpTabPanel,
  MpTooltip,
} from "@mekari/pixel";

export default {
  name: "Notification",
  components: {
    MpAvatar,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpBox,
    MpButton,
    MpButtonIcon,
    MpFlex,
    MpBadge,
    MpSelect,
    MpIcon,
    MpText,
    MpTabs,
    MpTabList,
    MpTab,
    MpTabPanels,
    MpTabPanel,
    MpTooltip,
  },
  data() {
    return {
      isHeaderSticky: false,
      tabIndex: 0,
      generalFilter: "All notifications",
      generalFilterData: [
        "All notifications",
        "Reminder",
        "Mention",
        "Assignment",
        "Complete",
        "Download",
        "Upload",
      ],
      generalData: [
        {
          date: "Today",
          data: [
            {
              title: "<b>Data Company</b> is successfully downloaded.",
              date: "1 hour ago",
              icon: "download",
              type: "Download",
              isNew: true,
              hasMenu: false,
            },
            {
              title:
                "<b>Rizal Chandra</b> set a task to be due on <b>12 April 2022 at 11:11 (GMT+7)</b>.",
              date: "2 hours ago",
              icon: "overtime",
              type: "Reminder",
              isNew: true,
              hasMenu: false,
            },
          ],
        },
        {
          date: "Yesterday",
          data: [
            {
              title: "<b>Data Company</b> is successfully uploaded.",
              date: "4 February 2021 at 16:00 (GMT+7)",
              icon: "upload",
              type: "Upload",
              isNew: false,
              hasMenu: false,
            },
          ],
        },
        {
          date: "Older",
          data: [
            {
              title:
                "<b>Christin Purnama Sari</b> mentioned you on <b>Deals: MHJ Reports Enhancement.</b>.",
              date: "8 April 2021 at 16:00 (GMT+7)",
              icon: "comment",
              type: "Mention",
              isNew: false,
              hasMenu: false,
            },
            {
              title:
                "<b>Rizal Chandra</b> assigned you for <b>Deals: Ajinomoto basic package</b>.",
              date: "8 April 2021 at 16:00 (GMT+7)",
              icon: "task-todo",
              type: "Assigment",
              isNew: false,
              hasMenu: false,
            },
            {
              title: "<b>Rizal Chandra</b> completed <b>Data Company</b>.",
              date: "8 April 2021 at 16:00 (GMT+7)",
              icon: "upload",
              type: "Upload",
              isNew: false,
              hasMenu: false,
            },
            {
              title:
                "<b>Rizal Chandra</b> assigned you for <b>Deals: Ajinomoto basic package</b>.",
              date: "8 April 2021 at 16:00 (GMT+7)",
              icon: "task-todo",
              type: "Assigment",
              isNew: false,
              hasMenu: false,
            },
            {
              title:
                "<b>Christin Purnama Sari</b> mentioned you on <b>Deals: MHJ Reports Enhancement</b>.",
              date: "8 April 2021 at 16:00 (GMT+7)",
              icon: "comment",
              type: "Mention",
              isNew: false,
              hasMenu: false,
            },
            {
              title:
                "<b>Christin Purnama Sari</b> mentioned you on <b>Deals: MHJ Reports Enhancement</b>.",
              date: "9 April 2021 at 16:00 (GMT+7)",
              icon: "comment",
              type: "Mention",
              isNew: false,
              hasMenu: false,
            },
          ],
        },
      ],
      needApprovalFilter: "All approval",
      needApprovalFilterData: ["All approval", "Deals", "Expenses"],
      needApprovalData: [
        {
          date: "Today",
          data: [
            {
              title:
                "<b>Christin Purnama Sari</b> has requested to move deals <b>Ajinomoto basic package</b> from Qualified to In progress.",
              date: "1 hour ago",
              avatar: "https://i.pravatar.cc/300?img=47",
              link: "https://mekari.com",
              type: "Expenses",
              isNew: true,
              hasMenu: true,
            },
            {
              title:
                "<b>Rizal Chandra</b> has requested to update expense </b>27 May 2022</b> amount from IDR 600.000 to IDR 800.000.",
              date: "1 hour ago",
              avatar: "https://i.pravatar.cc/300?img=12",
              link: "https://mekari.com",
              type: "Expenses",
              isNew: false,
              hasMenu: true,
            },
            {
              title:
                "<b>Rizal Chandra</b> has requested to add Deals <b>Pintap enterprise package</b> in stage New.",
              date: "1 hour ago",
              avatar: "https://i.pravatar.cc/300?img=12",
              link: "https://mekari.com",
              type: "Expenses",
              isNew: false,
              hasMenu: true,
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.handleSticky();
  },
  methods: {
    handleChangTab(index) {
      this.tabIndex = index;
    },
    showAlert(message) {
      alert(message);
    },
    handleSticky() {
      const el = this.$refs.notificationTitle.$el;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting === false) {
            this.isHeaderSticky = true;
          } else {
            this.isHeaderSticky = false;
          }
        },
        { threshold: [0] }
      );

      observer.observe(el);
    },
  },
};
</script>

<style>
/* custom scroll bar */
.popover-content::-webkit-scrollbar {
  width: 0px;
}
.popover-content::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
}
.popover-content:hover::-webkit-scrollbar {
  width: 5px;
}
.popover-content:hover::-webkit-scrollbar-thumb {
  background: var(--colors-gray-400);
}
</style>
