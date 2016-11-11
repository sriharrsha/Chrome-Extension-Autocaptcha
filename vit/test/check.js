var el = document.getElementById('u_0_5');

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

if(hasClass(el, "active")){
  document.getElementById("facebook").style.display = "none";
}


document.getElementById('u_0_5').onclick = function() {
      document.getElementById("facebook").style.display = "none";
};
