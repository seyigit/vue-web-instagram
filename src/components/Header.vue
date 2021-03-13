<template>
  <header class="header">
    <Container class="header-inner">
      <div class="logo">
          <router-link to="/">ISTAGRAM</router-link> 
      </div>
      <form class="input">
          <input type="text" placeholder="Search">
      </form>
    <nav id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">Direct</router-link>
      <router-link to="/about">Explore</router-link>
      <router-link to="/about">Profile</router-link>
    </nav>
    </Container>
  </header>
</template>
<script>
import Container from "@/components/Container"
export default {
    name : "Header",
    components : {
        Container
    }
}
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    height: 70px;
    background: yellow;
    top: 0;
    left: 0;
    right: 0;

    .header-inner{
        display: grid;
        grid-auto-columns: 1fr 1fr 1fr;
        align-items: center;
    }

}
    
</style>