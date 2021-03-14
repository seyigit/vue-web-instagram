<template>
  <div class="home">
    <div class="timeline">
      <Post />
    </div>
    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima
        natus, quam molestias ipsam quibusdam magnam deleniti a. Praesentium
        quam voluptas odio animi nesciunt! Itaque praesentium cupiditate
        voluptates minus excepturi!
      </p>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
export default {
  name: "Home",
  components: {
    Post
  }
};
</script>
<style scoped>
.home {
  max-width: none;
  display: grid;
  grid-template-columns: 1fr 295px;
  grid-gap: 30px;
}


</style>
