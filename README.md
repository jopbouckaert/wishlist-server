# Tring

## Install MongoDB
https://docs.mongodb.com/manual/installation/

## Install node_modules

```
npm install
```

## Run

```
npm start
``` 

## Routes

### Creating new data

`POST /wishes`
```json
{
    "wish": "good grades",
    "received": true
}
```

### Retrieving all data

`GET /wishes`

### Retrieving a single data

`GET /wishes/:wishId`

```json
```

### Updating data

`PUT /wishes/:wishId`

```json
{
}
```

 ### Delete data
`DELETE /wishes/:wishId`

```json
{
    "message": "Wish deleted successfully!"
}
```

## Docker

### Build image
```
docker build -t wishlist-server .
```

### Run container
```
docker run -d --name wishlist-server --env-file ./.env -p 3000:3000  wishlist-server
```

