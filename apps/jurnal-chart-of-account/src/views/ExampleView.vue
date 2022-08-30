<template>
  <mp-box p="8">
    <mp-grid gap="3">
      <mp-box bg="green.500">
        <mp-input />
      </mp-box>
      <mp-form-control control-id="nama-akun" bg="red.500">
        <mp-form-label>Nama akun <mp-text ml="1" color="red.500">*</mp-text> </mp-form-label>
        <mp-input />
      </mp-form-control>

      <mp-form-control control-id="koden-akun" bg="blue.400">
        <mp-form-label>Kode akun <mp-text ml="1" color="red.500">*</mp-text> </mp-form-label>
        <mp-input />
      </mp-form-control>
    </mp-grid>
  </mp-box>
</template>

<script>
import { MpBox, MpGrid, MpText, MpFormControl, MpFormLabel, MpInput } from "@mekari/pixel";
export default {
  components: {
    MpBox,
    MpGrid,
    MpText,
    MpFormControl,
    MpFormLabel,
    MpInput,
  },
  data() {
    return {
      namaBank: "",
      kategoriAkun: "",
      showAkun: false,
      type: "",
      deskripsi: "",

      suggestions: [
        "(1-10004) Bank BCA",
        "(1-10005) Bank BNI",
        "(1-10006) Bank BNI Corporate",
        "(1-10007) Bank BNI 46 Corporate ",
        "(1-10008) Bank Corporate",
        "(1-10009) Bank US Dollar",
        "(1-10010) Bank US Dollar 2",
        "(1-10011) Bank US Dollar 3",
        "(1-10012) Bank US Dollar 4",
        "(1-10013) Bank US Dollar 5",
        "(1-10014) Bank US Dollar 6",
      ],
      isLoading: false,
      isShowSuggestions: true,
    };
  },
  methods: {
    handleChangeShowAkun() {
      this.showAkun = !this.showAkun;

      if (this.showAkun) this.type = "sub-akun";
    },
  },
};
</script>

<style lang="scss" scoped></style>
