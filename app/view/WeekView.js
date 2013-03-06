/**
 * User: Shamil
 * Date: 31.01.13
 * Time: 14:43
 *
 */


var vp = Ext.define('Schedule.view.WeekView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.weekView',
    requires: ['Schedule.view.TheGrid', 'Schedule.view.OptionsToolbar'],
    layout: {
        type: 'vbox',
        align: 'stretch'

    },
    autoScroll:true,
    initComponent: function() {
        log('view: WeekView');
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