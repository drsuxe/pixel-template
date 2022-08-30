<template>
  <mp-box bg="ice.50" p="3" rounded="md" width="276px">
    <template v-if="type === 'nama-produk'">
      <mp-text font-weight="semibold" mb="1">Nama produk</mp-text>
      <mp-text> Tulis nama produk beserta keterangannya, seperti tipe, merek, dan keterangan lainnya. </mp-text>
      <mp-text mt="4">Contoh: Bila anda membuat produk sebuah Komputer, maka beri nama produk tersebut seperti Macbook Pro 15 Inch Space Grey</mp-text>
    </template>

    <template v-if="type === 'kode-produk'">
      <mp-text font-weight="semibold" mb="1">Kode produk</mp-text>
      <mp-text>
        Masukkan Kode / SKU untuk setiap produk untuk mempermudah Anda dalam pelacakan. Agar lebih mudah, bagi Anda yang mempunyai Barcode Scanner, silahkan
        scan barcode produk Anda untuk mengisi kolom Kode / SKU dengan nomor barcode.
      </mp-text>

      <mp-box as="ul" list-style-type="none" mt="4">
        <mp-text as="li">Contoh:</mp-text>
        <mp-text as="li">Nama : Macbook Pro 15 Inch Space Grey</mp-text>
        <mp-text as="li">Kode : MP-15-001</mp-text>
      </mp-box>
    </template>

    <template v-if="type === 'barcode'">
      <mp-text font-weight="semibold" mb="1">Barcode</mp-text>
      <mp-text> ? </mp-text>
    </template>

    <template v-if="type === 'unit-produk'">
      <mp-text font-weight="semibold" mb="1">Unit produk</mp-text>
      <mp-text>
        Tentukan satuan yang akan digunakan untuk mendeskripsi jumlah produk. Anda dapat menambahkan beberapa unit lain untuk produk ini setelah produk dibuat.
      </mp-text>

      <mp-box mt="4">
        <mp-text>Contoh</mp-text>
        <mp-box as="ul" list-style-position="inside">
          <mp-text as="li">Buah, pcs</mp-text>
          <mp-text as="li">Kg, gr, liter</mp-text>
          <mp-text as="li">Cm, m</mp-text>
        </mp-box>
      </mp-box>
    </template>

    <template v-if="type === 'kategori-produk'">
      <mp-text font-weight="semibold" mb="1">Kategori produk</mp-text>
      <mp-text> Tentukan kategori setiap produk untuk mengelompokkan produk per kategori. </mp-text>

      <mp-box mt="4">
        <mp-text>Contoh :</mp-text>
        <mp-box as="ul" ml="3">
          <mp-text as="li">Elektronik, Lebaran, Komponen, dll</mp-text>
          <mp-text as="li">Penentuan kategori bisa dari jenis, musim, dll.</mp-text>
        </mp-box>
      </mp-box>
    </template>

    <template v-if="type === 'deskripsi-produk'">
      <mp-text font-weight="semibold" mb="1">Deskripsi produk</mp-text>
      <mp-text> Masukkan deskripsi mengenai produk untuk menggambarkan barang atau jasa Anda. </mp-text>

      <mp-box mt="4">
        <mp-text>Contoh :</mp-text>
        <mp-box as="ul" list-style-type="none">
          <mp-text as="li">Macbook Pro 15 Inch 256GB 3.7Ghz, Space Grey with ATI Radeon Graphics.</mp-text>
        </mp-box>
      </mp-box>
    </template>

    <template v-if="type === 'jenis-barang'">
      <mp-text font-weight="semibold" mb="1">Jenis barang</mp-text>
      <mp-text> Tipe produk Single adalah barang yang dijual (secara terpisah) / sebagai produk yang berdiri sendiri. </mp-text>
      <mp-text mt="4">Tipe produk Bundle adalah barang yang dijual secara keseluruhan, dikemas, dan atau gabungan.</mp-text>
    </template>

    <template v-if="type === 'beli'">
      <mp-text font-weight="semibold" mb="1">Saya beli produk ini</mp-text>
      <mp-text>Centang “Saya Beli Produk Ini” jika produk tersebut terdaftar sebagai produk yang dibeli. </mp-text>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Harga beli satuan</mp-text>
        <mp-text>Isi harga beli produk. Harga ini tidak bersifat mutlak atau masih dapat diubah pada saat membuat pembelian</mp-text>
      </mp-box>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Akun pembelian</mp-text>
        <mp-text>Akun untuk mencatat biaya pembelian produk</mp-text>
      </mp-box>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Pajak beli</mp-text>
        <mp-text>Tentukan pajak utama (default) ketika dilakukan pembelian untuk produk ini seperti.</mp-text>
      </mp-box>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Contoh : </mp-text>
        <mp-box as="ul" list-style-type="none">
          <mp-text as="li">Harga Beli Satuan : Rp 10.000.000,00</mp-text>
          <mp-text as="li">Akun Pembelian : (5-5000) Cost of Good Sold</mp-text>
          <mp-text as="li">Pajak Beli : PPN</mp-text>
        </mp-box>
      </mp-box>
    </template>

    <template v-if="type === 'jual'">
      <mp-text font-weight="semibold" mb="1">Saya jual produk ini</mp-text>
      <mp-text>Centang “Saya Jual Produk Ini” jika produk tersebut terdaftar sebagai produk yang dijual.</mp-text>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Harga jual satuan</mp-text>
        <mp-text>Isi harga jual produk. Harga ini tidak bersifat mutlak atau masih dapat diubah pada saat membuat penjualan</mp-text>
      </mp-box>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Akun penjualan</mp-text>
        <mp-text>Akun untuk mencatat pendapatan penjualan produk</mp-text>
      </mp-box>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Pajak jual</mp-text>
        <mp-text
          >Tentukan pajak yang dikenakan terhadap produk ini ketika melakukan penjualan. Hal ini tidak bersifat mutlak atau masih dapat diubah pada saat membuat
          penjualan.</mp-text
        >
      </mp-box>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Contoh : </mp-text>
        <mp-box as="ul" list-style-type="none">
          <mp-text as="li">Harga Beli Satuan : Rp25.000.000,00</mp-text>
          <mp-text as="li">Akun Pembelian : (4-4000) Pendapatan</mp-text>
          <mp-text as="li">Pajak Beli : PPN</mp-text>
        </mp-box>
      </mp-box>
    </template>

    <template v-if="type === 'monitor-persediaan'">
      <mp-text font-weight="semibold" mb="1">Monitor persediaan barang</mp-text>
      <mp-text>Centang produk ini bila Anda ingin monitor persediaan barang.</mp-text>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Batas minimum stok</mp-text>
        <mp-text>Tentukan batas stok minimum dari produk tersebut dan sistem Jurnal akan memberikan notifikasi bila stok produk tersebut segera habis.</mp-text>
      </mp-box>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Akun persediaan barang default</mp-text>
        <mp-text>Pilih akun yang menampung nilai persediaan barang secara default.</mp-text>
      </mp-box>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Contoh : </mp-text>
        <mp-box as="ul" list-style-type="none">
          <mp-text as="li">Batas Stok Minimum : 1</mp-text>
          <mp-text as="li">Akun Persediaan Barang Default : (1-1020)</mp-text>
        </mp-box>
      </mp-box>
    </template>

    <template v-if="type === 'product-bundle'">
      <mp-text font-weight="semibold" mb="1">Product Bundle</mp-text>
      <mp-text>Atur informasi produk-produk yang dipilih dan digabung menjadi Produk Bundle.</mp-text>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Produk/Service</mp-text>
        <mp-text>Pilih produk yang Anda inginkan dan tentukan kuantitas serta harga dari setiap produk pilihan.</mp-text>
      </mp-box>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Akun (Centang Monitor Persediaan Barang untuk mengaktifkan)</mp-text>
        <mp-text>Pilih Akun persediaan yang menampung nilai persediaannya.</mp-text>
      </mp-box>

      <mp-box mt="4">
        <mp-text font-weight="semibold">Contoh : </mp-text>
        <mp-box as="ul" list-style-type="none">
          <mp-text as="li">Produk/Service : 2018-1-00003 | Apple iMac Pro 21.5 Inch</mp-text>
          <mp-text as="li">Kuantitas : 1</mp-text>
          <mp-text as="li">Harga : Rp19.900.000,00</mp-text>
          <mp-text as="li">Akun : (1-10200) - Persediaan Barang</mp-text>
        </mp-box>
      </mp-box>
    </template>
  </mp-box>
</template>

<script>
import { MpBox, MpText } from "@mekari/pixel";
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  components: {
    MpBox,
    MpText,
  },
};
</script>
