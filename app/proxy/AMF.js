/**
 * User: Shamil
 * Date: 04.02.13
 * Time: 16:01
 *
 */

Ext.define('Schedule.proxy.AMF', {

    alias:'proxy.amf',
    extend: 'Ext.data.proxy.Ajax',
    useProxy:true,
    amfVersion:1,
    constructor: function() {
        this.reader = {
            type: 'json'
        };
        log('amf');
        this.callParent(arguments);
    },

    getMethod:function(request){
        return 'GET';
    },


    buildUrl:function(request){

       console.log('req: ' + Object.keys(request.params));
       var method = request.params.method;
       var params = request.params.params;
       var args = '';
       if(params){
           for(var i = 0, l = params.length; i < l; i++){
              args += '/' + params[i];
           }
       }
        var url = 'http://yoga-balance.ru/schedule/libs/amfphp/json.php/';
        if(this.useProxy){
            url = 'http://localhost/yogabalance/schedule/proxy.php?http://yoga-balance.ru/schedule/libs/amfphp/json.php/'
        }
        // Since we have a custom url formatter do not append extra parameters to url
        request.params = null;
        url += 'ScheduleService2.' + method + args;
        log(url);
        return url;
    },

    directionParam: null,
    filterParam: null,
    groupDirectionParam: null,
    groupParam: null,
    limitParam: null,
    pageParam: null,
    sortParam: null,
    startParam: null

});
