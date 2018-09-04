<template>
  <div class="ma-treelist">
    <div v-for="(item,index) in treeList">
      <div class="cell" v-if="item.dept" @click="deep(index)">
        <div class="check" @click.stop="toggle(item[rootFold],rootFold)">
          <div class="round" :class="{checked:item.checked}"></div>
        </div>
        <div class="avatar">
          <img :src="fold"/>
        </div>
        <div class="title">{{item.name}}</div>
        <div class="link">></div>
      </div>
      <div class="cell" v-if="item.person">
        <div class="check" @click.stop="toggle(item[rootItem],rootItem)">
          <div class="round" :class="{checked:item.checked}"></div>
        </div>
        <div class="avatar">
          <img :src="avatar"/>
        </div>
        <div class="title">{{item.name}}</div>
        <div class="link"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import fold from 'assets/fold.png'
  import avatar from 'assets/icon.jpg'
  import recursion from './recursion'
  export default {
    name: 'ma-treelist',
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
        fold,
        avatar
      }
    },
    methods: {
      init() {
        this.treeList = recursion.getTree(this.tree,this.rootId,this.rootFold)
        this.treeQueue.push(recursion.getTree(this.tree,this.rootId, this.rootFold))
      },
      deep(index) {
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
      toggle(id,key) {
        recursion.toggleCheckedById(id,key,this.treeList)
      }
    }
  }
</script>

<style>
  .cell {
    display:flex;
  }
  .check {
    display:flex;
    justify-content: center;
    align-items:center;
    flex: 1 1 0;
    padding:14px 0;
  }
  .checked {
    background:#000;
  }
  .avatar {
    display:flex;
    justify-content: center;
    align-items:center;
    flex: 1 1 0;
    border-bottom:1px solid #ececec;
    padding:14px 0;
  }
  .avatar img {
    width:80%;
    object-fit: cover;
  }
  .title {
    display:flex;
    flex:4 1 0;
    align-items:center;
    border-bottom:1px solid #ececec;
    padding:14px 0;
  }
  .link {
    display:flex;
    justify-content: center;
    align-items:center;
    flex:1 1 0;
    border-bottom:1px solid #ececec;
    padding:14px 0;
  }
  .round {
    width:20px;
    height:20px;
    border:1px solid #000;
    border-radius: 50%;
  }
</style>