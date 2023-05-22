let hamsterScore = 0;
let playerScore = 0;

//random generálása a hörcsögnek
function randomHori()
{
    let randomNum1 = Math.floor(Math.random() * 10);

    if(randomNum1 % 3 == 0)
    {
        return "Kő";
    }

    else if(randomNum1 % 3 == 1)
    {
        return "Papír";
    }

    else
    {
        return "Olló";
    }
}

function scoreCalculate(targy)
{
    let scores = document.getElementById("scores");
    let yourChoice = document.getElementById("yourChoice");
    let hamsterChoice = document.getElementById("hamsterChoice");

    yourChoice.innerHTML = targy; 
    hamsterChoice.innerHTML = randomHori();

    if((hamsterChoice.innerHTML == "Kő" && targy == "Olló") || (hamsterChoice.innerHTML == "Papír" && targy == "Kő") || (hamsterChoice.innerHTML == "Olló" && targy == "Papír"))
    {
        hamsterScore++;
    }

    else if(hamsterChoice.innerHTML != targy)
    {
        playerScore++;
    }

    let vegsoEredmeny = playerScore + " : " + hamsterScore;

    scores.innerHTML = vegsoEredmeny;
}