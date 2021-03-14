<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size"/>
  </figure>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default : "https://instagram.fsaw1-4.fna.fbcdn.net/v/t51.2885-19/s150x150/122918088_423624629035893_1094216157446170333_n.jpg?tp=1&_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_ohc=3M2LZNuY9_EAX856S9H&oh=d2fe85631188e8c05fb646242457fb0e&oe=6075EC92"
    },
    alt: {
      type: String,
    },
    size : {
        type:Number
    }
  },
};
</script>

<style scoped>
.avatar{
    display: inline-flex;    
    padding: 2px!important;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(184,63,140,1) 0%, rgba(237,158,90,1) 100%, rgba(0,212,255,1) 100%);
}
.avatar img{
    border-radius: inherit;
    border: 2px solid white;
}
</style>