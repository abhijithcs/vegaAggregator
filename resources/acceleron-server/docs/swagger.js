var responsesList = {
    "200": {
        "description": "success"
    },
    "201": {
        "description": "success"
    },
    "400": {
        "description": "bad request"
    },
    "401": {
        "description": "auth failure"
    },
    "404": {
        "description": "no record found"
    },
    "408": {
        "description": "server timed out"
    },
    "409": {
        "description": "conflict"
    },
    "500": {
        "description": "some error occurred"
    }
}

var all = {
    "swagger": "2.0",
    "info": {
        "description": "All the APIs for supporting the Acceleron POS Software",
        "version": "1.0.0",
        "title": "Acceleron Server",
        "termsOfService": "https://accelerate.net.in/acceleron-terms.html",
        "contact": {"email": "support@accelerate.net.in"}
    },
    "host": "localhost:" + process.env.PORT,
    "basePath": "/",
    "tags": [
        {
            "name": "settings",
            "description": "APIs relating to the System Settings, Contents and Personalisations",
        },
        {
            "name": "table",
            "description": "APIs to create the Tables and filter out them with certain conditions",
        }],
    "schemes": ["http"],
    "securityDefinitions": {
        "access_key": {"type": "apiKey", "name": "x-access-token", "in": "header"}
    },
    "definitions": {},
    "paths": {
        "/settings/{id}": {
            "get": {
                "tags": ["settings"],
                "summary": "To fetch the settings content",
                "description": "To fetch the settings content by its unique id",
                "operationId": "getSettingsById",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Settings ID",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": responsesList,
                "security": [{"access_key": []}]
            }
        },
        "/settings/{id}/newentry": {
            "post": {
                "tags": ["settings"],
                "summary": "To add new entry in settings",
                "description": "To add new entry to the settings content against its unique id. New entry object to be passed in body.",
                "operationId": "addNewItemToSettings",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Settings ID",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": responsesList,
                "security": [{"access_key": []}]
            }
        },
        "/settings/{id}/removeentry": {
            "post": {
                "tags": ["settings"],
                "summary": "To remove entry from settings",
                "description": "To add an entry from the settings content against its unique id. Entry object to be removed to be passed in body.",
                "operationId": "removeEntryFromSettings",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Settings ID",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": responsesList,
                "security": [{"access_key": []}]
            }
        },
        "/settings/{id}/filter": {
            "get": {
                "tags": ["settings"],
                "summary": "To filter from settings list",
                "description": "To filter out a specific entry from the list of entries in the settings content. For eg: System options, Personalisations against given machine id",
                "operationId": "filterItemFromSettingsList",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Settings ID",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "name": "uniqueKey",
                        "in": "query",
                        "description": "Unique Identifier Key",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": responsesList,
                "security": [{"access_key": []}]
            }
        },
        "/settings/{id}/updateentry": {
            "post": {
                "tags": ["settings"],
                "summary": "To update item in settings list",
                "description": "To update a specific entry from the list of entries in the settings content. For eg: System options, Personalisations against given machine id",
                "operationId": "filterItemFromSettingsList",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Settings ID",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "name": "uniqueKey",
                        "in": "query",
                        "description": "Unique Identifier Key",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": responsesList,
                "security": [{"access_key": []}]
            }
        },
        "/settings/applyquickfix": {
            "get": {
                "tags": ["settings"],
                "summary": "To perform quick fix",
                "description": "To perform quick fix actions on KOT/Bill index and table mappings",
                "operationId": "applyQuickFix",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Settings ID",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "name": "fixKey",
                        "in": "query",
                        "description": "Unique Identifier Key - KOT / BILL / TABLE",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": responsesList,
                "security": [{"access_key": []}]
            }
        },
        "/table/{id}": {
            "get": {
                "tags": ["table"],
                "summary": "To get a table",
                "description": "To get a table by its unique id",
                "operationId": "getTableById",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Table ID",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": responsesList,
                "security": [{"access_key": []}]
            }
        },
        "/table/filter": {
            "get": {
                "tags": ["table"],
                "summary": "To filter tables",
                "description": "To filter out a specific set of table based on some conditions. For eg. Live Tables, Reserved Tables etc.",
                "operationId": "fetchTablesByFilter",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "key",
                        "in": "query",
                        "description": "Filter Key - all, live, name",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "name": "uniqueId",
                        "in": "query",
                        "description": "Identifier - Table Name / Table ID etc.",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": responsesList,
                "security": [{"access_key": []}]
            }
        },
        "/table/{id}/resettable": {
            "get": {
                "tags": ["table"],
                "summary": "To reset a table",
                "description": "To reset a table to its original form",
                "operationId": "resetTable",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "Table ID",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": responsesList,
                "security": [{"access_key": []}]
            }
        },
        "/kot/{id}": {
            "get": {
                "tags": ["kot"],
                "summary": "To get a KOT",
                "description": "To get a KOT by its unique id",
                "operationId": "getKOTById",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "KOT ID",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": responsesList,
                "security": [{"access_key": []}]
            }
        },
        "/kot/filter": {
            "get": {
                "tags": ["kot"],
                "summary": "To filter KOTs",
                "description": "To filter out a specific set of KOTs based on some conditions. For eg. Dine or Non-dine.",
                "operationId": "fetchKOTsByFilter",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "key",
                        "in": "query",
                        "description": "Filter Key - all, dine, nondine",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": responsesList,
                "security": [{"access_key": []}]
            }
        }     
    }
};

module.exports = all;