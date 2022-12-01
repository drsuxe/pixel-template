<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-stacked :default-is-toggle="true" />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeader title="Tambah Layout Baru" />
        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-text font-weight="semibold">Anda dapat mengkustom tampilan laporan & mengurutkan akun.</mp-text>

          <mp-flex justify="space-between" mt="4">
            <mp-form-control>
              <mp-form-label>Nama Layout</mp-form-label>
              <mp-input value="Layout Custom 1" width="280px" />
            </mp-form-control>

            <mp-box>
              <mp-popover>
                <mp-popover-trigger>
                  <mp-button variant="outline">
                    <mp-icon name="add-circular" variant="duotone" size="sm" mr="2" />
                    Tambah
                  </mp-button>
                </mp-popover-trigger>

                <mp-popover-content max-width="64" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
                  <mp-popover-list>
                    <mp-popover-list-item @click="isModalAddNewCategoryOpen = true">Category</mp-popover-list-item>
                    <mp-popover-list-item @click="isModalAddNewNetCalculationOpen = true"> Net Calculation </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-box>
          </mp-flex>

          <mp-divider my="8" border-bottom="2px" border-style="dotted" />

          <mp-flex direction="column" justify="center" align="center" mb="8">
            <mp-text color="gray.600" text-align="center">PT Central Perk Indonesia</mp-text>
            <InlineEditableText v-model="text" />
          </mp-flex>

          <Draggable tag="ul" v-model="datasets" v-bind="dragOptions" handle=".handle" @start="drag = true" @end="drag = false">
            <TransitionGroup class="wrapper" type="transition" :name="!drag ? 'flip-list' : null">
              <TableLayout
                v-for="data in datasets"
                :key="data.name"
                :data="data"
                :tabIndex="0"
                @edit="handleEdit"
                @remove="handleRemove"
                @move-up="handleMoveUp"
                @move-down="handleMoveDown"
                @edit-children="handleEditChildren"
                @remove-children="handleRemoveChildren"
                @remove-account="handleRemoveAccount"
              />
            </TransitionGroup>
          </Draggable>

          <mp-flex justify="flex-end" mt="16" position="relative" gap="4">
            <mp-checkbox> Jadikan layout default </mp-checkbox>

            <mp-button-group>
              <mp-button variant="ghost">Batal</mp-button>
              <mp-button>Simpan</mp-button>
            </mp-button-group>
          </mp-flex>

          <ModalAddNewCategory :is-open="isModalAddNewCategoryOpen" @handleClose="isModalAddNewCategoryOpen = false" @handleSave="handleSaveAddNewCategory" />
          <ModalAddNewNetCalculation
            :is-open="isModalAddNewNetCalculationOpen"
            @handleClose="isModalAddNewNetCalculationOpen = false"
            @handleSave="handleSaveAddNewNetCalculation"
          />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { datasets } from "../api";
import {
  MpBox,
  MpFlex,
  MpText,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpDivider,
  MpButton,
  MpIcon,
  MpCheckbox,
  MpButtonGroup,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";

import TableLayout from "./TableLayout.vue";
import InlineEditableText from "./InlineEditableText.vue";
import ModalAddNewCategory from "./ModalAddNewCategory.vue";
import ModalAddNewNetCalculation from "./ModalAddNewNetCalculation.vue";

import Draggable from "vuedraggable";

export default {
  name: "LayoutDefault",
  components: {
    // Pixel Component
    MpBox,
    MpFlex,
    MpText,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpDivider,
    MpButton,
    MpIcon,
    MpCheckbox,
    MpButtonGroup,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,

    // Layout Component
    Header,
    Sidebar,
    SubHeader,

    // Internal Component
    TableLayout,
    InlineEditableText,
    ModalAddNewCategory,
    ModalAddNewNetCalculation,

    // Third Party Component
    Draggable,
  },
  data() {
    return {
      datasets: datasets,
      text: "Laporan Laba Rugi",
      drag: false,
      isModalAddNewCategoryOpen: false,
      isModalAddNewNetCalculationOpen: false,
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  methods: {
    handleEdit(data) {
      console.log("EDIT : ", data);
      alert("handleEdit Clicked. See developer console.");
    },
    handleRemove(data) {
      console.log("REMOVE : ", data);
      alert("handleRemove Clicked. See developer console.");
    },
    handleMoveUp(data) {
      console.log("MOVE UP :", data);
      alert("handleMoveUp Clicked. See developer console.");
    },
    handleMoveDown(data) {
      console.log("MOVE DOWN :", data);
      alert("handleMoveUp Clicked. See developer console.");
    },

    // Label
    handleEditChildren({ data, children }) {
      console.log("EDIT CHIDLREN : ", { data, children });
      alert("handleEditChildren Clicked. See developer console.");
    },
    handleRemoveChildren({ data, children }) {
      console.log("REMOVE CHIDLREN : ", { data, children });
      alert("handleRemoveChildren Clicked. See developer console.");
    },

    // Account
    handleRemoveAccount({ data, children, account }) {
      console.log("REMOVE ACCOUNT : ", { data, children, account });
      alert("handleRemoveAccount Clicked. See developer console.");
    },

    handleSaveAddNewCategory() {
      this.isModalAddNewCategoryOpen = false;
      this.$toast({
        variant: "success",
        title: "Kategori berhasil dibuat",
        position: "top",
      });
    },
    handleSaveAddNewNetCalculation() {
      this.isModalAddNewNetCalculationOpen = false;
      this.$toast({
        variant: "success",
        title: "Total perhitungan berhasil dibuat",
        position: "top",
      });
    },
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.flip-list-move {
  transition: transform 0.8s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0%;
}
</style>
