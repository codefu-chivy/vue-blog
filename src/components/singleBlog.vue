<template>
  <div id="single">
    <h4>{{blog.title}}</h4>
    <p>{{blog.content}}</p>
    <p>Posted By: <span>{{blog.author}}</span></p>
    <p id="date">{{blog.date}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {
        title: "",
        content: "",
        author: "", 
        date: ""
      }
    }
  },
  created() {
    this.$http.get("https://vue-blog-6960f.firebaseio.com/posts/" + this.id + ".json").then((data) => {
      console.log(data)
      this.blog.title = data.body.title.toUpperCase();
      this.blog.content = data.body.content;
      this.blog.author = data.body.author;
      this.blog.date = data.body.date;
    });
  }
}
</script>

<style>
  #date {
    color: #4E535D;
    font-weight: bold;
  }
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
    width: 85%;
  }
  #single {
    width: 58%;
    margin: 0 auto;
    background-color: white;
    padding: 15px;
    padding-left: 30px;
    margin-bottom: 15px;
    transition: all .5s;
  }
  span {
    font-weight: bold;
    font-style: italic;
  }
</style>
