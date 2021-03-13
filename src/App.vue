<template>
  <div class="main">
    <Header/>
    <router-view />
  </div>
</template>

<style lang="scss">
.main{
  padding-top: 100px;
}
</style>
<script>
import Header from "@/components/Header"
export default {
  name:"App",
  components : {
    Header
  }
}
</script>
