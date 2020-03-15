<template>
  <div id="app">
	  APP
    <div>sddadasd</div>
    <!-- <router-link :to="{path:'/item/3'}"></router-link> -->
    <h1>路由</h1>
    <home></home>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import Home from './components/Home'
export default {
  name: "",
  props: {},
  components: {Home},
  computed: {},
  watch: {},
  data() {
	return {};
  },
  methods: {},
  created() {},
  mounted() {
    console.log(123);
    
  }
};
</script>
<style lang="css">
body{
  background-color: pink;
}
</style>
