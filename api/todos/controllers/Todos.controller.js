module.exports = {
  todos(req, res, next) {
    Todos.find().exec().then(res.json.bind(res)).catch(next)
  },

  getTodo(req, res) {
    console.log("get todo")
    res.json({ ok: 1 })
  },

  createTodo(req, res, next) {
    let body = req.body;
    Todos.create(body).then(success => {
      res.json(success)
    })
      .catch(err => {
        next(err);
      })
  }
}