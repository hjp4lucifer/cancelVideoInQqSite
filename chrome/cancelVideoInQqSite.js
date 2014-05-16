(function(){
	var qqSiteVideoClassNameArray = ["relativeVideo"];
	var qqSiteVideoIdArray = ["mod_player"];
	var relativeVideoArray;
	var removeArray = [];
	var removeArrayIndex = 0;
	for (var classIndex = 0, classLen = qqSiteVideoClassNameArray.length; classIndex < classLen; classIndex++) {
		relativeVideoArray = document.getElementsByClassName(qqSiteVideoClassNameArray[classIndex]);
		
		for (var i = 0, len = relativeVideoArray.length; i < len; i++) {
			removeVideo(relativeVideoArray[0]);
		}
	}
	
	for (var idIndex = 0, idLen = qqSiteVideoIdArray.length; idIndex < idLen; idIndex++) {
		removeVideo(document.getElementById(qqSiteVideoIdArray[idIndex]));
	}
	
	function removeVideo(relativeVideo){
		var relativeVideoParent = relativeVideo.parentElement;
		var nextSibling = relativeVideo.nextSibling;
		
		relativeVideoParent.insertBefore(createInstandDiv(removeArrayIndex), nextSibling);
		relativeVideo.remove();
		removeArray[removeArrayIndex] = relativeVideo;
		
		removeArrayIndex++
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
