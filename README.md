# Installation and Setup 

## Starting Mongo DB Instance

1. Start the MongoDB instance locally using mongod or homebrew

2. Load the dump to MongoDB

The following steps (for MacOS/Windows) will create a new database “milesNstay” on the mongoDB instance running, and populate the properties and reservation collection with initial data.

**For MacOS Users:** 

  Go to the directory containing the dump folder and execute the following command:

```sh
mongorestore -d milesNstay ./milesNstay
```

**For Windows Users:**

    1. Go to [MongoDB Tools Download Link](https://www.mongodb.com/try/download/database-tools), and download the “MongoDB Database Tools” zip file for windows.

    2. Open Control Panel
    
    3. In the Systems and Security category, click System.
    
    4. Click Advanced system settings. The System Properties modal displays.
    
    5. Click Environment Variables.

    6. In the System variables section, select Path and click Edit. The Edit environment variable modal displays.
    
    7. Click New and add the filepath to the location where you installed the Database Tools.
    
    8. Click OK to confirm your changes. On each other modal, click OK to confirm your changes.	

## Running the server

    1. Open the unzipped directory and open terminal
    2. Run command npm install
    3. Run command nodemon to start the server


# Testing the API endpoints using PostMan

## Properties Collection:

### Retrieve all properties

| Method  | URL  |
| :------------ |:---------------:|
| GET  | http://localhost:3000/properties | 

### Insert a new property

| Method  | URL  |
| :------------ |:---------------:|
| POST  | http://localhost:3000/properties | 

Request Body :
```json 
 {
    "data": {
        "_id": {
            "$oid": "6377d88619b36f9c3852ee50"
        },
        "host_id": 3,
        "property_name": "Santana Row Loft",
        "property_type": "Condo",
        "description": "The very spacious open concept condo is over 1090 sq feet of space to enjoy the view from below. This loft unit includes 1 parking spot and a key less door entrance for your convenience and safety. Tall airy ceiling and minimalist decor, VIP guests can unwind after a long day of work/entertainment. The 8 people dining table serves as conference area and work space for remote workers.",
        "summary": "The very spacious open concept condo is over 1090 sq feet of space to enjoy the view from below.",
        "room_type": "Entire Apartment",
        "max_nights": 10,
        "min_nights": 2,
        "max_guests": 4,
        "bed_count": 2,
        "bath_count": 2,
        "cancellation_policy": "strict",
        "cost": {
            "per_night": 200,
            "deposit": 300,
            "cleaning_fee": 100
        },
        "rating": {
            "overall": 4.9,
            "cleanliness": 4.9,
            "communication": 4.9,
            "check_in": 4.8,
            "accuracy": 4.8,
            "location": 5,
            "value": 5
        },
        "house_rules": {
            "check_in": "After 1:00 PM",
            "check_out": "Before 11:00 AM",
            "check_in_type": "in-person",
            "smoking": false,
            "parties": false,
            "pets": true,
            "additional_notes": "N/A"
        },
        "property_address": {
            "street": "100, Southside Street",
            "unit_no": "2",
            "city": "San Antonio",
            "state": "Texas",
            "zip": 49844,
            "country": "United States of America",
            "distance_from_city_center": 10,
            "coordinates": {
                "lat": 333.4343434,
                "lng": 32.3443434
            }
        },
        "images": [
            {
                "image_id": 3,
                "image_name": "jbnu6.jpg",
                "image_url": "img/jbnu6.jpg",
                "image_description": "View from the condo",
                "is_deleted": false
            }
        ],
        "amenities": [
            "Wifi",
            "Pool",
            "Air-conditioning",
            "Balcony"
        ],
        "reviews": [
            "Modern and elegant.",
            "Best weekend getaway"
        ]
    }
}
```

### Update a property

| Method  | URL  |
| :------------ |:---------------:|
| PUT  | http://localhost:3000/properties | 

Request Body

```json
 {
    "query": {
        "property_name": "The Joshua Tree House"
    },
    "newValue": {
        "property_type": "Apartment"
    }
}
``` 

### Delete a property

| Method  | URL  |
| :------------ |:---------------:|
| DELETE  | http://localhost:3000/properties | 

Request Body
```json
{
    "query": {
        "_id": "6377d88619b36f9c3852ee50"
    }
}
``` 

## Reservations Collection:

### Retrieve reservation by guest User ID

| Method  | URL  |
| :------------ |:---------------:|
| GET  | http://localhost:3000/reservations/56840 | 

### Insert a new reservation

| Method  | URL  |
| :------------ |:---------------:|
| POST  | http://localhost:3000/reservations | 

Request Body :
```json 
{
    "data": {
        "start_date": "2022-11-26",
        "end_date": "2022-11-29",
        "status": "pending",
        "receipt_url": "/receipt/hghjhg.pdf",
        "transaction_id": "947974",
        "host": {
            "host_id": "2",
            "host_name": "Jenny Penny"
        },
        "guest": {
            "guest_id": "241295",
            "guest_name": "Reva Gupta"
        },
        "property": {
            "property_id": "637728460dc7486e05a03760",
            "property_name": "Santana Row Loft"
        }
    }
}
```

### Update a reservation

| Method  | URL  |
| :------------ |:---------------:|
| PUT  | http://localhost:3000/reservations | 

Request Body

```json
{
    "query": {
        "_id": "637834c2333abf157443f325"
    },
    "newValue": {
        "status": "upcoming"
    }
}
``` 

### Delete a reservation

| Method  | URL  |
| :------------ |:---------------:|
| DELETE  | http://localhost:3000/reservations | 

Request Body
```json
{
    "query": {
        "_id": "6377d8e419b36f9c3852ee51"
    }
}
``` 