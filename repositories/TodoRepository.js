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
    },
    add: function (todo) {
        return dbClient.put({
            TableName: "todos",
            Item: todo
        }).promise()
            .then((result) => {
                console.log("Todo item has been saved", result);
                return result;
            })
            .catch((error) => {
                console.log("Error saving todo item", error);
                throw error;
            });
    },
    update: function (todoId, todo) {
        return dbClient.update({
            TableName: "todos",
            Key: {
                todoId: todoId
            },
            UpdateExpression: "set description = :desc, done = :done",
            ExpressionAttributeValues: {
                ":desc": todo.description,
                ":done": todo.done
            },
            ReturnValues: "ALL_NEW"
        }).promise()
            .then((result) => {
                return result.Attributes;
            })
            .catch((err) => {
                console.log("Updating a todo item failed", err);
                throw err;
            });
    }
};