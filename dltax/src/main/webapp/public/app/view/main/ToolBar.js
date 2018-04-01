Ext.define('dltax.view.main.ToolBar', {
	extend: 'Ext.panel.Panel',
    alias: 'toolbar',
    baseCls:'panel-no-border',
    dockedItems: [
    	{
            dock:'top'
           ,xtype:'panel'
           ,layout:{
                type:'hbox',
               align:'stretch'
           },items:[
    	    		{
        	    		xtype:"pagingtoolbar",
                        store: 'store.personnel',
                        id: 'pagingtoolbar',
                        enableOverflow: true,
                        border:false,
                        flex:1,
                        items:[{
                        	text: "OK",//'選択リスト出力',
                        	iconCls:'script-export',
                        }                       
                        ],
                      doRefresh : function(){
          	      		}
                      }
                  ]
           }
      ]
});