var captchaa = document.getElementsByTagName("FONT")[0].innerText;
for(var k = 0;k<5;++k)
{
captchaa = captchaa.replace(" ","");
}
if(captchaa.length == 6)
{
var textboxa = document.getElementsByName('vrfcd')[0];
textboxa.value=captchaa;
}



var captcha = document.getElementsByTagName("FONT")[6].innerText;
for(var i = 0;i<5;++i)
{
captcha = captcha.replace(" ","");
}
if(captcha.length == 6)
{
var textbox = document.getElementsByName('vrfcd')[0];
textbox.value=captcha;
}

var captcha1 = document.getElementsByTagName("FONT")[38].innerText;
for(var j = 0;j<5;++j)
{
captcha1 = captcha1.replace(" ","");
}
if(captcha1.length == 6)
{
var textbox1 = document.getElementsByName('vrfcd')[0];
textbox1.value=captcha1;
}



var ifrm = document.createElement("iframe");
ifrm.setAttribute("src", "https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fautocaptchaforvit&width=300&layout=standard&action=like&size=large&show_faces=true&share=true&height=90&appId=548972921959325");
ifrm.setAttribute("id","fblike");
ifrm.style.width = "300px";
ifrm.style.height = "90px";
ifrm.style="display:none;position:fixed;bottom:20px;height:90px;right:10px;border:none;overflow:hidden";
document.body.appendChild(ifrm);


setTimeout(function () {
  document.getElementById("fblike").style="display:block;position:fixed;bottom:20px;height:90px;right:10px;border:none;overflow:hidden";
}, 500);
