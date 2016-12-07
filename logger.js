module.exports = function (req, res, next) {
  console.log(`${req.ip}\t${req.originalUrl}`);
  next();
};