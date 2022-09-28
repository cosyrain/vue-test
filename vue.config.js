const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/api":{
        target:"http://siwei.me",
        changeOrigin:'true',
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
})
