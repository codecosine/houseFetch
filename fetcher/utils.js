function allTrim(str){
    str = str.replace(/[[ ]/g,"");  //去除字符算中的空格，注意这个中括号是分开的  
    str = str=str.replace(/[\r\n]/g,"");//去掉回车换行
    str = str.replace(/^[\s　]+|[\s　]+$/g, "");//去掉全角半角空格
    return str
}
module.exports={
    allTrim,
}