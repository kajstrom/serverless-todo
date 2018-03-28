const
    ApiBuilder = require("claudia-api-builder"),
    api = new ApiBuilder(),
    getTodos = require("./handlers/get-todos"),
    createTodo = require("./handlers/create-todo");

api.get("/", function () {
    return getTodos();
});

api.post("/", (request) => {
    return createTodo(request);
}, {
    success: 201,
    error: 400
});

module.exports = api;