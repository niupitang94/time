<template>
  <div>
    <div style="margin-top:30px;width:600px;margin:auto;">
      <el-input style="margin-bottom:0px;" placeholder="搜索电影、影院】影人、商品、新闻">
        <el-select v-model="selected" slot="prepend">
          <el-option label="全部" value="1"></el-option>
          <el-option label="电影" value="2"></el-option>
          <el-option label="影人" value="3"></el-option>
          <el-option label="影院" value="4"></el-option>
          <el-option label="商品" value="5"></el-option>
          <el-option label="新闻" value="6"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <!--轮播图-->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  <!--轮播图结束-->
  <!--今日热点-->
    <div>
      <el-container>
        <el-main>
          <el-row>
            <el-col :span="18">
              <div class="host">
                <h4>今日热点</h4>
                <el-link href=":;">全球拾趣</el-link> |
                <el-link href=":;">时光对话</el-link> |
                <el-link href=":;">产业聚焦</el-link> |
                <el-link href=":;">电视情报</el-link> 
                <el-link style="margin-left:39%" href=":;">更多</el-link> 
              </div>
              <!--主要图片-->
              <div id="mainimg">
                <ul>
                  <li>
                    <el-link href="http://news.mtime.com/2019/06/29/1594506.html" title="'三傻'索菲特纳结婚！新郎居然是他">
                      <img src="http://img5.mtime.cn/mg/2019/06/29/110121.11617494_285X160X4.jpg" width="285" height="160" alt="">
                    </el-link>
                    <h3>
                      <el-link href="http://news.mtime.com/2019/06/29/1594506.html" title="'三傻'索菲特纳结婚！新郎居然是他">
                      '三傻'索菲特纳结婚！新郎居然是他</el-link>
                    </h3>
                  </li>
                  <li>
                    <el-link href="http://news.mtime.com/2019/06/29/1594511.html" title="来欣赏下'神仙姐姐'的颜值">
                      <img src="http://img5.mtime.cn/mg/2019/06/29/152115.53294199.jpg" width="285" height="160" alt="">
                    </el-link>
                    <h3>
                      <el-link href="http://news.mtime.com/2019/06/29/1594511.html">来欣赏下'神仙姐姐'的颜值</el-link>
                    </h3>
                  </li>
                  <li class="Right">
                    <el-link href="http://news.mtime.com/2019/06/29/1594509.html" title="《玩4》如何让牧羊女和薯蛋头回归">
                      <img src="http://img5.mtime.cn/mg/2019/06/29/165024.85696752_285X160X4.jpg" width="285" height="160" alt="">
                    </el-link>
                    <h3>
                      <el-link href="http://news.mtime.com/2019/06/29/1594509.html" title="《玩4》如何让牧羊女和薯蛋头回归">
                      《玩4》如何让牧羊女和薯蛋头回归</el-link>
                    </h3>
                  </li>
                  <li>
                    <el-link href="http://news.mtime.com/2019/06/29/1594513.html" title="没有钢铁侠的漫威宇宙也能站稳脚跟">
                      <img src="http://img5.mtime.cn/mg/2019/06/29/175036.88935714_285X160X4.jpg" width="285" height="160" alt="">
                    </el-link>
                    <h3>
                      <el-link href="http://news.mtime.com/2019/06/29/1594513.html" title="没有钢铁侠的漫威宇宙也能站稳脚跟">
                      没有钢铁侠的漫威宇宙也能站稳脚跟</el-link>
                    </h3>
                  </li>
                  <li>
                    <el-link href="http://news.mtime.com/2019/06/29/1594511.html" title="来欣赏下'神仙姐姐'的颜值">
                      <img src="http://img5.mtime.cn/mg/2019/06/29/152115.53294199.jpg" width="285" height="160" alt="">
                    </el-link>
                    <h3>
                      <el-link href="http://news.mtime.com/2019/06/29/1594511.html">来欣赏下'神仙姐姐'的颜值</el-link>
                    </h3>
                  </li>
                  <li class="Right">
                    <el-link href="http://news.mtime.com/2019/06/29/1594509.html" title="《玩4》如何让牧羊女和薯蛋头回归">
                      <img src="http://img5.mtime.cn/mg/2019/06/29/165024.85696752_285X160X4.jpg" width="285" height="160" alt="">
                    </el-link>
                    <h3>
                      <el-link href="http://news.mtime.com/2019/06/29/1594509.html" title="《玩4》如何让牧羊女和薯蛋头回归">
                      《玩4》如何让牧羊女和薯蛋头回归</el-link>
                    </h3>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="zuijia">
                <h4>今日推荐</h4>
                <div>
                  <el-link :underline="false" href="//movie.mtime.com/229843/">
                    <img src="http://img5.mtime.cn/mg/2019/06/26/164119.85642212.jpg" width="290" height="240">
                  </el-link>
                </div>
                <el-link class="rightImg" :underline="false" >
                  <img src="http://img5.mtime.cn/mg/2019/03/15/112525.47323365_1280X720X2.jpg" width="84" height="126" alt="">
                </el-link>
                <div class="mcontent">
                  <p>
                    <el-link>
                      波西米亚狂想曲
                      <span class="mscore">8.0</span>
                    </el-link>
                  </p>
                  <p>
                    奥斯卡最佳影片
                  </p>
                  <p class="mainrecmd">
                    <i>“</i>
                    We will we will rock you !
                  </p>
                  <p>——&nbsp;&nbsp;时光鉴片室</p>
                </div>
              </div>
            </el-col>
          </el-row>
          
        </el-main>
        
        
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:"1",
    }
  }
}
</script>
<style>
.el-select .el-input {
    width: 100px;
    margin:0;
  
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  } 
  input {
    margin:0 !important;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .host {
    margin-left:15px;
  }
  .host>h4 {
    float:left;
  }
  .host>a {
    margin-top:5px;
  }
  .host a:not(:last-child) {
    margin-left:20px;
    margin-right:20px;
  }
  #mainimg>ul>li{
    float:left;
    margin:0;
    margin-right:18px;
  }
  #mainimg>ul {
    margin-left:-20px;
  }
  .mscore {
    padding: 0 10px;
    background-color:green;
    color:#fff;
  }
  .rightImg {
    margin-left:50%;
    margin-top:-20%;
    border:2px solid #fff;
  }
  .mcontent {
    background-color: #fff;
    padding:15px;
    margin-top:-24%;
    width:290px;
    box-shadow: 0 0 10px #aaa;
  }
  .mainrecmd {
    margin-top:20px;
  }
  .mainrecmd~p {
    margin-left:55%;
  }
</style>
