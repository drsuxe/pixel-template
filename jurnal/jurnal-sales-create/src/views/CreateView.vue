<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-custom default-is-toggle />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="#F3F7FC"
        :margin-left="['0', '60px']"
        position="relative"
      >
        <SubHeader>
          <SubHeaderContent />
        </SubHeader>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" border-left-width="1px" rounded-top-left="md" background-color="white" padding="6">
          <mp-grid
            :template-columns="{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }"
            gap="6"
          >
            <mp-grid-item>
              <mp-form-control is-required>
                <mp-form-label>Penjualan</mp-form-label>
                <mp-autocomplete
                  :data="['Option 1', 'Option 2', 'Option 3']"
                  :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                  is-show-button-action
                  button-action-text="Tambah kontak"
                  @button-action="isDrawerAddContactOpen = true"
                />
              </mp-form-control>
            </mp-grid-item>

            <mp-grid-item>
              <mp-form-control>
                <mp-form-label>Email</mp-form-label>
                <mp-input-tag
                  :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                  :suggestions="['dimas.raka@mekari.com', 'bregga.teddy@mekari.com', 'jaka.permadi@mekari.com']"
                  :is-show-suggestions="true"
                />
              </mp-form-control>
            </mp-grid-item>

            <mp-grid-item display="flex" align-items="flex-end" pb="2">
              <mp-checkbox>Info pengiriman</mp-checkbox>
            </mp-grid-item>

            <mp-grid-item>
              <mp-heading text-align="right">Total Rp15.000.000,00</mp-heading>
            </mp-grid-item>
          </mp-grid>

          <mp-divider border-style="dashed" my="8" />

          <mp-grid
            :template-columns="{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }"
            gap="6"
          >
            <mp-grid-item display="inline-flex" flex-direction="column" gap="6">
              <mp-form-control>
                <mp-form-label>Alamat penagihan</mp-form-label>
                <mp-textarea />
              </mp-form-control>

              <mp-box>
                <mp-form-control v-if="!isSameWithBillingAddress">
                  <mp-form-label>Alamat pengiriman</mp-form-label>
                  <mp-textarea />
                </mp-form-control>
                <mp-checkbox mt="1" v-model="isSameWithBillingAddress"> Sama dengan alamat penagihan </mp-checkbox>
              </mp-box>
            </mp-grid-item>

            <mp-grid-item display="inline-flex" flex-direction="column" gap="6">
              <mp-form-control>
                <mp-form-label>Tgl. transaksi</mp-form-label>
                <mp-date-picker />
              </mp-form-control>

              <mp-form-control>
                <mp-form-label>Tgl. Jatuh tempo</mp-form-label>
                <mp-date-picker />
              </mp-form-control>

              <mp-form-control>
                <mp-form-label>Syarat pembayaran</mp-form-label>
                <mp-autocomplete
                  :data="['Net 30', 'Cash on delivery', 'Net 15', 'Net 60']"
                  :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                  is-show-button-action
                  @button-action="isModalPaymentRequirementOpen = true"
                >
                  <template #button-action> Tambah syarat </template>
                </mp-autocomplete>
              </mp-form-control>
            </mp-grid-item>

            <mp-grid-item display="inline-flex" flex-direction="column" gap="6">
              <mp-form-control>
                <mp-form-label
                  >No. transaksi

                  <mp-box @click="isModalTransactionNumberSettingOpen = true">
                    <mp-tooltip>
                      <mp-icon name="settings" ml="1" size="sm" cursor="pointer" />

                      <template #label>
                        <mp-flex direction="column">
                          <mp-text as="span" color="white"
                            >Nomor transaksi akan dihitung secara otomatis oleh sistem. Klik di sini untuk mengatur nomor transaksi.</mp-text
                          >

                          <mp-text as="span" display="inline-block" mt="2" color="white"> Perkiraan nomor: RCA.INV/123/2022 </mp-text>
                        </mp-flex>
                      </template>
                    </mp-tooltip>
                  </mp-box>
                </mp-form-label>
                <mp-input placeholder="RCA.INV/[Auto]/2022" />
              </mp-form-control>

              <mp-form-control>
                <mp-form-label>No. referensi supplier </mp-form-label>
                <mp-input />
              </mp-form-control>

              <mp-form-control>
                <mp-form-label>Gudang</mp-form-label>
                <mp-autocomplete
                  placeholder="Pilih gudang"
                  :data="['Option 1', 'Option 2', 'Option 3']"
                  :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                />
              </mp-form-control>
            </mp-grid-item>

            <mp-grid-item display="inline-flex" flex-direction="column" gap="6">
              <mp-form-control>
                <mp-form-label>No. pemesanan penjualan</mp-form-label>
                <mp-text is-link>Sales Order #100/2022</mp-text>
              </mp-form-control>

              <mp-form-control>
                <mp-form-label>Tag</mp-form-label>
                <mp-input-tag />
              </mp-form-control>

              <mp-form-control>
                <mp-form-label
                  >Pengiriman
                  <mp-text as="span" color="gray.600">(1)</mp-text>
                </mp-form-label>
                <mp-input-tag />
              </mp-form-control>
            </mp-grid-item>
          </mp-grid>

          <mp-box mt="8">
            <mp-flex justify-content="space-between" mb="6" align-items="flex-start">
              <mp-flex
                gap="6"
                :flex-direction="{
                  base: 'column',
                  sm: 'column',
                  md: 'row',
                  lg: 'row',
                }"
              >
                <mp-form-control>
                  <mp-form-label>Mata uang</mp-form-label>
                  <mp-autocomplete :data="['IDR', 'USD', 'SGP']" :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }" />
                </mp-form-control>

                <mp-flex align-items="flex-end">
                  <mp-box>
                    <mp-text
                      >(US)$ 1 = Rp14.418,00.
                      <mp-text is-link text-decoration="underline" as="span" @click.native="isModalUpdateRateOpen = true">Ubah kurs</mp-text>
                    </mp-text>
                    <mp-text color="gray.600">Kurs Bank Indonesia</mp-text>
                  </mp-box>
                </mp-flex>
              </mp-flex>

              <mp-box display="flex" align-items="flex-end" pb="2">
                <mp-checkbox>Harga termasuk pajak</mp-checkbox>
              </mp-box>
            </mp-flex>

            <TableCreateProduct />
          </mp-box>

          <mp-flex
            mt="6"
            gap="6"
            :flex-direction="{
              base: 'column-reverse',
              sm: 'column-reverse',
              md: 'row',
              lg: 'row',
            }"
            justify-content="space-between"
          >
            <mp-box
              :width="{
                base: '100%',
                sm: '100%',
                md: '25%',
                lg: '25%',
              }"
            >
              <mp-flex flex-direction="column">
                <mp-form-control margin-bottom="5">
                  <mp-form-label> Message </mp-form-label>
                  <mp-textarea id="message" placeholder="Message" resize="vertical" />
                </mp-form-control>
              </mp-flex>
              <mp-flex flex-direction="column">
                <mp-form-control margin-bottom="5">
                  <mp-form-label> Memo </mp-form-label>
                  <mp-textarea placeholder="Memo" resize="vertical" />
                </mp-form-control>
              </mp-flex>

              <mp-flex flex-direction="column">
                <mp-form-control margin-bottom="5">
                  <mp-flex align="center" gap="1" mb="1">
                    <mp-text font-weight="semibold" display="inline"> Attachment </mp-text>
                    <mp-tooltip label="File can be excel, Word, PDF, JPG, PNG, or ZIP (10 MB in total)." id="attachment-info" width="209px">
                      <mp-icon name="info" size="sm" />
                    </mp-tooltip>
                  </mp-flex>

                  <mp-upload ref="uploadAttachment" multiple accept=".jpg, .jpeg, .png, .gif, .pdf, .xls, .xlsx, .doc, .docx, .zip" max-width="full" />
                  <mp-text display="inline" font-size="sm" color="gray.600"> File can be document, image, or ZIP </mp-text>
                </mp-form-control>
              </mp-flex>
            </mp-box>

            <mp-box
              :width="{
                base: '100%',
                sm: '100%',
                md: '50%',
                lg: '50%',
              }"
            >
              <mp-box>
                <mp-flex justify="space-between" mb="4">
                  <mp-text font-size="lg" font-weight="semibold"> Subtotal </mp-text>
                  <mp-text font-size="lg" font-weight="semibold"> Rp15.000.000,00 </mp-text>
                </mp-flex>
                <mp-flex justify="space-between" mb="4">
                  <mp-text> Diskon per baris </mp-text>
                  <mp-text> Rp0,00 </mp-text>
                </mp-flex>
                <mp-flex justify="space-between" align-items="center" mb="4">
                  <mp-flex align-items="center" gap="2" width="256px">
                   <mp-tooltip label="Tooltip">
                     <mp-icon name="chevrons-down" size="sm" />
                   </mp-tooltip>
                    <mp-text>Diskon</mp-text>
                    <mp-input-group>
                      <mp-input-left-addon>
                        <mp-box>
                          <mp-popover use-portal>
                            <mp-popover-trigger>
                              <mp-flex as="button" padding-x="2" gap="2" align-items="center">
                                <mp-text font-weight="semibold">%</mp-text>
                                <mp-icon name="chevrons-down" size="sm" />
                              </mp-flex>
                            </mp-popover-trigger>
                            <mp-popover-content
                              max-width="95vw"
                              width="max-content"
                              background-color="white"
                              border-radius="md"
                              border-width="1px"
                              border-color="gray.400"
                              box-shadow="lg"
                            >
                              <mp-popover-list>
                                <mp-popover-list-item is-active> Prosentase (%) </mp-popover-list-item>
                                <mp-popover-list-item> Amount (Rp) </mp-popover-list-item>
                              </mp-popover-list>
                            </mp-popover-content>
                          </mp-popover>
                        </mp-box>
                      </mp-input-left-addon>
                      <mp-input text-align="right" />
                    </mp-input-group>
                  </mp-flex>
                  <mp-text> Rp0,00 </mp-text>
                </mp-flex>
                <mp-flex justify="space-between">
                  <mp-text> PPN </mp-text>
                  <mp-text> (Rp1.500.000,00) </mp-text>
                </mp-flex>

                <mp-divider border-style="dashed" my="6" />

                <mp-flex justify="space-between" mb="4">
                  <mp-text font-size="lg" font-weight="semibold"> Total </mp-text>
                  <mp-text font-size="lg" font-weight="semibold"> Rp0,00 </mp-text>
                </mp-flex>

                <mp-flex mb="5">
                  <mp-box flex="none">
                    <mp-checkbox v-model="rightTotal.pemotongan"> {{ rightTotal.pemotongan ? "" : "Pemotongan" }} </mp-checkbox>
                  </mp-box>
                  <mp-box w="full" v-if="rightTotal.pemotongan">
                    <mp-flex justify-content="space-between" w="full" align-items="center">
                      <mp-flex gap="2">
                        <mp-input width="108px" value="Pemotongan" />
                        <mp-input-group>
                          <mp-input-left-addon>
                            <mp-text px="2" font-weight="semibold"> Rp </mp-text>
                          </mp-input-left-addon>
                          <mp-input width="156px" />
                        </mp-input-group>
                      </mp-flex>

                      <mp-flex align-items="center" gap="2">
                        <mp-text text-align="right"> Rp0,00 </mp-text>
                        <mp-tooltip label="Hapus">
                          <mp-button-icon name="minus-circular" />
                        </mp-tooltip>
                      </mp-flex>
                    </mp-flex>

                    <mp-box mt="4">
                      <mp-autocomplete
                        :data="['Option 1', 'Option 2', 'Option 3']"
                        :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                        placeholder="Pilih akun pemotongan"
                      />

                      <mp-flex justify-content="flex-end" mt="2">
                        <mp-button size="sm" variant="ghost" text-decoration="underline" color="blue.500">
                          <mp-icon name="add-circular" size="sm" variant="duotone" mr="2" />
                          Tambah pemotongan</mp-button
                        >
                      </mp-flex>
                    </mp-box>
                  </mp-box>
                </mp-flex>

                <mp-box>
                  <mp-flex justify-content="space-between" align-items="center">
                    <mp-checkbox v-model="rightTotal.uangMuka"> Uang muka </mp-checkbox>
                    <mp-text v-if="rightTotal.uangMuka">Rp9.050.000,00</mp-text>
                  </mp-flex>

                  <mp-box v-if="rightTotal.uangMuka" mt="5">
                    <mp-autocomplete
                      :data="['Option 1', 'Option 2', 'Option 3']"
                      :content-style="{ minWidth: 'max-content', width: 'full', maxWidth: '90vw' }"
                    />
                  </mp-box>
                </mp-box>

                <mp-divider border-style="dashed" my="6" />

                <mp-flex justify="space-between">
                  <mp-text font-size="xl" font-weight="semibold"> Sisa tagihan </mp-text>
                  <mp-text font-size="xl" font-weight="semibold"> Rp0,00 </mp-text>
                </mp-flex>
              </mp-box>
            </mp-box>
          </mp-flex>

          <mp-flex justify="flex-end" mt="8">
            <mp-button variant="ghost" @click="isModalCancelOpen = true"> Batalkan </mp-button>

            <mp-flex>
              <mp-button variant="solid" border-right-radius="0" @click="handleSave"> Simpan </mp-button>

              <mp-popover id="popover-01" placement="bottom-end">
                <mp-popover-trigger>
                  <mp-button border-left="1px" border-left-color="#314AD8" border-left-radius="0" variant="solid" right-icon="caret-down"> </mp-button>
                </mp-popover-trigger>
                <mp-popover-content max-width="auto" width="auto" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
                  <mp-popover-list>
                    <mp-popover-list-item @click="isModalSendWhatsAppOpen = true"
                      >Simpan dan bagikan via WhatsApp <mp-badge ml="2"> Baru </mp-badge></mp-popover-list-item
                    >
                    <mp-popover-list-item @click="isModalSendEmailOpen = true">Simpan dan bagikan via email</mp-popover-list-item>
                    <mp-popover-list-item @click="handleSave">Simpan dan buat baru</mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-box>

      <ModalPaymentRequirement :is-open="isModalPaymentRequirementOpen" @handleClose="isModalPaymentRequirementOpen = false" />
      <ModalTransactionNumberSetting :isOpen="isModalTransactionNumberSettingOpen" @handleClose="isModalTransactionNumberSettingOpen = false" />
      <ModalUpdateRate :isOpen="isModalUpdateRateOpen" @handleClose="isModalUpdateRateOpen = false" />
      <ModalCancel :isOpen="isModalCancelOpen" @handleClose="isModalCancelOpen = false" />
      <ModalSendEmail :isOpen="isModalSendEmailOpen" @handleClose="isModalSendEmailOpen = false" />
      <ModalSendWhatsApp :isOpen="isModalSendWhatsAppOpen" @handleClose="isModalSendWhatsAppOpen = false" />
      <DrawerAddContact :isOpen="isDrawerAddContactOpen" @close="isDrawerAddContactOpen = false" />
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpFormControl,
  MpFormLabel,
  MpAutocomplete,
  MpGrid,
  MpGridItem,
  MpInput,
  MpCheckbox,
  MpHeading,
  MpDivider,
  MpDatePicker,
  MpTextarea,
  MpIcon,
  MpInputTag,
  MpButton,
  MpText,
  MpTooltip,
  MpUpload,
  MpInputGroup,
  MpInputLeftAddon,
  MpPopover,
  MpPopoverContent,
  MpPopoverTrigger,
  MpPopoverList,
  MpPopoverListItem,
  MpBadge,
  MpButtonIcon,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import {
  SubHeaderContent,
  TableCreateProduct,
  DrawerAddContact,
  ModalPaymentRequirement,
  ModalTransactionNumberSetting,
  ModalUpdateRate,
  ModalCancel,
  ModalSendEmail,
  ModalSendWhatsApp,
} from "./create-parts";

export default {
  name: "SalesDetails",
  components: {
    MpBox,
    MpFlex,
    MpFormControl,
    MpFormLabel,
    MpAutocomplete,
    MpGrid,
    MpGridItem,
    MpInput,
    MpCheckbox,
    MpHeading,
    MpDivider,
    MpDatePicker,
    MpTextarea,
    MpIcon,
    MpInputTag,
    MpButton,
    MpText,
    MpTooltip,
    MpUpload,
    MpInputGroup,
    MpInputLeftAddon,
    MpPopover,
    MpPopoverContent,
    MpPopoverTrigger,
    MpPopoverList,
    MpPopoverListItem,
    MpBadge,
    MpButtonIcon,

    //
    Header,
    Sidebar,
    SubHeader,
    SubHeaderContent,

    // Parts
    TableCreateProduct,
    DrawerAddContact,
    ModalPaymentRequirement,
    ModalTransactionNumberSetting,
    ModalUpdateRate,
    ModalCancel,
    ModalSendEmail,
    ModalSendWhatsApp,
  },
  data() {
    return {
      isSameWithBillingAddress: false,
      currentTabIndex: 0,
      rightTotal: {
        pemotongan: false,
        uangMuka: false,
      },

      // Modal state
      isModalPaymentRequirementOpen: false,
      isModalTransactionNumberSettingOpen: false,
      isModalUpdateRateOpen: false,
      isModalCancelOpen: false,
      isModalSendEmailOpen: false,
      isModalSendWhatsAppOpen: false,
      isDrawerAddContactOpen: false,
    };
  },
  methods: {
    handleSave() {
      this.$toast({
        id: "test",
        variant: "success",
        title: "Transaksi berhasil disimpan",
        position: "top",
        zIndex: 9999, // Custom zIndex
      });
    },
  },
};
</script>
