<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-row>
          <el-col :span="12">
            <ul>
              <li><el-link :underline="false" href=":;"></el-link></li>
              <li><el-link :underline="false" href=":;">加入我们</el-link></li>
              <li><el-link :underline="false" href=":;">站务论坛</el-link></li>
              <li><el-link :underline="false" href=":;">社区准则</el-link></li>
              <li><el-link :underline="false" href=":;">隐私政策</el-link></li>
            </ul>
          </el-col>
          <el-col :span="12">
            <ul>
              <li><el-link :underline="false" href=":;"></el-link></li>
              <li><el-link :underline="false" href=":;">问题反馈</el-link></li>
              <li><el-link :underline="false" href=":;">网站地图</el-link></li>
              <li><el-link :underline="false" href=":;">English</el-link></li>
              <li><el-link :underline="false" href=":;">联系我们</el-link></li>
              
            </ul>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
        <el-row>
        <el-col :span="6">
          <ul>
            <li>栏目</li>
            <li><el-link :underline="false" href=":;">新闻</el-link></li>
            <li><el-link :underline="false" href=":;">影院</el-link></li>
            <li><el-link :underline="false" href=":;">商城</el-link></li>
            <li><el-link :underline="false" href=":;">社区</el-link></li>
          </ul>
        </el-col>
        <el-col :span="6">
          <ul>
            <li>推荐</li>
            <li><el-link :underline="false" href=":;">观景指南</el-link></li>
            <li><el-link :underline="false" href=":;">时光对话</el-link></li>
            <li><el-link :underline="false" href=":;">特色榜单</el-link></li>
            <li><el-link :underline="false" href=":;">全球拾趣</el-link></li>
          </ul>
        </el-col>
        <el-col :span="6">
          <ul>
            <li><el-link :underline="false" href=":;"></el-link></li>
            <li><el-link :underline="false" href=":;">电影票房</el-link></li>
            <li><el-link :underline="false" href=":;">新片预告</el-link></li>
            <li><el-link :underline="false" href=":;">电影猜猜猜</el-link></li>
            <li><el-link :underline="false" href=":;">卡片大富翁</el-link></li>
          </ul>
        </el-col>
        <el-col :span="6">
          <ul>
            <li>关于我们</li>
            <li><img src="./wechat.png" title="微信"></li>
            <li><img src="./sinablog.png" title="微博"></li>
          </ul>
        </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
        <el-row>
          <el-col :span="12">
            <table>
              <tr>
                <td>时光周刊
                  <span class="small" v-text="num"></span>
                </td>
              </tr>
              <tr>
                <td>
                  <el-link>
                    <img src="./icon3.png" alt="">
                  </el-link>
                </td>
              </tr>
              <tr>
                <td>
                  <input style="width:130px" type="text" placeholder="邮箱地址" v-model="val">
                  <a  href=""><img id="searchimg" src="./search.png" alt=""></a> 
                </td>
              </tr>
            </table>
          </el-col>
          <el-col :span="12">
            <table>
              <tr>
                <td>手机购票
                  方便 实惠
                </td>
              </tr>
              <tr>
                <td>
                  <img style="margin-left:30px;" src="./erweima1.png" alt="">
                </td>
              </tr>
              <tr>
                <td>
                  扫描二维码 下载客户端
                </td>
              </tr>
            </table>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      val:"",
      num:"第214期"
    }
  }
}
</script>
<style>
 ul {
   list-style:none;
 } 
ul>li:first-child {
  font-size:14px;
}
#searchimg {
  vertical-align: middle;
}
.small {
  font-size:8px;
}

table>tr>td>span {
  margin-left:50px;
  text-align: right;
}
table {
  margin-top:20px;
}
</style>
