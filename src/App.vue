<template>
  <div id="app">
    <miantarbar class="miantarbar"></miantarbar>
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
  .miantarbar{
    z-index: 5;
  }
</style>
