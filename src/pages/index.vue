<template>
  <div class="index">
    <el-row gutter="20">
      <el-col span="8" v-for="(item,index) in examples" :key="index">
        <el-card @click.native="routeTo(item.name)">
          <img :src="item.img">
          <div>
            <span>{{item.title}}</span>
            <div>
              <time>{{ item.date }}</time>
              <el-button>操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import card from 'assets/card.png'
  export default {
    name: 'index',
    data() {
      return {
        examples: [{
          img: card,
          title: '标题1',
          date: '2018-9-2',
          name: 'treelist'
        },{
          img: card,
          title: '标题2',
          date: '2018-9-3'
        }]
      }
    },
    created() {

    },
    methods: {
      routeTo(name) {
        console.log(name)
        this.$router.push(name)
      }
    }
  }
</script>

<style>
  
</style>