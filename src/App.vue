<template>
<div id = "app">
    <router-view></router-view>
</div>
</template>

<script>
import layout from "./views/layout/layout";
export default {
  name: 'app',
  components: {
      layout,
  }
}
</script>

<style>
  @import "./assets/css/base.css";

  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
</style>
