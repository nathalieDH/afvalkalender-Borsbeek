var win = Titanium.UI.createWindow({
	title:'filteren met picker',
	backgroundColor:'white'
});

var picker = Titanium.UI.createPicker({
	width:300,
    height:'auto',
    top:10,
    font:{fontSize:12}
});

var dataPicker = [];
dataPicker[0]=Titanium.UI.createPickerRow({title:'Alles', id:'alles'});
dataPicker[1]=Titanium.UI.createPickerRow({title:'GFT', id:'GFT'});
dataPicker[2]=Titanium.UI.createPickerRow({title:'Grofvuil', id:'Grofvuil'});
dataPicker[3]=Titanium.UI.createPickerRow({title:'Papier en karton', id:'Papier en karton'});
dataPicker[4]=Titanium.UI.createPickerRow({title:'PMD', id:'PMD'});
dataPicker[5]=Titanium.UI.createPickerRow({title:'Restafval', id:'Restafval'});
dataPicker[6]=Titanium.UI.createPickerRow({title:'Snoeiresten', id:'Snoeiresten'});
picker.add(dataPicker);
win.add(picker);

var view = Ti.UI.createView({top:70});
win.add(view);

var table = Ti.UI.createTableView({height:'auto'});
view.add(table);

var data = [];
var dataLabels = [];

var xhr = Titanium.Network.createHTTPClient();
xhr.open('GET', 'http://c-mon.be/nathalie/kalender.php');

xhr.onload = function()
{
	try
	{
		var doc = this.responseXML.documentElement;
		var items = doc.getElementsByTagName('afhaaldag');
		var x = 0;
		var y = 0;
		for(var i = 0; i<items.length; i++)
		{
			var item = items.item(i);
			var datum = item.getElementsByTagName('datum').item(0).text;
			var row = Ti.UI.createTableViewRow();
			var topPosition = 0;
			var label = Ti.UI.createLabel({
				text:datum,
				color:'black',
				font:{fontWeight:'bold'},
				left:10,
				top:topPosition
			});
			row.add(label);
			
			var allAfval = item.getElementsByTagName('afval');
			var subView = Ti.UI.createView({bottom:10});
			for(var j = 0; j<allAfval.length; j++)
			{
				var afval = allAfval.item(j).text;
				var subRow = Ti.UI.createTableViewRow();
				var subLabel = Titanium.UI.createLabel({
					text:afval,
					color:'black',
					left:15,
					top:topPosition+20
				});
				var subLabelDate = Titanium.UI.createLabel({
					text:datum,
					color:'black',
					font:{fontWeight:'bold'},
					left:15,
					top:topPosition
				});
				topPosition +=20;
				subRow.add(subLabel);
				subRow.add(subLabelDate);
				subView.add(subLabel);
				subRow.catId = afval;
				dataLabels[y++] = subRow;
			}
			row.add(subView);
			data[x++] = row;
		}
	}
	
	catch(E)
	{
		alert(E);
	}
	
	table.setData(data);
	
	picker.addEventListener('change', function(e)
	{		
		var filteredData = [];
		for(var k=0; k<dataLabels.length; k++)
		{
			if(e.row.id == 'alles')
			{
				filteredData = data;
			}
			else if(dataLabels[k].catId == e.row.id)
			{
				filteredData[filteredData.length] = dataLabels[k];
			}
			table.setData(filteredData);
		}
		table.setData(filteredData);
	});
}
xhr.send();

win.open();
