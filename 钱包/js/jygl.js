$(document).ready(function(){
	
	$(document).on("click","#tb1",function(){
		$("#content2").css("display","none")
		$("#content1").css("display","block")
		$("#tb1").addClass("active");
		$("#tb2").removeClass("active");
	})
	$(document).on("click","#tb2",function(){
		$("#content1").css("display","none")
		$("#content2").css("display","block")
		$("#tb2").addClass("active");
		$("#tb1").removeClass("active");
	})
	//全选 全不选
	$(document).on('click', '.quanxuan', function() {
				var ischecked=$(".quanxuan").is(":checked");
				if(ischecked){
					$(".ifm input[type='checkbox']:not('.quanxuan')").prop("checked",ischecked)
				}else{
					$(".ifm input[type='checkbox']:not('.quanxuan')").prop("checked",ischecked)
				}
				
			});
	//获取页面get值
	console.log(GetRequest().method=="1")
	
	if(GetRequest().method=="1"){
		$("#tb2").click();
	}
	if(GetRequest().method=="2"){
		$("#tb2").addClass("active");
		$("#tb1").removeClass("active");
	}
	showPro($(".progress").attr("progress"));
//	showContent(".ifm-list-content:not(input[type='checkbox'])");
	//显示任务进度

})

//银行卡
//方法
//tab切换
	function tabChange(){
		$(".tab span").each(function(i){
			console.log("o");
			$(document).on("click",".tab span:eq("+i+")",function(){
				$(".content p").css("display","none")
				$(".tab span").attr("class","")
				$(this).attr("class","active")
				$(".content p:eq("+i+")").css("display","block")
				
			})
		})
	}

	function showPro(i){
		for(var j=0;j<=i;j++){
			$(".progress").children("span:eq("+j+")").addClass("active");
		}
		
	}
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
	function showContent(i,url){
		$(document).on("click",i,function(){
			$(this).children("p").toggle();
			$(this).children().children("i").html("&#xe632;")
			$(this).children().children("i").css("color","#666")
			$(this).children().children("i").css("font-size","20px")
//			console.log($(this).parent().children("input").attr("id"));
			$.ajax({
				type:"post",
				url:url,
				data:{"id":$(this).parent().children("input").attr("id")},
				async:true
			});
		})
	}
	//图片
	$(".yue-form-lists").each(function(i){
		
		$(".yue-form-lists:eq("+i+") span").each(function(e){
			$(".yue-form-lists:eq("+i+") span:eq("+e+")").click(function(){		
				$(".yue-form-lists:eq("+i+") span").css("border-color","#f0f0f0")
				$(".yue-form-lists:eq("+i+") span").css("color","#525252")
				$(this).css("border-color","#0079C8")
				$(this).css("color","#0079C8")
				$(".yue-form-lists:eq("+i+") input").val($(this).attr("value"))
				
			})
		})
		
	})
	
	