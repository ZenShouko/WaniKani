function ShowExtraInfo() {
    //Get elements
    let window = document.getElementById("moji-extra-info-window");
    let container = document.getElementById("moji-extra-info-container");
    let frog = document.getElementById("frog");
    let kobayashi = document.getElementById("kobayashi");

    if (window.style.visibility === "hidden"){
        //Show window
        window.style.visibility = "visible";

        //Play animation
        window.style.animation = "fadein 350ms linear";
        container.style.animation = "extraInfoFlyIn 350ms ease-in-out";
        frog.style.animation = "extraInfoFlyIn 350ms ease-in-out";
        kobayashi.style.animation = "extraInfoFlyIn 350ms ease-in-out";
    }
    else{
        //Play animation
        window.style.animation = "fadein 500ms ease-in reverse forwards";

        //Hide window
        window.style.visibility = "hidden";

        //Reset animation
        window.style.animation = "none";
        container.style.animation = "none";
        frog.style.animation = "none";
        kobayashi.style.animation = "none";
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