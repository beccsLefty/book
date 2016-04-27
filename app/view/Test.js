/**
 * Created by Rebecca on 25.04.2016.
 */
Ext.define('eBook.view.Test', {
    extend: 'Ext.tab.Panel',
    xtype: 'testpage',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        itemId: 'testP',
        layout: 'hbox',
        tabBarPosition: 'bottom',
        html: '<canvas id="mycanvas" width="260" height="260" style="width: 100%; height: 100%;">no canvas support</canvas>',
        width: '533px',
        cls: standardCls,
        listeners: {
            afterrender: function(thiscomponent) {
                var canvas = document.getElementById('mycanvas');
                var context = canvas.getContext("2d");
                var cw = canvas.width;
                var ch = canvas.height;

                context.strokeStyle = 'black';
                context.moveTo(0,0);
                context.lineTo(cw,ch);
                context.stroke();
            }
        }
    }
});