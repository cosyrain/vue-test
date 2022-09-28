<template>
  <div>
    <span>blogs</span>
    <table>
      <tr v-for="(blog, index) in blogs" :key="index">
        <td @click="show_blog(blog.id)">{{ blog.title }}</td>
        <router-link :to="{name:'blog',query:{id:blog.id}}">
        {{blog.title}}</router-link>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "博客列表页",
      blogs: [],
    };
  },
  mounted() {
    this.$http.get("api/interface/blogs/all").then(
      (response) => {
        this.blogs = response.body.blogs;
      },
      (response) => {
        console.log(response);
      }
    );
  },
  methods: {
    show_blog: function (blog_id) {
      this.$router.push({ name: 'blog', query: { id: blog_id } })
    }
  }
};
</script>

<style lang="scss">
$color:red;
td {
  border-bottom: 1px solid $color;
}
</style>
