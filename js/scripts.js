var now = new Date();
var options = { 
    timeZoneName: 'short', 
    hour12: true, 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
};
var datetime = now.toLocaleString('en-US', options);

document.getElementById("datetime").innerHTML = datetime;