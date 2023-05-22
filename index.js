import horcsogAdatok from "./index.json" assert {"type" : "json"};

function adatokFeltoltese()
{
    let adatKep = document.getElementsByClassName("adatKep");
    let adath3 = document.getElementsByClassName("adath3");
    let adatMezo = document.getElementsByClassName("adatMezo");

    for(let i = 0; i < horcsogAdatok.length; i++)
    {
        adatKep[i].src = horcsogAdatok[i].kepUrl;
        adath3[i].innerHTML = horcsogAdatok[i].neve;
        adatMezo[i].innerHTML = horcsogAdatok[i].leiras;
    }
}

adatokFeltoltese();

function changeBrightness()
{
    let element = document.body;
    let kepek = document.getElementsByClassName("rounded");
    let dobozBal = document.getElementsByClassName("dobozBal");
    let dobozJobb = document.getElementsByClassName("dobozJobb");
    let brightnessButton = document.getElementById("brightnessSelector");

    element.classList.toggle("dark-mode");
    
    if(brightnessButton.innerHTML == "Sötét mód")
    {
        brightnessButton.innerHTML = "Világos mód";
    }

    else if(brightnessButton.innerHTML == "Világos mód")
    {
        brightnessButton.innerHTML = "Sötét mód";
    }
     

    for(let i of kepek)
    {
        if(i.style.backgroundColor == "black")
        {
            i.style.backgroundColor = "white";
        }
        
        else
        {
            i.style.backgroundColor = "black";
        }
    }

    for(let i of dobozBal)
    {
        if(i.style.borderColor == "darkgray")
        {
            i.style.borderColor = "black";
        }

        else
        {
            i.style.borderColor = "darkgray";
        }
    }

    for(let i of dobozJobb)
    {
        if(i.style.borderColor == "darkgray")
        {
            i.style.borderColor = "black";
        }

        else
        {
            i.style.borderColor = "darkgray";
        }
    }
}

document.getElementById("brightnessSelector").addEventListener("click", changeBrightness);