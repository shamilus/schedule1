/**
 * User: Shamil
 * Date: 04.02.13
 * Time: 14:51
 *
 */


Ext.define('Schedule.store.TheStore', {

    extend:'Ext.data.Store',
    requires:['Schedule.model.TableData', 'Schedule.proxy.AMF'],
    model:'Schedule.model.TableData',
    autoLoad:true,
    autoSync:true,
    proxy: {
        type: 'amf',
        extraParams:{method:'weekSchedule', params:[0]},

    },
    onProxyLoad: function(operation){

        var res = Ext.JSON.decode(operation.response.responseText);

        this.loadRawData(res[1]);

    }



});
