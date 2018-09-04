<template>
  <div class="ma-treelist">
    <div v-for="(item,index) in treeList">
      <cell link :obj="item" v-if="item[rootFold]" @click="deep(index,$event)" @select="toggle(item[rootFold],rootFold,$event)"></cell>
      <cell :obj="item" v-if="item[rootItem]" @select="toggle(item[rootItem],rootItem,$event)"></cell>
    </div>
  </div>
</template>

<script>
  import cell from 'components/cell/cell'
  import recursion from './recursion'
  export default {
    name: 'ma-treelist',
    components: {cell},
    props: {
      tree: Array,
      rootId: {
        type:Number,
        required: true
      },
      rootFold: {
        type:Number,
        default() {
          return 'foldId'
        }
      },
      rootItem: {
        type:Number,
        default() {
          return 'itemId'
        }
      }
    },
    watch: {
      treeList(v) {
        return v
      }
    },
    created() {
      this.init()
    },
    mounted() {
      window.addEventListener('hashchange',this.hashChange)
    },
    destroyed() {
      window.removeEventListener('hashchange',this.hashChange)
    },
    data() {
      return {
        treeList:[],
        treeQueue:[],
      }
    },
    methods: {
      init() {
        this.treeList = recursion.getTree(this.tree,this.rootId,this.rootFold)
        this.treeQueue.push(recursion.getTree(this.tree,this.rootId, this.rootFold))
      },
      deep(index,obj) {
        this.treeList = this.treeList[index].children
        this.treeQueue.push(this.treeList)
        if(location.hash.indexOf('?') > -1) {
          location.hash = location.hash.replace(/([?][^?]+)$/,'?key=') + (this.treeQueue.length-1)
        }else {
          location.hash += '?key=' + (this.treeQueue.length-1)
        }
      },
      hashChange() {
        if(recursion.getKey('key') && this.treeQueue.length-1 > recursion.getKey('key')) {
          this.treeList = this.treeQueue[recursion.getKey('key')]
        }
        if(!recursion.getKey('key')) {
          this.treeList = this.treeQueue[0]
        }
      },
      toggle(id,key,obj) {
        recursion.toggleCheckedById(id,key,this.treeList)
        this.$emit('change',this.treeList)
      }
    }
  }
</script>

<style>
  
</style>