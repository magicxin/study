<template>
  <div :class="b('example')">
    <div :class="b('example','content')">
      <el-row>
        <el-col :span="4" v-for="(item,i) in cards" :key="i" :offset="1">
          <el-card :class="b('example','card')" :body-style="{ padding: '0px' }" @click.native="routeTo">
            <img :src="card" :class="b('example','card-image')">
            <div>
              <span>{{ item.title }}</span>
              <div>
                <time>{{ item.date }}</time>
                <el-button type="text">{{ item.btn }}</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div :class="b('example','pagination')">
      <el-pagination
        layout="prev, pager, next"
        background :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import card from 'assets/card.png'
export default {
  name: 'example',
  data() {
    return {
      card,
      cards: [{
        title:'title',
        btn: 'btn',
        date: '1991-09-20'
      },{
        title:'title',
        btn: 'btn',
        date: '1991-09-20'
      },{
        title:'title',
        btn: 'btn',
        date: '1991-09-20'
      },{
        title:'title',
        btn: 'btn',
        date: '1991-09-20'
      },{
        title:'title',
        btn: 'btn',
        date: '1991-09-20'
      },{
        title:'title',
        btn: 'btn',
        date: '1991-09-20'
      },{
        title:'title',
        btn: 'btn',
        date: '1991-09-20'
      },{
        title:'title',
        btn: 'btn',
        date: '1991-09-20'
      }]
    }
  },
  methods: {
    routeTo() {
      this.$router.push({
        name: 'demo',
        params: { _tag: 'sortable' }
      })
    }
  }
}
</script>

<style lang="scss">
  .#{$namespace}-example {
    min-height: calc(100vh - 180px);
    &__content {
      padding: 50px 100px;
    }
    &__card-image {
      width:100%;
    }
    &__pagination {
      display:flex;
      justify-content: center;
    }
  }
</style>