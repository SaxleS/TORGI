
window.addEventListener('load', 
 function (e) {
  var d = new Date();
  var day = d.getDate();
    let day2 = day+8;
  if (day<10) day='0'+day;
  var month = d.getMonth() + 1; if (month < 10 ) month='0'+month;
  var year = d.getFullYear(); 
  document.getElementById("mydate").value = year + "-" + month + "-" + day;
  document.getElementById("mydate2").value = year + "-" + month + "-" + day2;
 }, false);
