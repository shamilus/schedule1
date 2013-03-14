

Ext.define('Schedule.controller.MainController', {
    extend: 'Ext.app.Controller',
    requires: ['Schedule.view.MainView', 'Schedule.view.OptionsToolbar', 'Schedule.model.AppState'],
    views: ['Schedule.view.MainView', 'Schedule.view.OptionsToolbar'],
    init: function() {
        log('main controller');

        this.control({
            'optionsToolbar': {
                change: this.onChange
               
            },
            'mainView': {
                //  creationComplete:this.onSelectWeek

            }
           

        });


    },
            
    
     
    onChange: function(e) {
        log(Schedule.model.AppState.STATE);

        if (e.action.length > 0) {
            this.loadController(e.action);
        } else {
            throw new Error('Toolbar "onChange": Controller name is undefined.');
        }
    },
    loadController: function(controllerName) {
        var controllerName = controllerName.toLowerCase();
        var controller = this.application.getController('Schedule.controller.' + controllerName.charAt(0).toUpperCase() + controllerName.slice(1) + 'Controller');
        controller.init();

    }
});