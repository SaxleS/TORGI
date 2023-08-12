
window.addEventListener('load', 
 function (e) {
  var d = new Date();
  var day = d.getDate(); if (day<10) day='0'+day;
  var month = d.getMonth() + 1; if (month < 10 ) month='0'+month;
  var year = d.getFullYear(); 
  document.getElementById("mydate").value = year+"-"+month+"-"+day;
 }, false);
