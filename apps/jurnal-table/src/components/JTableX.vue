<template>
  <mp-box v-bind="$attrs">
    <slot />
    <mp-table-container :max-h="table_max_height" :min-h="table_min_height" overflow="auto">
      <mp-table :is-hoverable="false" :border-width="bordered ? '1px' : 'none'" :border-color="bordered ? '#e2e2e2' : ''" :border-radius="bordered ? 'sm' : ''">
        <mp-table-head pos="sticky" top="0">
          <mp-table-row :bg="heads[0].bg || 'white'" :_group-hover="{ bg: heads[0].bg || 'white' }">
            <mp-table-cell v-if="checkbox" text-align="center" as="th" scope="col">
              <mp-checkbox v-model="check_all" :is-indeterminate="is_indeterminate" mb="0" />
            </mp-table-cell>
            <mp-table-cell v-if="selected.length > 0" as="th" scope="col" :colspan="heads.length">
              <mp-flex gap="2">
                <mp-text>{{ selected.length }} {{ title }} {{ $t("selected") }}</mp-text>
                <m-button v-if="bulk_print_api" size="sm" v-b-modal.modal_print_pdf_transaction>
                  {{ $t("btn.print_pdf") }}
                </m-button>
                <m-button v-if="bulk_delete_api" theme="secondary" v-b-modal.modal_delete size="sm" :disabled="mw_migration_running">
                  {{ $t("btn.delete") }}
                </m-button>
                <m-button v-if="bulk_unarchive_api" theme="secondary" size="sm" :disabled="mw_migration_running" @click="on_reuse">
                  {{ $t("btn.reuse_tag") }}
                </m-button>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell
              v-else
              v-for="head in heads"
              :key="head.key"
              as="th"
              scope="col"
              :w="head.width"
              :text-align="head.align"
              :_group-hover="{ cursor: Boolean(head.sort) ? 'pointer' : 'default' }"
              :style="{ cursor: Boolean(head.sort) ? 'pointer' : 'default' }"
              @click.native="sorting(head)"
            >
              <mp-flex :text-align="head.align" align-items="center" gap="2" :justify-content="head.align == 'right' ? 'end' : 'start'">
                <mp-text>{{ head.title }}</mp-text>
                <mp-flex v-if="Boolean(head.sort)" flex-direction="column" h="25px" align-items="center" justify-content="center">
                  <mp-icon name="caret-up" :color="head.sort.order == 'asc' ? 'blue.500' : 'blackAlpha.400'" margin="0" viewBox="0 0 24 5" />
                  <mp-icon name="caret-down" :color="head.sort.order == 'desc' ? 'blue.500' : 'blackAlpha.400'" margin="0" viewBox="0 5 24 24" />
                </mp-flex>
                <mp-tooltip v-if="head.tooltip" position="top" :label="head.tooltip">
                  <mp-icon name="info" />
                </mp-tooltip>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body bg="white">
          <mp-table-row v-if="loading">
            <mp-table-cell as="td" scope="row" align="center" :colspan="heads.length + 1">
              <mp-flex h="300" gap="2" flex-direction="column" align-items="center" justify-content="center">
                <mp-spinner />
                <mp-text>Loading data...</mp-text>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row v-else-if="items.length === 0">
            <mp-table-cell as="td" align="center" :colspan="heads.length + 1">
              <mp-flex v-if="new_no_data" justify-content="center" align-items="center">
                <img src="../../assets/icon/no_data.svg" alt="no data image" height="180" />
                <mp-flex flex-direction="column">
                  <mp-heading as="h4" :textTransform="empty_icon ? 'none' : ''" font-size="md">
                    {{ empty_text || $t("default_empty_text") }}
                  </mp-heading>
                  <mp-text v-if="empty_text_secondary" mt="1" color="blackAlpha.700" :textTransform="empty_icon ? 'none' : ''">
                    {{ empty_text_secondary }}
                  </mp-text>
                  <mp-text v-else mt="1" color="blackAlpha.700" :textTransform="empty_icon ? 'none' : ''">
                    {{ $t("second_empty_text") }}
                  </mp-text>
                  <a v-if="empty_button_link" :href="empty_button_link">
                    <mp-button left-icon="add" my="5" bg="blue.500">
                      {{ empty_button_text || $t("btn_new") }}
                    </mp-button>
                  </a>
                </mp-flex>
              </mp-flex>
              <mp-flex v-else justify-content="center" align-items="center" flex-direction="column">
                <j-icon v-if="!empty_icon" name="jurnal-web" blank class="mt-3" />
                <template v-else>
                  <blankstate-icon v-if="empty_icon === 'blank'" />
                  <not-found v-else />
                </template>
                <mp-heading as="h4" :textTransform="empty_icon ? 'none' : ''" font-size="md" mt="4">
                  {{ empty_text || $t("default_empty_text") }}
                </mp-heading>
                <mp-text v-if="empty_text_secondary" mt="1" color="blackAlpha.700" :textTransform="empty_icon ? 'none' : ''">
                  {{ empty_text_secondary }}
                </mp-text>
                <mp-text v-else mt="1" color="blackAlpha.700" :textTransform="empty_icon ? 'none' : ''">
                  {{ $t("second_empty_text") }}
                </mp-text>
                <a v-if="empty_button_link" :href="empty_button_link">
                  <mp-button left-icon="add" my="5" bg="blue.500">
                    {{ empty_button_text || $t("btn_new") }}
                  </mp-button>
                </a>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row v-else v-for="(item, index) in items" :key="index">
            <mp-table-cell v-if="checkbox" as="td" text-align="center" scope="row" :_group-hover="{ cursor: 'default' }">
              <mp-checkbox
                v-if="!item.checkbox || !item.checkbox.disabled"
                mb="0"
                @change="handle_check($event, item)"
                :value="selected.map((s) => s.id).includes(item.id)"
                :is-checked="selected.map((s) => s.id).includes(item.id)"
              />
            </mp-table-cell>
            <mp-table-cell
              v-for="(head, idx) in heads"
              :key="head.key"
              as="td"
              scope="row"
              :text-align="head.align"
              :vertical-align="head.v_align || 'top'"
              :_group-hover="{ cursor: 'default' }"
            >
              <mp-flex v-if="head.action" justify-content="end" gap="2">
                <template v-for="(action, idx) in item[head.key]">
                  <m-button-with-badge-wrapper v-if="action.badge" :key="idx" class="mr-2">
                    <m-button
                      :id="'btn_action_' + action.type + index"
                      :icon-variant="action.icon"
                      variant="icon-center"
                      theme="white"
                      @click="
                        handle_action({
                          type: action.type,
                          comment_api: item.comments_link,
                          approve_api: item.approve_link,
                          no: item.transaction_no.title,
                        })
                      "
                      :disabled="btn_action_loading"
                      :style="{ display: should_show_approve_button(action.type) }"
                      @mouseover="action.type === 'approval_log' ? showApprovalLog({ type: action.type, transaction_id: item.transaction_id }) : ''"
                      @mouseleave="action.type === 'approval_log' ? closeApprovalLog() : ''"
                    />
                    <j-tooltip-approval-log
                      v-if="action.type == 'approval_log'"
                      align="left"
                      style="top: 30px"
                      :loading="loading_approval_log"
                      :approval_logs="approval_logs"
                      :approval_current_step="approval_current_step"
                      v-show="show_approval_log === true && transaction_id === item.transaction_id"
                    />
                    <m-badge v-if="action.type != 'approval_log'" variant="primary" rounded>
                      {{ comments_counter(item.comments_size) }}
                    </m-badge>
                  </m-button-with-badge-wrapper>
                  <m-button
                    v-else-if="rule_based_sales_active && item.user_can_approve && action.type === 'approve_rule_based'"
                    :key="idx"
                    :id="'btn_action_' + action.type + index"
                    :theme="action.variant"
                    :icon-variant="action.icon"
                    :variant="action.icon ? 'icon-only' : 'default'"
                    @click="
                      handle_action({
                        type: action.type,
                        comment_api: item.comments_link,
                        approve_api: item.approve_rule_based_link,
                        no: item.transaction_no.title,
                      })
                    "
                    :disabled="btn_action_loading"
                    :style="{ display: should_show_approve_button(action.type) }"
                  >
                    {{ action.label }}
                  </m-button>
                  <m-button
                    v-else-if="!rule_based_sales_active && action.type === 'approve'"
                    :key="idx"
                    :id="'btn_action_' + action.type + index"
                    :theme="action.variant"
                    :icon-variant="action.icon"
                    :variant="action.icon ? 'icon-only' : 'default'"
                    @click="
                      handle_action({
                        type: action.type,
                        comment_api: item.comments_link,
                        approve_api: item.approve_link,
                        no: item.transaction_no.title,
                      })
                    "
                    :disabled="btn_action_loading"
                    :style="{ display: should_show_approve_button(action.type) }"
                  >
                    {{ action.label }}
                  </m-button>
                </template>
              </mp-flex>
              <m-dropdown v-else-if="head.key === 'action_dropdown'" placement="bottom-end" trigger-variant="icon-only" trigger-icon-variant="kebab">
                <m-dropdown-item v-for="action in item[head.key]" :key="action.emit" @click="$emit(action.emit, item)">
                  {{ action.text }}
                </m-dropdown-item>
              </m-dropdown>
              <j-show-hide-tags-v3 v-else-if="head.tag" :tags="item[head.key]" />
              <mp-box v-else-if="item[head.key] && item[head.key].title">
                <!-- <mp-grid v-else-if="item[head.key] && item[head.key].title" grid-template-columns="1fr 50px"> -->
                <mp-flex justify-content="space-between">
                  <mp-flex max-w="fit-content" flex-direction="column">
                    <m-tooltip
                      v-if="item[head.key].tooltip"
                      trigger="hover"
                      placement="top"
                      :target="`${head.key}${index}${idx}`"
                      :content="item[head.key].tooltip"
                    />

                    <mp-text v-if="item[head.key].link" :id="`${head.key}${index}${idx}`" as="a" is-link :href="item[head.key].link">
                      {{ item[head.key].title }}
                    </mp-text>
                    <!-- <mp-badge
                  v-else-if="Boolean(item[head.key].badge)"
                  :id="`${head.key}${index}${idx}`"
                  :variant-color="item[head.key].badge_color"
                  text-transform="capitalize"
                >
                  {{ item[head.key].title }}
                </mp-badge> -->
                    <m-badge
                      v-else-if="Boolean(item[head.key].badge)"
                      :id="`${head.key}${index}${idx}`"
                      :variant="item[head.key].badge"
                      :label="item[head.key].title"
                    />
                    <mp-text v-else :id="`${head.key}${index}${idx}`">
                      {{ item[head.key].title }}
                    </mp-text>

                    <mp-text v-if="item[head.key].sub_title" as="small">
                      <template v-if="item[head.key].sub_title.title && item[head.key].sub_title.link">
                        <a :href="item[head.key].sub_title.link" class="small text-muted">
                          {{ item[head.key].sub_title.title }}
                        </a>
                      </template>
                      <template v-else-if="item[head.key].sub_title.title">
                        {{ item[head.key].sub_title.title }}
                      </template>
                    </mp-text>
                  </mp-flex>
                  <mp-flex v-if="item[head.key].with_icon" gap="3">
                    <template v-for="ic in ['ic1', 'ic2']">
                      <template v-if="item[head.key][ic]">
                        <a v-if="item[head.key][ic].url" :key="ic" :href="item[head.key][ic].url">
                          <mp-tooltip :label="item[head.key][ic].tooltip">
                            <m-icon :id="`${item[head.key][ic].name}${head.key}${index}${idx}`" size="small" :variant="item[head.key][ic].name" />
                          </mp-tooltip>
                        </a>
                        <mp-tooltip v-else :key="ic" :label="item[head.key][ic].tooltip">
                          <m-icon :id="`${item[head.key][ic].name}${head.key}${index}${idx}`" size="small" :variant="item[head.key][ic].name" />
                        </mp-tooltip>
                      </template>
                    </template>
                  </mp-flex>
                </mp-flex>
                <j-show-more-text-v3 v-if="item[head.key].memo" :text="item[head.key].memo" />
              </mp-box>
              <mp-text v-else-if="head.percent">
                {{ item[head.key] | percent }}
              </mp-text>
              <template v-else-if="item[head.key] && item[head.key].slots">
                <slot :name="item[head.key].slotname" :value="item[head.key]" :item="item" :index="index" />
              </template>
              <j-show-more-text-v3 v-else-if="head.toggle" :text="item[head.key]" :text_min_size="13" />
              <mp-text v-else-if="!item[head.key] || item[head.key].length === 0" color="gray">-</mp-text>
              <template v-else>
                <mp-box
                  v-if="head.ellipsis"
                  :title="item[head.key].text || item[head.key]"
                  w="330px"
                  overflow="hidden"
                  text-overflow="ellipsis"
                  white-space="nowrap"
                >
                  <a v-if="item[head.key].link" :href="item[head.key].link">
                    {{ item[head.key].text }}
                  </a>
                  <mp-text v-else>
                    {{ item[head.key] }}
                  </mp-text>
                </mp-box>
                <mp-text v-else>
                  {{ item[head.key] }}
                </mp-text>
              </template>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>
  </mp-box>
</template>

<script>
//   import BlankstateIcon from '../../assets/svg/blankstate-icon.vue'
//   import NotFound from '../../assets/svg/NotFound.vue'
export default {
  props: {
    title: String,
    new_no_data: Boolean,
    no_pagination: Boolean,
    loading: Boolean,
    page: Number,
    per_page: Number,
    total_data: Number,
    bulk_delete_api: String,
    bulk_print_api: String,
    bulk_unarchive_api: String,
    mw_migration_running: Boolean,
    heads: {
      type: Array,
      required: true,
    },
    feet: {
      type: Object,
      required: false,
    },
    items: {
      type: Array,
      required: true,
    },
    delete_message: String,
    delete_summary_message: String,
    empty_text: String,
    empty_text_secondary: String,
    empty_button_text: String,
    empty_button_link: String,
    max_height: String,
    empty_button_theme: {
      type: String,
      default: "primary",
    },
    empty_icon: {
      type: String,
      required: false,
      default: null,
    },
    can_approve: Boolean,
    rule_based_sales_active: Boolean,
    static_pagination: {
      type: Boolean,
      required: false,
      default: false,
    },
    bordered: Boolean,
  },
  data() {
    return {
      modal_reuse_tag: {
        title: "",
        loading: true,
        reuse_count: 0,
        percentage: 0,
        not_reused: [],
        success_reused: [],
      },
      show_approval_log: false,
      curr_page: this.page,
      page_size: this.per_page,
      transaction_id: 0,
      total_page: 0,
      options: [5, 10, 25, 50, 100],
      check_all: false,
      selected: [],
      more_tags: false,
      comment_transaction_no: "",
      comment_api: "",
      btn_action_loading: false,
      approval_logs: [],
      approval_current_step: 0,
      loading_approval_log: false,
      min_height: "400px",
    };
  },
  computed: {
    is_indeterminate() {
      return this.selected.length > 0 && this.selected.length < this.eligible_items.length;
    },
    items_not_empty() {
      return this.items.length > 0;
    },
    checkbox() {
      return (
        this.items_not_empty &&
        (Boolean(this.bulk_delete_api) || Boolean(this.bulk_print_api) || Boolean(this.bulk_unarchive_api)) &&
        this.eligible_items.length > 0
      );
    },
    eligible_items() {
      return this.items.filter((item) => !item.checkbox || !item.checkbox.disabled);
    },
    table_max_height() {
      if (!this.max_height) return;

      return this.items.length > 7 ? this.max_height : "inherit";
    },
    table_min_height() {
      if (this.table_max_height == "inherit") return;
      return this.max_height == this.min_height ? "auto" : this.min_height;
    },
  },
  watch: {
    check_all(check) {
      if (check) {
        this.selected = this.eligible_items;
      } else if (this.selected.length === this.eligible_items.length) {
        this.selected = [];
      }
    },
    curr_page(val) {
      this.$emit("change_page", val);
    },
    page_size(val) {
      this.$emit("change_per_page", val);
      this.curr_page = 1;
    },
    items(new_val, old_val) {
      this.count_total_page();
      if (new_val !== old_val) {
        this.selected = [];
        this.check_all = false;
      }
    },
    selected(val) {
      if (val.length === this.eligible_items.length) {
        this.check_all = true;
      } else {
        this.check_all = false;
      }
    },
  },
  methods: {
    on_hide_reuse_modal() {
      this.$emit("refetch");
      this.modal_reuse_tag = {
        title: "",
        loading: true,
        reuse_count: 0,
        percentage: 0,
        not_reused: [],
        success_reused: [],
      };
    },
    cancel_reuse() {
      if (this.modal_reuse_tag.loading) {
        this.modal_reuse_tag.loading = false;
      } else {
        this.$bvModal.hide("modal_unarchive");
      }
    },
    sorting(head) {
      if (head.sort) {
        this.$emit("sorting", head);
      }
    },
    handle_check(checked, item) {
      // checked = checked.target.checked
      if (checked) {
        this.selected.push(item);
      } else {
        this.selected = this.selected.filter((s) => s.id !== item.id);
      }
    },
    should_show_approve_button(action_type) {
      if ((action_type === "approve" || action_type === "approve_rule_based") && !this.can_approve) {
        return "none !important";
      } else {
        return "inherit";
      }
    },
    on_deleted(not_deleted) {
      this.selected = not_deleted;
      this.check_all = false;
      this.$emit("refetch", "delete");
    },
    show_approval_button() {
      if (this.approval_current_step === -1) {
        return false;
      }

      if (this.current_user.is_owner) {
        return true;
      }
      const approver_ids = this.approval_logs[this.approval_current_step - 1].current_approver_ids;
      return approver_ids.includes(this.current_user.id);
    },
    handle_show_more_tag() {
      this.more_tags = !this.more_tags;
    },
    comments_counter(count) {
      if (!parseInt(count)) {
        return "0";
      } else if (parseInt(count) > 99) {
        return "99+";
      } else {
        return parseInt(count);
      }
    },
    handle_action(args) {
      if (args.type === "comment") {
        this.comment_api = args.comment_api;
        this.comment_transaction_no = args.no;
        this.$nextTick(() => this.$bvModal.show("modal_comment_approval"));
      } else if (args.type === "approve") {
        this.btn_action_loading = true;
        try {
          this.$axios.patch(args.approve_api).then(() => {
            setTimeout(() => {
              this.$emit("refetch");
              this.btn_action_loading = false;
            }, 800);
          });
        } catch (e) {
          console.error(e);
          this.btn_action_loading = false;
        }
      } else if (args.type === "approve_rule_based") {
        this.btn_action_loading = true;
        try {
          this.$axios.patch(args.approve_api).then(() => {
            setTimeout(() => {
              this.$emit("refetch");
              this.btn_action_loading = false;
            }, 800);
          });
        } catch (e) {
          console.error(e);
          this.btn_action_loading = false;
        }
      }
    },
    async handle_delete() {
      const errors = [];
      let success = false;
      for (let i = 0; i < this.selected.length; i++) {
        const id = this.selected[i].id;
        try {
          await this.$axios.delete(`${this.bulk_delete_api}/${id}`);
          success = true;
        } catch (e) {
          errors.push(id);
          console.error("e", e.response);
        }
      }
      if (success) {
        this.selected = [];
        this.check_all = false;
        this.$emit("refetch");
      }
    },
    async on_reuse() {
      this.$bvModal.show("modal_unarchive");
      this.modal_reuse_tag.title = this.$t("modal_reuse_tag.title", {
        count: this.selected.length,
      });
      this.modal_reuse_tag.not_reused = [];
      this.modal_reuse_tag.success_reused = [];
      for (let i = 0; i < this.selected.length; i++) {
        const tag = this.selected[i];
        const api = this.bulk_unarchive_api.replace(":id", tag.id);
        if (!this.modal_reuse_tag.loading) {
          this.modal_reuse_tag.not_reused.push(tag);
        } else {
          try {
            await this.$axios.patch(api);
            this.modal_reuse_tag.success_reused.push(tag);
          } catch (e) {
            this.modal_reuse_tag.not_reused.push({ ...tag, e });
          }
        }

        this.modal_reuse_tag.reuse_count += 1;
        this.modal_reuse_tag.percentage = Math.ceil((this.modal_reuse_tag.reuse_count / this.selected.length) * 100);
      }

      this.modal_reuse_tag.loading = false;
      this.modal_reuse_tag.title = this.$t("modal_reuse_tag.title_result");
    },
    async showApprovalLog(args) {
      this.show_approval_log = true;
      if (this.approval_logs.length == 0) {
        this.transaction_id = args.transaction_id;
        this.loading_approval_log = true;
        const { data } = await this.$axios.get(`/api/v1/transactions/${args.transaction_id}/approval_log`);
        this.approval_logs = data.approval_logs;
        this.approval_current_step = data.current_step;
        this.loading_approval_log = false;
      }
    },
    async closeApprovalLog() {
      this.transaction_id = 0;
      this.approval_logs = [];
      this.approval_current_step = 0;
      this.show_approval_log = false;
    },
    count_total_page() {
      let count_page = Math.ceil(this.total_data / parseInt(this.page_size));
      this.total_page = count_page ? count_page : 1;

      if (this.total_page < this.curr_page) {
        this.curr_page = this.total_page;
      }
    },
    change_page(ev, page = null) {
      let page_number = page ? page : parseInt(ev.target.value);
      if (page_number && page_number <= this.total_page) {
        this.curr_page = page_number;
      } else {
        ev.target.value = this.curr_page;
      }
    },
  },
  components: {
    //   BlankstateIcon,
    //   NotFound,
  },
};
</script>

<style lang="scss" module>
.error_tags {
  background: #f2f4f7;
  border-radius: 6px;
  padding: 16px 32px;
  margin: 10px 8px;
  p {
    font-weight: 500;
  }
}
.page_number {
  -moz-appearance: textfield;
  height: 34px !important;
}
.page_number::-webkit-outer-spin-button,
.page_number::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.tooltip {
  margin-left: 5px;
  font-size: 20px;
  font-weight: normal;
}
</style>

<i18n>
{
  "en": {
    "selected": "selected",
    "btn_new": "Create New",
    "default_empty_text": "You have no data yet.",
    "modal_reuse_tag": {
      "title": "Returning {count} tags",
      "title_result": "Returning tag result",
      "success_title": "{count} tags returned & ready to use",
      "success_desc": "Please check Unassigned category",
      "error_title": "{count} tags failed to move",
      "error_desc": "Internet disconnected or the process is cancelled.",
      "error_list": "List of tags that failed to move",
      "error_other": "and {count} others",
      "progres": "{count} of {total} tags being returned"
    },
    "second_empty_text": "Your transactions data should be here"
  },
  "id": {
    "selected": "dipilih",
    "btn_new": "Buat Baru",
    "default_empty_text": "Anda belum memiliki data.",
    "modal_reuse_tag": {
      "title": "Mengembalikan {count} tag",
      "title_result": "Hasil pengembalian tag",
      "success_title": "{count} tag berhasil dikembalikan",
      "success_desc": "Silahkan cek di kategori Belum di-assign",
      "error_title": "{count} tag gagal dikembalikan",
      "error_desc": "Koneksi internet terputus atau proses dibatalkan.",
      "error_list": "Daftar tag yang gagal dikembalikan",
      "error_other": "dan {count} lainnya",
      "progres": "{count} dari {total} tag sedang dikembalikan"
    },
    "second_empty_text": "Data transaksi anda akan muncul di sini"
  }
}
</i18n>
