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

          <mp-box>
            <mp-table :isHoverable="false">
              <mp-table-head>
                <mp-table-row>
                  <mp-table-cell as="th" scope="col" width="25%">Product</mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="45%">Description</mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="5%">Quantity</mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="15%">Unit</mp-table-cell>
                  <mp-table-cell as="th" scope="col"></mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row" vertical-align="center">
                    <mp-flex flex-direction="column">
                      <mp-form-control>
                        <mp-autocomplete
                          isClearable
                          :content-style="{ zIndex: 'popover', width: 'full' }"
                          id="pilih-product"
                          placeholder="Pilih produk"
                          value="Macbook Pro M1"
                          :data="['Macbook Pro M1', 'Macbook Air M1', 'iPhone 13 Pro Max 256GB', 'iPhone 13 Pro 256GB', 'iPhone 13 256GB', 'iPad Pro Max 1TB']"
                        />
                      </mp-form-control>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row">
                    <mp-flex flex-direction="column">
                      <mp-form-control>
                        <mp-textarea
                          rows="1"
                          height="36px"
                          min-height="36px"
                          resize="vertical"
                          value="Cariin yang terbaru ya pak buat edit video soalnya laptop yang sekarang beraaaaat euy"
                        />
                      </mp-form-control>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row">
                    <mp-flex flex-direction="column">
                      <mp-form-control>
                        <mp-input type="number" :value="1" />
                      </mp-form-control>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row">
                    <mp-flex flex-direction="column">
                      <mp-form-control>
                        <mp-autocomplete
                          :style="{ minWidth: '109px', width: '100%' }"
                          id="tRWBF"
                          value="Unit"
                          :data="['Unit', 'Pcs']"
                          :contentStyle="{ width: '100%' }"
                        />
                      </mp-form-control>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row">
                    <mp-button-icon name="minus-circular" />
                  </mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row" vertical-align="center">
                    <mp-flex flex-direction="column">
                      <mp-form-control>
                        <mp-autocomplete
                          isClearable
                          :content-style="{ zIndex: 'popover', width: 'full' }"
                          id="pilih-product"
                          placeholder="Pilih produk"
                          value="iPhone 13 Pro Max 256GB"
                          :data="['Macbook Pro M1', 'Macbook Air M1', 'iPhone 13 Pro Max 256GB', 'iPhone 13 Pro 256GB', 'iPhone 13 256GB', 'iPad Pro Max 1TB']"
                        />
                      </mp-form-control>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row">
                    <mp-flex flex-direction="column">
                      <mp-form-control>
                        <mp-textarea rows="1" height="36px" min-height="36px" resize="vertical" value="Cariin HP Canggih" />
                      </mp-form-control>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row">
                    <mp-flex flex-direction="column">
                      <mp-form-control>
                        <mp-input type="number" :value="1" />
                      </mp-form-control>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row">
                    <mp-flex flex-direction="column">
                      <mp-form-control>
                        <mp-autocomplete
                          :style="{ minWidth: '109px', width: '100%' }"
                          id="tRWBF"
                          value="Unit"
                          :data="['Unit', 'Pcs']"
                          :contentStyle="{ width: '100%' }"
                        />
                      </mp-form-control>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row">
                    <mp-button-icon name="minus-circular" />
                  </mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td" scope="row" vertical-align="center" border-bottom-color="white">
                    <mp-flex flex-direction="column">
                      <mp-form-control>
                        <mp-autocomplete
                          isClearable
                          :content-style="{ zIndex: 'popover', width: 'full' }"
                          id="pilih-product-2"
                          placeholder="Pilih produk"
                          :data="[
                            'Anton Tamimi',
                            'Bregga Teddy',
                            'Beny Berry',
                            'Cristine Panjaitan',
                            'Dani Damara',
                            'Faniki ad ad adad a ada ad ad ada ad ad ',
                          ]"
                        />
                      </mp-form-control>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" border-bottom-color="white"> </mp-table-cell>
                  <mp-table-cell as="td" scope="row" border-bottom-color="white"> </mp-table-cell>
                  <mp-table-cell as="td" scope="row" border-bottom-color="white"> </mp-table-cell>
                  <mp-table-cell as="td" scope="row" border-bottom-color="white"> </mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
          </mp-box>
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
                  </mp-stack>
                  <mp-upload max-width="full" />
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
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
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
import ModalDeleteThisRequest from "./ModalDeleteThisRequest.vue";

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
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpButtonIcon,
    MpButton,
    MpButtonGroup,
    MpUpload,
    MpIcon,
    MpDatePicker,
    MpInputTag,
    MpStack,
    ModalDeleteThisRequest,
    //
    Header,
    Sidebar,
    SubHeader,
  },
  data() {
    return {
      isModalDeleteThisRequestOpen: false,
      form: {
        transactionDate: "2022-05-31T17:00:00.000Z",
        dueDate: "2022-05-31T17:00:00.000Z",
      },
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
