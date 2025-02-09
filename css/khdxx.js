//客户端信息

console.log(navigator);

function browserInfo() {
	var userAgent = navigator.userAgent;
	var isOpera = userAgent.indexOf("Opera") > -1;
	if (isOpera) {      //Opera
		return "Opera"
	}
	if (userAgent.indexOf("Firefox") > -1) {     //Firefox
		return "FF";
	}
	if (userAgent.indexOf("Chrome") > -1) {   //Chrome
		return "Chrome";
	}
	if (userAgent.indexOf("Safari") > -1) {     //Safari
		return "Safari";
	}
	if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
		return "IE";
	}        //IE
}

var mb = browserInfo();

if ("IE" == mb) {
	document.write("客户端 IE");
}
if ("FF" == mb) {
	document.write("客户端 Firefox");
}
if ("Chrome" == mb) {
	document.write("客户端 Chrome");
}
if ("Opera" == mb) {
	document.write("客户端 Opera");
}
if ("Safari" == mb) {
	document.write("客户端 Safari");
}



function getBrowserInfo() {
	var versions = navigator.userAgent.toLowerCase();

	var reg_ie = /msie [\d.]+;/gi, reg_fox = /firefox\/[\d.]+/gi, reg_chrome = /chrome\/[\d.]+/gi, reg_saf = /safari\/[\d.]+/gi;

	if (versions.indexOf("msie") > 0)    //IE
	{
		return versions.match(reg_ie);
	}

	if (versions.indexOf("firefox") > 0)    //firefox
	{
		return versions.match(reg_fox);
	}

	if (versions.indexOf("chrome") > 0)     //Chrome
	{
		return versions.match(reg_chrome);
	}

	if (versions.indexOf("safari") > 0 && versions.indexOf("chrome") < 0)  //Safari
	{
		return versions.match(reg_saf);
	}

}
var browser = getBrowserInfo();

var versionNum = (browser + "").replace(/[^0-9.]/ig, "");

document.write("<br /> 版本号: " + versionNum);

