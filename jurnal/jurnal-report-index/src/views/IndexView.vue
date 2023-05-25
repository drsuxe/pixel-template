<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="#F3F7FC"
        :margin-left="['0', '60px']"
        position="relative"
      >
        <SubHeader>
          <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
            <mp-heading as="h1" font-size="2xl" font-weight="semibold" mr="2"> Laporan </mp-heading>
          </mp-flex>

          <mp-box px="4" mb="-8" position="relative">
            <mp-tabs :index="currentTab" is-manual @change.self="handleChange">
              <mp-tab-list id="awesome-tab" border-bottom="0px" overflow-x="auto" p="2" @scroll.native="(e) => handleScrollCalculation(e.target)">
                <mp-tab flex="none">Sekilas bisnis</mp-tab>
                <mp-tab flex="none">Penjualan</mp-tab>
                <mp-tab flex="none">Pembelian</mp-tab>
                <mp-tab flex="none">Produk</mp-tab>
                <mp-tab flex="none">Aset</mp-tab>
                <mp-tab flex="none">Pertukaran kurs</mp-tab>
                <mp-tab flex="none">Bank</mp-tab>
                <mp-tab flex="none">Pajak</mp-tab>
                <mp-tab flex="none"
                  >Jurnal insight
                  <mp-badge ml="2"> Baru </mp-badge>
                </mp-tab>
              </mp-tab-list>
            </mp-tabs>

            <mp-box
              v-if="isShowLeft"
              as="button"
              border-width="1px"
              rounded="full"
              bg="white"
              position="absolute"
              top="4"
              left="2"
              h="8"
              w="8"
              display="flex"
              align-items="center"
              justify-content="center"
              shadow="lg"
              @click="handleScrollLeft"
            >
              <mp-icon name="chevrons-left" size="sm" />
            </mp-box>
            <mp-box
              v-if="isShowRight"
              as="button"
              border-width="1px"
              rounded="full"
              bg="white"
              position="absolute"
              top="4"
              right="2"
              h="8"
              w="8"
              display="flex"
              align-items="center"
              justify-content="center"
              shadow="lg"
              @click="handleScrollRight"
            >
              <mp-icon name="chevrons-right" size="sm" />
            </mp-box>
          </mp-box>
        </SubHeader>

        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" border-left-width="1px" rounded-top-left="md" background-color="white" padding="6">
          <mp-grid
            v-if="currentTab === 0"
            :template-columns="{
              base: 'repeat(1, 1fr)',
              lg: 'repeat(2, 1fr)',
            }"
            gap="12"
            pb="16"
          >
            <mp-flex v-for="report in reportLists" :key="report.id" flex-direction="column" justify-content="space-between" height="100%">
              <mp-box>
                <mp-flex align-items="center">
                  <mp-heading as="h3" font-size="lg" color="dark">
                    {{ report.name }}

                    <mp-badge v-if="report.badgeLabel"> {{ report.badgeLabel }} </mp-badge>
                  </mp-heading>
                  <mp-box
                    v-if="report.isMekariAirine"
                    as="span"
                    ml="6px"
                    bg="background"
                    border-width="1px"
                    border-color="gray.100"
                    rounded="full"
                    py="3px"
                    px="8px"
                  >
                    <svg width="48" height="14" viewBox="0 0 48 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1_19)">
                        <path
                          d="M5.24943 14C5.13579 14 5.03309 13.9257 5.00447 13.8139L4.43121 11.5825C3.35034 11.5123 2.61714 10.7483 2.24927 9.30776C2.16509 8.98129 1.98916 8.68338 1.74167 8.44669L0.286207 7.04367C0.253377 7.01428 0.222231 6.98327 0.194452 6.94981C-0.106069 6.5915 -0.0513526 6.06425 0.314828 5.77042C0.699529 5.43007 1.27532 5.40885 1.68527 5.72145C1.6878 5.72308 1.69032 5.72471 1.692 5.72716L2.55653 6.43561L1.35697 4.01807C1.34687 3.99685 1.33929 3.97971 1.33256 3.96339C1.15241 3.50877 1.38391 2.99703 1.84858 2.81665C2.30988 2.5922 2.87978 2.74891 3.15084 3.17659C3.15589 3.18393 3.1601 3.1921 3.16346 3.20026L3.46483 3.81648L3.11043 2.44366C3.10875 2.43794 3.1079 2.43223 3.10706 2.42652C3.00857 1.88539 3.37728 1.36058 3.93118 1.25039C4.4733 1.0945 5.05329 1.38833 5.23007 1.91069C5.23175 1.9164 5.23344 1.92211 5.23512 1.92701L5.71831 3.79526L5.72252 2.39795C5.72252 2.39305 5.72252 2.38815 5.72252 2.38326C5.75535 1.88457 6.18214 1.48464 6.69563 1.46832C6.71331 1.46668 6.73099 1.46505 6.74867 1.46423C7.25038 1.43812 7.68306 1.8103 7.71168 2.29674L8.05766 6.48376L8.82874 5.54107C9.14863 5.14196 9.71768 5.02524 10.179 5.26439C10.227 5.2905 10.2691 5.31825 10.3086 5.34927C10.4862 5.48965 10.5974 5.6888 10.6201 5.9108C10.642 6.12219 10.5822 6.32951 10.45 6.49846L8.66038 9.99091C8.65533 9.99988 8.65028 10.0089 8.64439 10.0178C8.50802 10.2154 8.34471 10.3908 8.15783 10.5418L8.92302 13.2924C8.95922 13.423 8.87925 13.5576 8.74456 13.5927C8.60988 13.6278 8.47098 13.5503 8.43478 13.4197L7.62582 10.5116C7.59804 10.4129 7.63676 10.3084 7.72262 10.2488C7.91624 10.1142 8.08207 9.94928 8.21592 9.75911L10.0098 6.2585C10.0182 6.24217 10.0283 6.22667 10.0401 6.21279C10.0999 6.14178 10.1276 6.052 10.1175 5.96141C10.1074 5.87081 10.062 5.78838 9.98874 5.73043C9.97274 5.71737 9.95506 5.70594 9.93655 5.69615C9.69579 5.57127 9.39527 5.6333 9.22523 5.84551L8.05429 7.27628C7.98947 7.35545 7.88257 7.3881 7.78323 7.35871C7.6839 7.32933 7.61319 7.24445 7.60477 7.14406L7.2066 2.33184C7.19314 2.10902 7.00457 1.9417 6.77645 1.95476C6.76635 1.95476 6.75624 1.95639 6.74698 1.95721C6.73772 1.95803 6.72846 1.95884 6.71836 1.95966C6.46077 1.96456 6.24527 2.16207 6.22591 2.41019L6.21497 5.75818C6.21497 5.88142 6.11901 5.98589 5.99274 6.00058C5.86815 6.01609 5.74862 5.93692 5.71747 5.81694L4.74604 2.0576C4.65091 1.78826 4.34787 1.6389 4.06671 1.72378C4.05745 1.72623 4.04819 1.72868 4.03893 1.73031C3.74935 1.78418 3.5549 2.05434 3.60204 2.3351L4.57347 6.09444C4.60546 6.21687 4.53559 6.34175 4.41353 6.38419C4.29063 6.42663 4.15594 6.37195 4.10038 6.2585L2.7131 3.42389C2.57505 3.2174 2.29389 3.14476 2.06745 3.25902C2.05903 3.2631 2.05061 3.26718 2.04135 3.27045C1.82753 3.34962 1.72063 3.58305 1.80312 3.78954C1.80649 3.7977 1.80986 3.80505 1.81322 3.8124L3.52291 7.25751C3.57426 7.36198 3.54395 7.48685 3.44967 7.55705C3.35539 7.62805 3.22323 7.62479 3.13232 7.55052L1.36791 6.10587C1.15157 5.94345 0.851052 5.95651 0.649863 6.13689C0.645654 6.14015 0.641445 6.14423 0.637236 6.1475C0.481504 6.26992 0.457933 6.49274 0.584203 6.64292C0.59683 6.65761 0.610298 6.67149 0.625451 6.68455C0.628818 6.68781 0.632185 6.69108 0.635552 6.69434L2.09522 8.10226C2.40753 8.40098 2.63061 8.77887 2.73751 9.19268C3.07339 10.5067 3.67275 11.114 4.62482 11.1009H4.62819C4.74435 11.1009 4.84537 11.1776 4.87315 11.2862L5.49271 13.698C5.52638 13.8294 5.44389 13.9625 5.30836 13.9951C5.28815 14 5.26711 14.0024 5.24691 14.0024L5.24943 14Z"
                          fill="black"
                        />
                        <path
                          d="M5.31343 10.3076C5.31343 10.3076 5.30585 10.3076 5.30164 10.3076C5.1619 10.301 5.055 10.1868 5.06089 10.0513C5.1619 7.96921 6.56265 7.7268 6.62242 7.71783C6.75963 7.69579 6.89011 7.7872 6.912 7.92106C6.93388 8.05409 6.84128 8.17897 6.70491 8.20101C6.65609 8.20999 5.64678 8.41158 5.56597 10.0741C5.55923 10.2056 5.44811 10.3076 5.31343 10.3076Z"
                          fill="black"
                        />
                        <path
                          d="M17.1011 4.42046V2.76116C17.1011 2.35388 16.9335 2.08536 16.5522 2.08536C16.1709 2.08536 15.9773 2.41754 15.9773 2.76769V4.42046H15.0471V1.32712H15.9251V1.67808C16.1254 1.34018 16.4933 1.25856 16.7643 1.25856C17.1128 1.25856 17.4874 1.38344 17.6945 1.83479C17.979 1.41527 18.2821 1.25285 18.7535 1.25285C19.4185 1.25285 20.0254 1.57851 20.0254 2.73014V4.42046H19.0894V2.74891C19.0894 2.36041 18.9799 2.10413 18.6053 2.10413C18.2307 2.10413 18.0178 2.41101 18.0178 2.76116V4.42046H17.1011Z"
                          fill="#9E9E9E"
                        />
                        <path
                          d="M23.7453 2.76767C23.7453 2.90153 23.7327 3.03049 23.7066 3.15618H21.4725C21.4986 3.33574 21.5887 3.47694 21.7435 3.57896C21.8984 3.68098 22.0727 3.7324 22.2663 3.7324C22.5938 3.7324 22.8817 3.63609 23.1317 3.44429L23.5643 4.02623C23.2327 4.33475 22.7832 4.48982 22.215 4.48982C21.6981 4.48982 21.2755 4.35107 20.9464 4.07357C20.6172 3.79607 20.4522 3.39858 20.4522 2.88112C20.4522 2.36366 20.6214 1.97434 20.959 1.68868C21.2966 1.40302 21.7023 1.26018 22.1762 1.26018C22.6502 1.26018 23.0189 1.3924 23.3093 1.65766C23.5997 1.92292 23.7453 2.29347 23.7453 2.76931V2.76767ZM22.6089 2.15064C22.4885 2.04862 22.3353 1.9972 22.1501 1.9972C21.9649 1.9972 21.81 2.04862 21.6855 2.15064C21.5609 2.25266 21.4893 2.40202 21.4725 2.59791H22.7832C22.7874 2.40202 22.7293 2.25266 22.6089 2.15064Z"
                          fill="#9E9E9E"
                        />
                        <path
                          d="M25.1074 0.0440771V2.54242L26.0502 1.33446H27.1479V1.39078L25.9795 2.78727L27.3289 4.35271V4.42127H26.2118L25.1074 3.06232V4.42127H24.1772V0.0440771H25.1074Z"
                          fill="#9E9E9E"
                        />
                        <path
                          d="M28.93 1.25855C29.4637 1.25855 29.8669 1.35567 30.1405 1.54993C30.414 1.74418 30.5504 2.05351 30.5504 2.47956V4.42044H29.6589V3.85728C29.5731 4.045 29.414 4.19518 29.2195 4.30781C29.0259 4.42045 28.8037 4.47676 28.5545 4.47676C28.2271 4.47676 27.956 4.38616 27.7413 4.20416C27.5258 4.02296 27.4181 3.77974 27.4181 3.47449C27.4181 3.15291 27.5376 2.90234 27.7767 2.7236C28.0158 2.54404 28.3247 2.45426 28.7035 2.45426C29.0352 2.45426 29.313 2.50894 29.536 2.61668V2.55383C29.536 2.18655 29.2911 2.00291 28.8003 2.00291C28.5074 2.00291 28.185 2.06167 27.8314 2.17839L27.6445 1.49606C28.0579 1.33772 28.4872 1.25855 28.93 1.25855ZM28.8786 3.71934C29.0554 3.71934 29.2061 3.67364 29.3306 3.58141C29.4552 3.49 29.531 3.36267 29.5562 3.19943C29.3584 3.09904 29.1455 3.04926 28.9173 3.04926C28.7666 3.04926 28.6471 3.07864 28.5587 3.13659C28.4703 3.19535 28.4266 3.28024 28.4266 3.39287C28.4266 3.49734 28.4695 3.57733 28.5554 3.63364C28.6412 3.68996 28.749 3.71934 28.8786 3.71934Z"
                          fill="#9E9E9E"
                        />
                        <path
                          d="M31.9655 1.33364V1.67154C32.1784 1.38343 32.463 1.25855 32.8182 1.25855C33.1221 1.25855 33.3738 1.34588 33.5994 1.54013L33.2122 2.25348C33.0573 2.14737 32.8956 2.09677 32.702 2.09677C32.3013 2.09677 31.9596 2.34734 31.9596 2.81011V4.41881H31.0294V1.33364H31.9655Z"
                          fill="#9E9E9E"
                        />
                        <path
                          d="M34.8259 0.50685C34.8259 1.18265 33.7669 1.18265 33.7669 0.50685C33.7669 -0.16895 34.8259 -0.16895 34.8259 0.50685ZM33.8317 1.32059V4.41964H34.7619V1.3214L33.8317 1.32059Z"
                          fill="#9E9E9E"
                        />
                        <path
                          d="M17.6112 8.05327C18.5229 8.05327 19.2123 8.21896 19.6786 8.55033C20.145 8.8817 20.379 9.4114 20.379 10.1378V13.4523H18.8023C18.8023 13.1675 18.8209 12.8467 18.8579 12.49H18.8251C18.6777 12.8108 18.4395 13.0671 18.1078 13.2597C17.777 13.4523 17.3982 13.5486 16.9723 13.5486C16.4133 13.5486 15.9503 13.3936 15.5825 13.0834C15.2146 12.7733 15.0311 12.3586 15.0311 11.8379C15.0311 11.2894 15.2348 10.8618 15.6431 10.5549C16.0513 10.2488 16.5783 10.0954 17.2256 10.0954C17.7913 10.0954 18.2661 10.1884 18.6483 10.3737V10.2668C18.6483 9.63993 18.2291 9.3257 17.3915 9.3257C16.8915 9.3257 16.3401 9.42528 15.7374 9.62524L15.4175 8.45973C16.1229 8.18876 16.8536 8.05327 17.6112 8.05327ZM17.5228 12.255C17.8242 12.255 18.0818 12.1766 18.2947 12.0199C18.5077 11.8632 18.6365 11.6461 18.6803 11.3678C18.3419 11.1964 17.9782 11.1115 17.5885 11.1115C17.3309 11.1115 17.1272 11.1613 16.9765 11.2609C16.8258 11.3604 16.75 11.5065 16.75 11.6992C16.75 11.8771 16.8233 12.015 16.9706 12.1105C17.1179 12.2068 17.3023 12.255 17.5228 12.255Z"
                          fill="black"
                        />
                        <path
                          d="M21.8513 7.41175C21.6636 7.25505 21.5702 7.04121 21.5702 6.77023C21.5702 6.49926 21.6636 6.28542 21.8513 6.12871C22.039 5.972 22.2461 5.89365 22.4743 5.89365C22.7024 5.89365 22.9095 5.972 23.0972 6.12871C23.2849 6.28542 23.3783 6.49926 23.3783 6.77023C23.3783 7.04121 23.2849 7.25505 23.0972 7.41175C22.9095 7.56846 22.7015 7.64681 22.4743 7.64681C22.247 7.64681 22.039 7.56846 21.8513 7.41175ZM23.2681 8.16019H21.6804V13.4531H23.2681V8.16019Z"
                          fill="black"
                        />
                        <path
                          d="M24.6141 8.18141H26.0914L26.2126 8.75845C26.5578 8.28833 27.0435 8.05245 27.6681 8.05245C28.1824 8.05245 28.6277 8.21243 29.0023 8.53319L28.3407 9.75175C28.0831 9.57382 27.7927 9.48404 27.4694 9.48404C27.1092 9.48404 26.8078 9.59259 26.5654 9.81051C26.3229 10.0284 26.2017 10.3255 26.2017 10.7034V13.4515H24.6141V8.18141Z"
                          fill="black"
                        />
                        <path
                          d="M34.7813 11.3147H30.7785C30.8223 11.5857 30.973 11.8085 31.2306 11.9832C31.4882 12.1579 31.8299 12.2452 32.2559 12.2452C32.8662 12.2452 33.3368 12.1064 33.6676 11.8281L34.5607 12.7904C34.0169 13.3111 33.2374 13.5707 32.2231 13.5707C31.2087 13.5707 30.5008 13.3177 29.9679 12.8116C29.435 12.3056 29.1682 11.6216 29.1682 10.7589C29.1682 9.946 29.4291 9.28897 29.9511 8.7862C30.473 8.28343 31.175 8.03205 32.0572 8.03205C33.0202 8.03205 33.7577 8.3169 34.2686 8.88741C34.7796 9.45792 34.9505 10.2668 34.7813 11.3147ZM30.7785 10.1925H33.3586C33.3435 9.92151 33.2113 9.71339 32.9613 9.56729C32.7113 9.42119 32.4099 9.34774 32.0572 9.34774C31.7407 9.34774 31.4688 9.42283 31.2415 9.57219C31.0134 9.72155 30.8594 9.92886 30.7785 10.1925Z"
                          fill="black"
                        />
                        <path
                          d="M41.365 13.4531H39.7656V10.6626C39.7656 9.84317 39.391 9.43344 38.6409 9.43344C38.2806 9.4261 37.9852 9.55097 37.7537 9.80725C37.5222 10.0635 37.406 10.3704 37.406 10.7271V13.4531H35.8403V8.17162H37.2739L37.3286 8.84497C37.7621 8.2965 38.3505 8.02879 39.093 8.04266C40.6074 8.04266 41.365 8.91272 41.365 10.6512V13.4531Z"
                          fill="black"
                        />
                        <path
                          d="M47.9369 11.3147H43.9341C43.9779 11.5857 44.1286 11.8085 44.3862 11.9832C44.6438 12.1579 44.9855 12.2452 45.4115 12.2452C46.0218 12.2452 46.4924 12.1064 46.8232 11.8281L47.7163 12.7904C47.1725 13.3111 46.393 13.5707 45.3787 13.5707C44.3643 13.5707 43.6564 13.3177 43.1235 12.8116C42.5906 12.3056 42.3238 11.6216 42.3238 10.7589C42.3238 9.946 42.5847 9.28897 43.1067 8.7862C43.6286 8.28343 44.3306 8.03205 45.2128 8.03205C46.1758 8.03205 46.9133 8.3169 47.4242 8.88741C47.9352 9.45792 48.1061 10.2668 47.9369 11.3147ZM43.9341 10.1925H46.5142C46.4991 9.92151 46.3669 9.71339 46.1169 9.56729C45.8669 9.42119 45.5655 9.34774 45.2128 9.34774C44.8963 9.34774 44.6244 9.42283 44.3971 9.57219C44.169 9.72155 44.015 9.92886 43.9341 10.1925Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_19">
                          <rect width="48" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </mp-box>
                </mp-flex>
                <mp-text color="gray.600">
                  {{ report.description }}
                </mp-text>
              </mp-box>

              <mp-flex gap="2" mt="4">
                <mp-button variant="outline">
                  {{ report.buttonPrimary }}
                </mp-button>
                <mp-button variant="ghost" v-if="report.buttonSecondary">
                  {{ report.buttonSecondary }}
                </mp-button>
              </mp-flex>
            </mp-flex>
          </mp-grid>

          <mp-flex v-if="currentTab === 8" align-items="center" justify-content="center">
            <BlankSlate
              variant="illustration"
              title="Memperkenalkan Jurnal insight"
              description="Sekarang Anda bisa custom laporan sesuai kebutuhan perusahaan Anda."
              src="https://res.cloudinary.com/uxe-mekari/image/upload/v1684480665/jurnal/jurnal-insight_zwowqw.png"
            >
              <mp-button mt="4">Custom laporan</mp-button>
            </BlankSlate>
          </mp-flex>

          <mp-box position="fixed" bottom="8" right="8">
            <mp-button>Atas</mp-button>
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpButton, MpTabs, MpTab, MpTabList, MpBadge, MpGrid, MpText, MpIcon } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import BlankSlate from "./BlankSlate.vue";

export default {
  name: "ReportIndex",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpButton,
    MpTabs,
    MpTab,
    MpTabList,
    MpBadge,
    MpGrid,
    MpText,
    MpIcon,

    //
    Header,
    Sidebar,
    SubHeader,
    BlankSlate,
  },
  data() {
    return {
      currentTab: 0,
      reportLists: [
        {
          id: 1,
          name: "Neraca",
          description:
            "Menampilan apa yang anda miliki (aset), apa yang anda hutang (liabilitas), dan apa yang anda sudah investasikan pada perusahaan anda (ekuitas).",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "Lihat versi lama",
        },
        {
          id: 2,
          name: "Buku Besar",
          description:
            "Laporan ini menampilkan semua transaksi yang telah dilakukan untuk suatu periode. Laporan ini bermanfaat jika Anda memerlukan daftar kronologis untuk semua transaksi yang telah dilakukan oleh perusahaan Anda.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "Lihat versi lama",
        },
        {
          id: 3,
          name: "Laporan Laba-Rugi",
          description: "Menampilkan setiap tipe transaksi dan jumlah total untuk pendapatan dan pengeluaran anda.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "Lihat versi lama",
        },
        {
          id: 4,
          name: "Jurnal",
          description:
            "Daftar semua jurnal per transaksi yang terjadi dalam periode waktu. Hal ini berguna untuk melacak di mana transaksi Anda masuk ke masing-masing rekening.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "Lihat versi lama",
        },
        {
          id: 5,
          name: "Arus Kas",
          isMekariAirine: true,
          description:
            "Laporan ini mengukur kas yang telah dihasilkan atau digunakan oleh suatu perusahaan dan menunjukkan detail pergerakannya dalam suatu periode.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "",
        },
        {
          id: 6,
          name: "Trial Balance",
          description: "Menampilkan saldo dari setiap akun, termasuk saldo awal, pergerakan, dan saldo akhir dari periode yang ditentukan.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "Lihat versi lama",
        },
        {
          id: 7,
          name: "Perubahan Modal",
          description: "Menampilkan perubahan atau pergerakan dalam ekuitas pemilik yang terjadi dalam periode tertentu.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "",
        },
        {
          id: 8,
          name: "Ringkasan Bisnis",
          description: "Laporan Ringkasan Bisnis Menampilkan ringkasan dari laporan keuangan standar beserta wawasannya.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "",
        },
        {
          id: 9,
          name: "Anggaran Laba Rugi",
          badgeLabel: "Baru",
          description: "Memungkinkan perusahaan untuk membandingkan anggaran keuangan yang sebenarnya.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "",
        },
        {
          id: 10,
          name: "Manajemen Anggaran",
          description: "Alat untuk mengatur anggaran pengeluaran dan pemasukan perusahaan.",
          buttonPrimary: "Lihat laporan",
          buttonSecondary: "",
        },
      ],
      oberserver: "",
      isShowRight: false,
      isShowLeft: false,
    };
  },
  mounted() {
    this.handleActiveObserver();
  },
  beforeDestroy() {
    this.oberserver.disconnect()
  },
  methods: {
    handleChange(e) {
      console.log(e);
      this.currentTab = e;
    },
    handleScrollLeft() {
      const tabElement = document.getElementById("awesome-tab");
      tabElement.scrollBy({
        top: 0,
        left: -150,
        behavior: "smooth",
      });
    },
    handleScrollRight() {
      const tabElement = document.getElementById("awesome-tab");

      tabElement.scrollBy({
        top: 0,
        left: +150,
        behavior: "smooth",
      });
    },

    handleActiveObserver() {
      const tabElement = document.getElementById("awesome-tab");

      this.observer = new ResizeObserver(([entry]) => {
        this.handleScrollCalculation(entry.target);
      }, {});

      this.observer.observe(tabElement);
    },
    handleScrollCalculation(el) {
      const { clientWidth, scrollWidth, scrollLeft } = el;
      const isHorizontalScroll = clientWidth < scrollWidth;

      if (isHorizontalScroll) {
        const isScrollRightEnd = Math.round(scrollLeft) >= scrollWidth - clientWidth;
        const isScrollLeftEnd = scrollLeft === 0;
        const isScrollBoth = !isScrollLeftEnd && !isScrollRightEnd;

        if (isScrollLeftEnd) {
          this.isShowRight = true;
          this.isShowLeft = false;
        }
        if (isScrollBoth) {
          this.isShowRight = true;
          this.isShowLeft = true;
        }
        if (isScrollRightEnd) {
          this.isShowRight = false;
          this.isShowLeft = true;
        }
      } else {
        this.isShowRight = false;
        this.isShowLeft = false;
      }
    },
  },
};
</script>
