function ShowExtraInfo() {
    //Get elements
    const window = document.getElementById("moji-extra-info-window");
    const container = document.getElementById("moji-extra-info-container");

    if (window.style.visibility === "hidden"){
        //Show window
        window.style.visibility = "visible";

        //Play animation
        window.style.animation = "fadein 500ms ease";
        container.style.animation = "extraInfoFlyIn 300ms ease-in";
    }
    else{
        //Play animation
        window.style.animation = "fadein 500ms ease-in reverse forwards";

        //Hide window after animation
        window.style.visibility = "hidden";
        //Reset animation
        window.style.animation = "none";
        container.style.animation = "none";
    }
}

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