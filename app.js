const ApiBuilder = require("claudia-api-builder"),
    api = new ApiBuilder();

api.get("/", function () {
    return [
        {
            done: false,
            description: "Tee jotain"
        },
        {
            done: false,
            description: "Tee lisää jotain"
        }
    ]
});

module.exports = api;