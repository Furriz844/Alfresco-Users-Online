model.jsonModel = {
    services: [
        'alfresco/services/CrudService',
        'alfresco/core/ObjectProcessingMixin'],
    widgets: [{
        id : "SET_PAGE_TITLE",
        name : "alfresco/header/SetTitle",
        config : {
            title: msg.get("page.usersonline.title")
        }
    },
        {
            name: "alfresco/lists/AlfList",
            config: {
                loadDataPublishTopic: "ALF_CRUD_GET_ALL",
                loadDataPublishPayload: {
                    url: "admin/users-online"
                },
                itemsProperty: "usersOnline",
                widgets: [
                    {
                        name: "alfresco/lists/views/AlfListView",
                        config: {
                            additionalCssClasses: "bordered",
                            widgetsForHeader: [
                                {
                                    name: "alfresco/lists/views/layouts/HeaderCell",
                                    config: {
                                        label: "№"
                                    }
                                },{
                                    name: "alfresco/lists/views/layouts/HeaderCell",
                                    config: {
                                        label: "table.username.title"
                                    }
                                },
                                {
                                    name: "alfresco/lists/views/layouts/HeaderCell",
                                    config: {
                                        label: "table.username.firstName"
                                    }
                                },
                                {
                                    name: "alfresco/lists/views/layouts/HeaderCell",
                                    config: {
                                        label: "table.username.lastName"
                                    }
                                }
                            ],
                            widgets: [
                                {
                                    name: "alfresco/lists/views/layouts/Row",
                                    config: {
                                        widgets: [
                                            {
                                                name: "alfresco/lists/views/layouts/Cell",
                                                config: {
                                                    additionalCssClasses: "mediumpad",
                                                    widgets: [
                                                        {
                                                            name: "alfresco/renderers/Property",
                                                            config: {
                                                                propertyToRender: "number"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                name: "alfresco/lists/views/layouts/Cell",
                                                config: {
                                                    additionalCssClasses: "mediumpad",
                                                    widgets: [
                                                        {
                                                            name: "alfresco/renderers/Property",
                                                            config: {
                                                                propertyToRender: "username"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                name: "alfresco/lists/views/layouts/Cell",
                                                config: {
                                                    additionalCssClasses: "mediumpad",
                                                    widgets: [
                                                        {
                                                            name: "alfresco/renderers/Property",
                                                            config: {
                                                                propertyToRender: "firstName"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                name: "alfresco/lists/views/layouts/Cell",
                                                config: {
                                                    additionalCssClasses: "mediumpad",
                                                    widgets: [
                                                        {
                                                            name: "alfresco/renderers/Property",
                                                            config: {
                                                                propertyToRender: "lastName"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};