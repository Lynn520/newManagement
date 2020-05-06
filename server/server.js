const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const serverEntry = require('../build/server.entry').default
//创建一个中间文件接收html
const template = fs.readFileSync(path.join(__dirname, '../build/index.html'),'utf8')
//服务端使用express
const app = express()
app.use('*',express.static(path.join(__dirname,'../build')))
//发送给前端页面
app.get('*',function(req,res){
  const appString = ReactSSR.renderToString(serverEntry)
  res.send(template.replace('<!-- app -->',appString))
})
//监听3333端口号内容
app.listen(3333,function(){
	console.log('server is listening on 3333')
})

// const express = require('express')
// const path = require('path')
// const port = process.env.PORT || 8888
// const app = express()

// // 通常用于加载静态资源
// app.use(express.static(__dirname + '../build'))

// // 在你应用 JavaScript 文件中包含了一个 script 标签
// // 的 index.html 中处理任何一个 route
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, '../build', 'index.html'))
// })

// app.listen(port)
// console.log("server started on port " + port)