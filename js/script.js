function btn1() {
  var palla = {
   nome: 'palla medica',
   peso: 1
  };

  for (var k in palla) {
   document.getElementById('ex1').innerHTML += palla[k] + '<br>';
  }
  setTimeout(function () {
    palla.peso = parseInt(prompt('Inserisci il peso della palla:'));
    document.getElementById('ex1').innerHTML += 'La palla ora pesa: ' + palla.peso + 'kg';
  }, 1000);
}

function btn2() {
  var zucchine = [
    {
      tipo: 'americana',
      peso: 20,
      lunghezza: 10
    },
    {
      tipo: 'turca',
      peso: 14,
      lunghezza: 23
    },
    {
      tipo: 'egiziana',
      peso: 74,
      lunghezza: 35
    },
    {
      tipo: 'polacca',
      peso: 32,
      lunghezza: 14
    },
    {
      tipo: 'austriaca',
      peso: 21,
      lunghezza: 24
    },
    {
      tipo: 'francese',
      peso: 31,
      lunghezza: 12
    },
    {
      tipo: 'spagnola',
      peso: 31,
      lunghezza: 22
    },
    {
      tipo: 'svizzera',
      peso: 11,
      lunghezza: 31
    },
    {
      tipo: 'tedesca',
      peso: 22,
      lunghezza: 33
    },
    {
      tipo: 'italiana',
      peso: 13,
      lunghezza: 10
    }
  ];
  var peso = 0;

  for (var i = 0; i < zucchine.length; i++) {
    peso = peso + zucchine[i].peso;
  }
  document.getElementById('ex2').innerHTML = 'Le zucchine pesano: ' + peso + 'g';
}

function btn3() {
  var zucchine = [
    {
      tipo: 'americana',
      peso: 20,
      lunghezza: 10
    },
    {
      tipo: 'turca',
      peso: 14,
      lunghezza: 23
    },
    {
      tipo: 'egiziana',
      peso: 74,
      lunghezza: 35
    },
    {
      tipo: 'polacca',
      peso: 32,
      lunghezza: 14
    },
    {
      tipo: 'austriaca',
      peso: 21,
      lunghezza: 24
    },
    {
      tipo: 'francese',
      peso: 31,
      lunghezza: 12
    },
    {
      tipo: 'spagnola',
      peso: 31,
      lunghezza: 22
    },
    {
      tipo: 'svizzera',
      peso: 11,
      lunghezza: 31
    },
    {
      tipo: 'tedesca',
      peso: 22,
      lunghezza: 33
    },
    {
      tipo: 'italiana',
      peso: 13,
      lunghezza: 10
    }
  ];
  var corte = [];
  var pesoCorte = 0;
  var lunghe = [];
  var pesoLunghe = 0;

  for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza <= 15) {
      corte.push(zucchine[i]);
      pesoCorte = pesoCorte + zucchine[i].peso;
    }
    else {
      lunghe.push(zucchine[i]);
      pesoLunghe = pesoLunghe + zucchine[i].peso;
    }
  }
  document.getElementById('ex3').innerHTML = 'Le zucchine corte pesano: ' + pesoCorte + ', quelle lunghe: ' + pesoLunghe;
}
