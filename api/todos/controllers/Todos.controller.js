module.exports = {
  todos(req, res) {
    console.log(req.body)
    res.json({ ok: 1 })
  },

  getTodo(req, res) {
    console.log("get todo")
    res.json({ ok: 1 })
  }
}