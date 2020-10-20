# nodejs-mongodb-rest
CRUD REST application with NodeJS and MongoDB

# Steps to start the application
----
## Step 1: Download the application
## Step 2: install node dependencies by following comand

`node install`

## Step 3: Configure your mongodb connection url in index.js file

`mongoose.connect('mongodb://localhost:27017/users_rest', { useNewUrlParser: true, useUnifiedTopology: true});`

## Step 4: Start the application using 

`node index.js`

## Step 5: Test the REST endpoints

Following are the Request syntex:


### Create user service request and response

#### Request URL : 
`localhost:8888/api/users`

#### Request Method : POST

#### Request Body : 

```json
{
    "firstName": "Bhupesh",
    "lastName": "Singh",
    "email": "bhupeshpadiyar.com@gmail.com",
    "age": 32,
    "address": "Mont Kiara, Kuala Lumpur, Malasysia, 50480"
}
```

#### Response : 

```json
{
    "status": 200,
    "message": "New User created successfully!!",
    "data": {
        "_id": "5f8eccc5fa26160abafa9e47",
        "createdOn": "2020-10-20T11:40:53.171Z",
        "updatedOn": "2020-10-20T11:40:53.172Z",
        "firstName": "Bhupesh",
        "lastName": "Singh",
        "email": "bhupeshpadiyar.com@gmail.com",
        "age": 32,
        "address": "Mont Kiara, Kuala Lumpur, Malasysia, 50480",
        "__v": 0
    }
}
```


### Get User By Id service request and response

#### Request URL : 

`localhost:8888/api/users/`

#### Request Method : GET

#### Response : 

```json
{
    "status": 200,
    "message": "User details fetched successfully!!",
    "data": {
        "_id": "5f8eccc5fa26160abafa9e47",
        "createdOn": "2020-10-20T11:40:53.171Z",
        "updatedOn": "2020-10-20T11:40:53.172Z",
        "firstName": "Bhupesh",
        "lastName": "Singh",
        "email": "bhupeshpadiyar.com@gmail.com",
        "age": 32,
        "address": "Mont Kiara, Kuala Lumpur, Malasysia, 50480",
        "__v": 0
    }
}
```


### List All Users service request and response

#### Request URL : 

`localhost:8888/api/users/5f8eccc5fa26160abafa9e47`

#### Request Method : GET

#### Response : 

```json
{
    "status": 200,
    "message": "Users retrieved successfully!!",
    "data": [
        {
            "_id": "5f8eccc5fa26160abafa9e47",
            "createdOn": "2020-10-20T11:40:53.171Z",
            "updatedOn": "2020-10-20T11:40:53.172Z",
            "firstName": "Bhupesh",
            "lastName": "Singh",
            "email": "bhupeshpadiyar.com@gmail.com",
            "age": 32,
            "address": "Mont Kiara, Kuala Lumpur, Malasysia, 50480",
            "__v": 0
        },
        {
            "_id": "5f8ecdf5fa26160abafa9e48",
            "createdOn": "2020-10-20T11:45:57.184Z",
            "updatedOn": "2020-10-20T11:45:57.184Z",
            "firstName": "Johny",
            "lastName": "Sins",
            "email": "johny.sins@gmail.com",
            "age": 41,
            "address": "Los Angeles, California, USA",
            "__v": 0
        }
    ]
}
```

### Update User service request and response

#### Request URL : 

`localhost:8888/api/users/5f8eccc5fa26160abafa9e47`

#### Request Method : PUT

#### Request Body : 

```json
{
    "firstName": "Bhupesh",
    "lastName": "Singh",
    "email": "bhupeshpadiyar.com@gmail.com",
    "age": 32,
    "address": "Mont Kiara, Kuala Lumpur, Malasysia, 50480"
}
```

#### Response : 

```json
{
    "status": 200,
    "message": "User Info updated successfully!!",
    "data": {
        "_id": "5f8eccc5fa26160abafa9e47",
        "createdOn": "2020-10-20T11:40:53.171Z",
        "updatedOn": "2020-10-20T11:40:53.172Z",
        "firstName": "Bhupesh",
        "lastName": "Singh",
        "email": "xyz@gmail.com",
        "age": 32,
        "address": "Mont Kiara, Kuala Lumpur, Malasysia, 50480",
        "__v": 0
    }
}
```


### Delete User service request and response

#### Request URL : 

`localhost:8888/api/users/5f8ecdf5fa26160abafa9e48`

#### Request Method : DELETE

#### Response : 

```json
{
    "status": 200,
    "message": "User Info updated successfully!!",
    "data": {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }
}
```




