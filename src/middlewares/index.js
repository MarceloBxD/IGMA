const validateCpf = (cpf) => {
  let firstDigit = 0;
  let secondDigit = 0;

  //   Declarando um array vazio para os cpf's
  let cpf_array = [];

  //   Verificando se o cpf possui pontos e hífen, e caso tenha substituindo-os por nada
  for (let i = 0; i < cpf.length; i++) {
    if (cpf[i] == "." || cpf[i] == "-") {
      cpf = cpf.replace(cpf[i], "");
    }

    // Cálculo do primeiro dígito
    let sum = 0;
    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    // console.log("Soma: ", sum);

    let rest = sum % 11;
    // console.log(rest);

    if (rest < 2) {
      firstDigit = 0;
    } else {
      firstDigit = 11 - rest;
    }
    // console.log("Primeiro Dígito: ", firstDigit);

    // Cálculo do segundo dígito
    sum = 0;

    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);

    rest = sum % 11;

    if (rest < 2) {
      secondDigit = 0;
    } else {
      secondDigit = 11 - rest;
    }
  }

  let cpf_verified = cpf.substring(0, 9) + firstDigit + secondDigit;
  // console.log("CPF verificado: ", cpf_verified);

  cpf_array.push(cpf);
  cpf_array.push(cpf_verified);

  //   console.log("Array: ", cpf_array);
  if (cpf_array[0] == cpf_array[1]) {
    return true;
  } else {
    return false;
  }
};
// validateCpf("18617638400");

module.exports = validateCpf;
