Ext.define('dltax.view.main.Toolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'maintoolbar',
    height:50,
//    style: {
//        background: 'lightblue'
//     },
    items: [
        {
            // This component is moved to the floating nav container by the phone profile
            xtype: 'component',
            reference: 'logo',
            userCls: 'main-logo',
            html: '瑞德'
        },
        {
            xtype: 'button',
            ui: 'header',
            iconCls: 'x-fa fa-bars',
            margin: '0 0 0 10',
        },
        '->',  
        {
            xtype: 'component',
            html: '登陆用户名',
            margin: '0 12 0 4',
            userCls: 'main-user-name'
        },
        {
            xtype: 'image',
            userCls: 'main-user-image small-image circular',
            alt: 'Current user image',
            src: ''
        }
    ]
});
