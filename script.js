class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  buzinar() {
    alert(this.modelo + " faz: BIIIII BIIIIII!");
  }
}

function atualizarPreview() {
  var marca = document.getElementById("marca").value;
  var preview = document.getElementById("preview");

  if (marca === "") {
    preview.textContent = "Digite a marca para ver o preview...";
  } else {
    preview.textContent = "Preview da marca: " + marca;
  }
}

function adicionarCarroAoPatio(carro) {
  var patio = document.getElementById("patio");

  var cartao = document.createElement("div");
  cartao.className = "carro";
  cartao.style.backgroundColor = "#e3f2fd";
  cartao.innerHTML =
    "Marca: " + carro.marca + "<br>" +
    "Modelo: " + carro.modelo + "<br>" +
    "Ano: " + carro.ano;

 
  cartao.onclick = function () {
    carro.buzinar();
  };

  cartao.onmouseover = function () {
    cartao.style.backgroundColor = "#ffeb3b";
  };
  cartao.onmouseout = function () {
    cartao.style.backgroundColor = "#e3f2fd";
  };

  patio.appendChild(cartao);
}

function fabricarCarro() {
  var marca = document.getElementById("marca").value;
  var modelo = document.getElementById("modelo").value;
  var ano = Number(document.getElementById("ano").value);

  var novoCarro = new Carro(marca, modelo, ano);
  adicionarCarroAoPatio(novoCarro);
}
