<template>
  <div>
    
<div class="line">
  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
    <el-menu-item index="1">
      <a href=":;" target="_blank">首页</a>
    </el-menu-item>
    <el-menu-item index="2">
      <a href=":;" target="_blank">购票</a>
    </el-menu-item>
    <el-menu-item index="3">
      <a href=":;">正版商城</a>
    </el-menu-item>
    <el-menu-item index="4">
      <a href=":;">新闻</a>
    </el-menu-item>
    <el-menu-item index="5">
      <a href=":;">视频</a>
    </el-menu-item>
    <el-menu-item index="6">
      <a href=":;">直播</a>
    </el-menu-item>
    <el-menu-item index="7">
      <a href=":;">发现</a>
    </el-menu-item>
    <el-menu-item>
      <a href=":;">牛皮糖时光</a>
    </el-menu-item>
    <el-menu-item index="8">
      <a href=":;">社区</a>
    </el-menu-item>
    <el-menu-item index="9">
      <a href=":;">会员</a>
    </el-menu-item>
  <!--用于占位-->
    <el-menu-item class="applogin">
    <div @mouseenter="show" @mouseleave="fade">
      <a href=":;">
        <img src="./order.png" alt="">
        APP下载 
      </a>
    </div>
    </el-menu-item>
    <el-menu-item class="login">
      <a href=":;">登录</a>
    </el-menu-item>
    <el-menu-item class="signin">
      <a href=":;">注册</a>
    </el-menu-item>
    <el-menu-item class="shop_right">
      <div @mouseenter="show_shop" @mouseleave="fade_shop">
        <a href=":;">
        <img src="./shop_car.png" alt="">
        </a>
      </div>
    </el-menu-item>
  </el-menu>
</div>
  <div id="download" v-show="isA">
    <img src="./erweima1.png" alt="">
  </div>
  <div id="shop" v-show="isB" v-text="n">
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isA:"",
        isB:"",
        n:"您的购物车还是空的，请赶快选购哦",
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      show(){
        this.isA=true;
      },
      fade(){
        this.isA=false;
      },
      show_shop(){
        this.isB=true;
      },
      fade_shop(){
        this.isB=false;
      }
    }
  }
</script>
<style scoped>
#download{
  position:absolute;
  right:14%;
  z-index:1000;
}
#shop{
  width: 300px;
  height: 300px;
  background-color: #fff;
  position:absolute;
  right:2%;
  line-height: 300px;
  z-index:1000
} 
.line {
  position:relative;
}
.applogin {
  position:absolute;
  left:70%;
}
.login {
  position: absolute;
  left:78%;
}
.signin {
  position:absolute;
  left:83%;
}
.shop_right {
  position:absolute;
  left:88%;
}
</style>
