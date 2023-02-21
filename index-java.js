//auto load
let forecastVisibility = false;

//Buttons
function ShowExtraInfo() {
    //Get elements
    //Windows
    let darkScreen = document.getElementById("dark-screen");
    let darkScreenVisibility = window.getComputedStyle(darkScreen).getPropertyValue("visibility");
    let container = document.getElementById("moji-extra-info-container");

    //Image
    let kobayashi = document.getElementById("kobayashi");

    //buttons
    let addbutton = document.getElementById("addto-button");
    let closebutton = document.getElementById("close-button");
    let kanji1 = document.getElementById("kanji1");

    //container elements
    let radical1 = document.getElementById("moji-radical1");
    let radical2 = document.getElementById("moji-radical2");
    let radical3 = document.getElementById("moji-radical3");

    //Show window
    if (darkScreenVisibility === "hidden"){
        //Show darkScreen
        darkScreen.style.visibility = "visible";
        container.style.visibility = "visible";
        container.style.display = "grid";

        //Reset transition to default values
        addbutton.style.transition = "200ms";
        closebutton.style.transition = "200ms";
        radical1.style.transition = "200ms";
        radical2.style.transition = "200ms";
        radical3.style.transition = "200ms";

        //Play animation
        darkScreen.style.animation = "fadein 350ms linear";
        container.style.animation = "extraInfoFlyIn 350ms ease-in-out";
        kobayashi.style.animation = "extraInfoFlyIn 350ms ease-in-out";
    }
    else{
        //Play animation [doesn't work]
        darkScreen.style.animation = "fadein 500ms ease-in reverse forwards";

        //Make transition zero
        addbutton.style.transition = "none";
        closebutton.style.transition = "none";
        radical1.style.transition = "none";
        radical2.style.transition = "none";
        radical3.style.transition = "none";

        //Hide darkScreen
        darkScreen.style.visibility = "hidden";
        container.style.visibility = "hidden";
        container.style.display = "none";

        //Reset animation
        darkScreen.style.animation = "none";
        container.style.animation = "none";
        kobayashi.style.animation = "none";
    }

    //Hide button [Without this, the hovered button stays on top until mouse leave]
    if (darkScreen.style.visibility === "visible"){
        //Hide original button
        kanji1.style.pointerEvents = "none";
    }
    else{
        //Show original button
        kanji1.style.pointerEvents = "visible";
    }
}

function ShowSrsInfo(){
    let darkScreen = document.getElementById("dark-screen");
    let darkScreenVisibility = getComputedStyle(darkScreen).getPropertyValue("visibility");
    let window = document.getElementById("srs-extra-info-window");
    let kobayashi = document.getElementById("kobayashi");
    let buttonBlock = document.getElementById("apprenticeBlock");

    //Show window
    if (darkScreenVisibility === "hidden"){
        darkScreen.style.visibility = "visible";
        window.style.visibility = "visible";
        window.style.display = "grid";

        //Play animation
        darkScreen.style.animation = "fadein 350ms linear";
        window.style.animation = "extraInfoFlyIn 350ms ease-in-out";
        kobayashi.style.animation = "extraInfoFlyIn 350ms ease-in-out";

        //Disable button effects
        buttonBlock.style.pointerEvents = "none";
    }
    else{
        darkScreen.style.visibility = "hidden";
        window.style.visibility = "hidden";
        window.style.display = "none";

        //enable button effect
        buttonBlock.style.pointerEvents = "visible";

        //Reset animation
        darkScreen.style.animation = "none";
        window.style.animation = "none";
        kobayashi.style.animation = "none";
    }
}

function ShowForecast(){
    ResetForecastCards();
    let forecastWindow = document.getElementsByClassName('review-forecast-container')[0];

    if (forecastVisibility === false){
        forecastVisibility = true;
        forecastWindow.style.visibility = 'visible';
        forecastWindow.style.animation = 'forecastAni 350ms ease-in-out';
    }
    else{
        forecastVisibility = false;
        forecastWindow.style.visibility = 'hidden';
        forecastWindow.style.animation = 'none';
    }
}

function ResetForecastCards(){
    let item = document.getElementsByClassName('forecast-card-grid');
    for (let i = 0; i < item.length; i += 2) {
        item[i].style.display = 'grid';
    }

    for (let i = 1; i < item.length; i += 2) {
        item[i].style.display = 'none';
    }
}
function ExpandForecastCard(cardName){
    let Grid = document.getElementsByClassName('forecast-card-grid');
    let GridVisib1 = getComputedStyle(Grid[1]).getPropertyValue('display');
    let GridVisib2 = getComputedStyle(Grid[3]).getPropertyValue('display');
    let GridVisib3 = getComputedStyle(Grid[5]).getPropertyValue('display');
    let GridVisib4 = getComputedStyle(Grid[7]).getPropertyValue('display');
    let GridVisib5 = getComputedStyle(Grid[9]).getPropertyValue('display');
    let GridVisib6 = getComputedStyle(Grid[11]).getPropertyValue('display');
    let GridVisib7 = getComputedStyle(Grid[13]).getPropertyValue('display');
    ResetForecastCards();

    switch (cardName){
        case "Mon":{
            if (GridVisib1 === 'none'){
                Grid[0].style.display = 'none';
                Grid[1].style.display = 'grid';
            }
            else{
                ResetForecastCards();
            }
            break;
        }
        case "Tue":{
            if (GridVisib2 === 'none'){
                Grid[2].style.display = 'none';
                Grid[3].style.display = 'grid';
            }
            else{
                ResetForecastCards();
            }
            break;
        }
        case "Wed":{
            if (GridVisib3 === 'none'){
                Grid[4].style.display = 'none';
                Grid[5].style.display = 'grid';
            }
            else{
                ResetForecastCards();
            }
            break;
        }
        case "Thu":{
            if (GridVisib4 === 'none'){
                Grid[6].style.display = 'none';
                Grid[7].style.display = 'grid';
            }
            else{
                ResetForecastCards();
            }
            break;
        }
        case "Fri":{
            if (GridVisib5 === 'none'){
                Grid[8].style.display = 'none';
                Grid[9].style.display = 'grid';
            }
            else{
                ResetForecastCards();
            }
            break;
        }
        case "Sat":{
            if (GridVisib6 === 'none'){
                Grid[10].style.display = 'none';
                Grid[11].style.display = 'grid';
            }
            else{
                ResetForecastCards();
            }
            break;
        }
        case "Sun":{
            if (GridVisib7 === 'none'){
                Grid[12].style.display = 'none';
                Grid[13].style.display = 'grid';
            }
            else{
                ResetForecastCards();
            }
            break;
        }
    }

}
//Messageboxes
function addto_buttonalert(){
    alert("From this button, you can add this Kanji to a custom list(s). \n" +
        "These can be practiced later under [Extra study] => [Custom Review...]. \n" +
        "In the navbar, you have a star that redirects you to your custom list(s).");
}

function customreview_alert(){
    alert("Customize your review sessions. You can pick any radical/kanji/vocab of your previously unlocked levels.\n" +
        "Categorize them. You have lots of options to filter out items. (Practice by level or class 'apprentice, guru etc'.)\n" +
        "You can also create custom lists and pick out individual items. All up to you!");
}