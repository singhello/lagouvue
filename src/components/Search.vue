<template>
  <div class="">
    <City v-show="$store.state.isShowCity"/>
    <div class="top">
      <div class="left fl">
        <span @click="showCity">{{$store.state.city}}</span>
      </div>
      <div class="right fl">
        <input v-model="msg" type="text" name="" id="search" placeholder="搜索职位或公司" />
        <span @click="search" class="searcher">搜索</span>
      </div>
      
    </div>
    <ul v-if="!arr.length" class="history">
      <li class="history-item" v-for="(item,index) in history" :key="index">{{item}}</li>
    </ul>
    <ul v-show="arr.length" class="list">
      <router-link v-for="(item,index) in arr" :key="index" tag="li" to="/detail" class="list-item">
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
  </div>
</template>

<script>
import City from './City';
export default {
  name: 'Search',
  data () {
    return {
      arr:[],
      history:[],
      msg:"",
      pageNo:1,
      show:true
    }
  },
  components:{
    City
  },
  mounted() {
    this.$store.dispatch("showHeader");
  },
  methods:{
    showCity(){
      this.$store.dispatch("showCity")
      // this.$store.dispatch("showBack")
    },
    loadMore(){
      this.pageNo++;
      this.search();
    },
    search(){
      if(this.history.indexOf(this.msg) == -1){
        this.history.unshift(this.msg);
      }
      //https://m.lagou.com/search.json?city=%E5%85%A8%E5%9B%BD&positionName=%E5%8C%97%E4%BA%AC&pageNo=1&pageSize=15
      let url = `http://localhost:9000/lagou/search.json`;
      let params = {city:this.$store.state.city,positionName:this.msg,pageNo:this.pageNo,pageSize:15};
      this.$http.get(url, { params }).then(res => {
        console.log(res.data.content.data.page.result);
        if(res.data.content.data.page.result.length == 0) return;
        this.arr = this.arr.concat(res.data.content.data.page.result);
        this.arr.forEach(item => {
          if(/^https:\/\/www.lgstatic.com\//.test(item.companyLogo))return;
          item.companyLogo = "https://www.lgstatic.com/" + item.companyLogo;
        });
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fl{float: left;}
.top{height: 45px;line-height: 45px;font-size: 1.5rem;border-bottom: 1px solid #e8e8e8;}
.left {
    height: 45px;
    line-height: 45px;
    font-size: 1.5rem;
    text-align: center;
    width: 88px;
    border-right: 1px solid #e8e8e8;
}
.right{width: 286px;}
#search {
    display: block;
    border: none;
    padding: 10px 0;
    height: 25px;
    line-height: 25px;
    color: #333333;
    width: 75%;
    margin: 0 0 0 5%;
    font-size: 1.5rem;
    float: left;
}
.searcher {
    display: block;
    width: 20%;
    height: 45px;
    line-height: 45px;
    float: right;
    text-align: center;
}
.history {
    background-color: #fafafa;
    color: #666666;
}
.history .history-item {
    height: 45px;
    line-height: 45px;
    font-size: 1.4rem;
    border-bottom: 1px solid #e8e8e8;
    padding: 0 0 0 23px;
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
</style>
