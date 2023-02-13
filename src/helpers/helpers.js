// const validateCpf = (cpf) => {
//   // Verificando se o cpf possui pontos e hífen
//   let containsDotsAndHyphen = cpf.includes(".") && cpf.includes("-");

//   //   Removendo os pontos e hífen do cpf caso tenha
//   if (containsDotsAndHyphen) {
//     cpf = cpf.replace(".", "");
//     cpf = cpf.replace("-", "");
//     return cpf;
//   }

//   if (cpf.length != 11 || cpf.length != 14) return false;
//   if (cpf == "00000000000") return false;
//   if (cpf == "11111111111") return false;
//   if (cpf == "22222222222") return false;
//   if (cpf == "33333333333") return false;
//   if (cpf == "44444444444") return false;
//   if (cpf == "55555555555") return false;
//   if (cpf == "66666666666") return false;
//   if (cpf == "77777777777") return false;
//   if (cpf == "88888888888") return false;
//   if (cpf == "99999999999") return false;

//   let sum = 0;

//   for (let i = 1; i <= 9; i++)
//     sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
//   let rest = (sum * 10) % 11;

//   if (rest == 10 || rest == 11) rest = 0;
//   if (rest != parseInt(cpf.substring(9, 10))) return false;

//   sum = 0;
//   for (let i = 1; i <= 10; i++)
//     sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
//   rest = (sum * 10) % 11;

//   if (rest == 10 || rest == 11) rest = 0;
//   if (rest != parseInt(cpf.substring(10, 11))) return false;
//   return true;
// };

const validateCpf = (cpf) => {
  let firstDigit = 0;
  let secondDigit = 0;

  //   Declarando um array vazio para os cpf's
  let cpf_array = [];

  //   Verificando se o cpf possui pontos e hífen, e caso tenha substituindo-os por nada
  for (let i = 0; i < cpf.length; i++) {
    let sum = 0;
    if (cpf[i] == "." || cpf[i] == "-") {
      cpf = cpf.replace(cpf[i], "");
    }
    cpf_array.push(cpf);

    // Cálculo do primeiro dígito

    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    // console.log("Soma: ", sum);

    let rest = sum % 11;
    console.log(rest);

    if (rest < 2) {
      firstDigit = 0;
    } else {
      firstDigit = 11 - rest;
    }

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
  cpf_array.push(cpf_verified);
  console.log(cpf_array);
  if (cpf_array[0] == cpf_array[1]) {
    return true;
  } else {
    return false;
  }
};

validateCpf("191.435.457-50");

module.exports = validateCpf;
