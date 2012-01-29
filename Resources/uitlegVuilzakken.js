var win = Titanium.UI.currentWindow;

var sectionAfval = Titanium.UI.createTableViewSection({
	headerTitle:'Informatie afval',
});

var rowGFT = Ti.UI.createTableViewRow({
	title:'GFT',
	color:'black',
	link:'vuilzakken/gft.js',
	leftImage:'images/gft.png'
});

var rowGlas = Ti.UI.createTableViewRow({
	title:'Glas',
	color:'black',
	link:'vuilzakken/glas.js',
	leftImage:'images/glas.png'
});

var rowGrofvuil = Ti.UI.createTableViewRow({
	title:'Grofvuil', 
	color:'black', 
	link:'vuilzakken/grofvuil.js', 
	leftImage:'images/grofvuil.png'
});

var rowKGA = Ti.UI.createTableViewRow({
	title:'KGA', 
	color:'black',
	link:'vuilzakken/kga.js', 
	leftImage:'images/kga.png'
});

var rowPapier = Ti.UI.createTableViewRow({
	title:'Papier en karton', 
	color:'black',
	link:'vuilzakken/papier.js', 
	leftImage:'images/papier.png' 
});

var rowPMD = Ti.UI.createTableViewRow({
	title:'PMD', 
	color:'black',
	link:'vuilzakken/pmd.js', 
	leftImage:'images/pmd.png'
});

var rowRestaval = Ti.UI.createTableViewRow({
	title:'Restafval', 
	color:'black',
	link:'vuilzakken/restafval.js', 
	leftImage:'images/restafval.png'
});

var rowSnoeiresten = Ti.UI.createTableViewRow({
	title:'Snoeiresten', 
	color:'black',
	link:'vuilzakken/snoeiresten.js', 
	leftImage:'images/snoeiresten.png'
});

sectionAfval.add(rowGFT);
sectionAfval.add(rowGlas);
sectionAfval.add(rowGrofvuil);
sectionAfval.add(rowKGA);
sectionAfval.add(rowPapier);
sectionAfval.add(rowPMD);
sectionAfval.add(rowRestaval);
sectionAfval.add(rowSnoeiresten);

var sectionRest = Titanium.UI.createTableViewSection({
	headerTitle:'Overige informatie'
});

var rowKringwinkel = Ti.UI.createTableViewRow({
	title:'De kringwinkel',
	color:'black',
	link:'vuilzakken/kringwinkel.js'
});

var rowRecyclagepark = Ti.UI.createTableViewRow({
	title:'Het recyclagepark',
	color:'black',
	link:'vuilzakken/recyclagepark.js'
});

sectionRest.add(rowKringwinkel);
sectionRest.add(rowRecyclagepark);

var menu = Titanium.UI.createTableView({
	data:[sectionAfval, sectionRest]
});

menu.addEventListener('click', function(e)
{
	var w = Titanium.UI.createWindow({
		backgroundColor:'white',
		title:e.rowData.title,
		modal:true,
		url:e.rowData.link
	});
	
	w.open();
});

win.add(menu);