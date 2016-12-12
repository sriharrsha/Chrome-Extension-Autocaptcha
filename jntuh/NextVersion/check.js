
function readUrl() {
var url = window.location.href;
return url;
}

var site = readUrl();

window.onload = function test(){
      if (site.includes("RESULT") && document.getElementById("AVCODE")){
        var a = document.getElementById("AVCODE");
        var ab = a.value;
        ab = ab.replace(/\s+/g, '');
        document.getElementById("UVCODE").value = ab;

      }
}
