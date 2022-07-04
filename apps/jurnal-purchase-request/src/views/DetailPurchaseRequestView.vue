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
              <mp-heading as="h1" font-size="2xl" font-weight="bold"> Buat permintaan pembelian </mp-heading>
              <mp-badge ml="2" variant-color="orange"> Belum dibayar </mp-badge>
            </mp-flex>
          </mp-box>
          <mp-flex align-items="center">
            <mp-button-group>
              <mp-tooltip id="sebelumnya" label="Sebelumnya">
                <mp-button variant="outline" left-icon="chevrons-left" mr="2"></mp-button>
              </mp-tooltip>
              <mp-tooltip id="selanjutnya" label="Selanjutnya">
                <mp-button variant="outline" right-icon="chevrons-right"></mp-button>
              </mp-tooltip>
            </mp-button-group>
          </mp-flex>
        </mp-flex>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-grid template-columns="repeat(12, 1fr)" gap="6">
            <mp-grid-item col-span="4">
              <mp-grid template-columns="repeat(12, 1fr)">
                <mp-grid-item col-span="5">
                  <mp-text color="gray.600">Requestor</mp-text>
                </mp-grid-item>
                <mp-grid-item col-span="7">
                  <mp-text>Bregga Tedy</mp-text>
                </mp-grid-item>
              </mp-grid>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <mp-grid template-columns="repeat(12, 1fr)">
                <mp-grid-item col-span="5">
                  <mp-text color="gray.600">Urgency</mp-text>
                </mp-grid-item>
                <mp-grid-item col-span="7">
                  <mp-flex align="center">
                    <mp-icon name="priority-high" mr="2" />
                    <mp-text>Tinggi</mp-text>
                  </mp-flex>
                </mp-grid-item>
              </mp-grid>
            </mp-grid-item>
          </mp-grid>

          <mp-divider border-style="dashed" my="8" />

          <mp-grid template-columns="repeat(12, 1fr)" gap="6">
            <mp-grid-item col-span="4">
              <mp-stack spacing="4">
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Approving staff</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>Jaka Permadi</mp-text>
                  </mp-grid-item>
                </mp-grid>
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Approving email</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>jaka.permadi@mekari.com</mp-text>
                  </mp-grid-item>
                </mp-grid>
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Transaction date</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>31/01/2022</mp-text>
                  </mp-grid-item>
                </mp-grid>
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Due date</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>15/02/2022</mp-text>
                  </mp-grid-item>
                </mp-grid>
              </mp-stack>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <mp-stack spacing="4">
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Vendor name</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>Alnect</mp-text>
                  </mp-grid-item>
                </mp-grid>
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Vendor email</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>alnect@gmail.com</mp-text>
                  </mp-grid-item>
                </mp-grid>
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Vendor address</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>Jalan laksda adisucipto no 70, Sarimulyo, Banguntapan, Bantul, Yogyakarta, 66281</mp-text>
                  </mp-grid-item>
                </mp-grid>
              </mp-stack>
            </mp-grid-item>
            <mp-grid-item col-span="4">
              <mp-stack spacing="4">
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Related budget year</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-text>2021</mp-text>
                  </mp-grid-item>
                </mp-grid>
                <mp-grid template-columns="repeat(12, 1fr)">
                  <mp-grid-item col-span="5">
                    <mp-text color="gray.600">Tag</mp-text>
                  </mp-grid-item>
                  <mp-grid-item col-span="7">
                    <mp-flex gap="2">
                      <mp-tag variant="gray" size="sm"> Divisi IT </mp-tag>
                      <mp-tag variant="gray" size="sm"> Divisi Sales </mp-tag>
                    </mp-flex>
                  </mp-grid-item>
                </mp-grid>
              </mp-stack>
            </mp-grid-item>
          </mp-grid>

          <mp-box mt="8">
            <mp-box max-height="calc(75vh)" overflow-y="auto">
              <mp-table>
                <mp-table-head isFixed>
                  <mp-table-row>
                    <mp-table-cell as="th" scope="col" width="25%">Product</mp-table-cell>
                    <mp-table-cell as="th" scope="col" width="45%">Description</mp-table-cell>
                    <mp-table-cell as="th" scope="col" width="5%">Quantity</mp-table-cell>
                    <mp-table-cell as="th" scope="col" width="15%">Unit</mp-table-cell>
                  </mp-table-row>
                </mp-table-head>
                <mp-table-body>
                  <mp-table-row v-for="(product, index) in products" :key="product.id">
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text is-link> {{ product.product }} </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <TextElipsisCollapsible :id="`detail-${index}`">
                        {{ product.description }}
                      </TextElipsisCollapsible>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text> {{ product.quantity }} </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td" scope="row" vertical-align="top">
                      <mp-text> {{ product.unit }} </mp-text>
                    </mp-table-cell>
                  </mp-table-row>
                </mp-table-body>
              </mp-table>
            </mp-box>

            <mp-box mt="6">
              <mp-text color="gray.600">Showing 4 of 4 products</mp-text>
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
                        <mp-icon name="pdf-document" />
                      </mp-box>
                      <mp-box flex="1 1 0%" pl="3">
                        <mp-text is-truncated is-link line-height="md"> the_attachment-is-to...ike_this.pdf </mp-text>
                        <mp-text color="gray.400" line-height="md"> 1.3 MB </mp-text>
                      </mp-box>
                      <mp-box flex="none">
                        <mp-tooltip label="Download" id="download-01">
                          <mp-button-icon name="download" />
                        </mp-tooltip>
                      </mp-box>
                    </mp-flex>
                    <mp-flex>
                      <mp-box flex="none">
                        <mp-icon name="word-document" />
                      </mp-box>
                      <mp-box flex="1 1 0%" pl="3">
                        <mp-text is-truncated is-link line-height="md"> the_attachment-is-to...ike_this.pdf </mp-text>
                        <mp-text color="gray.400" line-height="md"> 1.3 MB </mp-text>
                      </mp-box>
                      <mp-box flex="none">
                        <mp-tooltip label="Download" id="download-02">
                          <mp-button-icon name="download" />
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
                  <mp-text font-weight="semibold">Total Product</mp-text>
                  <mp-text font-weight="semibold">2 Barang</mp-text>
                </mp-flex>
              </mp-box>
            </mp-grid-item>
          </mp-grid>

          <mp-divider border-style="dashed" my="6" />

          <mp-box>
            <mp-heading as="h3" fontSize="lg">Riwayat</mp-heading>
            <mp-table>
              <mp-table-head>
                <mp-table-row>
                  <mp-table-cell as="th" scope="col">Date</mp-table-cell>
                  <mp-table-cell as="th" scope="col">Number</mp-table-cell>
                  <mp-table-cell as="th" scope="col">Status</mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row">15/02/2022</mp-table-cell>
                  <mp-table-cell as="td" scope="row">PO #0002</mp-table-cell>
                  <mp-table-cell as="td" scope="row">
                    <mp-badge variant="subtle" variant-color="orange"> Belum dibayar </mp-badge>
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
          </mp-box>
        </mp-box>

        <mp-flex id="bottom-action" justify="space-between" py="5" px="6" background-color="white" border-top="1px" border-top-color="gray.100" pb="56px">
          <mp-box>
            <mp-button variant="ghost" @click="isModalDeleteThisRequestOpen = true"> Delete </mp-button>
          </mp-box>
          <mp-box>
            <mp-flex gap="2">
              <mp-button variant="ghost" @click="handleEditPurchaseRequest"> Edit </mp-button>
              <mp-popover>
                <mp-popover-trigger>
                  <mp-button variant="outline" right-icon="caret-down"> Print & preview </mp-button>
                </mp-popover-trigger>
                <mp-popover-content max-width="168px" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
                  <mp-popover-list>
                    <mp-popover-list-item @click="isModalPrintPdfOpen = true"> Lihat template </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>

              <mp-popover>
                <mp-popover-trigger>
                  <mp-button variant="solid" right-icon="caret-down"> Action </mp-button>
                </mp-popover-trigger>
                <mp-popover-content max-width="164px" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
                  <mp-popover-list>
                    <mp-popover-list-item> Buat pemesanan </mp-popover-list-item>
                    <mp-popover-list-item @click="isModalRejectThisRequestOpen = true"> Tolak permintaan </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-flex>
          </mp-box>
        </mp-flex>

        <ModalAudit :is-open="isModalAuditOpen" @handleClose="isModalAuditOpen = false" />
        <ModalDeleteThisRequest :is-open="isModalDeleteThisRequestOpen" @handleClose="isModalDeleteThisRequestOpen = false" />
        <ModalRejectThisRequest :is-open="isModalRejectThisRequestOpen" @handleClose="isModalRejectThisRequestOpen = false" />
        <ModalPrintPdf :is-open="isModalPrintPdfOpen" @handleClose="isModalPrintPdfOpen = false" />
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
  MpButtonGroup,
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
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ModalDeleteThisRequest from "./ModalDeleteThisRequest.vue";
import ModalRejectThisRequest from "./ModalRejectThisRequest.vue";
import ModalPrintPdf from "./ModalPrintPdf.vue";
import ModalAudit from "./ModalAudit.vue";
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
    MpButtonGroup,
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
    //
    Header,
    Sidebar,
    ModalAudit,
    ModalDeleteThisRequest,
    ModalRejectThisRequest,
    ModalPrintPdf,
    TextElipsisCollapsible,
  },
  data() {
    return {
      isModalAuditOpen: false,
      isModalDeleteThisRequestOpen: false,
      isModalRejectThisRequestOpen: false,
      isModalPrintPdfOpen: false,
      products: [
        {
          id: 1,
          product: "Macbook Pro M1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus in elementum quis, euismod at lacus. Vivamus nec accumsan est. Donec magna eros, volutpat id dui vitae, sagittis tempus ex. Vestibulum volutpat commodo sollicitudin. Morbi vitae nibh ut dui molestie volutpat vitae eu ante. Nulla eget dictum dolor. Pellentesque consequat velit tellus, sit amet fringilla augue accumsan eu. Suspendisse potenti. Integer laoreet quam ac nisl eleifend rhoncus. Maecenas in interdum eros. Cras iaculis consequat laoreet. In odio ligula, ultrices eget euismod nec, aliquet at sapien. Ut molestie mauris vulputate, dignissim lacus non, tincidunt neque. Phasellus porttitor accumsan lectus a venenatis.",
          quantity: 1,
          unit: "Unit",
        },
        {
          id: 2,
          product: "Macbook Pro M1 Pro 256Gb",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus in elementum quis, euismod at lacus. Vivamus nec accumsan est. Donec magna eros, volutpat id dui vitae, sagittis tempus ex. Vestibulum volutpat commodo sollicitudin. Morbi vitae nibh ut dui molestie volutpat vitae eu ante. Nulla eget dictum dolor. Pellentesque consequat velit tellus, sit amet fringilla augue accumsan eu. Suspendisse potenti. Integer laoreet quam ac nisl eleifend rhoncus. Maecenas in interdum eros. Cras iaculis consequat laoreet. In odio ligula, ultrices eget euismod nec, aliquet at sapien. Ut molestie mauris vulputate, dignissim lacus non, tincidunt neque. Phasellus porttitor accumsan lectus a venenatis.",
          quantity: 1,
          unit: "Unit",
        },
        {
          id: 3,
          product: "Macbook Pro M1 Pro 256Gb",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          quantity: 1,
          unit: "Unit",
        },
        {
          id: 4,
          product: "Macbook Pro M1 Pro 256Gb",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          quantity: 1,
          unit: "Unit",
        },
        {
          id: 5,
          product: "Macbook Pro M1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dad jhihi hih jijijij kokok jhihuu adada  adada",
          quantity: 1,
          unit: "Unit",
        },
        {
          id: 6,
          product: "Macbook Pro M1 Pro 256Gb",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus in elementum quis, euismod at lacus. Vivamus nec accumsan est. Donec magna eros, volutpat id dui vitae, sagittis tempus ex. Vestibulum volutpat commodo sollicitudin. Morbi vitae nibh ut dui molestie volutpat vitae eu ante. Nulla eget dictum dolor. Pellentesque consequat velit tellus, sit amet fringilla augue accumsan eu. Suspendisse potenti. Integer laoreet quam ac nisl eleifend rhoncus. Maecenas in interdum eros. Cras iaculis consequat laoreet. In odio ligula, ultrices eget euismod nec, aliquet at sapien. Ut molestie mauris vulputate, dignissim lacus non, tincidunt neque. Phasellus porttitor accumsan lectus a venenatis.",
          quantity: 1,
          unit: "Unit",
        },
        {
          id: 7,
          product: "Macbook Pro M1 Pro 256Gb",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus in elementum quis, euismod at lacus. Vivamus nec accumsan est. Donec magna eros, volutpat id dui vitae, sagittis tempus ex. Vestibulum volutpat commodo sollicitudin. Morbi vitae nibh ut dui molestie volutpat vitae eu ante. Nulla eget dictum dolor. Pellentesque consequat velit tellus, sit amet fringilla augue accumsan eu. Suspendisse potenti. Integer laoreet quam ac nisl eleifend rhoncus. Maecenas in interdum eros. Cras iaculis consequat laoreet. In odio ligula, ultrices eget euismod nec, aliquet at sapien. Ut molestie mauris vulputate, dignissim lacus non, tincidunt neque. Phasellus porttitor accumsan lectus a venenatis.",
          quantity: 1,
          unit: "Unit",
        },
        {
          id: 8,
          product: "Macbook Pro M1 Pro 256Gb",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus in elementum quis, euismod at lacus. Vivamus nec accumsan est. Donec magna eros, volutpat id dui vitae, sagittis tempus ex. Vestibulum volutpat commodo sollicitudin. Morbi vitae nibh ut dui molestie volutpat vitae eu ante. Nulla eget dictum dolor. Pellentesque consequat velit tellus, sit amet fringilla augue accumsan eu. Suspendisse potenti. Integer laoreet quam ac nisl eleifend rhoncus. Maecenas in interdum eros. Cras iaculis consequat laoreet. In odio ligula, ultrices eget euismod nec, aliquet at sapien. Ut molestie mauris vulputate, dignissim lacus non, tincidunt neque. Phasellus porttitor accumsan lectus a venenatis.",
          quantity: 1,
          unit: "Unit",
        },
        {
          id: 9,
          product: "Macbook Pro M1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus in elementum quis, euismod at lacus. Vivamus nec accumsan est. Donec magna eros, volutpat id dui vitae, sagittis tempus ex. Vestibulum volutpat commodo sollicitudin. Morbi vitae nibh ut dui molestie volutpat vitae eu ante. Nulla eget dictum dolor. Pellentesque consequat velit tellus, sit amet fringilla augue accumsan eu. Suspendisse potenti. Integer laoreet quam ac nisl eleifend rhoncus. Maecenas in interdum eros. Cras iaculis consequat laoreet. In odio ligula, ultrices eget euismod nec, aliquet at sapien. Ut molestie mauris vulputate, dignissim lacus non, tincidunt neque. Phasellus porttitor accumsan lectus a venenatis.",
          quantity: 1,
          unit: "Unit",
        },
        {
          id: 10,
          product: "Macbook Pro M1 Pro 256Gb",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus in elementum quis, euismod at lacus. Vivamus nec accumsan est. Donec magna eros, volutpat id dui vitae, sagittis tempus ex. Vestibulum volutpat commodo sollicitudin. Morbi vitae nibh ut dui molestie volutpat vitae eu ante. Nulla eget dictum dolor. Pellentesque consequat velit tellus, sit amet fringilla augue accumsan eu. Suspendisse potenti. Integer laoreet quam ac nisl eleifend rhoncus. Maecenas in interdum eros. Cras iaculis consequat laoreet. In odio ligula, ultrices eget euismod nec, aliquet at sapien. Ut molestie mauris vulputate, dignissim lacus non, tincidunt neque. Phasellus porttitor accumsan lectus a venenatis.",
          quantity: 1,
          unit: "Unit",
        },
        {
          id: 11,
          product: "Macbook Pro M1 Pro 256Gb",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus in elementum quis, euismod at lacus. Vivamus nec accumsan est. Donec magna eros, volutpat id dui vitae, sagittis tempus ex. Vestibulum volutpat commodo sollicitudin. Morbi vitae nibh ut dui molestie volutpat vitae eu ante. Nulla eget dictum dolor. Pellentesque consequat velit tellus, sit amet fringilla augue accumsan eu. Suspendisse potenti. Integer laoreet quam ac nisl eleifend rhoncus. Maecenas in interdum eros. Cras iaculis consequat laoreet. In odio ligula, ultrices eget euismod nec, aliquet at sapien. Ut molestie mauris vulputate, dignissim lacus non, tincidunt neque. Phasellus porttitor accumsan lectus a venenatis.",
          quantity: 1,
          unit: "Unit",
        },
        {
          id: 12,
          product: "Macbook Pro M1 Pro 256Gb",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus risus, finibus in elementum quis, euismod at lacus. Vivamus nec accumsan est. Donec magna eros, volutpat id dui vitae, sagittis tempus ex. Vestibulum volutpat commodo sollicitudin. Morbi vitae nibh ut dui molestie volutpat vitae eu ante. Nulla eget dictum dolor. Pellentesque consequat velit tellus, sit amet fringilla augue accumsan eu. Suspendisse potenti. Integer laoreet quam ac nisl eleifend rhoncus. Maecenas in interdum eros. Cras iaculis consequat laoreet. In odio ligula, ultrices eget euismod nec, aliquet at sapien. Ut molestie mauris vulputate, dignissim lacus non, tincidunt neque. Phasellus porttitor accumsan lectus a venenatis.",
          quantity: 1,
          unit: "Unit",
        },
      ],
    };
  },
  methods: {
    handleEditPurchaseRequest() {
      this.$router.push("/edit");
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
