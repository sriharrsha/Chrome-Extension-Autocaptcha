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
