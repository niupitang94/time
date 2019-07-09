<template>
  <div class="regin_out">
    <el-row>
      <el-col :span="12">
        <div class="left">
          <p>新会员注册</p>
          <div class="leftDiv">
            <input type="text" placeholder="常用手机号" v-model="uphone">
            <input placeholder="密码(6-20位字母与数字、符号组合)" type="password" v-model="upwd">
            <input class="imgTest" placeholder="图片验证码" type="text">
            <span style="background-color:green">RKn4</span>
            <input placeholder="短信验证码" type="text">
            <el-button>获取验证码</el-button>
          </div>
          <div class="sex">
            性别：<input type="radio" name="sex" value=1 v-model="sex">男
                  <input type="radio" name="sex" value=0 v-model="sex">女
                  <div>
                    <input type="checkbox" v-model="isAgree">已同意《时光网服务条款》
                  </div>
          </div>
        </div> 
      </el-col>
      <el-col :span="12">
        <p>会员登录</p>
        <div class="right">
          <input type="text" placeholder="输入邮箱/手机号码">
          <input type="password" placeholder="请输入密码">
          <div class="rightDiv">
            <span><el-link href=":;">短信验证码登录</el-link></span>
            <span><el-link href=":;">忘记密码</el-link></span>  
          </div>
          <el-button style="width:200px;margin:20px 60px" round type="primary">登录</el-button>
          <div>
            <el-link>
              <img src="../assets/wechat.png" alt="">
            </el-link>
            <el-link>
              <img src="../assets/sinablog.png" alt="">
            </el-link>
          </div>
          
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uphone:"",
      upwd:"",
      sex:1,
      isAgree:true,
    }
  }
}
</script>
<style scoped>
.regin_out {
  width:1000px;
  height:575px;
  background-color: #fff;
  margin:70px auto;
  border-radius:8px;
}
p {
  font-size:36px;
  color:#000;
  text-align: center;
  margin:1em 0;
}
.left {
  border-right:1px solid #eee;
}
.leftDiv,.right {
  margin-left:4em;
}

.leftDiv input{
  width:350px;
}
.leftDiv .imgTest{
  width:200px;
}
.sex {
  margin:2em 4em;
} 
.right>input {
  width:350px;
}
.rightDiv>span:last-child {
  margin-left:180px;
}
</style>
