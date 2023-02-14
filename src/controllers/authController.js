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
    cpf_new =
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

  if (nasc.length != 10) return res.status(400).send("Invalid date");

  //   Insere os dados no banco de dados
  let q = "INSERT INTO users (name, cpf, nasc) VALUES (?, ?, ?)";
  db.query(q, [name, cpf_new, nasc], (err, result) => {
    let response = validateCpf(cpf);

    if (response) {
      return res
        .status(200)
        .send("User registered with Success! - CPF: " + cpf);
    }

    if (err) throw err;
    else {
      //   Verificando se o cpf é válido ou não
      let response = validateCpf(cpf);

      if (response == false) return res.status(422).send("Invalid CPF");
      else {
        res.send(result);
      }
    }
  });
});

router.get("/users", async (req, res) => {
  let q = "SELECT * FROM users";

  db.query(q, (err, result) => {
    if (err) throw err;
    else {
      return res.status(200).send(result);
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
