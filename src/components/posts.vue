<template>
  <div id="posts">
    <div id="search">
      <input v-on:keyup="filtered" v-model="searchField" id="post-search" type="search" placeholder="Search for Blog Posts"/>
      <button id="search-for"><i class="fa fa-search" aria-hidden="true"></i></button>
      <router-link to="/create"><button id="create">Create New Post</button></router-link>
    </div>
      <div class="list" v-for="post in filtered()" v-bind:key="post.title">
        <router-link v-bind:to="'/blog/' + post.id" id="blog-link">
          <h4>{{post.title}}</h4>
          <p>{{post.content | cut-body}}</p>
          <p>Posted By: <span>{{post.author}}</span></p>
          <p id="blogDate">{{post.date}}</p>
        </router-link>
      </div>
  </div>
</template>

<script>
  import header from "./header.vue"

  export default {
    components: {
      appHeader: header
    },
    data() {
      return {
        posts: [],
        searchField: ""
      }
    },
    methods: {
      filtered: function() {
        let newPosts = this.posts.filter((ele) => {
          return ele.title.toLowerCase().match(this.searchField.toLowerCase());
        });
        return newPosts;
      }
    },
    created: function() {
      this.$http.get("https://vue-blog-6960f.firebaseio.com/posts.json").then((data) => {
        for (let key in data.body) {
          data.body[key].title = data.body[key].title.toUpperCase();
          data.body[key].id = key;
          this.posts.push(data.body[key])
        }
      });
    }
  }
</script>

<style scoped>
  #blogDate {
    color: #4E535D;
    font-weight: bold;
  }
  #posts h4 {
    color: #4E535D;
    font-size: 40px;
    letter-spacing: 2px;
    margin-bottom: 20px;
    text-align: left;
  }
  #posts p {
    text-align: left;
    font-size: 22px;
    width: 85%;
  }
  #posts {
    width: 60%;
    margin: 0 auto;
  }
  .list {
    background-color: white;
    padding: 15px;
    padding-left: 30px;
    margin-bottom: 15px;
    transition: all .5s;
  }
  .list:hover {
    box-shadow: 5px 5px 15px darkgrey;
    background-color: #4E535D;
  }
  #posts h2 {
    font-size: 40px;
    letter-spacing: 2px;
  }
  #search-for {
    background-color: #424F6D;
    color: white;
    height: 40px;
    width: 40px;
    border: none;
    transition: all .5s;
  }
  #search-for:hover {
    cursor: pointer;
    background-color: #8796BA;
  }
  .fa-search {
    color: white;
  }
  #search {
    text-align: right;
    margin-bottom: 20px;
  }
  #search input {
    height: 40px;
    padding-left: 5px;
    font-size: 18px;
  }
  #create {
    height: 40px;
    float: left;
    border: none;
    color: white;
    background-color: #424F6D;
    font-size: 20px;
    font-family: inherit;
    transition: all .5s;
  }
  #create:hover {
    cursor: pointer;
    background-color: #8796BA;
  }
  #blog-link {
    text-decoration: none;
    color: black;
  }
  #blog-link:hover {
    cursor: pointer;
    color: white;
  }
  span {
    font-style: italic;
    font-weight: bold;
  }
</style>