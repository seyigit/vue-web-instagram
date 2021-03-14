<template>
  <div class="main">
    <Header/>
    <Container>
    <router-view />
    </Container>
  </div>
</template>

<style lang="scss">
.main{
  padding-top: 100px;
  background: #ddd;
}
</style>
<script>
import Container from "@/components/Container"
import Header from "@/components/Header"
export default {
  name:"App",
  components : {
    Header,
    Container
  }
}
</script>
