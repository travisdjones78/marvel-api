// // 20230720150006
// // https://gateway.marvel.com/docs/public

// {
//     "swaggerVersion": "1.0",
//         "apiVersion": "Cable",
//             "basePath": "http://gateway.marvel.com",
//                 "resourcePath": "/docs/public",
//                     "apis": [
//                         {
//                             "path": "/v1/public/characters",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCreatorCollection",
//                                     "responseClass": "CharacterDataWrapper",
//                                     "notes": "Fetches lists of comic characters with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b2958",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b296b"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b296a"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b2969"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b2968"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b2967"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b2966"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b2965"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "name",
//                                             "description": "Return only characters matching the specified full character name (e.g. Spider-Man).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2964",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Return characters with names that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2963",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only characters which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2962",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only characters which appear in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2961",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only characters which appear the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2960",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only characters which appear in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b295f",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only characters which appear the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b295e",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b295c",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b295d",
//                                                 "values": [
//                                                     "name",
//                                                     "modified",
//                                                     "-name",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b295a",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b295b",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2959",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of characters."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/characters/{characterId}",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCharacterIndividual",
//                                     "responseClass": "CharacterDataWrapper",
//                                     "notes": "This method fetches a single character resource.  It is the canonical URI for any character resource provided by the API.",
//                                     "_id": "5318a13e480b07a76f3b2818",
//                                     "errorResponses": [
//                                         {
//                                             "code": 404,
//                                             "reason": "Character not found.",
//                                             "_id": "5318a13e480b07a76f3b281a"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "characterId",
//                                             "description": "A single character id.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b2819",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         }
//                                     ],
//                                     "summary": "Fetches a single character by id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/characters/{characterId}/comics",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getComicsCharacterCollection",
//                                     "responseClass": "ComicDataWrapper",
//                                     "notes": "Fetches lists of comics containing a specific character, with optional filters. See notes on individual parameters below.",
//                                     "_id": "536cede2b44b7e6d20000034",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "536cede2b44b7e6d2000005d"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "536cede2b44b7e6d2000005c"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "536cede2b44b7e6d2000005b"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "536cede2b44b7e6d2000005a"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "536cede2b44b7e6d20000059"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "536cede2b44b7e6d20000058"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "536cede2b44b7e6d20000057"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "characterId",
//                                             "description": "The character id.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "536cede2b44b7e6d20000056",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "format",
//                                             "description": "Filter by the issue format (e.g. comic, digital comic, hardcover).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000054",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000055",
//                                                 "values": [
//                                                     "comic",
//                                                     "magazine",
//                                                     "trade paperback",
//                                                     "hardcover",
//                                                     "digest",
//                                                     "graphic novel",
//                                                     "digital comic",
//                                                     "infinite comic"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "formatType",
//                                             "description": "Filter by the issue format type (comic or collection).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000052",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000053",
//                                                 "values": [
//                                                     "comic",
//                                                     "collection"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "noVariants",
//                                             "description": "Exclude variant comics from the result set.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000050",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000051",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateDescriptor",
//                                             "description": "Return comics within a predefined date range.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000004e",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d2000004f",
//                                                 "values": [
//                                                     "lastWeek",
//                                                     "thisWeek",
//                                                     "nextWeek",
//                                                     "thisMonth"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateRange",
//                                             "description": "Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000004d",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "title",
//                                             "description": "Return only issues in series whose title matches the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000004c",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "titleStartsWith",
//                                             "description": "Return only issues in series whose title starts with the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000004b",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "startYear",
//                                             "description": "Return only issues in series whose start year matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000004a",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issueNumber",
//                                             "description": "Return only issues in series whose issue number matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000049",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "diamondCode",
//                                             "description": "Filter by diamond code.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000048",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "digitalId",
//                                             "description": "Filter by digital comic id.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000047",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "upc",
//                                             "description": "Filter by UPC.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000046",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "isbn",
//                                             "description": "Filter by ISBN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000045",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "ean",
//                                             "description": "Filter by EAN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000044",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issn",
//                                             "description": "Filter by ISSN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000043",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "hasDigitalIssue",
//                                             "description": "Include only results which are available digitally.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000041",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000042",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only comics which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000040",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only comics which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000003f",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only comics which are part of the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000003e",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only comics which take place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000003d",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only comics which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000003c",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "sharedAppearances",
//                                             "description": "Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000003b",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "collaborators",
//                                             "description": "Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000003a",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000038",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000039",
//                                                 "values": [
//                                                     "focDate",
//                                                     "onsaleDate",
//                                                     "title",
//                                                     "issueNumber",
//                                                     "modified",
//                                                     "-focDate",
//                                                     "-onsaleDate",
//                                                     "-title",
//                                                     "-issueNumber",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000036",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "536cede2b44b7e6d20000037",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000035",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of comics filtered by a character id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/characters/{characterId}/events",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCharacterEventsCollection",
//                                     "responseClass": "EventDataWrapper",
//                                     "notes": "Fetches lists of events in which a specific character appears, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b28e3",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b28f7"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b28f6"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b28f5"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b28f4"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b28f3"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b28f2"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b28f1"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "characterId",
//                                             "description": "The character ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b28f0",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "name",
//                                             "description": "Filter the event list by name.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28ef",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Return events with names that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28ee",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only events which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28ed",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only events which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28ec",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only events which are part of the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28eb",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only events which take place in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28ea",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only events which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28e9",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28e7",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b28e8",
//                                                 "values": [
//                                                     "name",
//                                                     "startDate",
//                                                     "modified",
//                                                     "-name",
//                                                     "-startDate",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28e5",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b28e6",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28e4",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of events filtered by a character id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/characters/{characterId}/series",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCharacterSeriesCollection",
//                                     "responseClass": "SeriesDataWrapper",
//                                     "notes": "Fetches lists of comic series in which a specific character appears, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b290f",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b2928"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b2927"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b2926"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b2925"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b2924"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b2923"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b2922"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "characterId",
//                                             "description": "The character ID",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b2921",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "title",
//                                             "description": "Filter by series title.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2920",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "titleStartsWith",
//                                             "description": "Return series with titles that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b291f",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "startYear",
//                                             "description": "Return only series matching the specified start year.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b291e",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only series which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b291d",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only series which contain the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b291c",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only series which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b291b",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b291a",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only series which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2919",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "seriesType",
//                                             "description": "Filter the series by publication frequency type.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2917",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b2918",
//                                                 "values": [
//                                                     "collection",
//                                                     "one shot",
//                                                     "limited",
//                                                     "ongoing"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "contains",
//                                             "description": "Return only series containing one or more comics with the specified format.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2915",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b2916",
//                                                 "values": [
//                                                     "comic",
//                                                     "magazine",
//                                                     "trade paperback",
//                                                     "hardcover",
//                                                     "digest",
//                                                     "graphic novel",
//                                                     "digital comic",
//                                                     "infinite comic"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2913",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b2914",
//                                                 "values": [
//                                                     "title",
//                                                     "modified",
//                                                     "startYear",
//                                                     "-title",
//                                                     "-modified",
//                                                     "-startYear"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2911",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b2912",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2910",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of series filtered by a character id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/characters/{characterId}/stories",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCharacterStoryCollection",
//                                     "responseClass": "StoryDataWrapper",
//                                     "notes": "Fetches lists of comic stories  featuring a specific character with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b29a1",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b29b3"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b29b2"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b29b1"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b29b0"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b29af"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b29ae"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b29ad"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "characterId",
//                                             "description": "The character ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b29ac",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only stories which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29ab",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only stories contained in the specified (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29aa",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only stories contained the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29a9",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only stories which take place during the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29a8",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only stories which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29a7",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29a5",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b29a6",
//                                                 "values": [
//                                                     "id",
//                                                     "modified",
//                                                     "-id",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29a3",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b29a4",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29a2",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of stories filtered by a character id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/comics",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getComicsCollection",
//                                     "responseClass": "ComicDataWrapper",
//                                     "notes": "Fetches lists of comics with optional filters. See notes on individual parameters below.",
//                                     "_id": "536cedd79ea65d632000000c",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "536cedd79ea65d6320000035"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "536cedd79ea65d6320000034"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "536cedd79ea65d6320000033"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "536cedd79ea65d6320000032"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "536cedd79ea65d6320000031"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "536cedd79ea65d6320000030"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "536cedd79ea65d632000002f"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "format",
//                                             "description": "Filter by the issue format (e.g. comic, digital comic, hardcover).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d632000002d",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cedd79ea65d632000002e",
//                                                 "values": [
//                                                     "comic",
//                                                     "magazine",
//                                                     "trade paperback",
//                                                     "hardcover",
//                                                     "digest",
//                                                     "graphic novel",
//                                                     "digital comic",
//                                                     "infinite comic"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "formatType",
//                                             "description": "Filter by the issue format type (comic or collection).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d632000002b",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cedd79ea65d632000002c",
//                                                 "values": [
//                                                     "comic",
//                                                     "collection"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "noVariants",
//                                             "description": "Exclude variants (alternate covers, secondary printings, director's cuts, etc.) from the result set.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000029",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cedd79ea65d632000002a",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateDescriptor",
//                                             "description": "Return comics within a predefined date range.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000027",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cedd79ea65d6320000028",
//                                                 "values": [
//                                                     "lastWeek",
//                                                     "thisWeek",
//                                                     "nextWeek",
//                                                     "thisMonth"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateRange",
//                                             "description": "Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000026",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "title",
//                                             "description": "Return only issues in series whose title matches the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000025",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "titleStartsWith",
//                                             "description": "Return only issues in series whose title starts with the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000024",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "startYear",
//                                             "description": "Return only issues in series whose start year matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000023",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issueNumber",
//                                             "description": "Return only issues in series whose issue number matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000022",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "diamondCode",
//                                             "description": "Filter by diamond code.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000021",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "digitalId",
//                                             "description": "Filter by digital comic id.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000020",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "upc",
//                                             "description": "Filter by UPC.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d632000001f",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "isbn",
//                                             "description": "Filter by ISBN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d632000001e",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "ean",
//                                             "description": "Filter by EAN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d632000001d",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issn",
//                                             "description": "Filter by ISSN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d632000001c",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "hasDigitalIssue",
//                                             "description": "Include only results which are available digitally.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d632000001a",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cedd79ea65d632000001b",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only comics which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000019",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only comics which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000018",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only comics which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000017",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only comics which are part of the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000016",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only comics which take place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000015",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only comics which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000014",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "sharedAppearances",
//                                             "description": "Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). Accepts a comma-separated list of ids.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000013",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "collaborators",
//                                             "description": "Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). Accepts a comma-separated list of ids.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000012",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d6320000010",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cedd79ea65d6320000011",
//                                                 "values": [
//                                                     "focDate",
//                                                     "onsaleDate",
//                                                     "title",
//                                                     "issueNumber",
//                                                     "modified",
//                                                     "-focDate",
//                                                     "-onsaleDate",
//                                                     "-title",
//                                                     "-issueNumber",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d632000000e",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "536cedd79ea65d632000000f",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cedd79ea65d632000000d",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of comics."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/comics/{comicId}",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getComicIndividual",
//                                     "responseClass": "ComicDataWrapper",
//                                     "notes": "This method fetches a single comic resource.  It is the canonical URI for any comic resource provided by the API.",
//                                     "_id": "536cedd79ea65d6320000007",
//                                     "errorResponses": [
//                                         {
//                                             "code": 404,
//                                             "reason": "Comic not found.",
//                                             "_id": "536cedd79ea65d6320000009"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "comicId",
//                                             "description": "A single comic.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "536cedd79ea65d6320000008",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         }
//                                     ],
//                                     "summary": "Fetches a single comic by id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/comics/{comicId}/characters",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getComicCharacterCollection",
//                                     "responseClass": "CharacterDataWrapper",
//                                     "notes": "Fetches lists of characters which appear in a specific comic with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b2802",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b2815"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b2814"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b2813"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b2812"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b2811"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b2810"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b280f"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "comicId",
//                                             "description": "The comic id.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b280e",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "name",
//                                             "description": "Return only characters matching the specified full character name (e.g. Spider-Man).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b280d",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Return characters with names that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b280c",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only characters which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b280b",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only characters which appear the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b280a",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only characters which appear comics that took place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2809",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only characters which appear the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2808",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2806",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b2807",
//                                                 "values": [
//                                                     "name",
//                                                     "modified",
//                                                     "-name",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2804",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b2805",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2803",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of characters filtered by a comic id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/comics/{comicId}/creators",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCreatorCollection",
//                                     "responseClass": "CreatorDataWrapper",
//                                     "notes": "Fetches lists of comic creators whose work appears in a specific comic, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b29e8",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b2a01"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b2a00"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b29ff"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b29fe"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b29fd"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b29fc"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b29fb"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "comicId",
//                                             "description": "The comic id.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b29fa",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "firstName",
//                                             "description": "Filter by creator first name (e.g. brian).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29f9",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "middleName",
//                                             "description": "Filter by creator middle name (e.g. Michael).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29f8",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "lastName",
//                                             "description": "Filter by creator last name (e.g. Bendis).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29f7",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "suffix",
//                                             "description": "Filter by suffix or honorific (e.g. Jr., Sr.).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29f6",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Filter by creator names that match critera (e.g. B, St L).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29f5",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "firstNameStartsWith",
//                                             "description": "Filter by creator first names that match critera (e.g. B, St L).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29f4",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "middleNameStartsWith",
//                                             "description": "Filter by creator middle names that match critera (e.g. Mi).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29f3",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "lastNameStartsWith",
//                                             "description": "Filter by creator last names that match critera (e.g. Ben).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29f2",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only creators which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29f1",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only creators who worked on in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29f0",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only creators who worked on the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29ef",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only creators who worked on the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29ee",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29ec",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b29ed",
//                                                 "values": [
//                                                     "lastName",
//                                                     "firstName",
//                                                     "middleName",
//                                                     "suffix",
//                                                     "modified",
//                                                     "-lastName",
//                                                     "-firstName",
//                                                     "-middleName",
//                                                     "-suffix",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29ea",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b29eb",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29e9",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of creators filtered by a comic id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/comics/{comicId}/events",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getIssueEventsCollection",
//                                     "responseClass": "EventDataWrapper",
//                                     "notes": "Fetches lists of events in which a specific comic appears, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b2a04",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b2a18"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b2a17"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a16"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a15"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a14"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b2a13"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b2a12"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "comicId",
//                                             "description": "The comic ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b2a11",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "name",
//                                             "description": "Filter the event list by name.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a10",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Return events with names that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a0f",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only events which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a0e",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only events which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a0d",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only events which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a0c",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only events which are part of the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a0b",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only events which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a0a",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a08",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b2a09",
//                                                 "values": [
//                                                     "name",
//                                                     "startDate",
//                                                     "modified",
//                                                     "-name",
//                                                     "-startDate",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a06",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b2a07",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a05",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of events filtered by a comic id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/comics/{comicId}/stories",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getComicStoryCollection",
//                                     "responseClass": "StoryDataWrapper",
//                                     "notes": "Fetches lists of comic stories in a specific comic issue, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b28fa",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b290c"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b290b"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b290a"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b2909"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b2908"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b2907"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b2906"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "comicId",
//                                             "description": "The comic ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b2905",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only stories which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2904",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only stories contained the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2903",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only stories which take place during the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2902",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only stories which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2901",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only stories which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2900",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28fe",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b28ff",
//                                                 "values": [
//                                                     "id",
//                                                     "modified",
//                                                     "-id",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28fc",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b28fd",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28fb",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of stories filtered by a comic id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/creators",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCreatorCollection",
//                                     "responseClass": "CreatorDataWrapper",
//                                     "notes": "Fetches lists of comic creators with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b27e6",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b27ff"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b27fe"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b27fd"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b27fc"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b27fb"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b27fa"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b27f9"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "firstName",
//                                             "description": "Filter by creator first name (e.g. Brian).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27f8",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "middleName",
//                                             "description": "Filter by creator middle name (e.g. Michael).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27f7",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "lastName",
//                                             "description": "Filter by creator last name (e.g. Bendis).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27f6",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "suffix",
//                                             "description": "Filter by suffix or honorific (e.g. Jr., Sr.).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27f5",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Filter by creator names that match critera (e.g. B, St L).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27f4",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "firstNameStartsWith",
//                                             "description": "Filter by creator first names that match critera (e.g. B, St L).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27f3",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "middleNameStartsWith",
//                                             "description": "Filter by creator middle names that match critera (e.g. Mi).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27f2",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "lastNameStartsWith",
//                                             "description": "Filter by creator last names that match critera (e.g. Ben).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27f1",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only creators which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27f0",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only creators who worked on in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27ef",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only creators who worked on the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27ee",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only creators who worked on comics that took place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27ed",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only creators who worked on the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27ec",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27ea",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b27eb",
//                                                 "values": [
//                                                     "lastName",
//                                                     "firstName",
//                                                     "middleName",
//                                                     "suffix",
//                                                     "modified",
//                                                     "-lastName",
//                                                     "-firstName",
//                                                     "-middleName",
//                                                     "-suffix",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27e8",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b27e9",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27e7",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of creators."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/creators/{creatorId}",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCreatorIndividual",
//                                     "responseClass": "CreatorDataWrapper",
//                                     "notes": "This method fetches a single creator resource.  It is the canonical URI for any creator resource provided by the API.",
//                                     "_id": "5318a13f480b07a76f3b2953",
//                                     "errorResponses": [
//                                         {
//                                             "code": 404,
//                                             "reason": "Creator not found.",
//                                             "_id": "5318a13f480b07a76f3b2955"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "creatorId",
//                                             "description": "A single creator id.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b2954",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         }
//                                     ],
//                                     "summary": "Fetches a single creator by id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/creators/{creatorId}/comics",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getComicsCollection",
//                                     "responseClass": "ComicDataWrapper",
//                                     "notes": "Fetches lists of comics in which the work of a specific creator appears, with optional filters. See notes on individual parameters below.",
//                                     "_id": "536cede2b44b7e6d20000060",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "536cede2b44b7e6d20000089"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "536cede2b44b7e6d20000088"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "536cede2b44b7e6d20000087"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "536cede2b44b7e6d20000086"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "536cede2b44b7e6d20000085"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "536cede2b44b7e6d20000084"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "536cede2b44b7e6d20000083"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "creatorId",
//                                             "description": "The creator ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "536cede2b44b7e6d20000082",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "format",
//                                             "description": "Filter by the issue format (e.g. comic, digital comic, hardcover).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000080",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000081",
//                                                 "values": [
//                                                     "comic",
//                                                     "magazine",
//                                                     "trade paperback",
//                                                     "hardcover",
//                                                     "digest",
//                                                     "graphic novel",
//                                                     "digital comic",
//                                                     "infinite comic"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "formatType",
//                                             "description": "Filter by the issue format type (comic or collection).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000007e",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d2000007f",
//                                                 "values": [
//                                                     "comic",
//                                                     "collection"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "noVariants",
//                                             "description": "Exclude variant comics from the result set.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000007c",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d2000007d",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateDescriptor",
//                                             "description": "Return comics within a predefined date range.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000007a",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d2000007b",
//                                                 "values": [
//                                                     "lastWeek",
//                                                     "thisWeek",
//                                                     "nextWeek",
//                                                     "thisMonth"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateRange",
//                                             "description": "Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000079",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "title",
//                                             "description": "Return only issues in series whose title matches the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000078",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "titleStartsWith",
//                                             "description": "Return only issues in series whose title starts with the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000077",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "startYear",
//                                             "description": "Return only issues in series whose start year matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000076",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issueNumber",
//                                             "description": "Return only issues in series whose issue number matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000075",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "diamondCode",
//                                             "description": "Filter by diamond code.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000074",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "digitalId",
//                                             "description": "Filter by digital comic id.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000073",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "upc",
//                                             "description": "Filter by UPC.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000072",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "isbn",
//                                             "description": "Filter by ISBN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000071",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "ean",
//                                             "description": "Filter by EAN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000070",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issn",
//                                             "description": "Filter by ISSN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000006f",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "hasDigitalIssue",
//                                             "description": "Include only results which are available digitally.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000006d",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d2000006e",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only comics which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000006c",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only comics which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000006b",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only comics which are part of the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000006a",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only comics which take place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000069",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only comics which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000068",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "sharedAppearances",
//                                             "description": "Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000067",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "collaborators",
//                                             "description": "Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000066",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000064",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000065",
//                                                 "values": [
//                                                     "focDate",
//                                                     "onsaleDate",
//                                                     "title",
//                                                     "issueNumber",
//                                                     "modified",
//                                                     "-focDate",
//                                                     "-onsaleDate",
//                                                     "-title",
//                                                     "-issueNumber",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000062",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "536cede2b44b7e6d20000063",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000061",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of comics filtered by a creator id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/creators/{creatorId}/events",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCreatorEventsCollection",
//                                     "responseClass": "EventDataWrapper",
//                                     "notes": "Fetches lists of events featuring the work of a specific creator with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b281d",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b2831"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b2830"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b282f"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b282e"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b282d"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b282c"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b282b"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "creatorId",
//                                             "description": "The creator ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b282a",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "name",
//                                             "description": "Filter the event list by name.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2829",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Return events with names that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2828",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only events which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2827",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only events which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2826",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only events which are part of the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2825",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only events which take place in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2824",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only events which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2823",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2821",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b2822",
//                                                 "values": [
//                                                     "name",
//                                                     "startDate",
//                                                     "modified",
//                                                     "-name",
//                                                     "-startDate",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b281f",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b2820",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b281e",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of events filtered by a creator id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/creators/{creatorId}/series",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCreatorSeriesCollection",
//                                     "responseClass": "SeriesDataWrapper",
//                                     "notes": "Fetches lists of comic series in which a specific creator's work appears, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b2a89",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b2aa2"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b2aa1"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b2aa0"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a9f"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a9e"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b2a9d"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b2a9c"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "creatorId",
//                                             "description": "The creator ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b2a9b",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "title",
//                                             "description": "Filter by series title.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a9a",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "titleStartsWith",
//                                             "description": "Return series with titles that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a99",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "startYear",
//                                             "description": "Return only series matching the specified start year.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a98",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only series which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a97",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only series which contain the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a96",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only series which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a95",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a94",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only series which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a93",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "seriesType",
//                                             "description": "Filter the series by publication frequency type.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a91",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b2a92",
//                                                 "values": [
//                                                     "collection",
//                                                     "one shot",
//                                                     "limited",
//                                                     "ongoing"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "contains",
//                                             "description": "Return only series containing one or more comics with the specified format.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a8f",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b2a90",
//                                                 "values": [
//                                                     "comic",
//                                                     "magazine",
//                                                     "trade paperback",
//                                                     "hardcover",
//                                                     "digest",
//                                                     "graphic novel",
//                                                     "digital comic",
//                                                     "infinite comic"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a8d",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b2a8e",
//                                                 "values": [
//                                                     "title",
//                                                     "modified",
//                                                     "startYear",
//                                                     "-title",
//                                                     "-modified",
//                                                     "-startYear"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a8b",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b2a8c",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a8a",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of series filtered by a creator id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/creators/{creatorId}/stories",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCreatorStoryCollection",
//                                     "responseClass": "StoryDataWrapper",
//                                     "notes": "Fetches lists of comic stories by a specific creator with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b2a74",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b2a86"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b2a85"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a84"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a83"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a82"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b2a81"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b2a80"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "creatorId",
//                                             "description": "The ID of the creator.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b2a7f",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only stories which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a7e",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only stories contained in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a7d",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only stories contained the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a7c",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only stories which take place during the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a7b",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only stories which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a7a",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a78",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b2a79",
//                                                 "values": [
//                                                     "id",
//                                                     "modified",
//                                                     "-id",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a76",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b2a77",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a75",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of stories filtered by a creator id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/events",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getEventsCollection",
//                                     "responseClass": "EventDataWrapper",
//                                     "notes": "Fetches lists of events with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b27cf",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b27e3"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b27e2"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b27e1"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b27e0"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b27df"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b27de"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b27dd"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "name",
//                                             "description": "Return only events which match the specified name.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27dc",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Return events with names that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27db",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only events which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27da",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only events which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27d9",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only events which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27d8",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only events which are part of the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27d7",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only events which take place in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27d6",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only events which take place in the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27d5",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27d3",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b27d4",
//                                                 "values": [
//                                                     "name",
//                                                     "startDate",
//                                                     "modified",
//                                                     "-name",
//                                                     "-startDate",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27d1",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b27d2",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27d0",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of events."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/events/{eventId}",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getEventIndividual",
//                                     "responseClass": "EventDataWrapper",
//                                     "notes": "This method fetches a single event resource.  It is the canonical URI for any event resource provided by the API.",
//                                     "_id": "5318a13e480b07a76f3b27a9",
//                                     "errorResponses": [
//                                         {
//                                             "code": 404,
//                                             "reason": "Event not found.",
//                                             "_id": "5318a13e480b07a76f3b27ab"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "eventId",
//                                             "description": "A single event.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b27aa",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         }
//                                     ],
//                                     "summary": "Fetches a single event by id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/events/{eventId}/characters",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getEventCharacterCollection",
//                                     "responseClass": "CharacterDataWrapper",
//                                     "notes": "Fetches lists of characters which appear in a specific event, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b29d2",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b29e5"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b29e4"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b29e3"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b29e2"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b29e1"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b29e0"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b29df"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "eventId",
//                                             "description": "The event ID",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b29de",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "name",
//                                             "description": "Return only characters matching the specified full character name (e.g. Spider-Man).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29dd",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Return characters with names that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29dc",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only characters which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29db",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only characters which appear in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29da",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only characters which appear the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29d9",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only characters which appear the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29d8",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29d6",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b29d7",
//                                                 "values": [
//                                                     "name",
//                                                     "modified",
//                                                     "-name",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29d4",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b29d5",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29d3",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of characters filtered by an event id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/events/{eventId}/comics",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getComicsCollection",
//                                     "responseClass": "ComicDataWrapper",
//                                     "notes": "Fetches lists of comics which take place during a specific event, with optional filters. See notes on individual parameters below.",
//                                     "_id": "536cede2b44b7e6d20000007",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "536cede2b44b7e6d20000031"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "536cede2b44b7e6d20000030"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "536cede2b44b7e6d2000002f"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "536cede2b44b7e6d2000002e"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "536cede2b44b7e6d2000002d"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "536cede2b44b7e6d2000002c"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "536cede2b44b7e6d2000002b"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "eventId",
//                                             "description": "The event id.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "536cede2b44b7e6d2000002a",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "format",
//                                             "description": "Filter by the issue format (e.g. comic, digital comic, hardcover).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000028",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000029",
//                                                 "values": [
//                                                     "comic",
//                                                     "magazine",
//                                                     "trade paperback",
//                                                     "hardcover",
//                                                     "digest",
//                                                     "graphic novel",
//                                                     "digital comic",
//                                                     "infinite comic"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "formatType",
//                                             "description": "Filter by the issue format type (comic or collection).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000026",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000027",
//                                                 "values": [
//                                                     "comic",
//                                                     "collection"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "noVariants",
//                                             "description": "Exclude variant comics from the result set.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000024",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000025",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateDescriptor",
//                                             "description": "Return comics within a predefined date range.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000022",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000023",
//                                                 "values": [
//                                                     "lastWeek",
//                                                     "thisWeek",
//                                                     "nextWeek",
//                                                     "thisMonth"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateRange",
//                                             "description": "Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000021",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "title",
//                                             "description": "Return only issues in series whose title matches the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000020",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "titleStartsWith",
//                                             "description": "Return only issues in series whose title starts with the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000001f",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "startYear",
//                                             "description": "Return only issues in series whose start year matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000001e",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issueNumber",
//                                             "description": "Return only issues in series whose issue number matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000001d",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "diamondCode",
//                                             "description": "Filter by diamond code.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000001c",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "digitalId",
//                                             "description": "Filter by digital comic id.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000001b",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "upc",
//                                             "description": "Filter by UPC.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000001a",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "isbn",
//                                             "description": "Filter by ISBN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000019",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "ean",
//                                             "description": "Filter by EAN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000018",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issn",
//                                             "description": "Filter by ISSN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000017",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "hasDigitalIssue",
//                                             "description": "Include only results which are available digitally.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000015",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000016",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only comics which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000014",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only comics which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000013",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only comics which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000012",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only comics which are part of the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000011",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only comics which take place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000010",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only comics which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000000f",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "sharedAppearances",
//                                             "description": "Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000000e",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "collaborators",
//                                             "description": "Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000000d",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000000b",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d2000000c",
//                                                 "values": [
//                                                     "focDate",
//                                                     "onsaleDate",
//                                                     "title",
//                                                     "issueNumber",
//                                                     "modified",
//                                                     "-focDate",
//                                                     "-onsaleDate",
//                                                     "-title",
//                                                     "-issueNumber",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000009",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "536cede2b44b7e6d2000000a",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000008",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of comics filtered by an event id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/events/{eventId}/creators",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCreatorCollection",
//                                     "responseClass": "CreatorDataWrapper",
//                                     "notes": "Fetches lists of comic creators whose work appears in a specific event, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b296e",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b2987"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b2986"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b2985"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b2984"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b2983"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b2982"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b2981"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "eventId",
//                                             "description": "The event ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b2980",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "firstName",
//                                             "description": "Filter by creator first name (e.g. brian).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b297f",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "middleName",
//                                             "description": "Filter by creator middle name (e.g. Michael).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b297e",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "lastName",
//                                             "description": "Filter by creator last name (e.g. Bendis).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b297d",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "suffix",
//                                             "description": "Filter by suffix or honorific (e.g. Jr., Sr.).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b297c",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Filter by creator names that match critera (e.g. B, St L).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b297b",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "firstNameStartsWith",
//                                             "description": "Filter by creator first names that match critera (e.g. B, St L).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b297a",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "middleNameStartsWith",
//                                             "description": "Filter by creator middle names that match critera (e.g. Mi).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2979",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "lastNameStartsWith",
//                                             "description": "Filter by creator last names that match critera (e.g. Ben).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2978",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only creators which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2977",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only creators who worked on in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2976",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only creators who worked on the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2975",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only creators who worked on the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2974",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2972",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b2973",
//                                                 "values": [
//                                                     "lastName",
//                                                     "firstName",
//                                                     "middleName",
//                                                     "suffix",
//                                                     "modified",
//                                                     "-lastName",
//                                                     "-firstName",
//                                                     "-middleName",
//                                                     "-suffix",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2970",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b2971",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b296f",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of creators filtered by an event id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/events/{eventId}/series",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getEventSeriesCollection",
//                                     "responseClass": "SeriesDataWrapper",
//                                     "notes": "Fetches lists of comic series in which a specific event takes place, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b29b6",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b29cf"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b29ce"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b29cd"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b29cc"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b29cb"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b29ca"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b29c9"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "eventId",
//                                             "description": "The event ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b29c8",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "title",
//                                             "description": "Filter by series title.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29c7",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "titleStartsWith",
//                                             "description": "Return series with titles that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29c6",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "startYear",
//                                             "description": "Return only series matching the specified start year.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29c5",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only series which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29c4",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only series which contain the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29c3",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only series which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29c2",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only series which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29c1",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only series which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29c0",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "seriesType",
//                                             "description": "Filter the series by publication frequency type.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29be",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b29bf",
//                                                 "values": [
//                                                     "collection",
//                                                     "one shot",
//                                                     "limited",
//                                                     "ongoing"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "contains",
//                                             "description": "Return only series containing one or more comics with the specified format.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29bc",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b29bd",
//                                                 "values": [
//                                                     "comic",
//                                                     "magazine",
//                                                     "trade paperback",
//                                                     "hardcover",
//                                                     "digest",
//                                                     "graphic novel",
//                                                     "digital comic",
//                                                     "infinite comic"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29ba",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b29bb",
//                                                 "values": [
//                                                     "title",
//                                                     "modified",
//                                                     "startYear",
//                                                     "-title",
//                                                     "-modified",
//                                                     "-startYear"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29b8",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b29b9",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b29b7",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of series filtered by an event id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/events/{eventId}/stories",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getEventStoryCollection",
//                                     "responseClass": "StoryDataWrapper",
//                                     "notes": "Fetches lists of comic stories from a specific event, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b2a20",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b2a32"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b2a31"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a30"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a2f"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a2e"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b2a2d"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b2a2c"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "eventId",
//                                             "description": "The ID of the event.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b2a2b",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only stories which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a2a",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only stories contained in the specified (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a29",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only stories contained the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a28",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only stories which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a27",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only stories which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a26",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a24",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b2a25",
//                                                 "values": [
//                                                     "id",
//                                                     "modified",
//                                                     "-id",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a22",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b2a23",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a21",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of stories filtered by an event id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/series",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getSeriesCollection",
//                                     "responseClass": "SeriesDataWrapper",
//                                     "notes": "Fetches lists of comic series with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b27b3",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b27cc"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b27cb"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b27ca"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b27c9"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b27c8"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b27c7"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b27c6"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "title",
//                                             "description": "Return only series matching the specified title.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27c5",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "titleStartsWith",
//                                             "description": "Return series with titles that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27c4",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "startYear",
//                                             "description": "Return only series matching the specified start year.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27c3",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only series which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27c2",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only series which contain the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27c1",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only series which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27c0",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27bf",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only series which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27be",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only series which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27bd",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "seriesType",
//                                             "description": "Filter the series by publication frequency type.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27bb",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b27bc",
//                                                 "values": [
//                                                     "collection",
//                                                     "one shot",
//                                                     "limited",
//                                                     "ongoing"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "contains",
//                                             "description": "Return only series containing one or more comics with the specified format.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27b9",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b27ba",
//                                                 "values": [
//                                                     "comic",
//                                                     "magazine",
//                                                     "trade paperback",
//                                                     "hardcover",
//                                                     "digest",
//                                                     "graphic novel",
//                                                     "digital comic",
//                                                     "infinite comic"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27b7",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b27b8",
//                                                 "values": [
//                                                     "title",
//                                                     "modified",
//                                                     "startYear",
//                                                     "-title",
//                                                     "-modified",
//                                                     "-startYear"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27b5",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b27b6",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b27b4",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of series."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/series/{seriesId}",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getSeriesIndividual",
//                                     "responseClass": "SeriesDataWrapper",
//                                     "notes": "This method fetches a single comic series resource.  It is the canonical URI for any comic series resource provided by the API.",
//                                     "_id": "5318a13e480b07a76f3b2834",
//                                     "errorResponses": [
//                                         {
//                                             "code": 404,
//                                             "reason": "Series not found.",
//                                             "_id": "5318a13e480b07a76f3b2836"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "seriesId",
//                                             "description": "Filter by series title.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b2835",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         }
//                                     ],
//                                     "summary": "Fetches a single comic series by id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/series/{seriesId}/characters",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getSeriesCharacterWrapper",
//                                     "responseClass": "CharacterDataWrapper",
//                                     "notes": "Fetches lists of characters which appear in specific series, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b2839",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b284c"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b284b"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b284a"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b2849"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b2848"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b2847"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b2846"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "seriesId",
//                                             "description": "The series id.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b2845",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "name",
//                                             "description": "Return only characters matching the specified full character name (e.g. Spider-Man).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2844",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Return characters with names that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2843",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only characters which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2842",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only characters which appear in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2841",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only characters which appear comics that took place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2840",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only characters which appear the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b283f",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b283d",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b283e",
//                                                 "values": [
//                                                     "name",
//                                                     "modified",
//                                                     "-name",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b283b",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b283c",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b283a",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of characters filtered by a series id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/series/{seriesId}/comics",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getComicsCollection",
//                                     "responseClass": "ComicDataWrapper",
//                                     "notes": "Fetches lists of comics which are published as part of a specific series, with optional filters. See notes on individual parameters below.",
//                                     "_id": "536cede2b44b7e6d2000008c",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "536cede2b44b7e6d200000b5"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "536cede2b44b7e6d200000b4"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "536cede2b44b7e6d200000b3"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "536cede2b44b7e6d200000b2"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "536cede2b44b7e6d200000b1"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "536cede2b44b7e6d200000b0"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "536cede2b44b7e6d200000af"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "seriesId",
//                                             "description": "The series ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "536cede2b44b7e6d200000ae",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "format",
//                                             "description": "Filter by the issue format (e.g. comic, digital comic, hardcover).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000ac",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d200000ad",
//                                                 "values": [
//                                                     "comic",
//                                                     "magazine",
//                                                     "trade paperback",
//                                                     "hardcover",
//                                                     "digest",
//                                                     "graphic novel",
//                                                     "digital comic",
//                                                     "infinite comic"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "formatType",
//                                             "description": "Filter by the issue format type (comic or collection).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000aa",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d200000ab",
//                                                 "values": [
//                                                     "comic",
//                                                     "collection"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "noVariants",
//                                             "description": "Exclude variant comics from the result set.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000a8",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d200000a9",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateDescriptor",
//                                             "description": "Return comics within a predefined date range.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000a6",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d200000a7",
//                                                 "values": [
//                                                     "lastWeek",
//                                                     "thisWeek",
//                                                     "nextWeek",
//                                                     "thisMonth"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateRange",
//                                             "description": "Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000a5",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "title",
//                                             "description": "Return only issues in series whose title matches the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000a4",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "titleStartsWith",
//                                             "description": "Return only issues in series whose title starts with the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000a3",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "startYear",
//                                             "description": "Return only issues in series whose start year matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000a2",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issueNumber",
//                                             "description": "Return only issues in series whose issue number matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000a1",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "diamondCode",
//                                             "description": "Filter by diamond code.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000a0",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "digitalId",
//                                             "description": "Filter by digital comic id.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000009f",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "upc",
//                                             "description": "Filter by UPC.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000009e",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "isbn",
//                                             "description": "Filter by ISBN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000009d",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "ean",
//                                             "description": "Filter by EAN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000009c",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issn",
//                                             "description": "Filter by ISSN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000009b",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "hasDigitalIssue",
//                                             "description": "Include only results which are available digitally.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000099",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d2000009a",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only comics which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000098",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only comics which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000097",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only comics which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000096",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only comics which take place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000095",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only comics which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000094",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "sharedAppearances",
//                                             "description": "Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000093",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "collaborators",
//                                             "description": "Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000092",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d20000090",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d20000091",
//                                                 "values": [
//                                                     "focDate",
//                                                     "onsaleDate",
//                                                     "title",
//                                                     "issueNumber",
//                                                     "modified",
//                                                     "-focDate",
//                                                     "-onsaleDate",
//                                                     "-title",
//                                                     "-issueNumber",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000008e",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "536cede2b44b7e6d2000008f",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d2000008d",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of comics filtered by a series id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/series/{seriesId}/creators",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCreatorCollection",
//                                     "responseClass": "CreatorDataWrapper",
//                                     "notes": "Fetches lists of comic creators whose work appears in a specific series, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b2865",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b287e"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b287d"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b287c"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b287b"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b287a"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b2879"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b2878"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "seriesId",
//                                             "description": "The series ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b2877",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "firstName",
//                                             "description": "Filter by creator first name (e.g. brian).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2876",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "middleName",
//                                             "description": "Filter by creator middle name (e.g. Michael).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2875",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "lastName",
//                                             "description": "Filter by creator last name (e.g. Bendis).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2874",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "suffix",
//                                             "description": "Filter by suffix or honorific (e.g. Jr., Sr.).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2873",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Filter by creator names that match critera (e.g. B, St L).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2872",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "firstNameStartsWith",
//                                             "description": "Filter by creator first names that match critera (e.g. B, St L).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2871",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "middleNameStartsWith",
//                                             "description": "Filter by creator middle names that match critera (e.g. Mi).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2870",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "lastNameStartsWith",
//                                             "description": "Filter by creator last names that match critera (e.g. Ben).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b286f",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only creators which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b286e",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only creators who worked on in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b286d",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only creators who worked on comics that took place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b286c",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only creators who worked on the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b286b",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2869",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b286a",
//                                                 "values": [
//                                                     "lastName",
//                                                     "firstName",
//                                                     "middleName",
//                                                     "suffix",
//                                                     "modified",
//                                                     "-lastName",
//                                                     "-firstName",
//                                                     "-middleName",
//                                                     "-suffix",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2867",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b2868",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2866",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of creators filtered by a series id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/series/{seriesId}/events",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getEventsCollection",
//                                     "responseClass": "EventDataWrapper",
//                                     "notes": "Fetches lists of events which occur in a specific series, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b2a5d",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b2a71"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b2a70"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a6f"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a6e"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b2a6d"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b2a6c"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b2a6b"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "seriesId",
//                                             "description": "The series ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b2a6a",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "name",
//                                             "description": "Filter the event list by name.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a69",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Return events with names that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a68",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only events which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a67",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only events which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a66",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only events which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a65",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only events which take place in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a64",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "stories",
//                                             "description": "Return only events which contain the specified stories (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a63",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a61",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b2a62",
//                                                 "values": [
//                                                     "name",
//                                                     "startDate",
//                                                     "modified",
//                                                     "-name",
//                                                     "-startDate",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a5f",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b2a60",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2a5e",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of events filtered by a series id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/series/{seriesId}/stories",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getSeriesStoryCollection",
//                                     "responseClass": "StoryDataWrapper",
//                                     "notes": "Fetches lists of comic stories from a specific series with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b2896",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b28a8"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b28a7"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b28a6"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b28a5"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b28a4"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b28a3"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b28a2"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "seriesId",
//                                             "description": "The series ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b28a1",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only stories which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28a0",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only stories contained in the specified (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b289f",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only stories which take place during the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b289e",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only stories which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b289d",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only stories which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b289c",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b289a",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b289b",
//                                                 "values": [
//                                                     "id",
//                                                     "modified",
//                                                     "-id",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2898",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b2899",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2897",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of stories filtered by a series id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/stories",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getStoryCollection",
//                                     "responseClass": "StoryDataWrapper",
//                                     "notes": "Fetches lists of comic stories with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b2881",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b2893"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b2892"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b2891"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b2890"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b288f"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b288e"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b288d"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only stories which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b288c",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only stories contained in the specified (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b288b",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only stories contained the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b288a",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only stories which take place during the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2889",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only stories which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2888",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only stories which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2887",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2885",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b2886",
//                                                 "values": [
//                                                     "id",
//                                                     "modified",
//                                                     "-id",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2883",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b2884",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2882",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of stories."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/stories/{storyId}",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getStoryIndividual",
//                                     "responseClass": "StoryDataWrapper",
//                                     "notes": "This method fetches a single comic story resource.  It is the canonical URI for any comic story resource provided by the API.",
//                                     "_id": "5318a13f480b07a76f3b2a1b",
//                                     "errorResponses": [
//                                         {
//                                             "code": 404,
//                                             "reason": "Story not found.",
//                                             "_id": "5318a13f480b07a76f3b2a1d"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "storyId",
//                                             "description": "Filter by story id.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b2a1c",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         }
//                                     ],
//                                     "summary": "Fetches a single comic story by id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/stories/{storyId}/characters",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCreatorCollection",
//                                     "responseClass": "CharacterDataWrapper",
//                                     "notes": "Fetches lists of comic characters appearing in a single story, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b284f",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b2862"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b2861"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b2860"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b285f"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b285e"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b285d"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b285c"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "storyId",
//                                             "description": "The story ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b285b",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "name",
//                                             "description": "Return only characters matching the specified full character name (e.g. Spider-Man).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b285a",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Return characters with names that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2859",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only characters which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2858",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only characters which appear in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2857",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only characters which appear the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2856",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only characters which appear comics that took place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2855",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2853",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b2854",
//                                                 "values": [
//                                                     "name",
//                                                     "modified",
//                                                     "-name",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2851",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b2852",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b2850",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of characters filtered by a story id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/stories/{storyId}/comics",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getComicsCollection",
//                                     "responseClass": "ComicDataWrapper",
//                                     "notes": "Fetches lists of comics in which a specific story appears, with optional filters. See notes on individual parameters below.",
//                                     "_id": "536cede2b44b7e6d200000b8",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "536cede2b44b7e6d200000e1"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "536cede2b44b7e6d200000e0"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "536cede2b44b7e6d200000df"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "536cede2b44b7e6d200000de"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "536cede2b44b7e6d200000dd"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "536cede2b44b7e6d200000dc"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "536cede2b44b7e6d200000db"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "storyId",
//                                             "description": "The story ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "536cede2b44b7e6d200000da",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "format",
//                                             "description": "Filter by the issue format (e.g. comic, digital comic, hardcover).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000d8",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d200000d9",
//                                                 "values": [
//                                                     "comic",
//                                                     "magazine",
//                                                     "trade paperback",
//                                                     "hardcover",
//                                                     "digest",
//                                                     "graphic novel",
//                                                     "digital comic",
//                                                     "infinite comic"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "formatType",
//                                             "description": "Filter by the issue format type (comic or collection).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000d6",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d200000d7",
//                                                 "values": [
//                                                     "comic",
//                                                     "collection"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "noVariants",
//                                             "description": "Exclude variant comics from the result set.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000d4",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d200000d5",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateDescriptor",
//                                             "description": "Return comics within a predefined date range.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000d2",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d200000d3",
//                                                 "values": [
//                                                     "lastWeek",
//                                                     "thisWeek",
//                                                     "nextWeek",
//                                                     "thisMonth"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "dateRange",
//                                             "description": "Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000d1",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "title",
//                                             "description": "Return only issues in series whose title matches the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000d0",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "titleStartsWith",
//                                             "description": "Return only issues in series whose title starts with the input.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000cf",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "startYear",
//                                             "description": "Return only issues in series whose start year matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000ce",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issueNumber",
//                                             "description": "Return only issues in series whose issue number matches the input.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000cd",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "diamondCode",
//                                             "description": "Filter by diamond code.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000cc",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "digitalId",
//                                             "description": "Filter by digital comic id.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000cb",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "upc",
//                                             "description": "Filter by UPC.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000ca",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "isbn",
//                                             "description": "Filter by ISBN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000c9",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "ean",
//                                             "description": "Filter by EAN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000c8",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "issn",
//                                             "description": "Filter by ISSN.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000c7",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "hasDigitalIssue",
//                                             "description": "Include only results which are available digitally.",
//                                             "dataType": "boolean",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000c5",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d200000c6",
//                                                 "values": [
//                                                     "true"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only comics which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000c4",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only comics which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000c3",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only comics which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000c2",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only comics which are part of the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000c1",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only comics which take place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000c0",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "sharedAppearances",
//                                             "description": "Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000bf",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "collaborators",
//                                             "description": "Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000be",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000bc",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "536cede2b44b7e6d200000bd",
//                                                 "values": [
//                                                     "focDate",
//                                                     "onsaleDate",
//                                                     "title",
//                                                     "issueNumber",
//                                                     "modified",
//                                                     "-focDate",
//                                                     "-onsaleDate",
//                                                     "-title",
//                                                     "-issueNumber",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000ba",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "536cede2b44b7e6d200000bb",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "536cede2b44b7e6d200000b9",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of comics filtered by a story id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/stories/{storyId}/creators",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getCreatorCollection",
//                                     "responseClass": "CreatorDataWrapper",
//                                     "notes": "Fetches lists of comic creators whose work appears in a specific story, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b28c7",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b28e0"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b28df"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b28de"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b28dd"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b28dc"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b28db"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b28da"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "storyId",
//                                             "description": "The story ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b28d9",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "firstName",
//                                             "description": "Filter by creator first name (e.g. brian).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28d8",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "middleName",
//                                             "description": "Filter by creator middle name (e.g. Michael).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28d7",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "lastName",
//                                             "description": "Filter by creator last name (e.g. Bendis).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28d6",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "suffix",
//                                             "description": "Filter by suffix or honorific (e.g. Jr., Sr.).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28d5",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Filter by creator names that match critera (e.g. B, St L).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28d4",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "firstNameStartsWith",
//                                             "description": "Filter by creator first names that match critera (e.g. B, St L).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28d3",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "middleNameStartsWith",
//                                             "description": "Filter by creator middle names that match critera (e.g. Mi).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28d2",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "lastNameStartsWith",
//                                             "description": "Filter by creator last names that match critera (e.g. Ben).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28d1",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only creators which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28d0",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only creators who worked on in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28cf",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only creators who worked on the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28ce",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only creators who worked on comics that took place in the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28cd",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28cb",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b28cc",
//                                                 "values": [
//                                                     "lastName",
//                                                     "firstName",
//                                                     "middleName",
//                                                     "suffix",
//                                                     "modified",
//                                                     "-lastName",
//                                                     "-firstName",
//                                                     "-middleName",
//                                                     "-suffix",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28c9",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b28ca",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28c8",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of creators filtered by a story id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/stories/{storyId}/events",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getEventsCollection",
//                                     "responseClass": "EventDataWrapper",
//                                     "notes": "Fetches lists of events in which a specific story appears, with optional filters. See notes on individual parameters below.",
//                                     "_id": "5318a13f480b07a76f3b298a",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13f480b07a76f3b299e"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13f480b07a76f3b299d"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13f480b07a76f3b299c"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13f480b07a76f3b299b"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13f480b07a76f3b299a"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13f480b07a76f3b2999"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13f480b07a76f3b2998"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "storyId",
//                                             "description": "The story ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13f480b07a76f3b2997",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "name",
//                                             "description": "Filter the event list by name.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2996",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "nameStartsWith",
//                                             "description": "Return events with names that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2995",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only events which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2994",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only events which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2993",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only events which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2992",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "series",
//                                             "description": "Return only events which are part of the specified series (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2991",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only events which take place in the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b2990",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b298e",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13f480b07a76f3b298f",
//                                                 "values": [
//                                                     "name",
//                                                     "startDate",
//                                                     "modified",
//                                                     "-name",
//                                                     "-startDate",
//                                                     "-modified"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b298c",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13f480b07a76f3b298d",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13f480b07a76f3b298b",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of events filtered by a story id."
//                                 }
//                             ]
//                         },
//                         {
//                             "path": "/v1/public/stories/{storyId}/series",
//                             "description": "",
//                             "operations": [
//                                 {
//                                     "httpMethod": "GET",
//                                     "nickname": "getStorySeriesCollection",
//                                     "responseClass": "SeriesDataWrapper",
//                                     "notes": "Fetches lists of comic series in which the specified story takes place. See notes on individual parameters below.",
//                                     "_id": "5318a13e480b07a76f3b28ab",
//                                     "errorResponses": [
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit greater than 100.",
//                                             "_id": "5318a13e480b07a76f3b28c4"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Limit invalid or below 1.",
//                                             "_id": "5318a13e480b07a76f3b28c3"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized parameter.",
//                                             "_id": "5318a13e480b07a76f3b28c2"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Empty parameter.",
//                                             "_id": "5318a13e480b07a76f3b28c1"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid or unrecognized ordering parameter.",
//                                             "_id": "5318a13e480b07a76f3b28c0"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Too many values sent to a multi-value list filter.",
//                                             "_id": "5318a13e480b07a76f3b28bf"
//                                         },
//                                         {
//                                             "code": 409,
//                                             "reason": "Invalid value passed to filter.",
//                                             "_id": "5318a13e480b07a76f3b28be"
//                                         }
//                                     ],
//                                     "parameters": [
//                                         {
//                                             "name": "storyId",
//                                             "description": "The story ID.",
//                                             "dataType": "int",
//                                             "paramType": "path",
//                                             "_id": "5318a13e480b07a76f3b28bd",
//                                             "allowMultiple": false,
//                                             "required": true
//                                         },
//                                         {
//                                             "name": "events",
//                                             "description": "Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28bc",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "title",
//                                             "description": "Filter by series title.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28bb",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "titleStartsWith",
//                                             "description": "Return series with titles that begin with the specified string (e.g. Sp).",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28ba",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "startYear",
//                                             "description": "Return only series matching the specified start year.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28b9",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "modifiedSince",
//                                             "description": "Return only series which have been modified since the specified date.",
//                                             "dataType": "Date",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28b8",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "comics",
//                                             "description": "Return only series which contain the specified comics (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28b7",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "creators",
//                                             "description": "Return only series which feature work by the specified creators (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28b6",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "characters",
//                                             "description": "Return only series which feature the specified characters (accepts a comma-separated list of ids).",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28b5",
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "seriesType",
//                                             "description": "Filter the series by publication frequency type.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28b3",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b28b4",
//                                                 "values": [
//                                                     "collection",
//                                                     "one shot",
//                                                     "limited",
//                                                     "ongoing"
//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "contains",
//                                             "description": "Return only series containing one or more comics with the specified format.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28b1",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b28b2",
//                                                 "values": [
//                                                     "comic",
//                                                     "magazine",
//                                                     "trade paperback",
//                                                     "hardcover",
//                                                     "digest",
//                                                     "graphic novel",
//                                                     "digital comic",
//                                                     "infinite comic"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "orderBy",
//                                             "description": "Order the result set by a field or fields. Add a \"-\" to the value sort in descending order. Multiple values are given priority in the order in which they are passed.",
//                                             "dataType": "string",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28af",
//                                             "allowableValues": {
//                                                 "valueType": "LIST",
//                                                 "_id": "5318a13e480b07a76f3b28b0",
//                                                 "values": [
//                                                     "title",
//                                                     "modified",
//                                                     "startYear",
//                                                     "-title",
//                                                     "-modified",
//                                                     "-startYear"
//                                                 ]
//                                             },
//                                             "allowMultiple": true,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "limit",
//                                             "description": "Limit the result set to the specified number of resources.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28ad",
//                                             "allowableValues": {
//                                                 "min": 1,
//                                                 "max": 100,
//                                                 "valueType": "RANGE",
//                                                 "_id": "5318a13e480b07a76f3b28ae",
//                                                 "values": [

//                                                 ]
//                                             },
//                                             "allowMultiple": false,
//                                             "required": false
//                                         },
//                                         {
//                                             "name": "offset",
//                                             "description": "Skip the specified number of resources in the result set.",
//                                             "dataType": "int",
//                                             "paramType": "query",
//                                             "_id": "5318a13e480b07a76f3b28ac",
//                                             "allowMultiple": false,
//                                             "required": false
//                                         }
//                                     ],
//                                     "summary": "Fetches lists of series filtered by a story id."
//                                 }
//                             ]
//                         }
//                     ],
//                         "models": {
//         "ComicList": {
//             "id": "ComicList",
//                 "properties": {
//                 "available": {
//                     "type": "int",
//                         "description": "The number of total available issues in this list. Will always be greater than or equal to the \"returned\" value."
//                 },
//                 "returned": {
//                     "type": "int",
//                         "description": "The number of issues returned in this collection (up to 20)."
//                 },
//                 "collectionURI": {
//                     "type": "string",
//                         "description": "The path to the full list of issues in this collection."
//                 },
//                 "items": {
//                     "type": "Array",
//                         "description": "The list of returned issues in this collection.",
//                             "items": {
//                         "$ref": "ComicSummary"
//                     }
//                 }
//             }
//         },
//         "EventList": {
//             "id": "EventList",
//                 "properties": {
//                 "available": {
//                     "type": "int",
//                         "description": "The number of total available events in this list. Will always be greater than or equal to the \"returned\" value."
//                 },
//                 "returned": {
//                     "type": "int",
//                         "description": "The number of events returned in this collection (up to 20)."
//                 },
//                 "collectionURI": {
//                     "type": "string",
//                         "description": "The path to the full list of events in this collection."
//                 },
//                 "items": {
//                     "type": "Array",
//                         "description": "The list of returned events in this collection.",
//                             "items": {
//                         "$ref": "EventSummary"
//                     }
//                 }
//             }
//         },
//         "CreatorList": {
//             "id": "CreatorList",
//                 "properties": {
//                 "available": {
//                     "type": "int",
//                         "description": "The number of total available creators in this list. Will always be greater than or equal to the \"returned\" value."
//                 },
//                 "returned": {
//                     "type": "int",
//                         "description": "The number of creators returned in this collection (up to 20)."
//                 },
//                 "collectionURI": {
//                     "type": "string",
//                         "description": "The path to the full list of creators in this collection."
//                 },
//                 "items": {
//                     "type": "Array",
//                         "description": "The list of returned creators in this collection.",
//                             "items": {
//                         "$ref": "CreatorSummary"
//                     }
//                 }
//             }
//         },
//         "CharacterList": {
//             "id": "CharacterList",
//                 "properties": {
//                 "available": {
//                     "type": "int",
//                         "description": "The number of total available characters in this list. Will always be greater than or equal to the \"returned\" value."
//                 },
//                 "returned": {
//                     "type": "int",
//                         "description": "The number of characters returned in this collection (up to 20)."
//                 },
//                 "collectionURI": {
//                     "type": "string",
//                         "description": "The path to the full list of characters in this collection."
//                 },
//                 "items": {
//                     "type": "Array",
//                         "description": "The list of returned characters in this collection.",
//                             "items": {
//                         "$ref": "CharacterSummary"
//                     }
//                 }
//             }
//         },
//         "SeriesList": {
//             "id": "SeriesList",
//                 "properties": {
//                 "available": {
//                     "type": "int",
//                         "description": "The number of total available series in this list. Will always be greater than or equal to the \"returned\" value."
//                 },
//                 "returned": {
//                     "type": "int",
//                         "description": "The number of series returned in this collection (up to 20)."
//                 },
//                 "collectionURI": {
//                     "type": "string",
//                         "description": "The path to the full list of series in this collection."
//                 },
//                 "items": {
//                     "type": "Array",
//                         "description": "The list of returned series in this collection.",
//                             "items": {
//                         "$ref": "SeriesSummary"
//                     }
//                 }
//             }
//         },
//         "StoryList": {
//             "id": "StoryList",
//                 "properties": {
//                 "available": {
//                     "type": "int",
//                         "description": "The number of total available stories in this list. Will always be greater than or equal to the \"returned\" value."
//                 },
//                 "returned": {
//                     "type": "int",
//                         "description": "The number of stories returned in this collection (up to 20)."
//                 },
//                 "collectionURI": {
//                     "type": "string",
//                         "description": "The path to the full list of stories in this collection."
//                 },
//                 "items": {
//                     "type": "Array",
//                         "description": "The list of returned stories in this collection.",
//                             "items": {
//                         "$ref": "StorySummary"
//                     }
//                 }
//             }
//         },
//         "CharacterSummary": {
//             "id": "CharacterSummary",
//                 "properties": {
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The path to the individual character resource."
//                 },
//                 "name": {
//                     "type": "string",
//                         "description": "The full name of the character."
//                 },
//                 "role": {
//                     "type": "string",
//                         "description": "The role of the creator in the parent entity."
//                 }
//             }
//         },
//         "EventSummary": {
//             "id": "EventSummary",
//                 "properties": {
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The path to the individual event resource."
//                 },
//                 "name": {
//                     "type": "string",
//                         "description": "The name of the event."
//                 }
//             }
//         },
//         "SeriesSummary": {
//             "id": "SeriesSummary",
//                 "properties": {
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The path to the individual series resource."
//                 },
//                 "name": {
//                     "type": "string",
//                         "description": "The canonical name of the series."
//                 }
//             }
//         },
//         "ComicSummary": {
//             "id": "ComicSummary",
//                 "properties": {
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The path to the individual comic resource."
//                 },
//                 "name": {
//                     "type": "string",
//                         "description": "The canonical name of the comic."
//                 }
//             }
//         },
//         "Url": {
//             "id": "Url",
//                 "properties": {
//                 "type": {
//                     "type": "string",
//                         "description": "A text identifier for the URL."
//                 },
//                 "url": {
//                     "type": "string",
//                         "description": "A full URL (including scheme, domain, and path)."
//                 }
//             }
//         },
//         "CreatorSummary": {
//             "id": "CreatorSummary",
//                 "properties": {
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The path to the individual creator resource."
//                 },
//                 "name": {
//                     "type": "string",
//                         "description": "The full name of the creator."
//                 },
//                 "role": {
//                     "type": "string",
//                         "description": "The role of the creator in the parent entity."
//                 }
//             }
//         },
//         "StorySummary": {
//             "id": "StorySummary",
//                 "properties": {
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The path to the individual story resource."
//                 },
//                 "name": {
//                     "type": "string",
//                         "description": "The canonical name of the story."
//                 },
//                 "type": {
//                     "type": "string",
//                         "description": "The type of the story (interior or cover)."
//                 }
//             }
//         },
//         "Image": {
//             "id": "Image",
//                 "properties": {
//                 "path": {
//                     "type": "string",
//                         "description": "The directory path of to the image."
//                 },
//                 "extension": {
//                     "type": "string",
//                         "description": "The file extension for the image."
//                 }
//             }
//         },
//         "ComicDate": {
//             "id": "ComicDate",
//                 "properties": {
//                 "type": {
//                     "type": "string",
//                         "description": "A description of the date (e.g. onsale date, FOC date)."
//                 },
//                 "date": {
//                     "type": "Date",
//                         "description": "The date."
//                 }
//             }
//         },
//         "CharacterDataContainer": {
//             "id": "CharacterDataContainer",
//                 "properties": {
//                 "offset": {
//                     "type": "int",
//                         "description": "The requested offset (number of skipped results) of the call."
//                 },
//                 "limit": {
//                     "type": "int",
//                         "description": "The requested result limit."
//                 },
//                 "total": {
//                     "type": "int",
//                         "description": "The total number of resources available given the current filter set."
//                 },
//                 "count": {
//                     "type": "int",
//                         "description": "The total number of results returned by this call."
//                 },
//                 "results": {
//                     "type": "Array",
//                         "description": "The list of characters returned by the call.",
//                             "items": {
//                         "$ref": "Character"
//                     }
//                 }
//             }
//         },
//         "EventDataContainer": {
//             "id": "EventDataContainer",
//                 "properties": {
//                 "offset": {
//                     "type": "int",
//                         "description": "The requested offset (number of skipped results) of the call."
//                 },
//                 "limit": {
//                     "type": "int",
//                         "description": "The requested result limit."
//                 },
//                 "total": {
//                     "type": "int",
//                         "description": "The total number of resources available given the current filter set."
//                 },
//                 "count": {
//                     "type": "int",
//                         "description": "The total number of results returned by this call."
//                 },
//                 "results": {
//                     "type": "Array",
//                         "description": "The list of events returned by the call",
//                             "items": {
//                         "$ref": "Event"
//                     }
//                 }
//             }
//         },
//         "ComicPrice": {
//             "id": "ComicPrice",
//                 "properties": {
//                 "type": {
//                     "type": "string",
//                         "description": "A description of the price (e.g. print price, digital price)."
//                 },
//                 "price": {
//                     "type": "float",
//                         "description": "The price (all prices in USD)."
//                 }
//             }
//         },
//         "EventDataWrapper": {
//             "id": "EventDataWrapper",
//                 "properties": {
//                 "code": {
//                     "type": "int",
//                         "description": "The HTTP status code of the returned result."
//                 },
//                 "status": {
//                     "type": "string",
//                         "description": "A string description of the call status."
//                 },
//                 "copyright": {
//                     "type": "string",
//                         "description": "The copyright notice for the returned result."
//                 },
//                 "attributionText": {
//                     "type": "string",
//                         "description": "The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "attributionHTML": {
//                     "type": "string",
//                         "description": "An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "data": {
//                     "type": "EventDataContainer",
//                         "description": "The results returned by the call."
//                 },
//                 "etag": {
//                     "type": "string",
//                         "description": "A digest value of the content returned by the call."
//                 }
//             }
//         },
//         "Creator": {
//             "id": "Creator",
//                 "properties": {
//                 "id": {
//                     "type": "int",
//                         "description": "The unique ID of the creator resource."
//                 },
//                 "firstName": {
//                     "type": "string",
//                         "description": "The first name of the creator."
//                 },
//                 "middleName": {
//                     "type": "string",
//                         "description": "The middle name of the creator."
//                 },
//                 "lastName": {
//                     "type": "string",
//                         "description": "The last name of the creator."
//                 },
//                 "suffix": {
//                     "type": "string",
//                         "description": "The suffix or honorific for the creator."
//                 },
//                 "fullName": {
//                     "type": "string",
//                         "description": "The full name of the creator (a space-separated concatenation of the above four fields)."
//                 },
//                 "modified": {
//                     "type": "Date",
//                         "description": "The date the resource was most recently modified."
//                 },
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The canonical URL identifier for this resource."
//                 },
//                 "urls": {
//                     "type": "Array",
//                         "description": "A set of public web site URLs for the resource.",
//                             "items": {
//                         "$ref": "Url"
//                     }
//                 },
//                 "thumbnail": {
//                     "type": "Image",
//                         "description": "The representative image for this creator."
//                 },
//                 "series": {
//                     "type": "SeriesList",
//                         "description": "A resource list containing the series which feature work by this creator."
//                 },
//                 "stories": {
//                     "type": "StoryList",
//                         "description": "A resource list containing the stories which feature work by this creator."
//                 },
//                 "comics": {
//                     "type": "ComicList",
//                         "description": "A resource list containing the comics which feature work by this creator."
//                 },
//                 "events": {
//                     "type": "EventList",
//                         "description": "A resource list containing the events which feature work by this creator."
//                 }
//             }
//         },
//         "Event": {
//             "id": "Event",
//                 "properties": {
//                 "id": {
//                     "type": "int",
//                         "description": "The unique ID of the event resource."
//                 },
//                 "title": {
//                     "type": "string",
//                         "description": "The title of the event."
//                 },
//                 "description": {
//                     "type": "string",
//                         "description": "A description of the event."
//                 },
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The canonical URL identifier for this resource."
//                 },
//                 "urls": {
//                     "type": "Array",
//                         "description": "A set of public web site URLs for the event.",
//                             "items": {
//                         "$ref": "Url"
//                     }
//                 },
//                 "modified": {
//                     "type": "Date",
//                         "description": "The date the resource was most recently modified."
//                 },
//                 "start": {
//                     "type": "Date",
//                         "description": "The date of publication of the first issue in this event."
//                 },
//                 "end": {
//                     "type": "Date",
//                         "description": "The date of publication of the last issue in this event."
//                 },
//                 "thumbnail": {
//                     "type": "Image",
//                         "description": "The representative image for this event."
//                 },
//                 "comics": {
//                     "type": "ComicList",
//                         "description": "A resource list containing the comics in this event."
//                 },
//                 "stories": {
//                     "type": "StoryList",
//                         "description": "A resource list containing the stories in this event."
//                 },
//                 "series": {
//                     "type": "SeriesList",
//                         "description": "A resource list containing the series in this event."
//                 },
//                 "characters": {
//                     "type": "CharacterList",
//                         "description": "A resource list containing the characters which appear in this event."
//                 },
//                 "creators": {
//                     "type": "CreatorList",
//                         "description": "A resource list containing creators whose work appears in this event."
//                 },
//                 "next": {
//                     "type": "EventSummary",
//                         "description": "A summary representation of the event which follows this event."
//                 },
//                 "previous": {
//                     "type": "EventSummary",
//                         "description": "A summary representation of the event which preceded this event."
//                 }
//             }
//         },
//         "ComicDataContainer": {
//             "id": "ComicDataContainer",
//                 "properties": {
//                 "offset": {
//                     "type": "int",
//                         "description": "The requested offset (number of skipped results) of the call."
//                 },
//                 "limit": {
//                     "type": "int",
//                         "description": "The requested result limit."
//                 },
//                 "total": {
//                     "type": "int",
//                         "description": "The total number of resources available given the current filter set."
//                 },
//                 "count": {
//                     "type": "int",
//                         "description": "The total number of results returned by this call."
//                 },
//                 "results": {
//                     "type": "Array",
//                         "description": "The list of comics returned by the call",
//                             "items": {
//                         "$ref": "Comic"
//                     }
//                 }
//             }
//         },
//         "TextObject": {
//             "id": "TextObject",
//                 "properties": {
//                 "type": {
//                     "type": "string",
//                         "description": "The canonical type of the text object (e.g. solicit text, preview text, etc.)."
//                 },
//                 "language": {
//                     "type": "string",
//                         "description": "The IETF language tag denoting the language the text object is written in."
//                 },
//                 "text": {
//                     "type": "string",
//                         "description": "The text."
//                 }
//             }
//         },
//         "CreatorDataWrapper": {
//             "id": "CreatorDataWrapper",
//                 "properties": {
//                 "code": {
//                     "type": "int",
//                         "description": "The HTTP status code of the returned result."
//                 },
//                 "status": {
//                     "type": "string",
//                         "description": "A string description of the call status."
//                 },
//                 "copyright": {
//                     "type": "string",
//                         "description": "The copyright notice for the returned result."
//                 },
//                 "attributionText": {
//                     "type": "string",
//                         "description": "The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "attributionHTML": {
//                     "type": "string",
//                         "description": "An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "data": {
//                     "type": "CreatorDataContainer",
//                         "description": "The results returned by the call."
//                 },
//                 "etag": {
//                     "type": "string",
//                         "description": "A digest value of the content returned by the call."
//                 }
//             }
//         },
//         "StoryDataWrapper": {
//             "id": "StoryDataWrapper",
//                 "properties": {
//                 "code": {
//                     "type": "int",
//                         "description": "The HTTP status code of the returned result."
//                 },
//                 "status": {
//                     "type": "string",
//                         "description": "A string description of the call status."
//                 },
//                 "copyright": {
//                     "type": "string",
//                         "description": "The copyright notice for the returned result."
//                 },
//                 "attributionText": {
//                     "type": "string",
//                         "description": "The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "attributionHTML": {
//                     "type": "string",
//                         "description": "An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "data": {
//                     "type": "StoryDataContainer",
//                         "description": "The results returned by the call."
//                 },
//                 "etag": {
//                     "type": "string",
//                         "description": "A digest value of the content returned by the call."
//                 }
//             }
//         },
//         "Character": {
//             "id": "Character",
//                 "properties": {
//                 "id": {
//                     "type": "int",
//                         "description": "The unique ID of the character resource."
//                 },
//                 "name": {
//                     "type": "string",
//                         "description": "The name of the character."
//                 },
//                 "description": {
//                     "type": "string",
//                         "description": "A short bio or description of the character."
//                 },
//                 "modified": {
//                     "type": "Date",
//                         "description": "The date the resource was most recently modified."
//                 },
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The canonical URL identifier for this resource."
//                 },
//                 "urls": {
//                     "type": "Array",
//                         "description": "A set of public web site URLs for the resource.",
//                             "items": {
//                         "$ref": "Url"
//                     }
//                 },
//                 "thumbnail": {
//                     "type": "Image",
//                         "description": "The representative image for this character."
//                 },
//                 "comics": {
//                     "type": "ComicList",
//                         "description": "A resource list containing comics which feature this character."
//                 },
//                 "stories": {
//                     "type": "StoryList",
//                         "description": "A resource list of stories in which this character appears."
//                 },
//                 "events": {
//                     "type": "EventList",
//                         "description": "A resource list of events in which this character appears."
//                 },
//                 "series": {
//                     "type": "SeriesList",
//                         "description": "A resource list of series in which this character appears."
//                 }
//             }
//         },
//         "CharacterDataWrapper": {
//             "id": "CharacterDataWrapper",
//                 "properties": {
//                 "code": {
//                     "type": "int",
//                         "description": "The HTTP status code of the returned result."
//                 },
//                 "status": {
//                     "type": "string",
//                         "description": "A string description of the call status."
//                 },
//                 "copyright": {
//                     "type": "string",
//                         "description": "The copyright notice for the returned result."
//                 },
//                 "attributionText": {
//                     "type": "string",
//                         "description": "The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "attributionHTML": {
//                     "type": "string",
//                         "description": "An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "data": {
//                     "type": "CharacterDataContainer",
//                         "description": "The results returned by the call."
//                 },
//                 "etag": {
//                     "type": "string",
//                         "description": "A digest value of the content returned by the call."
//                 }
//             }
//         },
//         "ComicDataWrapper": {
//             "id": "ComicDataWrapper",
//                 "properties": {
//                 "code": {
//                     "type": "int",
//                         "description": "The HTTP status code of the returned result."
//                 },
//                 "status": {
//                     "type": "string",
//                         "description": "A string description of the call status."
//                 },
//                 "copyright": {
//                     "type": "string",
//                         "description": "The copyright notice for the returned result."
//                 },
//                 "attributionText": {
//                     "type": "string",
//                         "description": "The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "attributionHTML": {
//                     "type": "string",
//                         "description": "An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "data": {
//                     "type": "ComicDataContainer",
//                         "description": "The results returned by the call."
//                 },
//                 "etag": {
//                     "type": "string",
//                         "description": "A digest value of the content returned by the call."
//                 }
//             }
//         },
//         "Series": {
//             "id": "Series",
//                 "properties": {
//                 "id": {
//                     "type": "int",
//                         "description": "The unique ID of the series resource."
//                 },
//                 "title": {
//                     "type": "string",
//                         "description": "The canonical title of the series."
//                 },
//                 "description": {
//                     "type": "string",
//                         "description": "A description of the series."
//                 },
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The canonical URL identifier for this resource."
//                 },
//                 "urls": {
//                     "type": "Array",
//                         "description": "A set of public web site URLs for the resource.",
//                             "items": {
//                         "$ref": "Url"
//                     }
//                 },
//                 "startYear": {
//                     "type": "int",
//                         "description": "The first year of publication for the series."
//                 },
//                 "endYear": {
//                     "type": "int",
//                         "description": "The last year of publication for the series (conventionally, 2099 for ongoing series) ."
//                 },
//                 "rating": {
//                     "type": "string",
//                         "description": "The age-appropriateness rating for the series."
//                 },
//                 "modified": {
//                     "type": "Date",
//                         "description": "The date the resource was most recently modified."
//                 },
//                 "thumbnail": {
//                     "type": "Image",
//                         "description": "The representative image for this series."
//                 },
//                 "comics": {
//                     "type": "ComicList",
//                         "description": "A resource list containing comics in this series."
//                 },
//                 "stories": {
//                     "type": "StoryList",
//                         "description": "A resource list containing stories which occur in comics in this series."
//                 },
//                 "events": {
//                     "type": "EventList",
//                         "description": "A resource list containing events which take place in comics in this series."
//                 },
//                 "characters": {
//                     "type": "CharacterList",
//                         "description": "A resource list containing characters which appear in comics in this series."
//                 },
//                 "creators": {
//                     "type": "CreatorList",
//                         "description": "A resource list of creators whose work appears in comics in this series."
//                 },
//                 "next": {
//                     "type": "SeriesSummary",
//                         "description": "A summary representation of the series which follows this series."
//                 },
//                 "previous": {
//                     "type": "SeriesSummary",
//                         "description": "A summary representation of the series which preceded this series."
//                 }
//             }
//         },
//         "SeriesDataWrapper": {
//             "id": "SeriesDataWrapper",
//                 "properties": {
//                 "code": {
//                     "type": "int",
//                         "description": "The HTTP status code of the returned result."
//                 },
//                 "status": {
//                     "type": "string",
//                         "description": "A string description of the call status."
//                 },
//                 "copyright": {
//                     "type": "string",
//                         "description": "The copyright notice for the returned result."
//                 },
//                 "attributionText": {
//                     "type": "string",
//                         "description": "The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "attributionHTML": {
//                     "type": "string",
//                         "description": "An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API."
//                 },
//                 "data": {
//                     "type": "SeriesDataContainer",
//                         "description": "The results returned by the call."
//                 },
//                 "etag": {
//                     "type": "string",
//                         "description": "A digest value of the content returned by the call."
//                 }
//             }
//         },
//         "SeriesDataContainer": {
//             "id": "SeriesDataContainer",
//                 "properties": {
//                 "offset": {
//                     "type": "int",
//                         "description": "The requested offset (number of skipped results) of the call."
//                 },
//                 "limit": {
//                     "type": "int",
//                         "description": "The requested result limit."
//                 },
//                 "total": {
//                     "type": "int",
//                         "description": "The total number of resources available given the current filter set."
//                 },
//                 "count": {
//                     "type": "int",
//                         "description": "The total number of results returned by this call."
//                 },
//                 "results": {
//                     "type": "Array",
//                         "description": "The list of series returned by the call",
//                             "items": {
//                         "$ref": "Series"
//                     }
//                 }
//             }
//         },
//         "StoryDataContainer": {
//             "id": "StoryDataContainer",
//                 "properties": {
//                 "offset": {
//                     "type": "int",
//                         "description": "The requested offset (number of skipped results) of the call."
//                 },
//                 "limit": {
//                     "type": "int",
//                         "description": "The requested result limit."
//                 },
//                 "total": {
//                     "type": "int",
//                         "description": "The total number of resources available given the current filter set."
//                 },
//                 "count": {
//                     "type": "int",
//                         "description": "The total number of results returned by this call."
//                 },
//                 "results": {
//                     "type": "Array",
//                         "description": "The list of stories returned by the call",
//                             "items": {
//                         "$ref": "Story"
//                     }
//                 }
//             }
//         },
//         "Comic": {
//             "id": "Comic",
//                 "properties": {
//                 "id": {
//                     "type": "int",
//                         "description": "The unique ID of the comic resource."
//                 },
//                 "digitalId": {
//                     "type": "int",
//                         "description": "The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally."
//                 },
//                 "title": {
//                     "type": "string",
//                         "description": "The canonical title of the comic."
//                 },
//                 "issueNumber": {
//                     "type": "double",
//                         "description": "The number of the issue in the series (will generally be 0 for collection formats)."
//                 },
//                 "variantDescription": {
//                     "type": "string",
//                         "description": "If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant."
//                 },
//                 "description": {
//                     "type": "string",
//                         "description": "The preferred description of the comic."
//                 },
//                 "modified": {
//                     "type": "Date",
//                         "description": "The date the resource was most recently modified."
//                 },
//                 "isbn": {
//                     "type": "string",
//                         "description": "The ISBN for the comic (generally only populated for collection formats)."
//                 },
//                 "upc": {
//                     "type": "string",
//                         "description": "The UPC barcode number for the comic (generally only populated for periodical formats)."
//                 },
//                 "diamondCode": {
//                     "type": "string",
//                         "description": "The Diamond code for the comic."
//                 },
//                 "ean": {
//                     "type": "string",
//                         "description": "The EAN barcode for the comic."
//                 },
//                 "issn": {
//                     "type": "string",
//                         "description": "The ISSN barcode for the comic."
//                 },
//                 "format": {
//                     "type": "string",
//                         "description": "The publication format of the comic e.g. comic, hardcover, trade paperback."
//                 },
//                 "pageCount": {
//                     "type": "int",
//                         "description": "The number of story pages in the comic."
//                 },
//                 "textObjects": {
//                     "type": "Array",
//                         "description": "A set of descriptive text blurbs for the comic.",
//                             "items": {
//                         "$ref": "TextObject"
//                     }
//                 },
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The canonical URL identifier for this resource."
//                 },
//                 "urls": {
//                     "type": "Array",
//                         "description": "A set of public web site URLs for the resource.",
//                             "items": {
//                         "$ref": "Url"
//                     }
//                 },
//                 "series": {
//                     "type": "SeriesSummary",
//                         "description": "A summary representation of the series to which this comic belongs."
//                 },
//                 "variants": {
//                     "type": "Array",
//                         "description": "A list of variant issues for this comic (includes the \"original\" issue if the current issue is a variant).",
//                             "items": {
//                         "$ref": "ComicSummary"
//                     }
//                 },
//                 "collections": {
//                     "type": "Array",
//                         "description": "A list of collections which include this comic (will generally be empty if the comic's format is a collection).",
//                             "items": {
//                         "$ref": "ComicSummary"
//                     }
//                 },
//                 "collectedIssues": {
//                     "type": "Array",
//                         "description": "A list of issues collected in this comic (will generally be empty for periodical formats such as \"comic\" or \"magazine\").",
//                             "items": {
//                         "$ref": "ComicSummary"
//                     }
//                 },
//                 "dates": {
//                     "type": "Array",
//                         "description": "A list of key dates for this comic.",
//                             "items": {
//                         "$ref": "ComicDate"
//                     }
//                 },
//                 "prices": {
//                     "type": "Array",
//                         "description": "A list of prices for this comic.",
//                             "items": {
//                         "$ref": "ComicPrice"
//                     }
//                 },
//                 "thumbnail": {
//                     "type": "Image",
//                         "description": "The representative image for this comic."
//                 },
//                 "images": {
//                     "type": "Array",
//                         "description": "A list of promotional images associated with this comic.",
//                             "items": {
//                         "$ref": "Image"
//                     }
//                 },
//                 "creators": {
//                     "type": "CreatorList",
//                         "description": "A resource list containing the creators associated with this comic."
//                 },
//                 "characters": {
//                     "type": "CharacterList",
//                         "description": "A resource list containing the characters which appear in this comic."
//                 },
//                 "stories": {
//                     "type": "StoryList",
//                         "description": "A resource list containing the stories which appear in this comic."
//                 },
//                 "events": {
//                     "type": "EventList",
//                         "description": "A resource list containing the events in which this comic appears."
//                 }
//             }
//         },
//         "CreatorDataContainer": {
//             "id": "CreatorDataContainer",
//                 "properties": {
//                 "offset": {
//                     "type": "int",
//                         "description": "The requested offset (number of skipped results) of the call."
//                 },
//                 "limit": {
//                     "type": "int",
//                         "description": "The requested result limit."
//                 },
//                 "total": {
//                     "type": "int",
//                         "description": "The total number of resources available given the current filter set."
//                 },
//                 "count": {
//                     "type": "int",
//                         "description": "The total number of results returned by this call."
//                 },
//                 "results": {
//                     "type": "Array",
//                         "description": "The list of creators returned by the call.",
//                             "items": {
//                         "$ref": "Creator"
//                     }
//                 }
//             }
//         },
//         "Story": {
//             "id": "Story",
//                 "properties": {
//                 "id": {
//                     "type": "int",
//                         "description": "The unique ID of the story resource."
//                 },
//                 "title": {
//                     "type": "string",
//                         "description": "The story title."
//                 },
//                 "description": {
//                     "type": "string",
//                         "description": "A short description of the story."
//                 },
//                 "resourceURI": {
//                     "type": "string",
//                         "description": "The canonical URL identifier for this resource. "
//                 },
//                 "type": {
//                     "type": "string",
//                         "description": "The story type e.g. interior story, cover, text story."
//                 },
//                 "modified": {
//                     "type": "Date",
//                         "description": "The date the resource was most recently modified."
//                 },
//                 "thumbnail": {
//                     "type": "Image",
//                         "description": "The representative image for this story."
//                 },
//                 "comics": {
//                     "type": "ComicList",
//                         "description": "A resource list containing comics in which this story takes place."
//                 },
//                 "series": {
//                     "type": "SeriesList",
//                         "description": "A resource list containing series in which this story appears."
//                 },
//                 "events": {
//                     "type": "EventList",
//                         "description": "A resource list of the events in which this story appears."
//                 },
//                 "characters": {
//                     "type": "CharacterList",
//                         "description": "A resource list of characters which appear in this story."
//                 },
//                 "creators": {
//                     "type": "CreatorList",
//                         "description": "A resource list of creators who worked on this story."
//                 },
//                 "originalissue": {
//                     "type": "ComicSummary",
//                         "description": "A summary representation of the issue in which this story was originally published."
//                 }
//             }
//         }
//     }
// }