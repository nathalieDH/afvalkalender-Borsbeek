var win = Titanium.UI.currentWindow;

var viewGrofvuil = Titanium.UI.createView({
	top:20,
	width:'auto',
	height:'auto',
});

var lbl = Titanium.UI.createLabel({
	text:'Enkel gebruiksvoorwerpen van enige omvang die dienst hebben gedaan in een normaal huishouden: huishoudstoestellen, meubelen, \n... worden op aanvraag en tegen betaling opgehaald. U kan dit tot 2 dagen voor elke ophaling aanvragen via de gemeentelijke website (www.borsbeek.be) of telefonisch op het nummer 03/320.94.04. \n\nU kan deze goederen ook naar het recyclagepark brengen',
	color:'black',
	textAlign:'left',
	top:0, 
	left:10,
	right:10
});

viewGrofvuil.add(lbl);
win.add(viewGrofvuil);