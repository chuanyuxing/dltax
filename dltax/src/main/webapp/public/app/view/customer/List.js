/**
 * This view is an example list of people.
 */
Ext.define('dltax.view.customer.List', {
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
    
    height: 510,
    
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
