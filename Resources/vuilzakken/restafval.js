var win = Titanium.UI.currentWindow;

var viewRestafval = Titanium.UI.createView({
	top:20,
	width:'auto',
	height:'auto',
});

var lbl = Titanium.UI.createLabel({
	text:'Grijze zak \nOmvat: Al het afval dat na sortering toch nog overblijft. Het maximum gewicht is 25 kg',
	color:'black',
	textAlign:'left',
	top:0, 
	left:10,
	right:10
});

viewRestafval.add(lbl);
win.add(viewRestafval);