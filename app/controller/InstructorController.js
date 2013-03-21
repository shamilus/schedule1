Ext.define('Schedule.controller.InstructorController', {
    extend: 'Ext.app.Controller',
    store: ['InstructorStore'],
    instructorStore: null,
    init: function () {

        log('InstructorCtr');
        this.instructorStore = Ext.data.StoreManager.get('InstructorStore');
        this.instructorStore.addListener('instructorDataLoaded', this.onInstructorsLoad, this);
        this.instructorStore.load();

    },
    onInstructorsLoad: function (e) {
        log('onLoaddd ');


        var tpl = new Ext.XTemplate(
            '<ul>',
            '<tpl for=".">',
                '<tpl if="this.isDisabled(values)">',
               '<li class="instructor">',
'<input type="checkbox" name="instructorsCb[]">{title}',
            '<p>{image}</p>',
'<img src="{img}" alt="{title}" title="{title}" />',
'<!--<p class="descr">{teacherDescription}</p>-->',
'</li></tpl></tpl></ul>',

            {
                isDisabled: function (values) {

                    return values.inSchedule == 1;

                },
                compiled: true
            }


        );


        var popup = Ext.create('Ext.window.Window', {
            width: 400,
            height: 300,
            layout: 'fit',
            scroll: 'auto'

        }).show();

        tpl.overwrite(popup.body, e.result);

    }

});