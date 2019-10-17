module.exports = async (req, res, next) => {
  console.log("from middleware");
  next();
}