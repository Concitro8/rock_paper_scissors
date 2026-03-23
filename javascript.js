console.log("Hello World")

//Primeira Etapa = Fazer o computador retornar aleatoriamente:Pedra,Papel ou Tesoura//

//Segunda Etapa = Armazenar a resposta do usuario(Pedra,Papel ou Tesoura)//

//Terceira Etapa = Estocar a pontuacao dos jogadores(computador e usuario)//

//Quarta Etapa = Realizar uma rodada,comparando a resposta dos jogadores e retornando um vencedor da rodada//

//Quinta Etapa = Fazer com que o jogo tenha 5 rodadas,e depois declarando um vencedor da competicao//

//--------------------------------------------------------------------------------------------------------------------//

//Primeira Etapa//
   function getComputerChoice(machine){};

   let machine = Math.floor(Math.random() * 3) + 1;
       if (machine === 1) {
         machine = "ROCK";
}
       else if (machine === 2) {
         machine = "PAPER";
}
       else { (machine === 3) 
         machine = "SCISSORS";
}
console.log(machine);

//Segunda Etapa//
     function getHumanChoice(user){};  
        let user = prompt("Bet on one of the objects: Rock; Paper; Scissors");

       if (user.toUpperCase() === "ROCK") {
        user = "ROCK";

}      else if (user.toUpperCase() === "PAPER") {
         user = "PAPER";

}      else { (user.toUpperCase() === "SCISSORS")
         user = "SCISSORS";  
}
   
console.log(user);  
    
//Terceira Etapa//
   let humanScore = 0;
   let computerScore = 0;

//Quarta Etapa//
  
    let roundWinner = "";

    function playRound(humanChoice, computerChoice) {
       if (humanSelection === computerSelection) {
            roundWinner = 'tie'
}
       if (
          (humanSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
          (humanSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
          (humanSelection === 'PAPER' && computerSelection === 'ROCK')
          ) {
            humanScore++
            roundWinner = 'player'
}
       if (
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


    const humanSelection = user;
    const computerSelection = machine;

    playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);   


//Quinta Etapa //
   if (humanScore === 5) {
     alert("Human Wins!");
} 
   else if (computerScore === 5) {
     alert("Computer Wins!")
}   


     