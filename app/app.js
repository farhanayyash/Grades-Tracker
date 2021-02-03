'use strect';
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

console.log(getRndInteger(0,100));

var subbuton=document.getElementById("submit");
subbuton.addEventListener("click",formfun);


function formfun(Event){
  Event.preventDefault();

  var finalres = [];

  var rand = getRndInteger(0,100);
  var nameValue = document.getElementById("fname").value;
  
 console.log(nameValue);
 var cousreValue = document.getElementById("course").value;
 console.log(cousreValue);
 var table = document.getElementById("tableform");
 var row= document.createElement("tr");
var rowelement= document.createElement("td");
rowelement.textContent=nameValue;
finalres.push(nameValue);
row.appendChild(rowelement);
var rowelement1= document.createElement("td");
rowelement1.textContent=rand;
finalres.push(rand);
row.appendChild(rowelement1);
var rowelement2= document.createElement("td");
rowelement2.textContent=cousreValue;
finalres.push(cousreValue);
row.appendChild(rowelement2); 
var rowelement3= document.createElement("td");
rowelement3.textContent=checkpass(rand);
finalres.push(checkpass(rand));
row.appendChild(rowelement3); 
console.log(row);
table.appendChild(row);
if(localStorage.getItem("names")){
  var getlocal = JSON.parse(localStorage.getItem("names"));
  getlocal.push(nameValue);
  getlocal.push(rand);
  getlocal.push(cousreValue);
  getlocal.push(checkpass(rand));
  localStorage.setItem("names", JSON.stringify(getlocal));
}else{
localStorage.setItem("names", JSON.stringify(finalres));
}
}

function checkpass(x){
  if(x >= 50){
    return "Yes";
  }
  else{
    return"No";
  }
}

if(localStorage.getItem("names")){
  var getlocal = JSON.parse(localStorage.getItem("names"));
  for(var i = 0 ; i < (getlocal.length)/4 ; i++){
    var table = document.getElementById("tableform");
 var row= document.createElement("tr");
var rowelement= document.createElement("td");
rowelement.textContent=getlocal[i*4];

row.appendChild(rowelement);
var rowelement1= document.createElement("td");
rowelement1.textContent=getlocal[i*4+1];

row.appendChild(rowelement1);
var rowelement2= document.createElement("td");
rowelement2.textContent=getlocal[i*4+2];

row.appendChild(rowelement2); 
var rowelement3= document.createElement("td");
rowelement3.textContent=getlocal[i*4+3];

row.appendChild(rowelement3); 
console.log(row);
table.appendChild(row);
  }
}



