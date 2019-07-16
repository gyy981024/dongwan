function setTab(m,n){
var menu=document.getElementById("tab"+m).getElementsByTagName("li");  
var showdiv=document.getElementById("tablist"+m).getElementsByClassName('tablist');  
for(i=0;i<menu.length;i++)
{
   menu[i].className=i==n?"now":""; 
   showdiv[i].style.display=i==n?"block":"none"; 
}
}