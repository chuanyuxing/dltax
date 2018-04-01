/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('dltax.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'dltax.view.main.MainController',
        'dltax.view.main.MainModel',
        'dltax.view.main.List',
        'dltax.view.main.ToolBar'       
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'hbox'
        },
        title: {
            bind: {
                text: '张三'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        collapsable:true,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 10,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: '工作一览',
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
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: '权限管理',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: '系统设置',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: '退出',
        iconCls: 'fa-sign-out',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
