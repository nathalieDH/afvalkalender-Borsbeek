var win = Titanium.UI.currentWindow;

var viewRecyclagepark = Titanium.UI.createView({
	top:20,
	width:'auto',
	height:'auto',
});

var lbl1 = Titanium.UI.createLabel({
	text:'Gulkenrodestraat 9 \n2160 Wommelgem',
	color:'black',
	textAlign:'left',
	top:0, 
	left:10,
	right:10
});

var lbl2 = Titanium.UI.createLabel({
	text:'Openingsuren: \nmaandag: gesloten \ndinsdag: 9u - 12u en 13u - 17u \nwoensdag: 13u - 19u \ndonderdag: 9u - 12u en 13u - 17u \nvrijdag: 9u - 12u \nzaterdag: 9u - 16u \nOp zaterdag dient u zich minimum een kwartier voor sluitingstijd aan te bieden.',
	color:'black',
	textAlign:'left',
	top:50, 
	left:10,
	right:10
});

var lbl3 = Titanium.UI.createLabel({
	text:'Gesloten op: 1/5, 17/5, 11/7, 21/7, 15/8, 1/11, 25/12, 26/12',
	color:'black',
	textAlign:'left',
	top:210, 
	left:10,
	right:10
});

viewRecyclagepark.add(lbl1);
viewRecyclagepark.add(lbl2);
viewRecyclagepark.add(lbl3);
win.add(viewRecyclagepark);