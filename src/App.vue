<template>
  <div id="app">
    <img :src="icon" />
    <h1>{{ getMsg }}</h1>
  </div>
</template>

<script>
import icon from './assets/icon.jpg'

export default {
  name: 'app',
  data () {
    return {
      icon,
      msg: 'this is my first app'
    }
  },
  computed: {
    getMsg() {
      return `${this.msg}`
    }
  }
}
</script>

<style>
#app {
  font-size:12px;
}
img {
  width:40px;
}
</style>
