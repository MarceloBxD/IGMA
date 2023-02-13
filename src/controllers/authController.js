const express = require("express");

const validateCpf = require("../helpers/helpers");

const db = require("../database");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, cpf, nasc } = req.body;

  //   Verificando se os campos estão preenchidos
  if (!name || !cpf || !nasc) return res.status(400).send("Missing data");

  //   Verificando se os campos estão preenchidos corretamente
  if (cpf.length != 11) return res.status(400).send("Invalid CPF");
  if (nasc.length != 10) return res.status(400).send("Invalid date");

  //   Insere os dados no banco de dados
  let q = "INSERT INTO users (name, cpf, nasc) VALUES (?, ?, ?)";
  db.query(q, [name, cpf, nasc], (err, result) => {
    if (err) throw err;
    else {
      let response = validateCpf(cpf);

      //   Verificando se o cpf é válido ou não
      if (response == false) return res.status(400).send("Invalid CPF");
      else if (response == true)
        return res.status(200).send("Valid CPF - User registered");
    }
  });
});

module.exports = (app) => app.use("/auth", router);
