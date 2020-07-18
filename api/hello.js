// const db = require("../lib/db");
// const escape = require("sql-template-strings");

module.exports = async (req, res) => {
  res.status(200).json({
    message: `Hello ${req.query.name}`,
  });
};
