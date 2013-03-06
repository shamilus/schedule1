/**
 * User: Shamil
 * Date: 04.02.13
 * Time: 14:54
 *
 */
Ext.define('Schedule.controller.MainController', {
    extend: 'Ext.app.Controller',
    requires: ['Schedule.view.TheGrid', 'Schedule.view.WeekView', 'Schedule.view.OptionsToolbar', 'Schedule.model.TableData'],
    stores: ['TheStore'],
    views: ['Schedule.view.WeekView', 'Schedule.view.TheGrid', 'Schedule.view.OptionsToolbar'],
    refs: [
        {
            ref: 'weekView',
            selector: 'weekView'
        }
    ],
    init: function() {
        log('controller');

        var s = this.getTheStoreStore();
        s.addListener('weekDataLoaded', this.displayWeek, this);


        this.control({
            'optionsToolbar': {
                selectWeek: this.onSelectWeek,
                selectCourse: this.onSelectCourse,
                selectInstructor: this.onSelectInstructor,
                selectDay: this.onSelectDay,
                selectClass: this.onSelectClass,
                selectMorning: this.onSelectMorning,
                selectEvening: this.onSelectEvening


            },
            'thegrid': {
                selectionchange: this.onRowClick
                        //  afterrender:this.test
            }



        });

    },
    viewPort: null,
    
    
    
    displayWeek: function() {
        this.viewPort = this.getWeekView();
        // TODO: Refactor 
        var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        var daysRus = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
        var grids = [];

        var store;
        var grid;
        var day = 0;
        while (day < 7) {
            store = Ext.data.StoreManager.lookup(days[day]);
            if (store) {

                grid = Ext.create('Schedule.view.TheGrid', {
                    store: store,
                    title: daysRus[day],
                    id: 'grid' + days[day]
                });

                grids.push(grid);
                day++;

            }

        }



        this.viewPort.add(grids);


    },
    onLaunch: function() {



    },
    onRowClick: function(selectionModel, selections) {
        var item = selections[0].data;
        log(item.class);
    },
    // Navigation click handlers        
    onSelectWeek: function() {
        this.onWeekDataLoaded;

    },
    onSelectInstructor: function() {

    },
    onSelectDay: function() {

    },
    onSelectClass: function() {

    },
    onSelectMorning: function() {

    },
    onSelectEvening: function() {

    },
    onSelectCourse: function() {



    }
});