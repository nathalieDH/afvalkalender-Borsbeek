var win = Titanium.UI.currentWindow;

var viewPapier = Titanium.UI.createView({
	top:20,
	width:'auto',
	height:'auto',
});

var lbl1 = Titanium.UI.createLabel({
	text:'Samenbinden met natuurkoord of in een stevige kartonnen doos.',
	color:'black',
	textAlign:'left',
	top:0, 
	left:10,
	right:10
});

var lbl2 = Titanium.UI.createLabel({
	text:'WEL: \n° papieren zakken en kartonnen dozen; \n° kranten, tijdschriften, folders; \n° boeken; \n° schrijf- en machinepapier \n\nOPGELET: \nplastic folie verwijderen van kranten, tijdschriften en folders',
	color:'black',
	textAlign:'left',
	top:40,
	left:10,
	right:10
})

var lbl3 = Titanium.UI.createLabel({
	text:'NIET: \n° vuil en vet papier; \n° cellofaanpapier; \n° behangpapier; \n° aluminiumfolie',
	color:'black',
	textAlign:'left',
	top:200,
	left:10,
	right:10
})

viewPapier.add(lbl1);
viewPapier.add(lbl2);
viewPapier.add(lbl3);
win.add(viewPapier);