<template>
  <div class="treelist">
    <ma-treelist rootId="10001" rootFold="dept" rootItem="person" :tree="tree" @change="getList"></ma-treelist>
  </div>
</template>

<script>
  import maTreelist from 'components/treelist/treelist'
  import fold from 'assets/fold.png'
  import avatar from 'assets/icon.jpg'
  export default {
    name: 'treelist',
    components: {
      maTreelist
    },
    data() {
      return {
        tree: [
                  {name:'总经理办公室',icon:fold,dept:1,parentId:10001,checked:true},
                  {name:'秘书部',icon:fold,dept:10,parentId:1,checked:true},
                  {name:'业务部',icon:fold,dept:3,parentId:10001,checked:false},
                  {name:'运营管理部',icon:fold,dept:4,parentId:10001,checked:false},
                  {name:'工程技术部',icon:fold,dept:5,parentId:10001,checked:false},
                  {name:'政务研发部',icon:fold,dept:6,parentId:10001,checked:false},
                  {name:'产品一部',icon:fold,dept:11,parentId:6,checked:false},
                  {name:'UI/前端组',icon:fold,dept:112,parentId:12,checked:false},
                  {name:'产品二部',icon:fold,dept:12,parentId:6,checked:false},
                  {name:'产品三部',icon:fold,dept:13,parentId:6,checked:false},
                  {name:'工程二组',icon:fold,dept:14,parentId:5,checked:false},
                  {name:'三部一组',icon:fold,dept:113,parentId:13,checked:false},
                  {name:'三部二组',icon:fold,dept:114,parentId:13,checked:false},
                  {name:'一部一组',icon:fold,dept:15,parentId:5,checked:false},
                  {name:'运营一部',icon:fold,dept:16,parentId:4,checked:false},
                  {name:'运营二部',icon:fold,dept:17,parentId:4,checked:false},
                  {name:'业务一部',icon:fold,dept:18,parentId:3,checked:false},
                  {name:'业务二部',icon:fold,dept:19,parentId:3,checked:false},
                  {name:'项目一组',icon:fold,dept:20,parentId:6,checked:false},
                  {name:'UI/前端组',icon:fold,dept:115,parentId:20,checked:false},
                  {name:'项目二组',icon:fold,dept:116,parentId:6,checked:false},
                  {name:'工程一组',icon:fold,dept:21,parentId:5,checked:false},
                  
                  {name:'张三',icon:avatar,person:1,parentId:1,checked:true},
                  {name:'张思',icon:avatar,person:2,parentId:10,checked:true},
                  {name:'张武',icon:avatar,person:3,parentId:10,checked:true},
                  {name:'张柳',icon:avatar,person:4,parentId:12,checked:false},
                  {name:'王一',icon:avatar,person:5,parentId:115,checked:false},
                  {name:'王二',icon:avatar,person:6,parentId:116,checked:false},
                  {name:'网三',icon:avatar,person:7,parentId:113,checked:false},
                  {name:'王寺',icon:avatar,person:8,parentId:113,checked:false},
                  {name:'王五',icon:avatar,person:9,parentId:4,checked:false},
                  {name:'王柳',icon:avatar,person:10,parentId:3,checked:false},
                  {name:'程三',icon:avatar,person:11,parentId:4,checked:false},
                  {name:'程四',icon:avatar,person:12,parentId:3,checked:false},
                  {name:'程五',icon:avatar,person:13,parentId:113,checked:false},
                  {name:'马一',icon:avatar,person:14,parentId:116,checked:false},
                  {name:'郑武',icon:avatar,person:15,parentId:112,checked:false},
                  {name:'陆叁',icon:avatar,person:16,parentId:112,checked:false},
                  {name:'冯晓',icon:avatar,person:17,parentId:112,checked:false},
                  {name:'姚深',icon:avatar,person:18,parentId:1,checked:true},
                  {name:'杨茂',icon:avatar,person:19,parentId:5,checked:false},
                  {name:'陆晓峰',icon:avatar,person:20,parentId:5,checked:false}
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