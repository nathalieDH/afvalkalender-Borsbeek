var win = Titanium.UI.currentWindow;

var viewSnoeiresten = Titanium.UI.createView({
	top:20,
	width:'auto',
	height:'auto',
});

var lbl = Titanium.UI.createLabel({
	text:'Snoeiresten moeten gebundeld worden met natuurtouw en mogen maximaal 1,5m lang zijn. Bundels maximum 0,5m in diameter en takken maximum 10cm in diameter.',
	color:'black',
	textAlign:'left',
	top:0, 
	left:10,
	right:10
});

viewSnoeiresten.add(lbl);
win.add(viewSnoeiresten);