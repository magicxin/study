<template>
  <div id="app">
  <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
  </el-container>
  </div>
</template>

<script>
import icon from './assets/icon.jpg'

export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
.el-container,
  .el-header,
  .el-aside,
  .el-footer {
    border: 1px solid #000;
  }
</style>
