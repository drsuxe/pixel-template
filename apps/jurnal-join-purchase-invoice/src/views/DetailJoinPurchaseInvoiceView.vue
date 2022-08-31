<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <mp-flex as="header" justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
          <mp-box>
            <mp-text is-link font-size="sm" color="blue.400" text-decoration="underline">Transaksi pembelian</mp-text>
            <mp-flex align="center">
              <mp-heading as="h1" font-size="2xl" font-weight="bold"> Tukar Faktur #0001 </mp-heading>
              <mp-badge ml="2" variant="subtle" variant-color="orange"> Open </mp-badge>
            </mp-flex>
          </mp-box>
        </mp-flex>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-heading font-size="lg" mb="3">Detail Tukar Faktur</mp-heading>
          <mp-grid template-columns="repeat(12, 1fr)" gap="6">
            <mp-grid-item col-span="4">
              <mp-grid template-columns="repeat(12, 1fr)">
                <mp-grid-item col-span="5">
                  <mp-text color="gray.600">Requestor</mp-text>
                </mp-grid-item>
                <mp-grid-item col-span="7">
                  <mp-text is-link>PT Stable guys</mp-text>
                </mp-grid-item>
              </mp-grid>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <mp-grid template-columns="repeat(12, 1fr)">
                <mp-grid-item col-span="5">
                  <mp-text color="gray.600">Urgency</mp-text>
                </mp-grid-item>
                <mp-grid-item col-span="7">
                  <mp-text>stambleguys@mekari.com</mp-text>
                </mp-grid-item>
              </mp-grid>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <mp-flex direction="column" text-align="right">
                <mp-text color="gray.600">Total tukar faktur</mp-text>
                <mp-heading>Rp17.000.000</mp-heading>
              </mp-flex>
            </mp-grid-item>
          </mp-grid>

          <mp-divider border-style="dashed" my="8" />

          <mp-grid template-columns="repeat(12, 1fr)" gap="6">
            <mp-grid-item col-span="4">
              <mp-stack spacing="4">
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Nomor transaksi</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>Tukar Faktur #0001</mp-text>
                  </mp-grid-item>
                </mp-grid>
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Alamat penagihan</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>Jalan damai no 18, Sariharjo, Sleman, Yogyakarta</mp-text>
                  </mp-grid-item>
                </mp-grid>
              </mp-stack>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <mp-stack spacing="4">
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Tanggal transaksi</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>19/04/2022</mp-text>
                  </mp-grid-item>
                </mp-grid>
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Tanggal jatuh tempo</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>20/04/2022</mp-text>
                  </mp-grid-item>
                </mp-grid>
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Syarat pembayaran</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>Custom</mp-text>
                  </mp-grid-item>
                </mp-grid>
              </mp-stack>
            </mp-grid-item>
          </mp-grid>

          <mp-box mt="8">
            <mp-table-container max-height="calc(75vh)" overflow-y="auto">
              <mp-table>
                <mp-table-head is-fixed>
                  <mp-table-row>
                    <mp-table-cell as="th" scope="col" width="25%">Faktur pembelian</mp-table-cell>
                    <mp-table-cell as="th" scope="col" width="25%">Deskripsi</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Tanggal jatuh tempo</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Status</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Jumlah tagihan</mp-table-cell>
                    <mp-table-cell as="th" scope="col">Sisa tagihan </mp-table-cell>
                  </mp-table-row>
                </mp-table-head>
                <mp-table-body>
                  <mp-table-row v-for="index in 20" :key="index">
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text is-link> Purchase Invoice #0001 </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <TextElipsisCollapsible :id="`detail-${index}`">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus in elementum quis, euismod at lacus. Vivamus nec
                        accumsan est. Donec magna eros, volutpat id dui vitae, sagittis tempus ex. Vestibulum volutpat commodo sollicitudin. Morbi vitae nibh ut
                        dui molestie volutpat vitae eu ante. Nulla eget dictum dolor. Pellentesque consequat velit tellus, sit amet fringilla augue accumsan eu.
                        Suspendisse potenti. Integer laoreet quam ac nisl eleifend rhoncus. Maecenas in interdum eros. Cras iaculis consequat laoreet. In odio
                        ligula, ultrices eget euismod nec, aliquet at sapien. Ut molestie mauris vulputate, dignissim lacus non, tincidunt neque. Phasellus
                        porttitor accumsan lectus a venenatis.
                      </TextElipsisCollapsible>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text> 20/04/2022 </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-badge variant="subtle" variant-color="orange">Open</mp-badge>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text> Rp10.000.000 </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text> Rp10.000.000 </mp-text>
                    </mp-table-cell>
                  </mp-table-row>
                </mp-table-body>
              </mp-table>
            </mp-table-container>

            <mp-box mt="6">
              <mp-text color="gray.600">Menampilkan 3 dari 3 faktur</mp-text>
            </mp-box>
          </mp-box>

          <mp-divider border-style="dashed" my="6" />

          <mp-grid template-columns="repeat(3, 1fr)" gap="6">
            <mp-grid-item col-span="1">
              <mp-stack spacing="2">
                <mp-flex>
                  <mp-flex flex="none" width="150px">
                    <mp-text color="gray.600"> Message </mp-text>
                  </mp-flex>
                  <mp-text line-height="md"> Pak minta segera di proses buat ngerjain editing buat Imlek </mp-text>
                </mp-flex>
                <mp-flex>
                  <mp-flex flex="none" width="150px">
                    <mp-text color="gray.600"> Memo </mp-text>
                  </mp-flex>
                  <mp-text> Nomor 20/09/2022 </mp-text>
                </mp-flex>
                <mp-box>
                  <mp-text color="gray.600" mb="2"> Attachment (2) </mp-text>
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

              <mp-box mt="8">
                <mp-text @click.native="isModalAuditOpen = true" font-size="sm" is-link>Last modified by system on 02 February 2022 at 12:13 (GMT+7)</mp-text>
              </mp-box>
            </mp-grid-item>

            <mp-grid-item col-start="3" col-span="4">
              <mp-box padding="4" border="1px" border-color="gray.100" rounded="md">
                <mp-flex justify="space-between">
                  <mp-text font-weight="semibold">Total sisa tagihan</mp-text>
                  <mp-text font-weight="semibold">Rp17.000.000</mp-text>
                </mp-flex>
              </mp-box>
            </mp-grid-item>
          </mp-grid>
        </mp-box>

        <mp-flex id="bottom-action" justify="space-between" py="5" px="6" background-color="white" border-top="1px" border-top-color="gray.100" pb="56px">
          <mp-box>
            <mp-button variant="ghost" @click="isModalDeleteThisRequestOpen = true"> Delete </mp-button>
          </mp-box>
          <mp-box>
            <mp-flex gap="2">
              <mp-button variant="ghost" @click="handleEditPurchaseRequest"> Edit </mp-button>
              <mp-button variant="outline" @click="isModalPrintPdfOpen = true"> Print & preview </mp-button>
              <mp-button variant="solid"> Terima pembayaran </mp-button>
            </mp-flex>
          </mp-box>
        </mp-flex>

        <ModalDelete :is-open="isModalDeleteThisRequestOpen" @handleClose="isModalDeleteThisRequestOpen = false" />
        <ModalPrintPdf :is-open="isModalPrintPdfOpen" @handleClose="isModalPrintPdfOpen = false" />
        <ModalAttachmentPreview
          file-name="AemZaht.png"
          extension="png"
          url="https://i.imgur.com/AemZaht.png"
          :is-open="isModalAttachmentPreviewOpen"
          @handleClose="isModalAttachmentPreviewOpen = false"
        />
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
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpButton,
  MpButtonIcon,
  MpHeading,
  MpBadge,
  MpIcon,
  MpStack,
  MpTooltip,
  MpTableContainer,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ModalDelete from "./ModalDelete.vue";
import ModalPrintPdf from "./ModalPrintPdf.vue";
import ModalAttachmentPreview from "./ModalAttachmentPreview.vue";
import { TextElipsisCollapsible } from "../components/TextElipsisCollapsible";

export default {
  name: "SalesIndex",
  components: {
    MpBox,
    MpFlex,
    MpGrid,
    MpGridItem,
    MpText,
    MpDivider,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpButton,
    MpButtonIcon,
    MpHeading,
    MpBadge,
    MpIcon,
    MpStack,
    MpTooltip,
    MpTableContainer,
    //
    Header,
    Sidebar,
    ModalDelete,
    ModalPrintPdf,
    ModalAttachmentPreview,
    TextElipsisCollapsible,
  },
  data() {
    return {
      isModalAuditOpen: false,
      isModalDeleteThisRequestOpen: false,
      isModalRejectThisRequestOpen: false,
      isModalPrintPdfOpen: false,
      isModalAttachmentPreviewOpen: false,
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
  },
};
</script>

<style scoped>
table {
  table-layout: fixed;
}

tbody > tr {
  white-space: normal;
}

td {
  word-wrap: break-word;
  height: auto;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}
</style>
