<template>
  <div >
    <header-top></header-top>
    <header-navbar></header-navbar>
    <header-mob></header-mob>

  </div>
</template>
<script>
import HeaderNavbar from "./HeaderNavbar.vue";
import HeaderTop from "./HeaderTop.vue";
import HeaderMob from "./HeaderMob";

export default {
  name:'header-component',
  components: {
    HeaderTop,
    HeaderNavbar,
    HeaderMob
  },
};
</script>
