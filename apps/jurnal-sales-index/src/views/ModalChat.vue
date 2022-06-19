<template>
  <mp-box>
    <mp-modal size="2xl" :isOpen="isOpen">
      <mp-modal-content>
        <mp-modal-header>Comment</mp-modal-header>
        <mp-modal-close-button @click="$emit('handleClose')" />
        <mp-modal-body>
          <mp-flex v-if="type === 'blank'" direction="column" justify="center" align="center">
            <img src="../assets/Inbox.svg" alt="" my="3" />
            <mp-text py="4" color="gray.600">No comments for this transaction yet.</mp-text>
          </mp-flex>

          <mp-flex v-if="type === 'comments'" direction="column" max-height="md" overflow-y="auto" gap="3">
            <mp-flex id="repply" justify="start">
              <mp-avatar name="Andy Bernard" backgroundColor="sky" />
              <mp-flex direction="column" gap="1" ml="4">
                <mp-box py="2" px="3" rounded="8px" bg="#F2F4F7">
                  <mp-text color="brand.jurnal" font-weight="semibold" mb="2">Andy Bernard</mp-text>
                  <mp-text
                    >Sunt in culpa qui officia deserunt <mp-text as="span" color="brand.jurnal"> @Jim Halpert </mp-text> mollit anim id est laborum</mp-text
                  >
                </mp-box>
                <mp-box py="2" px="3" rounded="8px" bg="#F2F4F7">
                  <mp-text>Lorem ipsum dolor <mp-text as="span" color="red.500"> @Rizal Candra </mp-text></mp-text>
                </mp-box>
                <mp-box py="2" px="3" rounded="8px" bg="#F2F4F7">
                  <mp-text>Lorem ipsum dolor <mp-text as="span" color="red.500"> @Rizal Candra </mp-text></mp-text>
                </mp-box>
                <mp-box py="2" px="3" rounded="8px" bg="#F2F4F7">
                  <mp-text>Lorem ipsum dolor <mp-text as="span" color="red.500"> @Rizal Candra </mp-text></mp-text>
                </mp-box>
                <mp-box py="2" px="3" rounded="8px" bg="#F2F4F7">
                  <mp-text>Lorem ipsum dolor <mp-text as="span" color="red.500"> @Rizal Candra </mp-text></mp-text>
                </mp-box>
              </mp-flex>
            </mp-flex>
            <mp-flex id="repply" justify="start">
              <mp-avatar name="Andy Bernard" backgroundColor="sky" />
              <mp-flex direction="column" gap="1" ml="4">
                <mp-box py="2" px="3" rounded="8px" bg="#F2F4F7">
                  <mp-text color="brand.jurnal" font-weight="semibold" mb="2">Andy Bernard</mp-text>
                  <mp-text
                    >Sunt in culpa qui officia deserunt <mp-text as="span" color="brand.jurnal"> @Jim Halpert </mp-text> mollit anim id est laborum</mp-text
                  >
                </mp-box>
                <mp-box py="2" px="3" rounded="8px" bg="#F2F4F7">
                  <mp-text>Lorem ipsum dolor <mp-text as="span" color="red.500"> @Rizal Candra </mp-text></mp-text>
                </mp-box>
              </mp-flex>
            </mp-flex>
            <mp-flex id="repply" justify="start">
              <mp-avatar name="Andy Bernard" backgroundColor="sky" />
              <mp-flex direction="column" gap="1" ml="4">
                <mp-box py="2" px="3" rounded="8px" bg="#F2F4F7">
                  <mp-text color="brand.jurnal" font-weight="semibold" mb="2">Andy Bernard</mp-text>
                  <mp-text
                    >Sunt in culpa qui officia deserunt <mp-text as="span" color="brand.jurnal"> @Jim Halpert </mp-text> mollit anim id est laborum</mp-text
                  >
                </mp-box>
              </mp-flex>
            </mp-flex>
            <mp-flex id="send" justify="end">
              <mp-flex direction="column" gap="1" mr="4">
                <mp-box py="2" px="3" rounded="8px" bg="ice.50">
                  <mp-text color="blue.500" font-weight="semibold" mb="2">Rizal Chandra</mp-text>
                  <mp-text>Cool! <mp-text as="span" color="brand.jurnal"> @Dwight Schrute </mp-text> </mp-text>
                </mp-box>
              </mp-flex>
              <mp-avatar name="Rizal Candra" backgroundColor="violet" />
            </mp-flex>
          </mp-flex>
        </mp-modal-body>
        <mp-modal-footer border-top-width="1px" border-top-color="gray.100">
          <mp-flex w="full" mt="2">
            <mp-popover id="popover-mention" ref="popoverMention">
              <mp-popover-trigger>
                <mp-box w="0"></mp-box>
              </mp-popover-trigger>
              <mp-popover-content max-width="64" bg="white" rounded="md" shadow="lg" border-width="1px" border-color="gray.400">
                <mp-popover-list>
                  <mp-popover-list-item v-for="index in 4" :key="index">
                    <mp-flex align-items="center">
                      <mp-avatar name="Christin Purnama Sari" size="md" background-color="gray" />
                      <mp-box margin-left="3">
                        <mp-text font-size="md" line-height="1sm"> Christin Purnama Sari </mp-text>
                        <mp-text font-size="sm" line-height="sm" color="gray.600"> cps@theoffice.co.id </mp-text>
                      </mp-box>
                    </mp-flex>
                  </mp-popover-list-item>
                </mp-popover-list>
              </mp-popover-content>
            </mp-popover>
            <mp-input @click="handleOpenPopoverMention" placeholder="Type a comment..." />

            <mp-button ml="2">Submit</mp-button>
          </mp-flex>
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
  MpModalFooter,
  MpModalBody,
  MpModalCloseButton,
  MpButton,
  MpBox,
  MpFlex,
  MpInput,
  MpText,
  MpAvatar,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
export default {
  name: "ModalChat",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
    MpButton,
    MpBox,
    MpFlex,
    MpInput,
    MpText,
    MpAvatar,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    isOpen: { type: [Boolean] },
    type: { type: [String] },
  },
  methods: {
    handleOpenPopoverMention(e) {
      console.log(e);
      this.$refs.popoverMention.openPopover();
    },
  },
};
</script>

<style lang="scss" scoped></style>
