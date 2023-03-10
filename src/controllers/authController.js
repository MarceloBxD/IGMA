const express = require("express");

// Função criada para validar o CPF
const validateCpf = require("../middlewares");

// Conexão com o banco de dados
const db = require("../database");

// Para criação de rotas
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, cpf, nasc } = req.body;

  if (cpf.length == 11) {
    var cpf_new =
      cpf.substring(0, 3) +
      "." +
      cpf.substring(3, 6) +
      "." +
      cpf.substring(6, 9) +
      "-" +
      cpf.substring(9, 11);
  } else {
    cpf_new = cpf;
  }

  //   Verificando se os campos estão preenchidos
  if (!name || !cpf || !nasc) return res.status(400).send("Missing data");

  if (nasc.length != 10 || nasc[4] != "-" || nasc[7] != "-")
    return res.status(400).send("Invalid date - Use: yyyy--mm-dd");

  //  Verificando se o cpf é válido ou não
  var response = validateCpf(cpf_new);

  if (response) {
    let q = "SELECT * FROM users WHERE cpf = ?";

    db.query(q, [cpf_new], (err, result) => {
      if (err) throw err;
      else {
        if (result.length > 0) {
          return res.status(400).send("CPF already registered");
        } else {
          let q = "INSERT INTO users (name, cpf, nasc) VALUES (?, ?, ?)";
          db.query(q, [name, cpf_new, nasc], (err, result) => {
            if (err) throw err;
            else {
              res.send("User registered with Success! - CPF: " + cpf_new);
            }
          });
        }
      }
    });
  } else {
    return res.status(422).send("Invalid CPF - Does not exist");
  }
});

router.get("/users/", async (req, res) => {
  let q = "SELECT * FROM users";

  db.query(q, (err, result) => {
    if (err) throw err;
    else {
      // paginacao
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const results = {};

      if (endIndex < result.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }

      results.results = result.slice(startIndex, endIndex);
      return res.status(200).send(results);
    }
  });
});

router.get("/users/:cpf", async (req, res) => {
  const { cpf } = req.params;

  let q = "SELECT * FROM users WHERE cpf = ?";

  db.query(q, [cpf], (err, result) => {
    if (err) throw err;
    else {
      return res.status(200).send(result);
    }
  });
});

module.exports = (app) => app.use("/auth", router);
