function ShowExtraInfo() {
    //Get elements
    let window = document.getElementById("moji-extra-info-window");
    let container = document.getElementById("moji-extra-info-container");
    let kobayashi = document.getElementById("kobayashi");
    let addbutton = document.getElementById("addto-button");
    let closebutton = document.getElementById("close-button");
    let radical1 = document.getElementById("moji-radical1");
    let radical2 = document.getElementById("moji-radical2");
    let radical3 = document.getElementById("moji-radical3");
    let kanji1 = document.getElementById("kanji1");

    if (window.style.visibility === "hidden"){
        //Show window
        window.style.visibility = "visible";


        //Reset transition to default values
        addbutton.style.transition = "200ms";
        closebutton.style.transition = "200ms";
        radical1.style.transition = "200ms";
        radical2.style.transition = "200ms";
        radical3.style.transition = "200ms";

        //Play animation
        window.style.animation = "fadein 350ms linear";
        container.style.animation = "extraInfoFlyIn 350ms ease-in-out";
        kobayashi.style.animation = "extraInfoFlyIn 350ms ease-in-out";
    }
    else{
        //Play animation
        window.style.animation = "fadein 500ms ease-in reverse forwards";

        //Make transition zero
        addbutton.style.transition = "none";
        closebutton.style.transition = "none";
        radical1.style.transition = "none";
        radical2.style.transition = "none";
        radical3.style.transition = "none";

        //Hide window
        window.style.visibility = "hidden";

        //Reset animation
        window.style.animation = "none";
        container.style.animation = "none";
        kobayashi.style.animation = "none";
    }

    if (window.style.visibility === "visible"){
        //Hide original button
        kanji1.style.transition = "none";
        kanji1.style.visibility = "hidden";
    } else{
        //Show original button
        kanji1.style.visibility = "visible";
        kanji1.style.transition = "300ms";
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