/**
 * Created by Rebecca on 25.04.2016.
 */
Ext.define('eBook.view.Canvas', {
    id: 'canvas',
    extend: 'Ext.tab.Panel',
    xtype: 'test',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        items: [{
            title: 'Welcome',
            iconCls: 'home',

            styleHtmlContent: true,
            scrollable: true,

            items: {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Welcome to Sencha Touch 2'
            },
            html: [
                "<p>before<p><canvas width='500' id='canvasElement' height='400'></canvas><p>after<p>"
            ]
        }]
    }
});
