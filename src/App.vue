<template>
  <div id="app">
    <div class="slideMenu">
      <el-tree
        :data="data"
        :props="defaultProps"
        accordion
        @node-click="handleNodeClick">
      </el-tree>
    </div>
    <img src="./assets/logo.png" style="margin-left: 200px;">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [{
          label: '用户',
          children: [{
            label: '用户列表',
            children: [{
              label: '所有用户'
            }]
          }]
        }, {
          label: '设备',
          children: [{
            label: '终端',
            children: [{
              label: '所有终端'
            }]
          }, {
            label: '中继',
            children: [{
              label: '所有中继'
            }]
          }]
        }, {
          label: '工单',
          children: [{
            label: '已完成工单'
          }, {
            label: '未完成工单'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log(data.$treeNodeId)
        var treeNodeId = data.$treeNodeId
        console.log(this.$router)
        switch (treeNodeId) {
          case 3:
            this.$router.push('/userlist/')
            break
          case 6:
            this.$router.push('/devicelist/')
            break
          case 8:
            this.$router.push('/relaylist/')
            break
          case 10:
            this.$router.push('/solvedorder/')
            break
          case 11:
            this.$router.push('/unsolvedorder/')
            break
          default:
            console.log(treeNodeId)
        }
      }
    }
  }
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slideMenu{
  text-align: left;
  float: left;
  width: 200px;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
}
.content{
  text-align: center;
  margin-left: 200px;
  display: flex;
  justify-content:center;
}
.el-tree{
  height: 100%;
}
</style>
