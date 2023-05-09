<template>
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
        <mp-table-row v-for="(role, index) in getRoles" :key="role.id" white-space="normal">
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
            @click.native="role.id && handleOpen(index)"
          >
            <mp-box v-if="role.id" justify-content="space-between" align-items="center" width="202px">
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
            <mp-checkbox v-if="role.children" :is-checked="role.children.read" @change="(value) => handleCRUDCheckbox('read', currentOpen, index, value)" />
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" :bg="currentOpen !== null ? 'blue.50' : 'white'">
            <mp-checkbox v-if="role.children" :is-checked="role.children.create" @change="(value) => handleCRUDCheckbox('create', currentOpen, index, value)" />
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" :bg="currentOpen !== null ? 'blue.50' : 'white'">
            <mp-checkbox v-if="role.children" :is-checked="role.children.update" @change="(value) => handleCRUDCheckbox('update', currentOpen, index, value)" />
          </mp-table-cell>
          <mp-table-cell as="td" scope="row" :bg="currentOpen !== null ? 'blue.50' : 'white'">
            <mp-checkbox v-if="role.children" :is-checked="role.children.delete" @change="(value) => handleCRUDCheckbox('delete', currentOpen, index, value)" />
          </mp-table-cell>
        </mp-table-row>
      </mp-table-body>
    </mp-table>
  </mp-table-container>
</template>

<script>
import { MpTableContainer, MpTable, MpTableHead, MpTableBody, MpTableRow, MpTableCell, MpBox, MpCheckbox, MpBadge } from "@mekari/pixel";

export default {
  name: "TableCustomRole",
  components: {
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpBox,
    MpCheckbox,
    MpBadge,
  },
  data: function () {
    return {
      currentOpen: null, // index
      roles: [
        {
          id: 1,
          name: "Kas & bank",
          subRoles: [
            {
              id: 1,
              name: "Option 1",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 2,
              name: "Option 2",
              read: false,
              create: false,
              update: false,
              delete: false,
            },
            {
              id: 3,
              name: "Option 3",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 4,
              name: "Option 4",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 5,
              name: "Option 5",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 6,
              name: "Option 6",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
          ],
        },
        {
          id: 2,
          name: "Penjualan",
          subRoles: [
            {
              id: 1,
              name: "Option 1",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 2,
              name: "Option 2",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 3,
              name: "Option 3",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
          ],
        },
        {
          id: 3,
          name: "Pembelian",
          subRoles: [
            {
              id: 1,
              name: "Option 1",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 2,
              name: "Option 2",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 3,
              name: "Option 3",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 4,
              name: "Option 4",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 5,
              name: "Option 5",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 6,
              name: "Option 6",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 7,
              name: "Option 7",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
          ],
        },
        {
          id: 4,
          name: "Produk",
          subRoles: [
            {
              id: 1,
              name: "Option 1",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 2,
              name: "Option 2",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 3,
              name: "Option 3",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 4,
              name: "Option 4",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 5,
              name: "Option 5",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 6,
              name: "Option 6",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 7,
              name: "Option 7",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 8,
              name: "Option 8",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
          ],
        },
        {
          id: 5,
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae velit vel libero laoreet ornare",
          subRoles: [
            {
              id: 1,
              name: "Option 1",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 2,
              name: "Option 2",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 3,
              name: "Option 3",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 4,
              name: "Option 4",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 5,
              name: "Option 5",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 6,
              name: "Option 6",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 7,
              name: "Option 7",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 8,
              name: "Option 8",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
          ],
        },
        {
          id: 6,
          name: "Nullam metus odio, semper eu gravida eu, scelerisque eget libero",
          subRoles: [
            {
              id: 1,
              name: "Option 1",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 2,
              name: "Option 2",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 3,
              name: "Option 3",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 4,
              name: "Option 4",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 5,
              name: "Option 5",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 6,
              name: "Option 6",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 7,
              name: "Option 7",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 8,
              name: "Option 8",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
          ],
        },
        {
          id: 7,
          name: "Lorem ipsum dolor sit amet",
          subRoles: [
            {
              id: 1,
              name: "Option 1",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 2,
              name: "Option 2",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 3,
              name: "Option 3",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 4,
              name: "Option 4",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 5,
              name: "Option 5",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 6,
              name: "Option 6",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 7,
              name: "Option 7",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 8,
              name: "Option 8",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
          ],
        },
        {
          id: 8,
          name: "Lorem ipsum dolor sit amet",
          subRoles: [
            {
              id: 1,
              name: "Option 1",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 2,
              name: "Option 2",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 3,
              name: "Option 3",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 4,
              name: "Option 4",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 5,
              name: "Option 5",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 6,
              name: "Option 6",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 7,
              name: "Option 7",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 8,
              name: "Option 8",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
          ],
        },
        {
          id: 9,
          name: "Lorem ipsum dolor sit amet",
          subRoles: [
            {
              id: 1,
              name: "Option 1",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 2,
              name: "Option 2",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 3,
              name: "Option 3",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 4,
              name: "Option 4",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 5,
              name: "Option 5",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 6,
              name: "Option 6",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 7,
              name: "Option 7",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 8,
              name: "Option 8",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
          ],
        },
        {
          id: 10,
          name: "Lorem ipsum dolor sit amet",
          subRoles: [
            {
              id: 1,
              name: "Option 1",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 2,
              name: "Option 2",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 3,
              name: "Option 3",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 4,
              name: "Option 4",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 5,
              name: "Option 5",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 6,
              name: "Option 6",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 7,
              name: "Option 7",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
            {
              id: 8,
              name: "Option 8",
              create: false,
              read: false,
              update: false,
              delete: false,
            },
          ],
        },
      ],
    };
  },
  computed: {
    // Use for render table.
    getRoles() {
      const selectedRole = this.roles[this.currentOpen];

      if (selectedRole?.subRoles) {
        const selectedSubRoles = selectedRole.subRoles;

        const _roleLength = this.roles.length;
        const _subRolesLength = selectedSubRoles.length;
        const innerValue = new Array(_roleLength > _subRolesLength ? _roleLength : _subRolesLength).fill("");

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
            _isSubFeatureChecked: subRoleCheckbox?.every(Boolean),
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
      const subRoles = selectedRole?.subRoles;

      if (subRoles) {
        const createState = subRoles?.map((i) => i.create);
        const readState = subRoles?.map((i) => i.read);
        const updateState = subRoles?.map((i) => i.update);
        const deleteState = subRoles?.map((i) => i.delete);

        return {
          readAll: readState?.every(Boolean),
          readIndeterminate: readState?.some(Boolean) && !readState?.every(Boolean),
          createAll: createState?.every(Boolean),
          createIndeterminate: createState?.some(Boolean) && !createState?.every(Boolean),
          updateAll: updateState?.every(Boolean),
          updateIndeterminate: updateState?.some(Boolean) && !updateState?.every(Boolean),
          deleteAll: deleteState?.every(Boolean),
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
        const temp = v.subRoles.map((i) => {
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
    handleOpen(index) {
      if (this.currentOpen === index) {
        this.currentOpen = null;
        return;
      }

      this.currentOpen = index;
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
      this.roles[index].subRoles = this.roles[index].subRoles.map((sub) => {
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
      const selected = this.roles[index].subRoles[subIndex];

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

      selected.subRoles.forEach((v, subIndex) => {
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
      const selected = this.roles[index].subRoles[subIndex];

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
        this.roles[this.currentOpen].subRoles[subIndex].create = value;

        // Jika tick “Buat” maka “Lihat” automatically tick
        if (value && !selected.read) {
          selected.read = true;
        }

        return;
      }

      if (type === "update") {
        this.roles[this.currentOpen].subRoles[subIndex].update = value;

        // Jika tick Update maka “Lihat” automatically tick
        if (value && !selected.read) {
          selected.read = true;
        }

        return;
      }

      if (type === "delete") {
        this.roles[this.currentOpen].subRoles[subIndex].delete = value;

        // Jika tick Delete maka “Lihat” automatically tick
        if (value && !selected.read) {
          selected.read = true;
        }

        return;
      }
    },
  },
};
</script>
