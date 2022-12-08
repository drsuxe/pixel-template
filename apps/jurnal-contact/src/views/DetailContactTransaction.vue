<template>
  <mp-box mt="8">
    <mp-flex justify="space-between" align="center">
      <mp-segmented-control
        v-model="currentSelect"
        name="segmented-control-llpHcs"
        default-value="option-1"
        :data="[
          { id: 'ezsCsI', label: 'Harus Anda bayar', value: 'option-1' },
          { id: 'jjsCgt', label: 'Akan Anda terima', value: 'option-2' },
        ]"
      />
      <mp-toggle v-model="tampilkanRingkasan"> Tampilkan ringkasan </mp-toggle>
    </mp-flex>

    <mp-flex direction="row" my="6">
      <mp-box :flex-basis="tampilkanRingkasan ? '65%' : '100%'">
        <mp-flex direction="column" gap="6" v-if="tampilkanRingkasan">
          <mp-flex>
            <Stats label="Hutang belum dibayar" value="Rp2.574.617.613,07" variant-color="orange" />
            <mp-divider orientation="vertical" margin-x="4" />

            <Stats label="Hutang jatuh tempo" value="Rp2.574.617.613,07" variant-color="red" />
          </mp-flex>

          <mp-flex>
            <Stats label="Total pembayaran" value="Rp2.574.617.613,07" variant-color="green" />
            <mp-divider orientation="vertical" margin-x="4" />

            <Stats label="Total kredit memo" value="Rp2.574.617.613,07" variant-color="blue" />
          </mp-flex>
        </mp-flex>

        <mp-flex v-else>
          <Stats label="Hutang belum dibayar" value="Rp2.574.617.613,07" variant-color="orange" />
          <mp-divider orientation="vertical" margin-x="4" />

          <Stats label="Hutang jatuh tempo" value="Rp2.574.617.613,07" variant-color="red" />
          <mp-divider orientation="vertical" margin-x="4" />

          <Stats label="Total pembayaran" value="Rp2.574.617.613,07" variant-color="green" />
          <mp-divider orientation="vertical" margin-x="4" />

          <Stats label="Total kredit memo" value="Rp2.574.617.613,07" variant-color="blue" />
        </mp-flex>
      </mp-box>

      <mp-box v-if="tampilkanRingkasan" flex-basis="35%" rounded="md" bg="blue.400" ml="6" position="relative">
        <!-- Star -->
        <mp-box position="absolute" top="23px" right="29px">
          <svg width="27" height="34" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.9"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.2379 0L21.4138 5.72064L27 8.72321L21.5992 12.084L18.7621 18L15.5886 12.2804L10 9.27828L15.4031 5.91695L18.2379 0Z"
              fill="url(#paint0_linear_1_56)"
            />
            <g filter="url(#filter0_f_1_56)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 23L7.41482 25.9093L10 27.5005L7.41482 29.0913L6 32L4.58626 29.0913L2 27.5005L4.58626 25.9093L6 23Z"
                fill="url(#paint1_linear_1_56)"
              />
            </g>
            <defs>
              <filter id="filter0_f_1_56" x="0" y="21" width="12" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_1_56" />
              </filter>
              <linearGradient id="paint0_linear_1_56" x1="25.092" y1="-1.25399" x2="17.7515" y2="17.7103" gradientUnits="userSpaceOnUse">
                <stop offset="0.211715" stop-color="#F6E3B3" />
                <stop offset="1" stop-color="#FEC009" />
              </linearGradient>
              <linearGradient id="paint1_linear_1_56" x1="9.10213" y1="22.373" x2="5.26692" y2="31.6985" gradientUnits="userSpaceOnUse">
                <stop offset="0.211715" stop-color="#F6E3B3" />
                <stop offset="1" stop-color="#FEC009" />
              </linearGradient>
            </defs>
          </svg>
        </mp-box>

        <!-- Bg Overlay -->
        <mp-box position="absolute" top="0" left="0" height="full" z-index="0">
          <svg width="auto" height="full" viewBox="0 0 361 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" filter="url(#filter0_d_1_53)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.951 224C2.63729 224 0 221.305 0 217.991C0 197.426 0 188.606 0 173.5V113.5C0 96 0 56.5 0 56.5C0 35.7143 0 18.1677 0 5.99723C0 2.68352 2.67367 0 5.98738 0C64.1075 0 170.318 0 207.54 0C222.041 3.70162 234.658 8.42534 244.925 14.3274C322.015 58.6399 323.523 154.207 234.067 224C158.548 224 51.1613 224 5.951 224Z"
                fill="url(#paint0_linear_1_53)"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter id="filter0_d_1_53" x="-141" y="-86" width="502" height="424" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-41" dy="14" />
                <feGaussianBlur stdDeviation="50" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_53" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_53" result="shape" />
              </filter>
              <linearGradient id="paint0_linear_1_53" x1="101.5" y1="-27" x2="11.9999" y2="284.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </mp-box>

        <!-- Content -->
        <mp-box p="4" z-index="9999">
          <mp-heading color="white">Perhitungan bersih</mp-heading>

          <mp-box mt="4">
            <mp-text color="white" line-height="1sm">Harus Anda bayar</mp-text>
            <mp-text color="white" font-weight="semibold">Rp2.190.617.691.613,07</mp-text>
          </mp-box>

          <mp-box mt="4">
            <mp-text color="white" line-height="1sm">Harus Anda bayar</mp-text>
            <mp-text color="white" font-weight="semibold">Rp2.190.617.691.613,07</mp-text>
          </mp-box>

          <mp-box mt="4">
            <mp-text color="white" line-height="1sm">Harus Anda bayar</mp-text>
            <mp-text color="white" font-weight="semibold">Rp2.190.617.691.613,07</mp-text>
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>

    <mp-box mt="6">
      <mp-flex justify="space-between" align="center">
        <mp-button variant="outline"> Lihat laporan rekening </mp-button>

        <mp-flex gap="4">
          <mp-input-group>
            <mp-input-left-addon :with-background="false">
              <mp-icon name="search" size="sm" />
            </mp-input-left-addon>
            <mp-input placeholder="Cari transaksi" />
          </mp-input-group>
          <mp-box>
            <mp-button variant="outline" @click="isOpen.DrawerAdvanceFilter = true">
              <mp-icon name="filter" variant="duotone" size="sm" mr="2" />
              Filter
            </mp-button>
          </mp-box>
        </mp-flex>
      </mp-flex>

      <mp-table :is-hoverable="false" mt="6">
        <mp-table-head bg="gray.50">
          <mp-table-row>
            <mp-table-cell as="th" scope="col"> Tanggal </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Nomor </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Tanggal jatuh tempo </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Status </mp-table-cell>
            <mp-table-cell as="th" scope="col"> <mp-text text-align="right" font-weight="semibold"> Saldo </mp-text> </mp-table-cell>
            <mp-table-cell as="th" scope="col"> </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td" scope="row">
              <mp-text>12/08/2022</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-box>
                <mp-text is-link>Sales invoice #2021/PRIMA/VI/82</mp-text>
                <mp-text font-size="sm" color="gray.600">Kirim ke PT SAR no rek xxxx</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text>07/09/2022</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-badge variant="subtle" variant-color="green">Paid</mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-text text-align="right">Rp57.900.000,00</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              <mp-flex justify="flex-end">
                <JPopover>
                  <template #trigger>
                    <mp-button variant="outline" right-icon="caret-down">Tindakan</mp-button>
                  </template>

                  <template #content>
                    <mp-popover-list>
                      <mp-popover-list-item>Salin transaksi</mp-popover-list-item>
                      <mp-popover-list-item>Retur penjualan</mp-popover-list-item>
                      <mp-popover-list-item>Atur transaksi berulang</mp-popover-list-item>
                      <mp-popover-list-item>Pratinjau faktur</mp-popover-list-item>
                      <mp-popover-list-item>Pratinjau surat jalan</mp-popover-list-item>
                      <mp-popover-list-item>Pratinjau surat jalan</mp-popover-list-item>
                    </mp-popover-list>
                  </template>
                </JPopover>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-box>

    <DrawerAdvanceFilter :is-open="isOpen.DrawerAdvanceFilter" @close="isOpen.DrawerAdvanceFilter = false" />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpSegmentedControl,
  MpToggle,
  MpButton,
  MpInput,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpText,
  MpBadge,
  MpHeading,
  MpPopoverList,
  MpPopoverListItem,
  MpIcon,
  MpInputGroup,
  MpInputLeftAddon,
  MpDivider,
} from "@mekari/pixel";
import JPopover from "../components/JPopover.vue";
import DrawerAdvanceFilter from "./DrawerAdvanceFilter.vue";
import Stats from "../components/Stats.vue";

export default {
  components: {
    MpBox,
    MpFlex,
    MpSegmentedControl,
    MpToggle,
    MpButton,
    MpInput,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpText,
    MpBadge,
    MpHeading,
    MpPopoverList,
    MpPopoverListItem,
    MpIcon,
    MpInputGroup,
    MpInputLeftAddon,
    MpDivider,

    JPopover,
    DrawerAdvanceFilter,
    Stats,
  },
  data() {
    return {
      currentSelect: "option-1",
      tampilkanRingkasan: true,
      isOpen: {
        DrawerAdvanceFilter: false,
      },
    };
  },
};
</script>
