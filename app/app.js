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


var app = Ext.application({
    name:'Schedule',
    autoCreateViewport:true,
    launch:function(){
        log('app');


    },

    models:['TableData'],
    stores:['TheStore'],
    controllers:['Week']

});


