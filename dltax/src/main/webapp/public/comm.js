function comm_create_datas(){
	var datas = [];
	
	datas.push({
		"name":"status",
		"label":"处理状态",
		//"locked":true,
		"hidden":false
	});
	
	datas.push({
		"name":"code",
		"label":"客户编号",
		//"locked":true,
		"hidden":false
	});
	
	datas.push({
		"name":"group",
		"label":"所属分部",
		//"locked":true,
		"hidden":false
	});
	
	datas.push({
		"name":"name",
		"label":"姓名",
		//"locked":true,
		"hidden":false
	});
	
	datas.push({
		"name":"name_ja",
		"label":"日语名",
		//"locked":true,
		"hidden":false
	});
	
	datas.push({
		"name":"sex",
		"label":"性别",
		//"locked":true,
		"hidden":false
	});
	
	datas.push({
		"name":"birthday",
		"label":"出生年月日",
		//"locked":true,
		"hidden":false
	});
	
	datas.push({
		"name":"phone",
		"label":"联系电话",
		//"locked":true,
		"hidden":false
	});
	
	datas.push({
		"name":"email",
		"label":"E-mail",
		//"locked":false,
		"hidden":false
	});
	
	datas.push({
		"name":"qq",
		"label":"QQ",
		//"locked":false,
		"hidden":false
	});
	
	datas.push({
		"name":"webchat",
		"label":"微信号",
		//"locked":false,
		"hidden":false
	});

	
	datas.push({
		"name":"address",
		"label":"家庭住址",
		//"locked":false,
		"hidden":false,
	});
	
	datas.push({
		"name":"depart_date",
		"label":"出国日期",
		//"locked":false,
		"hidden":false
	});
	
	datas.push({
		"name":"return_date",
		"label":"回国日期",
		//"locked":false,
		"hidden":false
	});
	
	return datas;
}

function comm_create_fields(datas){
	var fields = new Array();
	fields.push({
		name:'id',
		type:'string'
	});
	Ext.each(datas,function(item){
		fields.push({
			name:item.name,
			type: 'string'
		});
	});

	return fields;
}

function comm_create_columns(datas){
	var columns = new Array();
	columns.push({xtype: 'rownumberer', width:30});
	Ext.each(datas,function(item){
		if(item.name === 'id'){
			return;
		}else{
			var renderer = function(value, metaData, record, rowIndex, colIndex, store, view) {
						if(record.data.status === "返回"){
							return "<span style='color:red'>" + value +  "</span>";
						}else{
							return value;
						}	
			};			
			var newcolumn = createColumn(item,renderer)
			if(newcolumn){
			  columns.push(newcolumn);
			}
		}
	});
	return columns;
}

function createColumn(item,renderer){
	if(!item){
		return null;
	}
	var j = {
        	xtype: 'gridcolumn',
        	draggable: true,
            sortable: true,
            flex:1,
            hidden:item.hidden,
            //lockable: true,
            //locked: item.locked,
        	text:item.label,
        	dataIndex:item.name,
        	renderer:renderer
        }
	return j;
}