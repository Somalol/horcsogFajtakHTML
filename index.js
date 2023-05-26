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
    let osszesElement = document.querySelectorAll("*");

    element.classList.toggle("dark-modeBody");

    for(let i of osszesElement)
    {
        if(i.classList.contains("a") || i.classList.contains("dobozBal") || i.classList.contains("dobozJobb") || i.classList.contains("elsoDoboz") || i.classList.contains("footer"))
        {
            i.classList.toggle("dark-modeBorder");
        }
    }
}

document.getElementById("brightnessSelector").addEventListener("click", changeBrightness);