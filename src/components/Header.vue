<template>
  <header class="header">
    <Container class="header-inner">
      <!------ Logo ----->
      <router-link to="/" class="logo">Instagram</router-link>

      <!----- Search ------>
      <form class="search">
        <input type="text" placeholder="Search" />
      </form>


      <!----- Navigation ------>
      <nav class="navigation">
        <router-link to="/">
          <IconHome v-if="$route.name != 'Home'"/>
          <IconHomeFill v-else/>
        </router-link>
        <router-link to="/direct">
          <Direct v-if="$route.name != 'Direct'"/>
          <DirectFill v-else/>
        </router-link>
        <router-link to="/explore">
          <Explore v-if="$route.name != 'Explore'"/>
          <ExploreFill v-else/>
        </router-link>
        <router-link to="/profile">
        <Avatar :size="25"/>
        </router-link>
      </nav>
    </Container>
  </header>
</template>
<script>
import IconHome from "../icons/home.svg";
import IconHomeFill from "../icons/home-fill.svg";
import Explore from "@/icons/explore.svg";
import ExploreFill from "@/icons/explore-fill.svg";
import Direct from "@/icons/direct.svg";
import DirectFill from "@/icons/direct-fill.svg";
import Container from "@/components/Container";
import Avatar from "@/components/Avatar";
export default {
  name: "MainHeader",
  components: {
    Container,
    IconHome,
    IconHomeFill,
    Explore,
    ExploreFill,
    Direct,
    DirectFill,
    Avatar
  },
};
</script>
<style scoped>
.header {
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  border-bottom: 1px solid rgb(var(--b6a));
  
}
.header-inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: var(--header-height);
  
}
.logo {
  font-size: 1.6rem;
  font-weight: bold;
  @media (--sm){
    color:yellow;
  }
}
.search {
  text-align: center !important;
}
.search input {
  width: 215px;
  height: 28px;
  min-width: 125px;
  border: 1px solid rgb(var(--b6a));
  padding-left: 20px !important;
  padding-right: 20px !important;
  border-radius: 3px;
  background: rgb(var(--b3f));
  width: 215px;
}
.search input::placeholder {
  text-align: center;
  font-size: 12px;
  display: inline;
  font-weight: 300;
}
.navigation{
    display:flex;
    justify-content: flex-end;
    align-items: center;
    border: 0;
    height: auto;
}
.navigation a {
        margin-left: 20px;
}
</style>