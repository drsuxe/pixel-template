<template>
  <mp-box>
    <mp-modal size="xl" :isOpen="isOpen" scroll-behavior="auto">
      <mp-modal-content>
        <mp-modal-header> Kirim via WhatsApp </mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body>
          <mp-grid gap="6" templateColumns="repeat(2, 1fr)">
            <mp-grid-item>
              <mp-stack gap="2">
                <mp-form-control control-id="receiver">
                  <mp-form-label>Email penerima</mp-form-label>
                  <mp-input-tag
                    is-show-suggestions
                    :suggestions="['Bregga@mekari.com', 'Denver@mekari.com', 'Jaka@mekari.com', 'Dimas@mekari.com']"
                    :content-style="{ width: 'max-content', minWidth: 'full', maxWidth: '90vw' }"
                  />
                </mp-form-control>

                <mp-form-control control-id="cc">
                  <mp-form-label>CC</mp-form-label>
                  <mp-input-tag
                    is-show-suggestions
                    :suggestions="['Bregga@mekari.com', 'Denver@mekari.com', 'Jaka@mekari.com', 'Dimas@mekari.com']"
                    :content-style="{ width: 'max-content', minWidth: 'full', maxWidth: '90vw' }"
                  />
                </mp-form-control>

                <mp-form-control control-id="sender">
                  <mp-form-label>Pengirim</mp-form-label>
                  <mp-text>Jakapermadi@mekari.com</mp-text>
                </mp-form-control>

                <mp-form-control control-id="message">
                  <mp-form-label>Pesan</mp-form-label>
                  <mp-textarea />
                </mp-form-control>

                <mp-box>
                  <mp-text font-weight="semibold" mb="2"> Lampiran (1) </mp-text>
                  <mp-stack spacing="2" mb="2">
                    <mp-flex>
                      <mp-box flex="none">
                        <mp-icon name="image-document" />
                      </mp-box>
                      <mp-box flex="1 1 0%" pl="3">
                        <mp-text is-truncated is-link line-height="md"> AemZaht.png </mp-text>
                        <mp-text color="gray.400" line-height="md"> 1.3 MB </mp-text>
                      </mp-box>
                      <mp-box flex="none">
                        <mp-tooltip label="Download" id="download">
                          <mp-button-icon name="download" />
                        </mp-tooltip>

                        <mp-tooltip label="Hapus" id="delete">
                          <mp-button-icon name="minus-circular" />
                        </mp-tooltip>
                      </mp-box>
                    </mp-flex>
                  </mp-stack>
                </mp-box>
              </mp-stack>
            </mp-grid-item>

            <mp-grid-item>
              <mp-stack gap="2">
                <mp-form-control control-id="template">
                  <mp-form-label>Template</mp-form-label>
                  <mp-autocomplete is-searchable :data="['1', '2', '3']" :content-style="{ width: 'max-content', minWidth: 'full', maxWidth: '90vw' }" />
                </mp-form-control>

                <mp-form-control control-id="preview-template">
                  <mp-form-label>Preview Template</mp-form-label>
                  <mp-box bg="gray.100" w="full" h="341px" rounded="md" p="6" overflow-y="auto">
                    <img src="../../../assets/report-preview.png" alt="" />
                  </mp-box>
                </mp-form-control>
              </mp-stack>
            </mp-grid-item>
          </mp-grid>
        </mp-modal-body>

        <mp-modal-footer justify-content="space-between" align-items="center">
          <mp-box>
            <mp-tooltip>
              <mp-text is-link>Terkirim: 4</mp-text>

              <template #label>
                <mp-text color="white">Penerima:</mp-text>
                <mp-flex direction="column" as="ul" list-style-position="inside">
                  <mp-text color="white" as="li" lineHeigt="sm"> bregga@mekari.com </mp-text>
                  <mp-text color="white" as="li"> denver@mekari.com </mp-text>
                  <mp-text color="white" as="li"> jaka@mekari.com </mp-text>
                  <mp-text color="white" as="li"> evelyn@mekari.com </mp-text>
                </mp-flex>
              </template>
            </mp-tooltip>
          </mp-box>
          <mp-button-group>
            <mp-button variant="ghost" @click="$emit('handleClose')"> Batalkan </mp-button>
            <mp-button @click="handleSubmit"> Kirim </mp-button>
          </mp-button-group>
        </mp-modal-footer>
      </mp-modal-content>

      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import {
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpBox,
  MpModalFooter,
  MpButtonGroup,
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpTextarea,
  MpAutocomplete,
  MpGrid,
  MpGridItem,
  MpText,
  MpStack,
  MpInputTag,
  MpIcon,
  MpButtonIcon,
  MpFlex,
  MpTooltip,
} from "@mekari/pixel";
export default {
  name: "ModalSendEmail",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpBox,
    MpModalFooter,
    MpButtonGroup,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpTextarea,
    MpAutocomplete,
    MpGrid,
    MpGridItem,
    MpText,
    MpStack,
    MpInputTag,
    MpIcon,
    MpButtonIcon,
    MpFlex,
    MpTooltip,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  methods: {
    handleSubmit() {
      this.$emit("handleClose");

      this.$toast({
        variant: "success",
        title: "Email berhasil dikirim",
        position: "top",
      });
    },
  },
};
</script>
