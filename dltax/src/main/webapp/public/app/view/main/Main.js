Ext.define('dltax.view.main.Main', {
	extend: 'Ext.panel.Panel',
	 xtype: 'app-main',
	layout:'border',
    requires: [
        'Ext.plugin.Viewport',
//        'Ext.window.MessageBox',
        'dltax.view.main.Navigation',
//        'dltax.view.main.NavigationController',
//        'dltax.view.main.NavigationModel',
        'dltax.view.main.Toolbar'
//        'dltax.view.customer.List'
    ],
	initComponent: function() {
	    var me = this;
	    Ext.applyIf(me, {
	      items: [
	    	  {
	  		    xtype: 'maintoolbar',
	  		    region: 'north',
	  		    split:false,
	  			header:false,
	  			collapsible:false,
	  		},
	  		{
	  			region: 'center',
	  			flex: 7,
	  			layout:'fit',
	  			id:'mainwraper',
	  			items:[
	  				{
	  		  			xtype: 'navigation',
	  		  		    id:"navigation",
	  		  		}
	  			]
	  		}
	      ]
	    });
	    me.callParent(arguments);
	  }
});