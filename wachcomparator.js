var gggg=0;
var NWWIN;
var ddd = new Date().getTime();
var data;
var otchet = "";
function relunch(){
	if(gggg < data.length) {NWWIN.close();converter();
		} else {var ddddd = new Date().getTime();console.log(parseInt(parseInt(ddddd-ddd)/1000)+" секунд потребовалось");}
}

function compare(price, price2){
	price = price.replace(",00","");
	price2 = price2.replace(",00","");
	if (NWWIN.document.getElementsByClassName("price")[0]!=undefined) {
		var ddddd = new Date().getTime();
			console.log(parseInt(parseInt(ddddd-ddd)/1000)+" секунд потребовалось");
		var pr = NWWIN.document.getElementsByClassName("price")[0].getElementsByTagName("span")[2].innerHTML;
		var pr2 = NWWIN.document.getElementsByClassName("price")[0].getElementsByTagName("s")[0].innerHTML;
		pr2=  pr2.replace(" руб","").replace(" ","");
		if (price != pr || price2 != pr2) {
			otchet += "артикул:"+data[gggg-1][0]+" цена сайта:"+pr+" цена списка:"+price+" цена сайта без скидки:"+pr2+" цена списка без скидки:"+price2+" ссылка на товар:"+data[gggg-1][2]+"</br>";
		}
		relunch();
	} else if (NWWIN.document.getElementsByClassName("new_price")[0]!=undefined){
		//console.log(NWWIN.document.getElementsByClassName("new_price")[0]);
		var ddddd = new Date().getTime();
		console.log(parseInt(parseInt(ddddd-ddd)/1000)+" секунд потребовалось");
		var pr = NWWIN.document.getElementsByClassName("new_price")[0].innerHTML;
		var pr2 = NWWIN.document.getElementsByClassName("old_price")[0].getElementsByTagName("s")[0].innerHTML;
		pr = pr.replace(" <small> </small>","").replace(" <small> руб</small> <small></small>","");
		pr2 = pr2.replace(" <small> </small>","").replace(" <small> руб</small> <small></small>","");
		if (price != pr || price2 != pr2) {
			otchet += "артикул:"+data[gggg-1][0]+" цена сайта:"+pr+" цена списка:"+price+" цена сайта без скидки:"+pr2+" цена списка без скидки:"+price2+" ссылка на товар:"+data[gggg-1][2]+"</br>";
		}
		relunch();
	} else {
		otchet += " –»¬јя ——џЋ ј артикул:"+data[gggg-1][0]+" ссылка на товар:"+data[gggg-1][2]+"</br>";
		relunch();
	}
}

function loadLNK(lnk,gg){
	NWWIN = window.open(lnk,"NWWIN");
	NWWIN.onload = function(){compare(data[gg][3],data[gg][5]);}
}

function converter(){
	document.getElementById("datanew").innerHTML = otchet;
	var lnk = data[gggg][2];
	if (lnk!="") {loadLNK(lnk,gggg);gggg++;} else {gggg++;relunch();}
}

function getdata() {
	data = "";
	data = document.getElementById("data").value;
	if (data!=""){makeData();} else {alert("No data");}
}

function makeData() {
	data = data.replace(/ /g, "");
	var arr = data.split("\n");
	for (var i=0; i<arr.length; i++) {arr[i] = arr[i].split("\t");}
	data = arr;
	console.log(data);
	ddd = new Date().getTime();
	converter();
}

function createDivButtons(){
	var compdiv = document.createElement("div");
	compdiv.setAttribute("id", "comparatordiv");
	compdiv.setAttribute("style", "position:absolute; top:0px; left:0px; width:100%; min-height:500px; background:#ffffff; z-index:10000000;user-select: inherit;");
	compdiv.setAttribute("class", "");
	var ta = document.createElement("textarea");
	ta.setAttribute("id", "data");
	ta.setAttribute("style", "width:50%; min-height:300px;user-select: inherit;");
	compdiv.appendChild(ta); 
	var ba = document.createElement("button");
	ba.setAttribute("onclick", "getdata();");
	ba.innerHTML = "ѕроверить";
	compdiv.appendChild(ba); 
	var datanew = document.createElement("div");
	datanew.setAttribute("id", "datanew");
	datanew.setAttribute("style", "user-select: inherit;");
	compdiv.appendChild(datanew);
	document.getElementsByTagName('body')[0].appendChild(compdiv); 
}

createDivButtons();
