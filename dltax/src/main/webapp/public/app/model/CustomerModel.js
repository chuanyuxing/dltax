Ext.define('dltax.model.CustomerModel', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    proxy: {
        type: 'pagingmemory',
        enablePaging : true,
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'total'
        }
    }
});