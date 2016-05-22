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
        var counter = 0;
        window.requestAnimationFrame(loop);
        function loop(){
            //var scope=this;
           // var canvas = scope.getCanvasP().el.down('canvas').dom;
            var canvas = Ext.get('canvasElement').dom;
            console.log(counter);
            var ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(100,100);
            ctx.bezierCurveTo(115,75,135,75,150,100);
            ctx.bezierCurveTo(175,110,175,130,150,200);
            ctx.bezierCurveTo(130,225,110,225,100,200);
            ctx.bezierCurveTo(75,175,75,150,100,100);
            ctx.fillStyle = 'green';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(125, 70, 30, 0, 2 * Math.PI);
            ctx.fill();

            ctx.moveTo(150,120);
            ctx.bezierCurveTo(200, 40, 230, 40,150,130);
            ctx.fill();
            ctx.moveTo(100,120);
            ctx.bezierCurveTo(50, 200, 30, 200,100,110);
            ctx.fill();
            ctx.fillRect(110,200, 5, 70);
            ctx.fill();
            ctx.fillRect(140, 200, 5, 70);
            ctx.fill();
                ctx.save();
                ctx.translate(300, 200);
                ctx.fill();
                ctx.restore();
            counter ++;
            if(counter <100){
                window.requestAnimationFrame(loop);
            }


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