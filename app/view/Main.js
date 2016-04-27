Ext.define('eBook.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {

        itemId: 'mainP',
        layout: {
            type: 'card',
            animation: 'slide'
        },
        items: [
            {
                xtype: 'testpage'		// 0
            },
            {
                xtype: 'titlepage'		// 1
            }
        ]
    }
});
