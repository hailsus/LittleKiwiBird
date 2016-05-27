// var lastSelected = 0;

//creates a marker and adds it to the marker list. 
//returns marker item
function addNewMarker(userlatLong, name, hereuntil, heresince, islookingfor){
    markers.push(createMarker(userlatLong, name, hereuntil, heresince, islookingfor));
}

// //displays the markers on screen
// function displayMarkers(type, option){
//     //get sidebar location to add items to
//     var navBar = document.getElementById("navTable");
//     navBar.innerHTML = '';
         
//     //do checking for new index here *****
//     lastSelected = type;  
    
//     //add new list 
//     for (var i=0; i < markers.length; i++) {
//          var item = document.createElement("li");
//          if(option == "latLong"){
//             var latLongBit = markers[i]['location'].join();
//             latLongBit = latLongBit.split(',', 2);
//             item.innerHTML = latLongBit;
//          }
//          else if(option =="labelAddress"){
//             var labelSection = markers[i]['location'].join();
//             labelSection = labelSection.split(',');
//             //DO NOT REMOVE, WILL BREAK OUTPUT OF ADDRESS
//             console.log(labelSection);
//             console.log(labelSection.shift());
//             console.log(labelSection.shift());            
//             item.innerHTML = labelSection;
//          }
//          else{
//             item.innerHTML = markers[i][option];
//          }
         
//          item.style.color = markers[i].color;
//          item.id = markers[i].id;
//          item.onclick = function(){markerClicked(this.id)};
//          navBar.appendChild(item);
//     }
// }
// //sets content of nav list to be inline with selected option
// function updateList(){
//     var option = document.getElementById("options");
//     var optType = options.options[option.selectedIndex].value;
//     var index = option.selectedIndex;
//     displayMarkers(index, optType);
// }
// //highlights the selected information in the form
// function markerClicked(id){
   
//     console.log(id);
//     //get the corresponding marker info 
//     var node = document.getElementById("marker" + id);
//     var parent = document.getElementById(id);
//     //highlist corresponding item
//     markers[id].color = '#'+Math.floor(Math.random()*16777215).toString(16);
//     parent.style.color = markers[id].color;
//     node.style.color = markers[id].color;
//     node.style.border = "thin solid black";
// }
// //highlights the marker
// function highlightSelectedMarker(classname, start, end, startNode, endNode, range){
//    //Get a the new content, in a range object
//    var range2 = range;
// 	//If the range spans some text, and inside a tag, set its css class.
// 		if(!(range2.startOffset == range2.endOffset))
// 		{
// 			var span = document.createElement('span');
// 			span.className = classname;
// 			range2.surroundContents(span);
// 		}
// }

// //add a span to the new marker
// function makeSpan(markerItem){
//    //Get a the new content, in a range object
// 	var range = markerItem.range;
//    console.log("saved start: " + range.startOffset + " saved end point: " + range.endOffset);
// 	//If the range spans some text, and inside a tag, set its css class.
// 		if(!(range.startOffset == range.endOffset))
// 		{
// 			var span = document.createElement('span');
// 			span.className = markerItem.id;
// 			span.id = "marker" + markerItem.id;
// 			range.surroundContents(span);
// 		}

// }
