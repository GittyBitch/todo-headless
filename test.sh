#!/bin/bash

# Save
curl -s -XPOST  -H "Content-Type: application/json" "http://localhost:3000/save" -d '{"title":"go shopping", "description": "cars", "status": "open"}'

# List
curl -s -XPOST  -H "Content-Type: application/json" "http://localhost:3000/list" | jq -r . 

# Update
curl -s -XPOST  -H "Content-Type: application/json" "http://localhost:3000/update" -d '{"id":1, "title":"Franz goes shopping", "description": "Go to dentist", "status": "done"}'

# List
curl -s -XPOST  -H "Content-Type: application/json" "http://localhost:3000/list" | jq -r .

# Delete
curl -s -XPOST  -H "Content-Type: application/json" "http://localhost:3000/delete" -d '{"id":1}'

