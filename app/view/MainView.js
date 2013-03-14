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
    layout: {
        type: 'vbox',
        align: 'stretch'

    },
    autoScroll:true,
    initComponent: function() {
        log('view: MainView');
        this.items = {
            dockedItems: [{
                    dock: 'top',
                    xtype: 'optionsToolbar'



                }],
            //items:[{xtype:'thegrid', store:'TheStore'}]


        };



        this.callParent(arguments);
    }
});