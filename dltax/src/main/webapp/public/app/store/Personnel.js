Ext.define('dltax.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    
    model: 'dltax.model.CustomerModel',
    
    autoLoad:false,
    
    remoteSort: false,

	remoteFilter:false,

	pageSize: 10
	 
//    proxy: {
//        type: 'pagingmemory',
//        enablePaging : true,
//        reader: {
//            type: 'json',
//            rootProperty: 'items',
//            totalProperty: 'total'
//        }
//    }
});
