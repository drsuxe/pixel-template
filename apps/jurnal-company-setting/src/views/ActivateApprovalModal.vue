<template>
  <mp-modal isCentered :is-open="isModalOpen" size="2xl">
    <mp-modal-content ref="content">
      <mp-modal-header>Aktifkan fitur approval</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-flex
          flex-direction="column"
          justify-content="center"
          align-items="center"
        >
          <iframe
            width="564"
            height="319"
            src="https://www.youtube.com/embed/Yp2I6ErTHzM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="border-radius: 6px"
          ></iframe>
          <mp-flex
            flex-direction="column"
            justify-content="center"
            align-items="center"
            margin-top="6"
            gap="2"
          >
            <mp-badge variant="subtle"> Enterprise+ </mp-badge>
            <mp-heading as="h2" font-size="2xl" line-height="xl">
              Hindari kemungkinan penipuan dalam bisnis Anda
            </mp-heading>
            <mp-text text-align="center" color="gray.600" line-height="md">
              Tinjau kembali setiap draft transaksi serta tentutkan level
              otoritas yang berbeda untuk setiap user, agar semua proses
              transaksi jadi lebih aman.
              <mp-text as="a" href="#" target="_blank" is-link
                >Baca selengkapnya</mp-text
              >
            </mp-text>
          </mp-flex>

          <mp-flex margin-top="4">
            <mp-button mr="3" variant="ghost">
              Coba di perusahaan demo
            </mp-button>
            <mp-button>Coba gratis Enterprise+</mp-button>
          </mp-flex>
        </mp-flex>
      </mp-modal-body>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpText,
  MpHeading,
  MpButton,
  MpFlex,
  MpBadge,
} from "@mekari/pixel";
export default {
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpText,
    MpHeading,
    MpButton,
    MpFlex,
    MpBadge,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
};
</script>
