<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300,100,200,500,700," rel="stylesheet" type="text/css">

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />

    <header-component></header-component> 
    <Nuxt />
     <footer-component></footer-component>
  </div>
</template>

<script>
import headerComponent from "@/components/header/Header";
import footerComponent from "@/components/footer/Footer";

export default {
  components: {
    headerComponent,
    footerComponent,
  },
};
</script>

