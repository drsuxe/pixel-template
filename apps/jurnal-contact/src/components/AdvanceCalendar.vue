<template>
  <mp-box>
    <mp-box @mouseover="isOutside = false" @mouseleave="isOutside = true">
      <mp-popover id="advanced-datepicker" :is-open="isPopoverOpen" is-manual initial-focus-ref="#input-advanced-calendar">
        <mp-popover-trigger>
          <mp-input-group>
            <mp-input
              id="input-advanced-calendar"
              placeholder="Select date"
              :value="getFormattedValue"
              is-read-only
              @focus="handleFocus"
              @blur="handleClickOutside"
            />
            <mp-input-right-addon :with-background="false">
              <mp-icon name="calendar" size="sm" @click.native="handleFocus" />
            </mp-input-right-addon>
          </mp-input-group>
        </mp-popover-trigger>

        <mp-popover-content
          max-width="412px"
          bg="white"
          rounded="md"
          shadow="lg"
          border-width="1px"
          border-color="gray.400"
          @click.native="handleForceInputFocus"
        >
          <mp-flex justify-content="space-between" position="relative">
            <mp-box v-if="!isShowDatePicker" width="412px">
              <mp-popover-list>
                <mp-popover-list-item is-disabled>
                  <mp-text>TIME RANGE</mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item :is-active="selectionTimeRange === 'Today'" @click="handleSelectTimeRange('Today')">
                  <mp-text>Today</mp-text>
                  <mp-text> {{ formatDate(new Date()) }} </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item :is-active="selectionTimeRange === 'Last 7 days'" @click="handleSelectTimeRange('Last 7 days')">
                  <mp-text> Last 7 Days </mp-text>
                  <mp-text> {{ formatDate(getDate(-7)) }} - {{ formatDate(new Date()) }} </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item :is-active="selectionTimeRange === 'Last 30 days'" @click="handleSelectTimeRange('Last 30 days')">
                  <mp-text> Last 30 Days </mp-text>
                  <mp-text> {{ formatDate(getDate(-30)) }} - {{ formatDate(new Date()) }} </mp-text>
                </mp-popover-list-item>
              </mp-popover-list>
              <mp-box px="2" mt="-1" mb="-2">
                <mp-divider />
              </mp-box>
              <mp-popover-list>
                <mp-popover-list-item :is-active="selectionTimeRange === 'Per day'" @click="handleSelectTimeRange('Per day')"> Per day </mp-popover-list-item>
                <mp-popover-list-item :is-active="selectionTimeRange === 'Per week'" @click="handleSelectTimeRange('Per week')">
                  Per week
                </mp-popover-list-item>
                <mp-popover-list-item :is-active="selectionTimeRange === 'Per month'" @click="handleSelectTimeRange('Per month')">
                  Per month
                </mp-popover-list-item>
                <mp-popover-list-item :is-active="selectionTimeRange === 'Per year'" @click="handleSelectTimeRange('Per year')">
                  Per year
                </mp-popover-list-item>
                <mp-popover-list-item :is-active="selectionTimeRange === 'Custom'" @click="handleSelectTimeRange('Custom')"> Custom </mp-popover-list-item>
              </mp-popover-list>
            </mp-box>

            <mp-box v-else p="3" width="full">
              <mp-date-picker
                :key="selectionTimeRange"
                v-model="value"
                inline
                :events="[]"
                :type="datePickerType"
                :range="isRangeDatePicker"
                @change="handleChangeDate"
                @drag="handleDragDateRange"
              >
                <template #sidebar>
                  <mp-box width="122px" ml="-3" mt="-3">
                    <mp-popover-list>
                      <mp-popover-list-item is-disabled>
                        <mp-text>TIME RANGE</mp-text>
                      </mp-popover-list-item>
                      <mp-popover-list-item :is-active="selectionTimeRange === 'Today'" @click="handleSelectTimeRange('Today')">
                        <mp-text>Today</mp-text>
                      </mp-popover-list-item>
                      <mp-popover-list-item :is-active="selectionTimeRange === 'Last 7 days'" @click="handleSelectTimeRange('Last 7 days')">
                        <mp-text> Last 7 Days </mp-text>
                      </mp-popover-list-item>
                      <mp-popover-list-item :is-active="selectionTimeRange === 'Last 30 days'" @click="handleSelectTimeRange('Last 30 days')">
                        <mp-text> Last 30 Days </mp-text>
                      </mp-popover-list-item>
                    </mp-popover-list>
                    <mp-box px="2" mt="-1" mb="-2">
                      <mp-divider />
                    </mp-box>
                    <mp-popover-list>
                      <mp-popover-list-item :is-active="selectionTimeRange === 'Per day'" @click="handleSelectTimeRange('Per day')">
                        Per day
                      </mp-popover-list-item>
                      <mp-popover-list-item :is-active="selectionTimeRange === 'Per week'" @click="handleSelectTimeRange('Per week')">
                        Per week
                      </mp-popover-list-item>
                      <mp-popover-list-item :is-active="selectionTimeRange === 'Per month'" @click="handleSelectTimeRange('Per month')">
                        Per month
                      </mp-popover-list-item>
                      <mp-popover-list-item :is-active="selectionTimeRange === 'Per year'" @click="handleSelectTimeRange('Per year')">
                        Per year
                      </mp-popover-list-item>
                      <mp-popover-list-item :is-active="selectionTimeRange === 'Custom'" @click="handleSelectTimeRange('Custom')">
                        Custom
                      </mp-popover-list-item>
                    </mp-popover-list>
                  </mp-box>
                </template>
              </mp-date-picker>
            </mp-box>

            <mp-box v-if="isShowDatePicker && getSelectionInformation" position="absolute" bottom="3" right="3">
              <mp-text color="gray.600" font-size="sm">
                {{ getSelectionInformation }}
              </mp-text>
            </mp-box>
          </mp-flex>
        </mp-popover-content>
      </mp-popover>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpInputGroup,
  MpInput,
  MpInputRightAddon,
  MpIcon,
  MpDatePicker,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpDivider,
} from "@mekari/pixel";

const initialState = {
  activeTimeRange: "Today",
  value: new Date("2022/12/22"),
};

export default {
  name: "AdvancedCalendar",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpInputGroup,
    MpInput,
    MpInputRightAddon,
    MpIcon,
    MpDatePicker,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpDivider,
  },
  data: function () {
    return {
      // Popover
      isPopoverOpen: false,
      isFocused: false,
      isOutside: true,
      activeTimeRange: initialState.activeTimeRange,
      selectionTimeRange: "",
      selectionValue: "",

      // Date Picker
      datePickerType: "",
      value: initialState.value,
    };
  },
  computed: {
    getFormattedValue() {
      if (this.value) {
        if (this.activeTimeRange === "Today") {
          return `Today (${this.formatDate(this.value)})`;
        }

        if (this.activeTimeRange === "Last 7 days") {
          const from = this.value[0];
          const to = this.value[1];

          return `Last 7 days (${this.formatDate(from)} - ${this.formatDate(to)})`;
        }

        if (this.activeTimeRange === "Last 30 days") {
          const from = this.value[0];
          const to = this.value[1];

          return `Last 30 days (${this.formatDate(from)} - ${this.formatDate(to)})`;
        }

        if (this.activeTimeRange === "Per day") return `Per day (${this.formatDate(this.value)})`;

        if (this.activeTimeRange === "Per week") {
          const getDateRange = this.getWeekDates(this.getWeekNumber(this.value), this.value.getFullYear());
          const from = getDateRange[0];
          const to = getDateRange[1];

          return `Per week (${this.formatDate(from)} - ${this.formatDate(to)})`;
        }

        if (this.activeTimeRange === "Per month") {
          const from = this.value;
          const to = this.getLastDateInMonth(this.value);

          return `Per month (${this.formatDate(from)} - ${this.formatDate(this.getLastDateInMonth(to))})`;
        }

        if (this.activeTimeRange === "Per year") {
          const from = this.value;
          const to = new Date(`${this.value.getFullYear()}-12-31`);

          return `Per year (${this.formatDate(from)} - ${this.formatDate(to)})`;
        }

        if (this.activeTimeRange === "Custom") {
          const from = this.value[0];
          const to = this.value[1];

          return `Custom (${this.formatDate(from)} - ${this.formatDate(to)})`;
        }
      }

      return "";
    },
    getSelectionInformation() {
      if (this.selectionValue) {
        if (this.selectionTimeRange === "Per day") {
          return this.formatDate(this.selectionValue, false);
        }

        if (this.selectionTimeRange === "Per week") {
          const getDateRange = this.getWeekDates(this.getWeekNumber(this.selectionValue), this.selectionValue.getFullYear());
          const from = getDateRange[0];
          const to = getDateRange[1];

          return `${this.formatDate(from, false)} - ${this.formatDate(to, false)}`;
        }

        if (this.selectionTimeRange === "Per month") {
          return this.getMonthName(this.selectionValue.getMonth());
        }

        if (this.selectionTimeRange === "Per year") return this.selectionValue.getFullYear();

        if (this.selectionTimeRange === "Custom") {
          const from = new Date(this.selectionValue[0]);
          const to = new Date(this.selectionValue[1]);

          if (!this.isValidDate(to)) {
            return `${this.formatDate(from, false)} - Select destination date`;
          }

          return `${this.formatDate(from, false)} - ${this.formatDate(to, false)}`;
        }
      } else {
        if (this.selectionTimeRange === "Per day") return "Select a date";
        if (this.selectionTimeRange === "Per week") return "Select a week";
        if (this.selectionTimeRange === "Per month") return "Select a month";
        if (this.selectionTimeRange === "Per year") return "Select a year";
        if (this.selectionTimeRange === "Custom") return "Select a date";
        return "";
      }

      return "";
    },
    isShowDatePicker() {
      const datepickerTypes = ["Per day", "Per week", "Per month", "Per year", "Custom"];
      if (datepickerTypes.includes(this.selectionTimeRange)) return true;

      return false;
    },
    isRangeDatePicker() {
      if (this.selectionTimeRange === "Custom") return true;

      return false;
    },
  },
  watch: {
    selectionTimeRange(newValue) {
      if (this.activeTimeRange !== newValue) {
        this.selectionValue = "";
      } else {
        this.selectionValue = this.value;
      }
    },
  },
  methods: {
    // Popover
    handleFocus(e) {
      console.log(e);
      this.isFocused = true;
      if (!this.isPopoverOpen) this.handleOpenPopover();
      if (this.isPopoverOpen) this.handleForceInputFocus();
    },
    handleForceInputFocus() {
      if (this.isFocused) {
        const input = document.getElementById("input-advanced-calendar");
        input.focus();
      }
    },
    handleOpenPopover() {
      this.isPopoverOpen = true;

      this.selectionTimeRange = this.activeTimeRange;
      this.selectionValue = this.value;
    },
    handleClosePopover() {
      this.isFocused = false;
      this.isPopoverOpen = false;

      this.selectionValue = "";
    },
    handleClickOutside() {
      if (this.isOutside) {
        this.handleClosePopover();
        this.isOutside = false;
      }
    },

    // Advanced Calendar
    handleSelectTimeRange(timeRange) {
      this.selectionTimeRange = timeRange;

      // Shortcut
      if (this.selectionTimeRange === "Today") this.handleSelectShortcut(0);
      if (this.selectionTimeRange === "Last 7 days") this.handleSelectShortcut(-7);
      if (this.selectionTimeRange === "Last 30 days") this.handleSelectShortcut(-30);

      // Date Picker
      if (this.selectionTimeRange === "Per day") this.datePickerType = "date";
      if (this.selectionTimeRange === "Per week") this.datePickerType = "week";
      if (this.selectionTimeRange === "Per month") this.datePickerType = "month";
      if (this.selectionTimeRange === "Per year") this.datePickerType = "year";
      if (this.selectionTimeRange === "Custom") this.datePickerType = "";
    },
    handleSelectShortcut(value) {
      if (value === 0) {
        this.value = new Date();
      }

      if (value !== 0) {
        this.value = [this.getDate(value), new Date()];
      }

      this.handleChangeDate(this.value);
    },
    handleChangeDate(e) {
      console.log("CHANGE :", e);
      this.activeTimeRange = this.selectionTimeRange;

      this.handleClosePopover();
    },
    handleDragDateRange(e) {
      console.log("RANGE :", e);
      this.selectionValue = e;
    },

    // Utils
    formatDate(date, isShortMonth = true) {
      const toDate = new Date(date);

      const day = toDate.getDate();
      const month = this.getMonthName(toDate.getMonth(), isShortMonth);
      const year = toDate.getFullYear();

      return `${day} ${month} ${year}`;
    },
    getDate(value) {
      var date = new Date();

      if (value < 0) date.setDate(date.getDate() - Math.abs(value));
      else date.setDate(date.getDate() + value);

      return date;
    },
    getMonthName(index, isShort) {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      if (isShort) return months[index].slice(0, 3);
      return months[index];
    },
    getLastDateInMonth(value) {
      const selected = new Date(value);
      const lastDay = new Date(selected.getFullYear(), selected.getMonth() + 1, 0).getDate();
      const lastDate = new Date(`${selected.getFullYear()}-${selected.getMonth() + 1}-${lastDay}`);

      return lastDate;
    },
    isValidDate(date) {
      return date instanceof Date && !isNaN(date);
    },
    getWeekNumber(date) {
      const selectedDate = new Date(date);
      const startDateOfYear = new Date(selectedDate.getFullYear(), 0, 1);
      const days = Math.floor((selectedDate - startDateOfYear) / (24 * 60 * 60 * 1000));
      const weekNumber = Math.ceil(days / 7) + 1;

      return weekNumber;
    },
    getWeekDates(weekNum, year) {
      const endDate = new Date(year, 0, 1 + (weekNum - 1) * 7);
      const startDate = new Date(endDate);
      startDate.setDate(endDate.getDate() - 6);

      return [startDate, endDate];
    },
  },
};
</script>
