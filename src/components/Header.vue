<template>
  <header class="header">
    <Container class="header-inner">
          <router-link to="/">ISTAGRAM</router-link> 
      <form class="input">
          <input type="text" placeholder="Search">
      </form>
    <navbar id="navigation">
      <router-link to="/"><IconHome class="logo"/></router-link> 
      <router-link to="/direct">Direct</router-link>
      <router-link to="/explore">Explore</router-link>
      <router-link to="/profile">Profile</router-link>
    </navbar>
    </Container>
  </header>
</template>
<script>
import IconHome from "@/icons/home.svg"
import Container from "@/components/Container"
export default {
    name : "Header",
    components : {
        Container,
        IconHome
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
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

}
        
</style>