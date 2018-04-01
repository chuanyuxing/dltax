/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'dltax',

    appFolder: '/public/app',
    
    requires: [
        'dltax.view.main.Main'
    ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    
    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'dltax.view.main.Main',
    
    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
    	
    	var datas = comm_create_datas();
    	var fields = comm_create_fields(datas);
    	var columns = comm_create_columns(datas);
    	
        var grid = Ext.getCmp("mainlist");

        grid.suspendLayouts();
        Ext.state.Manager.clear(grid.stateId);
        Ext.state.Manager.clear(grid.getStore().stateId);
        var store =  Ext.create('dltax.store.Personnel', {
            fields: fields,  
            proxy: {
                type: 'ajax',
                url: '/customer/list',
                limit: 'pageSize',
                reader: {
    				type: 'json',
    				rootProperty:'items',
    				totalProperty:'totalCount'
                }               
            }
        });
        store.pageSize = 10;

        store.loadPage(1);
        
       	grid.reconfigure(store,columns);
    	grid.resumeLayouts();   
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
    
    //-------------------------------------------------------------------------
    // Most customizations should be made to dltax.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});