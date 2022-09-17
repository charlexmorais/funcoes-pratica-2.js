

  function cpfEValido(parametroCPF) {
    if (parametroCPF.length===11) {
      return true;
    } else {
      return false;
    }
    


  }
  function aplicarMascaraCPF(parametroCPF) {
    const d = parametroCPF.split("");
    
    return (
      d[0] +
      d[1] +
      d[2] +
      "." +
      d[3] +
      d[4] +
      d[5] +
      "." +
      d[6] +
      d[7] +
      d[8] +
      "-" +
      d[9] +
      d[10]
    );
  }

    const cpfs = [];
    for (let index = 0; index < 5; index++) {  
      let cpfDigitado = prompt("Digite cpf " + (index + 1));
      if (cpfEValido(cpfDigitado)) {
        let cpfComMascara = aplicarMascaraCPF(cpfDigitado); 
        alert("Seu CPF " + cpfComMascara + "é válido.");
    } else {
      alert("cpf inválido");
    }
  
    }

