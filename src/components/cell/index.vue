<template>
  <div class="cell" @click="emitClick">
    <div class="check" @click.stop="$emit('select',obj)">
      <div :class="{'round-check':obj.checked}" class="round">
        <i v-if="obj.checked" class="iconfont icon-duihao"></i>
      </div>
    </div>
    <div class="avatar">
      <img :src="obj.icon?obj.icon:icon" />
    </div>
    <div class="title">{{obj.name}}</div>
    <div class="link">
      <i v-if="link" class="iconfont icon-qianjin"></i>
    </div>
  </div>
</template>

<script>
  import create from 'utils/create'
  export default create({
    name: 'cell',
    props: {
      link: {
        type:Boolean,
        default() {
          return false
        }
      },
      obj: {
        type:Object,
        required:true
      }
    },
    data() {
      return {
        
      }
    },
    created() {
      console.log(this.obj)
    },
    methods: {
      emitClick() {
        this.$emit('click',this.obj)
      }
    }
  })
</script>

<style>
  .cell {
    display: flex;
  }
  
  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    padding: 14px 0;
  }
  
  .checked {
    background: #000;
  }
  
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-bottom: 1px solid #ececec;
    padding: 14px 0;
  }
  
  .avatar img {
    width: 10vw;
    height:10vw;
    object-fit: cover;
  }
  
  .title {
    display: flex;
    flex: 4 1 0;
    align-items: center;
    border-bottom: 1px solid #ececec;
    padding: 14px 0;
  }
  
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-bottom: 1px solid #ececec;
    padding: 14px 0;
  }
  
  .round {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: 1px solid #757a95;
    border-radius: 50%;
  }
  .round i {
    color:#fff;
  }
  .round-check {
    background: #6997ed;
  }
</style>