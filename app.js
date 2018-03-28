const
    ApiBuilder = require("claudia-api-builder"),
    api = new ApiBuilder(),
    getTodos = require("./handlers/get-todos"),
    createTodo = require("./handlers/create-todo"),
    todoRepository = require("./repositories/TodoRepository");

api.get("/", (request) => {
    return getTodos(request, todoRepository);
});

api.post("/", (request) => {
    return createTodo(request, todoRepository);
}, {
    success: 201,
    error: 400
});

module.exports = api;