/**
 * User: Shamil
 * Date: 04.02.13
 * Time: 14:51
 *
 */


Ext.define('Schedule.store.TheStore', {
    extend: 'Ext.data.Store',
    requires: ['Schedule.model.TableData', 'Schedule.proxy.AMF'],
    model: 'Schedule.model.TableData',
    autoLoad: true,
    //autoSync: true,
    alias:'store.thestore',
    proxy: {
        type: 'amf',
        extraParams: {method: 'weekSchedule', params: [0]}

    },
    onProxyLoad: function(operation) {

        var res = Ext.JSON.decode(operation.response.responseText);
        log('Store: onProxyLoad');
        // Creates stores of days 
        var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        var day = 6;
        while (day >= 0) {
            var store = Ext.create('Ext.data.Store', {
                model: 'Schedule.model.TableData',
                storeId: days[day],
                proxy: {
                    type: 'memory',
                    reader: {
                        type: 'json'
                    }

                }

            });
            store.loadRawData(res[day]);
            day--;
        }
        
        
        this.fireEvent('weekDataLoaded');


    }



});


