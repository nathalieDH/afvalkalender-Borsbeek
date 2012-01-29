var win = Titanium.UI.currentWindow;

var viewKringwinkel = Titanium.UI.createView({
	top:20,
	width:'auto',
	height:'auto',
});

var lbl1 = Titanium.UI.createLabel({
	text:'Herbruikbare voorwerpen, die zich nog in goede staat bevinden en dus een tweede leven verdienen kunnen naar De Kringwinkel. Na een telefoontje naar de ophaaldienst worden de goederen gratis bij u thuis opgehaald, of u kan ze ook brengen naar één van de winkels of naar het Centraal Magazijn (Deurnsebaan 52, 2170 Merksem). Dit kan alle werkdagen van 8.30u tot 16.30u doorlopend.',
	color:'black',
	textAlign:'left',
	top:0, 
	left:10,
	right:10
});

var lbl2 = Titanium.UI.createLabel({
	text:'Wat? Meubelen, kleding, huisraad, speelgoed, deco, alle elektrische en elektronische aparaten, fietsen, ...',
	color:'black',
	textAlign:'left',
	top:160,
	left:10,
	right:10
});

var lbl3 = Titanium.UI.createLabel({
	text:'Wat niet? Meubelen en dergelijke in slechte staat, bulkmateriaal, accumulatiekachels, bouwmaterialen, ...',
	color:'black',
	textAlign:'left',
	top:230,
	left:10,
	right:10
});

var lbl4 = Titanium.UI.createLabel({
	text:'Gratis ophaaldienst: 03/217.25.10. \nWebsite: www.dekringwinkelantwerpen.be',
	color:'black',
	textAlign:'left',
	top:300,
	left:10,
	right:10
});

viewKringwinkel.add(lbl1);
viewKringwinkel.add(lbl2);
viewKringwinkel.add(lbl3);
viewKringwinkel.add(lbl4);
win.add(viewKringwinkel);