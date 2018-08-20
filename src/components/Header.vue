<template>
  <div id="header">
    {{$store.state.title}}
    <div @click="showBack" v-show="$store.state.showBack" class="back">&lt;</div> 
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "拉钩网"
    };
  },
  methods:{
    showBack(){
      this.$store.dispatch("back");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  height: 45px;
  line-height: 45px;
  background-color: #00b38a;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
}
.back{position: absolute;z-index: 2;top: 0;width: 50px;font-size: 3rem;}
</style>
