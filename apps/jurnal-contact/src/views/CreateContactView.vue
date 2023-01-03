<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-stacked :default-is-toggle="true" />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeader title="Buat kontak " />
        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-stack spacing="16" max-width="70%">
            <!-- Info kontak -->
            <mp-box>
              <mp-stack spacing="5">
                <mp-flex>
                  <mp-icon name="profile" variant="duotone" mr="3" />
                  <mp-text font-weight="semibold" font-size="lg">Info kontak</mp-text>
                </mp-flex>

                <mp-form-control is-required>
                  <mp-form-label>Nama panggilan</mp-form-label>
                  <mp-input />
                </mp-form-control>

                <mp-form-control>
                  <mp-form-label>Tipe Kontak</mp-form-label>
                  <mp-checkbox-group name="tipe-kontak" spacing="6" is-inline>
                    <mp-checkbox id="ekwAo" value="pelanggan"> Pelanggan </mp-checkbox>
                    <mp-checkbox id="IXbuS" value="supplier"> Supplier </mp-checkbox>
                    <mp-checkbox id="LMjMY" value="karyawan"> Karyawan </mp-checkbox>
                    <mp-checkbox id="jMjMY" value="lainnya"> Lainnya </mp-checkbox>
                  </mp-checkbox-group>
                </mp-form-control>

                <mp-form-control id="group-kontak">
                  <mp-form-label>Group kontak</mp-form-label>
                  <mp-input-tag :suggestions="['Jakarta', 'Medan', 'Bandung', 'Surabaya']" :is-show-suggestions="true" />
                  <mp-form-help-text>Anda dapat memiih maksimal 3 grup</mp-form-help-text>
                </mp-form-control>
              </mp-stack>
            </mp-box>

            <!-- Info umum -->
            <mp-box>
              <mp-flex mb="5" justify="space-between" align="center">
                <mp-flex>
                  <mp-icon name="contact" variant="duotone" mr="3" />
                  <mp-text font-weight="semibold" font-size="lg">Info umum</mp-text>
                </mp-flex>

                <mp-button-icon name="caret-down" @click="collapse.infoUmum = !collapse.infoUmum" />
              </mp-flex>

              <mp-collapse :is-open="collapse.infoUmum">
                <mp-stack spacing="5">
                  <mp-box>
                    <mp-flex gap="5">
                      <mp-box position="relative">
                        <mp-autocomplete placeholder="Prefix" :data="['Bapak', 'Ibu']" width="120px" :content-style="{ width: '120px' }" />
                      </mp-box>
                      <mp-input placeholder="Nama awal" />
                      <mp-input placeholder="Nama tengah" />
                      <mp-input placeholder="Nama akhir" />
                    </mp-flex>
                  </mp-box>

                  <mp-box>
                    <mp-flex gap="5">
                      <mp-box position="relative">
                        <mp-autocomplete placeholder="Pilih" :data="['KTP', 'SIM']" width="120px" :content-style="{ width: '120px' }" />
                      </mp-box>
                      <mp-input />
                    </mp-flex>
                  </mp-box>

                  <mp-form-control id="group-kontak">
                    <mp-form-label>Email</mp-form-label>
                    <mp-input-tag :suggestions="['nama.user@email.com', 'nama.panjang@email.com']" :is-show-suggestions="true" />
                    <mp-form-help-text>Anda dapat memiih maksimal 3 grup</mp-form-help-text>
                  </mp-form-control>

                  <mp-form-control>
                    <mp-form-label>Nama perusahaan</mp-form-label>
                    <mp-input />
                  </mp-form-control>

                  <mp-grid template-columns="repeat(2, 1fr)" gap="6">
                    <mp-form-control>
                      <mp-form-label>Nomor handphone</mp-form-label>
                      <mp-input placeholder="Contoh: 0812 3456 78910" />
                    </mp-form-control>

                    <mp-form-control>
                      <mp-form-label>Nomor telepon</mp-form-label>
                      <mp-input placeholder="Contoh: (012) 3456789" />
                    </mp-form-control>
                  </mp-grid>

                  <mp-grid template-columns="repeat(2, 1fr)" gap="6">
                    <mp-form-control>
                      <mp-form-label>Fax</mp-form-label>
                      <mp-input placeholder="Contoh: 0812 3456 78910" />
                    </mp-form-control>

                    <mp-form-control>
                      <mp-form-label>NPWP</mp-form-label>
                      <mp-input placeholder="Contoh: (012) 3456789" />
                    </mp-form-control>
                  </mp-grid>

                  <mp-form-control>
                    <mp-form-label>Alamat penagihan</mp-form-label>
                    <mp-textarea placeholder="Contoh: Jalan Indonesia Block C no. 22" />
                  </mp-form-control>

                  <mp-grid template-columns="repeat(4, 1fr)" gap="5">
                    <mp-form-control>
                      <mp-input placeholder="Nomor" />
                    </mp-form-control>

                    <mp-form-control>
                      <mp-input placeholder="RT" />
                    </mp-form-control>

                    <mp-form-control>
                      <mp-input placeholder="RW" />
                    </mp-form-control>

                    <mp-form-control>
                      <mp-input placeholder="Kode pos" />
                    </mp-form-control>
                  </mp-grid>

                  <mp-grid template-columns="repeat(2, 1fr)" gap="5">
                    <mp-form-control>
                      <mp-input placeholder="Kelurahan" />
                    </mp-form-control>

                    <mp-form-control>
                      <mp-input placeholder="Kecamatan" />
                    </mp-form-control>
                  </mp-grid>

                  <mp-grid template-columns="repeat(2, 1fr)" gap="5">
                    <mp-form-control>
                      <mp-input placeholder="Kabupaten/Kota" />
                    </mp-form-control>

                    <mp-form-control>
                      <mp-input placeholder="Provinsi" />
                    </mp-form-control>
                  </mp-grid>

                  <mp-box position="relative">
                    <mp-checkbox v-model="isTambahRincian">Tambah rincian</mp-checkbox>
                  </mp-box>

                  <mp-box v-if="isTambahRincian">
                    <mp-form-control :is-disabled="isSamakanDenganAlamatPenagihan">
                      <mp-form-label>Alamat penagihan</mp-form-label>
                      <mp-textarea placeholder="Contoh: Jalan Indonesia Block C no. 22" />
                    </mp-form-control>

                    <mp-box position="relative" mt="1">
                      <mp-checkbox v-model="isSamakanDenganAlamatPenagihan">Samakan dengan alamat penagihan</mp-checkbox>
                    </mp-box>
                  </mp-box>

                  <mp-form-control>
                    <mp-form-label>Info lain</mp-form-label>
                    <mp-input />
                  </mp-form-control>
                </mp-stack>
              </mp-collapse>
            </mp-box>

            <!-- Info bank -->
            <mp-box>
              <mp-flex mb="5" justify="space-between" align="center">
                <mp-flex>
                  <mp-icon name="bank" variant="duotone" mr="3" />
                  <mp-text font-weight="semibold" font-size="lg">Info bank</mp-text>
                </mp-flex>

                <mp-button-icon name="caret-down" @click="collapse.infoBank = !collapse.infoBank" />
              </mp-flex>

              <mp-collapse :is-open="collapse.infoBank">
                <mp-box>
                  <mp-box v-for="(account, index) in bankAccounts" :key="`${account}-${index}`">
                    <mp-divider mb="6" mt="11" v-if="bankAccounts.length === 0 || index > 0" />
                    <mp-flex justify="space-between" align="center" mb="5">
                      <mp-text font-weight="semibold" font-size="lg">Akun bank</mp-text>

                      <template v-if="bankAccounts.length === 0 || index > 0">
                        <mp-tooltip label="Hapus">
                          <mp-button-icon name="minus-circular" @click="bankAccounts.splice(index, 1)" />
                        </mp-tooltip>
                      </template>
                    </mp-flex>
                    <mp-grid template-columns="repeat(2, 1fr)" gap="5">
                      <mp-form-control>
                        <mp-form-label>Nama bank</mp-form-label>
                        <mp-autocomplete :data="['BCA', 'BNI', 'BRI', 'Mandiri']" :content-style="{ width: 'full' }" placeholder="Pilih bank" />
                      </mp-form-control>

                      <mp-form-control>
                        <mp-form-label>Kantor cabang</mp-form-label>
                        <mp-input />
                      </mp-form-control>

                      <mp-form-control>
                        <mp-form-label>Pemegang akun bank</mp-form-label>
                        <mp-input />
                      </mp-form-control>

                      <mp-form-control>
                        <mp-form-label>Nama rekening</mp-form-label>
                        <mp-input />
                      </mp-form-control>
                    </mp-grid>
                  </mp-box>

                  <mp-button variant="outline" mt="5" v-if="bankAccounts.length < 3" @click="bankAccounts.push(bankAccounts.length + 1)">
                    <mp-icon name="add-circular" variant="duotone" size="sm" mr="3" />
                    Tambah bank lain
                  </mp-button>
                </mp-box>
              </mp-collapse>
            </mp-box>

            <!-- Pemetaan akun-->
            <mp-stack spacing="5">
              <mp-flex justify="space-between" align="center">
                <mp-flex>
                  <mp-icon name="account-mapping" variant="duotone" mr="3" />
                  <mp-text font-weight="semibold" font-size="lg">Pemetaan akun</mp-text>
                </mp-flex>

                <mp-button-icon name="caret-down" @click="collapse.pemetaanAkun = !collapse.pemetaanAkun" />
              </mp-flex>

              <mp-collapse :is-open="collapse.pemetaanAkun">
                <mp-grid template-columns="repeat(2, 1fr)" gap="5">
                  <mp-form-control>
                    <mp-form-label>Akun piutang</mp-form-label>
                    <mp-autocomplete :data="['101 - Nama Akun', '102 - Nama Akun', '103 - Nama Akun']" :content-style="{ width: 'full' }" />
                  </mp-form-control>

                  <mp-form-control>
                    <mp-form-label>Akun hutang</mp-form-label>
                    <mp-autocomplete :data="['101 - Nama Akun', '102 - Nama Akun', '103 - Nama Akun']" :content-style="{ width: 'full' }" />
                  </mp-form-control>

                  <mp-box>
                    <mp-form-control :is-disabled="true">
                      <mp-form-label>Piutang maksimal</mp-form-label>
                      <mp-input  />
                    </mp-form-control>

                    <mp-box position="relative" mt="1">
                      <mp-checkbox> Aktifkan piutang maksimal </mp-checkbox>
                    </mp-box>
                  </mp-box>

                  <mp-box>
                    <mp-form-control :is-disabled="true">
                      <mp-form-label>Hutang maksimal</mp-form-label>
                      <mp-input />
                    </mp-form-control>

                    <mp-box position="relative" mt="1">
                      <mp-checkbox> Aktifkan hutang maksimal </mp-checkbox>
                    </mp-box>
                  </mp-box>
                </mp-grid>

                <mp-form-control mt="5">
                  <mp-form-label>Syarat pembayaran utama</mp-form-label>
                  <mp-autocomplete
                    placeholder="Pilih pembayaran"
                    :data="['Cash on Delivery', 'Net 15', 'Net 30', 'Net 45', 'Net 60', 'Custom']"
                    :content-style="{ width: 'max-context', minWidth: '64', maxContent: '90vw' }"
                  />
                </mp-form-control>
              </mp-collapse>
            </mp-stack>
          </mp-stack>

          <mp-flex justify="flex-end" mt="8" max-width="70%">
            <mp-button-group>
              <mp-button variant="ghost">Batalkan</mp-button>
              <mp-button @click="handleSave">Simpan</mp-button>
            </mp-button-group>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpInput,
  MpText,
  MpIcon,
  MpStack,
  MpButtonGroup,
  MpButton,
  MpCheckbox,
  MpCheckboxGroup,
  MpInputTag,
  MpAutocomplete,
  MpGrid,
  MpTextarea,
  MpButtonIcon,
  MpCollapse,
  MpTooltip,
  MpDivider,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
export default {
  name: "ContactCreateView",
  components: {
    // Pixel Component
    MpBox,
    MpFlex,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpInput,
    MpText,
    MpIcon,
    MpStack,
    MpButtonGroup,
    MpButton,
    MpCheckbox,
    MpCheckboxGroup,
    MpInputTag,
    MpAutocomplete,
    MpGrid,
    MpTextarea,
    MpButtonIcon,
    MpCollapse,
    MpTooltip,
    MpDivider,

    // Layout Component
    Header,
    Sidebar,
    SubHeader,
  },
  data() {
    return {
      collapse: {
        infoUmum: true,
        infoBank: true,
        pemetaanAkun: true,
      },
      bankAccounts: [1],
      isTambahRincian: false,
      isSamakanDenganAlamatPenagihan: false,
    };
  },
  methods: {
    handleSave() {
      this.$router.push("/detail");
    },
  },
};
</script>

<style scoped>
[data-pixel-component="MpCollapse"] {
 overflow: visible !important;
}
</style>
