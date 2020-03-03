function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
var count = 2;
function validate() {
  var un = document.myform.username.value;
  var pw = document.myform.pword.value;
  var valid = false;
  /*Change the passwords for your class members*/
  var unArray = ["Archit", "Sreehitha", "Nakul", "Vrinda", "Diya", "Keshav", "Yuvraj", "Lucas", "Eric", "Maanika", "Dhruva", "Anuj", "Nyan", "Roonhi", "Saachi", "Pranesh", "Anand", "Nathan", "Layton", "Kathy", "admin"];
  var pwArray = [/*Archit*/ "archeetos", /*Sreehitha*/ "6COverlook",/*Nakul*/"debatechamp246", /* xsZ*/"6COverlook", "6COverlook","6COverlook" , "anything", /*Lucas*/"592", /*Eric*/"Menggg", /*Maanika*/"6COverlook", /*Dhruva*/"6COverlook", /*Anuj*/"football123", /*Nyan*/"poopyface", /*Roonhi*/"SRS", /*Saachi*/"tramarat", /*Pranesh*/"justkeepitnormal", /*Anand*/"1141144", /*Nathan*/"nasangswee", /*Layton*/"exmiouy931", /*Kathy*/"6COverlook", /*admin*/"6Bcopies"];
  for (var i = 0; i < unArray.length; i++) {
    if ((un == unArray[i]) && (pw == pwArray[i])) {
      valid = true;
    }
  }
  
  if (valid) {
    alert("Login successful.  Hello, " + un + ". Welcome to our website. Your password is " + pw + ".");
    window.location.replace("home.html");
  }
  
  else {
    alert("Invalid username and/or password. Try again. If you are not in 6C, you cannot access this website.");
  }
  var t = " tries";
  if (count == 1) { t = " try" }
  if (count >= 1) {
    document.myform.username.value = "";
    document.myform.pword.value = "";
    setTimeout("document.myform.username.focus()", 25);
    setTimeout("document.myform.username.select()", 25);
    count--;
  }
  else {
    return true;
  }
}
console.log("Why are you looking at the console? Go back to the website!")


