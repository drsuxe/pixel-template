<template>
  <mp-drawer size="md" :is-open="isOpen" :on-close="handleClose">
    <mp-drawer-overlay />
    <mp-drawer-content>
      <mp-drawer-header>Filter transaksi pembelian</mp-drawer-header>
      <mp-drawer-close-button @click="handleClose" />
      <mp-drawer-body>
        <mp-stack spacing="5">
          <mp-form-control>
            <mp-form-label>Kata kunci</mp-form-label>

            <mp-input-group>
              <mp-input-left-addon :with-background="false">
                <mp-icon name="search" size="sm" />
              </mp-input-left-addon>
              <mp-input v-model="currentFilter.keyword" placeholder="Cari transaksi" is-clearable />
            </mp-input-group>
          </mp-form-control>

          <mp-form-control>
            <mp-form-label>Cari pada kolom</mp-form-label>
            <mp-autocomplete v-model="currentFilter.column" placeholder="Cari transaksi" :data="options"
              :content-style="{ width: 'full' }" />
          </mp-form-control>

          <mp-form-control control-id="transaction-date">
            <mp-form-label>Tanggal transaksi</mp-form-label>
            <mp-date-picker v-model="currentFilter.transactionDate" format="DD/MM/YYYY" type="date" range
              range-separator=" - " placeholder="Tanggal mulai - tanggal selesai" />
          </mp-form-control>

          <mp-form-control control-id="due-date">
            <mp-form-label>Tanggal jatuh tempo</mp-form-label>
            <mp-date-picker v-model="currentFilter.dueDate" format="DD/MM/YYYY" type="date" range range-separator=" - "
              placeholder="Tanggal mulai - tanggal selesai" />
          </mp-form-control>

          <mp-form-control>
            <mp-form-label>Status</mp-form-label>
            <mp-autocomplete v-model="currentFilter.status" placeholder="Pilih status"
              :data="['Semua status', 'Open', 'Overdue', 'Partial', 'Paid']" :contentStyle="{ width: 'full' }" />
          </mp-form-control>

          <mp-form-control>
            <mp-form-label>Sisa tagihan</mp-form-label>
            <mp-radio-group name="sisa-tagihan" spacing="6" mb="1" is-inline v-model="currentFilter.bill.formula"
              @change="[currentFilter.bill.value = '', currentFilter.bill.value2 = '']">
              <mp-radio id="sisa-tagihan-lebih-dari" value="lebih-dari">
                Lebih dari
              </mp-radio>
              <mp-radio id="sisa-tagihan-di-antara" value="di-antara">
                Di antara
              </mp-radio>
              <mp-radio id="sisa-tagihan-kurang-dari" value="kurang-dari">
                Kurang dari
              </mp-radio>
            </mp-radio-group>

            <mp-flex gap="2" v-if="currentFilter.bill.formula === 'di-antara'">
              <mp-box width="45%">
                <mp-input v-model="currentFilter.bill.value" placeholder="0,00" text-align="right"
                  v-mask="numericalMask" type="text" inputmode="number" is-full-width />
              </mp-box>
              <mp-flex align="center" justify="center" width="5%">
                <mp-text text-align="center">-</mp-text>
              </mp-flex>
              <mp-box width="45%">
                <mp-input v-model="currentFilter.bill.value2" placeholder="0,00" text-align="right"
                  v-mask="numericalMask" type="text" inputmode="number" is-full-width />
              </mp-box>
            </mp-flex>
            <mp-input v-else v-model="currentFilter.bill.value" placeholder="0,00" text-align="right"
              v-mask="numericalMask" type="text" inputmode="number" />
          </mp-form-control>

          <mp-form-control>
            <mp-form-label>Total</mp-form-label>
            <mp-radio-group name="total" spacing="6" mb="1" is-inline v-model="currentFilter.total.formula"
              @change="[currentFilter.total.value = '', currentFilter.total.value2 = '']">
              <mp-radio id="total-lebih-dari" value="lebih-dari">
                Lebih dari
              </mp-radio>
              <mp-radio id="total-di-antara" value="di-antara">
                Di antara
              </mp-radio>
              <mp-radio id="total-kurang-dari" value="kurang-dari">
                Kurang dari
              </mp-radio>
            </mp-radio-group>

            <mp-flex gap="2" v-if="currentFilter.total.formula === 'di-antara'">
              <mp-box width="45%">
                <mp-input v-model="currentFilter.total.value" placeholder="0,00" text-align="right"
                  v-mask="numericalMask" type="text" inputmode="number" is-full-width />
              </mp-box>
              <mp-flex align="center" justify="center" width="5%">
                <mp-text text-align="center">-</mp-text>
              </mp-flex>
              <mp-box width="45%">
                <mp-input v-model="currentFilter.total.value2" placeholder="0,00" text-align="right"
                  v-mask="numericalMask" type="text" inputmode="number" is-full-width />
              </mp-box>
            </mp-flex>
            <mp-input v-else v-model="currentFilter.total.value" placeholder="0,00" text-align="right"
              v-mask="numericalMask" type="text" inputmode="number" />
          </mp-form-control>
        </mp-stack>
      </mp-drawer-body>
      <mp-drawer-footer justify-content="space-between" align-items="center">
        <mp-text is-link @click.native="handleReset">Atur ulang</mp-text>

        <mp-flex>
          <mp-button variant="ghost" mr="3" @click="handleClose"> Batal </mp-button>
          <mp-button @click="handleApply">Terapkan</mp-button>
        </mp-flex>
      </mp-drawer-footer>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpIcon,
  MpAutocomplete,
  MpRadio,
  MpRadioGroup,
  MpButton,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerFooter,
  MpStack,
  MpFlex,
  MpText,
  MpDatePicker,
  MpBox
} from "@mekari/pixel";

const defaultFilter = {
  keyword: "",
  column: "",
  transactionDate: [],
  dueDate: [],
  status: "Semua status",
  bill: {
    formula: "lebih-dari",
    value: "",
    value2: ""
  },
  total: {
    formula: "lebih-dari",
    value: "",
    value2: ""
  },
}

export default {
  components: {
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpIcon,
    MpAutocomplete,
    MpRadio,
    MpRadioGroup,
    MpButton,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpStack,
    MpFlex,
    MpText,
    MpDatePicker,
    MpBox
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: Object,
      default: defaultFilter,
    },
  },
  data() {
    return {
      options: ["Nomor transaksi", "Supplier", "Tag", "Alamat supplier", "Alamat pengiriman", "Gudang", "Nomor referensi", "Nama produk", "Pesan", "Memo"],
      currentFilter: {
        keyword: "",
        column: "",
        transactionDate: [],
        dueDate: [],
        status: "",
        bill: {
          formula: "",
          value: "",
        },
        total: {
          formula: "",
          value: "",
        },
      },
    };
  },
  computed: {
    numericalMask: function () {
      return '["Rp ###", "Rp #.###", "Rp ##.###", "Rp ###.###","Rp #.###.###","Rp ##.###.###","Rp ###.###.###","Rp #.###.###.###"]'
    }
  },
  watch: {
    isOpen(newValue) {
      if (newValue) {
        this.currentFilter = JSON.parse(JSON.stringify(this.filter))
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleApply() {
      this.$emit("apply", this.currentFilter);
    },
    handleReset() {
      this.currentFilter = defaultFilter
    },
  },
};
</script>

<style >
#pixel-popper_transaction-date-content,
#pixel-popper_due-date-content {
  width: 592px;
  border-radius: var(--radii-md);
}
</style>
