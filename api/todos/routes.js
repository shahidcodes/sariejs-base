module.exports = {
  get: {
    "/todos": {
      action: "Todos.todos",
      middlewares: ["auth"]
    },
    "/todo/:id": {
      action: "Todos.getTodo",
      middlewares: ["auth"]
    }
  },

  post: {
    "/todos": {
      action: "Todos.createTodo",
      middlewares: ["auth"]
    }
  }
}