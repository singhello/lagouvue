<template>
  <div class="footer">
    <router-link @click.native="show" to="/">职位</router-link>
    <router-link to="/search">搜索</router-link>
    <router-link to="/users/mine">我的</router-link>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: "Footer"
    };
  },
  methods:{
    show(){
      this.bus.$emit("loadJobs");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin: 0;padding: 0;}
.footer {
  width: 375px;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #e8e8e8;
  background-color: #f6f6f6;
  color: #c2cfcc;
  line-height: 50px;
  text-align: center;
  font-size: 1.8rem;
}
a {
  text-decoration: none;
  color: #00b38a;
  display: block;
  float: left;
  width:33%;
}
.active{
  background-color: #e7f3f0;}
  .router-link-exact-active{
    color: #00b38a;
    background-color: #e7f3f0;
  }
</style>
