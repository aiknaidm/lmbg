//var leimu="", leixing="";

$("#list li").click(function() {
	$("#list li").removeClass("listclick");
	$(this).addClass("listclick");
	$(".lists>li:nth-of-type(2)").css("display", "flex");

})

function fabu(this1) {
	console.log(this1);
	$("#leixing li").removeClass("listclick");
	$(this1).addClass("listclick");
	//		$(".banner2>div:nth-of-type(5)").css("display", "flex");
	$("#add").css("display", "block");
}
$("#button1").click(function() {
	var listValue = getValue();
	console.log(listValue);
})
$("#findbg").click(function() {
	var bgMapvalue = getMapvalue();
	console.log(bgMapvalue.address[0])
	if(bgMapvalue.address[0] == "-1" || bgMapvalue.address[1] == "-1") {
		alert("请选择地址");
	} else if(bgMapvalue.leimu == undefined) {
		alert("请选择类目");
	} else if(bgMapvalue.leixing == undefined) {
		alert("请选择服务类型");
	} else {
		//提交数据
		//		$.ajax({
		//			type:"get",
		//			url:"{:url('Portal/bgmap/ajax_return2')}",
		//			
		//			success:function(){
		//				
		//			},
		//			error:function(){
		//				
		//			}
		//		});
		for(var i = 0; i < bgMapvalue.address.length; i++) {
			$("#result").children("i:eq(" + i + ")").html(bgMapvalue.address[i]);
		}
		$("#result").children("i:eq(" + (bgMapvalue.address.length) + ")").html($("#list2").children(".listclick").html());
	}

})
$("#list1 span").click(function() {
	$("#list1 span").css("border-color", "#b6b4b4")
	$("#list1 span").children().css("display", "none")
	$(this).css("border-color", "#FE7E00");
	$(this).children().css("display", "block")
	$("#list1 span").removeClass("listclick");
	$(this).addClass("listclick");

})
$("#list2 span").click(function() {
	$("#list2 span").css("border-color", "#b6b4b4")
	$("#list2 span").children().css("display", "none")
	$(this).css("border-color", "#FE7E00");
	$(this).children().css("display", "block")
	$("#list2 span").removeClass("listclick");
	$(this).addClass("listclick");

})
$("#clear").click(function() {
	$("#list2 span").css("border-color", "#b6b4b4")
	$("#list2 span").children().css("display", "none")
	$("#list1 span").css("border-color", "#b6b4b4")
	$("#list1 span").children().css("display", "none")
	$("#list1 span").removeClass("listclick");
	$("#list2 span").removeClass("listclick");
	//	$("#area").children().remove();

	$("select:eq(0)").val("-1");
	$("select:eq(1)").val("-1");
	$("select:eq(2)").val("-1");
})

function getValue() {
	var leimu = $(".listclick:eq(0)").attr("id");
	var leixing = $(".listclick:eq(1)").attr("id");
	//	var goods=
	var listValue = { leimu: leimu, leixing: leixing, };

	return listValue;
}

function getMapvalue() {
	var address = new Array();
	//	console.log($(".listclick:eq(1)").html())
	if($(".listclick:eq(0)").html() != undefined) {
		var leimu = $(".listclick:eq(0)").attr("id");
	}
	if($(".listclick:eq(1)").html() != undefined) {
		var leixing = $(".listclick:eq(1)").attr("id");
	}
	$("select").each(function(i) {
		address.push($("select:eq(" + i + ")").val());
	})
	var bgMapvalue = { leimu: leimu, leixing: leixing, address: address };
	return bgMapvalue;
}

function addGoods() {
	$("#goods").append("<div  class='spxx'>" +
		"<span>商品信息:</span>" +
		"<span class='remove'>删除</span>" +
		"<span class='upimg'><input type='file' id='file' class='file' name='file'/><img src='img/img.png' title='上传图片'></span>" +
		"<span>" +
		"<ul id='leixing'>" +
		"<li>商品类别" +
		"<select name='leibie'>" +
		"<option>请选择</option>" +
		"<option>11111</option>" +
		"<option>22222</option>" +
		"<option>33333</option>" +
		"</select>" +
		"</li>" +
		"<li>商品型号<input name='spleixing'/></li>" +
		"<li>特殊要求<input name='yaoqiu'/></li>" +
		"</ul>" +
		"</span>" +

		"</div>");
}

function filestyle(this1) {
	var path;
	path = $(this1).val();
	console.log(path)
	var geshi;
	geshis = path.split('.');
	geshi = geshis[geshis.length - 1]; //jpg 结果
	if(geshi == "jpg" || geshi == "png" || geshi == "gif" || geshi == "bmp") {
		return true;
	} else {
		return false;
	}
}
//获取页面get值
function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串 
	var theRequest = new Object();
	if(url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}