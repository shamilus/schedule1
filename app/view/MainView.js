/**
 * User: Shamil
 * Date: 31.01.13
 * Time: 14:43
 *
 */


Ext.define('Schedule.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainView',
    requires: ['Schedule.view.OptionsToolbar'],
    alias:'widget.mainView',
    /*
    layout: {
        type: 'fit',
       align: 'stretch'

    },
    */
    autoScroll:false,
    initComponent: function() {
        Ext.apply(this, {
        //log('view: MainView');
        items: [
                  {
                    region: 'north',
                    xtype: 'optionsToolbar',
                    height:50
                  },
                    {
                    region:'center',
                    xtype:'container',
                    height:'90%',
                    padding:0,
                    layout:{
                        type:'card'
                        // align: 'stretch'

                    },
                   
                    id:'canvas',
                     autoScroll:true       
                    },
                    {
                        region:'south',
                        xtype:'container',
                        html:'<h1>footer</h1>',
                        layout:'fit',
                        height:50
                    }
                    
               


        ]

    });

        this.callParent(arguments);
    }
});