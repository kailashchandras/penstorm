const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const querystring = require('querystring');


exports.handler = (event, context, callback) => {
    
    const data = JSON.parse(JSON.stringify(event))
    
 
    

    // Our field from the request.
    const email = data.email;
    const name = data.name;
    const phone = data.phone;
    const genre = data.genre;
    const companyName = data.companyname;
    const projecttitle = data.projecttitle;
    const category = data.category;
    const message = data.message;
    dynamodb.putItem({
        TableName: "pen-storm",
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
            "companyname": {
                S: companyName
            },
            "projecttitle": {
                S: projecttitle
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
                body: '<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css"></head><body><div class="jumbotron text-xs-center"> <h1 class="display-3">Some Internal Error. Please try again Later </h1>  <hr> <p> Having trouble? Write to us on <a href="">penstorm@mxplayer.in</a> </p> <p class="lead"> <a class="btn btn-primary btn-sm" href="http://penstorm.mxplayer.in" role="button">Continue to homepage</a> </p></div>'
            });
        } else {
            
            context.succeed('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css"></head><body><div class="jumbotron text-xs-center"> <h1 class="display-3">Thank You!</h1> <p class="lead"><strong>Your Registration is Successful</strong>. See you at Venue</p> <hr> <p> Having trouble? Write to us on <a href="">penstorm@mxplayer.in</a> </p> <p class="lead"> <a class="btn btn-primary btn-sm" href="http://penstorm.mxplayer.in" role="button">Continue to homepage</a> </p></div>');
            
        }
    })
};