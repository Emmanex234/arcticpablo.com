//DISABLE RIGHT CLICK AND CTRL KEY
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
}else{
    window.oncontextmenu = function () {
        return false;
    }
}
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return true;
    }
    else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        return false;
    }
});