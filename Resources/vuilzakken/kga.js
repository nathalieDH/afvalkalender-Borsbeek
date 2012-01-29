var win = Titanium.UI.currentWindow;

var viewKGA = Titanium.UI.createView({
	top:20,
	width:'auto',
	height:'auto',
});

var lbl = Titanium.UI.createLabel({
	text:'KGA (Klein Gevaarlijk Afval) kan worden aangeboden op het recyclagepark',
	color:'black',
	textAlign:'left',
	top:0, 
	left:10,
	right:10
});

viewKGA.add(lbl);
win.add(viewKGA);