function getTodos (request, todoRepository) {
    return todoRepository.all();
}

module.exports = getTodos;