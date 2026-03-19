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
         machine = "Rock";
}
       else if (machine === 2) {
         machine = "Paper";
}
       else { (machine === 3) 
         machine = "Scissors";
}
      console.log(machine);

//Segunda Etapa//
   function getHumanChoice(user){};  

   let user = prompt("Bet on one of the objects: Rock; Paper; Scissors");

       if (user === "Rock") {
         user = "Rock";

}      else if (user === "Paper") {
         user = "Paper";

}      else { (user === "Scissors")
         user = "Scissors";  
}
      console.log(user);  

