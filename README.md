# AWS DynamoDB NodeJS Template  
This is a demo using DynamoDB with NodeJS. This index.js file contains these functions to demonstrate the use of DynamoDB with NodeJS.

docs for DynamoDB: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html


## usage
Create a cloud9 environment and clone this repo.

## install
```
npm install
```
## Pre-requisites
1. Create a dynamoDB table named "my_table" with a primary key named "Id" of type "Number".
2. Create a global secondary index named "Category-Price-Index" with a primary key named "Category" of type "String" and sort by "Price".
3. add first item to the table with the following values:
```
{
  "Id": {
    "N": "101"
  },
  "Authors": {
    "S": "Author 1"
  },
  "Category": {
    "S": "Book"
  },
  "Diminsions": {
    "S": "8.5 x 11.0 x 0.5"
  },
  "InPublication": {
    "BOOL": true
  },
  "ISBN": {
    "S": "1111-111111"
  },
  "PageCount": {
    "N": "500"
  },
  "Price": {
    "N": "2"
  },
  "Title": {
    "S": "Book 101 title"
  }
}
```