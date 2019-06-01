
function wrt(x) 
{
 document.getElementById("razv").innerHTML=x;
 if (x!="") {document.getElementById("sver").innerHTML="<b class='read'><i>Свернуть</i><b>";} 
 else {document.getElementById("sver").innerHTML=""; 
		 document.getElementById("razv").innerHTML="<b class='read'><i>Читать далее</i><b>";} 
}

function wrt2(x) 
{
 document.getElementById("razv2").innerHTML=x;
 if (x!="") {document.getElementById("sver2").innerHTML="<b class='read'><i>Свернуть</i><b>";} 
 else {document.getElementById("sver2").innerHTML=""; 
 document.getElementById("razv2").innerHTML="<b class='read'><i>Читать далее</i><b>";} 
} 

function wrt3(x) 
{
 document.getElementById("razv3").innerHTML=x;
 if (x!="") {document.getElementById("sver3").innerHTML="<b class='read'><i>Свернуть</i><b>";} 
 else {document.getElementById("sver3").innerHTML=""; 
 document.getElementById("razv3").innerHTML="<b class='read'><i>Читать далее</i><b>";} 
} 