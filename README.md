# WishList Server

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
    "wish_id": 1,
    "wish": "Good grades",
    "price": "999 euro",
    "image": "http://cminsure.com/wp-content/uploads/ContentImage-GradeAPlus.jpg-550x0.jpg",
    "received": false,
}
```

### Retrieving all data

`GET /wishes`

### Retrieving a single data

`GET /wishes/:wishId`


### Updating data

`PUT /wishes/:wishId`

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

## Meta

Jop Bouckaert – [@Jop09071999](https://twitter.com/Jop09071999) – jop.bouckaert@outlook.com

Distributed under the Apache-2.0 license. See `LICENSE` for more information.

[https://github.com/jopbouckaert](https://github.com/jopbouckaert)

## Contributing

1. Fork it (<https://github.com/vives-mobile-apps-2019/react-native-demo-assignment-2-jopbouckaert>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request