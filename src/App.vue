<template>
  <div id="app">
    <div class="container">
      <div class="header"></div>
      <div class="main">
        <router-view></router-view>
      </div>
      <div vlass="aside"></div>
      <div class="footer"></div>
    </div>
      
  </div>
</template>

<script>
import icon from './assets/icon.jpg'

export default {
  name: 'app',
  data () {
    return {
      icon
    }
  }
}
</script>

<style>
 
</style>
