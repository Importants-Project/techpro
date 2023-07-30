<template>
  <div class="ParalaxBg relative my-20">
    <div class="contanier">

    <h2 class="text-center   text-1xl md:text-4xl relative	">
      <span class=" text-white block Paralax_text ">
             {{ parallaxData.content}}

      </span>
    </h2>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

export default {
   computed: {
      ...mapGetters({
        parallaxData: 'sentence/parallaxData'
      })
    },
};
</script>

<style >
.ParalaxBg {
  background-image: url("../assets/images/bgImageFlex.jpg");
  background-attachment: fixed;
  background-size:cover;
  background-repeat:no-repeat ;
  background-position: 50% 0 ;
  /* transform: translate3d(0,0,0); */
}


.ParalaxBg:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(30, 31, 33, 0.5);
    display: block;
}

.ParalaxBg span{
  display: flex;
  align-items: center;
    height: 250px;
}
.Paralax_text{
font-size: 20px;
font-weight: 400;
font-family: "Open Sans", sans-serif;
}

</style>
