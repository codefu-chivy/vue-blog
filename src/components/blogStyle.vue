<template>
  <div>
    <h4>{{post.title}}</h4>
    <p>{{post.body | cut-body}}</p>
    <p>Posted By: <span v-rainbow>Chival Trotman</span></p>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>
  h4 {
    color: #4E535D;
    font-size: 40px;
    letter-spacing: 2px;
    margin-bottom: 20px;
    text-align: left;
  }
  p {
    text-align: left;
    font-size: 22px;
    width: 75%;
  }
</style>

