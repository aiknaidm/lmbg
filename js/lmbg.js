//变量
//初始化
var moveLen = 0;
var t1;
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	direction: 'vertical',
	mousewheelControl: true,
	mousewheelReleaseOnEdges : true,
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	}
});
$(window).ready(function(){
				var htmlLen = $("html").height()
				//事件
				window.onresize = function() {
					htmlLen = $("html").height();
				}
				
				$("#yh").click(function() {

					$(".swiper-pagination-bullet:eq(1)").click();
			
				});
				$("#bg").click(function(){
					$(".swiper-pagination-bullet:eq(2)").click();
				})
				var strs=new Array();
				var url =location.href;
				strs = url.split("#");
				if(strs[1]=="yh"){
					$(".swiper-pagination-bullet:eq(1)").click();
				}
				if(strs[1]=="bg"){
					$(".swiper-pagination-bullet:eq(2)").click();
				}
			})

console.log(parseFloat(IETester()));
if(parseFloat(IETester())<11){
	
}else{
	moveBanner();
	jmlc();
}

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, "#0c2d6f");
gradient.addColorStop(0.25, "#0077c5");
gradient.addColorStop(0.5, "#0077c5");
gradient.addColorStop(0.25, "#0077c5");
gradient.addColorStop(1, "#0c2d6f");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);
//	ctx.fill();

//方法
function moveBanner() {
	 t1 = window.setInterval(function() {
		$('.banner11').animate({ "background-position-x": moveLen }, 80);
		moveLen = moveLen - 1;
		//		console.log(moveLen)
	}, 80)

}
function jmlc(){
	var t2 = window.setInterval(function() {
		$('.banner3>div:nth-of-type(3)>span>ul>li>i').css( "color","#fff");
		$('.banner3>div:nth-of-type(3)>span>ul>li>i').css( "border-color","#fff");
		$('.banner3>div:nth-of-type(3)>span>ul>li:nth-of-type(1)>i').css( "border-color","#fe7e00");
		$('.banner3>div:nth-of-type(3)>span>ul>li:nth-of-type(1)>i').css( "color","#fe7e00");


	}, 1000)
	var t3 = window.setInterval(function() {
		$('.banner3>div:nth-of-type(3)>span>ul>li>i').css( "color","#fff");
		$('.banner3>div:nth-of-type(3)>span>ul>li>i').css( "border-color","#fff");
		$('.banner3>div:nth-of-type(3)>span>ul>li:nth-of-type(3)>i').css( "border-color","#fe7e00");
		$('.banner3>div:nth-of-type(3)>span>ul>li:nth-of-type(3)>i').css( "color","#fe7e00");
	}, 2000)
	var t4 = window.setInterval(function() {
		$('.banner3>div:nth-of-type(3)>span>ul>li>i').css( "color","#fff");
		$('.banner3>div:nth-of-type(3)>span>ul>li>i').css( "border-color","#fff");
		$('.banner3>div:nth-of-type(3)>span>ul>li:nth-of-type(5)>i').css( "border-color","#fe7e00");
		$('.banner3>div:nth-of-type(3)>span>ul>li:nth-of-type(5)>i').css( "color","#fe7e00");
	}, 3000)
	var t5 = window.setInterval(function() {
		$('.banner3>div:nth-of-type(3)>span>ul>li>i').css( "color","#fff");
		$('.banner3>div:nth-of-type(3)>span>ul>li>i').css( "border-color","#fff");
		$('.banner3>div:nth-of-type(3)>span>ul>li:nth-of-type(7)>i').css( "border-color","#fe7e00");
		$('.banner3>div:nth-of-type(3)>span>ul>li:nth-of-type(7)>i').css( "color","#fe7e00");
	}, 4000)
	var t6=window.setInterval(function(){
		window.clearInterval(t2);
		window.clearInterval(t3);
		window.clearInterval(t4);
		window.clearInterval(t5);
		window.clearInterval(t6);
//		window.clearInterval(t2);
		jmlc();
	},4000)
	
}
function IETester(userAgent){
    var UA =  userAgent || navigator.userAgent;
    if(/msie/i.test(UA)){
        return UA.match(/msie (\d+\.\d+)/i)[1];
    }else if(~UA.toLowerCase().indexOf('trident') && ~UA.indexOf('rv')){
        return UA.match(/rv:(\d+\.\d+)/)[1];
    }
    return false;
}
