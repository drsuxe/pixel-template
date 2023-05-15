<template>
  <mp-drawer id="drawer-custom-role" :is-open="isOpen" :on-close="handleClose" size="2xl" :close-on-esc="false">
    <mp-drawer-overlay />
    <mp-drawer-content>
      <mp-drawer-header>Tambah peran custom</mp-drawer-header>
      <mp-drawer-close-button />
      <mp-drawer-body overflow-y="auto">
        <mp-box max-width="399px">
          <mp-heading mb="3">Info peran</mp-heading>

          <mp-form-control control-id="nama-peran" :is-required="true" mb="5">
            <mp-form-label>Username</mp-form-label>
            <mp-input />
          </mp-form-control>

          <mp-form-control control-id="keterangan">
            <mp-form-label>Keterangan</mp-form-label>
            <mp-textarea maxlength="400" resize="vertical" />
            <mp-form-help-text>Maksimum 400 karakter</mp-form-help-text>
          </mp-form-control>
        </mp-box>

        <mp-box mt="5">
          <mp-heading mb="3">Wewenang<mp-box as="span" color="red.500">*</mp-box> </mp-heading>
          <mp-table-container>
            <mp-table :is-hoverable="false">
              <mp-table-head background="gray.25">
                <mp-table-row>
                  <mp-table-cell as="th" scope="col" border-right-width="1px" width="202px"> Fitur ({{ getTotalFeatureSelected }}) </mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="348px"> Subfitur </mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="166px">
                    <mp-checkbox
                      :is-disabled="currentOpen === null"
                      :is-checked="getTableHeadCheckboxState.readAll"
                      :is-indeterminate="getTableHeadCheckboxState.readIndeterminate"
                      @change="(value) => handleTableHeadCheckbox('read', currentOpen, value)"
                    >
                      Lihat
                    </mp-checkbox>
                  </mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="166px">
                    <mp-checkbox
                      :is-disabled="currentOpen === null"
                      :is-checked="getTableHeadCheckboxState.createAll"
                      :is-indeterminate="getTableHeadCheckboxState.createIndeterminate"
                      @change="(value) => handleTableHeadCheckbox('create', currentOpen, value)"
                    >
                      Buat/Tambah
                    </mp-checkbox>
                  </mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="166px">
                    <mp-checkbox
                      :is-disabled="currentOpen === null"
                      :is-checked="getTableHeadCheckboxState.updateAll"
                      :is-indeterminate="getTableHeadCheckboxState.updateIndeterminate"
                      @change="(value) => handleTableHeadCheckbox('update', currentOpen, value)"
                    >
                      Ubah
                    </mp-checkbox>
                  </mp-table-cell>
                  <mp-table-cell as="th" scope="col" width="166px">
                    <mp-checkbox
                      :is-disabled="currentOpen === null"
                      :is-checked="getTableHeadCheckboxState.deleteAll"
                      :is-indeterminate="getTableHeadCheckboxState.deleteIndeterminate"
                      @change="(value) => handleTableHeadCheckbox('delete', currentOpen, value)"
                    >
                      Hapus
                    </mp-checkbox>
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row v-for="(role, index) in getRoles" :key="index" white-space="normal">
                  <mp-table-cell
                    as="td"
                    scope="row"
                    border-right-width="1px"
                    :bg="currentOpen === index ? 'blue.50' : 'white'"
                    position="relative"
                    cursor="pointer"
                    vertical-align="top"
                    width="202px"
                    word-wrap="break-word"
                    :_hover="{
                      background: 'background',
                    }"
                    @click.native="role.name && handleOpen(index)"
                  >
                    <mp-box v-if="role.name" justify-content="space-between" align-items="center" width="202px">
                      <mp-box width="180px">
                        <mp-checkbox :is-checked="getFeatureState[index].isChecked" @change="(value) => handleFeatureCheckbox(index, value)">
                          {{ role.name }}
                        </mp-checkbox>
                      </mp-box>

                      <mp-badge v-if="getFeatureState[index].badgeCount" variant-color="gray" position="absolute" top="12px" right="12px" user-select="none">
                        {{ getFeatureState[index].badgeCount }}
                      </mp-badge>
                    </mp-box>

                    <mp-box v-if="currentOpen === index" h="full" width="4px" bg="blue.500" position="absolute" top="0px" left="-4px" />
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" :bg="currentOpen !== null ? 'blue.50' : 'white'" width="348px" vertical-align="top">
                    <mp-box width="348px">
                      <mp-checkbox
                        v-if="role.children"
                        :is-checked="role._isSubFeatureChecked"
                        :is-indeterminate="role._isSubFeatureIndeterminate"
                        @change="(value) => handleSubFeatureCheckbox(currentOpen, index, value)"
                      >
                        {{ role.children.name }}
                      </mp-checkbox>
                    </mp-box>
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" :bg="currentOpen !== null ? 'blue.50' : 'white'">
                    <mp-checkbox
                      v-if="role.children"
                      :is-checked="role.children.read"
                      @change="(value) => handleCRUDCheckbox('read', currentOpen, index, value)"
                    />
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" :bg="currentOpen !== null ? 'blue.50' : 'white'">
                    <mp-checkbox
                      v-if="role.children"
                      :is-checked="role.children.create"
                      @change="(value) => handleCRUDCheckbox('create', currentOpen, index, value)"
                    />
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" :bg="currentOpen !== null ? 'blue.50' : 'white'">
                    <mp-checkbox
                      v-if="role.children"
                      :is-checked="role.children.update"
                      @change="(value) => handleCRUDCheckbox('update', currentOpen, index, value)"
                    />
                  </mp-table-cell>
                  <mp-table-cell as="td" scope="row" :bg="currentOpen !== null ? 'blue.50' : 'white'">
                    <mp-checkbox
                      v-if="role.children"
                      :is-checked="role.children.delete"
                      @change="(value) => handleCRUDCheckbox('delete', currentOpen, index, value)"
                    />
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
          </mp-table-container>
        </mp-box>
      </mp-drawer-body>
      <mp-drawer-footer border-top-width="1px">
        <CancelDialog @accept="handleClose" :is-open="isCancelDialogOpen" @close="isCancelDialogOpen = false">
          <mp-button variant="ghost" mr="3" @click="handleCancel"> Cancel </mp-button>
        </CancelDialog>
        <mp-button @click="handleSubmit">Save</mp-button>
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
  MpHeading,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpTextarea,
  MpBox,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpCheckbox,
  MpBadge,
  MpFormHelpText,
} from "@mekari/pixel";
import datasets from "./datasets";
import CancelDialog from "./CancelDialog.vue";

export default {
  name: "DrawerCustomRole",
  components: {
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpButton,
    MpHeading,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpTextarea,
    MpBox,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpCheckbox,
    MpBadge,
    MpFormHelpText,
    CancelDialog,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentOpen: null, // index
      roles: JSON.parse(JSON.stringify(this.numberToBoolean(datasets))),
      isCancelDialogOpen: false,
    };
  },
  computed: {
    // Use for render table.
    getRoles() {
      const selectedRole = this.roles[this.currentOpen];

      if (selectedRole?.modules) {
        const selectedSubRoles = selectedRole.modules;

        const _roleLength = this.roles.length;
        const _modulesLength = selectedSubRoles.length;
        const innerValue = new Array(_roleLength > _modulesLength ? _roleLength : _modulesLength).fill("");

        const generateTableData = innerValue.map((i, index) => {
          const parent = this.roles[index];
          const subRole = selectedSubRoles[index];
          let subRoleCheckbox = [];

          if (subRole) {
            subRoleCheckbox = [subRole.read, subRole.create, subRole.update, subRole.delete];
          }

          return {
            id: parent?.id || null,
            name: parent?.name || null,
            isSelected: parent?.isSelected || null,
            badge: "99",
            children: selectedSubRoles[index],

            // Jika user untick salah satu checkbox dalam content (CRUD & restrict), maka sub modul akan jadi partial
            _isSubFeatureChecked: subRoleCheckbox?.some(Boolean),
            _isSubFeatureIndeterminate: subRoleCheckbox?.some(Boolean) && !subRoleCheckbox?.every(Boolean),
          };
        });

        return generateTableData;
      }

      return this.roles;
    },

    // Use for table head checkbox.
    getTableHeadCheckboxState() {
      const selectedRole = this.roles[this.currentOpen];
      const modules = selectedRole?.modules;

      if (modules) {
        const createState = modules?.map((i) => i.create);
        const readState = modules?.map((i) => i.read);
        const updateState = modules?.map((i) => i.update);
        const deleteState = modules?.map((i) => i.delete);

        return {
          readAll: readState?.some(Boolean),
          readIndeterminate: readState?.some(Boolean) && !readState?.every(Boolean),
          createAll: createState?.some(Boolean),
          createIndeterminate: createState?.some(Boolean) && !createState?.every(Boolean),
          updateAll: updateState?.some(Boolean),
          updateIndeterminate: updateState?.some(Boolean) && !updateState?.every(Boolean),
          deleteAll: deleteState?.some(Boolean),
          deleteIndeterminate: deleteState?.some(Boolean) && !deleteState?.every(Boolean),
        };
      }

      return {
        readAll: false,
        readIndeterminate: false,
        createAll: false,
        createIndeterminate: false,
        updateAll: false,
        updateIndeterminate: false,
        deleteAll: false,
        deleteIndeterminate: false,
      };
    },

    getFeatureState() {
      return this.roles.map((v) => {
        const temp = v.modules.map((i) => {
          const array = [i.read, i.create, i.update, i.delete];
          return array.some(Boolean);
        });

        const count = temp.filter((v) => v).length;

        return {
          isChecked: count > 0 ? true : false,
          badgeCount: count,
        };
      });
    },
    getTotalFeatureSelected() {
      return this.getFeatureState.filter((v) => v.isChecked).length;
    },
  },
  methods: {
    handleClose: function () {
      this.isCancelDialogOpen = false;
      this.$emit("close");
    },
    handleOpen(index) {
      if (this.currentOpen === index) {
        this.currentOpen = null;
        return;
      }

      this.currentOpen = index;
    },
    handleCancel() {
      const before = JSON.stringify(datasets);
      const after = JSON.stringify(this.roles);

      const isUpdated = before === after;

      if (!isUpdated) {
        console.log("Muncul popover");
        this.isCancelDialogOpen = true;
      } else {
        this.handleClose();
      }
    },

    /**
     * Handle feature checkbox.
     * @param {number} index - Index of selected role.
     * @param {boolean} value - Value of checkbox.
     */
    handleFeatureCheckbox(index, value) {
      // Auto open
      this.currentOpen = index;

      // Jika user tick salah satu modul maka semua isi checkbox di dalam modul itu akan auto tick
      this.roles[index].modules = this.roles[index].modules.map((sub) => {
        return {
          ...sub,
          read: value,
          create: value,
          update: value,
          delete: value,
        };
      });
    },

    /**
     * Handle sub-feature checkbox.
     * @param {number} index - Index of selected role.
     * @param {number} subIndex - Index of selected sub-roles.
     * @param {boolean} value - Value of checkbox.
     */
    handleSubFeatureCheckbox(index, subIndex, value) {
      const selected = this.roles[index].modules[subIndex];

      selected.read = value;
      selected.create = value;
      selected.update = value;
      selected.delete = value;
    },

    /**
     * Handle sub-feature checkbox.
     * @param {string} type - "read" | "create" | "update" | "delete".
     * @param {number} index - Index of selected role.
     * @param {boolean} value - Value of checkbox.
     */
    handleTableHeadCheckbox(type, index, value) {
      // Jika user bulk untick kolom “lihat”, maka baik submodul atau modul akan untick
      // sebaliknya, jika user bulk tick kolom “lihat” maka, semua sub modul akan jadi partial dan modul akan jadi tick dengan counter
      // sebaliknya jika default value true untuk “lihat” & “buat” tick dan user untick lihat maka “buat” akan automatically untick
      const selected = this.roles[index];

      selected.modules.forEach((v, subIndex) => {
        this.handleCRUDCheckbox(type, index, subIndex, value);
      });
    },

    /**
     * Handle sub-feature checkbox.
     * @param {string} type - "read" | "create" | "update" | "delete".
     * @param {number} index - Index of selected role.
     * @param {number} subIndex - Index of selected sub-roles.
     * @param {boolean} value - Value of checkbox.
     */
    handleCRUDCheckbox(type, index, subIndex, value) {
      const selected = this.roles[index].modules[subIndex];

      if (type === "read") {
        selected.read = value;

        // Jika user untick salah satu table cell “lihat” maka submodul akan automatically untick. karna lihat=submodul
        if (!value) {
          selected.create = false;
          selected.update = false;
          selected.delete = false;
        }

        return;
      }

      if (type === "create") {
        this.roles[this.currentOpen].modules[subIndex].create = value;

        // Jika tick “Buat” maka “Lihat” automatically tick
        if (value && !selected.read) {
          selected.read = true;
        }

        return;
      }

      if (type === "update") {
        this.roles[this.currentOpen].modules[subIndex].update = value;

        // Jika tick Update maka “Lihat” automatically tick
        if (value && !selected.read) {
          selected.read = true;
        }

        return;
      }

      if (type === "delete") {
        this.roles[this.currentOpen].modules[subIndex].delete = value;

        // Jika tick Delete maka “Lihat” automatically tick
        if (value && !selected.read) {
          selected.read = true;
        }

        return;
      }
    },

    // Utils

    handleSubmit() {
      console.log(this.booleanToNumber(this.roles));
    },
    booleanToNumber(datasets) {
      const payload = datasets.map((i) => {
        return {
          ...i,
          modules: i.modules.map((x) => {
            return {
              ...x,
              create: x.create ? 1 : 0,
              read: x.read ? 1 : 0,
              update: x.update ? 1 : 0,
              delete: x.delete ? 1 : 0,
            };
          }),
        };
      });

      return payload;
    },
    numberToBoolean(datasets) {
      const payload = datasets.map((i) => {
        return {
          ...i,
          modules: i.modules.map((x) => {
            return {
              ...x,
              create: x.create === 1 ? true : false,
              read: x.read === 1 ? true : false,
              update: x.update === 1 ? true : false,
              delete: x.delete === 1 ? true : false,
            };
          }),
        };
      });

      return payload;
    },
  },
};
</script>
