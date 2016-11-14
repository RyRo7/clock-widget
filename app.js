function moveHands() {
    with(new Date()) {
        h = 30 * (getHours() % 12 + getMinutes() / 60); // 30 degrees hour
        m = 6 * getMinutes(); // 6 degrees every minute
        s = 6 * getSeconds(); // 6 degrees every second
        document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);"; // setting the rotate CSS attribute to those degree values
        document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";

        var currentTime = zeroPadding(getHours(),getMinutes(),getSeconds());
        document.getElementById('time').textContent = currentTime;
        
        setTimeout(moveHands, 1000); // calling the function every second
    }
}

window.onload = moveHands; // making sure the function starts on load of webpage

function zeroPadding(h, m, s) {
  var hour   = (h < 10) ? ("0"+h.toString())  : (h.toString())     ;
  var minute = (m < 10) ? (":0"+m.toString()) : (":"+m.toString()) ;
  var second = (s < 10) ? (":0"+s.toString()) : (":"+s.toString()) ;

  return hour+minute+second;
}
