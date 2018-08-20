<template>
  <div id="city">
    <div class="cities-header">热门城市</div>
    <ul>
      <li @click="changeCity(item)" class="cities-item" v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      arr:["北京","上海","广州","深圳","成都","杭州"]
    };
  },
  methods:{
    changeCity(item){
      this.$store.dispatch("changeCity",item);//修改Search组件里面的城市
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#city{position: absolute;width: 100%;background: #ccc;}
.cities-header {
    border-bottom: 1px solid #e8e8e8;
    height: 25px;
    line-height: 25px;
    padding: 0 15px;
    font-size: 1.2rem;
    color: #888;
}
ul{
  padding-left: 33px;
}
.cities-item {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 1.5rem;
    color: #333;
    min-width: 100px;
    float: left;
}
</style>
