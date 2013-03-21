
Ext.define('Schedule.store.WeekStore', {
    extend: 'Ext.data.Store',
    requires: ['Schedule.model.TableData', 'Schedule.proxy.AMF'],
    model: 'Schedule.model.TableData',
    autoLoad: true,
    //autoSync: true,
    alias:'store.weekStore',
    proxy: {
        type: 'amf',
        extraParams: {method: 'weekSchedule', params: [0]}

    },
    onProxyLoad: function(operation) {
        log('weekstore');
        
        var res = Ext.JSON.decode(operation.response.responseText);
       
        
        
       this.fireEvent('weekDataLoaded', {result:res});


    }



});


