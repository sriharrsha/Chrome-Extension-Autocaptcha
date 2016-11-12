var el = document.getElementById('u_0_5');

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

if(hasClass(el, "active")){
  document.getElementById("u_0_0").style.display = "none";
}


document.getElementById('u_0_5').onclick = function() {
      document.getElementById("u_0_0").style.display = "none";
};

document.getElementById("u_0_1").href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fautocaptchaforvit%2Fvideos%2F1801173866782790%2F&display=popup&ref=plugin&src=share_button";
