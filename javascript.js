console.log("Hello World")

//Primeira Etapa = Fazer o computador retornar aleatoriamente:Pedra,Papel ou Tesoura//

//Segunda Etapa = Armazenar a resposta do usuario(Pedra,Papel ou Tesoura)//

//Terceira Etapa = Estocar a pontuacao dos jogadores(computador e usuario)//

//Quarta Etapa = Realizar uma rodada,comparando a resposta dos jogadores e retornando um vencedor da rodada//

//Quinta Etapa = Fazer com que o jogo tenha 5 rodadas,e depois declarando um vencedor da competicao//

//--------------------------------------------------------------------------------------------------------------------//

//Primeira Etapa//
   function getComputerChoice(){

   let machine = Math.floor(Math.random() * 3) + 1;
       if (machine === 1) {
         return "ROCK";
}
       else if (machine === 2) {
         return "PAPER";
}
       else { (machine === 3) 
         return "SCISSORS";
}
console.log(machine);

}

//Segunda Etapa//
     function getHumanChoice(){ 
        let user = prompt("Bet on one of the objects: Rock; Paper; Scissors");
        
        user = user.toUpperCase();        

       if (user === "ROCK") {
        return "ROCK";

}      else if (user === "PAPER") {
         return "PAPER";

}      else { (user === "SCISSORS")
         return "SCISSORS";  
}
   
console.log(user);  
}
//Terceira Etapa//
   let humanScore = 0;
   let computerScore = 0;

//Quarta Etapa//
  
    let roundWinner = null;

    function playRound(humanSelection, computerSelection) {
       if (humanSelection === computerSelection) {
            roundWinner = 'tie'
}
       else if (
          (humanSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
          (humanSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
          (humanSelection === 'PAPER' && computerSelection === 'ROCK')
          ) {
            humanScore++
            roundWinner = 'player'
}
       else if (
          (computerSelection === 'ROCK' && humanSelection === 'SCISSORS') ||
          (computerSelection === 'SCISSORS' && humanSelection === 'PAPER') ||
          (computerSelection === 'PAPER' && humanSelection === 'ROCK')
          ) {
           computerScore++
           roundWinner = 'computer'
}

       if (roundWinner === 'tie') {
          alert("Tie!");
}
       else if (roundWinner === 'player') {
          alert("You Win!");
}
       else { (roundWinner === 'computer') 
          alert("You Lose!");
}

}


// Quinta Etapa
for (let i = 1; i < 5; i++) {

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice(); 

    playRound(humanSelection, computerSelection);
}

console.log(humanScore);
console.log(computerScore);

// resultado

if (humanScore > computerScore) {
    alert("Human Wins!");
}
else if (computerScore > humanScore) {
    alert("Computer Wins!");
}
else {
    alert("It's a tie!");
}


     