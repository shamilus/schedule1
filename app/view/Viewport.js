/**
 * User: Shamil
 * Date: 31.01.13
 * Time: 14:43
 *
 */


var vp = Ext.define('Schedule.view.Viewport',{
    extend:'Ext.container.Viewport',
    requires:['Schedule.view.TheGrid', 'Schedule.view.OptionsToolbar'],
    initComponent:function(){
        this.items = {
            dockedItems:[{
                dock:'top',
                xtype:'optionsToolbar'



            }],

            items:[
                {xtype:'thegrid', store:'TheStore', params:{'test':'12345'}}
            ]


        };



        log('viewport');
        this.callParent(arguments);
    }
});