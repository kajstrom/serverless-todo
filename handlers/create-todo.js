const
    uuid4 = require("uuid/v4"),
    AWS = require("aws-sdk"),
    dbClient = new AWS.DynamoDB.DocumentClient();

function createTodo (request) {
    console.log("Creating todo", request);

    if (!request.body.description) {
        throw new Error("'description' is a required info for a todo!");
    }

    return dbClient.put({
        TableName: "todos",
        Item: {
            todoId: uuid4(),
            done: false,
            description: request.body.description
        }
    }).promise()
        .then((result) => {
            console.log("Todo item has been saved", result);
            return result;
        })
        .catch((error) => {
            console.log("Error saving todo item", error);
            throw error;
        });
}

module.exports = createTodo;