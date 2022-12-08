<template>
  <mp-box>
    <mp-stack spacing="16" mt="16">
      <!-- Informasi Umum -->
      <mp-box>
        <mp-flex>
          <mp-icon name="profile" variant="duotone" mr="3" />
          <mp-text font-weight="semibold" font-size="lg">Informasi Umum</mp-text>
        </mp-flex>

        <mp-grid template-columns="repeat(2, 1fr)" gap="11" mt="4">
          <!-- Left -->
          <mp-flex direction="column" gap="4">
            <DisplayContent title="Nama kontak">
              <mp-text>Bapak Sugiarto Handoko Sudjarwadi</mp-text>
            </DisplayContent>

            <DisplayContent title="Nama perusahaan">
              <mp-text>PT. Daydream Corp</mp-text>
            </DisplayContent>

            <DisplayContent title="Email">
              <mp-text>sugiarto@gmail.com, sugiarto.handoko@gmail.com</mp-text>
            </DisplayContent>

            <DisplayContent title="Handphone">
              <mp-text>081234567890</mp-text>
            </DisplayContent>

            <DisplayContent title="Telepon">
              <mp-text>(021)234567</mp-text>
            </DisplayContent>

            <DisplayContent title="Fax">
              <mp-text>(021)234568</mp-text>
            </DisplayContent>

            <DisplayContent title="NPWP">
              <mp-text>12.345.678.0-123.456</mp-text>
            </DisplayContent>
          </mp-flex>

          <!-- Right -->
          <mp-flex direction="column" gap="4">
            <DisplayContent title="Identitas">
              <mp-text>KTP</mp-text>
            </DisplayContent>

            <DisplayContent title="Nomor identitas">
              <mp-text>756439974900001</mp-text>
            </DisplayContent>

            <DisplayContent title="Alamat penagihan">
              <mp-text
                >Jl. Dr. Saharjo Nomor 191 RT 06 RW 01 Kelurahan ManggaraiSelatan Kecamatan Tebet Kabupaten/Kota Jakarta SelatanProvinsi DKI Jakarta Kode Pos
                12960
              </mp-text>
            </DisplayContent>

            <DisplayContent title="Alamat pengiriman">
              <mp-text>Kompl Pergudangan Soewarna Bl B Lot 1-2, DKI Jakarta </mp-text>
            </DisplayContent>

            <DisplayContent title="Info lain">
              <mp-text
                >I also included a degree of uncertainty and possible deception init. Maybe the person talking to the main character is just a fooland a liar,
                or maybe that person actually belongs to the enemyand is out to either kill or deceive the main character or perhaps try t... Lihat
              </mp-text>
            </DisplayContent>
          </mp-flex>
        </mp-grid>
      </mp-box>

      <!-- Informasi Bank -->
      <mp-box>
        <mp-flex>
          <mp-icon name="bank" variant="duotone" mr="3" />
          <mp-text font-weight="semibold" font-size="lg">Info bank</mp-text>
        </mp-flex>

        <mp-grid template-columns="repeat(2, 1fr)" gap="11" mt="4">
          <mp-flex direction="column" gap="4">
            <mp-text font-weight="semibold" font-size="lg">Akun bank</mp-text>

            <DisplayContent title="Nama bank">
              <mp-text>PT. BANK CENTRAL ASIA TBK.</mp-text>
            </DisplayContent>

            <DisplayContent title="Kantor cabang bank">
              <mp-text>Tebet</mp-text>
            </DisplayContent>

            <DisplayContent title="Pemegang akun bank">
              <mp-text>Nomor rekening</mp-text>
            </DisplayContent>

            <DisplayContent title="Pemegang akun bank">
              <mp-text>82372646234234</mp-text>
            </DisplayContent>
          </mp-flex>

          <mp-flex direction="column" gap="4" border-left-width="1px" pl="8">
            <mp-text font-weight="semibold" font-size="lg">Akun bank</mp-text>

            <DisplayContent title="Nama bank">
              <mp-text>PT. BANK CENTRAL ASIA TBK.</mp-text>
            </DisplayContent>

            <DisplayContent title="Kantor cabang bank">
              <mp-text>Tebet</mp-text>
            </DisplayContent>

            <DisplayContent title="Pemegang akun bank">
              <mp-text>Nomor rekening</mp-text>
            </DisplayContent>

            <DisplayContent title="Pemegang akun bank">
              <mp-text>82372646234234</mp-text>
            </DisplayContent>
          </mp-flex>

          <mp-flex direction="column" gap="4">
            <mp-text font-weight="semibold" font-size="lg">Akun bank</mp-text>

            <DisplayContent title="Nama bank">
              <mp-text>PT. BANK CENTRAL ASIA TBK.</mp-text>
            </DisplayContent>

            <DisplayContent title="Kantor cabang bank">
              <mp-text>Tebet</mp-text>
            </DisplayContent>

            <DisplayContent title="Pemegang akun bank">
              <mp-text>Nomor rekening</mp-text>
            </DisplayContent>

            <DisplayContent title="Pemegang akun bank">
              <mp-text>82372646234234</mp-text>
            </DisplayContent>
          </mp-flex>
        </mp-grid>
      </mp-box>

      <!--Pemetaan Akun -->
      <mp-box>
        <mp-flex>
          <mp-icon name="account-mapping" variant="duotone" mr="3" />
          <mp-text font-weight="semibold" font-size="lg">Pemetaan akun</mp-text>
        </mp-flex>

        <mp-grid template-columns="repeat(2, 1fr)" gap="11" mt="4">
          <mp-flex direction="column" gap="4">
            <DisplayContent title="Akun hutang">
              <mp-text is-link text-decoration="underline">(2-20100) Hutang Usaha</mp-text>
            </DisplayContent>

            <DisplayContent title="Akun piutang">
              <mp-text is-link text-decoration="underline">(1-10100) Piutang Usaha</mp-text>
            </DisplayContent>

            <DisplayContent title="Piutang maksimal">
              <mp-text>Rp50.000.000,00</mp-text>
            </DisplayContent>

            <DisplayContent title="Hutang maksimal">
              <mp-text>Rp100.000.000,00</mp-text>
            </DisplayContent>

            <DisplayContent title="Syarat pembayaran utama">
              <mp-text>Net 30</mp-text>
            </DisplayContent>
          </mp-flex>
        </mp-grid>
      </mp-box>
    </mp-stack>
  </mp-box>
</template>

<script>
import { MpBox, MpIcon, MpGrid, MpStack, MpText, MpFlex } from "@mekari/pixel";
import DisplayContent from "./DisplayContent.vue";

export default {
  components: {
    MpBox,
    MpIcon,
    MpGrid,
    MpStack,
    MpText,
    MpFlex,
    DisplayContent,
  },
};
</script>
