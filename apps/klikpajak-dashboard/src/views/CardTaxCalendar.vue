<template>
  <mp-box background="white" padding="6" border-radius="md" border-width="1px">
    <mp-text fontWeight="semibold">Kalender pajak</mp-text>

    <mp-text py="16" color="gray.400" font-size="sm"> ⚠️ Calendar component is coming soon. </mp-text>

    <mp-stack spacing="6">
      <mp-flex>
        <mp-box flex="none" w="8">
          <mp-box display="flex" bg="blue.50" rounded="md" w="8" h="8" justify-content="center" align-items="center">
            <mp-text color="blue.500" font-weight="bold">20</mp-text>
          </mp-box>
        </mp-box>

        <mp-flex flex-direction="column" pl="2" gap="1">
          <mp-text font-size="sm" lineHeight="sm"> Batas Akhir Pelaporan SPT PPh Masa Desember 2021 </mp-text>
          <mp-text font-size="sm" lineHeight="sm" is-link>Lapor SPT</mp-text>
        </mp-flex>
      </mp-flex>
      <mp-flex>
        <mp-box flex="none" w="8">
          <mp-box display="flex" bg="blue.50" rounded="md" w="8" h="8" justify-content="center" align-items="center">
            <mp-text color="blue.500" font-weight="bold">30</mp-text>
          </mp-box>
        </mp-box>

        <mp-flex flex-direction="column" pl="2" gap="1">
          <mp-text font-size="sm" lineHeight="sm"> Batas Akhir Pelaporan SPT PPN Masa Desember 2021 </mp-text>
          <mp-text font-size="sm" lineHeight="sm" is-link>Lapor SPT</mp-text>
        </mp-flex>
      </mp-flex>
    </mp-stack>
  </mp-box>
</template>

<script>
import { MpBox, MpText, MpFlex, MpStack } from "@mekari/pixel";
export default {
  components: {
    MpBox,
    MpText,
    MpFlex,
    MpStack,
  },
};
</script>
