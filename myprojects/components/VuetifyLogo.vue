<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://www.mfu.ac.th/fileadmin/templates/assets/images/thumbnail_mfu_website-01.png',
          },
          {
            src: 'https://procurement.mfu.ac.th/fileadmin/mainsite_banner_thai/2564/index/08/Banner_23rd-01.png',
          },
          {
            src: 'https://info.mfu.ac.th/fileadmin/mainsite_banner_thai/2564/index/07/Banner_WELCOME_MFU_FRESHERS_2021-01.png',
          },
          {
            src: 'https://www.mfu.ac.th/fileadmin/mainsite_banner_thai/2564/index/09/Banner_THE_Ranking_2021-01-01_01.png',
          },
        ],
      }
    },
  }
</script>
