<template>
  <mp-tabs id="JTabs" :default-index="defaultIndex" @change="handleChange">
    <mp-tab-list>
      <mp-tab v-for="(item, index) in tabItems" :key="index">
        {{ item.name }}
        <mp-badge v-if="item.badgeLabel" ml="2" variant="subtle">
          {{ item.badgeLabel }}
        </mp-badge>
      </mp-tab>
    </mp-tab-list>
  </mp-tabs>
</template>

<script>
import {
  MpTabs,
  MpTabList,
  MpTab,
  MpBadge,
} from '@mekari/pixel'

export default {
  name: 'TabsWithBadge',
  components: {
    MpTabs,
    MpTabList,
    MpTab,
    MpBadge,
  },
  props: {
    tabItems: {
      type: Array,
      default: () => [
        { name: 'Faktur pembelian', badgeLabel: '' },
        { name: 'Tukar faktur', badgeLabel: '' },
        { name: 'Pemesanan', badgeLabel: '' },
        { name: 'Penawaran', badgeLabel: '' },
        { name: 'Persetujuan', badgeLabel: '99+' },
      ]
    },
    defaultTab: String,
    value: [String, Number]
  },
  data() {
    return {
      defaultIndex: 0,
    }
  },
  mounted() {
    console.log('Value', this.value)
    this.handleChange(this.defaultIndex)
  },
  methods: {
    handleChange(e) {
      console.log(e)
      this.$emit('input', e)
    }
  }
}
</script>
