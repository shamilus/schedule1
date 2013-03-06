/**
 * User: Shamil
 * Date: 04.02.13
 * Time: 22:04
 *
 */


Ext.define('Schedule.view.TheGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.thegrid',
    padding: 10,
    layout: {
        type: 'hbox',
        align: 'stretch',
        width:'100%',

    },
    /*
     // Item rendering
    viewConfig: {
        getRowClass: function(record, index) {
            var c = record.get('time_begin');
            if (parseInt(c) >= 18) {
                return 'evening';
            }
        }
    },
   */
    initComponent: function() {
        this.columns = [
            {header: 'начинается', dataIndex: 'time_begin', flex:1},
            {header: 'заканчивается', dataIndex: 'time_end', flex:1},
            {header: 'класс', dataIndex: 'class', flex:2},
            {header: 'преподаватель', dataIndex: 'teacher', flex:2},
            {header: 'замена', dataIndex: 'replace', flex:3}

        ];
        /*
        var html = '<h1 class="gridTitle">{text}</h1>';
        var tpl = new Ext.DomHelper.createTemplate(html);
        tpl.append(this, {
            text:this.title
        });
*/
        this.callParent(arguments);
    }
});
