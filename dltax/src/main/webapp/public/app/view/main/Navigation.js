/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('dltax.view.main.Navigation', {
    extend: 'Ext.tab.Panel',
    xtype: 'navigation',

    requires: [
        'Ext.window.MessageBox',
        'dltax.view.main.NavigationController',
        'dltax.view.main.NavigationModel',
        'dltax.view.customer.List',
    ],

    controller: 'navigation',
    model: 'navigation',
    ui: 'navigation',
    tabPosition: 'left',
    tabRotation: 0,

    defaults: {
    	 textAlign: 'left',
         bodyPadding: 15
    },

    items: [{
        title: '客户名单',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
        	id:'mainlist',
            xtype: 'mainlist'
        }
        ]
    }, {
        title: '用户管理',
        iconCls: 'fa-user',
//        bind: {
//            html: 'a'
//        }
    }, {
        title: '权限管理',
        iconCls: 'fa-users',
//        bind: {
//            html: 'b'
//        }
    }, {
        title: '系统设置',
        iconCls: 'fa-cog',
//        bind: {
//            html: 'c'
//        }
    }, {
        title: '退出',
        iconCls: 'fa-sign-out',
//        bind: {
//            html: '{loremIpsum}'
//        }
    }]
});
