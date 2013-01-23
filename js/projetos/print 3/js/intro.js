// var idade = prompt("Digite sua idade");
//
// if(parseInt(idade) > 20) {
//   console.log("Você é velho");
// }
// console.log(2012 - idade);

var carro = {
  marca : "Fiat",
  cor : "Branco",
  print : function(){
    console.log("É um " + this.marca + " " + this.cor);
  }
}
