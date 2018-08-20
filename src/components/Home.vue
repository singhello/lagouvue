<template>
  <div class="home">
    <div class="custom-info">
      <span class="info">10秒钟定制职位</span>
      <router-link @click.native="changeIsShow" to="/users/login" class="go"  >
          <em class="text">去登录</em>
      </router-link>
    </div>
    <ul v-show="arr.length" class="list">
      <router-link @click.native="detail(item)" v-for="(item,index) in arr" :key="index" tag="li" to="/detail" class="list-item">
        <img class="item-logo" :src="item.companyLogo" alt="">
        <div class="item-desc">
            <h2 class="item-title">{{item.companyFullName}}</h2>
            <p class="item-info">
                <span class="item-pos">
                    {{item.positionName}} [ {{item.city}} ]
                </span>
                <span class="item-salary">{{item.salary}}</span>
            </p>
            <p class="item-time">{{item.createTime}}</p>
        </div>
      </router-link>
      <li class="list-item more" @click="loadMore">加载更多</li>
    </ul>
    <div v-show="arr.length" id="copyright">
      <p>©2015 lagou.com, all right reserved </p>
      <div class="copyright-item">
        <span class="phone active">移动版&nbsp;·&nbsp;</span>
        <span class="computer">电脑版&nbsp;·&nbsp;</span>
        <a href="#header">回顶部</a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "Home",
  data() {
    return {
      arr: [],
      pageNo:1,
      pageSize:15
    };
  },
  methods: {
    getJobs() {
      //https://m.lagou.com/search.json?city=%E5%85%A8%E5%9B%BD&positionName=%E5%8C%97%E4%BA%AC&pageNo=1&pageSize=15
      //https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
      let url = `http://localhost:9000/lagou/listmore.json`;
      let params = {pageNo:this.pageNo,pageSize:this.pageSize };
      this.$http.get(url, { params }).then(res => {
        console.log(res.data.content.data.page.result);
        this.arr = this.arr.concat(res.data.content.data.page.result);
        this.arr.forEach(item => {
          if(/^https:\/\/www.lgstatic.com\//.test(item.companyLogo))return;
          item.companyLogo = "https://www.lgstatic.com/" + item.companyLogo;
        });
      });
    },
    loadMore(){
      this.pageNo++;
      this.getJobs();
    },
    changeIsShow(){
      this.$store.dispatch("changeAction")
    },
    detail(item){
      this.$store.dispatch("changeTitle",item)
    }
  },
  mounted() {
    this.getJobs();
    // this.bus.$on("loadJobs", () => {
    //   console.log(this);
    //   this.getJobs();
    // });
    this.$store.dispatch("showHeader");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-info {
  border-bottom: 1px solid #e8e8e8;
  height: 43px;
  line-height: 43px;
  padding: 0 15px;
  color: #555;
  font-size: 1.4rem;
  position: relative;
}
.custom-info .info {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  margin-right: 100px;
  height: 100%;
  position: relative;
}
.custom-info .go {
  position: absolute;
  right: 15px;
  top: 0;
  display: block;
  float: right;
  background-color: #f5f5f5;
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
  margin-top: 6px;
  color: #00b38a;
  border-radius: 15px;
}
.list {
  margin-bottom: 50px;
  overflow: hidden;
}
.list .list-item {
  padding: 14px;
  border-bottom: 1px solid #e8e8e8;
  overflow: hidden;
}
.list .item-logo {
  display: block;
  float: left;
  width: 60px;
  height: 60px;
}
.list .item-desc {
  margin-left: 70px;
  height: 62px;
  color: #333;
}
.list .item-title {
  font-size: 1.6rem;
  margin-bottom: 6px;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list .item-info {
  margin-bottom: 6px;
  width: 100%;
  height: 15px;
  line-height: 15px;
}
.list .item-pos {
  font-size: 1.2rem;
  float: left;
  width: 60%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list .item-salary {
  font-size: 1.6rem;
  color: #00b38a;
  float: right;
}
.list .item-time {
  font-size: 1rem;
  color: #888;
}
.more {
  text-align: center;
  background: #fafafa;
  font-size: 1.5rem;
}
#copyright{
  margin-bottom: 50px;
  margin-top: 30px;
  padding-bottom: 40px;
  text-align: center;
  
}
</style>
