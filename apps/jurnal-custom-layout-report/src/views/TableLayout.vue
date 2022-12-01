<template>
  <mp-box :tabindex="tabIndex" :id="`wrapper-${data.id}`" bg="white">
    <mp-table :is-hoverable="false">
      <mp-table-body v-if="hasChildren">
        <mp-table-row>
          <mp-table-cell as="td" scope="row" colspan="4" bg="gray.50" border-bottom-width="0px">
            <mp-flex align="center" justify="space-between">
              <mp-flex align="center">
                <mp-icon name="drag" mr="2" class="handle" cursor="move" />
                <mp-text font-weight="semibold"> {{ data.name }} </mp-text>

                <mp-box
                  ml="2"
                  opacity="0"
                  :_groupHover="{
                    opacity: '100',
                  }"
                >
                  <mp-tooltip :id="`has-children-tooltip-edit-${data.id}`" label="Edit">
                    <mp-button-icon name="edit" size="sm" tabindex="-1" @click="handleEdit(data)" />
                  </mp-tooltip>

                  <mp-tooltip :id="`has-children-tooltip-remove-${data.id}`" label="Remove">
                    <mp-button-icon name="close" size="sm" tabindex="-1" @click="handleRemove(data)" />
                  </mp-tooltip>
                </mp-box>
              </mp-flex>

              <mp-flex>
                <mp-tooltip :id="`has-children-tooltip-move-up-${data.id}`" label="Naikkan">
                  <mp-button-icon name="chevrons-up" tabindex="-1" @click="handleMoveUp(data)" />
                </mp-tooltip>
                <mp-tooltip :id="`has-children-tooltip-move-down-${data.id}`" label="Turunkan">
                  <mp-button-icon name="chevrons-down" tabindex="-1" @click="handleMoveDown(data)" />
                </mp-tooltip>
              </mp-flex>
            </mp-flex>
          </mp-table-cell>
        </mp-table-row>

        <template v-for="(children, childrenIndex) in data.children">
          <mp-table-row v-if="children.label" :id="`has-children-label-${data.id}-${childrenIndex}`" :key="`has-children-label-${data.id}-${childrenIndex}`">
            <mp-table-cell as="td" scope="row" colspan="4" border-bottom-width="2px">
              <mp-flex align="center" pl="8">
                <mp-text font-weight="semibold"> {{ children.label }} </mp-text>

                <mp-box
                  ml="2"
                  opacity="0"
                  :_groupHover="{
                    opacity: '100',
                  }"
                >
                  <mp-tooltip :id="`has-children-tooltip-edit-${data.id}-${childrenIndex}`" label="Edit">
                    <mp-button-icon name="edit" size="sm" tabindex="-1" @click="handleEditChildren({ data, children })" />
                  </mp-tooltip>

                  <mp-tooltip :id="`has-children-tooltip-remove-${data.id}-${childrenIndex}`" label="Remove">
                    <mp-button-icon name="close" size="sm" tabindex="-1" @click="handleRemoveChildren({ data, children })" />
                  </mp-tooltip>
                </mp-box>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>

          <mp-table-row
            v-for="account in children.accounts"
            :id="`account-${data.id}-${childrenIndex}-${account.id}`"
            :key="`account-${data.id}-${childrenIndex}-${account.id}`"
          >
            <mp-table-cell as="td" scope="row" colspan="4">
              <mp-flex align="center" :pl="children.label ? '16' : '8'" position="relative">
                <mp-box flex="none" width="24">
                  <mp-text color="gray.600"> {{ account.number }} </mp-text>
                </mp-box>
                <mp-box>
                  <mp-text color="gray.600"> {{ account.name }} </mp-text>
                </mp-box>

                <mp-box
                  position="absolute"
                  :left="children.label ? '8' : '0'"
                  opacity="0"
                  :_groupHover="{
                    opacity: '100',
                  }"
                >
                  <mp-tooltip :id="`tooltip-remove-${data.id}-${childrenIndex}-${account.id}`" label="Hapus" position="left">
                    <mp-button-icon name="minus-circular" tabindex="-1" @click="handleRemoveAccount({ data, children, account })" />
                  </mp-tooltip>
                </mp-box>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
        </template>
      </mp-table-body>

      <mp-table-body v-else>
        <mp-table-row>
          <mp-table-cell as="td" scope="row" colspan="4" border-top-width="1px" :style="{ borderTopColor: '#232933' }">
            <mp-flex align="center" justify="space-between">
              <mp-flex align="center">
                <mp-icon name="drag" mr="2" class="handle" cursor="move" />
                <mp-text font-weight="semibold"> {{ data.name }} </mp-text>

                <mp-box
                  ml="2"
                  opacity="0"
                  :_groupHover="{
                    opacity: '100',
                  }"
                >
                  <mp-tooltip :id="`no-children-tooltip-edit-${data.id}`" label="Edit">
                    <mp-button-icon tabindex="-1" name="edit" size="sm" @click="handleEdit(data)" />
                  </mp-tooltip>

                  <mp-tooltip :id="`no-children-tooltip-remove-${data.id}`" label="Remove">
                    <mp-button-icon tabindex="-1" name="close" size="sm" @click="handleRemove(data)" />
                  </mp-tooltip>
                </mp-box>
              </mp-flex>

              <mp-flex>
                <mp-tooltip :id="`no-children-tooltip-move-up-${data.id}`" label="Naikkan">
                  <mp-button-icon name="chevrons-up" @click="handleMoveUp(data)" tabindex="-1" />
                </mp-tooltip>
                <mp-tooltip :id="`no-children-tooltip-move-down-${data.id}`" label="Turunkan">
                  <mp-button-icon name="chevrons-down" @click="handleMoveDown(data)" tabindex="-1" />
                </mp-tooltip>
              </mp-flex>
            </mp-flex>
          </mp-table-cell>
        </mp-table-row>
      </mp-table-body>
    </mp-table>
  </mp-box>
</template>

<script>
import { MpTable, MpTableBody, MpTableRow, MpTableCell, MpBox, MpText, MpTooltip, MpFlex, MpButtonIcon, MpIcon } from "@mekari/pixel";

export default {
  name: "WithChildren",
  components: {
    MpTable,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpBox,
    MpText,
    MpTooltip,
    MpFlex,
    MpButtonIcon,
    MpIcon,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    tabIndex: Number,
  },
  computed: {
    hasChildren() {
      return this.data.children.length > 0;
    },
  },
  methods: {
    handleEdit(data) {
      this.$emit("edit", data);
    },
    handleRemove(data) {
      this.$emit("remove", data);
    },
    handleMoveUp(data) {
      this.$emit("move-up", data);
    },
    handleMoveDown(data) {
      this.$emit("move-down", data);
    },

    // Label
    handleEditChildren({ data, children }) {
      this.$emit("edit-children", { data, children });
    },
    handleRemoveChildren({ data, children }) {
      this.$emit("remove-children", { data, children });
    },

    // Account
    handleRemoveAccount({ data, children, account }) {
      this.$emit("remove-account", { data, children, account });
    },
  },
};
</script>
