<template>
  <div :class="b('editor')">
    <preview :properties="this.$root.layout"></preview>
  </div>
</template>

<script>
  export default {
    name: 'editor',
    data() {
      return {
        
      }
    },
    created() {
      arr: this.$root.layout
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">
  
</style>