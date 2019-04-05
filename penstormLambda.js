const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const querystring = require('querystring');

exports.handler = (event, context, callback) => {
    console.log(event.body);
    
    const params = querystring.parse(event.body);

    // Our field from the request.
    const email = params['email'];
    const name = params['name'];
    const phone = params['phone'];
    const genre = params['genre'];
    const category = params['category'];
    const message = params['message'];
    dynamodb.putItem({
        TableName: "penstorm",
        Item: {
            "email": {
                S: email
            },
            "name": {
                S: name
            },
            "phone": {
                S: phone
            },
            "genre": {
                S: 'genre'
            },
            "category": {
                S: 'category'
            },
            "message": {
                S: message
            }
        }
    }, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(null, {
                statusCode: '500',
                body: err
            });
        } else {
            callback(null, {
                statusCode: '200',
                body: 'Your Registration is Successful '  + '!' + ' See you at Venue'
            });
        }
    })
};
