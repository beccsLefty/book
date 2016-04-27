/**
 * Created by Rebecca on 27.04.2016.
 */
Ext.define('eBook.controller.MainController', {
    extend: 'Ext.app.Controller',
    requires: [ 'Ext.data.ModelManager', 'Ext.Anim'],
    config: {
        control: {
            mainPanel : {
                show : 'launchController'
            },
            canvasP: {
                show: 'draw'
            }

        },

        refs: {
            canvasP: '#canvas',
            mainPanel: 'panel#mainP'
        }
    },

    draw: function(){
            console.log('canvas');
        var scope=this;
            var canvas = scope.getCanvasP().el.down('canvas').dom;
        console.log(canvas);
        var canvas2 = canvas.innerHTML;
            var ctx = canvas2.getContext("2d");

            console.log(canvas2);

},


    launchController : function() {

        //prevents Ext.Msg.alert window from freezing (skips animation)
        Ext.Msg.defaultAllowedConfig.showAnimation = false;
        //browser or phone?
        runningOnPhone = (Ext.os.deviceType == "Phone");
        //screen size: 422, 679
        console.log("!!! runningOnPhone: "+ runningOnPhone);
        mc = this;

    }
});