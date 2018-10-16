<template>
  <div :class="b('sortable')">
    <draggable class="father" v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
       <div v-for="element in myArray1">
         <div class="item">{{element.name}}</div>
       </div>
      <draggable class="son" v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
         <div class="item" v-for="item in myArray2">{{item.name}}</div>
      </draggable>
    </draggable>
  </div>
</template>

<script>

export default {
  name: 'sortable',
  data() {
    return {
      myArray1: [{name:1},{name:2},{name:3},{name:4}],
      myArray2: []
    }
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<style lang="scss">
  .father {
    padding: 20px;
    border: 1px solid #000;
  }
  .son {
    padding: 10px;
    border: 1px solid red;
  }
  .item {
    padding:10px;
  }
</style>