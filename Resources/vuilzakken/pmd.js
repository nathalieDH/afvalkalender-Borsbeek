var win = Titanium.UI.currentWindow;

var scoller = Titanium.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true
});

var viewPMD = Titanium.UI.createView({
	top:20,
	width:'auto',
	height:'auto',
});

var lbl1 = Titanium.UI.createLabel({
	text:'Blauwe zak \nOmvat: plastic flessen en flacons, Metalen verpakkingen en drankkartons.',
	color:'black',
	textAlign:'left',
	top:0, 
	left:10,
	right:10
});

var lbl2 = Titanium.UI.createLabel({
	text:'WEL: \n° plastic flessen en flacons; \n° metalen verpakkingen; \n° spuitbussen van voedingswaren en cosmetica; \n° aluminium schaaltjes en bakjes; \n° metalen deksels en doppen; \n° drankkartons \n\nOPGELET: \n° volledig leeg; \n° maximum volume: 8l; \n° geen plastic bidons vastmaken aan de buitenkant van de PMD zak',
	color:'black',
	textAlign:'left',
	top:60,
	left:10,
	right:10
})

var lbl3 = Titanium.UI.createLabel({
	text:'NIET: \n° alle andere plastic verpakkingen en voorwerpen (bv. plastic potjes en vlootjes, plastic zakken, folie); \n° verpakkingen die giftige of bijtende middelen of motorolie bevat hebben; \n° aluminiumfolie; \n° piepschuim',
	color:'black',
	textAlign:'left',
	top:300,
	left:10,
	right:10,
	bottom:20
})

viewPMD.add(lbl1);
viewPMD.add(lbl2);
viewPMD.add(lbl3);
scoller.add(viewPMD);
win.add(scoller);