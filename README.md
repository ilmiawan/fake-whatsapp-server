# fake-whatsapp-server
This is only for testing purpose, a fake requests and response for whatsapp business api

## Installation
```script
git clone https://github.com/ilmiawan/fake-whatsapp-server
cd fake-whatsapp-server
npm install
```

## Run server 
```script
npm run start
```

## How to test
Login
```script
curl --request POST \
  --url http://localhost:3030/v1/users/login \
  --header 'Authentication: Basic asdfalskfjasdklfjsladkfjasl;kjfdlks;ajflk;asdjflkasjf' \
  --header 'Content-Type: application/json'
```

check-contacts
```script
curl --request POST \
  --url http://localhost:3030/v1/cntacts/ \
  --header 'Authentication: Basic asdfalskfjasdklfjsladkfjasl;kjfdlks;ajflk;asdjflkasjf' \
  --header 'Content-Type: application/json' \
  --data '{
   "blocking": "wait",
   "contacts": [
      "+6281234567890"
   ]
}'
```

send-messages-template-text
```script
curl --request POST \
  --url http://localhost:3030/v1/messages/ \
  --header 'Authentication: Basic asdfalskfjasdklfjsladkfjasl;kjfdlks;ajflk;asdjflkasjf' \
  --header 'Content-Type: application/json' \
  --data '{
	"to": "{{Recipient-WA-ID}}",
	"type": "template",
	"template": {
		"namespace": "<Message Template Namespace>",
    	"name": "<Message Template Element Name>",
        "language": {
    		"policy": "<Message Template Language Policy>",
    		"code": "<Message Template Language Code>"
        },
        "components": [{
            "type": "body",
            "parameters": [
                {
                    "type": "<param type>",
                    "text": "<param value>"
                }
            ]
        }]
	}
}'
```


