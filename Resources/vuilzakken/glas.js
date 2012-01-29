var win = Titanium.UI.currentWindow;

var viewGlas = Titanium.UI.createView({
	top:20,
	width:'auto',
	height:'auto',
});

var lbl1 = Titanium.UI.createLabel({
	text:'Deponeren in de glasbollen, gesorteerd per kleur (wit en gekleurd glas).',
	color:'black',
	textAlign:'left',
	top:0, 
	left:10,
	right:10
});

var lbl2 = Titanium.UI.createLabel({
	text:'WEL: \ntransparante glazen flessen, bokalen en flacons \nOPGELET: \n° volledig leeg; \n° geen deksels of doppen',
	color:'black',
	textAlign:'left',
	top:50,
	left:10,
	right:10
})

var lbl3 = Titanium.UI.createLabel({
	text:'NIET: \n° hittebestendig glas (bv. ovenschotels en kookplaten); \n° porselein en aardewerk; \n° stenen flessen en kruiken; \n° opaalglas en kristal; \n° vlak glas zoals ruiten en spiegels; \n° lampen of TL-lampen',
	color:'black',
	textAlign:'left',
	top:160,
	left:10,
	right:10
})

viewGlas.add(lbl1);
viewGlas.add(lbl2);
viewGlas.add(lbl3);
win.add(viewGlas);