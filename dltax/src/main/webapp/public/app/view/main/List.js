/**
 * This view is an example list of people.
 */
Ext.define('dltax.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
    	'Ext.toolbar.Paging',
        'dltax.store.Personnel',
        'dltax.model.CustomerModel'
    ],

    title: '客户名单',

    frame: false,
    
    loadMask: true,
    
    height: 500,
    
    autoLoad: false,
    
    columnLines: true,
    
    stripeRows:true,
    
    deferRowRender: false,
    
    overflowX: 'auto',
    overflowY: 'auto',
    
    enableLocking: false,
    
	normalViewConfig:{
	   minWidth:100
	},
	  
    viewConfig: {
        trackOver: true,
        stripeRows: true,
        enableTextSelection: true
    },
    
    store: {
        type: 'personnel'
    },

//    columns: [
//        { text: '所属分部',  dataIndex: 'name' },
//        { text: '序号', dataIndex: 'email', flex: 1 },
//        { text: '客户编号', dataIndex: 'phone', flex: 1 }
//        { text: '姓名',  dataIndex: 'name' },
//        { text: '日语名', dataIndex: 'email', flex: 1 },
//        { text: '性别', dataIndex: 'phone', flex: 1 },
//        { text: '出生年月日',  dataIndex: 'name' },
//        { text: '联系电话', dataIndex: 'email', flex: 1 },
//        { text: 'E-mail', dataIndex: 'phone', flex: 1 },
//        { text: 'QQ', dataIndex: 'phone', flex: 1 },
//        { text: '微信号', dataIndex: 'phone', flex: 1 },
//        { text: '家庭住址', dataIndex: 'phone', flex: 1 }
//    ],
    
//    plugins: {
//        ptype: 'bufferedrenderer',
//        trailingBufferZone: 0,  // Keep  rows rendered in the
//        leadingBufferZone: 1,   // Keep  rows rendered in the
//        numFromEdge:0,
//    },
    
    tbar: [{
    	xtype:'button',
        text: '申请'
    }, {
        text: '取消'
    }],
    
    bbar: Ext.create('Ext.PagingToolbar', {
        //store: store,
    	id:'pagingtoolbar',
    	pageSize: 10,
        displayInfo: true,
        displayMsg: '{0} - {1} 条/ 共{2}条',
        emptyMsg: "无数据"
    }),
    
    selModel: Ext.create('Ext.selection.CheckboxModel', {
    	 type: 'spreadsheet',
    	 columnSelect: false,
        ignoreRightMouseSelection: true,
        showHeaderCheckbox: true,
        pruneRemoved: false,
        checkOnly : false
    }),
          
    listeners: {
        select: 'onItemSelected'
    }
});
