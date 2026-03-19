console.log("Hello World")

//Primeira Etapa = Fazer o computador retornar aleatoriamente:Pedra,Papel ou Tesoura//

//Segunda Etapa = Armazenar a resposta do usuario(Pedra,Papel ou Tesoura)//

//Terceira Etapa = Estocar a pontuacao dos jogadores(computador e usuario)//

//Quarta Etapa = Realizar uma rodada,comparando a resposta dos jogadores e retornando um vencedor da rodada//

//Quinta Etapa = Fazer com que o jogo tenha 5 rodadas,e depois declarando um vencedor da competicao//

//--------------------------------------------------------------------------------------------------------------------//

//Primeira Etapa//
  let getComputerChoice = Math.floor(Math.random() * 3) + 1;
  if (getComputerChoice === 1) {
    getComputerChoice = "Rock";
}
  else if (getComputerChoice === 2) {
    getComputerChoice = "Paper";
}
  else { (getComputerChoice === 3) 
    getComputerChoice = "Scissors";
}
console.log(getComputerChoice);