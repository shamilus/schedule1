

Ext.define('Schedule.view.OptionsToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.optionsToolbar',
    border: false,
    cls: 'tbar-tabpanel',

    constructor: function() {
        this.items = [
            {
                overCls: 'my-over',
                pressedCls: 'my-pressed',
                enableToggle: true,
                toggleGroup: 'btnGroup',
                allowDepress: true,
                text: 'Неделя',
                pressed: true,
                listeners: {
                    scope: this,
                    click: {
                        fn: this.onClick,
                        action: 'week'
                    }


                }



            },
            {
                overCls: 'my-over',
                pressedCls: 'my-pressed',
                enableToggle: true,
                toggleGroup: 'btnGroup',
                allowDepress: true,
                text: 'Выбор по преподавателю',
                listeners: {
                    scope: this,
                    click: {
                        fn: this.onClick,
                        action: 'instructor'

                    }

                }
            },
            {
                overCls: 'my-over',
                pressedCls: 'my-pressed',
                enableToggle: true,
                toggleGroup: 'btnGroup',
                allowDepress: true,
                text: 'Выбор по дням недели',
                listeners: {
                    scope: this,
                    click: {
                        fn: this.onClick,
                        action: 'day'
                    }
                }
            },
            {
                overCls: 'my-over',
                pressedCls: 'my-pressed',
                enableToggle: true,
                toggleGroup: 'btnGroup',
                allowDepress: true,
                text: 'Выбор класса',
                listeners: {
                    scope: this,
                    click: {
                        fn: this.onClick,
                        action: 'class'
                    }
                }

            },
            {
                overCls: 'my-over',
                pressedCls: 'my-pressed',
                enableToggle: true,
                toggleGroup: 'btnGroup',
                allowDepress: true,
                text: 'Выбор направления',
                listeners: {
                    scope: this,
                    click:
                            {fn: this.onClick,
                                action: 'course'
                            }
                }


            },
            {
                overCls: 'my-over',
                pressedCls: 'my-pressed',
                enableToggle: true,
                toggleGroup: 'btnGroup',
                allowDepress: true,
                text: 'Утро',
                listeners: {
                    scope: this,
                    click: {fn: this.onClick,
                        action: 'morning'
                    }
                }
            },
            {
                overCls: 'my-over',
                pressedCls: 'my-pressed',
                enableToggle: true,
                toggleGroup: 'btnGroup',
                text: 'Вечер',
                listeners: {
                    scope: this,
                    click: {fn: this.onClick,
                        action: 'evening'
                    }
                }
            }


        ];

        this.callParent(arguments);
        
        

        return this;


    },
    onClick: function(button, event, eOpts) {
log(Object.keys(event));
log(event.button);
        this.fireEvent('change', {action:eOpts.action});

    }
});
