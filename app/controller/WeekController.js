Ext.define('Schedule.controller.WeekController', {
    extend: 'Ext.app.Controller',
    stores: ['WeekStore'],
    requires: ['Schedule.view.TheGrid', 'Schedule.view.MainView', 'Schedule.model.TableData'],
    views: ['Schedule.view.TheGrid', 'Schedule.view.MainView'],
    refs: [
        {
            ref: 'mainView',
            selector: 'mainView'
        }
    ],
    weekStore: null,
    init: function() {
        this.weekStore = this.getWeekStoreStore();
        this.weekStore.addListener('weekDataLoaded', this.display, this);

    },
    display: function(e) {
        log('week controller');


        if (!this.ready) {
            
            log('ready');

            this.viewPort = this.getMainView();
            // TODO: Refactor 
            var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            var daysRus = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
            var grids = [];
            var store = null;
            var grid = null;
            var day = 7;
            while (day--) {


                store = Ext.create('Ext.data.Store', {
                    model: 'Schedule.model.TableData',
                    storeId: days[day],
                    autoLoad: false,
                    proxy: {
                        type: 'memory',
                        reader: {
                            type: 'json'
                        }

                    }

                });
                store.loadData(e.result[day]);


                grid = Ext.create('Schedule.view.TheGrid', {
                    store: store,
                    title: daysRus[day],
                    id: 'grid' + days[day]
                });

                grids.unshift(grid);

            }
            this.container = Ext.create('Ext.container.Container', {
                layout: {
                    type: 'vbox'
                },
                width: '100%',
                height:'100%',
               // renderTo: this.getMainView()
            });
            this.container.add(grids);
            this.ready = true;

        } else {
            log('grids');
            // this.viewPort.add(this.grids);

        }


    },
    container: null,
    viewPort: null,
    ready: false




});
