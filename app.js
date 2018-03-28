const
    ApiBuilder = require("claudia-api-builder"),
    api = new ApiBuilder(),
    getTodos = require("./handlers/get-todos");

api.get("/", function () {
    return getTodos();
});

module.exports = api;