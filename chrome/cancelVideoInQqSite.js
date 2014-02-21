(function(){
	var relativeVideoArray = document.getElementsByClassName("relativeVideo");
	var removeArray = [];
	var relativeVideo, relativeVideoParent, nextSibling;
	for (var i = 0, len = relativeVideoArray.length; i < len; i++) {
		relativeVideo = relativeVideoArray[0];
		relativeVideoParent = relativeVideo.parentElement;
		nextSibling = relativeVideo.nextSibling;
		
		relativeVideoParent.insertBefore(createInstandDiv(i), nextSibling);
		relativeVideo.remove();
		removeArray[i] = relativeVideo;
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
