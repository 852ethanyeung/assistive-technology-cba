$(document).ready(() => {
    $("#websiteIndexPageTitlesContainer").css("padding-block", ($("html").clientWidth - $("h1").css("width")) / 2);

    $.getScript("scripts/functions/dependent-functions/hacker-text-effect.js").done(() => {
        /* Hacker text effect (it plays once when loaded) */

        let hoverEvent = new Event("mouseover");

        setTimeout(() => {
            document.querySelector("h1").dispatchEvent(hoverEvent);
            document.querySelector("h2").dispatchEvent(hoverEvent);
        }, 500);

        $("h1").on({
            mouseenter: (event) => {
                hackerTextEffect(event.target);
            },
            click: (event) => {
                hackerTextEffect(event.target);
            }
        });

        $("h2").on({
            mouseenter: (event) => {
                hackerTextEffect(event.target);
            },
            click: (event) => {
                hackerTextEffect(event.target);
            }
        });
    }).fail((jqxhr) => {
        console.log(jqxhr.status);
    });
});