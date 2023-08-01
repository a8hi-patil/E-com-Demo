
const con = require("../config/dbConnectionSQL");
const getAllProducts = async (req, res) => {
  await con.query("select * from products", (err, rows) => {
    res.status(200).json(rows);
  });
};

const createProduct = async (req, res) => {
  console.log("Body is Create ", req.body);
  const { name, price, company,category } = req.body;

  if (!name || !company || !price || !category) {
    res.status(400);
    throw new Error("All fields are mandatory");
  } else {
    console.log(`INSERT INTO products (name,company,price,category) VALUES ('${name}','${company}',${price},'${category}')`)
    await con.query(
      `INSERT INTO products (name,company,price,category) VALUES ('${name}','${company}',${price},'${category}')`,
      (err, rows) => {
        res.status(200).json(rows);
      }
    );
  }
};

const updateProduct = async (req, res) => {
//   console.log(req.params);

  const { name, price, company,category } = req.body;

  await con.query(
    `UPDATE products SET name = '${name}',company = '${company}',price = '${price}',category = '${category}' WHERE ID = ${req.params.id}`,
    (err, rows) => {
      if (!err) {
        res.send("okay");
      }
    }
  );
};

const deletProduct = async (req, res) => {
  await con.query(
    `DELETE FROM products WHERE id=${req.params.id}`,
    (err, rows) => {
      if (!err) {
        res.status(200).send(`deleted ${req.params.id}`);
      }
    }
  );
};

const getOneContact = async (req, res) => {
    // console.log("Single",req.params.id)
  await con.query(
    `select * from products where id=${req.params.id}`,
    (err, rows) => {
      if (err) {
        res.status(400);
        throw new Error("All fields are mandatory");
      } else {
        res.status(200).json(rows);
      }
    }
  );
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deletProduct,
  getOneContact,
};
