/** @see https://storybook.mekari.design/?path=/docs/components-form-control--with-input */

<template>
  <mp-box position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeader />

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-grid template-columns="repeat(12, 1fr)" gap="6">
            <mp-grid-item col-span="6">
              <mp-flex direction="column" gap="3">
                <mp-form-control control-id="nama-akun">
                  <mp-form-label>Nama akun <mp-text ml="1" color="red.500">*</mp-text> </mp-form-label>
                  <mp-input />
                </mp-form-control>

                <mp-form-control control-id="koden-akun">
                  <mp-form-label>Kode akun <mp-text ml="1" color="red.500">*</mp-text> </mp-form-label>
                  <mp-input />
                </mp-form-control>

                <mp-form-control control-id="kategori-akun">
                  <mp-form-label>Kategori akun</mp-form-label>
                  <mp-autocomplete
                    v-model="kategoriAkun"
                    id="kategori-akun"
                    placeholder="Pilih kategori"
                    :data="['Kas & Bank', 'Akun Piutang']"
                    :content-style="{ width: '64' }"
                  />
                </mp-form-control>

                <mp-form-control control-id="mata-uang">
                  <mp-form-label>Mata uang</mp-form-label>
                  <mp-autocomplete id="mata-uang" placeholder="Pilih mata uang" :data="['IDR', 'USD', 'EUR']" :content-style="{ width: '64' }" />
                </mp-form-control>

                <mp-form-control>
                  <mp-checkbox id="VipQj" :check="showAkun" @change="handleChangeShowAkun"> Jadikan akun ini bagian dari akun lain </mp-checkbox>
                  <mp-tooltip id="VipQj" label="Centang kotak jika Anda ingin menjadikan akun ini sebagai sub-akun atau akun header dari akun lainnya.">
                    <mp-icon name="info" size="sm" margin-left="2" />
                  </mp-tooltip>
                </mp-form-control>

                <mp-form-control v-if="showAkun" control-id="XyadJ">
                  <mp-radio-group name="XyadJ" spacing="6" is-inline v-model="type">
                    <mp-radio id="zDhWJ" value="sub-akun"> Sebagai sub-akun dari </mp-radio>
                    <mp-radio id="gapqH" value="header"> Sebagai header dari </mp-radio>
                  </mp-radio-group>
                </mp-form-control>

                <mp-form-control v-if="showAkun && type === 'sub-akun'" control-id="autocomplete-sub-akun">
                  <mp-autocomplete
                    placeholder="Pilih akun"
                    :data="['(1-10004) Bank BCA', '(1-10002) Bank BCA 2', '(1-10003) Bank BCA 3']"
                    :content-style="{ width: 'full' }"
                  />
                </mp-form-control>

                <mp-form-control v-if="showAkun && type === 'header'" control-id="inputtag-sub-akun">
                  <mp-input-tag
                    placeholder="Pilih akun"
                    :enable-create-new-tag="false"
                    :suggestions="suggestions"
                    :is-show-suggestions="isShowSuggestions"
                    :is-loading="isLoading"
                    :is-show-icon-chevron-down="true"
                    :content-style="{ width: 'full' }"
                    :trigger-style="{ maxHeight: '24', overflowY: 'auto' }"
                    @input="handleInput"
                  />
                </mp-form-control>

                <mp-form-control control-id="pajak">
                  <mp-form-label>Pajak</mp-form-label>
                  <mp-autocomplete id="pajak" placeholder="Pilih pajak" :data="['Option 1', 'Option 2', 'Option 3']" :content-style="{ width: '64' }" />
                </mp-form-control>

                <template v-if="kategoriAkun === 'Kas & Bank'">
                  <mp-form-control control-id="nama-bank">
                    <mp-form-label>Nama bank </mp-form-label>
                    <mp-autocomplete
                      v-model="namaBank"
                      id="nama-bank"
                      placeholder="Pilih nama bank"
                      :data="['BCA Personal', 'BNI Company', 'BCA Company']"
                      :content-style="{ width: '64' }"
                    />
                  </mp-form-control>

                  <mp-form-control v-if="namaBank === 'BCA Personal'" control-id="nomor-rekening">
                    <mp-form-label>Nomor rekening </mp-form-label>
                    <mp-input />
                  </mp-form-control>
                </template>

                <mp-form-control control-id="saldo-awal" is-disabled>
                  <mp-form-label>Saldo awal</mp-form-label>
                  <mp-input-group>
                    <mp-input-left-addon>
                      <mp-text font-weight="bold" padding-x="3" color="gray.400">Rp</mp-text>
                    </mp-input-left-addon>
                    <mp-input value="0,00" text-align="right" />
                  </mp-input-group>
                  <mp-form-help-text>Nilai dapat diubah di menu Saldo Awal</mp-form-help-text>
                </mp-form-control>

                <mp-form-control control-id="deskripsi" position="relative">
                  <mp-flex justify="space-between" align="center" w="full">
                    <mp-form-label>Deskripsi</mp-form-label>
                    <mp-text font-size="sm" color="gray.400"> {{ deskripsi.length }} / 200</mp-text>
                  </mp-flex>

                  <mp-textarea placeholder="Contoh: Akun untuk piutang karyawan." maxlength="200" v-model="deskripsi" />
                </mp-form-control>
              </mp-flex>

              <mp-flex justify="end" mt="8">
                <mp-flex gap="2">
                  <mp-button variant="ghost"> Batalkan </mp-button>

                  <SplitButton label="Tambah akun">
                    <template #popoverContent>
                      <mp-popover-list>
                        <mp-popover-list-item>Tambah akun baru lainnya</mp-popover-list-item>
                      </mp-popover-list>
                    </template>
                  </SplitButton>
                </mp-flex>
              </mp-flex>
            </mp-grid-item>

            <mp-grid-item v-if="kategoriAkun == 'Kas & Bank'" col-start="9" col-end="13">
              <mp-grid gap="2" p="6" rounded="md" border="1px" border-color="gray.100">
                <img src="../assets/streamline-icon-payment-with-card.svg" alt="" />
                <mp-heading as="h3" font-size="lg">Cash Link untuk mutasi rekening</mp-heading>
                <mp-text line-height="md">Anda bisa cek mutasi rekening bank yang digunakan di Jurnal secara otomatis.</mp-text>
                <mp-flex gap="2" align="center">
                  <mp-icon name="newtab" size="sm" color="blue.400" />
                  <mp-text is-link as="a" href="https://mekari.com/" target="_blank">Hubungkan rekening</mp-text>
                </mp-flex>
              </mp-grid>
            </mp-grid-item>
          </mp-grid>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpText,
  MpHeading,
  MpBox,
  MpFlex,
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpGrid,
  MpGridItem,
  MpAutocomplete,
  MpRadioGroup,
  MpRadio,
  MpCheckbox,
  MpIcon,
  MpTooltip,
  MpFormHelpText,
  MpTextarea,
  MpPopoverList,
  MpPopoverListItem,
  MpInputTag,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "./SubHeader.vue";
import SplitButton from "../components/SplitButton.vue";

export default {
  name: "SalesIndex",
  components: {
    MpText,
    MpHeading,
    MpBox,
    MpFlex,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpGrid,
    MpGridItem,
    MpAutocomplete,
    MpRadioGroup,
    MpRadio,
    MpCheckbox,
    MpIcon,
    MpTooltip,
    MpFormHelpText,
    MpTextarea,
    MpPopoverList,
    MpPopoverListItem,
    MpInputTag,
    //
    Header,
    Sidebar,
    SubHeader,
    SplitButton,
  },
  data() {
    return {
      namaBank: "",
      kategoriAkun: "",
      showAkun: false,
      type: "",
      deskripsi: "",

      suggestions: [
        "(1-10004) Bank BCA",
        "(1-10005) Bank BNI",
        "(1-10006) Bank BNI Corporate",
        "(1-10007) Bank BNI 46 Corporate ",
        "(1-10008) Bank Corporate",
        "(1-10009) Bank US Dollar",
        "(1-10010) Bank US Dollar 2",
        "(1-10011) Bank US Dollar 3",
        "(1-10012) Bank US Dollar 4",
        "(1-10013) Bank US Dollar 5",
        "(1-10014) Bank US Dollar 6",
      ],
      isLoading: false,
      isShowSuggestions: true,
    };
  },
  methods: {
    handleChangeShowAkun() {
      this.showAkun = !this.showAkun;

      if (this.showAkun) this.type = "sub-akun";
    },
  },
};
</script>
