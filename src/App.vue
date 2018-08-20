<template>
  <div id="app">
    <Header v-if="$store.state.isShow"/>
    <router-view/>
    <Footer v-if="$store.state.isShow"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Home from '@/components/Home'
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style>
html{font-family: Helvetica; font-size: 65.5%; color: #333;}
*{margin: 0;padding: 0;}
a{text-decoration: none;}
em,i{font-style: normal;}
ul,ol{list-style: none}
input{outline: none;}
</style>
