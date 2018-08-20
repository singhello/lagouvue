<template>
  <div class="reg">
    <header class="form_header">
      <h2>注册拉勾</h2>
      <router-link to="/users/login" class="brother_link">登录</router-link>
    </header>
    <p><span>0086</span>&ensp;&ensp;&ensp;<input v-model="account" class="input_text" type="text" placeholder="请输入常用手机号"></p>
    <p><input v-model="pass" class="input_text" type="text" placeholder="证明你是不是机器人"><span class="random">{{num}}</span></p>
    <p><input v-model="yanzheng" class="input_text" type="text" placeholder="请输入收到的验证码"><span>获取验证码</span></p>
    <div class="input_label btn_group">
      <input @click="login" type="button" class="submit_btn" value="注册">
    </div>
    <footer class="form_footer">
			<span class="signin_type_btn">手机号登录</span>
		</footer>
  </div>
</template>

<script>
export default {
  name: 'Reg',
  data () {
    return {
      msg: 'Reg',
      account:"",
      pass:"",
      yanzheng:"",
      num:"0000"
    }
  },
  methods:{
      login(){
        //   let url = "http://localhost:9000/node/users/reg";
        //   let params = {username:this.account,password:this.pass};
        //   this.$http.get(url,{params}).then(res=>{
        //       console.log(res);
        //   })
      },
      random(max,min){
          return this.num = Math.floor(Math.random() * (max - min + 1) + min);
      }
  },
  mounted() {
      this.$store.dispatch("changeAction");
      this.random(9999,1000);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{border: none;}
.reg{padding:1.83rem;}
.input_text {
    width: 80%;
    box-sizing: border-box;
    padding: 1.27rem 0;
    font-size: 1.45rem;
    color: #333;
    border: 0;
}
p{
    border-bottom: 1px solid #E8E9EB;}
.input_label.btn_group {
    margin-top: 1.2rem;
}
.input_label .submit_btn {
    width: 100%;
    height: 3.17rem;
    border-radius: 3px;
    background-color: #00b38a;
    color: #fff;
    font-size: 1.45rem;
    border: 0;
}
.form_header {
    position: relative;
    line-height: 3.69rem;
}
h2 {
    color: #333;
    font-size: 1.51rem;
    font-weight: 400;
    margin: 1.13rem 0 2.07rem;
}
.form_header .brother_link {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.4rem;
    color: #00b38a;
}
.form_footer {
    position: absolute;
    bottom: 4.83rem;
}
.form_footer .signin_type_btn {
    color: #00b38a;
    font-size: 1.4rem;
}
</style>
