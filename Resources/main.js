var win = Titanium.UI.currentWindow;

//knop overzicht kalender aanmaken
var btn1 = Titanium.UI.createButton({
	title:'overzicht kalender',
	color:'#000',
	width:200,
	height:40,
	top:100
});

//eventListener knop overzicht
btn1.addEventListener('click', function(e)
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'white',
		title:'Overzicht kalender',
		modal:true,
		url:'overzichtKalender.js'
	});
	w.open();
});

//knop uitleg vuilzakken en nuttige info aanmaken
var btn2 = Titanium.UI.createButton({
	title:'nuttige info',
	color:'#000',
	width:200,
	height:40,
	top:150
});

//eventListener knop uitleg vuilzakken
btn2.addEventListener('click', function(e)
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'white',
		title:'Nuttige info',
		modal:true,
		url:'uitlegVuilzakken.js'
	});
	w.open();
});

//knop uitleg app aanmaken
var btn3 = Titanium.UI.createButton({
	title:'uitleg app',
	color:'#000',
	width:200,
	height:40,
	top:200
});

//eventListener knop uitleg app
btn3.addEventListener('click', function(e)
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'white',
		title:'Uitleg applicatie',
		modal:true,
		url:'uitlegApp.js'
	});
	w.open();
});

//knoppen toevoegen aan het scherm
win.add(btn1);
win.add(btn2);
win.add(btn3);
