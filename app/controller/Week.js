/**
 * User: Shamil
 * Date: 04.02.13
 * Time: 14:54
 *
 */
 Ext.define('Schedule.controller.Week', {

     extend: 'Ext.app.Controller',
     stores:['TheStore'],
     init:function(){
         log('controller');
         this.control({

             'thegrid':{
                 selectionchange:this.onRowClick
             }
         })


     },
     // Event properties rowClick: events,views,allowDeselect,mode,modes,selectionMode,selected,hasListeners,hasRelaySetup,view,storeListeners,store,keyNav,lastSelected,lastFocused
     onRowClick:function(e){
         log('rowClick: ' + Object.keys(e.selected));
     }

 });