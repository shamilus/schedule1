/**
 * User: Shamil
 * Date: 30.01.13
 * Time: 23:23
 *
 */


Ext.define('Schedule.view.OptionsToolbar', {

    extend:'Ext.toolbar.Toolbar',
    alias:'widget.optionsToolbar',
    border:false,
    height:50,
    constructor:function () {
        this.items = [

            {
                overCls : 'my-over',
                pressedCls : 'my-pressed',
                enableToggle : true,
                toggleGroup:'btnGroup',
                allowDepress:true,
                text:'Неделя',
                pressed:true,

                listeners:{
                    scope:this,
                    click:this.onClick,
                    action:'selectWeek'

                }



            },

            {
                overCls : 'my-over',
                pressedCls : 'my-pressed',
                enableToggle : true,
                toggleGroup:'btnGroup',
                allowDepress:true,
                text:'Выбор по преподавателю',
                listeners:{
                    scope:this,
                    click:this.onClick,
                    action:'selectInstructor'

                }
            },

            {
                overCls : 'my-over',
                pressedCls : 'my-pressed',
                enableToggle : true,
                toggleGroup:'btnGroup',
                allowDepress:true,
                text:'Выбор по дням недели',
                listeners:{
                    scope:this,
                    click:this.onClick,
                    action:'selectDay'
                }
            },

            {

                overCls : 'my-over',
                pressedCls : 'my-pressed',
                enableToggle : true,
                toggleGroup:'btnGroup',
                allowDepress:true,
                text:'Выбор класса',
                listeners:{
                    scope:this,
                    click:this.onClick,
                    action:'selectClass'
                }

            },

            {
                overCls : 'my-over',
                pressedCls : 'my-pressed',
                enableToggle : true,
                toggleGroup:'btnGroup',
                allowDepress:true,
                text:'Выбор направления',
                listeners:{
                    scope:this,
                    click:this.onClick,
                    action:'selectCourse'
                }


            },

            {
                overCls : 'my-over',
                pressedCls : 'my-pressed',
                enableToggle : true,
                toggleGroup:'btnGroup',
                allowDepress:true,
                text:'Утро',

                listeners:{
                    scope:this,
                    click:this.onClick,
                    action:'selectMorning'
                }
            },

            {

                overCls : 'my-over',
                pressedCls : 'my-pressed',
                enableToggle : true,
                toggleGroup:'btnGroup',

                text:'Вечер',
                listeners:{
                    scope:this,
                    click:this.onClick,
                    action:'selectEvening'
                }
            }


        ];

        this.callParent(arguments);

        return this;


    },



    onClick:function (button, event, eOpts) {
        var btn = Ext.get(event.target);
        var action = eOpts.action;
        this.fireEvent(action);

    }
});
