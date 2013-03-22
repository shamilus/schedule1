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

        var me = this;


        var tpl = new Ext.XTemplate(
            '<ul id="instructorsList">',
            '<tpl for=".">',
                '<tpl if="this.isDisabled(values)">',
               '<li class="instructor">',
'<input type="checkbox" name="instructorsCb[]" value="{id}">{title}',
            '<p>{image}</p>',
'<img src="{img}" alt="{title}" title="{title}" />',
'<!--<p class="descr">{teacherDescription}</p>-->',
'</li></tpl></tpl></ul><input id="instructorsBtn" type="button" value="Выбрать">',

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

        // Checkboxes submit listener

        Ext.get('instructorsBtn').on('click', function(e){
            var selected = me.processCheckboxes('instructorsCb[]');
            log(selected.length);

        });


    },


    processCheckboxes:function(chkboxName) {

            var checkboxes = document.getElementsByName(chkboxName);
            var checkboxesChecked = [];
            for (var i = 0, l = checkboxes.length; i < l; i++) {
                if (checkboxes[i].checked) {
                    checkboxesChecked.push(checkboxes[i]);
                }
            }
            return checkboxesChecked.length > 0 ? checkboxesChecked : null;
        }

});