<template>
  <mp-drawer :is-open="isOpen" :on-close="handleClose" size="lg">
    <mp-drawer-overlay />
    <mp-drawer-content>
      <mp-drawer-header>Kontak baru</mp-drawer-header>
      <mp-drawer-close-button />
      <mp-drawer-body overflow-y="auto">
        <mp-box>
          <mp-stack v-if="!isShowMore" gap="5">
            <mp-flex>
              <mp-icon name="profile" variant="duotone" mr="3" />
              <mp-text font-weight="semibold" font-size="lg">Info kontak</mp-text>
            </mp-flex>

            <FormContainer label="Nama panggilan" is-required tooltip-label="Tooltip">
              <mp-input />
            </FormContainer>

            <FormContainer label="Email">
              <mp-input-tag :suggestions="['nama.user@email.com', 'nama.panjang@email.com']" :is-show-suggestions="true" />
            </FormContainer>

            <FormContainer label="Nomor telepon">
              <mp-input placeholder="Contoh: (012) 3456789" />
            </FormContainer>

            <FormContainer label="Alamat penagihan">
              <mp-textarea placeholder="Contoh: Jalan Indonesia Block C no. 22" />
            </FormContainer>

            <FormContainer label="Alamat pengiriman">
              <mp-checkbox v-model="isSamakanDenganAlamatPenagihan">Samakan dengan alamat penagihan</mp-checkbox>
            </FormContainer>

            <mp-text is-link @click.native="isShowMore = true">Tampilkan info lainnya</mp-text>
          </mp-stack>

          <mp-stack v-else spacing="16">
            <!-- Info kontak -->
            <mp-box>
              <mp-stack gap="5">
                <mp-flex>
                  <mp-icon name="profile" variant="duotone" mr="3" />
                  <mp-text font-weight="semibold" font-size="lg">Info kontak</mp-text>
                </mp-flex>

                <FormContainer label="Nama panggilan">
                  <mp-input />
                </FormContainer>

                <FormContainer label="Group kontak">
                  <mp-input-tag :suggestions="['Jakarta', 'Medan', 'Bandung', 'Surabaya']" :is-show-suggestions="true" />
                </FormContainer>
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
                <mp-stack gap="5">
                  <FormContainer label="Nama lengkap">
                    <mp-flex gap="5">
                      <mp-input placeholder="Nama awal" />
                      <mp-input placeholder="Nama tengah" />
                      <mp-input placeholder="Nama akhir" />
                    </mp-flex>
                  </FormContainer>

                  <FormContainer label="Nomor handphone">
                    <mp-input placeholder="Contoh: 081 2 9374 546" />
                  </FormContainer>

                  <FormContainer label="Identitas">
                    <mp-flex gap="5">
                      <mp-box flex="none" width="120px">
                        <mp-autocomplete placeholder="Pilih" :data="['KTP', 'SIM']" :content-style="{ width: '120px' }" />
                      </mp-box>
                      <mp-input placeholder="Contoh: 081 2 9374 546" width="100%" />
                    </mp-flex>
                  </FormContainer>

                  <FormContainer label="Email">
                    <mp-input-tag :suggestions="['nama.user@email.com', 'nama.panjang@email.com']" :is-show-suggestions="true" />
                  </FormContainer>

                  <FormContainer label="Info lain">
                    <mp-input />
                  </FormContainer>

                  <FormContainer label="Nama perusahaan">
                    <mp-input />
                  </FormContainer>

                  <FormContainer label="Nomor telepon">
                    <mp-input placeholder="Contoh: (012) 3456789" />
                  </FormContainer>

                  <FormContainer label="Fax">
                    <mp-input placeholder="Contoh: 0812 3456 78910" />
                  </FormContainer>

                  <FormContainer label="NPWP">
                    <mp-input placeholder="Contoh: (012) 3456789" />
                  </FormContainer>

                  <FormContainer label="Alamat penagihan">
                    <mp-textarea placeholder="Contoh: Jalan Indonesia Block C no. 22" />
                  </FormContainer>

                  <FormContainer>
                    <mp-checkbox v-model="isTambahRincian">Tambah rincian</mp-checkbox>
                  </FormContainer>

                  <FormContainer v-if="isTambahRincian" label="Alamat pengiriman">
                    <mp-textarea placeholder="Contoh: Jalan Indonesia Block C no. 22" :is-disabled="isSamakanDenganAlamatPenagihan" />
                  </FormContainer>

                  <FormContainer v-if="isTambahRincian">
                    <mp-checkbox v-model="isSamakanDenganAlamatPenagihan">Samakan dengan alamat penagihan</mp-checkbox>
                  </FormContainer>
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
                    <mp-stack gap="5">
                      <FormContainer label="Nama bank">
                        <mp-autocomplete :data="['BCA', 'BNI', 'BRI', 'Mandiri']" :content-style="{ width: 'full' }" />
                      </FormContainer>

                      <FormContainer label="Kantor cabang">
                        <mp-input />
                      </FormContainer>

                      <FormContainer label="Pemegang akun bank">
                        <mp-input />
                      </FormContainer>

                      <FormContainer label="Nama rekening">
                        <mp-input />
                      </FormContainer>
                    </mp-stack>
                  </mp-box>

                  <mp-button width="full" variant="outline" mt="5" v-if="bankAccounts.length < 3" @click="bankAccounts.push(bankAccounts.length + 1)">
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
                <mp-stack gap="5">
                  <FormContainer label="Akun piutang">
                    <mp-autocomplete :data="['101 - Nama Akun', '102 - Nama Akun', '103 - Nama Akun']" :content-style="{ width: 'full' }" />
                  </FormContainer>

                  <FormContainer label="Akun hutang">
                    <mp-autocomplete :data="['101 - Nama Akun', '102 - Nama Akun', '103 - Nama Akun']" :content-style="{ width: 'full' }" />
                  </FormContainer>

                  <FormContainer label="Piutang maksimal">
                    <mp-box>
                      <mp-input />
                      <mp-box position="relative" mt="1">
                        <mp-checkbox> Aktifkan piutang maksimal </mp-checkbox>
                      </mp-box>
                    </mp-box>
                  </FormContainer>

                  <FormContainer label="Hutang maksimal">
                    <mp-box>
                      <mp-input />
                      <mp-box position="relative" mt="1">
                        <mp-checkbox> Aktifkan hutang maksimal </mp-checkbox>
                      </mp-box>
                    </mp-box>
                  </FormContainer>

                  <FormContainer label="Syarat pembayaran utama">
                    <mp-autocomplete
                      placeholder="Pilih pembayaran"
                      :data="['Option 1', 'Option 2', 'Option 3']"
                      :content-style="{
                        width: 'max-context',
                        minWidth: '64',
                        maxContent: '90vw',
                      }"
                    />
                  </FormContainer>
                </mp-stack>
              </mp-collapse>
            </mp-stack>
          </mp-stack>
        </mp-box>
      </mp-drawer-body>
      <mp-drawer-footer justify-content="space-between">
        <mp-box>
          <mp-text v-if="isShowMore" is-link @click.native="isShowMore = false">Sembunyikan tampilan lengkap</mp-text>
        </mp-box>
        <mp-button-group>
          <mp-button variant="ghost" mr="3" @click="handleClose"> Batalkan </mp-button>
          <mp-button>Simpan</mp-button>
        </mp-button-group>
      </mp-drawer-footer>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerFooter,
  MpButton,
  MpBox,
  MpFlex,
  MpInput,
  MpText,
  MpIcon,
  MpStack,
  MpCheckbox,
  MpInputTag,
  MpAutocomplete,
  MpTextarea,
  MpButtonIcon,
  MpCollapse,
  MpTooltip,
  MpDivider,
  MpButtonGroup,
} from "@mekari/pixel";
import FormContainer from "./FormContainer.vue";

export default {
  name: "DrawerAddContact",
  components: {
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpButton,
    MpBox,
    MpFlex,
    MpInput,
    MpText,
    MpIcon,
    MpStack,
    MpCheckbox,
    MpInputTag,
    MpAutocomplete,
    MpTextarea,
    MpButtonIcon,
    MpCollapse,
    MpTooltip,
    MpDivider,
    MpButtonGroup,
    FormContainer,
  },
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      isShowMore: false,
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
    handleClose() {
      this.$emit("close");
    },
    handleSubmit() {
      this.handleClose();
    },
  },
};
</script>
