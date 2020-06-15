<template>
  <el-container>
    <el-header height="50px">
      <div class="header_title">
        <div class="logo">百讯BI大屏管理</div>
        <div class="user_info"></div>
      </div>
    </el-header>
    <el-container class="content">
      <el-aside width="200px">
        <div class="create_group">
          <span>大屏分组</span>
          <div>
            <i class="el-icon-plus" style="font-size: 18px;font-weight: 700;"></i>
          </div>
        </div>
        <ul>
          <li
            :class="{ active : i == groupActive }"
            @click="checkGroup(i)"
            v-for="(g,i) in group_list"
            :key="g.groupId"
          >
            <span>{{g.name}}</span>
            <el-dropdown @command="add">
              <span class="el-dropdown-link">
                <i style="width: 30px" class="el-icon-more"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="{ id: `${g.groupId}`, type:'edit'}">分组改名</el-dropdown-item>
                <el-dropdown-item :command="{ id: `${g.groupId}`, type:'del'}">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </el-aside>
      <el-main>
        <template-list></template-list>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import TemplateList from "./../components/TemplateList.vue";
export default {
  name: "TemplateManagement",
  components: {
    TemplateList
  },
  data() {
    return {
      groupActive: 0,
      group_list: [
        {
          groupId: "01",
          name: "默认分组"
        },
        {
          groupId: "03",
          name: "guoze2"
        },
        {
          groupId: "21",
          name: "guoze3"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    add(command) {
      console.log(command);
    },
    checkGroup(index) {
      this.groupActive = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.header_title {
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.el-container {
  height: 100%;
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
.el-header,
.el-footer {
  background-color: #2e2e2e;
  color: #333;
  text-align: center;
  line-height: 40px;
}

.el-aside {
  background-color: #2e2e2e;
  color: #999;
  ul {
    padding: 0 !important;
    margin: 0;
    li {
      font-size: 12px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 42px;
      height: 42px;
      font-size: 12px;
      border: 1px solid #2e2e2e;
      cursor: pointer;
      position: relative;
      padding: 0 16px;
      &.active {
        color: #23c312;
        background: #404040;
      }
      &:hover {
        color: #23c312;
        background: #404040;
      }
    }
  }
}

.el-main {
  background-color: #202020;
  color: #999;
  padding: 0 20px;
}
</style>
