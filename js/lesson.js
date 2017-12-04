function subStr(url) {
    var obj = {};
    var str = url.split('?')[1];

    //console.log(str);
    var str2 = str.split('&');
    console.log(str2);
    for (var k in str2) {
        var str3 = str2[k].split('=');
        obj[str3[0]] = str3[1];
    }
    return obj;
}
var href = subStr(window.location.href);
// console.log(href.a);
// console.log(href);
// console.log(decodeURI(href.a));
// 更改头部标题数据decodeURI(乱码值)方法把地址栏中获取到的乱码转换成相应的中文
$(".middle").text(decodeURI(href.a));
// $(".middle").text(decodeURI(href.a)+"强哥");
// $(".middle").text(href.a+"强哥");


$(".list").children('li').click(function(){
	window.location.href="lesson_info.html";
})