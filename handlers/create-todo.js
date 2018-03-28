const uuid4 = require("uuid/v4");

function createTodo (request, todoRepository) {
    console.log("Creating todo", request);

    if (!request.body.description) {
        throw new Error("'description' is a required info for a todo!");
    }

    return todoRepository.add({
        todoId: uuid4(),
        done: false,
        description: request.body.description
    });
}

module.exports = createTodo;