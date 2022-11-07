
const strDatabase=():any=>{
    const string:String =  (process.env.SERVER_RUN==='dev'||'DEV'?process.env.SERVER_MONGOURI_DEVELOP:process.env.SERVER_MONGOURI_PRODUCT);
    console.log("http://localhost:"+process.env.SERVER_PORT);
    console.log("đang chạy database : "+string);
    console.log("đang chạy : "+process.env.SERVER_RUN);
    return string;
}
const success=(value1:any=null,value2:String=null):any=>{
    let object = new Object();
    object["statusBoolean"]=true;
    object["status"]="success";
    object["msg"]="Thành công";
    object["data"]= new Array();
    if(typeof(value1)=="string"){
        object["msg"] = value1;
    }else{
        object["data"] = value1;
    }
    if(value2){
        object["msg"] = value2;
    }
    return object;
}
const error=(value1:any=null,value2:String=null):any=>{
    let object = new Object();
    object["statusBoolean"]=false;
    object["status"]="error";
    object["msg"]="Không thành công";
    object["data"]= new Array();
    if(typeof(value1)=="string"){
        object["msg"] = value1;
    }else{
        object["data"] = value1;
    }
    if(value2){
        object["msg"] = value2;
    }
    return object;
}
export {
    error,
    success,
    strDatabase
}