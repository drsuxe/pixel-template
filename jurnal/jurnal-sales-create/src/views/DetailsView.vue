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
          <!-- Top section -->
          <mp-grid template-columns="repeat(12, 1fr)" gap="6">
            <mp-grid-item col-span="4">
              <DisplayContent title="Requestor">
                <mp-text is-link>Jaka Permadi</mp-text>
              </DisplayContent>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <DisplayContent title="Email">
                <mp-flex gap="2" flex-wrap="wrap">
                  <mp-tag variant="gray" size="sm"> Jaka@mekari.com </mp-tag>
                  <mp-tag variant="gray" size="sm"> Jakapermadi@mekari.com </mp-tag>
                </mp-flex>
              </DisplayContent>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <mp-flex direction="column" align-items="flex-end">
                <mp-heading font-size="xl">Sisa tagihan Rp12.500.000,00</mp-heading>
                <ModalJournalEntry />
                <PopoverButtonReturned />
                <mp-flex gap="2" flex-wrap="wrap" mt="3">
                  <PopoverTag label="Memiliki eFaktur" trigger="hover">
                    <mp-flex direction="column" gap="2">
                      <mp-text font-weight="semibold">Digunakan sebagai tukar faktur</mp-text>
                      <mp-text>Faktur ini digabungkan dengan faktur lain pada 24/05/2022 oleh Dini Damayanti</mp-text>
                      <mp-text is-link>Lihat faktur</mp-text>
                    </mp-flex>
                  </PopoverTag>
                  <PopoverTag label="Transaksi berulang" trigger="hover">
                    <mp-flex direction="column" gap="2">
                      <mp-text font-weight="semibold">Transaksi ini diatur berulang</mp-text>
                      <mp-text>Periode pengulangan: 1 bulan Akhir pengulangan: tidak pernah </mp-text>
                      <mp-text is-link>Lihat riwayat pengulangan </mp-text>
                    </mp-flex>
                  </PopoverTag>
                  <PopoverTag label=" Tukar faktur" trigger="hover">
                    <mp-flex direction="column" gap="2">
                      <mp-text font-weight="semibold">Pembayaran berhasil dikembalikan</mp-text>
                      <mp-text>Pengembalian pembayaran dilakukan oleh John Wick pada 25/03/2021.</mp-text>
                      <mp-text is-link>Lihat pengembalian pembayaran</mp-text>
                    </mp-flex>
                  </PopoverTag>
                </mp-flex>
              </mp-flex>
            </mp-grid-item>
          </mp-grid>
          <mp-divider border-style="dashed" my="8" />

          <!-- Center section -->
          <mp-grid template-columns="repeat(12, 1fr)" gap="6">
            <mp-grid-item col-span="4">
              <mp-stack gap="2">
                <DisplayContent title="Alamat penagihan">
                  <mp-text> Midplaza 2, No 4, RT 00001, RW 00018 Karet Tengsin, Tanah Abang, 10220, Daerah Khusus Ibukota Jakarta, Indonesia </mp-text>
                </DisplayContent>

                <DisplayContent title="Alamat pengiriman">
                  <mp-text>
                    Perum Shoji Land EF-17, Cluster Etsu Garden, RT 00001 RW 00020, Sambiroto, Karangtanjung, Kecamatan Candi, Kabupaten Sidoarjo, Provinsi Jawa
                    Timur, Indonesia
                  </mp-text>
                </DisplayContent>
              </mp-stack>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <mp-stack gap="2">
                <DisplayContent title="Tgl. transaksi">
                  <mp-text> 02/12/2022 </mp-text>
                </DisplayContent>

                <DisplayContent title="Tgl. jatuh tempo">
                  <mp-text> 02/01/2023 </mp-text>
                </DisplayContent>

                <DisplayContent title="Syarat pembayaran">
                  <mp-text> Net 30 </mp-text>
                </DisplayContent>
              </mp-stack>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <mp-stack gap="2">
                <DisplayContent title="No Transaksi">
                  <mp-text> SI - MKR/01/134/123 </mp-text>
                </DisplayContent>

                <DisplayContent title="No Referensi">
                  <mp-text> 666666 </mp-text>
                </DisplayContent>

                <DisplayContent title="No SO">
                  <mp-text is-link> SO-100129 </mp-text>
                </DisplayContent>

                <DisplayContent title="Gudang">
                  <mp-text is-link> Mall Taman Anggrek </mp-text>
                </DisplayContent>

                <DisplayContent title="Tag">
                  <mp-flex gap="2" flex-wrap="wrap">
                    <mp-tag variant="gray" size="sm"> Jakarta </mp-tag>
                    <mp-tag variant="gray" size="sm"> Brebes </mp-tag>
                    <mp-tag variant="gray" size="sm"> Solo </mp-tag>
                    <mp-tag variant="gray" size="sm"> Wonogiri </mp-tag>
                    <mp-tag variant="gray" size="sm"> Pacitan </mp-tag>
                    <mp-tag variant="gray" size="sm"> Nusa tenggara barat </mp-tag>
                    <mp-tag variant="gray" size="sm"> Jogja </mp-tag>
                    <mp-tag variant="gray" size="sm"> Pacitan </mp-tag>
                    <mp-tag variant="gray" size="sm"> Blitar </mp-tag>
                    <mp-tag variant="gray" size="sm"> Bali </mp-tag>
                  </mp-flex>
                </DisplayContent>
              </mp-stack>
            </mp-grid-item>
          </mp-grid>

          <!-- Table Product -->
          <TableProduct />
          <mp-divider border-style="dashed" my="6" />

          <!-- Left total and Right total -->
          <mp-grid template-columns="repeat(3, 1fr)" gap="6">
            <mp-grid-item col-span="1">
              <mp-stack gap="2">
                <DisplayContent title="Pesan">
                  <mp-text>
                    Tolong segera diproses ya pak, karna butuh dikirim ke klien karna sudah berbulan bulan ini kita belum kirim ke mereka, jadi saya mohon untuk
                    segera dikirimkan penagihan pembelia.
                  </mp-text>
                </DisplayContent>
                <DisplayContent title="Memo">
                  <mp-text> Terusan dari incoive 12/11/2022 </mp-text>
                </DisplayContent>

                <mp-box>
                  <mp-text color="gray.600" mb="2"> Lampiran (2) </mp-text>
                  <mp-stack spacing="2" mb="2">
                    <mp-flex>
                      <mp-box flex="none">
                        <mp-icon name="image-document" />
                      </mp-box>
                      <mp-box flex="1 1 0%" pl="3">
                        <mp-text is-truncated is-link line-height="md" @click.native="isModalAttachmentPreviewOpen = true"> AemZaht.png </mp-text>
                        <mp-text color="gray.400" line-height="md"> 1.3 MB </mp-text>
                      </mp-box>
                      <mp-box flex="none">
                        <mp-tooltip label="Download" id="download-01">
                          <mp-button-icon name="download" @click="downloadImage('https://i.imgur.com/AemZaht.png')" />
                        </mp-tooltip>
                      </mp-box>
                    </mp-flex>
                    <mp-flex>
                      <mp-box flex="none">
                        <mp-icon name="image-document" />
                      </mp-box>
                      <mp-box flex="1 1 0%" pl="3">
                        <mp-text is-truncated is-link line-height="md" @click.native="isModalAttachmentPreviewOpen = true"> AemZaht.png </mp-text>
                        <mp-text color="gray.400" line-height="md"> 1.3 MB </mp-text>
                      </mp-box>
                      <mp-box flex="none">
                        <mp-tooltip label="Download" id="download-02">
                          <mp-button-icon name="download" @click="downloadImage('https://i.imgur.com/AemZaht.png')" />
                        </mp-tooltip>
                      </mp-box>
                    </mp-flex>
                  </mp-stack>
                </mp-box>
              </mp-stack>
            </mp-grid-item>

            <mp-grid-item col-start="3" col-span="4">
              <mp-box>
                <mp-flex justify="space-between">
                  <mp-text font-size="lg" font-weight="semibold"> Subtotal </mp-text>
                  <mp-text font-size="lg" font-weight="semibold"> Rp15.000.000,00 </mp-text>
                </mp-flex>

                <mp-flex justify="space-between" mt="2">
                  <mp-text color="gray.600"> Diskon perbaris </mp-text>
                  <mp-text color="gray.600"> Rp250.000,00 </mp-text>
                </mp-flex>

                <mp-flex justify="space-between" mt="2">
                  <mp-text color="gray.600"> Diskon (10%) </mp-text>
                  <mp-text color="gray.600"> Rp15.000.000,00 </mp-text>
                </mp-flex>

                <mp-flex justify="space-between" mt="2">
                  <mp-text color="gray.600"> PPN 10.0% </mp-text>
                  <mp-text color="gray.600"> Rp100.000,00 </mp-text>
                </mp-flex>

                <mp-flex justify="space-between" mt="2">
                  <mp-text color="gray.600"> Ongkos Kirim </mp-text>
                  <mp-text color="gray.600"> Rp0,00 </mp-text>
                </mp-flex>
              </mp-box>
              <mp-divider border-style="dashed" my="6" />

              <mp-box>
                <mp-flex justify="space-between">
                  <mp-text font-size="lg" font-weight="semibold"> Total </mp-text>
                  <mp-text font-size="lg" font-weight="semibold"> Rp13.500.000,00 </mp-text>
                </mp-flex>

                <mp-flex justify="space-between" mt="2">
                  <mp-text color="gray.600"> Pemotongan 1 (10%) </mp-text>
                  <mp-text color="gray.600"> Rp130.000,00 </mp-text>
                </mp-flex>

                <mp-flex justify="space-between" mt="2">
                  <mp-text color="gray.600"> Pemotongan 2 (10%) </mp-text>
                  <mp-text color="gray.600"> Rp130.000,00 </mp-text>
                </mp-flex>

                <mp-flex justify="space-between" mt="2">
                  <mp-text font-size="lg" font-weight="semibold"> Jumlah terbayar </mp-text>
                  <mp-text font-size="lg" font-weight="semibold"> Rp1.000.000,00 </mp-text>
                </mp-flex>
              </mp-box>
              <mp-divider border-style="dashed" my="6" />

              <mp-box>
                <mp-flex justify="space-between">
                  <mp-text font-size="xl" font-weight="semibold"> Sisa tagihan </mp-text>
                  <mp-text font-size="xl" font-weight="semibold"> Rp12.500.000,00 </mp-text>
                </mp-flex>
              </mp-box>
            </mp-grid-item>
          </mp-grid>
          <mp-box mt="8">
            <mp-text @click.native="isModalAuditOpen = true" is-link>Terakhir diubah oleh sistem pada 30 Nov 2023, 11:00 (GMT+7)</mp-text>
          </mp-box>
          <mp-divider border-style="dashed" my="6" />

          <!-- Daftar pembayaran & Pengiriman -->
          <mp-box>
            <mp-tabs :index="currentTabIndex" is-manual @change.self="handleChangeTab">
              <mp-tab-list>
                <mp-tab>Daftar pembayaran</mp-tab>
                <mp-tab>Pengiriman</mp-tab>
              </mp-tab-list>
            </mp-tabs>

            <TablePaymentList v-if="currentTabIndex === 0" />
            <TableDelivery v-if="currentTabIndex === 1" />
          </mp-box>

          <!-- Bottom action sets -->
          <mp-flex justify="space-between" py="6" background-color="white" pb="56px">
            <mp-box>
              <mp-button variant="ghost" @click="isModalDeleteThisRequestOpen = true"> Hapus </mp-button>
            </mp-box>
            <mp-box>
              <mp-flex gap="2">
                <mp-button variant="ghost" @click="handleEditPurchaseRequest"> Ubah </mp-button>
                <mp-popover>
                  <mp-popover-trigger>
                    <mp-button variant="outline" right-icon="caret-down"> Cetak & bagikan </mp-button>
                  </mp-popover-trigger>
                  <mp-popover-content width="max-content" max-width="90vw" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
                    <mp-popover-list>
                      <mp-box width="full" px="3" py="2">
                        <mp-text color="gray.600" text-align="left" font-size="sm"> C E T A K </mp-text>
                      </mp-box>
                      <mp-popover-list-item @click="isModalPrintPdfOpen = true">Lihat template faktur</mp-popover-list-item>
                      <mp-popover-list-item>Lihat surat jalan</mp-popover-list-item>

                      <mp-box width="full" px="3" py="2">
                        <mp-text color="gray.600" text-align="left" font-size="sm"> C E T A K </mp-text>
                      </mp-box>
                      <mp-popover-list-item @click="isModalSendWhatsAppOpen = true"
                        >Kirim via WhatsApp

                        <mp-badge variant-color="blue" ml="2">New</mp-badge>
                      </mp-popover-list-item>
                      <mp-popover-list-item @click="isModalSendEmailOpen = true">Kirim via email</mp-popover-list-item>
                      <mp-popover-list-item @click="isModalGetJournalLinkOpen = true">Dapatkan link faktur</mp-popover-list-item>
                    </mp-popover-list>
                  </mp-popover-content>
                </mp-popover>

                <mp-popover>
                  <mp-popover-trigger>
                    <mp-button variant="outline" right-icon="caret-down"> Cetak dot matrix </mp-button>
                  </mp-popover-trigger>
                  <mp-popover-content max-width="168px" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
                    <mp-popover-list>
                      <mp-popover-list-item @click="isModalPrintInvoiceDotMatrixOpen = true">Faktur</mp-popover-list-item>
                      <mp-popover-list-item>Receipt</mp-popover-list-item>
                      <mp-popover-list-item>Surat jalan</mp-popover-list-item>
                    </mp-popover-list>
                  </mp-popover-content>
                </mp-popover>

                <mp-popover>
                  <mp-popover-trigger>
                    <mp-button variant="solid" right-icon="caret-down"> Action </mp-button>
                  </mp-popover-trigger>
                  <mp-popover-content
                    min-width="max-content"
                    width="max-content"
                    max-width="90vw"
                    bg="white"
                    rounded="md"
                    shadow="lg"
                    border-width="1px"
                    border-color="gray.400"
                  >
                    <mp-popover-list>
                      <mp-popover-list-item @click="isModalDuplicateTransactionOpen = true"> Duplikat transaksi </mp-popover-list-item>
                      <mp-popover-list-item @click="isModalRecurringTransactionOpen = true"> Atur transaksi berulang </mp-popover-list-item>
                      <mp-popover-list-item> Buat faktur pro forma </mp-popover-list-item>
                      <mp-popover-list-item> Terima pembayaran </mp-popover-list-item>
                      <mp-popover-list-item @click="isModalCloseSalesOrderOpen = true"> Tutup pemesanan </mp-popover-list-item>
                      <mp-popover-list-item> Retur penjualan </mp-popover-list-item>
                    </mp-popover-list>
                  </mp-popover-content>
                </mp-popover>
              </mp-flex>
            </mp-box>
          </mp-flex>

          <!-- Modal -->
          <ModalAudit :is-open="isModalAuditOpen" @handleClose="isModalAuditOpen = false" />
          <ModalDeleteThisRequest :is-open="isModalDeleteThisRequestOpen" @handleClose="isModalDeleteThisRequestOpen = false" />
          <ModalPrintPdf :is-open="isModalPrintPdfOpen" @handleClose="isModalPrintPdfOpen = false" />
          <ModalAttachmentPreview
            file-name="AemZaht.png"
            extension="png"
            url="https://i.imgur.com/AemZaht.png"
            :is-open="isModalAttachmentPreviewOpen"
            @handleClose="isModalAttachmentPreviewOpen = false"
          />
          <ModalSendWhatsApp :is-open="isModalSendWhatsAppOpen" @handleClose="isModalSendWhatsAppOpen = false" />
          <ModalSendEmail :is-open="isModalSendEmailOpen" @handleClose="isModalSendEmailOpen = false" />
          <ModalGetJournalLink :is-open="isModalGetJournalLinkOpen" @handleClose="isModalGetJournalLinkOpen = false" />
          <ModalDuplicateTransaction :is-open="isModalDuplicateTransactionOpen" @handleClose="isModalDuplicateTransactionOpen = false" />
          <ModalRecurringTransaction :is-open="isModalRecurringTransactionOpen" @handleClose="isModalRecurringTransactionOpen = false" />
          <ModalCreditMemo :is-open="isModalCreditMemoOpen" @handleClose="isModalCreditMemoOpen = false" />
          <ModalEmailConfirmation :is-open="isModalEmailConfirmationOpen" @handleClose="isModalEmailConfirmationOpen = false" />
          <ModalCloseSalesOrder :is-open="isModalCloseSalesOrderOpen" @handleClose="isModalCloseSalesOrderOpen = false" />
          <ModalPrintInvoiceDotMatrix :is-open="isModalPrintInvoiceDotMatrixOpen" @handleClose="isModalPrintInvoiceDotMatrixOpen = false" />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpGrid,
  MpGridItem,
  MpText,
  MpDivider,
  MpButton,
  MpButtonIcon,
  MpHeading,
  MpBadge,
  MpIcon,
  MpStack,
  MpTag,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpTooltip,
  MpTabs,
  MpTabList,
  MpTab,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import {
  DisplayContent,
  SubHeaderContent,
  TableProduct,
  TablePaymentList,
  TableDelivery,
  ModalJournalEntry,
  PopoverTag,
  PopoverButtonReturned,
  ModalSendWhatsApp,
  ModalSendEmail,
  ModalDeleteThisRequest,
  ModalPrintPdf,
  ModalAudit,
  ModalAttachmentPreview,
  ModalGetJournalLink,
  ModalDuplicateTransaction,
  ModalRecurringTransaction,
  ModalCreditMemo,
  ModalEmailConfirmation,
  ModalCloseSalesOrder,
  ModalPrintInvoiceDotMatrix,
} from "./details-parts";

export default {
  name: "SalesDetails",
  components: {
    MpBox,
    MpFlex,
    MpGrid,
    MpGridItem,
    MpText,
    MpDivider,
    MpButton,
    MpButtonIcon,
    MpHeading,
    MpBadge,
    MpIcon,
    MpStack,
    MpTag,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpTooltip,
    MpTabs,
    MpTabList,
    MpTab,

    //
    Header,
    Sidebar,
    SubHeader,
    SubHeaderContent,
    TableProduct,
    TablePaymentList,
    TableDelivery,
    ModalAudit,
    ModalDeleteThisRequest,
    ModalPrintPdf,
    ModalAttachmentPreview,
    ModalSendWhatsApp,
    ModalSendEmail,
    ModalGetJournalLink,
    ModalDuplicateTransaction,
    ModalRecurringTransaction,
    ModalCreditMemo,
    ModalEmailConfirmation,
    ModalCloseSalesOrder,
    DisplayContent,
    ModalJournalEntry,
    PopoverTag,
    PopoverButtonReturned,
    ModalPrintInvoiceDotMatrix,
  },
  data() {
    return {
      currentTabIndex: 0,

      //
      isModalAuditOpen: false,
      isModalDeleteThisRequestOpen: false,
      isModalPrintPdfOpen: false,
      isModalAttachmentPreviewOpen: false,
      isModalSendWhatsAppOpen: false,
      isModalSendEmailOpen: false,
      isModalGetJournalLinkOpen: false,
      isModalDuplicateTransactionOpen: false,
      isModalRecurringTransactionOpen: false,
      isModalCreditMemoOpen: false, // Flag from backend
      isModalEmailConfirmationOpen: true,
      isModalCloseSalesOrderOpen: false,
      isModalPrintInvoiceDotMatrixOpen: false,
    };
  },
  methods: {
    handleEditPurchaseRequest() {
      this.$router.push("/edit");
    },
    async downloadImage(imageSrc) {
      const image = await fetch(imageSrc);
      const imageBlog = await image.blob();
      const imageURL = URL.createObjectURL(imageBlog);

      const link = document.createElement("a");
      link.href = imageURL;
      link.download = "file";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    handleChangeTab(index) {
      this.currentTabIndex = index;
    },
  },
};
</script>
