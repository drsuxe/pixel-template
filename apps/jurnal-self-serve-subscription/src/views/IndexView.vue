<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle />
      <SidebarChild />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto" background-color="background">
        <SubHeaderChild title="Tagihan & Kuota" subtitle="Pengaturan">
          <template #right>
            <mp-button-group>
              <mp-button variant="outline" @click="isModalOpen.ModalGantiPaket = true">Ganti paket</mp-button>
              <mp-button @click="isModalOpen.ModalMulaiLangganan = true">Mulai Berlangganan</mp-button>
            </mp-button-group>
          </template>
        </SubHeaderChild>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" background-color="white" padding="6">
          <ModalGantiPaket :is-open="isModalOpen.ModalGantiPaket" @handleClose="isModalOpen.ModalGantiPaket = false" @handleChange="handleGantiPaket" />
          <ModalMulaiLangganan :is-open="isModalOpen.ModalMulaiLangganan" @handleClose="isModalOpen.ModalMulaiLangganan = false" />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpButton, MpButtonGroup } from "@mekari/pixel";
import Header from "../components/Header";
import SubHeaderChild from "../components/SubHeaderChild";
import Sidebar from "../components/Sidebar";
import SidebarChild from "../components/SidebarChild";
import ModalGantiPaket from "./ModalGantiPaket.vue";
import ModalMulaiLangganan from "./ModalMulaiLangganan.vue";

export default {
  name: "IndexView",
  components: {
    // Pixel component
    MpBox,
    MpFlex,
    MpButton,
    MpButtonGroup,
    //
    Header,
    SubHeaderChild,
    Sidebar,
    SidebarChild,
    ModalGantiPaket,
    ModalMulaiLangganan,
  },
  data() {
    return {
      isModalOpen: {
        ModalGantiPaket: false,
        ModalMulaiLangganan: false,
      },
    };
  },
  methods: {
    handleGantiPaket(value) {
      console.log(value);

      this.$toast({
        variant: "success",
        title: "Paket berhasil diganti",
        position: "top",
      });
    },
  },
};
</script>
