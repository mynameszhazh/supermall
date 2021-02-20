<template>
  <div id="app">
    <miantarbar></miantarbar>
    <router-view/>
  </div>
</template>
<script>
import miantarbar from '@/components/content/maintarbar/MainTarBar'

export default {
  name: 'App',
  components: {
    miantarbar
  }
}

</script>
<style lang="scss">
  @import 'assets/css/base.css';
</style>
