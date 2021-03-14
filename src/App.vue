<template>
  <div class="app">
    <Header/>
    <main class="main">
      <Container>
    <router-view />
    </Container>
    </main>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Container from '@/components/Container'
export default {
  name: "App",
  components : {
    Header,
    Container
  }
}
</script>
<style scoped>
  .main{
    padding-top: 40px!important;
    background: rgb(var(--b3f));
    height: 100vh;
  }



</style>
