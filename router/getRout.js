const url=require("url")
const methodget=(req,res)=>{
const parsedname=url.parse(req.url,true);
 switch (parsedname.pathname) {
     case "/":
         res.writeHead(302,{location:"index.html"})
         res.end();
         break;
         case "/api/messages":
             
            break;
            case"/api/messages/username":
            
            break;
     default:
         break;
 }
}
module.exports=methodget;