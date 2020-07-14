const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btnClr = document.querySelector("#btnClr");
const btnEql = document.querySelector("#btnEql");
const btnSum = document.querySelector("#btnSum");
const btnSub = document.querySelector("#btnSub");
const btnMul = document.querySelector("#btnMul");
const btnDiv = document.querySelector("#btnDiv");
let res = document.querySelector("#res");



let displayStr;
let regex = /\D/;

	function modifyRes(newString){

	   res.innerHTML += newString;
	   displayStr = res.innerHTML;

		return displayStr;
	 }

btn0.onclick = function (){modifyRes(document.querySelector("#btn0").innerHTML)};
btn1.onclick = function (){ modifyRes(document.querySelector("#btn1").innerHTML)};
btnSum.onclick = function(){ modifyRes(document.querySelector("#btnSum").innerHTML)};
btnSub.onclick = function (){ modifyRes(document.querySelector("#btnSub").innerHTML)};
btnDiv.onclick = function (){ modifyRes(document.querySelector("#btnDiv").innerHTML)};
btnMul.onclick = function (){ modifyRes(document.querySelector("#btnMul").innerHTML)};

btnEql.onclick = function (){ 
	modifyRes('');
		let operator1 = parseInt((displayStr.substring(0,(displayStr.search(regex)))),2);
	let operator2 = parseInt((displayStr.substring((displayStr.search(regex)+1),(displayStr.length))),2);
	let equalNum = Math.floor(eval(`${operator1} ${displayStr[displayStr.search(regex)]} ${operator2}`));
	let equalMsg = equalNum.toString(2);
	
	res.innerHTML = equalMsg;
	
};

btnClr.onclick = function(){res.innerHTML = ''};