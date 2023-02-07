// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

/**
 * Don't hard-code your credentials!
 * Create an IAM role for your EC2 instance instead.
 * For development an IAM role is not required for Cloud9
 */

// Set your region
AWS.config.region = "us-east-1";

var db = new AWS.DynamoDB();

// Function to list all tables in DynamoDB
var listTables = function () {
  db.listTables({}, function (err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      console.log(data); // successful response
    }
  });
};

// Function to insert a new item into a table
var insertItem = function () {
  var params = {
    TableName: "my_table",
    Item: {
      Id: {
        N: "102",
      },
      Authors: {
        S: "Author 2",
      },
      Category: {
        S: "Book",
      },
      Diminsions: {
        S: "8.5 x 11.0 x 0.5",
      },
      InPublication: {
        BOOL: true,
      },
      ISBN: {
        S: "1111-111111",
      },
      PageCount: {
        N: "500",
      },
      Price: {
        N: "6",
      },
      Title: {
        S: "Book 102 title",
      },
    },
  };

  db.putItem(params, function (err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      console.log(data); // successful response
    }
  });
};

// Function to get an item from a table
var getItem =  function () {
  var params = {
    TableName: "my_table",
    Key: {
      Id: {
        N: "101",
      },
    },
  };

  db.getItem(params, function (err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      console.log(data); // successful response
    }
  });
};

// function to take a price and return items from dynamodb that are more than that price
// It uses the scan function to do this which is not efficient for large tables but is good for small tables
var getItems = function (price) {
   var params = {
      TableName: "my_table",
      FilterExpression: "Price > :price",
      ExpressionAttributeValues: {
         ":price": {
            N: price
         }
      }
   };

   db.scan(params, function (err, data) {
      if (err) {
         console.log(err, err.stack); // an error occurred
      } else {
         console.log(data); // successful response
      }
   });
};

//function to take the category name and do query on it
//It uses the query function to do this which is more efficient than scan
//we define the index to use and the key condition expression to use to query the table
var queryItems = function (category) {
   var params = {
      TableName: "my_table",
      IndexName: "Category-Price-index",
      KeyConditionExpression: "Category = :category",
      ExpressionAttributeValues: {
         ":category": {
            S: category
         }
      }
   };

   db.query (params, function (err, data) {
      if (err) {
         console.log(err, err.stack); // an error occurred
      } else {
         console.log(data); // successful response
      }
   });
};




//getItems(1);
queryItems("Book");