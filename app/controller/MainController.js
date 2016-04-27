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
        function clock(){
            var now = new Date();
            console.log('canvas');
            var canvas = Ext.get('canvasElement').dom;
            var ctx = canvas.getContext("2d");
          
        }


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