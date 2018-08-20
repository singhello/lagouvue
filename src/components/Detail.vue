<template>
  <div id="detail">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      msg: "Detail"
    };
  },
  methods:{
    
  },
  destroyed() {
    this.$store.dispatch("disChangeTitle")
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
