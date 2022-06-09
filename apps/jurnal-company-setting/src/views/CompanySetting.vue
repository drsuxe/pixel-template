<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-collapsed />
      <SidebarChild />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <SubHeaderChild title="Settings" subtitle="Pengaturan Perusahaan" />
        <mp-box
          min-height="100%"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <mp-grid template-columns="repeat(12, 1fr)">
            <!-- Left -->
            <mp-grid-item col-span="5">
              <mp-stack spacing="16">
                <!-- Info perusahaan -->
                <mp-box>
                  <mp-flex py="1" justify-content="space-between">
                    <mp-heading as="h3" fontSize="lg"
                      >Info perusahaan</mp-heading
                    >
                    <mp-tooltip
                      label="Ubah info di Mekari Account"
                      id="mekari-account"
                    >
                      <mp-button-icon
                        @click="goToMekariAccount"
                        size="sm"
                        name="newtab"
                        isRound
                      />
                    </mp-tooltip>
                  </mp-flex>

                  <mp-box
                    v-if="companyLogo === 'filled'"
                    py="2"
                    as="img"
                    h="12"
                    src="https://mekari.com/wp-content/uploads/2022/04/logo-mekari.svg"
                    alt=""
                  />
                  <mp-box py="2" v-else>
                    <mp-flex
                      h="16"
                      w="16"
                      bg="background"
                      alignItems="center"
                      justify-content="center"
                      borderRadius="6"
                    >
                      <mp-icon name="company" size="lg" />
                    </mp-flex>
                  </mp-box>

                  <mp-flex flex-direction="column">
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Nama perusahaan
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          PT Central Perk Indonesia
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Alamat perusahaan
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          Jalan ring road no 9
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Telepon
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md"> - </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          NPWP
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md"> - </mp-text>
                      </mp-flex>
                    </mp-flex>
                  </mp-flex>
                </mp-box>

                <!-- Info tambahan -->
                <mp-box>
                  <mp-flex py="1" justify-content="space-between">
                    <mp-heading as="h3" fontSize="lg"
                      >Info tambahan
                    </mp-heading>
                    <mp-tooltip label="Ubah info" id="info-tambahan">
                      <mp-button-icon
                        @click="handleOpenInfoTambahan()"
                        :isDisabled="open === 'infoTambahan'"
                        size="sm"
                        name="edit"
                        isRound
                      />
                    </mp-tooltip>
                  </mp-flex>

                  <mp-flex
                    v-if="open === 'infoTambahan'"
                    flex-direction="column"
                    id="edit-info-tambahan"
                  >
                    <mp-flex py="2">
                      <mp-checkbox
                        v-model="tempInfoTambahan.tampilkanLogoDiLaporan"
                        align-self="center"
                        id="reportLogo"
                        >Tampilkan logo di laporan</mp-checkbox
                      >
                    </mp-flex>
                    <mp-flex pb="5">
                      <mp-checkbox
                        v-model="tempInfoTambahan.invoiceAddress"
                        align-self="center"
                        id="companyInvoiceAddress"
                        >Alamat invoice beda dengan alamat
                        perusahaan</mp-checkbox
                      >
                    </mp-flex>
                    <mp-flex
                      v-if="tempInfoTambahan.invoiceAddress"
                      flex-direction="column"
                      gap="1"
                      pb="5"
                    >
                      <mp-flex>
                        <mp-text font-weight="semibold" display="inline">
                          Alamat invoice
                        </mp-text>
                      </mp-flex>
                      <mp-textarea
                        v-model="tempInfoTambahan.alamatInvoice"
                        isFullWidth
                      />
                    </mp-flex>
                    <mp-flex flex-direction="column" gap="1" pb="5">
                      <mp-text font-weight="semibold" display="inline">
                        Alamat Pengiriman
                      </mp-text>
                      <mp-textarea
                        v-model="tempInfoTambahan.alamatPengiriman"
                        isFullWidth
                      />
                    </mp-flex>
                    <mp-flex flex-direction="column" gap="1" pb="5">
                      <mp-text font-weight="semibold" display="inline">
                        Fax
                      </mp-text>
                      <mp-input
                        type="text"
                        v-model="tempInfoTambahan.fax"
                        isFullWidth
                      />
                    </mp-flex>
                    <mp-flex flex-direction="column" gap="1" pb="5">
                      <mp-text font-weight="semibold" display="inline">
                        Website
                      </mp-text>
                      <mp-input
                        type="text"
                        v-model="tempInfoTambahan.website"
                        isFullWidth
                      />
                    </mp-flex>
                    <mp-flex flex-direction="column" gap="1" pb="5">
                      <mp-text font-weight="semibold" display="inline">
                        Email
                      </mp-text>
                      <mp-input
                        type="email"
                        v-model="tempInfoTambahan.email"
                        isFullWidth
                      />
                      <mp-text
                        v-if="emailStatus === 'unverified'"
                        color="gray.600"
                        fontSize="sm"
                        lineHeight="sm"
                        display="inline"
                      >
                        Belum menerima email konfirmasi?
                        <mp-text
                          as="span"
                          isLink
                          fontSize="sm"
                          lineHeight="sm"
                          display="inline"
                        >
                          Kirim ulang email
                        </mp-text>
                      </mp-text>
                    </mp-flex>
                    <mp-flex py="2" justify-content="end">
                      <mp-button-group spacing="2">
                        <mp-button
                          @click="handleResetInfoTambahan()"
                          variant="ghost"
                        >
                          Batalkan
                        </mp-button>
                        <mp-button
                          @click="handleSaveInfoTambahan()"
                          variant="solid"
                        >
                          Simpan
                        </mp-button>
                      </mp-button-group>
                    </mp-flex>
                  </mp-flex>
                  <mp-flex v-else flex-direction="column">
                    <mp-flex py="2">
                      <mp-checkbox
                        isDisabled
                        align-self="center"
                        id="reportLogo"
                        v-model="storedInfoTambahan.tampilkanLogoDiLaporan"
                        >Tampilkan logo di laporan</mp-checkbox
                      >
                    </mp-flex>
                    <mp-flex pb="2">
                      <mp-checkbox
                        isDisabled
                        align-self="center"
                        id="companyInvoiceAddress"
                        v-model="storedInfoTambahan.invoiceAddress"
                        >Alamat invoice beda dengan alamat
                        perusahaan</mp-checkbox
                      >
                    </mp-flex>

                    <mp-flex v-if="storedInfoTambahan.invoiceAddress">
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Alamat Invoice
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          {{ storedInfoTambahan.alamatInvoice }}
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Alamat Pengiriman
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          {{ storedInfoTambahan.alamatPengiriman }}
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Fax
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          {{ storedInfoTambahan.fax || "-" }}
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Website
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          {{ storedInfoTambahan.website || "-" }}
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Email
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          {{ storedInfoTambahan.email || "-" }}
                        </mp-text>
                        <mp-flex v-if="emailStatus === 'unverified'">
                          <mp-tooltip
                            id="emailNotConfirmed"
                            label="Anda belum mengonfirmasi email ini."
                            position="top"
                          >
                            <mp-icon
                              size="sm"
                              ml="2"
                              name="warning-triangle"
                              color="orange.700"
                            />
                          </mp-tooltip>
                        </mp-flex>
                      </mp-flex>
                    </mp-flex>
                  </mp-flex>
                </mp-box>
              </mp-stack>
            </mp-grid-item>

            <!-- Right -->
            <mp-grid-item col-start="7" col-span="5">
              <mp-stack spacing="16">
                <!-- Info akun bank -->
                <mp-box>
                  <mp-flex py="1" justify-content="space-between">
                    <mp-heading as="h3" fontSize="lg" lineHeight="lg"
                      >Info akun bank</mp-heading
                    >
                    <mp-tooltip label="Ubah info akun bank" id="bank-account">
                      <mp-button-icon
                        @click="handleOpenInfoAkunBank()"
                        :isDisabled="open === 'infoAkunBank'"
                        size="sm"
                        name="edit"
                        isRound
                      />
                    </mp-tooltip>
                  </mp-flex>

                  <mp-flex
                    v-if="open === 'infoAkunBank'"
                    flex-direction="column"
                    id="edit-info-akun-bank"
                  >
                    <mp-flex flex-direction="column" gap="1" pb="5">
                      <mp-text font-weight="semibold" display="inline">
                        Nama bank
                      </mp-text>
                      <mp-input
                        type="text"
                        v-model="tempInfoAkunBank.namaBank"
                        isFullWidth
                      />
                    </mp-flex>
                    <mp-flex flex-direction="column" gap="1" pb="5">
                      <mp-text font-weight="semibold" display="inline">
                        Cabang bank
                      </mp-text>
                      <mp-input
                        type="text"
                        v-model="tempInfoAkunBank.cabangBank"
                        isFullWidth
                      />
                    </mp-flex>
                    <mp-flex flex-direction="column" gap="1" pb="5">
                      <mp-text font-weight="semibold" display="inline">
                        Alamat bank
                      </mp-text>
                      <mp-textarea
                        v-model="tempInfoAkunBank.alamatBank"
                        isFullWidth
                      />
                    </mp-flex>
                    <mp-flex flex-direction="column" gap="1" pb="5">
                      <mp-text font-weight="semibold" display="inline">
                        Nomor rekening
                      </mp-text>
                      <mp-input
                        type="text"
                        v-model="tempInfoAkunBank.nomorRekening"
                        isFullWidth
                      />
                    </mp-flex>
                    <mp-flex flex-direction="column" gap="1" pb="5">
                      <mp-text font-weight="semibold" display="inline">
                        Nama pemilik rekening
                      </mp-text>
                      <mp-input
                        type="text"
                        v-model="tempInfoAkunBank.namaPemilikRekening"
                        isFullWidth
                      />
                    </mp-flex>
                    <mp-flex flex-direction="column" gap="1" pb="5">
                      <mp-text font-weight="semibold" display="inline">
                        Swift code
                      </mp-text>
                      <mp-input
                        type="email"
                        v-model="tempInfoAkunBank.swiftCode"
                        isFullWidth
                      />
                    </mp-flex>
                    <mp-flex py="2" justify-content="end">
                      <mp-button-group spacing="2">
                        <mp-button
                          @click="handleResetInfoAkunBank()"
                          variant="ghost"
                        >
                          Batalkan
                        </mp-button>
                        <mp-button
                          @click="handleSaveInfoAkunBank()"
                          variant="solid"
                        >
                          Simpan
                        </mp-button>
                      </mp-button-group>
                    </mp-flex>
                  </mp-flex>
                  <mp-flex v-else flex-direction="column">
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Nama bank
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          {{ storedInfoAkunBank.namaBank || "-" }}
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Cabang bank
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          {{ storedInfoAkunBank.cabangBank || "-" }}
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Alamat bank
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          {{ storedInfoAkunBank.alamatBank || "-" }}
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Nomor Rekening
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          {{ storedInfoAkunBank.nomorRekening || "-" }}
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Nama pemilik rekening
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          {{ storedInfoAkunBank.namaPemilikRekening || "-" }}
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex>
                      <mp-flex flex="40%" py="1.5">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                        >
                          Swift code
                        </mp-text>
                      </mp-flex>
                      <mp-flex flex="60%" py="1.5">
                        <mp-text font-size="md" line-height="md">
                          {{ storedInfoAkunBank.swiftCode || "-" }}
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                  </mp-flex>
                </mp-box>

                <!-- Pengaturan fitur tambahan -->
                <mp-box>
                  <mp-flex pb="1" justify-content="space-between">
                    <mp-heading as="h3" fontSize="lg"
                      >Pengaturan fitur tambahan</mp-heading
                    >
                    <mp-tooltip label="Ubah info" id="pengaturanFiturTambahan">
                      <mp-button-icon
                        @click="handleOpenPengaturanFiturTambahan()"
                        :isDisabled="open === 'pengaturanFiturTambahan'"
                        size="sm"
                        name="edit"
                        isRound
                      />
                    </mp-tooltip>
                  </mp-flex>

                  <mp-flex
                    v-if="open === 'pengaturanFiturTambahan'"
                    flex-direction="column"
                    id="edit-pengaturan-fitur-tambahan"
                  >
                    <mp-flex py="1.5">
                      <mp-checkbox
                        align-self="center"
                        id="approval"
                        :is-checked="tempPengaturanFiturTambahan.approval"
                        @change="handleActivateApproval"
                        :is-disabled="alreadyHaveTranscaction === 'yes'"
                        >Approval</mp-checkbox
                      >

                      <mp-tooltip
                        id="approval"
                        label="Hanya pemilik akun perusahaan yang dapat mengaktifkan fitur ini."
                        position="top"
                        width="241px"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          :color="
                            alreadyHaveTranscaction === 'yes'
                              ? 'gray.400'
                              : 'gray.600'
                          "
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        align-self="center"
                        id="gettingStarted"
                        v-model="tempPengaturanFiturTambahan.gettingStarted"
                        >Getting started</mp-checkbox
                      >
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        align-self="center"
                        id="multiPotongan"
                        v-model="tempPengaturanFiturTambahan.multiPotongan"
                        :is-disabled="alreadyHaveTranscaction === 'yes'"
                        >Multi pemotongan</mp-checkbox
                      >
                      <mp-tooltip
                        id="multiPotongan"
                        label="Untuk memotong pajak pihak ketiga hingga 10 pemotongan saat membuat penagihan penjualan. Hanya pemilik akun perusahaan yang dapat mengaktifkan fitur ini dan pastikan telah menggunakan versi terkini halaman Penjualan."
                        position="top"
                        width="241px"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          :color="
                            alreadyHaveTranscaction === 'yes'
                              ? 'gray.400'
                              : 'gray.600'
                          "
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        align-self="center"
                        id="terimaEmailKinerjaBulananPerusahaan"
                        v-model="
                          tempPengaturanFiturTambahan.terimaEmailKinerjaBulananPerusahaan
                        "
                        >Terima email kinerja bulanan perusahaan</mp-checkbox
                      >
                      <mp-tooltip
                        id="terimaEmailKinerjaBulananPerusahaan"
                        label="Email bulanan berisi total penjualan, saldo kas, dan rasio keuangan yang akan dikirim ke pemilik akun perusahaan."
                        position="top"
                        width="241px"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          color="gray.600"
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        align-self="center"
                        id="termasukPajak"
                        v-model="tempPengaturanFiturTambahan.termasukPajak"
                        >Termasuk pajak</mp-checkbox
                      >
                      <mp-tooltip
                        id="termasukPajak"
                        label="Untuk membebankan pajak ke transaksi penjualan atau pembelian."
                        position="top"
                        width="241px"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          color="gray.600"
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        align-self="center"
                        id="tagTransaksi"
                        v-model="tempPengaturanFiturTambahan.tagTransaksi"
                        >Tag transaksi</mp-checkbox
                      >
                      <mp-tooltip
                        id="tagTransaksi"
                        :label="
                          userSubscription === 'pro'
                            ? 'Untuk mengelompokkan transaksi dan sebagai filter tambahan ketika membuka laporan.'
                            : 'Upgrade ke Pro untuk dapat memfilter  laporan transaksi Anda. '
                        "
                        position="top"
                        width="241px"
                      >
                        <mp-box as="a" href="" target="_blank">
                          <mp-icon
                            ml="1"
                            :name="
                              userSubscription === 'pro' ? 'info' : 'upgrade'
                            "
                            :variant="
                              userSubscription === 'pro' ? 'outline' : 'duotone'
                            "
                            align-self="center"
                            color="gray.600"
                            size="sm"
                            cursor="pointer"
                          />
                        </mp-box>
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        align-self="center"
                        id="multiMataUang"
                        v-model="tempPengaturanFiturTambahan.multiMataUang"
                        :is-disabled="alreadyHaveTranscaction === 'yes'"
                        >Multi mata uang</mp-checkbox
                      >
                      <mp-tooltip
                        id="multiMataUang"
                        label="Untuk menambahkan mata uang asing yang dibutuhkan pada transaksi. Hanya pemilik akun perusahaan yang dapat mengaktifkan fitur ini."
                        position="top"
                        width="241px"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          :color="
                            alreadyHaveTranscaction === 'yes'
                              ? 'gray.400'
                              : 'gray.600'
                          "
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        align-self="center"
                        id="pembulatanPajak"
                        v-model="tempPengaturanFiturTambahan.pembulatanPajak"
                        >Pembulatan Pajak</mp-checkbox
                      >
                      <mp-tooltip
                        id="pembulatanPajak"
                        label="Untuk membulatkan pajak transaksi."
                        position="top"
                        width="241px"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          color="gray.600"
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>

                    <mp-flex flex-direction="column" py="1.5">
                      <mp-box pb="4">
                        <mp-text mb="1" font-weight="semibold">
                          Mata uang
                        </mp-text>
                        <mp-select
                          :is-disabled="alreadySetCurrency === 'yes'"
                          v-model="tempPengaturanFiturTambahan.mataUang"
                        >
                          <option value="IDR - Indonesia">
                            IDR - Indonesia
                          </option>
                          <option value="AUD - Australia">
                            AUD - Australia
                          </option>
                          <option value="USD - United States">
                            USD - United States
                          </option>
                          <option value="CAD - Canada">CAD - Canada</option>
                          <option value="MYR - Malaysia">MYR - Malaysia</option>
                        </mp-select>
                        <mp-text color="gray.600"
                          >Pemilihan mata uang hanya dapat dilakukan 1
                          kali.</mp-text
                        >
                      </mp-box>
                      <mp-box pb="4">
                        <mp-text mb="1" font-weight="semibold">
                          Format mata uang
                        </mp-text>
                        <mp-select
                          v-model="tempPengaturanFiturTambahan.formatMataUang"
                        >
                          <option value="Tanpa desimal">Tanpa desimal</option>
                          <option value="Dengan desimal">Dengan desimal</option>
                          <option value="Dalam ribuan">Dalam ribuan</option>
                          <option value="Dalam jutaan">Dalam jutaan</option>
                        </mp-select>
                      </mp-box>
                    </mp-flex>

                    <mp-flex py="1.5" justify-content="end">
                      <mp-button-group spacing="2">
                        <mp-button
                          @click="handleResetPengaturanFiturTambahan()"
                          variant="ghost"
                        >
                          Batalkan
                        </mp-button>
                        <mp-button
                          @click="handleSavePengaturanFiturTambahan()"
                          variant="solid"
                        >
                          Simpan
                        </mp-button>
                      </mp-button-group>
                    </mp-flex>
                  </mp-flex>
                  <mp-flex v-else flex-direction="column">
                    <mp-flex py="1.5">
                      <mp-checkbox
                        isDisabled
                        align-self="center"
                        id="approval"
                        v-model="storedPengaturanFiturTambahan.approval"
                        >Approval</mp-checkbox
                      >
                      <mp-tooltip
                        id="approval"
                        label="Hanya pemilik akun perusahaan yang dapat mengaktifkan fitur ini."
                        position="top"
                        width="241px"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          color="gray.600"
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        isDisabled
                        align-self="center"
                        id="gettingStarted"
                        v-model="storedPengaturanFiturTambahan.gettingStarted"
                        >Getting started</mp-checkbox
                      >
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        isDisabled
                        align-self="center"
                        id="multiPotongan"
                        v-model="storedPengaturanFiturTambahan.multiPotongan"
                        >Multi pemotongan</mp-checkbox
                      >
                      <mp-tooltip
                        id="multiPotongan"
                        label="Untuk memotong pajak pihak ketiga hingga 10 pemotongan saat membuat penagihan penjualan. Hanya pemilik akun perusahaan yang dapat mengaktifkan fitur ini dan pastikan telah menggunakan versi terkini halaman Penjualan."
                        position="top"
                        width="241px"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          color="gray.600"
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        isDisabled
                        align-self="center"
                        id="terimaEmailKinerjaBulananPerusahaan"
                        v-model="
                          storedPengaturanFiturTambahan.terimaEmailKinerjaBulananPerusahaan
                        "
                        >Terima email kinerja bulanan perusahaan</mp-checkbox
                      >
                      <mp-tooltip
                        id="terimaEmailKinerjaBulananPerusahaan"
                        label="Email bulanan berisi total penjualan, saldo kas, dan rasio keuangan yang akan dikirim ke pemilik akun perusahaan."
                        position="top"
                        width="241px"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          color="gray.600"
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        isDisabled
                        align-self="center"
                        id="termasukPajak"
                        v-model="storedPengaturanFiturTambahan.termasukPajak"
                        >Termasuk pajak</mp-checkbox
                      >
                      <mp-tooltip
                        id="termasukPajak"
                        label="Untuk membebankan pajak ke transaksi penjualan atau pembelian."
                        position="top"
                        width="241px"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          color="gray.600"
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        isDisabled
                        align-self="center"
                        id="tagTransaksi"
                        v-model="storedPengaturanFiturTambahan.tagTransaksi"
                        >Tag transaksi</mp-checkbox
                      >
                      <mp-tooltip
                        id="tagTransaksi"
                        :label="
                          userSubscription === 'pro'
                            ? 'Untuk mengelompokkan transaksi dan sebagai filter tambahan ketika membuka laporan.'
                            : 'Upgrade ke Pro untuk dapat memfilter  laporan transaksi Anda. '
                        "
                        position="top"
                        width="241px"
                      >
                        <mp-box as="a" href="" target="_blank">
                          <mp-icon
                            ml="1"
                            :name="
                              userSubscription === 'pro' ? 'info' : 'upgrade'
                            "
                            :variant="
                              userSubscription === 'pro' ? 'outline' : 'duotone'
                            "
                            align-self="center"
                            color="gray.600"
                            size="sm"
                            cursor="pointer"
                          />
                        </mp-box>
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        isDisabled
                        align-self="center"
                        id="multiMataUang"
                        v-model="storedPengaturanFiturTambahan.multiMataUang"
                        >Multi mata uang</mp-checkbox
                      >
                      <mp-tooltip
                        id="multiMataUang"
                        label="Untuk menambahkan mata uang asing yang dibutuhkan pada transaksi. Hanya pemilik akun perusahaan yang dapat mengaktifkan fitur ini. "
                        position="top"
                        width="241px"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          color="gray.600"
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>
                    <mp-flex py="1.5">
                      <mp-checkbox
                        isDisabled
                        align-self="center"
                        id="pembulatanPajak"
                        v-model="storedPengaturanFiturTambahan.pembulatanPajak"
                        >Pembulatan Pajak</mp-checkbox
                      >
                      <mp-tooltip
                        id="pembulatanPajak"
                        label="Untuk membulatkan pajak transaksi."
                        position="top"
                      >
                        <mp-icon
                          ml="1"
                          name="info"
                          align-self="center"
                          color="gray.600"
                          size="sm"
                          cursor="pointer"
                        />
                      </mp-tooltip>
                    </mp-flex>

                    <mp-flex flex-direction="column" py="1.5">
                      <mp-flex>
                        <mp-flex flex="40%" py="1.5">
                          <mp-text
                            color="gray.600"
                            font-size="md"
                            line-height="md"
                          >
                            Mata uang
                          </mp-text>
                        </mp-flex>
                        <mp-flex flex="60%" py="1.5">
                          <mp-text font-size="md" line-height="md">
                            {{ storedPengaturanFiturTambahan.mataUang }}
                          </mp-text>
                        </mp-flex>
                      </mp-flex>
                      <mp-flex>
                        <mp-flex flex="40%" py="1.5">
                          <mp-text
                            color="gray.600"
                            font-size="md"
                            line-height="md"
                          >
                            Format mata uang
                          </mp-text>
                        </mp-flex>
                        <mp-flex flex="60%" py="1.5">
                          <mp-text font-size="md" line-height="md">
                            {{ storedPengaturanFiturTambahan.formatMataUang }}
                          </mp-text>
                        </mp-flex>
                      </mp-flex>
                    </mp-flex>
                  </mp-flex>
                </mp-box>
              </mp-stack>
            </mp-grid-item>
          </mp-grid>
        </mp-box>
      </mp-box>

      <mp-modal
        isCentered
        :is-open="isModalOpen"
        :on-close="closeModal"
        size="sm"
      >
        <mp-modal-content ref="content">
          <mp-modal-header>Simpan perubahan info?</mp-modal-header>
          <mp-modal-close-button @click="closeModal" />
          <mp-modal-body>
            <mp-text> Ada perubahan info yang belum Anda simpan. </mp-text>
          </mp-modal-body>
          <mp-modal-footer>
            <mp-button mr="3" variant="ghost" @click="closeModal">
              Batalkan
            </mp-button>
            <mp-button @click="handleConditionalSave()"
              >Simpan & lanjutkan</mp-button
            >
          </mp-modal-footer>
        </mp-modal-content>
        <mp-modal-overlay />
      </mp-modal>
      <ActivateApprovalModal
        :isModalOpen="isActivateApprovalModalOpen"
        :onModalToggle="onActivateApprovalModalToggle"
      />
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpGrid,
  MpGridItem,
  MpButtonIcon,
  MpHeading,
  MpTooltip,
  MpStack,
  MpCheckbox,
  MpText,
  MpIcon,
  MpButtonGroup,
  MpButton,
  MpInput,
  MpTextarea,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalFooter,
  MpModalBody,
  MpModalCloseButton,
  MpSelect,
} from "@mekari/pixel";
import Header from "@/components/Header";
import SubHeaderChild from "@/components/SubHeaderChild";
import Sidebar from "@/components/Sidebar";
import SidebarChild from "@/components/SidebarChild";
import ActivateApprovalModal from "./ActivateApprovalModal.vue";

export default {
  name: "CompanySetting",
  components: {
    Header,
    MpBox,
    MpFlex,
    MpGrid,
    MpGridItem,
    SubHeaderChild,
    Sidebar,
    SidebarChild,
    MpButtonIcon,
    MpHeading,
    MpTooltip,
    MpStack,
    MpCheckbox,
    MpText,
    MpIcon,
    MpButtonGroup,
    MpButton,
    MpInput,
    MpTextarea,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
    MpSelect,
    ActivateApprovalModal,
  },
  data() {
    return {
      companyLogo: "filled", // "filled", "blank"
      emailStatus: "unverified", // "verified", "unverified"
      userSubscription: "starter", // "pro", "starter"
      alreadyHaveTranscaction: "yes", // "yes", "no"
      alreadySetCurrency: "yes", // "yes", "no"
      open: null,
      nextOpen: null,
      isModalOpen: false,
      isActivateApprovalModalOpen: false,

      // Info Tambahan
      storedInfoTambahan: {
        tampilkanLogoDiLaporan: false,
        invoiceAddress: false,
        alamatInvoice: "",
        alamatPengiriman: "Jalan ring road no 9",
        fax: "",
        website: "",
        email: "admin@cp-indonesia.com",
      },
      tempInfoTambahan: {},

      // Info Akun Bank
      storedInfoAkunBank: {
        namaBank: "BCA",
        cabangBank: "Cabang kaliurang",
        alamatBank: "",
        nomorRekening: "",
        namaPemilikRekening: "",
        swiftCode: "",
      },
      tempInfoAkunBank: {},

      // Pengaturan fitur tambahan
      storedPengaturanFiturTambahan: {
        approval: false,
        gettingStarted: false,
        multiPotongan: false,
        terimaEmailKinerjaBulananPerusahaan: false,
        termasukPajak: false,
        tagTransaksi: false,
        multiMataUang: false,
        pembulatanPajak: false,
        mataUang: "IDR - Indonesia",
        formatMataUang: "Tanpa desimal",
      },
      tempPengaturanFiturTambahan: {},
    };
  },
  created() {
    if (this.alreadyHaveTranscaction === "yes") {
      this.storedPengaturanFiturTambahan.approval = true;
      this.storedPengaturanFiturTambahan.multiPotongan = true;
      this.storedPengaturanFiturTambahan.multiMataUang = true;
    }
  },
  computed: {
    isFormUpdated() {
      const isEqual = (obj1, obj2) =>
        JSON.stringify(obj1) != JSON.stringify(obj2);

      if (this.open === "infoTambahan") {
        return isEqual(this.storedInfoTambahan, this.tempInfoTambahan);
      }
      if (this.open === "infoAkunBank") {
        return isEqual(this.storedInfoAkunBank, this.tempInfoAkunBank);
      }
      if (this.open === "pengaturanFiturTambahan") {
        return isEqual(
          this.storedPengaturanFiturTambahan,
          this.tempPengaturanFiturTambahan
        );
      }

      return false;
    },
  },
  methods: {
    goToMekariAccount() {
      window.open("https://account.mekari.com", "_blank");
      document.activeElement.blur();
    },
    scrollTo(id, delay = 100) {
      setTimeout(() => {
        var element = document.getElementById(id);
        element.scrollIntoView({
          behavior: "smooth",
        });
      }, delay);
    },
    handleConditionalSave() {
      if (this.open === "infoTambahan") {
        this.handleSaveInfoTambahan();
      } else if (this.open === "infoAkunBank") {
        this.handleSaveInfoAkunBank();
      } else if (this.open === "pengaturanFiturTambahan") {
        this.handleSavePengaturanFiturTambahan();
      }

      this.closeModal();

      if (this.nextOpen === "infoTambahan") {
        this.handleOpenInfoTambahan();
      } else if (this.nextOpen === "infoAkunBank") {
        this.handleOpenInfoAkunBank();
      } else if (this.nextOpen === "pengaturanFiturTambahan") {
        this.handleOpenPengaturanFiturTambahan();
      }
    },

    // Info Tambahan
    handleOpenInfoTambahan() {
      if (this.isFormUpdated) {
        this.nextOpen = "infoTambahan";
        this.openModal();
        return;
      }

      this.open = "infoTambahan";
      this.tempInfoTambahan = { ...this.storedInfoTambahan };

      this.scrollTo("edit-info-tambahan");
    },
    handleResetInfoTambahan() {
      this.open = "";
      this.tempInfoTambahan = {};
    },
    handleSaveInfoTambahan() {
      this.storedInfoTambahan = {
        ...this.storedInfoTambahan,
        ...this.tempInfoTambahan,
      };
      this.$toast({
        variant: "success",
        position: "top",
        title: "Info tambahan berhasil diubah",
      });

      this.handleResetInfoTambahan();
    },

    // Info Akun Bank
    handleOpenInfoAkunBank() {
      if (this.isFormUpdated) {
        this.nextOpen = "infoAkunBank";
        this.openModal();
        return;
      }

      this.open = "infoAkunBank";
      this.tempInfoAkunBank = { ...this.storedInfoAkunBank };
    },
    handleResetInfoAkunBank() {
      this.open = "";
      this.tempInfoAkunBank = {};
    },
    handleSaveInfoAkunBank() {
      console.log("Save info akun bank");
      this.storedInfoAkunBank = {
        ...this.storedInfoAkunBank,
        ...this.tempInfoAkunBank,
      };
      this.$toast({
        variant: "success",
        position: "top",
        title: "Info akun bank berhasil diubah",
      });

      this.handleResetInfoAkunBank();
    },

    // Pengaturan fitur tambahan
    handleOpenPengaturanFiturTambahan() {
      if (this.isFormUpdated) {
        this.nextOpen = "pengaturanFiturTambahan";
        this.openModal();
        return;
      }

      this.open = "pengaturanFiturTambahan";
      this.tempPengaturanFiturTambahan = {
        ...this.storedPengaturanFiturTambahan,
      };

      this.scrollTo("edit-pengaturan-fitur-tambahan");
    },
    handleResetPengaturanFiturTambahan() {
      this.open = "";
      this.tempPengaturanFiturTambahan = {};
    },
    handleSavePengaturanFiturTambahan() {
      this.storedPengaturanFiturTambahan = {
        ...this.storedPengaturanFiturTambahan,
        ...this.tempPengaturanFiturTambahan,
      };
      this.$toast({
        variant: "success",
        position: "top",
        title: "Pengaturan fitur tambahan berhasil diubah",
      });

      this.handleResetPengaturanFiturTambahan();
    },
    handleUpdateMataUang(value) {
      this.tempPengaturanFiturTambahan.mataUang = value;
      this.$refs.mataUang.closePopover();
    },
    handleUpdateFormatMataUang(value) {
      this.tempPengaturanFiturTambahan.formatMataUang = value;
      this.$refs.formatMataUang.closePopover();
    },

    openModal() {
      this.isModalOpen = true;
      document.activeElement.blur();
    },
    closeModal() {
      this.isModalOpen = false;
    },
    onActivateApprovalModalToggle: function (data) {
      this.isActivateApprovalModalOpen = data;
    },
    handleActivateApproval() {
      if (this.userSubscription === "pro") {
        this.tempPengaturanFiturTambahan.approval =
          !this.tempPengaturanFiturTambahan.approval;
      } else {
        this.tempPengaturanFiturTambahan.approval = true;
        this.isActivateApprovalModalOpen = true;

        setTimeout(() => {
          this.tempPengaturanFiturTambahan.approval = false;
        }, 500);
      }
    },
  },
};
</script>
