<template>
  <div :class="b('main')">
    <el-container>
      <el-header :class="b('main','header')">
        <a><img :src="logo" :class="b('main','header-logo')"></a>
        <el-menu :class="b('main','nav')" :default-active="activeIndex" mode="horizontal" active-text-color="#409EFF">
           <el-menu-item :class="b('main','nav-item')" v-for="(item,index) in nav" :key="index" :index="index" >{{item.name}}</el-menu-item>
        </el-menu>
      </el-header>
      <div :class="b('main','line')"></div>
      <el-main :class="b('main','content')">
        <ma-example></ma-example>
      </el-main>
      <el-footer :class="b('main','footer')">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import logo from 'assets/logo.jpg'
  import maExample from 'pages/example/example'
  export default {
    name: 'index',
    components: {maExample},
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
  .#{$namespace}-main {
    &__header {
      display:flex;
      align-items: center;
    }
    &__header-logo {
      width: 100px;
    }
    &__line {
      height: 20px;
      background: $background-light-grey;
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
      min-height: calc(100vh - 140px);
    }
  }
</style>