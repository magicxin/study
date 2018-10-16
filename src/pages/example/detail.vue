<template>
  <div :class="b('demo')">
    <component :is="$route.params._tag"></component>
  </div>
</template>

<script>
import examples from './demos'
  console.log(examples)
export default {
  name: 'demo',
  components: examples,
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
  
</style>