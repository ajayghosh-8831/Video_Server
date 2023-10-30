//import 
const jsonserver=require('json-server')
const cors=require('cors')
const server=jsonserver.create()

//Need to convert json data to js before request resolve 
const middleware=jsonserver.defaults()
//Create router

const router=jsonserver.router('db.json')

//For apply in server ,

server.use(middleware)
server.use(cors())
server.use(router)
const PORT=5000
server.listen(PORT,()=>{
    console.log(`---json server started at port:${PORT}....`);
})