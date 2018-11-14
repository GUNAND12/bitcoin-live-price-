

var but=document.querySelector("button");
var liveprice=document.getElementById("top");
var currency="USD";

but.addEventListener("click",function(){
	var XHR=new XMLHttpRequest();
	XHR.onreadystatechange=function(){
		if(XHR.readyState==4 && XHR.status==200){
			var data=JSON.parse(XHR.responseText);
			var price=data.bpi[currency].rate;
			liveprice.innerText=price+" "+currency;
		}
	}
	var url="https://api.coindesk.com/v1/bpi/currentprice.json";
	XHR.open("GET",url);
	XHR.send();
});