<template>
  <div id="header">
    <h1>Vue.js Blog</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
    
    }
  }
</script>

<style scoped>
    #header {
        width: 60%;
        height: auto;
        background-color: #424F6D;
        color: white;
        padding-top: 5px;
        margin: 0 auto;
    }
    h1 {
        letter-spacing: 2.5px;
        font-size: 50px;
    }
    button {
        height: 40px;
        float: left;
        border: none;
        color: white;
        background-color: #424F6D;
        font-size: 20px;
        font-family: inherit;
        transition: all .5s;
    }
    button:hover {
        cursor: pointer;
        background-color: #8796BA;
    }
</style>
