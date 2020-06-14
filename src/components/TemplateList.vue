<template>
  <div class="content">
    <div class="screens_header">
      <div class="group-label">
        <span class="group-label_text">默认分组</span>
        <span class="group-label_count">(5)</span>
      </div>
    </div>
    <div class="screen_group">
      <div class="card_list">
        <div class="card_item">
          <div class="section-view section-create">
            <span class="create-btn">
              <i class="el-icon-plus"></i>
            </span>
            <span class="create-name">新建大屏</span>
          </div>
        </div>

        <div class="card_item">
          <div class="section-view section-create">
            <div class="section-view-thumb"></div>
            <div class="section-view-action">
              <span>lsllflg</span>
             
                <el-dropdown >
                  <span class="el-dropdown-link">
                    <i style="width: 30px" class="el-icon-more"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>分组改名</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Templatelist",
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
.content {
  .screens_header {
    height: 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .screen_group {
    .card_list {
      display: flex;
      flex-flow: wrap;
    }
    .card_item {
      background: #2e2e2e;
      flex-direction: column;
      vertical-align: middle;
      margin: 12px;
      width: 262px;
      height: 187.244px;
      .section-view {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #2e2e2e;
        vertical-align: middle;
        flex-direction: column;
        border-radius: 4px;
        .create-btn {
          display: block;
          text-align: center;
          height: 34px;
          width: 34px;
          line-height: 34px;
          color: #23c312;
          border: 2px solid #23c312;
          border-radius: 50%;
          cursor: pointer;
        }
        .create-name {
          padding: 6px 0;
          display: block;
          color: #999;
          font-size: 14px;
        }
        .section-view-thumb {
          flex: 1;
          margin: 0;
          width: 100%;
          background-image: url("./../assets/demo.jpg");
          background-color: #404040;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-position: 50%;
          border-radius: 4px 4px 0 0;
          outline: none;
          
        }
        .section-view-action {
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          position: relative;
          color: #999;
          display: flex;
          border-radius: 0 0 4px 4px;
          &>span {
            flex: 1;
            font-size: 12px;
            margin: 0;
            color: #999;
            padding-left: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            text-align: left;
          }
          .section-view-btn{
            width: 45px;
          }
        }
      }
    }
  }
}
</style>
