(function(){
	var qqSiteVideoClassNameArray = ["relativeVideo"];
	var relativeVideoArray;
	var removeArray = [];
	var relativeVideo, relativeVideoParent, nextSibling;
	var index = 0;
	for (var classIndex = 0, classLen = qqSiteVideoClassNameArray.length; classIndex < classLen; classIndex++) {
		relativeVideoArray = document.getElementsByClassName(qqSiteVideoClassNameArray[classIndex]);
		
		for (var i = 0, len = relativeVideoArray.length; i < len; i++, index++) {
			relativeVideo = relativeVideoArray[0];
			relativeVideoParent = relativeVideo.parentElement;
			nextSibling = relativeVideo.nextSibling;
			
			relativeVideoParent.insertBefore(createInstandDiv(index), nextSibling);
			relativeVideo.remove();
			removeArray[index] = relativeVideo;
		}
	}
	
	function createInstandDiv(index){
		var div = document.createElement("div");
		div.style.backgroundColor = "#F0F";
		div.style.padding = "10px";
		div.style.textAlign = "center";
		div.style.cursor = "pointer";
		div.innerText = "点击重新查看视频";
		div.setAttribute("videoIndex", index);
		div.onclick = function(){
			relativeVideoParent = div.parentElement;
			nextSibling = div.nextSibling;
			
			console.info(index);
			console.info(removeArray);
			relativeVideoParent.insertBefore(removeArray[index], nextSibling);
			div.remove();
		}
		return div;
	}
	
})();
