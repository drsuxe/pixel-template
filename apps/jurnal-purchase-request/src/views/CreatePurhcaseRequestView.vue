<template>
  <mp-box>
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
                  :data="['dimasrakas@gmail.com', 'bregga.teddy@gmail.com']"
                />
              </mp-form-control>
            </mp-flex>

            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Vendor address </mp-text>
                <mp-textarea id="vendor-address" />
              </mp-form-control>
            </mp-flex>
          </mp-grid>
          <mp-grid grid-template-columns="repeat(3, 1fr)" gap="6">
            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Transaction date<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                <mp-date-picker id="transaction-date" format="DD/MM/YYYY" type="date" placeholder="Select date" />
              </mp-form-control>
            </mp-flex>

            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Due date<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                <mp-date-picker id="due-date" format="DD/MM/YYYY" type="date" placeholder="Select date" />
              </mp-form-control>
            </mp-flex>

            <mp-flex flex-direction="column">
              <mp-form-control margin-bottom="5">
                <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Urgency<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                <mp-autocomplete
                  :content-style="{ zIndex: 'popover', width: 'full' }"
                  id="urgency"
                  placeholder="Pilih staff"
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
                <mp-flex>
                  <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Transaction no.<mp-text as="span" color="red.500">*</mp-text> </mp-text>
                  <mp-box @click="isModalTransactionNumberSettingOpen = true" cursor="pointer">
                    <mp-icon name="settings" size="sm" margin-left="1" margin-bottom="1" />
                  </mp-box>
                </mp-flex>
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

          <TableCreateProduct />
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
                  <mp-text font-weight="semibold" display="inline" margin-bottom="1"> Attachment </mp-text>
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
                        <mp-button-icon name="minus-circular" />
                      </mp-box>
                    </mp-flex>
                  </mp-stack>
                  <mp-upload multiple accept=".jpg, .jpeg, .png" max-width="full" :change="handleUploadFile" />
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
              <mp-button variant="outline" @click="isModalDeleteThisRequestOpen = true"> Cancel </mp-button>
              <mp-button variant="solid" @click="handleCreateRequest"> Create request </mp-button>
            </mp-button-group>
          </mp-flex>

          <ModalTransactionNumberSetting :is-open="isModalTransactionNumberSettingOpen" @handleClose="isModalTransactionNumberSettingOpen = false" />
          <ModalDeleteThisRequest :is-open="isModalDeleteThisRequestOpen" @handleClose="isModalDeleteThisRequestOpen = false" />
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
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "./SubHeader.vue";
import TableCreateProduct from "./TableCreateProduct.vue";
import ModalDeleteThisRequest from "./ModalDeleteThisRequest.vue";
import ModalTransactionNumberSetting from "./ModalTransactionNumberSetting.vue";

export default {
  name: "SalesIndex",
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
    //
    Header,
    Sidebar,
    SubHeader,
    TableCreateProduct,
    ModalTransactionNumberSetting,
    ModalDeleteThisRequest,
  },
  data() {
    return {
      isModalDeleteThisRequestOpen: false,
      isModalTransactionNumberSettingOpen: false,
      attachments: [],
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
    handleUploadFile(e) {
      console.log(e.target.files);
      const files = e.target.files;

      files.forEach((element) => console.log(element));

      this.attachments = e.target.files;
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
