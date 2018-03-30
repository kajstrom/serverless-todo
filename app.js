const
    ApiBuilder = require("claudia-api-builder"),
    api = new ApiBuilder(),
    getTodos = require("./handlers/get-todos"),
    createTodo = require("./handlers/create-todo"),
    updateTodo = require("./handlers/update-todo"),
    todoRepository = require("./repositories/TodoRepository");

api.get("/todos", (request) => {
    return getTodos(request, todoRepository);
});

api.post("/todos", (request) => {
    return createTodo(request, todoRepository);
}, {
    success: 201,
    error: 400
});

api.put("/todos/{todoId}", (request) => {
    return updateTodo(request, todoRepository);
}, {
    success: 200,
    error: 400
});

module.exports = api;