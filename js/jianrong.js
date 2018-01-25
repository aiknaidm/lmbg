$(document).ready(function(){
//	$("body div").remove();
	$("script[src='js/lmbg.js']").remove();
	window.clearInterval(t1);
//	<script src="js/lmbg.js"></script>
	$("body").append("<div class='jianrong'>"+
			"<div><ul><li>监测到您的浏览器版本过低!!!</li>"+
			"<li>我们检测到你正在使用 IE11.0以下版本浏览器，不能支持蓝帽帮哥的全部的功能，需要升级才能正常下单。</li>"+
			"<li>点击<a href='https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads#!/zh-cn/help/17621/internet-explorer-downloads'>此处升级ie版本</a></li>"+
			"</ul></div>"+
	
	"</div>")
})
