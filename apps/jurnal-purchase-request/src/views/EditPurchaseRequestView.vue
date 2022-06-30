<template>
  <mp-box @dragover="handleDragover" @dragleave="handleDragleave" @drop="handleDrop" position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeader />

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-grid grid-template-columns="repeat(3, 1fr)" gap="6">
            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Approving staff<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                <mp-autocomplete
                  :content-style="{ zIndex: 'popover', width: 'full' }"
                  id="approving-staff"
                  placeholder="Pilih staff"
                  value="Bregga Teddy"
                  :data="['Anton Tamimi', 'Bregga Teddy', 'Beny Berry', 'Cristine Panjaitan', 'Dani Damara', 'Faniki']"
                />
                <mp-text font-size="sm" color="gray.600" mt="1"
                  >You can add vendors on the <mp-text is-link font-size="sm" as="span"> Settings </mp-text> page</mp-text
                >
              </mp-form-control>
            </mp-flex>

            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Approver email<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                <mp-autocomplete
                  :content-style="{ zIndex: 'popover', width: 'full' }"
                  id="approver-email"
                  placeholder="Example: name@email.com"
                  value="bregga.teddy@mekari.com"
                  :data="['dimas.raka@mekari.com', 'bregga.teddy@mekari.com', 'jaka.permadi@mekari.com']"
                />
              </mp-form-control>
            </mp-flex>
          </mp-grid>
          <mp-divider border-style="dashed" />

          <mp-grid grid-template-columns="repeat(3, 1fr)" gap="6">
            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Vendor name </mp-text>
                <mp-autocomplete
                  :content-style="{ zIndex: 'popover', width: 'full' }"
                  id="vendor-name"
                  placeholder="Select vendor"
                  value="PT Angkasa Pura"
                  :data="['PT Angkasa Pura', 'Alnect Computer', 'Dazzle Indonesia']"
                />
              </mp-form-control>
            </mp-flex>

            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Vendor email </mp-text>
                <mp-autocomplete
                  :content-style="{ zIndex: 'popover' }"
                  id="vendor-email"
                  placeholder="Example: name@email.com"
                  value="dimasrakas@gmail.com"
                  :data="['dimasrakas@gmail.com', 'bregga.teddy@gmail.com']"
                />
              </mp-form-control>
            </mp-flex>

            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Vendor address </mp-text>
                <mp-textarea
                  id="vendor-address"
                  value="Jalan Laksda Adisucipto No.204-205, Ngentak, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281"
                />
              </mp-form-control>
            </mp-flex>
          </mp-grid>
          <mp-grid grid-template-columns="repeat(3, 1fr)" gap="6">
            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Transaction date<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                <mp-date-picker id="transaction-date" v-model="form.transactionDate" format="DD/MM/YYYY" type="date" placeholder="Select date" />
              </mp-form-control>
            </mp-flex>

            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Due date<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                <mp-date-picker id="due-date" v-model="form.dueDate" format="DD/MM/YYYY" type="date" placeholder="Select date" />
              </mp-form-control>
            </mp-flex>

            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Urgency<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                <mp-autocomplete
                  :content-style="{ zIndex: 'popover', width: 'full' }"
                  id="urgency"
                  placeholder="Pilih staff"
                  value="Rendah"
                  :data="[
                    { value: 'Rendah', icon: 'priority-low' },
                    { value: 'Sedang', icon: 'priority-medium' },
                    { value: 'Tinggi', icon: 'priority-high' },
                  ]"
                >
                  <template slot-scope="props">
                    <mp-flex align-items="center">
                      <mp-icon :name="props.item.icon" />
                      <mp-text padding-left="2">
                        {{ props.item.value }}
                      </mp-text>
                    </mp-flex>
                  </template>
                </mp-autocomplete>
              </mp-form-control>
            </mp-flex>
          </mp-grid>
          <mp-grid grid-template-columns="repeat(3, 1fr)" gap="6">
            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Transaction no.<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                <mp-icon name="settings" size="sm" margin-left="1" margin-bottom="1" />
                <mp-input placeholder="[Auto]" id="transaction-date" />
              </mp-form-control>
            </mp-flex>

            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Related budget year<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                <mp-input id="due-date" />
              </mp-form-control>
            </mp-flex>

            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Tag<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                <mp-input-tag id="input-tag" placeholder="Example: IT Division " />
              </mp-form-control>
            </mp-flex>
          </mp-grid>
          <mp-divider border-style="dashed" />

          <TableEditProduct />
          <mp-divider border-style="dashed" mb="10" />

          <mp-grid grid-template-columns="repeat(3, 1fr)" gap="6">
            <mp-grid-item col-span="1">
              <mp-flex flex-direction="column">
                <mp-form-control margin-bottom="5">
                  <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Message </mp-text>
                  <mp-textarea id="message" placeholder="Message" resize="vertical" />
                </mp-form-control>
              </mp-flex>
              <mp-flex flex-direction="column">
                <mp-form-control margin-bottom="5">
                  <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Memo </mp-text>
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
                  <mp-stack spacing="2" mb="2">
                    <mp-flex border="1px" border-color="gray.100" p="4" rounded="sm">
                      <mp-box flex="none">
                        <mp-icon name="pdf-document" />
                      </mp-box>
                      <mp-box flex="1 1 0%" pl="3">
                        <mp-text is-truncated is-link line-height="md"> the_attachment-is-to...ike_this.pdf </mp-text>
                        <mp-text color="gray.400" line-height="md"> 1.3 MB </mp-text>
                      </mp-box>
                      <mp-box flex="none">
                        <mp-button-icon name="download" />
                        <mp-button-icon name="minus-circular" />
                      </mp-box>
                    </mp-flex>
                    <mp-flex border="1px" border-color="gray.100" p="4" rounded="sm">
                      <mp-box flex="none">
                        <mp-icon name="word-document" />
                      </mp-box>
                      <mp-box flex="1 1 0%" pl="3">
                        <mp-text is-truncated is-link line-height="md"> the_attachment-is-to...ike_this.pdf </mp-text>
                        <mp-text color="gray.400" line-height="md"> 1.3 MB </mp-text>
                      </mp-box>
                      <mp-box flex="none">
                        <mp-button-icon name="download" />
                        <mp-button-icon name="minus-circular" />
                      </mp-box>
                    </mp-flex>
                    <mp-flex v-for="(attachment, index) in attachments" :key="index" border="1px" border-color="gray.100" p="4" rounded="sm">
                      <mp-box flex="none">
                        <mp-icon :name="attachment.icon" />
                      </mp-box>
                      <mp-box flex-grow="1" pl="3">
                        <mp-text is-truncated is-link line-height="md"> {{ attachment.name }} </mp-text>
                        <mp-text color="gray.400" line-height="md"> {{ formatFileSize(attachment.size) }} </mp-text>
                      </mp-box>
                      <mp-box flex="none">
                        <mp-tooltip label="Hapus" :id="`delete-product-${index}`">
                          <mp-button-icon @click="attachments.splice(index, 1)" name="minus-circular" />
                        </mp-tooltip>
                      </mp-box>
                    </mp-flex>
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

            <mp-grid-item col-start="3" col-span="4">
              <mp-box padding="4" border="1px" border-color="gray.100" rounded="md">
                <mp-flex justify="space-between">
                  <mp-text font-weight="semibold">Total Product</mp-text>
                  <mp-text font-weight="semibold">2 Barang</mp-text>
                </mp-flex>
              </mp-box>
            </mp-grid-item>
          </mp-grid>

          <mp-flex justify="flex-end">
            <mp-button-group spacing="2">
              <mp-button variant="outline" @click="handleCancel"> Cancel </mp-button>
              <mp-button variant="solid" @click="handleSave"> Simpan perubahan </mp-button>
            </mp-button-group>
          </mp-flex>

          <ModalDeleteThisRequest :is-open="isModalDeleteThisRequestOpen" @handleClose="isModalDeleteThisRequestOpen = false" />
        </mp-box>
      </mp-box>
    </mp-flex>

    <mp-box v-if="showOverlay" position="absolute" top="0px" bottom="0px" right="0px" left="0px" bg="overlay" z-index="999">
      <mp-flex align="center" justify="center" height="100vh">
        <mp-flex direction="column" justify="center" bg="overlay" width="448px" p="6">
          <mp-box>
            <img src="../assets/Drag & drop img.svg" alt="" />
          </mp-box>
          <mp-text color="white">Drag & drop file here</mp-text>
          <mp-text color="white">File can be excel, Word, PDF, JPG, PNG, or ZIP (10 MB in total).</mp-text>
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
  MpText,
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
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "./SubHeader.vue";
import ModalDeleteThisRequest from "./ModalDeleteThisRequest.vue";
import TableEditProduct from "./TableEditProduct.vue";

export default {
  name: "EditPurchaseRequestView",
  components: {
    MpBox,
    MpFlex,
    MpGrid,
    MpGridItem,
    MpFormControl,
    MpText,
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
    //
    Header,
    Sidebar,
    SubHeader,
    TableEditProduct,
    ModalDeleteThisRequest,
  },
  data() {
    return {
      isModalDeleteThisRequestOpen: false,
      form: {
        transactionDate: "2022-05-31T17:00:00.000Z",
        dueDate: "2022-05-31T17:00:00.000Z",
      },
      showOverlay: false,
      attachments: [],
    };
  },
  methods: {
    handleSave() {
      this.$toast({
        variant: "success",
        title: "Purchase request is changed",
        position: "top",
      });

      this.$router.push("/detail");
    },
    handleCancel() {
      this.$router.push("/detail");
    },
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
      console.log("dragover");
      event.preventDefault();

      this.showOverlay = true;
    },
    handleDragleave(event) {
      console.log("dragleave", event);
      // this.showOverlay = false;
    },
    handleDrop(event) {
      event.preventDefault();
      console.log("drop", event.dataTransfer.files);
      this.handleUploadFile(event.dataTransfer.files);
      this.showOverlay = false;
    },
    handleUploadFile(files) {
      console.log(files);
      const _files = [];
      const getIcon = ({ type, extension }) => {
        if (extension === "pdf") return "pdf-document";
        if (type === "image") return "image-document";
        if (["doc", "docx"].includes(extension)) return "word-document";
        if (["xls", "xlsx"].includes(extension)) return "excel-document";
        if (extension === "zip") return "zip";
        return "blank";
      };
      const getKebabCase = (string) =>
        string
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[\s_]+/g, "-")
          .toLowerCase();

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const extension = file.type.split("/");
        _files.push({
          name: getKebabCase(file.name),
          size: file.size,
          type: extension[1],
          icon: getIcon({ type: extension[0], extension: extension[1] }),
        });
      }

      this.attachments = [...this.attachments, ..._files];
      this.$refs.uploadAttachment.handleClear();
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
