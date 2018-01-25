//地图
	// 百度地图API功能
	var map = new BMap.Map("allmap");  // 创建Map实例
		var opts = {				
			
				enableMessage:true//设置允许信息窗发送短息
			   };	
	var point = new BMap.Point(120.166713,35.957375);
	map.centerAndZoom(point, 15);
//	var marker = new BMap.Marker(point);  // 创建标注
//	map.addOverlay(marker);               // 将标注添加到地图中

//	data_info=['lng':116.417854,'lat':39.921988,'data':"<ul><li class='BMap_bubble_title'>服务商：1xxxxxxxxxxxxxxxxxxxxxxxx<><li >地址：北京市东城区王府井大街88号乐天银泰百货八层<><li>电话：1234<></ul>"]
	var marker = new BMap.Marker(point);  // 创建标注
		var content = "<ul><li class='BMap_bubble_title font1'>公司名称：青岛吉采<li >地址：青岛市黄岛区光谷软件园52号楼</li></ul>";
		map.addOverlay(marker);               // 将标注添加到地图中
		addClickHandler(content,marker);
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
		function addClickHandler(content,marker){
		marker.addEventListener("click",function(e){
			openInfo(content,e)}
		);
	}
	function openInfo(content,e){
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	}