<template>
  <div class="info m-3">
    <div class="contanier">
      <div class="info-box mt-5 ">
        <div>
          <img src="../assets/svg/quote.svg" alt="">
        </div>
        <p style="font-family: 'Open Sans';">
         {{infoData.content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

export default {
   computed: {
      ...mapGetters({
        infoData: 'sentence/infoData'
      })
    },
};</script>
