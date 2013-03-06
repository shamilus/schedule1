/**
 * User: Shamil
 * Date: 30.01.13
 * Time: 19:08
 *
 */



Ext.Loader.setConfig({
    paths: {'view':'app/view', 'proxy':'app/proxy'}
});



//Ext.require('view.OptionsToolbar');




function log(msg){
    console.log(msg);
}



// Splash screen
var splashscreen;

Ext.onReady(function() {
    // Start the mask on the body and get a reference to the mask
    splashscreen = Ext.getBody().mask('Загрузка расписания', 'splashscreen');
    // Add a new class to this mask as we want it to look different from the default.
    splashscreen.addCls('splashscreen');

    // Insert a new div before the loading icon where we can place our logo.
    Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
        cls: 'x-splash-icon'
    });
});


var app = Ext.application({
    name:'Schedule',


    //autoCreateViewport:true,
    launch:function(){
                log('app'); 
          
        var week = Ext.create('Schedule.view.WeekView',{
            
            
        });
        
        
        // Setup a task to fadeOut the splashscreen
        var task = new Ext.util.DelayedTask(function() {
            // Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });
            // Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: {
                    afteranimate: function() {
                        // Set the body as unmasked after the animation
                        Ext.getBody().unmask();
                    }
                }
            });
        });
        // Run the fade 500 milliseconds after launch.
        task.delay(500);
        

    },

    models:['TableData'],
    stores:['TheStore'],
    controllers:['MainController'],
    views:['WeekView']

});


