<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form>
      <div>
        <label for="title">Blog Title: </label>
        <input v-model="blog.title" name="blog-title" id="title" type="text" required/>
      </div>
      <div>
        <label for="content">Blog Content: </label>
        <textarea v-model="blog.content" name="blog-content" id="content" required></textarea>
      </div>
      <div>
        <label for="author">Author: </label>
        <input v-on:keyup="check" v-model="blog.author" id="author" type="text" name="blog-author" required/>
      </div>
      <div id="preview">
        <h3>Preview Blog Post</h3>
        <h4>{{blog.title}}</h4>
        <p>{{blog.content}}</p>
        <p v-show="showAuthor">Posted By: <span>{{blog.author}}</span></p>
      </div>
      <button v-on:click.prevent="send" id="submit-post">Post</button>
    </form>
  </div>
</template>

<script>
  import header from "./header.vue"
  export default {
    components: {
      appHeader: header
    },
    data () {
      return {
        blog: {
          title: "",
          content: "",
          author: "",
          date: (function() {
            let date = new Date();
            return (date.toLocaleTimeString() + "-" + date.toLocaleDateString());
          })()
        },
        showAuthor: false
      }
    },
    methods: {
      send: function() {
        if (!this.blog.title || !this.blog.content) {
          return;
        }
        this.$http.post("https://vue-blog-6960f.firebaseio.com/posts.json", this.blog).then((data) => {
            this.$router.push("/");
        });
      },
      check: function() {
        this.blog.author.length ? this.showAuthor = true : this.showAuthor = false;
      }
    }
  }
</script>

<style scoped>
  label {
    display: block;
    text-align: left;
    margin-bottom: 10px;
    font-size: 20px;
  }
  #add-blog {
    width: 550px;
    margin: 30px auto;
    text-align: left;
  }
  form {
    width: 550px;
    margin: 0 auto;
  }
  input[type="text"], textarea {
    text-align: left;
    width: 95%;
    border: 1px solid darkgrey;
    border-radius: 5px;
    font-size: 18px;
    padding-left: 10px;
    box-shadow: 0 0 10px darkgrey;
    margin-bottom: 5px;
  }
  input[type="text"] {
    height: 30px;
  }
  #author {
    width: 50%;
    margin-left: 0px;
  }
  textarea {
    resize: none;
    height: 250px;
  }
  h2 {
    text-align: left;
  }
  #preview {
    width: 95%;
    border: 1px solid darkgrey;
    height: auto;
    padding: 15px;
    background-color: white;
    box-shadow: 0 0 10px darkgrey;
    margin-top: 20px;
  }
  #preview h4 {
    color: #4E535D;
    font-size: 40px;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }
  #preview p {
    text-align: left;
    font-size: 22px;
  }
  #checkboxes label {
    text-align: center;
    display: inline-block;
  }
  #checkboxes input {
    display: inline-block;
  }
  select {
    margin: 0 auto;
    width: 150px;
    height: 30px;
  }
  span {
    font-style: italic;
    font-weight: bold;
  }
  #submit-post {
    height: 39px;
    margin-top: 10px;
    width: 100px;
    font-family: inherit;
    font-size: 20px;
    border: none;
    background-color: #424F6D;
    color: white;
    transition: all .5s;
  }
  #submit-post:hover {
    cursor: pointer;
    background-color: #8796BA;
  }
</style>
