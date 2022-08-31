<template>
  <mp-box @dragover="handleDragover" position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeader />

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-grid grid-template-columns="repeat(4, 1fr)" gap="6">
            <mp-form-control margin-bottom="5" is-required>
              <mp-form-label>Vendor</mp-form-label>
              <mp-autocomplete
                :content-style="{ zIndex: 'popover', width: 'full' }"
                id="vendor"
                placeholder="Pilih vendor"
                :data="['PT BCA', 'PT BNI', 'PT Mid Solusi Nusantara']"
              />
            </mp-form-control>

            <mp-form-control margin-bottom="5" is-required>
              <mp-form-label> Email</mp-form-label>
              <mp-input-tag
                :content-style="{ zIndex: 'popover', width: 'full' }"
                id="approver-email"
                placeholder="Example: name@email.com"
                :suggestions="['dimas.raka@mekari.com', 'bregga.teddy@mekari.com', 'jaka.permadi@mekari.com']"
                :is-show-suggestions="true"
              />
            </mp-form-control>

            <mp-grid-item col-start="4" col-end="5">
              <mp-flex direction="column" text-align="right">
                <mp-text color="gray.600">Total tukar faktur</mp-text>
                <mp-heading>Rp17.000.000</mp-heading>
              </mp-flex>
            </mp-grid-item>
          </mp-grid>
          <mp-divider border-style="dashed" />

          <mp-grid grid-template-columns="repeat(4, 1fr)" gap="6">
            <mp-form-control margin-bottom="5">
              <mp-form-label> Billing address </mp-form-label>
              <mp-textarea id="billing-address" resize="vertical" height="120px" />
            </mp-form-control>

            <mp-box>
              <mp-form-control mb="5">
                <mp-form-label> Transaction date </mp-form-label>
                <mp-date-picker
                  id="transaction-date"
                  v-model="form.transactionDate"
                  value-type="date"
                  format="DD/MM/YYYY"
                  type="date"
                  placeholder="Select date"
                />
              </mp-form-control>

              <mp-form-control is-required>
                <mp-form-label> Due date </mp-form-label>
                <mp-date-picker id="due-date" v-model="form.dueDate" value-type="date" format="DD/MM/YYYY" type="date" placeholder="Select date" />
              </mp-form-control>
            </mp-box>

            <mp-box>
              <mp-form-control mb="5">
                <mp-flex>
                  <mp-form-label> Transaction no.</mp-form-label>
                  <mp-box @click="isModalTransactionNumberSettingOpen = true" cursor="pointer">
                    <mp-icon name="settings" size="sm" margin-left="1" margin-bottom="1" />
                  </mp-box>
                </mp-flex>
                <mp-input placeholder="[Auto]" id="transaction-date" isReadOnly />
              </mp-form-control>

              <mp-form-control>
                <mp-form-label>Term of payment</mp-form-label>
                <mp-autocomplete placeholder="Select term" :data="['Custom']" :content-style="{ width: 'full' }" />
              </mp-form-control>
            </mp-box>
          </mp-grid>
          <mp-divider border-style="dashed" />

          <TableEditPurchaseInvoice />
          <mp-divider border-style="dashed" mb="10" />

          <mp-grid grid-template-columns="repeat(3, minmax(0, 1fr))">
            <mp-grid-item col-span="1">
              <mp-flex flex-direction="column">
                <mp-form-control margin-bottom="5">
                  <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Message </mp-text>
                  <mp-textarea id="message" placeholder="Message" resize="vertical" height="20" max-height="140px" />
                </mp-form-control>
              </mp-flex>
              <mp-flex flex-direction="column">
                <mp-form-control margin-bottom="5">
                  <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Memo </mp-text>
                  <mp-textarea placeholder="Memo" resize="vertical" height="20" max-height="140px" />
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
                  <mp-stack spacing="2" mb="2">
                    <mp-flex v-for="(attachment, index) in attachments" :key="index" border="1px" border-color="gray.100" p="4" rounded="sm" width="full">
                      <mp-box flex="none">
                        <mp-icon :name="attachment.icon" />
                      </mp-box>
                      <mp-box flex-grow="1" pl="3" max-w="calc(100% - 56px)">
                        <mp-box @click="handleAttachmentPreview({ fileName: attachment.name, extension: attachment.extension, url: attachment.url })">
                          <TextEllipsis :id="`file-name-${index}`">
                            <mp-text is-link line-height="md">
                              {{ attachment.name }}
                            </mp-text>
                          </TextEllipsis>
                        </mp-box>

                        <mp-text color="gray.400" line-height="md"> {{ formatFileSize(attachment.size) }} </mp-text>
                      </mp-box>
                      <mp-box flex="none">
                        <mp-flex gap="2" justify="end">
                          <mp-tooltip label="Hapus" :id="`delete-attachment-${index}`">
                            <mp-button-icon @click="attachments.splice(index, 1)" name="minus-circular" />
                          </mp-tooltip>
                        </mp-flex>
                      </mp-box>
                    </mp-flex>
                  </mp-stack>

                  <mp-stack v-if="attachments.length" spacing="2" mb="2">
                    <mp-box>
                      <mp-banner variant="danger">
                        <mp-banner-icon />
                        <mp-banner-description style="margin-right: 3rem">
                          my_attachment_2022.xls tidak dapat dipilih. Jumlah maksimum file adalah 5.
                        </mp-banner-description>
                        <mp-banner-close-button />
                      </mp-banner>
                    </mp-box>
                    <mp-box>
                      <mp-banner variant="danger">
                        <mp-banner-icon />
                        <mp-banner-description style="margin-right: 3rem"> The_most_important.doc melebihi 10 MB. </mp-banner-description>
                        <mp-banner-close-button />
                      </mp-banner>
                    </mp-box>
                    <mp-box>
                      <mp-banner variant="danger">
                        <mp-banner-icon />
                        <mp-banner-description style="margin-right: 3rem">
                          the_attachment_will_be_long...ike_this.svg tidak dapat dipilih. Mohon pilih file dengan format yang ditentukan.
                        </mp-banner-description>
                        <mp-banner-close-button />
                      </mp-banner>
                    </mp-box>
                  </mp-stack>
                  <mp-upload
                    ref="uploadAttachment"
                    multiple
                    accept=".jpg, .jpeg, .png, .gif, .pdf, .xls, .xlsx, .doc, .docx, .zip"
                    max-width="full"
                    :change="handleChange"
                  />
                  <mp-text display="inline" font-size="sm" color="gray.600"> File can be document, image, or ZIP </mp-text>
                </mp-form-control>
              </mp-flex>
            </mp-grid-item>

            <mp-grid-item col-start="3" col-span="1">
              <mp-box padding="4" border="1px" border-color="gray.100" rounded="md">
                <mp-flex justify="space-between">
                  <mp-text font-weight="semibold">Total remaining billed</mp-text>
                  <mp-text font-weight="semibold">Rp17.000.000</mp-text>
                </mp-flex>
              </mp-box>
            </mp-grid-item>
          </mp-grid>

          <mp-flex justify="flex-end">
            <mp-button-group spacing="2">
              <mp-button variant="ghost" @click="isModalCancelOpen = true"> Cancel </mp-button>
              <mp-button variant="solid" @click="handleCreateRequest"> Save </mp-button>
            </mp-button-group>
          </mp-flex>

          <ModalTransactionNumberSetting :is-open="isModalTransactionNumberSettingOpen" @handleClose="isModalTransactionNumberSettingOpen = false" />
          <ModalCancel :is-open="isModalCancelOpen" @handleClose="isModalCancelOpen = false" />
          <ModalAttachmentPreview
            :file-name="selectedAttachment.fileName"
            :extension="selectedAttachment.extension"
            :url="selectedAttachment.url"
            :is-open="isModalAttachmentPreviewOpen"
            @handleClose="isModalAttachmentPreviewOpen = false"
          />
        </mp-box>
      </mp-box>
    </mp-flex>

    <mp-box
      v-if="showOverlay"
      @dragleave="handleDragleave"
      @drop="handleDrop"
      position="absolute"
      top="0px"
      bottom="0px"
      right="0px"
      left="0px"
      bg="overlay"
      z-index="999"
    >
      <mp-flex align="center" justify="center" height="100vh">
        <mp-flex direction="column" justify="center" bg="overlay" width="448px" py="10" px="11" rounded="md">
          <mp-flex justify-content="center" align-items="center" mb="8">
            <img width="165px" height="165px" src="../assets/Drag & drop img.svg" alt="" />
          </mp-flex>
          <mp-text text-align="center" color="gray.50">Drag & drop file here</mp-text>
          <mp-text text-align="center" color="gray.400" font-size="sm">File can be excel, Word, PDF, JPG, PNG, or ZIP (10 MB in total).</mp-text>
        </mp-flex>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpGrid,
  MpGridItem,
  MpFormControl,
  MpFormLabel,
  MpText,
  MpHeading,
  MpAutocomplete,
  MpTextarea,
  MpInput,
  MpDivider,
  MpButtonIcon,
  MpButton,
  MpButtonGroup,
  MpUpload,
  MpIcon,
  MpDatePicker,
  MpInputTag,
  MpStack,
  MpTooltip,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
  MpBannerCloseButton,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "./SubHeader.vue";
import TableEditPurchaseInvoice from "./TableEditPurchaseInvoice.vue";
import ModalCancel from "./ModalCancel.vue";
import ModalTransactionNumberSetting from "./ModalTransactionNumberSetting.vue";
import ModalAttachmentPreview from "./ModalAttachmentPreview.vue";
import { TextEllipsis } from "../components/TextEllipsis";

export default {
  name: "SalesIndex",
  components: {
    MpBox,
    MpFlex,
    MpGrid,
    MpGridItem,
    MpFormControl,
    MpFormLabel,
    MpText,
    MpHeading,
    MpAutocomplete,
    MpTextarea,
    MpInput,
    MpDivider,
    MpButtonIcon,
    MpButton,
    MpButtonGroup,
    MpUpload,
    MpIcon,
    MpDatePicker,
    MpInputTag,
    MpStack,
    MpTooltip,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
    MpBannerCloseButton,
    //
    Header,
    Sidebar,
    SubHeader,
    TableEditPurchaseInvoice,
    ModalTransactionNumberSetting,
    ModalCancel,
    ModalAttachmentPreview,
    TextEllipsis,
  },
  data() {
    return {
      isModalCancelOpen: false,
      isModalTransactionNumberSettingOpen: false,
      isModalAttachmentPreviewOpen: false,
      showOverlay: false,

      // Form
      form: {
        transactionDate: "",
        dueDate: "",
      },

      // Attachment
      selectedAttachment: {
        fileName: "",
        extension: "",
        url: "",
      },
      attachments: [
        {
          name: "Blobby-Chug-Kids-blob-font 1.png",
          size: 611180,
          type: "image",
          extension: "png",
          icon: "image-document",
          url: "https://i.imgur.com/AemZaht.png",
          isDownloadable: true,
        },
      ],
    };
  },
  methods: {
    handleCreateRequest() {
      this.$toast({
        variant: "success",
        title: "Purchase request is created ",
        position: "top",
      });

      this.$router.push("/detail");
    },

    // Attachments
    handleChange(e) {
      this.handleUploadFile(e.target.files);
    },
    formatFileSize(bytes, decimalPoint) {
      if (bytes == 0) return "0 Bytes";
      var k = 1000,
        dm = decimalPoint || 2,
        sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    },
    handleDragover(event) {
      event.preventDefault();

      if (!this.showOverlay) {
        this.showOverlay = true;
      }
    },
    handleDragleave(event) {
      event.preventDefault();

      if (this.showOverlay) {
        this.showOverlay = false;
      }
    },
    handleDrop(event) {
      event.preventDefault();
      this.handleUploadFile(event.dataTransfer.files);
      this.showOverlay = false;
    },
    handleUploadFile(files) {
      const _files = [];
      const getIcon = ({ type, extension }) => {
        if (extension === "pdf") return "pdf-document";
        if (type === "image") return "image-document";
        if (["doc", "docx"].includes(extension)) return "word-document";
        if (["xls", "xlsx"].includes(extension)) return "excel-document";
        if (extension === "zip") return "zip";
        return "blank";
      };
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const extension = file.type.split("/");

        const allowedFiles = ["jpg", "jpeg", "png", "gif", "zip", "doc", "docx", "xls", "xlsx"];
        if (allowedFiles.includes(extension[1])) {
          _files.push({
            name: file.name,
            size: file.size,
            type: extension[0],
            extension: extension[1],
            icon: getIcon({ type: extension[0], extension: extension[1] }),
            url: URL.createObjectURL(file),
          });
        }
      }

      this.attachments = [...this.attachments, ..._files];
      this.$refs.uploadAttachment.handleClear();
    },
    handleAttachmentPreview({ fileName, extension, url }) {
      const downloadable = ["zip", "doc", "docx", "xls", "xlsx"];
      if (downloadable.includes(extension)) {
        location.href = url;
      } else {
        this.isModalAttachmentPreviewOpen = true;
        this.selectedAttachment = {
          fileName: fileName,
          extension: extension,
          url: url,
        };
      }
    },
  },
};
</script>
<style scoped>
td {
  height: auto;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}
</style>
