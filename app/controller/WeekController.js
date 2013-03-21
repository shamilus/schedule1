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
        log('week controller: init ');

        var a = 'uuu';

        var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        var daysRus = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
        var grids = [];
        var store = null;
        var grid = null;
        var container = null;
        var day = 7;

        if (!this.ready) {
            this.weekStore = this.getWeekStoreStore();

            this.weekStore.addListener('weekDataLoaded', function(e) {




                this.viewPort = this.getMainView().items.items[1];
                // TODO: Refactor

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
                        id: 'grid' + days[day],
                    });

                    grids.unshift(grid);

                }
                log(grids.length);
                container = Ext.create('Ext.container.Container', {
                    layout:{
                        type:'anchor'
                       // align:'stretch'
                    },
                   id:'weekContainer',
                   
                    items:grids
                    
                });
                
                this.viewPort.add(container);


            }, this);

            this.ready = true;



        } else {
            log('grids');
            // this.viewPort.add(this.grids);
            container.setVisible(false);
            log(container.isVisible());
        }

    },
    container: null,
    viewPort: null,
    ready: false




});
