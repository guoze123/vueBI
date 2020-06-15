<template>
  <el-container style="height: 100%">
    <el-header>Header</el-header>
    <el-container class="content">
      <el-aside width="200px">
        <div class="header">图层管理</div>
        <div class="operating_btn">
          <div>
            <el-tooltip class="item" effect="dark" content="下移一层" placement="top-start">
              <i class="el-icon-arrow-down"></i>
            </el-tooltip>
          </div>
          <div>
            <el-tooltip class="item" effect="dark" content="上移一层" placement="top-start">
              <i class="el-icon-arrow-up"></i>
            </el-tooltip>
          </div>
          <div>
            <el-tooltip class="item" effect="dark" content="移到底部" placement="top-start">
              <i class="el-icon-caret-bottom"></i>
            </el-tooltip>
          </div>
          <div>
            <el-tooltip class="item" effect="dark" content="移到顶部" placement="top-start">
              <i class="el-icon-caret-top"></i>
            </el-tooltip>
          </div>
        </div>
        <div class="component_list">
          <ul>
            <li></li>
          </ul>
        </div>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>
          <div class="board-config-scale">
             <el-checkbox v-model="checked">自动缩放</el-checkbox>
              <i class="el-icon-remove-outline"></i>   <el-slider value='50'></el-slider>
               <i class="el-icon-circle-plus-outline"></i> 
          </div>
           
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "TemplateMaking",
  components: {},
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

.el-header,
.el-footer {
  background-color: #2e2e2e;
  color: #333;
  text-align: center;
  line-height: 50px;
  height: 50px !important;
}

.content {
  height: calc(100% - 50px);
  .create_group {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    line-height: 48px;
    color: #999;
    padding: 0 16px;
  }
}

.el-aside {
  background-color: #d3dce6;
  color: #999;
  .header {
    height: 40px;
    line-height: 40px;
  }
  .operating_btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    div {
      width: 25%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        color: #58666e !important;
        background-color: #edf1f2;
        border-color: #c7d3d6;
      }
      i {
        font-size: 24px;
        width: 100%;
      }
    }
  }
}
.board-config-scale{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .el-slider{
    width: 200px;
    margin-left: 15px;
  }
  i{
    margin-left: 10px;
    color: #409eff;
    font-size: 20px;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #999;
}
</style>