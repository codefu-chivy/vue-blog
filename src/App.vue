<template>
  <div id="app">
    <blogHeader></blogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import Blog from "./components/blog.vue";
  import Header from "./components/header.vue";
  import Posts from "./components/posts.vue";
  export default {
    components: {
      "blogComp": Blog,
      "blogHeader": Header,
      "blogPosts": Posts
    },
    data() {
      return {

      }
    },
    methods: {
    
    }
  }
</script>

<style>
  body {
    text-align: center;
    margin: -20px auto 0px auto;
    height: inherit;
    font-family: Catamaran;
    color: #323233;
    background-color: #D3D3D3;
  }
</style>
