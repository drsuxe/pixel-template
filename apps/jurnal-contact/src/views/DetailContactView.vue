<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-stacked :default-is-toggle="false" />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeader>
          <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
            <mp-box>
              <mp-text is-link text-decoration="underline">Kontak</mp-text>
              <mp-heading as="h1" font-size="2xl" font-weight="semibold"> Informasi kontak </mp-heading>
            </mp-box>
            <mp-flex gap="2">
              <mp-button-icon name="chevrons-left" />
              <mp-button-icon name="chevrons-right" />
            </mp-flex>
          </mp-flex>

          <mp-box mb="-25px" px="6">
            <mp-tabs id="contact-detail" :index="index" is-manual @change.self="handleChange">
              <mp-tab-list>
                <mp-tab>Profil</mp-tab>
                <mp-tab>Transaksi</mp-tab>
              </mp-tab-list>
            </mp-tabs>
          </mp-box>
        </SubHeader>
        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <mp-flex justify="space-between" align="center">
            <mp-box>
              <mp-flex align="center">
                <mp-heading> Sugiarto Handoko Sudjarwadi </mp-heading>
                <mp-badge variant-color="gray" ml="2"> Diarsipkan </mp-badge>
              </mp-flex>

              <mp-flex gap="3" mt="2">
                <mp-flex>
                  <mp-text mr="5">Tipe :</mp-text>
                  <mp-flex gap="2">
                    <mp-badge variant-color="orange"> Pelanggan </mp-badge>
                    <mp-badge variant-color="blue"> Suplier </mp-badge>
                    <mp-badge variant-color="green"> Karyawan </mp-badge>
                    <mp-badge variant-color="green"> Lainnya </mp-badge>
                  </mp-flex>
                </mp-flex>
                <mp-divider orientation="vertical" border-left-color="dark" />
                <mp-flex>
                  <mp-text mr="5">Grup :</mp-text>
                  <mp-flex gap="2">
                    <mp-badge variant="subtle" variant-color="gray"> Jakarta </mp-badge>
                    <mp-badge variant="subtle" variant-color="gray"> Bandung </mp-badge>
                    <mp-badge variant="subtle" variant-color="gray"> Tangerang </mp-badge>
                  </mp-flex>
                </mp-flex>
              </mp-flex>
            </mp-box>

            <mp-flex gap="3" align="center">
              <mp-button variant="outline">Ubah profil</mp-button>

              <JPopover>
                <template #trigger>
                  <mp-button right-icon="caret-down">Buat transaksi</mp-button>
                </template>

                <template #content>
                  <mp-popover-list>
                    <mp-popover-list-item>Faktur penjualan</mp-popover-list-item>
                    <mp-popover-list-item>Beban</mp-popover-list-item>
                    <mp-popover-list-item>Deposit uang</mp-popover-list-item>
                    <mp-popover-list-item>Kirim uang</mp-popover-list-item>
                    <mp-popover-list-item>Faktur pembelian</mp-popover-list-item>
                    <mp-popover-list-item>Kredit memo</mp-popover-list-item>
                    <mp-popover-list-item>Debit memo</mp-popover-list-item>
                  </mp-popover-list>
                </template>
              </JPopover>

              <JPopover>
                <template #trigger>
                  <mp-button-icon name="menu-kebab" size="md" />
                </template>

                <template #content>
                  <mp-popover-list>
                    <mp-popover-list-item @click="isOpen.ModalAccountStatements = true">Lihat laporan rekening</mp-popover-list-item>
                    <mp-popover-list-item @click="isOpen.ModalMergeContact = true">Gabungkan kontak</mp-popover-list-item>
                    <mp-popover-list-item>Arsipkan kontak</mp-popover-list-item>
                  </mp-popover-list>
                </template>
              </JPopover>
            </mp-flex>
          </mp-flex>

          <ContactProfile v-if="index === 0" />
          <ContactTransaction v-if="index === 1" />

          <ModalMergeContact :is-open="isOpen.ModalMergeContact" @close="isOpen.ModalMergeContact = false" @apply="handleApplyMergeContact" />
          <ModalAccountStatements
            :is-open="isOpen.ModalAccountStatements"
            @close="isOpen.ModalAccountStatements = false"
            @apply="handleApplyAccountStatements"
          />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpBadge,
  MpDivider,
  MpText,
  MpButton,
  MpButtonIcon,
  MpPopoverList,
  MpPopoverListItem,
  MpTabs,
  MpTabList,
  MpTab,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";

import JPopover from "../components/JPopover.vue";
import ModalMergeContact from "./ModalMergeContact.vue";
import ModalAccountStatements from "./ModalAccountStatements.vue";
import ContactProfile from "./DetailContactProfile.vue";
import ContactTransaction from "./DetailContactTransaction.vue";
export default {
  name: "ContactDetail",
  components: {
    // Pixel Component
    MpBox,
    MpFlex,
    MpHeading,
    MpBadge,
    MpDivider,
    MpText,
    MpButton,
    MpButtonIcon,
    MpPopoverList,
    MpPopoverListItem,
    MpTabs,
    MpTabList,
    MpTab,

    // Layout Component
    Header,
    Sidebar,
    SubHeader,

    JPopover,
    ModalMergeContact,
    ModalAccountStatements,
    ContactProfile,
    ContactTransaction,
  },
  data() {
    return {
      index: 0,
      isOpen: {
        ModalMergeContact: false,
        ModalAccountStatements: false,
      },
    };
  },
  methods: {
    handleChange(e) {
      this.index = e;
    },
    handleApplyMergeContact() {
      this.isOpen.ModalMergeContact = false;
      this.$toast({
        variant: "success",
        title: "Contact has been merged successfully",
        position: "top",
      });
    },
    handleApplyAccountStatements() {
      this.isOpen.ModalAccountStatements = false;
      window.open("https://mekari.com/", "_blank").focus();
    },
  },
};
</script>
