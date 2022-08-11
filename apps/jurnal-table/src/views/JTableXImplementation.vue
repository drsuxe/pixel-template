<template>
  <j-table-v3
    new_no_data
    :loading="loading"
    :heads="heads"
    :items="items"
    :page="page"
    :per_page="per_page"
    :total_data="total_data"
    @change_page="(val) => (page = val)"
    @change_per_page="(val) => (per_page = val)"
    @sorting="on_sorting"
    @refetch="fetch"
    :bulk_delete_api="bulk_delete_api"
    :bulk_print_api="bulk_print_api"
    :delete_message="$t('table.delete_message')"
    :title="$t('table.title')"
    :empty_text="$t('empty_text')"
    :empty_button_text="$t('new_btn')"
    :empty_button_link="empty_button_link"
    :can_approve="can_approve"
    :rule_based_sales_active="rule_based_sales_active"
    :mw_migration_running="setting.multiple_withholding_migration_running"
  >
    <mp-flex w="100%" my="3" justify-content="space-between">
      <mp-flex gap="2">
        <mp-select
          v-if="active_tab.key === 'si' && user_authorization_sales.sales_invoice && user_authorization_sales.sales_invoice.url.api.list"
          v-model="type_select"
          id="select_transaction"
        >
          <option v-for="opt in type_options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
        </mp-select>
        <mp-select v-if="active_tab.key === 'so'" v-model="type_select_order" id="select_transaction_order">
          <option v-for="opt in type_options_order" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </option>
        </mp-select>
        <mp-select v-if="status_options.length > 0" v-model="status_select" min-w="160px" id="select_status">
          <option v-for="opt in status_options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
        </mp-select>
      </mp-flex>
      <j-search-v2 v-model="q" id="search_field" />
    </mp-flex>
  </j-table-v3>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
