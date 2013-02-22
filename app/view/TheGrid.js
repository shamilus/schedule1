/**
 * User: Shamil
 * Date: 04.02.13
 * Time: 22:04
 *
 */


Ext.define('Schedule.view.TheGrid',{
    extend:'Ext.grid.Panel',
    alias:'widget.thegrid',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    initComponent:function(){
        this.columns = [
            {header:'начинается', dataIndex:'time_begin'},
            {header:'заканчивается', dataIndex:'time_end'},
            {header:'класс', dataIndex:'class'},
            {header:'преподаватель', dataIndex:'teacher'},
            {header:'замена', dataIndex:'replace'}

        ]

        this.callParent(arguments);
    }
});
