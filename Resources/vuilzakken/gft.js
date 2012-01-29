var win = Titanium.UI.currentWindow;

var scoller = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true
});

var viewGFT = Titanium.UI.createView({
	top:20,
	width:'auto',
	height:'auto',
});

var lbl1 = Titanium.UI.createLabel({
	text:'Witte zak \nOmvat: groente-, fruit en tuinafval, en met etensresten vervuild papierafval.',
	color:'black',
	textAlign:'left',
	top:0, 
	left:10,
	right:10
});

var lbl2 = Titanium.UI.createLabel({
	text:'WEL: \n° aardappelschillen; \n° bladeren; \n° doppen van noten; \n° fruitafval; \n° gras; \n° groenteafval (bv. loof, schillen, enz.); \n° (klein) haagscheersel; \n° houtkrullen (onbehandeld); \n° koffiedik; \n° pitten van vruchten; \n° plantenresten (zonder kluit); \n° (verkleind) tuinafval (snoeiresten, stro, hooi, takjes); \n° theezakjes en theebladeren; \n° niet-recycleerbaar papier (broodzakken, slagerspapier, pizzadozen, papieren koffiefilter, keukenrolpapier, papieren servetten en zakdoekjes)',
	color:'black',
	textAlign:'left',
	top:60,
	left:10,
	right:10
})

var lbl3 = Titanium.UI.createLabel({
	text:'NIET: \n° luiers; \n° aarde; \n° asresten (open haard, barbecue, asbak); \n° beenderen; \n° grof, ongesnipperd snoeihoud; \n° houtskool; \n° kattenbakvulling; \n° mosselschelpen; \n° plastic zakjes; \n° sauzen; \n° stenen; \n° stofzuigervulling en -zakken; \n° timmerhout; \n° vet en olie; \n° zand; \n° piepschuimschoteltjes van etenswaren',
	color:'black',
	textAlign:'left',
	top:380,
	left:10,
	right:10,
	bottom:20
})

viewGFT.add(lbl1);
viewGFT.add(lbl2);
viewGFT.add(lbl3);
scoller.add(viewGFT);
win.add(scoller);