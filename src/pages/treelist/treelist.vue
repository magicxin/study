<template>
  <div class="treelist">
    <ma-treelist rootId="10001" rootFold="dept" rootItem="person" :tree="tree" @getList="getList"></ma-treelist>
  </div>
</template>

<script>
  import maTreelist from 'components/treelist/treelist'
  export default {
    name: 'treelist',
    components: {
      maTreelist
    },
    data() {
      return {
        tree: [
                  {name:'总经理办公室',dept:1,parentId:10001,checked:true},
                  {name:'秘书部',dept:10,parentId:1,checked:true},
                  {name:'业务部',dept:3,parentId:10001,checked:false},
                  {name:'运营管理部',dept:4,parentId:10001,checked:false},
                  {name:'工程技术部',dept:5,parentId:10001,checked:false},
                  {name:'政务研发部',dept:6,parentId:10001,checked:false},
                  {name:'产品一部',dept:11,parentId:6,checked:false},
                  {name:'UI/前端组',dept:112,parentId:12,checked:false},
                  {name:'产品二部',dept:12,parentId:6,checked:false},
                  {name:'产品三部',dept:13,parentId:6,checked:false},
                  {name:'工程二组',dept:14,parentId:5,checked:false},
                  {name:'三部一组',dept:113,parentId:13,checked:false},
                  {name:'三部二组',dept:114,parentId:13,checked:false},
                  {name:'一部一组',dept:15,parentId:5,checked:false},
                  {name:'运营一部',dept:16,parentId:4,checked:false},
                  {name:'运营二部',dept:17,parentId:4,checked:false},
                  {name:'业务一部',dept:18,parentId:3,checked:false},
                  {name:'业务二部',dept:19,parentId:3,checked:false},
                  {name:'项目一组',dept:20,parentId:6,checked:false},
                  {name:'UI/前端组',dept:115,parentId:20,checked:false},
                  {name:'项目二组',dept:116,parentId:6,checked:false},
                  {name:'工程一组',dept:21,parentId:5,checked:false},
                  
                  {name:'张三',person:1,parentId:1,checked:true},
                  {name:'张思',person:2,parentId:10,checked:true},
                  {name:'张武',person:3,parentId:10,checked:true},
                  {name:'张柳',person:4,parentId:12,checked:false},
                  {name:'王一',person:5,parentId:115,checked:false},
                  {name:'王二',person:6,parentId:116,checked:false},
                  {name:'网三',person:7,parentId:113,checked:false},
                  {name:'王寺',person:8,parentId:113,checked:false},
                  {name:'王五',person:9,parentId:4,checked:false},
                  {name:'王柳',person:10,parentId:3,checked:false},
                  {name:'程三',person:11,parentId:4,checked:false},
                  {name:'程四',person:12,parentId:3,checked:false},
                  {name:'程五',person:13,parentId:113,checked:false},
                  {name:'马一',person:14,parentId:116,checked:false},
                  {name:'郑武',person:15,parentId:112,checked:false},
                  {name:'陆叁',person:16,parentId:112,checked:false},
                  {name:'冯晓',person:17,parentId:112,checked:false},
                  {name:'姚深',person:18,parentId:1,checked:true},
                  {name:'杨茂',person:19,parentId:5,checked:false},
                  {name:'陆晓峰',person:20,parentId:5,checked:false}
                ]
      }
    },
    methods: {
      getList(arr) {
        console.log(arr)
      }
    }
  }
</script>

<style>
  
</style>