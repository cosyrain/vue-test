<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/blogs">Blogs</router-link>
    </nav>
    <my-logo :title="title"></my-logo>
    <input type="button" @click="change_title" value="点击更改标题">
    <router-view/>
  </div>
</template>

<script>
  import MyLogo from '@/components/LogoItem.vue';

  export default {
    data(){
      return {
        title:'博客'
      }
    },
    methods:{
      change_title:function(){
        this.title="修改标题"
      }
    },
    components:{
      MyLogo
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
