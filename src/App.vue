<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>

<style lang="scss">

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
