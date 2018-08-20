<template>
  <div class="content">
    <div class="top">
      <router-link to="/users/login">登录/注册</router-link>
    </div>
    <div class="middle">
      <router-link class="fl" to="">投递</router-link>
      <router-link class="fr" to="">面试</router-link>
    </div>
    <div class="bottom">
      <router-link class="fl" to="">邀约</router-link>
      <router-link class="fr" to="">收藏</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      msg: 'Mine'
    }
  },
  mounted() {
    this.$store.dispatch("showHeader");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fl{float: left;}
.fr{float: right;}
.content{font-size: 1.4rem;text-align: center;padding: 0 15px;}
a{color: #fff;background: #1fc8a1}
.top{width: 100%;height: 111px;line-height: 111px;}
.top a{width: 125px;height: 45px;display: inline-block;line-height: 45px;}
.middle a,.bottom a{width: 48%;height: 86px;display: block;text-align: center;line-height: 86px;font-size: 1.6rem;margin-top:10px;}
</style>
