
## Proposed Changes

> Find out from backend how to add a new Third Party App (TPA) to rex core

?>"Can you tell me how to add a new Third Party App to the Rex Core Product please?"

![backend folk](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/Land%20Registry%2Fbackend%20folk.png?alt=media&token=6f3d338b-153e-481a-92af-c68a753b2053)

![API call](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/Land%20Registry%2FThirdParty_API_CALL.png?alt=media&token=43454629-87f2-480a-85e2-abcce401db7c)

!> [GIVEN] we make the following request

- [API Browser](http://apibrowser.rexsoftware.com/#api=http%3A//localhost%3A20000/rex.php)
- [Nik's dev-api-docs](https://dev-api-docs.rexsoftware.com/)

## Wings API

### Request
POST => `http://localhost:20000/v1/rex/BatchRequests::execute`
__payload__

```
{  
   "requests":{  
      "thirdPartyModules":{  
         "method":"ThirdPartyServices::describeConnectableServiceTypes",
         "args":{  

         }
      },
      "thirdPartyConnections":{  
         "method":"ThirdPartyServices::getConnections",
         "args":{  
            "include_inherited":true
         }
      },
      "connectedThirdParty":{  
         "method":"ThirdPartyServices::getConnections",
         "args":{  
            "connection_state":"connected",
            "include_inherited":true
         }
      },
      "connectedThirdPartyIds":{  
         "method":"ThirdPartyServices::getConnections",
         "args":{  
            "connection_state":"connected",
            "include_inherited":true,
            "ids_only":true
         }
      }
   }
}
```

### Response

Contains a bunch of these kind of objects. How do I create a new thing in this list?


```json
         {  
            "name":"Textlocal SMS",
            "multiple_connections":true,
            "categories":[  
               "SMS Provider"
            ],
            "country":[  
               "United Kingdom"
            ],
            "description":"Send outbound SMS communications via Textlocal gateway.",
            "website":"https:\/\/www.textlocal.com\/",
            "brand":{  
               "card":{  
                  "artwork":"\/assets\/images\/thirdparty\/textlocal.png",
                  "color":"#2570B9"
               },
               "strip":{  
                  "artwork":"\/assets\/images\/thirdparty\/textlocal.png",
                  "color":"#2570B9"
               }
            },
            "restricted_to_account_ids":[  
               3,
               77,
               195,
               1411,
               1264,
               1267,
               1732,
               1744,
               1763
            ],
            "service_auth":{  
               "type":"simple",
               "description":"To activate this integration, please specify your Textlocal API key. If unsure what these are, please contact your MessageMedia representative.",
               "credentials":[  
                  {  
                     "id":"api_key",
                     "label":"API Key",
                     "type":"String",
                     "required":true,
                     "protected":true
                  }
               ]
            },
            "user_auth":[  

            ],
            "callbacks":{  
               "validate_credentials":{  
                  "class":"SmsProviderService",
                  "method":"checkCredentials"
               }
            },
            "id":"textlocal"
         },
```