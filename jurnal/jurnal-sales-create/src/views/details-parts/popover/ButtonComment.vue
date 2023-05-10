<template>
  <div>
    <mp-box position="relative">
      <mp-tooltip label="Komentar" position="top" use-portal>
        <mp-button-icon name="comment" @click="isOpen = true" />
      </mp-tooltip>
      <mp-badge variant-color="blue" size="sm" position="absolute" top="-4px" right="-4px" border-width="2px" border-color="white"> 0 </mp-badge>
    </mp-box>

    <mp-modal size="lg" :isOpen="isOpen">
      <mp-modal-content>
        <mp-modal-header>Comments</mp-modal-header>
        <mp-modal-close-button @click="isOpen = false" />
        <mp-modal-body>
          <mp-flex v-if="isBlank" direction="column" justify="center" align="center">
            <img src="../../../assets/Noinbox_PNG_001_Interlaced 1.png" alt="" my="3" />
            <mp-text py="4" color="gray.600">Belum ada komentar untuk transaksi ini.</mp-text>
          </mp-flex>

          <mp-flex v-else direction="column" max-height="md" overflow-y="auto" gap="3">
            <mp-flex id="left" justify="start">
              <mp-avatar name="John Doe" backgroundColor="gray" />
              <mp-stack spacing="1" ml="4">
                <mp-flex id="chat-bubble">
                  <mp-flex py="2" px="3" rounded="8px" bg="#F2F4F7">
                    <mp-box flex-grow="1" width="full" pr="2">
                      <mp-text color="brand.jurnal" font-weight="semibold" mb="2">John Doe</mp-text>
                      <mp-text>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</mp-text>
                    </mp-box>

                    <mp-box flex="none" width="50px">
                      <mp-flex align="end" h="full" justify="end">
                        <mp-text font-size="xs" color="blackAlpha.500">08:12 AM</mp-text>
                      </mp-flex>
                    </mp-box>
                  </mp-flex>
                </mp-flex>
                <mp-flex id="chat-bubble">
                  <mp-flex bg="#F2F4F7" py="2" px="3" rounded="8px">
                    <mp-box flex-grow="1" pr="2">
                      <mp-text>Lorem ipsum dolor</mp-text>
                    </mp-box>

                    <mp-box flex="none" width="50px">
                      <mp-flex align="end" h="full" justify="end">
                        <mp-text font-size="xs" color="blackAlpha.500">08:12 AM</mp-text>
                      </mp-flex>
                    </mp-box>
                  </mp-flex>
                </mp-flex>
                <mp-flex id="chat-bubble">
                  <mp-flex bg="#F2F4F7" py="2" px="3" rounded="8px">
                    <mp-box flex-grow="1" pr="2">
                      <mp-text>cupidatat non proident, sunt in culpa qui</mp-text>
                    </mp-box>

                    <mp-box flex="none" width="50px">
                      <mp-flex align="end" h="full" justify="end">
                        <mp-text font-size="xs" color="blackAlpha.500">08:12 AM</mp-text>
                      </mp-flex>
                    </mp-box>
                  </mp-flex>
                </mp-flex>
                <mp-flex id="chat-bubble">
                  <mp-flex bg="#F2F4F7" py="2" px="3" rounded="8px">
                    <mp-box flex-grow="1" pr="2">
                      <mp-text>est laborum</mp-text>
                    </mp-box>

                    <mp-box flex="none" width="50px">
                      <mp-flex align="end" h="full" justify="end">
                        <mp-text font-size="xs" color="blackAlpha.500">08:12 AM</mp-text>
                      </mp-flex>
                    </mp-box>
                  </mp-flex>
                </mp-flex>
              </mp-stack>
            </mp-flex>
            <mp-flex id="timestamp" justify="center">
              <mp-text font-size="xs" color="gray.400">Tue, 11 Jan 2022</mp-text>
            </mp-flex>

            <mp-flex id="left" justify="start">
              <mp-avatar name="Andy Bernard" backgroundColor="gray" />
              <mp-stack spacing="1" ml="4">
                <mp-flex id="chat-bubble">
                  <mp-flex py="2" px="3" rounded="8px" bg="#F2F4F7">
                    <mp-box flex-grow="1" width="full" pr="2">
                      <mp-text color="brand.jurnal" font-weight="semibold" mb="2">Andy Bernard</mp-text>
                      <mp-text
                        >Sunt in culpa qui officia deserunt <mp-text as="span" color="brand.jurnal"> @Jim Halpert </mp-text> mollit anim id est laborum</mp-text
                      >
                    </mp-box>

                    <mp-box flex="none" width="50px">
                      <mp-flex align="end" h="full" justify="end">
                        <mp-text font-size="xs" color="blackAlpha.500">08:12 AM</mp-text>
                      </mp-flex>
                    </mp-box>
                  </mp-flex>
                </mp-flex>
              </mp-stack>
            </mp-flex>
            <mp-flex id="timestamp" justify="center">
              <mp-text font-size="xs" color="gray.400">Tue, 11 Jan 2022</mp-text>
            </mp-flex>

            <mp-flex id="left" justify="start">
              <mp-avatar name="Jim Halpert" backgroundColor="gray" />
              <mp-stack spacing="1" ml="4">
                <mp-flex id="chat-bubble">
                  <mp-flex py="2" px="3" rounded="8px" bg="#F2F4F7">
                    <mp-box flex-grow="1" width="full" pr="2">
                      <mp-text color="brand.jurnal" font-weight="semibold" mb="2">Jim Halpert</mp-text>
                      <mp-text>Lorem ipsum dolor sit amet, deniem consectetur adipiscing elit. Ut pretium pretium tempor.</mp-text>
                    </mp-box>

                    <mp-box flex="none" width="50px">
                      <mp-flex align="end" h="full" justify="end">
                        <mp-text font-size="xs" color="blackAlpha.500">08:12 AM</mp-text>
                      </mp-flex>
                    </mp-box>
                  </mp-flex>
                </mp-flex>
                <mp-flex id="chat-bubble">
                  <mp-flex py="2" px="3" rounded="8px" bg="#F2F4F7">
                    <mp-box flex-grow="1" width="full" pr="2">
                      <mp-text>Lorem ipsum dolor <mp-text as="span" color="red.500"> @Rizal Candra </mp-text> </mp-text>
                    </mp-box>

                    <mp-box flex="none" width="50px">
                      <mp-flex align="end" h="full" justify="end">
                        <mp-text font-size="xs" color="blackAlpha.500">08:12 AM</mp-text>
                      </mp-flex>
                    </mp-box>
                  </mp-flex>
                </mp-flex>
              </mp-stack>
            </mp-flex>
            <mp-flex id="timestamp" justify="center">
              <mp-text font-size="xs" color="gray.400">Tue, 12 Jan 2022</mp-text>
            </mp-flex>

            <mp-flex id="left" justify="start">
              <mp-avatar name="Dwight Schrute" backgroundColor="gray" />
              <mp-stack spacing="1" ml="4">
                <mp-flex id="chat-bubble">
                  <mp-flex py="2" px="3" rounded="8px" bg="#F2F4F7">
                    <mp-box flex-grow="1" width="full" pr="2">
                      <mp-text color="brand.jurnal" font-weight="semibold" mb="2">Dwight Schrute</mp-text>
                      <mp-text>Deniem consectetur</mp-text>
                    </mp-box>

                    <mp-box flex="none" width="50px">
                      <mp-flex align="end" h="full" justify="end">
                        <mp-text font-size="xs" color="blackAlpha.500">08:12 AM</mp-text>
                      </mp-flex>
                    </mp-box>
                  </mp-flex>
                </mp-flex>
              </mp-stack>
            </mp-flex>
            <mp-flex id="timestamp" justify="center">
              <mp-text font-size="xs" color="gray.400">Tue, 13 Jan 2022</mp-text>
            </mp-flex>

            <mp-flex id="right" justify="end">
              <mp-stack spacing="1" mr="4">
                <mp-flex id="chat-bubble">
                  <mp-flex py="2" px="3" rounded="8px" bg="ice.50">
                    <mp-box flex-grow="1" width="full" pr="2">
                      <mp-text color="brand.jurnal" font-weight="semibold" mb="2">Dwight Schrute</mp-text>
                      <mp-text>Cool! <mp-text as="span" color="brand.jurnal"> @Dwight Schrute </mp-text> </mp-text>
                    </mp-box>

                    <mp-box flex="none" width="50px">
                      <mp-flex align="end" h="full" justify="end">
                        <mp-text font-size="xs" color="blackAlpha.500">08:12 AM</mp-text>
                      </mp-flex>
                    </mp-box>
                  </mp-flex>
                </mp-flex>
              </mp-stack>
              <mp-avatar name="Rizal Candra" backgroundColor="sky" />
            </mp-flex>
          </mp-flex>
        </mp-modal-body>
        <mp-modal-footer border-top-width="1px" border-top-color="gray.100">
          <mp-flex v-if="isApproved" width="full" justify="center" mt="3">
            <mp-text font-size="sm" color="gray.600">View only. Transaction is already approved</mp-text>
          </mp-flex>

          <mp-flex v-else w="full" mt="2">
            <mp-popover :is-open="isMentionOpen" is-manual>
              <mp-popover-trigger> <mp-box></mp-box></mp-popover-trigger>
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
            <mp-box w="full">
              <mp-input v-model="comment" @change="handleOpenPopover" placeholder="Type a comment..." />
            </mp-box>
            <mp-button ml="2">Submit</mp-button>
          </mp-flex>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </div>
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
  MpStack,
  MpInput,
  MpText,
  MpAvatar,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpTooltip,
  MpButtonIcon,
  MpBadge,
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
    MpStack,
    MpInput,
    MpText,
    MpAvatar,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpTooltip,
    MpButtonIcon,
    MpBadge,
  },
  data() {
    return {
      isOpen: false,
      isBlank: true,
      isApproved: false,
      comment: "",
      isMentionOpen: false,
    };
  },
  methods: {
    handleOpenPopover() {
      const string = this.comment.split(" ");
      const lastStr = string.slice(-1);
      const lastStrFirstCharater = lastStr.toString().charAt(0);

      if (lastStrFirstCharater === "@") {
        this.isMentionOpen = true;
      } else {
        this.isMentionOpen = false;
      }
    },
  },
};
</script>
