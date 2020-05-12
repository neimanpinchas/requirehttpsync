var SR=require("sync-request");
var getLink=require("get-link");

var rsh=function(name,base=false){
    if (base){
        url=getLink(base,name)
    } else {
        url=name
    }
    var res = SR('GET', url);
    var module={exports:{}};
    var exports=module.exports;
    //for recursive relative requires
    var requirehttpsync=rsh;
    eval(res.getBody().toString());
    return exports;
}

module.exports=rsh;