function allTrim(str){
    str = str + "";    
    str = str.replace(/[[ ]/g,"");  //去除字符算中的空格，注意这个中括号是分开的  
    str = str=str.replace(/[\r\n]/g,"");//去掉回车换行
    str = str.replace(/^[\s　]+|[\s　]+$/g, "");//去掉全角半角空格
    return str
}
function getUrlId(str){
    str = str + "";
    return str.replace(/[^0-9]+/g,"")
}
function delHtmlTag(str){
    str = str + "";    
    return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
}
function delHtmlText(str){
    str = str + "";    
    str = str.replace(/<[^>]+>/g,"");//去掉所有的html标记
    str = str.replace(/[[ ]/g,"");  //去除字符算中的空格，注意这个中括号是分开的  
    str = str=str.replace(/[\r\n]/g,"");//去掉回车换行
    str = str.replace(/^[\s　]+|[\s　]+$/g, "");//去掉全角半角空格
    return str
}
function objectStringify(obj){
    var str = '';
    Object.keys(obj).forEach(key=>{
        str+= key + ':'
        str+= obj[key]+','
    })
    return str;
}
module.exports={
    allTrim,
    getUrlId,
    delHtmlTag,
    delHtmlText,
    objectStringify,
}