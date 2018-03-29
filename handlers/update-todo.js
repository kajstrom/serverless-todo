function updateTodo(request, todoRepository) {
    const body = request.body;

    if (!body.description || !body.done) {
        throw new Error("Invalid todo item");
    }

    return todoRepository.update(request.pathParams.todoId, request.body);
}

module.exports = updateTodo;