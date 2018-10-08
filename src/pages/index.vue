<template>
  <div :class="b('main')">
    <el-container>
      <el-header :class="b('main','header')">
        <a><img :src="logo" :class="b('main','header-logo')"></a>
        <el-menu :class="b('main','nav')" :default-active="activeIndex" mode="horizontal" active-text-color="#409EFF">
           <el-menu-item :class="b('main','nav-item')" v-for="(item,index) in nav" :key="index" :index="index" >{{item.name}}</el-menu-item>
        </el-menu>
      </el-header>
      <el-main :class="b('main','content')"></el-main>
      <el-footer :class="b('main','footer')">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import logo from 'assets/logo.jpg'
  export default {
    name: 'index',
    data() {
      return {
        logo,
        nav: [{
          name: '示例'
        },{
          name: '博客'
        },{
          name: '生成器'
        },{
          name: '组件'
        },{
          name: '文档'
        },{
          name: '设置'
        }],
        activeIndex: 0
      }
    },
    created() {

    },
    methods: {
      
    }
  }
</script>

<style lang="scss">
  .main {
    &__header {
      display:flex;
      align-items: center;
    }
    &__header-logo {
      width: 100px;
    }
    &__nav {
      border:none !important;
    }
    &__nav-item {
      border:none !important;
    }
    &__nav-content {
      display:flex;
    }
    &__content {
      min-height: calc(100vh - 120px);
    }
  }
</style>