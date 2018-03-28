const
    AWS = require("aws-sdk"),
    dbClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
    all: function () {
        return dbClient.scan({
            TableName: "todos"
        }).promise()
            .then((res) => {
                return res.Items;
            })
            .catch((error) => {
                console.log("Getting todo items failed", error);
                throw error
            });
    }
};