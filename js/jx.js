var t1=window.setInterval(function(){
	var date=new Date();
	console.log(date.getHours());
	if(date.getHours()>=11){
		$("#key_apply").click();
	}
	
},100)

