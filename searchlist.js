function saveData() {
 document.write="fname="+document.getElementById('fname')
 document.write="email="+document.getElementById('email')
 var radios = document.getElementsByName('gender');
 for (var i = 0, length = radios.length; i < length; i++) {
   if (radios[i].checked) {
       document.write="gender="+radios[i].value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";
       break;
   }
}
alert('Your Data is Saved!');
}
console.log('saveData');